n.d(t, { default: () => _ });
var r = n(200651);
n(192379);
var l = n(481060),
    i = n(239091),
    o = n(883385),
    a = n(108843),
    u = n(911969),
    s = n(947440),
    c = n(100527),
    d = n(299206),
    f = n(976192),
    Z = n(819403),
    b = n(777658),
    g = n(858488),
    O = n(44652),
    p = n(185457),
    P = n(570870),
    h = n(389052),
    N = n(24311),
    j = n(158508),
    m = n(710631),
    y = n(297047),
    v = n(88966),
    E = n(712301),
    x = n(47091),
    C = n(520063),
    S = n(37258),
    T = n(931617),
    w = n(332031),
    I = n(981631),
    W = n(388032);
let _ = (0, a.Z)(
    (0, o.Z)(
        function (e) {
            let { user: t, guildId: n, channel: o, context: a, onSelect: c, onHeightUpdate: _ } = e,
                k = o.id,
                A = (0, S.Z)({
                    userId: t.id,
                    guildId: n,
                    channelId: k
                }),
                U = (0, y.Z)(t, n, a),
                M = (0, v.Z)(t.id, a),
                R = (0, w.Z)(t.id),
                D = (0, N.Z)({
                    user: t,
                    context: a
                }),
                L = (0, p.Z)({
                    user: t,
                    guildId: n,
                    channelId: k,
                    context: a
                }),
                V = (0, g.Z)({ user: t }),
                q = (0, f.Z)({
                    guildId: n,
                    userId: t.id,
                    analyticsLocation: {
                        page: I.ZY5.GUILD_CHANNEL,
                        section: I.jXE.CHAT_USERNAME,
                        object: I.qAy.CONTEXT_MENU_ITEM
                    },
                    context: a
                }),
                G = (0, m.Z)({
                    user: t,
                    guildId: n
                }),
                H = (0, s.Z)(null, t),
                F = (0, b.Z)({ user: t }),
                Q = (0, O.Z)({ user: t }),
                B = (0, x.Z)({ user: t }),
                K = (0, h.Z)({
                    user: t,
                    guildId: n,
                    channelId: k,
                    location: 'ThreadUserContextMenu'
                }),
                Y = (0, j.Z)({
                    user: t,
                    guildId: n,
                    channelId: k,
                    location: 'ThreadUserContextMenu'
                }),
                X = (0, C.Z)(t, n, k),
                J = (0, T.Z)(t.id, n),
                z = (0, E.Z)(t, n),
                $ = (0, d.Z)({
                    id: t.id,
                    label: W.NW.string(W.t['/AXYnJ'])
                }),
                ee = (0, Z.Z)(t),
                et = (0, P.Z)({
                    commandType: u.yU.USER,
                    commandTargetId: t.id,
                    channel: o,
                    guildId: n,
                    onHeightUpdate: _
                }),
                en = t.isNonUserBot();
            return (0, r.jsxs)(l.v2r, {
                navId: 'user-context',
                onClose: i.Zy,
                'aria-label': W.NW.string(W.t.liqwPD),
                onSelect: c,
                children: [
                    !en &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(l.kSQ, { children: ee }),
                                (0, r.jsxs)(l.kSQ, {
                                    children: [A, U, M, D, L, V, R]
                                }),
                                (0, r.jsx)(l.kSQ, { children: H }),
                                (0, r.jsxs)(l.kSQ, {
                                    children: [q, et, G, F, Q, B, Y, K]
                                }),
                                (0, r.jsx)(l.kSQ, { children: X }),
                                (0, r.jsxs)(l.kSQ, {
                                    children: [J, z]
                                })
                            ]
                        }),
                    (0, r.jsx)(l.kSQ, { children: $ })
                ]
            });
        },
        { object: I.qAy.CONTEXT_MENU }
    ),
    [c.Z.CONTEXT_MENU, c.Z.THREAD_USER_MENU]
);
