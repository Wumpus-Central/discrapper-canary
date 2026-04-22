"use strict";
n.d(t, { A: () => y });
var i = n(627968);
n(64700);
var l = n(110259),
    s = n(311907),
    r = n(462887),
    a = n(939249),
    o = n(789645),
    c = n(696986),
    u = n(534514),
    d = n(834730),
    h = n(736653),
    m = n(793574),
    p = n(688810),
    f = n(139286),
    g = n(976860),
    _ = n(71393),
    x = n(384684),
    A = n(985242),
    C = n(652215),
    E = n(746080),
    I = n(985018),
    v = n(271019);
function y(e) {
    let t,
        { onClose: y, guildId: S, emojiId: b } = e,
        N = ((t = (0, h.Ay)()), (0, r.q)(t) ? n(454333) : n(674463)),
        { analyticsLocations: T } = (0, p.Ay)(m.A.GUILD_ROLE_SUBSCRIPTION_EMOJI_PICKER_UPSELL);
    (0, f.A)({
        type: l.ImpressionTypes.MODAL,
        name: l.ImpressionNames.ROLE_SUBSCRIPTION_EMOJI_UPSELL,
        properties: { location_stack: T, emoji_guild_id: S, emoji_id: b ?? null },
    });
    let j = (0, s.bG)([_.A], () => _.A.getGuild(S)),
        R = (0, s.bG)([x.A], () => null != S && x.A.getUserSubscriptionRoles(S).size > 0),
        w = R ? I.intl.string(I.t.GoLM9z) : I.intl.formatToPlainString(I.t["h0u/Hi"], { serverName: j?.name }),
        L = R ? I.intl.string(I.t.PjZ7Db) : I.intl.string(I.t.p8FG1D);
    return (0, i.jsxs)("div", {
        className: v.kL,
        children: [
            (0, i.jsx)("div", { className: v.Tp }),
            (0, i.jsxs)("div", {
                className: v.Qs,
                children: [
                    (0, i.jsx)(a.D, {
                        className: v.b,
                        "aria-label": I.intl.string(I.t.cpT0Cq),
                        onClick: y,
                        children: (0, i.jsx)(o.P, {
                            size: "xs",
                            color: "currentColor",
                            "aria-label": I.intl.string(I.t.cpT0Cq),
                            className: v.yP,
                        }),
                    }),
                    (0, i.jsx)("img", { alt: "", src: N, className: v.Tn }),
                    (0, i.jsx)(c.h, { size: 22 }),
                    (0, i.jsx)(u.D, {
                        color: "text-strong",
                        variant: "heading-lg/extrabold",
                        className: v.wx,
                        children: I.intl.string(I.t.cBjkcx),
                    }),
                    (0, i.jsx)(c.h, { size: 4 }),
                    (0, i.jsx)(d.E, { color: "text-default", variant: "text-md/normal", className: v.h_, children: w }),
                    (0, i.jsx)(c.h, { size: 24 }),
                    (0, i.jsx)(A.A, {
                        text: L,
                        onClick: () => {
                            (0, g.pX)(C.BVt.CHANNEL(S, E.VV.ROLE_SUBSCRIPTIONS), { sourceLocationStack: T });
                        },
                    }),
                ],
            }),
        ],
    });
}
