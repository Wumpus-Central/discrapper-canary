n.d(t, { Z: () => d });
var l = n(200651);
n(192379);
var r = n(481060),
    s = n(100527),
    i = n(906732),
    a = n(436774),
    o = n(156582),
    c = n(388032),
    u = n(528473);
function d(e) {
    let { onClose: t } = e,
        { analyticsLocations: n } = (0, i.ZP)(s.Z.GO_LIVE_MODAL_V2);
    return (0, l.jsxs)('div', {
        className: u.root,
        children: [
            (0, l.jsxs)(r.Text, {
                className: u.infoText,
                variant: 'text-sm/medium',
                color: 'text-normal',
                children: [(0, l.jsx)(r.SrA, { color: a.JX.PREMIUM_TIER_2 }), c.NW.string(c.t.ZVevCg)]
            }),
            (0, l.jsx)(r.zxk, {
                look: r.zxk.Looks.BLANK,
                onClick: () =>
                    (0, o.E)({
                        analyticsLocation: n[0],
                        onClose: t
                    }),
                children: (0, l.jsxs)(r.Text, {
                    className: u.ctaButton,
                    variant: 'text-sm/medium',
                    color: 'premium-nitro-pink-text',
                    children: [
                        c.NW.string(c.t.pj0XBA),
                        (0, l.jsx)(r.Fbu, {
                            color: 'currentColor',
                            size: 'xs'
                        })
                    ]
                })
            })
        ]
    });
}
