"use strict";
n.d(t, { A: () => T });
var r = n(627968);
n(64700);
var i = n(110259),
    a = n(311907),
    s = n(582754),
    o = n(397927),
    l = n(736653),
    u = n(793574),
    c = n(688810),
    d = n(139286),
    _ = n(976860),
    f = n(71393),
    p = n(384684),
    h = n(985242),
    m = n(652215),
    g = n(746080),
    E = n(985018),
    A = n(765490);
let I = () => {
    let e = (0, l.Ay)();
    return (0, s.qB)(e) ? n(454333) : n(674463);
};
function T(e) {
    let { onClose: t, guildId: n, emojiId: s } = e,
        l = I(),
        { analyticsLocations: T } = (0, c.Ay)(u.A.GUILD_ROLE_SUBSCRIPTION_EMOJI_PICKER_UPSELL);
    (0, d.A)({
        type: i.ImpressionTypes.MODAL,
        name: i.ImpressionNames.ROLE_SUBSCRIPTION_EMOJI_UPSELL,
        properties: { location_stack: T, emoji_guild_id: n, emoji_id: s ?? null },
    });
    let y = () => {
            (0, _.pX)(m.BVt.CHANNEL(n, g.VV.ROLE_SUBSCRIPTIONS), { sourceLocationStack: T });
        },
        S = (0, a.bG)([f.A], () => f.A.getGuild(n)),
        v = (0, a.bG)([p.A], () => null != n && p.A.getUserSubscriptionRoles(n).size > 0),
        C = v ? E.intl.string(E.t.GoLM9z) : E.intl.formatToPlainString(E.t["h0u/Hi"], { serverName: S?.name }),
        b = v ? E.intl.string(E.t.PjZ7Db) : E.intl.string(E.t.p8FG1D);
    return (0, r.jsxs)("div", {
        className: A.kL,
        children: [
            (0, r.jsx)("div", { className: A.Tp }),
            (0, r.jsxs)("div", {
                className: A.Qs,
                children: [
                    (0, r.jsx)(o.DUT, {
                        className: A.b,
                        "aria-label": E.intl.string(E.t.cpT0Cq),
                        onClick: t,
                        children: (0, r.jsx)(o.PGe, {
                            size: "xs",
                            color: "currentColor",
                            "aria-label": E.intl.string(E.t.cpT0Cq),
                            className: A.yP,
                        }),
                    }),
                    (0, r.jsx)("img", { alt: "", src: l, className: A.Tn }),
                    (0, r.jsx)(o.hKd, { size: 22 }),
                    (0, r.jsx)(o.Heading, {
                        color: "text-strong",
                        variant: "heading-lg/extrabold",
                        className: A.wx,
                        children: E.intl.string(E.t.cBjkcx),
                    }),
                    (0, r.jsx)(o.hKd, { size: 4 }),
                    (0, r.jsx)(o.Text, {
                        color: "text-default",
                        variant: "text-md/normal",
                        className: A.h_,
                        children: C,
                    }),
                    (0, r.jsx)(o.hKd, { size: 24 }),
                    (0, r.jsx)(h.A, { text: b, onClick: y }),
                ],
            }),
        ],
    });
}
