"use strict";
n.d(t, { KZ: () => u, Lf: () => l, YD: () => a, cX: () => h, oE: () => i });
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
    let m = void 0 !== t ? { isInvalid: t, validationErrors: [], validationDetails: s } : null,
        E = (0, r.useMemo)(() => (c && null != l ? f(_(c, l)) : null), [c, l]);
    (null == u ? void 0 : u.validationDetails.valid) && (u = void 0);
    let g = (0, r.useContext)(o),
        A = (0, r.useMemo)(() => (i ? (Array.isArray(i) ? i.flatMap((e) => d(g[e])) : d(g[i])) : []), [g, i]),
        [I, T] = (0, r.useState)(g),
        [S, y] = (0, r.useState)(!1);
    g !== I && (T(g), y(!1));
    let v = (0, r.useMemo)(() => f(S ? [] : A), [S, A]),
        N = (0, r.useRef)(a),
        [C, R] = (0, r.useState)(a),
        O = (0, r.useRef)(a),
        b = () => {
            if (!D) return;
            L(!1);
            let e = E || u || N.current;
            p(e, O.current) || ((O.current = e), R(e));
        },
        [D, L] = (0, r.useState)(!1);
    return (
        (0, r.useEffect)(b),
        {
            realtimeValidation: m || v || E || u || a,
            displayValidation: "native" === h ? m || v || C : m || v || E || u || C,
            updateValidation(e) {
                "aria" !== h || p(C, e) ? (N.current = e) : R(e);
            },
            resetValidation() {
                let e = a;
                p(e, O.current) || ((O.current = e), R(e)), "native" === h && L(!1), y(!0);
            },
            commitValidation() {
                "native" === h && L(!0), y(!0);
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
    return e.length ? { isInvalid: !0, validationErrors: e, validationDetails: s } : null;
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
        var s, a;
        for (let e of i.validationErrors) t.add(e);
        for (let e in (n || (n = i.isInvalid), r)) (s = r)[(a = e)] || (s[a] = i.validationDetails[e]);
    }
    return (r.valid = !n), { isInvalid: n, validationErrors: [...t], validationDetails: r };
}
