n.d(t, { Z: () => y }), n(266796);
var r = n(200651);
n(192379);
var i = n(990547),
    o = n(442837),
    a = n(780384),
    s = n(481060),
    l = n(410030),
    c = n(100527),
    u = n(906732),
    d = n(213609),
    f = n(703656),
    p = n(430824),
    _ = n(687476),
    h = n(761966),
    m = n(981631),
    g = n(176505),
    E = n(388032),
    v = n(525989);
let b = () => {
    let e = (0, l.ZP)();
    return (0, a.ap)(e) ? n(537381) : n(341048);
};
function y(e) {
    let { onClose: t, guildId: n, emojiId: a } = e,
        l = b(),
        { analyticsLocations: y } = (0, u.ZP)(c.Z.GUILD_ROLE_SUBSCRIPTION_EMOJI_PICKER_UPSELL);
    (0, d.Z)({
        type: i.ImpressionTypes.MODAL,
        name: i.ImpressionNames.ROLE_SUBSCRIPTION_EMOJI_UPSELL,
        properties: {
            location_stack: y,
            emoji_guild_id: n,
            emoji_id: null != a ? a : null
        }
    });
    let O = () => {
            (0, f.uL)(m.Z5c.CHANNEL(n, g.oC.ROLE_SUBSCRIPTIONS), { sourceLocationStack: y });
        },
        S = (0, o.e7)([p.Z], () => p.Z.getGuild(n)),
        I = (0, o.e7)([_.Z], () => null != n && _.Z.getUserSubscriptionRoles(n).size > 0),
        T = I ? E.NW.string(E.t['GoLM9/']) : E.NW.formatToPlainString(E.t['h0u/Hh'], { serverName: null == S ? void 0 : S.name }),
        N = I ? E.NW.string(E.t.PjZ7DQ) : E.NW.string(E.t.p8FG1N);
    return (0, r.jsxs)('div', {
        className: v.container,
        children: [
            (0, r.jsx)('div', { className: v.background }),
            (0, r.jsxs)('div', {
                className: v.content,
                children: [
                    (0, r.jsx)(s.zxk, {
                        look: s.zxk.Looks.BLANK,
                        size: s.zxk.Sizes.ICON,
                        className: v.closeButton,
                        onClick: t,
                        children: (0, r.jsx)(s.Dio, {
                            size: 'xs',
                            color: 'currentColor',
                            'aria-label': E.NW.string(E.t.cpT0Cg),
                            className: v.closeButtonIcon
                        })
                    }),
                    (0, r.jsx)('img', {
                        alt: '',
                        src: l,
                        className: v.upsellImage
                    }),
                    (0, r.jsx)(s.LZC, { size: 22 }),
                    (0, r.jsx)(s.X6q, {
                        color: 'header-primary',
                        variant: 'heading-lg/extrabold',
                        className: v.header,
                        children: E.NW.string(E.t.cBjkc3)
                    }),
                    (0, r.jsx)(s.LZC, { size: 4 }),
                    (0, r.jsx)(s.Text, {
                        color: 'header-secondary',
                        variant: 'text-md/normal',
                        className: v.description,
                        children: T
                    }),
                    (0, r.jsx)(s.LZC, { size: 24 }),
                    (0, r.jsx)(h.Z, {
                        onClick: O,
                        children: N
                    })
                ]
            })
        ]
    });
}
