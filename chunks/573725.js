"use strict";
n.d(t, { p: () => _ });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(187322),
    l = n(504345),
    u = n(511274),
    c = n(375708),
    d = n(482188);
function _(e) {
    let t,
        {
            className: n,
            inputClassName: s,
            disabled: _ = !1,
            editable: h,
            inputRef: f,
            prefixElement: p,
            focusProps: E,
            name: m = "",
            type: g = "text",
            placeholder: A = "",
            maxLength: I = 999,
            value: T,
            defaultValue: S,
            minLength: y,
            error: C,
            defaultDirty: N = !1,
            ...v
        } = e,
        [R, O] = r.useState(N),
        b =
            ((t = r.useContext(l.cK)),
            r.useEffect(() => {
                t.setHasValue?.((null != S && "" !== S) || (null != T && "" !== T)), t.setIsFocused?.(!1);
            }, []),
            r.useEffect(() => {
                null != T && "" !== T && t.setHasValue?.(!0);
            }, [t, T]),
            t),
        D = r.useMemo(
            () =>
                null === C || "" === C
                    ? null
                    : null != C
                      ? C
                      : R
                        ? null != y && (T?.length ?? 0) < y
                            ? c.intl.formatToPlainString(c.t["62rk1K"], { minLength: y })
                            : null != I && (T?.length ?? 0) > I
                              ? c.intl.formatToPlainString(c.t.ICT5S6, { maxLength: I })
                              : null
                        : null,
            [C, R, y, I, T?.length],
        ),
        L = (null != C && "" !== C) || null != D;
    return (0, i.jsxs)("div", {
        className: a()(d.I6, n),
        children: [
            null != p && p,
            (0, i.jsx)(o.vN, {
                ...E,
                children: (0, i.jsx)("input", {
                    name: m,
                    className: a()(d.hF, s, { [d.z3]: L, [d.r9]: _, [d.LL]: h }),
                    disabled: _,
                    readOnly: !1 === h || void 0,
                    type: g,
                    placeholder: A,
                    maxLength: I,
                    minLength: y,
                    value: T,
                    defaultValue: S,
                    ...v,
                    "aria-labelledby": v["aria-labelledby"] ?? b.titleId,
                    onChange: (e) => {
                        v.onChange?.(e.currentTarget.value, m), O(!0), b.setHasValue?.("" !== e.currentTarget.value);
                    },
                    onBlur: (e) => {
                        v.onBlur?.(e, m), b.setIsFocused?.(!1);
                    },
                    onFocus: (e) => {
                        v.onFocus?.(e, m), b.setIsFocused?.(!0);
                    },
                    ref: f,
                }),
            }),
            (0, i.jsx)(u.U, { error: D }),
        ],
    });
}
