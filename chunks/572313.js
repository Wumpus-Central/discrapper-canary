"use strict";
r.d(t, { KZ: () => u, Lf: () => l, YD: () => a, cX: () => p, oE: () => i });
var n = r(582128);
let i = {
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
    o = { ...i, customError: !0, valid: !1 },
    a = { isInvalid: !1, validationDetails: i, validationErrors: [] },
    s = (0, n.createContext)({}),
    l = "__reactAriaFormValidationState";
function u(e) {
    if (e[l]) {
        let {
            realtimeValidation: t,
            displayValidation: r,
            updateValidation: n,
            resetValidation: i,
            commitValidation: o,
        } = e[l];
        return {
            realtimeValidation: t,
            displayValidation: r,
            updateValidation: n,
            resetValidation: i,
            commitValidation: o,
        };
    }
    return (function (e) {
        let {
            isInvalid: t,
            validationState: r,
            name: i,
            value: l,
            builtinValidation: u,
            validate: p,
            validationBehavior: h = "aria",
        } = e;
        r && (t ||= "invalid" === r);
        let m = void 0 !== t ? { isInvalid: t, validationErrors: [], validationDetails: o } : null,
            v = (0, n.useMemo)(
                () =>
                    p && null != l
                        ? f(
                              (function (e, t) {
                                  if ("function" == typeof e) {
                                      let r = e(t);
                                      if (r && "boolean" != typeof r) return c(r);
                                  }
                                  return [];
                              })(p, l),
                          )
                        : null,
                [p, l],
            );
        u?.validationDetails.valid && (u = void 0);
        let y = (0, n.useContext)(s),
            g = (0, n.useMemo)(() => (i ? (Array.isArray(i) ? i.flatMap((e) => c(y[e])) : c(y[i])) : []), [y, i]),
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
                d(e, T.current) || ((T.current = e), C(e));
            }),
            {
                realtimeValidation: m || x || v || u || a,
                displayValidation: "native" === h ? m || x || k : m || x || v || u || k,
                updateValidation(e) {
                    "aria" !== h || d(k, e) ? (E.current = e) : C(e);
                },
                resetValidation() {
                    d(a, T.current) || ((T.current = a), C(a)), "native" === h && P(!1), S(!0);
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
    return e.length ? { isInvalid: !0, validationErrors: e, validationDetails: o } : null;
}
function d(e, t) {
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
function p(...e) {
    let t = new Set(),
        r = !1,
        n = { ...i };
    for (let i of e) {
        for (let e of i.validationErrors) t.add(e);
        for (let e in ((r ||= i.isInvalid), n)) n[e] ||= i.validationDetails[e];
    }
    return (n.valid = !r), { isInvalid: r, validationErrors: [...t], validationDetails: n };
}
