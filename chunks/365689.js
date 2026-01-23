n.d(t, {
    default: () => L,
});
var l = n(627968);
n(64700);
var i = n(397927),
    r = n(442433),
    a = n(847767),
    o = n(358367),
    d = n(468389),
    s = n(793574),
    u = n(50268),
    c = n(346247),
    A = n(700210),
    b = n(803664),
    g = n(29293),
    f = n(509302),
    m = n(497600),
    O = n(291247),
    p = n(239211),
    y = n(707378),
    E = n(399476),
    v = n(889460),
    h = n(448290),
    j = n(301541),
    x = n(252726),
    S = n(460597),
    M = n(198229),
    C = n(243949),
    D = n(180798),
    P = n(972432),
    I = n(77544),
    _ = n(652215),
    T = n(985018);
let L = (0, o.A)(
    (0, a.A)(
        function (e) {
            let {
                    user: t,
                    guildId: n,
                    showModalItems: a = !0,
                    showMediaItems: o = !1,
                    showChatItems: s = !0,
                    context: L,
                    onSelect: U,
                } = e,
                N = {
                    page: _.liQ.GUILD_CHANNEL,
                    section: _.JJy.CHAT_USERNAME,
                    object: _.ZSU.CONTEXT_MENU_ITEM,
                },
                G = (0, C.A)({
                    userId: t.id,
                    guildId: n,
                }),
                R = (0, h.A)(t, n, L),
                B = (0, j.A)(t.id, L),
                w = (0, I.A)(t.id),
                V = (0, y.A)({
                    user: t,
                    context: L,
                }),
                k = (0, m.A)({
                    user: t,
                    guildId: n,
                    context: L,
                }),
                F = (0, g.A)({
                    user: t,
                }),
                K = (0, P.A)(t.id),
                X = (0, M.A)(t.id),
                H = (0, c.A)({
                    guildId: n,
                    userId: t.id,
                    analyticsLocation: N,
                    context: L,
                }),
                W = (0, A.A)({
                    user: t,
                    guildId: n,
                }),
                Y = (0, v.A)({
                    user: t,
                    guildId: n,
                }),
                J = (0, d.A)(null, t),
                q = (0, b.A)({
                    user: t,
                }),
                Z = (0, f.A)({
                    user: t,
                }),
                z = (0, S.A)({
                    user: t,
                }),
                $ = (0, p.A)({
                    user: t,
                    guildId: n,
                    location: "GuildUserContextMenu",
                }),
                Q = (0, E.A)({
                    user: t,
                    guildId: n,
                    location: "GuildUserContextMenu",
                }),
                ee = (0, O.A)(t, n),
                et = (0, D.A)(t.id, n),
                en = (0, x.A)(t, n),
                el = (0, u.A)({
                    id: t.id,
                    label: T.intl.string(T.t["/AXYnE"]),
                }),
                ei = t.isNonUserBot();
            return (0, l.jsxs)(i.W1t, {
                "data-menu-mixed": !0,
                navId: "user-context",
                onClose: r.Z_,
                "aria-label": T.intl.string(T.t.liqwPJ),
                onSelect: U,
                children: [
                    !ei &&
                        (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsxs)(i.rXV, {
                                    children: [a && G, s && R, B, V, a && k, a && F, w],
                                }),
                                o &&
                                    (0, l.jsx)(i.rXV, {
                                        children: K,
                                    }),
                                (0, l.jsx)(i.rXV, {
                                    children: a && J,
                                }),
                                (0, l.jsxs)(i.rXV, {
                                    children: [o && X, a && H, a && Y, q, Z, z, W, a && Q, a && $],
                                }),
                                (0, l.jsx)(i.rXV, {
                                    children: ee,
                                }),
                                (0, l.jsxs)(i.rXV, {
                                    children: [et, en],
                                }),
                            ],
                        }),
                    (0, l.jsx)(i.rXV, {
                        children: el,
                    }),
                ],
            });
        },
        {
            object: _.ZSU.CONTEXT_MENU,
        },
    ),
    [s.A.CONTEXT_MENU, s.A.GUILD_USER_MENU],
);
