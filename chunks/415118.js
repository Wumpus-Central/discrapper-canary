t.d(l, { default: () => D });
var n = t(200651);
t(192379);
var i = t(481060),
    a = t(239091),
    r = t(883385),
    d = t(108843),
    o = t(947440),
    s = t(100527),
    u = t(299206),
    c = t(976192),
    Z = t(276022),
    g = t(777658),
    f = t(858488),
    m = t(44652),
    E = t(185457),
    h = t(933409),
    v = t(389052),
    b = t(24311),
    S = t(158508),
    M = t(710631),
    C = t(297047),
    x = t(88966),
    N = t(712301),
    P = t(47091),
    j = t(991307),
    I = t(37258),
    O = t(931617),
    T = t(700994),
    _ = t(332031),
    A = t(981631),
    U = t(388032);
let D = (0, d.Z)(
    (0, r.Z)(
        function (e) {
            let { user: l, guildId: t, showModalItems: r = !0, showMediaItems: d = !1, showChatItems: s = !0, context: D, onSelect: L } = e,
                p = {
                    page: A.ZY5.GUILD_CHANNEL,
                    section: A.jXE.CHAT_USERNAME,
                    object: A.qAy.CONTEXT_MENU_ITEM
                },
                R = (0, I.Z)({
                    userId: l.id,
                    guildId: t
                }),
                y = (0, C.Z)(l, t, D),
                k = (0, x.Z)(l.id, D),
                B = (0, _.Z)(l.id),
                q = (0, b.Z)({
                    user: l,
                    context: D
                }),
                V = (0, E.Z)({
                    user: l,
                    guildId: t,
                    context: D
                }),
                G = (0, f.Z)({ user: l }),
                w = (0, T.Z)(l.id),
                F = (0, j.Z)(l.id),
                H = (0, c.Z)({
                    guildId: t,
                    userId: l.id,
                    analyticsLocation: p,
                    context: D
                }),
                Y = (0, Z.Z)({
                    user: l,
                    guildId: t
                }),
                Q = (0, M.Z)({
                    user: l,
                    guildId: t
                }),
                K = (0, o.Z)(null, l),
                W = (0, g.Z)({ user: l }),
                J = (0, m.Z)({ user: l }),
                X = (0, P.Z)({ user: l }),
                z = (0, v.Z)({
                    user: l,
                    guildId: t,
                    location: 'GuildUserContextMenu'
                }),
                $ = (0, S.Z)({
                    user: l,
                    guildId: t,
                    location: 'GuildUserContextMenu'
                }),
                ee = (0, h.Z)(l, t),
                el = (0, O.Z)(l.id, t),
                et = (0, N.Z)(l, t),
                en = (0, u.Z)({
                    id: l.id,
                    label: U.intl.string(U.t['/AXYnJ'])
                }),
                ei = l.isNonUserBot();
            return (0, n.jsxs)(i.v2r, {
                navId: 'user-context',
                onClose: a.Zy,
                'aria-label': U.intl.string(U.t.liqwPD),
                onSelect: L,
                children: [
                    !ei &&
                        (0, n.jsxs)(n.Fragment, {
                            children: [
                                (0, n.jsxs)(i.kSQ, {
                                    children: [r && R, s && y, k, q, r && V, r && G, B]
                                }),
                                d && (0, n.jsx)(i.kSQ, { children: w }),
                                (0, n.jsx)(i.kSQ, { children: r && K }),
                                (0, n.jsxs)(i.kSQ, {
                                    children: [d && F, r && H, r && Q, W, J, X, Y, r && $, r && z]
                                }),
                                (0, n.jsx)(i.kSQ, { children: ee }),
                                (0, n.jsxs)(i.kSQ, {
                                    children: [el, et]
                                })
                            ]
                        }),
                    (0, n.jsx)(i.kSQ, { children: en })
                ]
            });
        },
        { object: A.qAy.CONTEXT_MENU }
    ),
    [s.Z.CONTEXT_MENU, s.Z.GUILD_USER_MENU]
);
