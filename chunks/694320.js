n.d(t, { Z: () => v });
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(442837),
    l = n(481060),
    u = n(100527),
    c = n(906732),
    d = n(436774),
    f = n(592125),
    _ = n(944486),
    p = n(626135),
    h = n(981631),
    m = n(388032),
    g = n(830885);
function E() {
    (0, l.ZDy)(async () => {
        let { default: e } = await n.e('3289').then(n.bind(n, 682609));
        return (t) =>
            (0, i.jsx)(e, {
                channel: null,
                ...t
            });
    });
}
function v(e) {
    let { className: t, iconOnly: n } = e,
        a = (0, o.e7)([_.Z, f.Z], () => {
            let e = f.Z.getChannel(_.Z.getChannelId());
            return (null == e ? void 0 : e.isPrivate()) ? h.ZY5.DM_CHANNEL : h.ZY5.GUILD_CHANNEL;
        }),
        { analyticsLocations: v } = (0, c.ZP)(u.Z.PREMIUM_UPSELL);
    r.useEffect(() => {
        p.default.track(h.rMx.PREMIUM_UPSELL_VIEWED, {
            type: 'longer messages inline',
            location: {
                location_page: a,
                location_section: h.jXE.CHANNEL_TEXT_AREA
            },
            location_stack: v
        });
    }, [a, v]);
    let y = () =>
            (0, i.jsxs)('div', {
                className: s()(g.root, t),
                children: [
                    (0, i.jsx)(l.SrA, {
                        size: 'md',
                        className: g.premium,
                        color: d.JX.PREMIUM_TIER_2
                    }),
                    (0, i.jsx)(l.Text, {
                        className: g.text,
                        variant: 'text-sm/normal',
                        children: m.intl.format(m.t.BNAIBQ, { onLearnMore: E })
                    })
                ]
            }),
        I = () =>
            (0, i.jsx)(l.P3F, {
                className: g.iconOnly,
                onClick: () => E(),
                children: (0, i.jsx)(l.ua7, {
                    text: m.intl.string(m.t['+eFIjY']),
                    position: 'top',
                    children: (e) =>
                        (0, i.jsx)(l.SrA, {
                            size: 'md',
                            color: 'currentColor',
                            className: g.premium,
                            ...e
                        })
                })
            });
    return n ? I() : y();
}
