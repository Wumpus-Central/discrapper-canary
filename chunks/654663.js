t.r(n);
var l = t(200651);
t(192379);
var i = t(481060),
    r = t(239091),
    a = t(883385),
    u = t(108843),
    o = t(911969),
    d = t(947440),
    s = t(100527),
    c = t(299206),
    Z = t(976192),
    f = t(819403),
    m = t(777658),
    g = t(858488),
    M = t(44652),
    x = t(185457),
    h = t(570870),
    v = t(389052),
    p = t(24311),
    b = t(158508),
    I = t(710631),
    C = t(297047),
    P = t(88966),
    E = t(712301),
    j = t(47091),
    T = t(520063),
    N = t(37258),
    O = t(931617),
    U = t(332031),
    A = t(981631),
    _ = t(388032);
n.default = (0, u.Z)(
    (0, a.Z)(
        function (e) {
            let { user: n, guildId: t, channel: a, context: u, onSelect: s, onHeightUpdate: R } = e,
                S = a.id,
                L = (0, N.Z)({
                    userId: n.id,
                    guildId: t,
                    channelId: S
                }),
                k = (0, C.Z)(n, t, u),
                G = (0, P.Z)(n.id, u),
                y = (0, U.Z)(n.id),
                F = (0, p.Z)({
                    user: n,
                    context: u
                }),
                q = (0, x.Z)({
                    user: n,
                    guildId: t,
                    channelId: S,
                    context: u
                }),
                w = (0, g.Z)({ user: n }),
                W = (0, Z.Z)({
                    guildId: t,
                    userId: n.id,
                    analyticsLocation: {
                        page: A.ZY5.GUILD_CHANNEL,
                        section: A.jXE.CHAT_USERNAME,
                        object: A.qAy.CONTEXT_MENU_ITEM
                    },
                    context: u
                }),
                D = (0, I.Z)({
                    user: n,
                    guildId: t
                }),
                V = (0, d.Z)(null, n),
                K = (0, m.Z)(n),
                z = (0, M.Z)({ user: n }),
                B = (0, j.Z)({ user: n }),
                H = (0, v.Z)({
                    user: n,
                    guildId: t,
                    channelId: S,
                    location: 'ThreadUserContextMenu'
                }),
                X = (0, b.Z)({
                    user: n,
                    guildId: t,
                    channelId: S,
                    location: 'ThreadUserContextMenu'
                }),
                Y = (0, T.Z)(n, t, S),
                J = (0, O.Z)(n.id, t),
                Q = (0, E.Z)(n, t),
                $ = (0, c.Z)({
                    id: n.id,
                    label: _.intl.string(_.t['/AXYnJ'])
                }),
                ee = (0, f.Z)(n),
                en = (0, h.Z)({
                    commandType: o.yU.USER,
                    commandTargetId: n.id,
                    channel: a,
                    guildId: t,
                    onHeightUpdate: R
                }),
                et = n.isNonUserBot();
            return (0, l.jsxs)(i.Menu, {
                navId: 'user-context',
                onClose: r.Zy,
                'aria-label': _.intl.string(_.t.liqwPD),
                onSelect: s,
                children: [
                    !et &&
                        (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsx)(i.MenuGroup, { children: ee }),
                                (0, l.jsxs)(i.MenuGroup, {
                                    children: [L, k, G, F, q, w, y]
                                }),
                                (0, l.jsx)(i.MenuGroup, { children: V }),
                                (0, l.jsxs)(i.MenuGroup, {
                                    children: [W, en, D, K, z, B, X, H]
                                }),
                                (0, l.jsx)(i.MenuGroup, { children: Y }),
                                (0, l.jsxs)(i.MenuGroup, {
                                    children: [J, Q]
                                })
                            ]
                        }),
                    (0, l.jsx)(i.MenuGroup, { children: $ })
                ]
            });
        },
        { object: A.qAy.CONTEXT_MENU }
    ),
    [s.Z.CONTEXT_MENU, s.Z.THREAD_USER_MENU]
);
