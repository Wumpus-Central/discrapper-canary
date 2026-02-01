n.d(t, {
    default: () => _,
});
var i = n(627968);
n(64700);
var l = n(397927),
    r = n(442433),
    o = n(847767),
    a = n(358367),
    d = n(468389),
    s = n(793574),
    u = n(50268),
    c = n(222311),
    A = n(803664),
    b = n(29293),
    f = n(509302),
    g = n(497600),
    p = n(239211),
    O = n(707378),
    m = n(399476),
    v = n(889460),
    j = n(301541),
    y = n(460597),
    h = n(198229),
    x = n(243949),
    E = n(972432),
    P = n(77544),
    D = n(652215),
    S = n(985018);
let _ = (0, a.A)(
    (0, o.A)(
        function (e) {
            let {
                    user: t,
                    guildId: n,
                    channelId: o,
                    showMediaItems: a = !1,
                    mediaEngineContext: s,
                    onSelect: _,
                    onInteraction: C,
                    appContext: L = D.BRT.APP,
                } = e,
                U = (0, x.A)({
                    userId: t.id,
                    guildId: n,
                    channelId: o,
                }),
                I = (0, j.A)(t.id, L),
                T = (0, O.A)({
                    user: t,
                }),
                w = (0, g.A)({
                    user: t,
                    guildId: n,
                    channelId: o,
                    context: L,
                }),
                V = (0, b.A)({
                    user: t,
                }),
                k = (0, P.A)(t.id),
                M = (0, E.A)(t.id),
                N = (0, h.A)(t.id, s),
                G = (0, v.A)({
                    user: t,
                }),
                R = (0, d.A)(null, t),
                B = (0, A.A)({
                    user: t,
                }),
                F = (0, f.A)({
                    user: t,
                }),
                X = (0, y.A)({
                    user: t,
                }),
                W = (0, p.A)({
                    user: t,
                }),
                H = (0, m.A)({
                    user: t,
                }),
                K = (0, u.A)({
                    id: t.id,
                    label: S.intl.string(S.t["/AXYnE"]),
                }),
                J = (0, c.A)(t),
                Y = t.isNonUserBot();
            return (0, i.jsxs)(l.W1t, {
                "data-menu-migrated": !0,
                navId: "user-context",
                onClose: r.Z_,
                "aria-label": S.intl.string(S.t.liqwPJ),
                onSelect: _,
                onInteraction: C,
                children: [
                    !Y &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(l.rXV, {
                                    children: J,
                                }),
                                (0, i.jsxs)(l.rXV, {
                                    children: [U, I, T, w, V, k],
                                }),
                                a &&
                                    (0, i.jsx)(l.rXV, {
                                        children: M,
                                    }),
                                (0, i.jsx)(l.rXV, {
                                    children: R,
                                }),
                                (0, i.jsxs)(l.rXV, {
                                    children: [a && N, G, B, F, X, H, W],
                                }),
                            ],
                        }),
                    (0, i.jsx)(l.rXV, {
                        children: K,
                    }),
                ],
            });
        },
        {
            object: D.ZSU.CONTEXT_MENU,
        },
    ),
    [s.A.CONTEXT_MENU, s.A.USER_GENERIC_MENU],
);
