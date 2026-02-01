n.d(t, {
    default: () => P,
});
var r = n(627968);
n(64700);
var l = n(397927),
    i = n(442433),
    o = n(847767),
    a = n(358367),
    u = n(468389),
    d = n(793574),
    s = n(50268),
    c = n(222311),
    A = n(803664),
    f = n(29293),
    b = n(509302),
    g = n(497600),
    p = n(239211),
    v = n(707378),
    O = n(399476),
    y = n(889460),
    E = n(460597),
    m = n(198229),
    h = n(243949),
    j = n(972432),
    D = n(77544),
    I = n(571964),
    x = n(708653),
    S = n(297460),
    _ = n(652215),
    N = n(985018);
let P = (0, a.A)(
    (0, o.A)(
        function (e) {
            let {
                    user: t,
                    guildId: n,
                    channelId: o,
                    showMediaItems: a = !1,
                    mediaEngineContext: d,
                    onSelect: P,
                    onInteraction: w,
                    appContext: k = _.BRT.OVERLAY,
                    friendGroupId: M,
                    showManageFriendGroupsItems: C = !1,
                    onMessageUser: L,
                    widgetType: U,
                } = e,
                V = (0, h.A)({
                    userId: t.id,
                    guildId: n,
                    channelId: o,
                }),
                R = (0, S.A)(
                    {
                        kind: "DM_USER",
                        userId: t.id,
                        onOpenOverride: L,
                    },
                    U,
                ),
                { toggleFavoriteItem: G } = (0, x.As)(t.id, U),
                T = (0, v.A)({
                    user: t,
                }),
                F = (0, g.A)({
                    user: t,
                    guildId: n,
                    channelId: o,
                    context: k,
                }),
                B = (0, f.A)({
                    user: t,
                }),
                H = (0, I.A)({
                    user: t,
                    groupId: M,
                }),
                X = (0, D.A)(t.id),
                Y = (0, j.A)(t.id),
                W = (0, m.A)(t.id, d),
                K = (0, y.A)({
                    user: t,
                }),
                Z = (0, u.A)(null, t),
                J = (0, A.A)({
                    user: t,
                }),
                q = (0, b.A)({
                    user: t,
                }),
                $ = (0, E.A)({
                    user: t,
                }),
                z = (0, p.A)({
                    user: t,
                }),
                Q = (0, O.A)({
                    user: t,
                }),
                ee = (0, s.A)({
                    id: t.id,
                    label: N.intl.string(N.t["/AXYnE"]),
                }),
                et = (0, c.A)(t),
                en = t.isNonUserBot();
            return (0, r.jsxs)(l.W1t, {
                navId: "overlay-user-context",
                onClose: i.Z_,
                "aria-label": N.intl.string(N.t.liqwPJ),
                onSelect: P,
                onInteraction: w,
                children: [
                    !en &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(l.rXV, {
                                    children: et,
                                }),
                                (0, r.jsxs)(l.rXV, {
                                    children: [V, R, G, T, F, B, C ? H : null, X],
                                }),
                                a &&
                                    (0, r.jsx)(l.rXV, {
                                        children: Y,
                                    }),
                                (0, r.jsx)(l.rXV, {
                                    children: Z,
                                }),
                                (0, r.jsxs)(l.rXV, {
                                    children: [a && W, K, J, q, $, Q, z],
                                }),
                            ],
                        }),
                    (0, r.jsx)(l.rXV, {
                        children: ee,
                    }),
                ],
            });
        },
        {
            object: _.ZSU.CONTEXT_MENU,
        },
    ),
    [d.A.CONTEXT_MENU, d.A.OVERLAY, d.A.USER_GENERIC_MENU],
);
