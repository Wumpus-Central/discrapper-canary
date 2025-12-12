n.d(t, { Z: () => O }), n(953529);
var r = n(54381);
n(473749);
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
    m = n(761966),
    h = n(981631),
    g = n(176505),
    E = n(388032),
    b = n(454615);
let y = () => {
    let e = (0, l.ZP)();
    return (0, a.ap)(e) ? n(537381) : n(341048);
};
function O(e) {
    let { onClose: t, guildId: n, emojiId: a } = e,
        l = y(),
        { analyticsLocations: O } = (0, u.ZP)(c.Z.GUILD_ROLE_SUBSCRIPTION_EMOJI_PICKER_UPSELL);
    (0, d.Z)({
        type: i.ImpressionTypes.MODAL,
        name: i.ImpressionNames.ROLE_SUBSCRIPTION_EMOJI_UPSELL,
        properties: {
            location_stack: O,
            emoji_guild_id: n,
            emoji_id: null != a ? a : null,
        },
    });
    let v = () => {
            (0, f.uL)(h.Z5c.CHANNEL(n, g.oC.ROLE_SUBSCRIPTIONS), { sourceLocationStack: O });
        },
        S = (0, o.e7)([p.Z], () => p.Z.getGuild(n)),
        I = (0, o.e7)([_.Z], () => null != n && _.Z.getUserSubscriptionRoles(n).size > 0),
        T = I
            ? E.intl.string(E.t.GoLM9z)
            : E.intl.formatToPlainString(E.t["h0u/Hi"], { serverName: null == S ? void 0 : S.name }),
        C = I ? E.intl.string(E.t.PjZ7Db) : E.intl.string(E.t.p8FG1D);
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
                        color: "text-strong",
                        variant: "heading-lg/extrabold",
                        className: b.header,
                        children: E.intl.string(E.t.cBjkcx),
                    }),
                    (0, r.jsx)(s.LZC, { size: 4 }),
                    (0, r.jsx)(s.Text, {
                        color: "text-default",
                        variant: "text-md/normal",
                        className: b.description,
                        children: T,
                    }),
                    (0, r.jsx)(s.LZC, { size: 24 }),
                    (0, r.jsx)(m.Z, {
                        text: C,
                        onClick: v,
                    }),
                ],
            }),
        ],
    });
}
