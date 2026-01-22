n.d(t, { A: () => O }), n(228524);
var r = n(627968);
n(64700);
var i = n(110259),
    a = n(311907),
    s = n(582754),
    o = n(397927),
    l = n(736653),
    c = n(793574),
    u = n(688810),
    d = n(139286),
    f = n(976860),
    p = n(71393),
    _ = n(384684),
    h = n(985242),
    m = n(652215),
    g = n(746080),
    E = n(985018),
    b = n(765490);
let y = () => {
    let e = (0, l.Ay)();
    return (0, s.qB)(e) ? n(454333) : n(674463);
};
function O(e) {
    let { onClose: t, guildId: n, emojiId: s } = e,
        l = y(),
        { analyticsLocations: O } = (0, u.Ay)(c.A.GUILD_ROLE_SUBSCRIPTION_EMOJI_PICKER_UPSELL);
    (0, d.A)({
        type: i.ImpressionTypes.MODAL,
        name: i.ImpressionNames.ROLE_SUBSCRIPTION_EMOJI_UPSELL,
        properties: {
            location_stack: O,
            emoji_guild_id: n,
            emoji_id: null != s ? s : null,
        },
    });
    let A = () => {
            (0, f.pX)(m.BVt.CHANNEL(n, g.VV.ROLE_SUBSCRIPTIONS), { sourceLocationStack: O });
        },
        v = (0, a.bG)([p.A], () => p.A.getGuild(n)),
        S = (0, a.bG)([_.A], () => null != n && _.A.getUserSubscriptionRoles(n).size > 0),
        I = S
            ? E.intl.string(E.t.GoLM9z)
            : E.intl.formatToPlainString(E.t["h0u/Hi"], { serverName: null == v ? void 0 : v.name }),
        T = S ? E.intl.string(E.t.PjZ7Db) : E.intl.string(E.t.p8FG1D);
    return (0, r.jsxs)("div", {
        className: b.kL,
        children: [
            (0, r.jsx)("div", { className: b.Tp }),
            (0, r.jsxs)("div", {
                className: b.Qs,
                children: [
                    (0, r.jsx)(o.DUT, {
                        className: b.b,
                        "aria-label": E.intl.string(E.t.cpT0Cq),
                        onClick: t,
                        children: (0, r.jsx)(o.PGe, {
                            size: "xs",
                            color: "currentColor",
                            "aria-label": E.intl.string(E.t.cpT0Cq),
                            className: b.yP,
                        }),
                    }),
                    (0, r.jsx)("img", {
                        alt: "",
                        src: l,
                        className: b.Tn,
                    }),
                    (0, r.jsx)(o.hKd, { size: 22 }),
                    (0, r.jsx)(o.Heading, {
                        color: "text-strong",
                        variant: "heading-lg/extrabold",
                        className: b.wx,
                        children: E.intl.string(E.t.cBjkcx),
                    }),
                    (0, r.jsx)(o.hKd, { size: 4 }),
                    (0, r.jsx)(o.Text, {
                        color: "text-default",
                        variant: "text-md/normal",
                        className: b.h_,
                        children: I,
                    }),
                    (0, r.jsx)(o.hKd, { size: 24 }),
                    (0, r.jsx)(h.A, {
                        text: T,
                        onClick: A,
                    }),
                ],
            }),
        ],
    });
}
