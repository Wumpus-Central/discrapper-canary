n.d(t, { p: () => m });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(187322),
    o = n(504345),
    c = n(511274),
    d = n(985018),
    u = n(482188);
function m(e) {
    let t,
        {
            className: n,
            inputClassName: l,
            disabled: m = !1,
            editable: A,
            inputRef: h,
            prefixElement: x,
            focusProps: p,
            name: g = "",
            type: N = "text",
            placeholder: f = "",
            maxLength: _ = 999,
            value: I,
            defaultValue: v,
            minLength: j,
            error: C,
            defaultDirty: y = !1,
            ...S
        } = e,
        [E, T] = s.useState(y),
        b =
            ((t = s.useContext(o.cK)),
            s.useEffect(() => {
                t.setHasValue?.((null != v && "" !== v) || (null != I && "" !== I)), t.setIsFocused?.(!1);
            }, []),
            s.useEffect(() => {
                null != I && "" !== I && t.setHasValue?.(!0);
            }, [t, I]),
            t),
        P = s.useMemo(
            () =>
                null === C || "" === C
                    ? null
                    : null != C
                      ? C
                      : E
                        ? null != j && (I?.length ?? 0) < j
                            ? d.intl.formatToPlainString(d.t["62rk1K"], { minLength: j })
                            : null != _ && (I?.length ?? 0) > _
                              ? d.intl.formatToPlainString(d.t.ICT5S6, { maxLength: _ })
                              : null
                        : null,
            [C, E, j, _, I?.length],
        ),
        L = (null != C && "" !== C) || null != P;
    return (0, i.jsxs)("div", {
        className: a()(u.I6, n),
        children: [
            null != x && x,
            (0, i.jsx)(r.vN, {
                ...p,
                children: (0, i.jsx)("input", {
                    name: g,
                    className: a()(u.hF, l, { [u.z3]: L, [u.r9]: m, [u.LL]: A }),
                    disabled: m,
                    readOnly: !1 === A || void 0,
                    type: N,
                    placeholder: f,
                    maxLength: _,
                    minLength: j,
                    value: I,
                    defaultValue: v,
                    ...S,
                    "aria-labelledby": S["aria-labelledby"] ?? b.titleId,
                    onChange: (e) => {
                        S.onChange?.(e.currentTarget.value, g), T(!0), b.setHasValue?.("" !== e.currentTarget.value);
                    },
                    onBlur: (e) => {
                        S.onBlur?.(e, g), b.setIsFocused?.(!1);
                    },
                    onFocus: (e) => {
                        S.onFocus?.(e, g), b.setIsFocused?.(!0);
                    },
                    ref: h,
                }),
            }),
            (0, i.jsx)(c.U, { error: P }),
        ],
    });
}
