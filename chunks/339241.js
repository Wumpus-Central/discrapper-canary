"use strict";
n.d(t, { KZ: () => u, Lf: () => l, YD: () => a, cX: () => f, oE: () => i });
var r = n(64700);
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
    s = { ...i, customError: !0, valid: !1 },
    a = { isInvalid: !1, validationDetails: i, validationErrors: [] },
    o = (0, r.createContext)({}),
    l = "__formValidationState" + Date.now();
function u(e) {
    if (e[l]) {
        let {
            realtimeValidation: t,
            displayValidation: n,
            updateValidation: r,
            resetValidation: i,
            commitValidation: s,
        } = e[l];
        return {
            realtimeValidation: t,
            displayValidation: n,
            updateValidation: r,
            resetValidation: i,
            commitValidation: s,
        };
    }
    return (function (e) {
        let {
            isInvalid: t,
            validationState: n,
            name: i,
            value: l,
            builtinValidation: u,
            validate: f,
            validationBehavior: E = "aria",
        } = e;
        n && (t || (t = "invalid" === n));
        let h = void 0 !== t ? { isInvalid: t, validationErrors: [], validationDetails: s } : null,
            p = (0, r.useMemo)(
                () =>
                    f && null != l
                        ? c(
                              (function (e, t) {
                                  if ("function" == typeof e) {
                                      let n = e(t);
                                      if (n && "boolean" != typeof n) return d(n);
                                  }
                                  return [];
                              })(f, l),
                          )
                        : null,
                [f, l],
            );
        (null == u ? void 0 : u.validationDetails.valid) && (u = void 0);
        let m = (0, r.useContext)(o),
            g = (0, r.useMemo)(() => (i ? (Array.isArray(i) ? i.flatMap((e) => d(m[e])) : d(m[i])) : []), [m, i]),
            [A, I] = (0, r.useState)(m),
            [T, S] = (0, r.useState)(!1);
        m !== A && (I(m), S(!1));
        let y = (0, r.useMemo)(() => c(T ? [] : g), [T, g]),
            N = (0, r.useRef)(a),
            [O, R] = (0, r.useState)(a),
            v = (0, r.useRef)(a),
            [C, b] = (0, r.useState)(!1);
        return (
            (0, r.useEffect)(() => {
                if (!C) return;
                b(!1);
                let e = p || u || N.current;
                _(e, v.current) || ((v.current = e), R(e));
            }),
            {
                realtimeValidation: h || y || p || u || a,
                displayValidation: "native" === E ? h || y || O : h || y || p || u || O,
                updateValidation(e) {
                    "aria" !== E || _(O, e) ? (N.current = e) : R(e);
                },
                resetValidation() {
                    _(a, v.current) || ((v.current = a), R(a)), "native" === E && b(!1), S(!0);
                },
                commitValidation() {
                    "native" === E && b(!0), S(!0);
                },
            }
        );
    })(e);
}
function d(e) {
    return e ? (Array.isArray(e) ? e : [e]) : [];
}
function c(e) {
    return e.length ? { isInvalid: !0, validationErrors: e, validationDetails: s } : null;
}
function _(e, t) {
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
function f(...e) {
    let t = new Set(),
        n = !1,
        r = { ...i };
    for (let i of e) {
        for (let e of i.validationErrors) t.add(e);
        for (let e in (n || (n = i.isInvalid), r)) r[e] || (r[e] = i.validationDetails[e]);
    }
    return (r.valid = !n), { isInvalid: n, validationErrors: [...t], validationDetails: r };
}
