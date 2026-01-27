n.d(t, {
    default: () => L,
});
var l = n(627968);
n(64700);
var r = n(397927),
    i = n(442433),
    a = n(847767),
    o = n(358367),
    s = n(468389),
    d = n(793574),
    u = n(50268),
    c = n(346247),
    A = n(700210),
    b = n(803664),
    g = n(29293),
    f = n(509302),
    m = n(497600),
    p = n(291247),
    O = n(239211),
    y = n(707378),
    v = n(399476),
    E = n(889460),
    h = n(448290),
    j = n(301541),
    x = n(252726),
    S = n(460597),
    M = n(198229),
    D = n(243949),
    C = n(180798),
    I = n(972432),
    P = n(77544),
    T = n(652215),
    _ = n(985018);
let L = (0, o.A)(
    (0, a.A)(
        function (e) {
            let {
                    user: t,
                    guildId: n,
                    showModalItems: a = !0,
                    showMediaItems: o = !1,
                    showChatItems: d = !0,
                    context: L,
                    onSelect: U,
                } = e,
                N = {
                    page: T.liQ.GUILD_CHANNEL,
                    section: T.JJy.CHAT_USERNAME,
                    object: T.ZSU.CONTEXT_MENU_ITEM,
                },
                G = (0, D.A)({
                    userId: t.id,
                    guildId: n,
                }),
                R = (0, h.A)(t, n, L),
                B = (0, j.A)(t.id, L),
                w = (0, P.A)(t.id),
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
                K = (0, I.A)(t.id),
                X = (0, M.A)(t.id),
                W = (0, c.A)({
                    guildId: n,
                    userId: t.id,
                    analyticsLocation: N,
                    context: L,
                }),
                H = (0, A.A)({
                    user: t,
                    guildId: n,
                }),
                Y = (0, E.A)({
                    user: t,
                    guildId: n,
                }),
                J = (0, s.A)(null, t),
                q = (0, b.A)({
                    user: t,
                }),
                Z = (0, f.A)({
                    user: t,
                }),
                z = (0, S.A)({
                    user: t,
                }),
                $ = (0, O.A)({
                    user: t,
                    guildId: n,
                    location: "GuildUserContextMenu",
                }),
                Q = (0, v.A)({
                    user: t,
                    guildId: n,
                    location: "GuildUserContextMenu",
                }),
                ee = (0, p.A)(t, n),
                et = (0, C.A)(t.id, n),
                en = (0, x.A)(t, n),
                el = (0, u.A)({
                    id: t.id,
                    label: _.intl.string(_.t["/AXYnE"]),
                }),
                er = t.isNonUserBot();
            return (0, l.jsxs)(r.W1t, {
                "data-menu-migrated": !0,
                navId: "user-context",
                onClose: i.Z_,
                "aria-label": _.intl.string(_.t.liqwPJ),
                onSelect: U,
                children: [
                    !er &&
                        (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsxs)(r.rXV, {
                                    children: [a && G, d && R, B, V, a && k, a && F, w],
                                }),
                                o &&
                                    (0, l.jsx)(r.rXV, {
                                        children: K,
                                    }),
                                (0, l.jsx)(r.rXV, {
                                    children: a && J,
                                }),
                                (0, l.jsxs)(r.rXV, {
                                    children: [o && X, a && W, a && Y, q, Z, z, H, a && Q, a && $],
                                }),
                                (0, l.jsx)(r.rXV, {
                                    children: en,
                                }),
                                (0, l.jsxs)(r.rXV, {
                                    children: [et, ee],
                                }),
                            ],
                        }),
                    (0, l.jsx)(r.rXV, {
                        children: el,
                    }),
                ],
            });
        },
        {
            object: T.ZSU.CONTEXT_MENU,
        },
    ),
    [d.A.CONTEXT_MENU, d.A.GUILD_USER_MENU],
);
