n.d(t, { Z: () => I });
var i = n(200651);
n(192379);
var r = n(990547),
    a = n(442837),
    s = n(780384),
    o = n(481060),
    l = n(410030),
    u = n(100527),
    c = n(906732),
    d = n(213609),
    f = n(703656),
    _ = n(430824),
    p = n(687476),
    h = n(761966),
    m = n(981631),
    g = n(176505),
    E = n(388032),
    v = n(862517);
let y = () => {
    let e = (0, l.ZP)();
    return (0, s.ap)(e) ? n(537381) : n(341048);
};
function I(e) {
    let { onClose: t, guildId: n, emojiId: s } = e,
        l = y(),
        { analyticsLocations: I } = (0, c.ZP)(u.Z.GUILD_ROLE_SUBSCRIPTION_EMOJI_PICKER_UPSELL);
    (0, d.Z)({
        type: r.ImpressionTypes.MODAL,
        name: r.ImpressionNames.ROLE_SUBSCRIPTION_EMOJI_UPSELL,
        properties: {
            location_stack: I,
            emoji_guild_id: n,
            emoji_id: null != s ? s : null
        }
    });
    let T = () => {
            (0, f.uL)(m.Z5c.CHANNEL(n, g.oC.ROLE_SUBSCRIPTIONS), { sourceLocationStack: I });
        },
        b = (0, a.e7)([_.Z], () => _.Z.getGuild(n)),
        S = (0, a.e7)([p.Z], () => null != n && p.Z.getUserSubscriptionRoles(n).size > 0),
        A = S ? E.intl.string(E.t['GoLM9/']) : E.intl.formatToPlainString(E.t['h0u/Hh'], { serverName: null == b ? void 0 : b.name }),
        N = S ? E.intl.string(E.t.PjZ7DQ) : E.intl.string(E.t.p8FG1N);
    return (0, i.jsxs)('div', {
        className: v.container,
        children: [
            (0, i.jsx)('div', { className: v.background }),
            (0, i.jsxs)('div', {
                className: v.content,
                children: [
                    (0, i.jsx)(o.zxk, {
                        look: o.zxk.Looks.BLANK,
                        size: o.zxk.Sizes.ICON,
                        className: v.closeButton,
                        onClick: t,
                        children: (0, i.jsx)(o.Dio, {
                            size: 'xs',
                            color: 'currentColor',
                            'aria-label': E.intl.string(E.t.cpT0Cg),
                            className: v.closeButtonIcon
                        })
                    }),
                    (0, i.jsx)('img', {
                        alt: '',
                        src: l,
                        className: v.upsellImage
                    }),
                    (0, i.jsx)(o.LZC, { size: 22 }),
                    (0, i.jsx)(o.X6q, {
                        color: 'header-primary',
                        variant: 'heading-lg/extrabold',
                        className: v.header,
                        children: E.intl.string(E.t.cBjkc3)
                    }),
                    (0, i.jsx)(o.LZC, { size: 4 }),
                    (0, i.jsx)(o.Text, {
                        color: 'header-secondary',
                        variant: 'text-md/normal',
                        className: v.description,
                        children: A
                    }),
                    (0, i.jsx)(o.LZC, { size: 24 }),
                    (0, i.jsx)(h.Z, {
                        onClick: T,
                        children: N
                    })
                ]
            })
        ]
    });
}
