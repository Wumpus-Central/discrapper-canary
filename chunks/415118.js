n.d(t, { default: () => k });
var i = n(200651);
n(192379);
var l = n(481060),
    d = n(239091),
    s = n(883385),
    o = n(108843),
    a = n(947440),
    r = n(100527),
    u = n(299206),
    c = n(976192),
    Z = n(276022),
    g = n(777658),
    f = n(858488),
    b = n(44652),
    h = n(185457),
    x = n(933409),
    m = n(389052),
    v = n(24311),
    E = n(158508),
    U = n(710631),
    j = n(297047),
    C = n(88966),
    L = n(712301),
    S = n(47091),
    _ = n(991307),
    N = n(37258),
    A = n(931617),
    D = n(700994),
    I = n(332031),
    M = n(981631),
    T = n(388032);
let k = (0, o.Z)(
    (0, s.Z)(
        function (e) {
            let { user: t, guildId: n, showModalItems: s = !0, showMediaItems: o = !1, showChatItems: r = !0, context: k, onSelect: O } = e,
                p = {
                    page: M.ZY5.GUILD_CHANNEL,
                    section: M.jXE.CHAT_USERNAME,
                    object: M.qAy.CONTEXT_MENU_ITEM
                },
                y = (0, N.Z)({
                    userId: t.id,
                    guildId: n
                }),
                P = (0, j.Z)(t, n, k),
                w = (0, C.Z)(t.id, k),
                V = (0, I.Z)(t.id),
                B = (0, v.Z)({
                    user: t,
                    context: k
                }),
                G = (0, h.Z)({
                    user: t,
                    guildId: n,
                    context: k
                }),
                F = (0, f.Z)({ user: t }),
                H = (0, D.Z)(t.id),
                R = (0, _.Z)(t.id),
                J = (0, c.Z)({
                    guildId: n,
                    userId: t.id,
                    analyticsLocation: p,
                    context: k
                }),
                Q = (0, Z.Z)({
                    user: t,
                    guildId: n
                }),
                Y = (0, U.Z)({
                    user: t,
                    guildId: n
                }),
                q = (0, a.Z)(null, t),
                X = (0, g.Z)({ user: t }),
                W = (0, b.Z)({ user: t }),
                K = (0, S.Z)({ user: t }),
                z = (0, m.Z)({
                    user: t,
                    guildId: n,
                    location: 'GuildUserContextMenu'
                }),
                $ = (0, E.Z)({
                    user: t,
                    guildId: n,
                    location: 'GuildUserContextMenu'
                }),
                ee = (0, x.Z)(t, n),
                et = (0, A.Z)(t.id, n),
                en = (0, L.Z)(t, n),
                ei = (0, u.Z)({
                    id: t.id,
                    label: T.intl.string(T.t['/AXYnJ'])
                }),
                el = t.isNonUserBot();
            return (0, i.jsxs)(l.v2r, {
                navId: 'user-context',
                onClose: d.Zy,
                'aria-label': T.intl.string(T.t.liqwPD),
                onSelect: O,
                children: [
                    !el &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsxs)(l.kSQ, {
                                    children: [s && y, r && P, w, B, s && G, s && F, V]
                                }),
                                o && (0, i.jsx)(l.kSQ, { children: H }),
                                (0, i.jsx)(l.kSQ, { children: s && q }),
                                (0, i.jsxs)(l.kSQ, {
                                    children: [o && R, s && J, s && Y, X, W, K, Q, s && $, s && z]
                                }),
                                (0, i.jsx)(l.kSQ, { children: ee }),
                                (0, i.jsxs)(l.kSQ, {
                                    children: [et, en]
                                })
                            ]
                        }),
                    (0, i.jsx)(l.kSQ, { children: ei })
                ]
            });
        },
        { object: M.qAy.CONTEXT_MENU }
    ),
    [r.Z.CONTEXT_MENU, r.Z.GUILD_USER_MENU]
);
