"use strict";
n.d(t, { p: () => f });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(158954),
    l = n(504345),
    u = n(511274),
    c = n(985018),
    d = n(199228);
function _(e, t) {
    let n = i.useContext(l.cK);
    return (
        i.useEffect(() => {
            n.setHasValue?.((null != t && "" !== t) || (null != e && "" !== e)), n.setIsFocused?.(!1);
        }, []),
        i.useEffect(() => {
            null != e && "" !== e && n.setHasValue?.(!0);
        }, [n, e]),
        n
    );
}
function f(e) {
    let {
            className: t,
            inputClassName: n,
            disabled: s = !1,
            editable: l,
            inputRef: f,
            prefixElement: p,
            focusProps: h,
            name: m = "",
            type: E = "text",
            placeholder: g = "",
            maxLength: A = 999,
            value: I,
            defaultValue: T,
            minLength: S,
            error: y,
            defaultDirty: v = !1,
            ...N
        } = e,
        [C, R] = i.useState(v),
        O = _(I, T),
        b = (e) => {
            N.onChange?.(e.currentTarget.value, m), R(!0), O.setHasValue?.("" !== e.currentTarget.value);
        },
        D = (e) => {
            N.onFocus?.(e, m), O.setIsFocused?.(!0);
        },
        L = (e) => {
            N.onBlur?.(e, m), O.setIsFocused?.(!1);
        },
        w = i.useMemo(
            () =>
                null === y || "" === y
                    ? null
                    : null != y
                      ? y
                      : C
                        ? null != S && (I?.length ?? 0) < S
                            ? c.intl.formatToPlainString(c.t["62rk1K"], { minLength: S })
                            : null != A && (I?.length ?? 0) > A
                              ? c.intl.formatToPlainString(c.t.ICT5S6, { maxLength: A })
                              : null
                        : null,
            [y, C, S, A, I?.length],
        ),
        M = (null != y && "" !== y) || null != w;
    return (0, r.jsxs)("div", {
        className: a()(d.I6, t),
        children: [
            null != p && p,
            (0, r.jsx)(o.vN3, {
                ...h,
                children: (0, r.jsx)("input", {
                    name: m,
                    className: a()(d.hF, n, { [d.z3]: M, [d.r9]: s, [d.LL]: l }),
                    disabled: s,
                    readOnly: !1 === l || void 0,
                    type: E,
                    placeholder: g,
                    maxLength: A,
                    minLength: S,
                    value: I,
                    defaultValue: T,
                    ...N,
                    "aria-labelledby": N["aria-labelledby"] ?? O.titleId,
                    onChange: b,
                    onBlur: L,
                    onFocus: D,
                    ref: f,
                }),
            }),
            (0, r.jsx)(u.U, { error: w }),
        ],
    });
}
