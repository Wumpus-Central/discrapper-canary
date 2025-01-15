i(47120);
var n = i(200651),
    a = i(192379),
    r = i(120356),
    o = i.n(r),
    l = i(481060),
    c = i(981631),
    s = i(388032),
    d = i(875794);
t.Z = a.forwardRef(function (e, t) {
    let { query: i, canShowCta: r = !1, onChange: u, onSubmit: _, className: p } = e,
        [h, m] = a.useState(!1);
    return (0, n.jsx)(l.SearchBox, {
        ref: t,
        className: o()(d.search, p),
        label: s.intl.string(s.t.APrAU1),
        placeholder: s.intl.string(s.t.APrAU1),
        searchTerm: i,
        cta: r && h && i.length > 0 ? s.intl.string(s.t['CU+6oK']) : null,
        onChange: u,
        onClear: () => u(''),
        onFocus: () => m(!0),
        onBlur: () => m(!1),
        onKeyPress: (e) => {
            e.charCode === c.yXg.ENTER && (null == _ || _());
        },
        autoFocus: !0
    });
});
