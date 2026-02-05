"use strict";
n.d(t, { p: () => f });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(158954),
    l = n(504345),
    u = n(511274),
    c = n(985018),
    d = n(713545);
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
            disabled: a = !1,
            editable: l,
            inputRef: f,
            prefixElement: p,
            focusProps: h,
            name: m = "",
            type: g = "text",
            placeholder: E = "",
            maxLength: A = 999,
            value: I,
            defaultValue: T,
            minLength: y,
            error: S,
            defaultDirty: v = !1,
            ...C
        } = e,
        [b, N] = i.useState(v),
        R = _(I, T),
        O = (e) => {
            C.onChange?.(e.currentTarget.value, m), N(!0), R.setHasValue?.("" !== e.currentTarget.value);
        },
        D = (e) => {
            C.onFocus?.(e, m), R.setIsFocused?.(!0);
        },
        L = (e) => {
            C.onBlur?.(e, m), R.setIsFocused?.(!1);
        },
        w = i.useMemo(
            () =>
                null === S || "" === S
                    ? null
                    : null != S
                      ? S
                      : b
                        ? null != y && (I?.length ?? 0) < y
                            ? c.intl.formatToPlainString(c.t["62rk1K"], { minLength: y })
                            : null != A && (I?.length ?? 0) > A
                              ? c.intl.formatToPlainString(c.t.ICT5S6, { maxLength: A })
                              : null
                        : null,
            [S, b, y, A, I?.length],
        ),
        x = (null != S && "" !== S) || null != w;
    return (0, r.jsxs)("div", {
        className: s()(d.I6, t),
        children: [
            null != p && p,
            (0, r.jsx)(o.vN3, {
                ...h,
                children: (0, r.jsx)("input", {
                    name: m,
                    className: s()(d.hF, n, { [d.z3]: x, [d.r9]: a, [d.LL]: l }),
                    disabled: a,
                    readOnly: !1 === l || void 0,
                    type: g,
                    placeholder: E,
                    maxLength: A,
                    minLength: y,
                    value: I,
                    defaultValue: T,
                    ...C,
                    "aria-labelledby": C["aria-labelledby"] ?? R.titleId,
                    onChange: O,
                    onBlur: L,
                    onFocus: D,
                    ref: f,
                }),
            }),
            (0, r.jsx)(u.U, { error: w }),
        ],
    });
}
