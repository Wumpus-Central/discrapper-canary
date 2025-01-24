t.r(n);
var i = t(200651);
t(192379);
var l = t(481060),
    r = t(239091),
    o = t(883385),
    a = t(108843),
    u = t(947440),
    d = t(100527),
    s = t(299206),
    c = t(976192),
    m = t(276022),
    Z = t(777658),
    f = t(858488),
    g = t(44652),
    x = t(185457),
    M = t(933409),
    h = t(389052),
    b = t(24311),
    v = t(158508),
    C = t(710631),
    I = t(297047),
    j = t(88966),
    p = t(712301),
    E = t(47091),
    L = t(991307),
    U = t(37258),
    N = t(931617),
    T = t(700994),
    A = t(332031),
    k = t(981631),
    S = t(388032);
n.default = (0, a.Z)(
    (0, o.Z)(
        function (e) {
            let { user: n, guildId: t, showModalItems: o = !0, showMediaItems: a = !1, showChatItems: d = !0, context: _, onSelect: D } = e,
                O = {
                    page: k.ZY5.GUILD_CHANNEL,
                    section: k.jXE.CHAT_USERNAME,
                    object: k.qAy.CONTEXT_MENU_ITEM
                },
                G = (0, U.Z)({
                    userId: n.id,
                    guildId: t
                }),
                P = (0, I.Z)(n, t, _),
                F = (0, j.Z)(n.id, _),
                y = (0, A.Z)(n.id),
                w = (0, b.Z)({
                    user: n,
                    context: _
                }),
                R = (0, x.Z)({
                    user: n,
                    guildId: t,
                    context: _
                }),
                B = (0, f.Z)({ user: n }),
                V = (0, T.Z)(n.id),
                X = (0, L.Z)(n.id),
                W = (0, c.Z)({
                    guildId: t,
                    userId: n.id,
                    analyticsLocation: O,
                    context: _
                }),
                q = (0, m.Z)({
                    user: n,
                    guildId: t
                }),
                H = (0, C.Z)({
                    user: n,
                    guildId: t
                }),
                z = (0, u.Z)(null, n),
                Y = (0, Z.Z)(n),
                J = (0, g.Z)({ user: n }),
                K = (0, E.Z)({ user: n }),
                Q = (0, h.Z)({
                    user: n,
                    guildId: t,
                    location: 'GuildUserContextMenu'
                }),
                $ = (0, v.Z)({
                    user: n,
                    guildId: t,
                    location: 'GuildUserContextMenu'
                }),
                ee = (0, M.Z)(n, t),
                en = (0, N.Z)(n.id, t),
                et = (0, p.Z)(n, t),
                ei = (0, s.Z)({
                    id: n.id,
                    label: S.intl.string(S.t['/AXYnJ'])
                }),
                el = n.isNonUserBot();
            return (0, i.jsxs)(l.Menu, {
                navId: 'user-context',
                onClose: r.Zy,
                'aria-label': S.intl.string(S.t.liqwPD),
                onSelect: D,
                children: [
                    !el &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsxs)(l.MenuGroup, {
                                    children: [o && G, d && P, F, w, o && R, o && B, y]
                                }),
                                a && (0, i.jsx)(l.MenuGroup, { children: V }),
                                (0, i.jsx)(l.MenuGroup, { children: o && z }),
                                (0, i.jsxs)(l.MenuGroup, {
                                    children: [a && X, o && W, o && H, Y, J, K, q, o && $, o && Q]
                                }),
                                (0, i.jsx)(l.MenuGroup, { children: ee }),
                                (0, i.jsxs)(l.MenuGroup, {
                                    children: [en, et]
                                })
                            ]
                        }),
                    (0, i.jsx)(l.MenuGroup, { children: ei })
                ]
            });
        },
        { object: k.qAy.CONTEXT_MENU }
    ),
    [d.Z.CONTEXT_MENU, d.Z.GUILD_USER_MENU]
);
