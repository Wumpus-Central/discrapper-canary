n.d(t, {
    PS: () => o,
    Q3: () => c,
    W0: () => m,
    tL: () => l,
});
var r = n(473749);
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
    a = {
        ...i,
        customError: !0,
        valid: !1,
    },
    o = {
        isInvalid: !1,
        validationDetails: i,
        validationErrors: [],
    },
    s = (0, r.createContext)({}),
    l = "__formValidationState" + Date.now();
function c(e) {
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
    return u(e);
}
function u(e) {
    let {
        isInvalid: t,
        validationState: n,
        name: i,
        value: l,
        builtinValidation: c,
        validate: u,
        validationBehavior: m = "aria",
    } = e;
    n && (t || (t = "invalid" === n));
    let h =
            void 0 !== t
                ? {
                      isInvalid: t,
                      validationErrors: [],
                      validationDetails: a,
                  }
                : null,
        g = (0, r.useMemo)(() => (u && null != l ? p(f(u, l)) : null), [u, l]);
    (null == c ? void 0 : c.validationDetails.valid) && (c = void 0);
    let E = (0, r.useContext)(s),
        b = (0, r.useMemo)(() => (i ? (Array.isArray(i) ? i.flatMap((e) => d(E[e])) : d(E[i])) : []), [E, i]),
        [y, O] = (0, r.useState)(E),
        [v, S] = (0, r.useState)(!1);
    E !== y && (O(E), S(!1));
    let I = (0, r.useMemo)(() => p(v ? [] : b), [v, b]),
        T = (0, r.useRef)(o),
        [A, C] = (0, r.useState)(o),
        N = (0, r.useRef)(o),
        P = () => {
            if (!R) return;
            w(!1);
            let e = g || c || T.current;
            _(e, N.current) || ((N.current = e), C(e));
        },
        [R, w] = (0, r.useState)(!1);
    return (
        (0, r.useEffect)(P),
        {
            realtimeValidation: h || I || g || c || o,
            displayValidation: "native" === m ? h || I || A : h || I || g || c || A,
            updateValidation(e) {
                "aria" !== m || _(A, e) ? (T.current = e) : C(e);
            },
            resetValidation() {
                let e = o;
                _(e, N.current) || ((N.current = e), C(e)), "native" === m && w(!1), S(!0);
            },
            commitValidation() {
                "native" === m && w(!0), S(!0);
            },
        }
    );
}
function d(e) {
    return e ? (Array.isArray(e) ? e : [e]) : [];
}
function f(e, t) {
    if ("function" == typeof e) {
        let n = e(t);
        if (n && "boolean" != typeof n) return d(n);
    }
    return [];
}
function p(e) {
    return e.length
        ? {
              isInvalid: !0,
              validationErrors: e,
              validationDetails: a,
          }
        : null;
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
function m(...e) {
    let t = new Set(),
        n = !1,
        r = { ...i };
    for (let i of e) {
        var a, o;
        for (let e of i.validationErrors) t.add(e);
        for (let e in (n || (n = i.isInvalid), r)) (a = r)[(o = e)] || (a[o] = i.validationDetails[e]);
    }
    return (
        (r.valid = !n),
        {
            isInvalid: n,
            validationErrors: [...t],
            validationDetails: r,
        }
    );
}
