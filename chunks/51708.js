n.d(t, { Z: () => m });
var r = n(200651);
n(192379);
var i = n(442837),
    l = n(481060),
    s = n(100527),
    a = n(906732),
    o = n(436774),
    c = n(451478),
    d = n(156582),
    u = n(388032),
    f = n(372115);
function m(e) {
    let { onClose: t } = e,
        { analyticsLocations: n } = (0, a.ZP)(s.Z.GO_LIVE_MODAL_V2),
        m = (0, i.e7)([c.Z], () => c.Z.isFocused());
    return (0, r.jsxs)('div', {
        className: f.root,
        children: [
            (0, r.jsxs)(l.Text, {
                className: f.infoText,
                variant: 'text-sm/medium',
                color: 'text-normal',
                children: [(0, r.jsx)(l.SrA, { color: o.JX.PREMIUM_TIER_2 }), u.NW.string(u.t.ZVevCg)]
            }),
            (0, r.jsxs)(l.gtL, {
                onClick: () =>
                    (0, d.E)({
                        analyticsLocation: n[0],
                        onClose: t
                    }),
                color: l.zxk.Colors.GREEN,
                size: l.zxk.Sizes.SMALL,
                className: f.ctaButton,
                innerClassName: f.premiumSubscribeButton,
                wrapperClassName: f.tier2Gradient,
                pauseAnimation: !m,
                children: [
                    (0, r.jsx)(l.SrA, {
                        size: 'md',
                        color: 'currentColor',
                        className: f.premiumIcon
                    }),
                    (0, r.jsx)('span', {
                        className: f.buttonText,
                        children: 'Get Nitro'
                    })
                ]
            })
        ]
    });
}
