"use strict";
r.d(t, { KZ: () => u, Lf: () => l, YD: () => a, cX: () => d, oE: () => o });
var n = r(582128);
let o = {
        badInput: !1,
        customError: !1,
        patternMismatch: !1,
        rangeOverflow: !1,
        rangeUnderflow: !1,
        stepMismatch: !1,
        tooLong: !1,
        tooShort: !1,
        typeMismatch: !1,
        valueMissing: !1,
        valid: !0,
    },
    i = { ...o, customError: !0, valid: !1 },
    a = { isInvalid: !1, validationDetails: o, validationErrors: [] },
    s = (0, n.createContext)({}),
    l = "__formValidationState" + Date.now();
function u(e) {
    if (e[l]) {
        let {
            realtimeValidation: t,
            displayValidation: r,
            updateValidation: n,
            resetValidation: o,
            commitValidation: i,
        } = e[l];
        return {
            realtimeValidation: t,
            displayValidation: r,
            updateValidation: n,
            resetValidation: o,
            commitValidation: i,
        };
    }
    return (function (e) {
        let {
            isInvalid: t,
            validationState: r,
            name: o,
            value: l,
            builtinValidation: u,
            validate: d,
            validationBehavior: h = "aria",
        } = e;
        r && (t || (t = "invalid" === r));
        let m = void 0 !== t ? { isInvalid: t, validationErrors: [], validationDetails: i } : null,
            v = (0, n.useMemo)(
                () =>
                    d && null != l
                        ? f(
                              (function (e, t) {
                                  if ("function" == typeof e) {
                                      let r = e(t);
                                      if (r && "boolean" != typeof r) return c(r);
                                  }
                                  return [];
                              })(d, l),
                          )
                        : null,
                [d, l],
            );
        (null == u ? void 0 : u.validationDetails.valid) && (u = void 0);
        let y = (0, n.useContext)(s),
            g = (0, n.useMemo)(() => (o ? (Array.isArray(o) ? o.flatMap((e) => c(y[e])) : c(y[o])) : []), [y, o]),
            [b, w] = (0, n.useState)(y),
            [_, S] = (0, n.useState)(!1);
        y !== b && (w(y), S(!1));
        let x = (0, n.useMemo)(() => f(_ ? [] : g), [_, g]),
            E = (0, n.useRef)(a),
            [k, C] = (0, n.useState)(a),
            T = (0, n.useRef)(a),
            [M, P] = (0, n.useState)(!1);
        return (
            (0, n.useEffect)(() => {
                if (!M) return;
                P(!1);
                let e = v || u || E.current;
                p(e, T.current) || ((T.current = e), C(e));
            }),
            {
                realtimeValidation: m || x || v || u || a,
                displayValidation: "native" === h ? m || x || k : m || x || v || u || k,
                updateValidation(e) {
                    "aria" !== h || p(k, e) ? (E.current = e) : C(e);
                },
                resetValidation() {
                    p(a, T.current) || ((T.current = a), C(a)), "native" === h && P(!1), S(!0);
                },
                commitValidation() {
                    "native" === h && P(!0), S(!0);
                },
            }
        );
    })(e);
}
function c(e) {
    return e ? (Array.isArray(e) ? e : [e]) : [];
}
function f(e) {
    return e.length ? { isInvalid: !0, validationErrors: e, validationDetails: i } : null;
}
function p(e, t) {
    return (
        e === t ||
        (!!e &&
            !!t &&
            e.isInvalid === t.isInvalid &&
            e.validationErrors.length === t.validationErrors.length &&
            e.validationErrors.every((e, r) => e === t.validationErrors[r]) &&
            Object.entries(e.validationDetails).every(([e, r]) => t.validationDetails[e] === r))
    );
}
function d(...e) {
    let t = new Set(),
        r = !1,
        n = { ...o };
    for (let o of e) {
        for (let e of o.validationErrors) t.add(e);
        for (let e in (r || (r = o.isInvalid), n)) n[e] || (n[e] = o.validationDetails[e]);
    }
    return (n.valid = !r), { isInvalid: r, validationErrors: [...t], validationDetails: n };
}
