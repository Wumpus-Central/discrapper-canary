"use strict";
n.d(t, { A: () => N });
var r = n(627968);
n(64700);
var i = n(110259),
    s = n(311907),
    a = n(462887),
    o = n(939249),
    l = n(789645),
    u = n(696986),
    c = n(534514),
    d = n(834730),
    _ = n(736653),
    f = n(793574),
    p = n(688810),
    h = n(139286),
    E = n(976860),
    m = n(71393),
    g = n(384684),
    A = n(985242),
    I = n(652215),
    T = n(746080),
    S = n(985018),
    y = n(271019);
function N(e) {
    let t,
        { onClose: N, guildId: v, emojiId: C } = e,
        O = ((t = (0, _.Ay)()), (0, a.q)(t) ? n(454333) : n(674463)),
        { analyticsLocations: R } = (0, p.Ay)(f.A.GUILD_ROLE_SUBSCRIPTION_EMOJI_PICKER_UPSELL);
    (0, h.A)({
        type: i.ImpressionTypes.MODAL,
        name: i.ImpressionNames.ROLE_SUBSCRIPTION_EMOJI_UPSELL,
        properties: { location_stack: R, emoji_guild_id: v, emoji_id: C ?? null },
    });
    let b = (0, s.bG)([m.A], () => m.A.getGuild(v)),
        D = (0, s.bG)([g.A], () => null != v && g.A.getUserSubscriptionRoles(v).size > 0),
        L = D ? S.intl.string(S.t.GoLM9z) : S.intl.formatToPlainString(S.t["h0u/Hi"], { serverName: b?.name }),
        w = D ? S.intl.string(S.t.PjZ7Db) : S.intl.string(S.t.p8FG1D);
    return (0, r.jsxs)("div", {
        className: y.kL,
        children: [
            (0, r.jsx)("div", { className: y.Tp }),
            (0, r.jsxs)("div", {
                className: y.Qs,
                children: [
                    (0, r.jsx)(o.D, {
                        className: y.b,
                        "aria-label": S.intl.string(S.t.cpT0Cq),
                        onClick: N,
                        children: (0, r.jsx)(l.P, {
                            size: "xs",
                            color: "currentColor",
                            "aria-label": S.intl.string(S.t.cpT0Cq),
                            className: y.yP,
                        }),
                    }),
                    (0, r.jsx)("img", { alt: "", src: O, className: y.Tn }),
                    (0, r.jsx)(u.h, { size: 22 }),
                    (0, r.jsx)(c.D, {
                        color: "text-strong",
                        variant: "heading-lg/extrabold",
                        className: y.wx,
                        children: S.intl.string(S.t.cBjkcx),
                    }),
                    (0, r.jsx)(u.h, { size: 4 }),
                    (0, r.jsx)(d.E, { color: "text-default", variant: "text-md/normal", className: y.h_, children: L }),
                    (0, r.jsx)(u.h, { size: 24 }),
                    (0, r.jsx)(A.A, {
                        text: w,
                        onClick: () => {
                            (0, E.pX)(I.BVt.CHANNEL(v, T.VV.ROLE_SUBSCRIPTIONS), { sourceLocationStack: R });
                        },
                    }),
                ],
            }),
        ],
    });
}
