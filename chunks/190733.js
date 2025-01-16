n(47120);
var i = n(200651),
    a = n(192379),
    l = n(120356),
    r = n.n(l),
    c = n(481060),
    o = n(981631),
    s = n(388032),
    d = n(425871);
t.Z = a.forwardRef(function (e, t) {
    let { query: n, canShowCta: l = !1, onChange: u, onSubmit: m, className: g } = e,
        [f, p] = a.useState(!1);
    return (0, i.jsx)(c.SearchBox, {
        ref: t,
        className: r()(d.search, g),
        label: s.intl.string(s.t.APrAU1),
        placeholder: s.intl.string(s.t.APrAU1),
        searchTerm: n,
        cta: l && f && n.length > 0 ? s.intl.string(s.t['CU+6oK']) : null,
        onChange: u,
        onClear: () => u(''),
        onFocus: () => p(!0),
        onBlur: () => p(!1),
        onKeyPress: (e) => {
            e.charCode === o.yXg.ENTER && (null == m || m());
        },
        autoFocus: !0
    });
});
