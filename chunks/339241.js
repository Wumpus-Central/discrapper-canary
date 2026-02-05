"use strict";
n.d(t, { KZ: () => u, Lf: () => l, YD: () => s, cX: () => h });
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
    a = { ...i, customError: !0, valid: !1 },
    s = { isInvalid: !1, validationDetails: i, validationErrors: [] },
    o = (0, r.createContext)({}),
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
    return c(e);
}
function c(e) {
    let {
        isInvalid: t,
        validationState: n,
        name: i,
        value: l,
        builtinValidation: u,
        validate: c,
        validationBehavior: h = "aria",
    } = e;
    n && (t || (t = "invalid" === n));
    let m = void 0 !== t ? { isInvalid: t, validationErrors: [], validationDetails: a } : null,
        g = (0, r.useMemo)(() => (c && null != l ? f(_(c, l)) : null), [c, l]);
    (null == u ? void 0 : u.validationDetails.valid) && (u = void 0);
    let E = (0, r.useContext)(o),
        A = (0, r.useMemo)(() => (i ? (Array.isArray(i) ? i.flatMap((e) => d(E[e])) : d(E[i])) : []), [E, i]),
        [I, T] = (0, r.useState)(E),
        [y, S] = (0, r.useState)(!1);
    E !== I && (T(E), S(!1));
    let v = (0, r.useMemo)(() => f(y ? [] : A), [y, A]),
        C = (0, r.useRef)(s),
        [b, N] = (0, r.useState)(s),
        R = (0, r.useRef)(s),
        O = () => {
            if (!D) return;
            L(!1);
            let e = g || u || C.current;
            p(e, R.current) || ((R.current = e), N(e));
        },
        [D, L] = (0, r.useState)(!1);
    return (
        (0, r.useEffect)(O),
        {
            realtimeValidation: m || v || g || u || s,
            displayValidation: "native" === h ? m || v || b : m || v || g || u || b,
            updateValidation(e) {
                "aria" !== h || p(b, e) ? (C.current = e) : N(e);
            },
            resetValidation() {
                let e = s;
                p(e, R.current) || ((R.current = e), N(e)), "native" === h && L(!1), S(!0);
            },
            commitValidation() {
                "native" === h && L(!0), S(!0);
            },
        }
    );
}
function d(e) {
    return e ? (Array.isArray(e) ? e : [e]) : [];
}
function _(e, t) {
    if ("function" == typeof e) {
        let n = e(t);
        if (n && "boolean" != typeof n) return d(n);
    }
    return [];
}
function f(e) {
    return e.length ? { isInvalid: !0, validationErrors: e, validationDetails: a } : null;
}
function p(e, t) {
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
function h(...e) {
    let t = new Set(),
        n = !1,
        r = { ...i };
    for (let i of e) {
        var a, s;
        for (let e of i.validationErrors) t.add(e);
        for (let e in (n || (n = i.isInvalid), r)) (a = r)[(s = e)] || (a[s] = i.validationDetails[e]);
    }
    return (r.valid = !n), { isInvalid: n, validationErrors: [...t], validationDetails: r };
}
