n.d(t, { default: () => _ });
var l = n(200651);
n(192379);
var i = n(481060),
    r = n(239091),
    o = n(883385),
    a = n(108843),
    s = n(947440),
    u = n(100527),
    d = n(299206),
    c = n(976192),
    f = n(276022),
    g = n(777658),
    Z = n(858488),
    b = n(44652),
    O = n(185457),
    m = n(933409),
    N = n(389052),
    h = n(24311),
    E = n(158508),
    j = n(710631),
    v = n(297047),
    P = n(88966),
    p = n(712301),
    y = n(47091),
    S = n(991307),
    C = n(37258),
    M = n(931617),
    x = n(700994),
    I = n(332031),
    A = n(981631),
    T = n(388032);
let _ = (0, a.Z)(
    (0, o.Z)(
        function (e) {
            let { user: t, guildId: n, showModalItems: o = !0, showMediaItems: a = !1, showChatItems: u = !0, context: _, onSelect: U } = e,
                D = {
                    page: A.ZY5.GUILD_CHANNEL,
                    section: A.jXE.CHAT_USERNAME,
                    object: A.qAy.CONTEXT_MENU_ITEM
                },
                L = (0, C.Z)({
                    userId: t.id,
                    guildId: n
                }),
                W = (0, v.Z)(t, n, _),
                w = (0, P.Z)(t.id, _),
                k = (0, I.Z)(t.id),
                R = (0, h.Z)({
                    user: t,
                    context: _
                }),
                B = (0, O.Z)({
                    user: t,
                    guildId: n,
                    context: _
                }),
                V = (0, Z.Z)({ user: t }),
                q = (0, x.Z)(t.id),
                G = (0, S.Z)(t.id),
                F = (0, c.Z)({
                    guildId: n,
                    userId: t.id,
                    analyticsLocation: D,
                    context: _
                }),
                Y = (0, f.Z)({
                    user: t,
                    guildId: n
                }),
                H = (0, j.Z)({
                    user: t,
                    guildId: n
                }),
                Q = (0, s.Z)(null, t),
                K = (0, g.Z)({ user: t }),
                J = (0, b.Z)({ user: t }),
                X = (0, y.Z)({ user: t }),
                z = (0, N.Z)({
                    user: t,
                    guildId: n,
                    location: 'GuildUserContextMenu'
                }),
                $ = (0, E.Z)({
                    user: t,
                    guildId: n,
                    location: 'GuildUserContextMenu'
                }),
                ee = (0, m.Z)(t, n),
                et = (0, M.Z)(t.id, n),
                en = (0, p.Z)(t, n),
                el = (0, d.Z)({
                    id: t.id,
                    label: T.NW.string(T.t['/AXYnJ'])
                }),
                ei = t.isNonUserBot();
            return (0, l.jsxs)(i.v2r, {
                navId: 'user-context',
                onClose: r.Zy,
                'aria-label': T.NW.string(T.t.liqwPD),
                onSelect: U,
                children: [
                    !ei &&
                        (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsxs)(i.kSQ, {
                                    children: [o && L, u && W, w, R, o && B, o && V, k]
                                }),
                                a && (0, l.jsx)(i.kSQ, { children: q }),
                                (0, l.jsx)(i.kSQ, { children: o && Q }),
                                (0, l.jsxs)(i.kSQ, {
                                    children: [a && G, o && F, o && H, K, J, X, Y, o && $, o && z]
                                }),
                                (0, l.jsx)(i.kSQ, { children: ee }),
                                (0, l.jsxs)(i.kSQ, {
                                    children: [et, en]
                                })
                            ]
                        }),
                    (0, l.jsx)(i.kSQ, { children: el })
                ]
            });
        },
        { object: A.qAy.CONTEXT_MENU }
    ),
    [u.Z.CONTEXT_MENU, u.Z.GUILD_USER_MENU]
);
