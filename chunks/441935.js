l.d(e, { A: () => u });
var s = l(477900);
l(582128);
var i = l(866665),
    t = l(408278),
    a = l(95635),
    r = l(809526),
    d = l(105292);
function u(n) {
    let { importing: e, disabled: l = !1, onClick: u } = n,
        c = d.intl.string(r.default.tx8Azx);
    return (0, s.jsx)(i.m, {
        text: c,
        position: "bottom",
        asContainer: !0,
        ariaHidden: !0,
        children: (0, s.jsx)(t.K, {
            icon: a.UploadIcon,
            variant: "icon-only",
            size: "sm",
            "aria-label": c,
            loading: e,
            disabled: l,
            onClick: u,
        }),
    });
}
