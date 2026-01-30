n.d(t, {
    default: () => C,
});
var r = n(627968);
n(64700);
var i = n(397927),
    l = n(442433),
    o = n(847767),
    a = n(358367),
    d = n(468389),
    s = n(793574),
    u = n(50268),
    c = n(126904),
    A = n(222311),
    b = n(803664),
    f = n(29293),
    g = n(509302),
    p = n(497600),
    m = n(239211),
    v = n(707378),
    O = n(399476),
    j = n(889460),
    h = n(693227),
    y = n(301541),
    x = n(460597),
    E = n(198229),
    P = n(243949),
    D = n(972432),
    S = n(77544),
    _ = n(652215),
    U = n(985018);
let C = (0, a.A)(
    (0, o.A)(
        function (e) {
            let {
                    user: t,
                    guildId: n,
                    channelId: o,
                    showMediaItems: a = !1,
                    mediaEngineContext: s,
                    onSelect: C,
                    onInteraction: L,
                    appContext: I = _.BRT.APP,
                    friendGroupId: T,
                } = e,
                { enableTopNavButton: w } = (0, c.tR)({
                    location: "user-context-menu",
                }),
                G = (0, P.A)({
                    userId: t.id,
                    guildId: n,
                    channelId: o,
                }),
                V = (0, y.A)(t.id, I),
                k = (0, v.A)({
                    user: t,
                }),
                M = (0, p.A)({
                    user: t,
                    guildId: n,
                    channelId: o,
                    context: I,
                }),
                N = (0, f.A)({
                    user: t,
                }),
                R = (0, h.A)({
                    user: t,
                    groupId: T,
                }),
                B = (0, S.A)(t.id),
                F = (0, D.A)(t.id),
                X = (0, E.A)(t.id, s),
                K = (0, j.A)({
                    user: t,
                }),
                W = (0, d.A)(null, t),
                H = (0, b.A)({
                    user: t,
                }),
                J = (0, g.A)({
                    user: t,
                }),
                Y = (0, x.A)({
                    user: t,
                }),
                q = (0, m.A)({
                    user: t,
                }),
                z = (0, O.A)({
                    user: t,
                }),
                Z = (0, u.A)({
                    id: t.id,
                    label: U.intl.string(U.t["/AXYnE"]),
                }),
                Q = (0, A.A)(t),
                $ = t.isNonUserBot();
            return (0, r.jsxs)(i.W1t, {
                "data-menu-migrated": !0,
                navId: "user-context",
                onClose: l.Z_,
                "aria-label": U.intl.string(U.t.liqwPJ),
                onSelect: C,
                onInteraction: L,
                children: [
                    !$ &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(i.rXV, {
                                    children: Q,
                                }),
                                (0, r.jsxs)(i.rXV, {
                                    children: [G, V, k, M, N, w ? R : null, B],
                                }),
                                a &&
                                    (0, r.jsx)(i.rXV, {
                                        children: F,
                                    }),
                                (0, r.jsx)(i.rXV, {
                                    children: W,
                                }),
                                (0, r.jsxs)(i.rXV, {
                                    children: [a && X, K, H, J, Y, z, q],
                                }),
                            ],
                        }),
                    (0, r.jsx)(i.rXV, {
                        children: Z,
                    }),
                ],
            });
        },
        {
            object: _.ZSU.CONTEXT_MENU,
        },
    ),
    [s.A.CONTEXT_MENU, s.A.USER_GENERIC_MENU],
);
