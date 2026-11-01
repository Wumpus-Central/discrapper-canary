n.d(t, { A: () => o });
var l = n(477900);
n(582128);
var a = n(866665),
    r = n(408278),
    i = n(95635),
    s = n(809526),
    u = n(105292);
function o(e) {
    let { importing: t, disabled: n = !1, onClick: o } = e,
        d = u.intl.string(s.default.tx8Azx);
    return (0, l.jsx)(a.m, {
        text: d,
        position: "bottom",
        asContainer: !0,
        ariaHidden: !0,
        children: (0, l.jsx)(r.K, {
            icon: i.UploadIcon,
            variant: "icon-only",
            size: "sm",
            "aria-label": d,
            loading: t,
            disabled: n,
            onClick: o,
        }),
    });
}
