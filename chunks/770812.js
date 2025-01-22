r.d(n, {
    Z: function () {
        return I;
    }
});
var i = r(200651);
r(192379);
var a = r(990547),
    o = r(442837),
    s = r(780384),
    l = r(481060),
    u = r(410030),
    c = r(100527),
    d = r(906732),
    f = r(213609),
    p = r(703656),
    h = r(430824),
    _ = r(687476),
    m = r(761966),
    g = r(981631),
    E = r(176505),
    v = r(388032),
    y = r(559346);
let b = () => {
    let e = (0, u.ZP)();
    return (0, s.ap)(e) ? r(537381) : r(341048);
};
function I(e) {
    let { onClose: n, guildId: r, emojiId: s } = e,
        u = b(),
        { analyticsLocations: I } = (0, d.ZP)(c.Z.GUILD_ROLE_SUBSCRIPTION_EMOJI_PICKER_UPSELL);
    (0, f.Z)({
        type: a.ImpressionTypes.MODAL,
        name: a.ImpressionNames.ROLE_SUBSCRIPTION_EMOJI_UPSELL,
        properties: {
            location_stack: I,
            emoji_guild_id: r,
            emoji_id: null != s ? s : null
        }
    });
    let T = () => {
            (0, p.uL)(g.Z5c.CHANNEL(r, E.oC.ROLE_SUBSCRIPTIONS), { sourceLocationStack: I });
        },
        S = (0, o.e7)([h.Z], () => h.Z.getGuild(r)),
        A = (0, o.e7)([_.Z], () => null != r && _.Z.getUserSubscriptionRoles(r).size > 0),
        C = A ? v.intl.string(v.t['GoLM9/']) : v.intl.formatToPlainString(v.t['h0u/Hh'], { serverName: null == S ? void 0 : S.name }),
        N = A ? v.intl.string(v.t.PjZ7DQ) : v.intl.string(v.t.p8FG1N);
    return (0, i.jsxs)('div', {
        className: y.container,
        children: [
            (0, i.jsx)('div', { className: y.background }),
            (0, i.jsxs)('div', {
                className: y.content,
                children: [
                    (0, i.jsx)(l.Button, {
                        look: l.Button.Looks.BLANK,
                        size: l.Button.Sizes.ICON,
                        className: y.closeButton,
                        onClick: n,
                        children: (0, i.jsx)(l.XSmallIcon, {
                            size: 'xs',
                            color: 'currentColor',
                            'aria-label': v.intl.string(v.t.cpT0Cg),
                            className: y.closeButtonIcon
                        })
                    }),
                    (0, i.jsx)('img', {
                        alt: '',
                        src: u,
                        className: y.upsellImage
                    }),
                    (0, i.jsx)(l.Spacer, { size: 22 }),
                    (0, i.jsx)(l.Heading, {
                        color: 'header-primary',
                        variant: 'heading-lg/extrabold',
                        className: y.header,
                        children: v.intl.string(v.t.cBjkc3)
                    }),
                    (0, i.jsx)(l.Spacer, { size: 4 }),
                    (0, i.jsx)(l.Text, {
                        color: 'header-secondary',
                        variant: 'text-md/normal',
                        className: y.description,
                        children: C
                    }),
                    (0, i.jsx)(l.Spacer, { size: 24 }),
                    (0, i.jsx)(m.Z, {
                        onClick: T,
                        children: N
                    })
                ]
            })
        ]
    });
}
