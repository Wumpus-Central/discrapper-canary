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
            prefixElement: E,
            focusProps: p,
            name: m = "",
            type: g = "text",
            placeholder: A = "",
            maxLength: I = 999,
            value: T,
            defaultValue: S,
            minLength: N,
            error: C,
            defaultDirty: y = !1,
            ...O
        } = e,
        [R, v] = r.useState(y),
        b =
            ((t = r.useContext(l.cK)),
            r.useEffect(() => {
                t.setHasValue?.((null != S && "" !== S) || (null != T && "" !== T)), t.setIsFocused?.(!1);
            }, []),
            r.useEffect(() => {
                null != T && "" !== T && t.setHasValue?.(!0);
            }, [t, T]),
            t),
        L = r.useMemo(
            () =>
                null === C || "" === C
                    ? null
                    : null != C
                      ? C
                      : R
                        ? null != N && (T?.length ?? 0) < N
                            ? c.intl.formatToPlainString(c.t["62rk1K"], { minLength: N })
                            : null != I && (T?.length ?? 0) > I
                              ? c.intl.formatToPlainString(c.t.ICT5S6, { maxLength: I })
                              : null
                        : null,
            [C, R, N, I, T?.length],
        ),
        D = (null != C && "" !== C) || null != L;
    return (0, i.jsxs)("div", {
        className: a()(d.I6, n),
        children: [
            null != E && E,
            (0, i.jsx)(o.vN, {
                ...p,
                children: (0, i.jsx)("input", {
                    name: m,
                    className: a()(d.hF, s, { [d.z3]: D, [d.r9]: _, [d.LL]: h }),
                    disabled: _,
                    readOnly: !1 === h || void 0,
                    type: g,
                    placeholder: A,
                    maxLength: I,
                    minLength: N,
                    value: T,
                    defaultValue: S,
                    ...O,
                    "aria-labelledby": O["aria-labelledby"] ?? b.titleId,
                    onChange: function (e) {
                        O.onChange?.(e.currentTarget.value, m), v(!0), b.setHasValue?.("" !== e.currentTarget.value);
                    },
                    onBlur: function (e) {
                        O.onBlur?.(e, m), b.setIsFocused?.(!1);
                    },
                    onFocus: function (e) {
                        O.onFocus?.(e, m), b.setIsFocused?.(!0);
                    },
                    ref: f,
                }),
            }),
            (0, i.jsx)(u.U, { error: L }),
        ],
    });
}
