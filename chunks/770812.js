n.d(t, { Z: () => O }), n(953529);
var r = n(54381);
n(473749);
var i = n(990547),
    a = n(442837),
    o = n(780384),
    s = n(481060),
    l = n(410030),
    c = n(100527),
    u = n(906732),
    d = n(213609),
    f = n(703656),
    _ = n(430824),
    p = n(687476),
    h = n(761966),
    m = n(981631),
    g = n(176505),
    E = n(388032),
    b = n(454615);
let y = () => {
    let e = (0, l.ZP)();
    return (0, o.ap)(e) ? n(537381) : n(341048);
};
function O(e) {
    let { onClose: t, guildId: n, emojiId: o } = e,
        l = y(),
        { analyticsLocations: O } = (0, u.ZP)(c.Z.GUILD_ROLE_SUBSCRIPTION_EMOJI_PICKER_UPSELL);
    (0, d.Z)({
        type: i.ImpressionTypes.MODAL,
        name: i.ImpressionNames.ROLE_SUBSCRIPTION_EMOJI_UPSELL,
        properties: {
            location_stack: O,
            emoji_guild_id: n,
            emoji_id: null != o ? o : null,
        },
    });
    let v = () => {
            (0, f.uL)(m.Z5c.CHANNEL(n, g.oC.ROLE_SUBSCRIPTIONS), { sourceLocationStack: O });
        },
        I = (0, a.e7)([_.Z], () => _.Z.getGuild(n)),
        T = (0, a.e7)([p.Z], () => null != n && p.Z.getUserSubscriptionRoles(n).size > 0),
        S = T
            ? E.intl.string(E.t.GoLM9z)
            : E.intl.formatToPlainString(E.t["h0u/Hi"], { serverName: null == I ? void 0 : I.name }),
        A = T ? E.intl.string(E.t.PjZ7Db) : E.intl.string(E.t.p8FG1D);
    return (0, r.jsxs)("div", {
        className: b.container,
        children: [
            (0, r.jsx)("div", { className: b.background }),
            (0, r.jsxs)("div", {
                className: b.content,
                children: [
                    (0, r.jsx)(s.P3F, {
                        className: b.closeButton,
                        "aria-label": E.intl.string(E.t.cpT0Cq),
                        onClick: t,
                        children: (0, r.jsx)(s.Dio, {
                            size: "xs",
                            color: "currentColor",
                            "aria-label": E.intl.string(E.t.cpT0Cq),
                            className: b.closeButtonIcon,
                        }),
                    }),
                    (0, r.jsx)("img", {
                        alt: "",
                        src: l,
                        className: b.upsellImage,
                    }),
                    (0, r.jsx)(s.LZC, { size: 22 }),
                    (0, r.jsx)(s.Heading, {
                        color: "header-primary",
                        variant: "heading-lg/extrabold",
                        className: b.header,
                        children: E.intl.string(E.t.cBjkcx),
                    }),
                    (0, r.jsx)(s.LZC, { size: 4 }),
                    (0, r.jsx)(s.Text, {
                        color: "header-secondary",
                        variant: "text-md/normal",
                        className: b.description,
                        children: S,
                    }),
                    (0, r.jsx)(s.LZC, { size: 24 }),
                    (0, r.jsx)(h.Z, {
                        text: A,
                        onClick: v,
                    }),
                ],
            }),
        ],
    });
}
