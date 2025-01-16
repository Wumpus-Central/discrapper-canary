r.d(n, {
    Z: function () {
        return I;
    }
});
var i = r(200651),
    a = r(192379),
    s = r(120356),
    o = r.n(s),
    l = r(442837),
    u = r(481060),
    c = r(100527),
    d = r(906732),
    f = r(436774),
    _ = r(592125),
    h = r(944486),
    p = r(626135),
    m = r(981631),
    g = r(388032),
    E = r(830885);
function v() {
    (0, u.openModalLazy)(async () => {
        let { default: e } = await r.e('3289').then(r.bind(r, 682609));
        return (n) =>
            (0, i.jsx)(e, {
                channel: null,
                ...n
            });
    });
}
function I(e) {
    let { className: n, iconOnly: r } = e,
        s = (0, l.e7)([h.Z, _.Z], () => {
            let e = _.Z.getChannel(h.Z.getChannelId());
            return (null == e ? void 0 : e.isPrivate()) ? m.ZY5.DM_CHANNEL : m.ZY5.GUILD_CHANNEL;
        }),
        { analyticsLocations: I } = (0, d.ZP)(c.Z.PREMIUM_UPSELL);
    a.useEffect(() => {
        p.default.track(m.rMx.PREMIUM_UPSELL_VIEWED, {
            type: 'longer messages inline',
            location: {
                location_page: s,
                location_section: m.jXE.CHANNEL_TEXT_AREA
            },
            location_stack: I
        });
    }, [s, I]);
    let T = () =>
            (0, i.jsxs)('div', {
                className: o()(E.root, n),
                children: [
                    (0, i.jsx)(u.NitroWheelIcon, {
                        size: 'md',
                        className: E.premium,
                        color: f.JX.PREMIUM_TIER_2
                    }),
                    (0, i.jsx)(u.Text, {
                        className: E.text,
                        variant: 'text-sm/normal',
                        children: g.intl.format(g.t.BNAIBQ, { onLearnMore: v })
                    })
                ]
            }),
        b = () =>
            (0, i.jsx)(u.Clickable, {
                className: E.iconOnly,
                onClick: () => v(),
                children: (0, i.jsx)(u.Tooltip, {
                    text: g.intl.string(g.t['+eFIjY']),
                    position: 'top',
                    children: (e) =>
                        (0, i.jsx)(u.NitroWheelIcon, {
                            size: 'md',
                            color: 'currentColor',
                            className: E.premium,
                            ...e
                        })
                })
            });
    return r ? b() : T();
}
