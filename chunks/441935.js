n.d(t, { A: () => u });
var l = n(477900);
n(582128);
var a = n(866665),
    i = n(408278),
    r = n(95635),
    s = n(87501),
    o = n(105292);
function u(e) {
    let { importing: t, disabled: n = !1, onClick: u } = e,
        d = o.intl.string(s.default.tx8Azx);
    return (0, l.jsx)(a.m, {
        text: d,
        position: "bottom",
        asContainer: !0,
        ariaHidden: !0,
        children: (0, l.jsx)(i.K, {
            icon: r.UploadIcon,
            variant: "icon-only",
            size: "sm",
            "aria-label": d,
            loading: t,
            disabled: n,
            onClick: u,
        }),
    });
}
