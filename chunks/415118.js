n.d(t, { default: () => T });
var l = n(54381);
n(473749);
var i = n(481060),
    r = n(239091),
    a = n(883385),
    o = n(108843),
    s = n(947440),
    u = n(100527),
    d = n(299206),
    c = n(976192),
    g = n(276022),
    Z = n(777658),
    f = n(858488),
    b = n(44652),
    m = n(185457),
    O = n(933409),
    h = n(389052),
    E = n(24311),
    v = n(158508),
    j = n(710631),
    P = n(297047),
    p = n(88966),
    S = n(712301),
    y = n(47091),
    C = n(991307),
    I = n(37258),
    M = n(931617),
    x = n(700994),
    N = n(332031),
    _ = n(981631),
    A = n(388032);
let T = (0, o.Z)(
    (0, a.Z)(
        function (e) {
            let {
                    user: t,
                    guildId: n,
                    showModalItems: a = !0,
                    showMediaItems: o = !1,
                    showChatItems: u = !0,
                    context: T,
                    onSelect: D,
                } = e,
                U = {
                    page: _.ZY5.GUILD_CHANNEL,
                    section: _.jXE.CHAT_USERNAME,
                    object: _.qAy.CONTEXT_MENU_ITEM,
                },
                L = (0, I.Z)({
                    userId: t.id,
                    guildId: n,
                }),
                w = (0, P.Z)(t, n, T),
                k = (0, p.Z)(t.id, T),
                R = (0, N.Z)(t.id),
                B = (0, E.Z)({
                    user: t,
                    context: T,
                }),
                V = (0, m.Z)({
                    user: t,
                    guildId: n,
                    context: T,
                }),
                q = (0, f.Z)({ user: t }),
                G = (0, x.Z)(t.id),
                F = (0, C.Z)(t.id),
                Y = (0, c.Z)({
                    guildId: n,
                    userId: t.id,
                    analyticsLocation: U,
                    context: T,
                }),
                K = (0, g.Z)({
                    user: t,
                    guildId: n,
                }),
                Q = (0, j.Z)({
                    user: t,
                    guildId: n,
                }),
                H = (0, s.Z)(null, t),
                W = (0, Z.Z)({ user: t }),
                X = (0, b.Z)({ user: t }),
                J = (0, y.Z)({ user: t }),
                z = (0, h.Z)({
                    user: t,
                    guildId: n,
                    location: "GuildUserContextMenu",
                }),
                $ = (0, v.Z)({
                    user: t,
                    guildId: n,
                    location: "GuildUserContextMenu",
                }),
                ee = (0, O.Z)(t, n),
                et = (0, M.Z)(t.id, n),
                en = (0, S.Z)(t, n),
                el = (0, d.Z)({
                    id: t.id,
                    label: A.intl.string(A.t["/AXYnE"]),
                }),
                ei = t.isNonUserBot();
            return (0, l.jsxs)(i.v2r, {
                navId: "user-context",
                onClose: r.Zy,
                "aria-label": A.intl.string(A.t.liqwPJ),
                onSelect: D,
                children: [
                    !ei &&
                        (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsxs)(i.kSQ, {
                                    children: [a && L, u && w, k, B, a && V, a && q, R],
                                }),
                                o && (0, l.jsx)(i.kSQ, { children: G }),
                                (0, l.jsx)(i.kSQ, { children: a && H }),
                                (0, l.jsxs)(i.kSQ, {
                                    children: [o && F, a && Y, a && Q, W, X, J, K, a && $, a && z],
                                }),
                                (0, l.jsx)(i.kSQ, { children: ee }),
                                (0, l.jsxs)(i.kSQ, {
                                    children: [et, en],
                                }),
                            ],
                        }),
                    (0, l.jsx)(i.kSQ, { children: el }),
                ],
            });
        },
        { object: _.qAy.CONTEXT_MENU },
    ),
    [u.Z.CONTEXT_MENU, u.Z.GUILD_USER_MENU],
);
