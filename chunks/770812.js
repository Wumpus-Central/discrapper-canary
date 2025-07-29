(n.d(t, { Z: () => v }), n(953529));
var r = n(255367);
n(73800);
var i = n(990547),
    a = n(442837),
    o = n(780384),
    s = n(755721),
    l = n(481060),
    c = n(410030),
    u = n(100527),
    d = n(906732),
    _ = n(213609),
    f = n(703656),
    p = n(430824),
    h = n(687476),
    m = n(761966),
    g = n(981631),
    E = n(176505),
    b = n(388032),
    y = n(99086);
let O = () => {
    let e = (0, c.ZP)();
    return (0, o.ap)(e) ? n(537381) : n(341048);
};
function v(e) {
    let { onClose: t, guildId: n, emojiId: o } = e,
        c = O(),
        { analyticsLocations: v } = (0, d.ZP)(u.Z.GUILD_ROLE_SUBSCRIPTION_EMOJI_PICKER_UPSELL);
    (0, _.Z)({
        type: i.ImpressionTypes.MODAL,
        name: i.ImpressionNames.ROLE_SUBSCRIPTION_EMOJI_UPSELL,
        properties: {
            location_stack: v,
            emoji_guild_id: n,
            emoji_id: null != o ? o : null
        }
    });
    let I = () => {
            (0, f.uL)(g.Z5c.CHANNEL(n, E.oC.ROLE_SUBSCRIPTIONS), { sourceLocationStack: v });
        },
        T = (0, a.e7)([p.Z], () => p.Z.getGuild(n)),
        S = (0, a.e7)([h.Z], () => null != n && h.Z.getUserSubscriptionRoles(n).size > 0),
        A = S ? b.intl.string(b.t['GoLM9/']) : b.intl.formatToPlainString(b.t['h0u/Hh'], { serverName: null == T ? void 0 : T.name }),
        N = S ? b.intl.string(b.t.PjZ7DQ) : b.intl.string(b.t.p8FG1N);
    return (0, r.jsxs)('div', {
        className: y.container,
        children: [
            (0, r.jsx)('div', { className: y.background }),
            (0, r.jsxs)('div', {
                className: y.content,
                children: [
                    (0, r.jsx)(s.zx, {
                        look: s.zx.Looks.BLANK,
                        size: s.zx.Sizes.ICON,
                        className: y.closeButton,
                        onClick: t,
                        children: (0, r.jsx)(l.Dio, {
                            size: 'xs',
                            color: 'currentColor',
                            'aria-label': b.intl.string(b.t.cpT0Cg),
                            className: y.closeButtonIcon
                        })
                    }),
                    (0, r.jsx)('img', {
                        alt: '',
                        src: c,
                        className: y.upsellImage
                    }),
                    (0, r.jsx)(l.LZC, { size: 22 }),
                    (0, r.jsx)(l.X6q, {
                        color: 'header-primary',
                        variant: 'heading-lg/extrabold',
                        className: y.header,
                        children: b.intl.string(b.t.cBjkc3)
                    }),
                    (0, r.jsx)(l.LZC, { size: 4 }),
                    (0, r.jsx)(l.Text, {
                        color: 'header-secondary',
                        variant: 'text-md/normal',
                        className: y.description,
                        children: A
                    }),
                    (0, r.jsx)(l.LZC, { size: 24 }),
                    (0, r.jsx)(m.Z, {
                        onClick: I,
                        children: N
                    })
                ]
            })
        ]
    });
}
