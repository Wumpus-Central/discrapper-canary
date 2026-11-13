var i = n(477900);
n(582128);
var r = n(7689),
    a = n(116711),
    s = n(95477);
n.d(
    t,
    {},
    {
        I: function (e) {
            let {
                    query: t,
                    autoFocus: n,
                    onClear: l,
                    placeholder: o,
                    onKeyDown: d,
                    size: c = "md",
                    disabled: u = !1,
                    onChange: _,
                    onBlur: E,
                    onFocus: A,
                    autoComplete: f,
                    inputProps: h,
                    focusProps: I,
                    "aria-label": p,
                    ref: m,
                } = e,
                { i18n: g } = (0, a.G9)();
            return (0, i.jsx)(s.k, {
                role: "searchbox",
                ...h,
                onFocus: A,
                onBlur: E,
                value: t,
                onChange: _,
                onKeyDown: d,
                placeholder: o ?? g.SEARCH,
                disabled: u,
                autoFocus: n,
                autoComplete: f,
                "aria-label": p ?? g.SEARCH,
                inputRef: m,
                leading: r.MagnifyingGlassIcon,
                onClear: l,
                clearable: null != l,
                size: c,
                fullWidth: !0,
                focusProps: I,
            });
        },
    },
);
