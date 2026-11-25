var i = n(477900);
n(582128);
var s = n(613412),
    l = n(855986),
    r = n(462887),
    a = n(939249),
    o = n(789645),
    c = n(696986),
    u = n(534514),
    d = n(834730),
    m = n(736653),
    f = n(793574),
    E = n(688810),
    I = n(139286),
    h = n(976860),
    g = n(71393),
    A = n(384684),
    p = n(985242),
    _ = n(652215),
    N = n(746080),
    C = n(792996),
    y = n(196404);
n.d(
    t,
    {},
    {
        A: function (e) {
            let t,
                { onClose: x, guildId: j, emojiId: O } = e,
                S = ((t = (0, m.Ay)()), (0, r.q)(t) ? n(454333) : n(674463)),
                { analyticsLocations: T } = (0, E.Ay)(f.A.GUILD_ROLE_SUBSCRIPTION_EMOJI_PICKER_UPSELL);
            (0, I.A)({
                type: s.ImpressionTypes.MODAL,
                name: s.ImpressionNames.ROLE_SUBSCRIPTION_EMOJI_UPSELL,
                properties: { location_stack: T, emoji_guild_id: j, emoji_id: O ?? null },
            });
            let b = (0, l.bG)([g.A], () => g.A.getGuild(j)),
                R = (0, l.bG)([A.A], () => null != j && A.A.getUserSubscriptionRoles(j).size > 0),
                v = R ? C.intl.string(C.t.GoLM9z) : C.intl.formatToPlainString(C.t["h0u/Hi"], { serverName: b?.name }),
                P = R ? C.intl.string(C.t.PjZ7Db) : C.intl.string(C.t.p8FG1D);
            return (0, i.jsxs)("div", {
                className: y.kL,
                children: [
                    (0, i.jsx)("div", { className: y.Tp }),
                    (0, i.jsxs)("div", {
                        className: y.Qs,
                        children: [
                            (0, i.jsx)(a.D, {
                                className: y.b,
                                "aria-label": C.intl.string(C.t.cpT0Cq),
                                onClick: x,
                                children: (0, i.jsx)(o.XSmallIcon, {
                                    size: "xs",
                                    color: "currentColor",
                                    "aria-label": C.intl.string(C.t.cpT0Cq),
                                    className: y.yP,
                                }),
                            }),
                            (0, i.jsx)("img", { alt: "", src: S, className: y.Tn }),
                            (0, i.jsx)(c.h, { size: 22 }),
                            (0, i.jsx)(u.D, {
                                color: "text-strong",
                                variant: "heading-lg/semibold",
                                className: y.wx,
                                children: C.intl.string(C.t.cBjkcx),
                            }),
                            (0, i.jsx)(c.h, { size: 4 }),
                            (0, i.jsx)(d.E, {
                                color: "text-default",
                                variant: "body-md/normal",
                                className: y.h_,
                                children: v,
                            }),
                            (0, i.jsx)(c.h, { size: 24 }),
                            (0, i.jsx)(p.A, {
                                text: P,
                                onClick: function () {
                                    (0, h.pX)(_.BVt.CHANNEL(j, N.VV.ROLE_SUBSCRIPTIONS), { sourceLocationStack: T });
                                },
                            }),
                        ],
                    }),
                ],
            });
        },
    },
);
