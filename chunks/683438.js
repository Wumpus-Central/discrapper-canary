n.d(t, { I: () => l });
var i = n(477900);
n(582128);
var r = n(7689),
    a = n(460890),
    s = n(95477);
function l(e) {
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
            autoComplete: h,
            inputProps: I,
            focusProps: f,
            "aria-label": p,
            ref: T,
        } = e,
        { i18n: m } = (0, a.G9)();
    return (0, i.jsx)(s.k, {
        ...I,
        onFocus: A,
        onBlur: E,
        value: t,
        onChange: _,
        onKeyDown: d,
        placeholder: o ?? m.SEARCH,
        disabled: u,
        autoFocus: n,
        autoComplete: h,
        "aria-label": p ?? m.SEARCH,
        inputRef: T,
        leading: r.MagnifyingGlassIcon,
        onClear: l,
        clearable: null != l,
        size: c,
        fullWidth: !0,
        focusProps: f,
    });
}
