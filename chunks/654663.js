l.d(n, { default: () => S });
var t = l(200651);
l(192379);
var i = l(481060),
    r = l(239091),
    a = l(883385),
    d = l(108843),
    s = l(911969),
    u = l(947440),
    o = l(100527),
    c = l(299206),
    Z = l(976192),
    g = l(819403),
    f = l(777658),
    h = l(858488),
    m = l(44652),
    P = l(185457),
    x = l(570870),
    N = l(389052),
    b = l(24311),
    C = l(158508),
    v = l(710631),
    E = l(297047),
    p = l(88966),
    O = l(712301),
    j = l(47091),
    T = l(520063),
    I = l(37258),
    _ = l(931617),
    U = l(332031),
    A = l(981631),
    M = l(388032);
let S = (0, d.Z)(
    (0, a.Z)(
        function (e) {
            let { user: n, guildId: l, channel: a, context: d, onSelect: o, onHeightUpdate: S } = e,
                R = a.id,
                k = (0, I.Z)({
                    userId: n.id,
                    guildId: l,
                    channelId: R
                }),
                y = (0, E.Z)(n, l, d),
                L = (0, p.Z)(n.id, d),
                D = (0, U.Z)(n.id),
                V = (0, b.Z)({
                    user: n,
                    context: d
                }),
                G = (0, P.Z)({
                    user: n,
                    guildId: l,
                    channelId: R,
                    context: d
                }),
                q = (0, h.Z)({ user: n }),
                w = (0, Z.Z)({
                    guildId: l,
                    userId: n.id,
                    analyticsLocation: {
                        page: A.ZY5.GUILD_CHANNEL,
                        section: A.jXE.CHAT_USERNAME,
                        object: A.qAy.CONTEXT_MENU_ITEM
                    },
                    context: d
                }),
                H = (0, v.Z)({
                    user: n,
                    guildId: l
                }),
                W = (0, u.Z)(null, n),
                F = (0, f.Z)({ user: n }),
                Q = (0, m.Z)({ user: n }),
                B = (0, j.Z)({ user: n }),
                K = (0, N.Z)({
                    user: n,
                    guildId: l,
                    channelId: R,
                    location: 'ThreadUserContextMenu'
                }),
                Y = (0, C.Z)({
                    user: n,
                    guildId: l,
                    channelId: R,
                    location: 'ThreadUserContextMenu'
                }),
                X = (0, T.Z)(n, l, R),
                J = (0, _.Z)(n.id, l),
                z = (0, O.Z)(n, l),
                $ = (0, c.Z)({
                    id: n.id,
                    label: M.intl.string(M.t['/AXYnJ'])
                }),
                ee = (0, g.Z)(n),
                en = (0, x.Z)({
                    commandType: s.yU.USER,
                    commandTargetId: n.id,
                    channel: a,
                    guildId: l,
                    onHeightUpdate: S
                }),
                el = n.isNonUserBot();
            return (0, t.jsxs)(i.v2r, {
                navId: 'user-context',
                onClose: r.Zy,
                'aria-label': M.intl.string(M.t.liqwPD),
                onSelect: o,
                children: [
                    !el &&
                        (0, t.jsxs)(t.Fragment, {
                            children: [
                                (0, t.jsx)(i.kSQ, { children: ee }),
                                (0, t.jsxs)(i.kSQ, {
                                    children: [k, y, L, V, G, q, D]
                                }),
                                (0, t.jsx)(i.kSQ, { children: W }),
                                (0, t.jsxs)(i.kSQ, {
                                    children: [w, en, H, F, Q, B, Y, K]
                                }),
                                (0, t.jsx)(i.kSQ, { children: X }),
                                (0, t.jsxs)(i.kSQ, {
                                    children: [J, z]
                                })
                            ]
                        }),
                    (0, t.jsx)(i.kSQ, { children: $ })
                ]
            });
        },
        { object: A.qAy.CONTEXT_MENU }
    ),
    [o.Z.CONTEXT_MENU, o.Z.THREAD_USER_MENU]
);
