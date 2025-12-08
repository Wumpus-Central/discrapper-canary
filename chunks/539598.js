n.d(t, { Z: () => m });
var r = n(54381);
n(473749);
var i = n(28664),
    l = n(481060),
    a = n(937615),
    o = n(884697),
    s = n(200615),
    c = n(981631),
    u = n(388032),
    d = n(58174);
function m(e) {
    let { product: t } = e,
        n = (0, o.ql)(t, c.tuJ.PREMIUM_TIER_2);
    if (null == n) return null;
    let m = (0, a.qr)(n.amount, n.currency);
    return (0, r.jsxs)("div", {
        className: d.container,
        children: [
            (0, r.jsx)(i.u, {
                text: u.intl.string(u.t.MPFyJ5),
                "aria-label": u.intl.string(u.t.X3Ekj8),
                children: (0, r.jsx)(l.SrA, {
                    size: "md",
                    color: "currentColor",
                    className: d.nitroIcon,
                }),
            }),
            (0, r.jsx)(l.Text, {
                variant: "text-xs/medium",
                children: u.intl.format(u.t.Sv8iic, {
                    price: m,
                    subscribeNowHook: (e) => (0, r.jsx)(s.F, { text: e }),
                }),
            }),
        ],
    });
}
