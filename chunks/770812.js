r.d(n, {
    Z: function () {
        return b;
    }
});
var i = r(200651);
r(192379);
var a = r(990547),
    s = r(442837),
    o = r(780384),
    l = r(481060),
    u = r(410030),
    c = r(100527),
    d = r(906732),
    f = r(213609),
    _ = r(703656),
    h = r(430824),
    p = r(687476),
    m = r(761966),
    g = r(981631),
    E = r(176505),
    v = r(388032),
    I = r(559346);
let T = () => {
    let e = (0, u.ZP)();
    return (0, o.ap)(e) ? r(537381) : r(341048);
};
function b(e) {
    let { onClose: n, guildId: r, emojiId: o } = e,
        u = T(),
        { analyticsLocations: b } = (0, d.ZP)(c.Z.GUILD_ROLE_SUBSCRIPTION_EMOJI_PICKER_UPSELL);
    (0, f.Z)({
        type: a.ImpressionTypes.MODAL,
        name: a.ImpressionNames.ROLE_SUBSCRIPTION_EMOJI_UPSELL,
        properties: {
            location_stack: b,
            emoji_guild_id: r,
            emoji_id: null != o ? o : null
        }
    });
    let y = () => {
            (0, _.uL)(g.Z5c.CHANNEL(r, E.oC.ROLE_SUBSCRIPTIONS), { sourceLocationStack: b });
        },
        S = (0, s.e7)([h.Z], () => h.Z.getGuild(r)),
        A = (0, s.e7)([p.Z], () => null != r && p.Z.getUserSubscriptionRoles(r).size > 0),
        N = A ? v.intl.string(v.t['GoLM9/']) : v.intl.formatToPlainString(v.t['h0u/Hh'], { serverName: null == S ? void 0 : S.name }),
        C = A ? v.intl.string(v.t.PjZ7DQ) : v.intl.string(v.t.p8FG1N);
    return (0, i.jsxs)('div', {
        className: I.container,
        children: [
            (0, i.jsx)('div', { className: I.background }),
            (0, i.jsxs)('div', {
                className: I.content,
                children: [
                    (0, i.jsx)(l.Button, {
                        look: l.Button.Looks.BLANK,
                        size: l.Button.Sizes.ICON,
                        className: I.closeButton,
                        onClick: n,
                        children: (0, i.jsx)(l.XSmallIcon, {
                            size: 'xs',
                            color: 'currentColor',
                            'aria-label': v.intl.string(v.t.cpT0Cg),
                            className: I.closeButtonIcon
                        })
                    }),
                    (0, i.jsx)('img', {
                        alt: '',
                        src: u,
                        className: I.upsellImage
                    }),
                    (0, i.jsx)(l.Spacer, { size: 22 }),
                    (0, i.jsx)(l.Heading, {
                        color: 'header-primary',
                        variant: 'heading-lg/extrabold',
                        className: I.header,
                        children: v.intl.string(v.t.cBjkc3)
                    }),
                    (0, i.jsx)(l.Spacer, { size: 4 }),
                    (0, i.jsx)(l.Text, {
                        color: 'header-secondary',
                        variant: 'text-md/normal',
                        className: I.description,
                        children: N
                    }),
                    (0, i.jsx)(l.Spacer, { size: 24 }),
                    (0, i.jsx)(m.Z, {
                        onClick: y,
                        children: C
                    })
                ]
            })
        ]
    });
}
