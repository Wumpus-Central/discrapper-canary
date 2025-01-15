i(47120);
var n = i(200651),
    r = i(192379),
    a = i(120356),
    o = i.n(a),
    l = i(481060),
    c = i(981631),
    s = i(388032),
    d = i(875794);
t.Z = r.forwardRef(function (e, t) {
    let { query: i, canShowCta: a = !1, onChange: u, onSubmit: h, className: _ } = e,
        [p, m] = r.useState(!1);
    return (0, n.jsx)(l.SearchBox, {
        ref: t,
        className: o()(d.search, _),
        label: s.intl.string(s.t.APrAU1),
        placeholder: s.intl.string(s.t.APrAU1),
        searchTerm: i,
        cta: a && p && i.length > 0 ? s.intl.string(s.t['CU+6oK']) : null,
        onChange: u,
        onClear: () => u(''),
        onFocus: () => m(!0),
        onBlur: () => m(!1),
        onKeyPress: (e) => {
            e.charCode === c.yXg.ENTER && (null == h || h());
        },
        autoFocus: !0
    });
});
