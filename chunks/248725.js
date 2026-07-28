"use strict";
n.d(t, { KZ: () => u, Lf: () => l, YD: () => o, cX: () => p, oE: () => i });
var r = n(582128);
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
    a = { ...i, customError: !0, valid: !1 },
    o = { isInvalid: !1, validationDetails: i, validationErrors: [] },
    s = (0, r.createContext)({}),
    l = "__formValidationState" + Date.now();
function u(e) {
    if (e[l]) {
        let {
            realtimeValidation: t,
            displayValidation: n,
            updateValidation: r,
            resetValidation: i,
            commitValidation: a,
        } = e[l];
        return {
            realtimeValidation: t,
            displayValidation: n,
            updateValidation: r,
            resetValidation: i,
            commitValidation: a,
        };
    }
    return (function (e) {
        let {
            isInvalid: t,
            validationState: n,
            name: i,
            value: l,
            builtinValidation: u,
            validate: p,
            validationBehavior: h = "aria",
        } = e;
        n && (t || (t = "invalid" === n));
        let m = void 0 !== t ? { isInvalid: t, validationErrors: [], validationDetails: a } : null,
            g = (0, r.useMemo)(
                () =>
                    p && null != l
                        ? d(
                              (function (e, t) {
                                  if ("function" == typeof e) {
                                      let n = e(t);
                                      if (n && "boolean" != typeof n) return c(n);
                                  }
                                  return [];
                              })(p, l),
                          )
                        : null,
                [p, l],
            );
        (null == u ? void 0 : u.validationDetails.valid) && (u = void 0);
        let v = (0, r.useContext)(s),
            y = (0, r.useMemo)(() => (i ? (Array.isArray(i) ? i.flatMap((e) => c(v[e])) : c(v[i])) : []), [v, i]),
            [b, _] = (0, r.useState)(v),
            [w, x] = (0, r.useState)(!1);
        v !== b && (_(v), x(!1));
        let E = (0, r.useMemo)(() => d(w ? [] : y), [w, y]),
            S = (0, r.useRef)(o),
            [k, T] = (0, r.useState)(o),
            C = (0, r.useRef)(o),
            [P, A] = (0, r.useState)(!1);
        return (
            (0, r.useEffect)(() => {
                if (!P) return;
                A(!1);
                let e = g || u || S.current;
                f(e, C.current) || ((C.current = e), T(e));
            }),
            {
                realtimeValidation: m || E || g || u || o,
                displayValidation: "native" === h ? m || E || k : m || E || g || u || k,
                updateValidation(e) {
                    "aria" !== h || f(k, e) ? (S.current = e) : T(e);
                },
                resetValidation() {
                    f(o, C.current) || ((C.current = o), T(o)), "native" === h && A(!1), x(!0);
                },
                commitValidation() {
                    "native" === h && A(!0), x(!0);
                },
            }
        );
    })(e);
}
function c(e) {
    return e ? (Array.isArray(e) ? e : [e]) : [];
}
function d(e) {
    return e.length ? { isInvalid: !0, validationErrors: e, validationDetails: a } : null;
}
function f(e, t) {
    return (
        e === t ||
        (!!e &&
            !!t &&
            e.isInvalid === t.isInvalid &&
            e.validationErrors.length === t.validationErrors.length &&
            e.validationErrors.every((e, n) => e === t.validationErrors[n]) &&
            Object.entries(e.validationDetails).every(([e, n]) => t.validationDetails[e] === n))
    );
}
function p(...e) {
    let t = new Set(),
        n = !1,
        r = { ...i };
    for (let i of e) {
        for (let e of i.validationErrors) t.add(e);
        for (let e in (n || (n = i.isInvalid), r)) r[e] || (r[e] = i.validationDetails[e]);
    }
    return (r.valid = !n), { isInvalid: n, validationErrors: [...t], validationDetails: r };
}
