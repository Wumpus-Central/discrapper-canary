"use strict";
n.d(t, { p: () => _ });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    s = n.n(a),
    l = n(187322),
    o = n(504345),
    d = n(511274),
    c = n(375708),
    u = n(482188);
function _(e) {
    let t,
        {
            className: n,
            inputClassName: a,
            disabled: _ = !1,
            editable: E,
            inputRef: A,
            prefixElement: h,
            focusProps: I,
            name: f = "",
            type: p = "text",
            placeholder: T = "",
            maxLength: m = 999,
            value: g,
            defaultValue: S,
            minLength: N,
            error: C,
            defaultDirty: R = !1,
            ...O
        } = e,
        [L, D] = r.useState(R),
        y =
            ((t = r.useContext(o.cK)),
            r.useEffect(() => {
                t.setHasValue?.((null != S && "" !== S) || (null != g && "" !== g)), t.setIsFocused?.(!1);
            }, []),
            r.useEffect(() => {
                null != g && "" !== g && t.setHasValue?.(!0);
            }, [t, g]),
            t),
        v = r.useMemo(
            () =>
                null === C || "" === C
                    ? null
                    : null != C
                      ? C
                      : L
                        ? null != N && (g?.length ?? 0) < N
                            ? c.intl.formatToPlainString(c.t["62rk1K"], { minLength: N })
                            : null != m && (g?.length ?? 0) > m
                              ? c.intl.formatToPlainString(c.t.ICT5S6, { maxLength: m })
                              : null
                        : null,
            [C, L, N, m, g?.length],
        ),
        b = (null != C && "" !== C) || null != v;
    return (0, i.jsxs)("div", {
        className: s()(u.I6, n),
        children: [
            null != h && h,
            (0, i.jsx)(l.vN, {
                ...I,
                children: (0, i.jsx)("input", {
                    name: f,
                    className: s()(u.hF, a, { [u.z3]: b, [u.r9]: _, [u.LL]: E }),
                    disabled: _,
                    readOnly: !1 === E || void 0,
                    type: p,
                    placeholder: T,
                    maxLength: m,
                    minLength: N,
                    value: g,
                    defaultValue: S,
                    ...O,
                    "aria-labelledby": O["aria-labelledby"] ?? y.titleId,
                    onChange: function (e) {
                        O.onChange?.(e.currentTarget.value, f), D(!0), y.setHasValue?.("" !== e.currentTarget.value);
                    },
                    onBlur: function (e) {
                        O.onBlur?.(e, f), y.setIsFocused?.(!1);
                    },
                    onFocus: function (e) {
                        O.onFocus?.(e, f), y.setIsFocused?.(!0);
                    },
                    ref: A,
                }),
            }),
            (0, i.jsx)(d.U, { error: v }),
        ],
    });
}
