t.d(l, { default: () => L });
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
    E = t(44652),
    m = t(185457),
    h = t(933409),
    v = t(389052),
    b = t(24311),
    C = t(158508),
    S = t(710631),
    x = t(297047),
    M = t(88966),
    N = t(712301),
    I = t(47091),
    P = t(991307),
    j = t(37258),
    O = t(931617),
    A = t(700994),
    T = t(332031),
    _ = t(981631),
    U = t(388032);
let L = (0, d.Z)(
    (0, r.Z)(
        function (e) {
            let { user: l, guildId: t, showModalItems: r = !0, showMediaItems: d = !1, showChatItems: s = !0, context: L, onSelect: D } = e,
                p = {
                    page: _.ZY5.GUILD_CHANNEL,
                    section: _.jXE.CHAT_USERNAME,
                    object: _.qAy.CONTEXT_MENU_ITEM
                },
                R = (0, j.Z)({
                    userId: l.id,
                    guildId: t
                }),
                y = (0, x.Z)(l, t, L),
                k = (0, M.Z)(l.id, L),
                B = (0, T.Z)(l.id),
                V = (0, b.Z)({
                    user: l,
                    context: L
                }),
                q = (0, m.Z)({
                    user: l,
                    guildId: t,
                    context: L
                }),
                G = (0, f.Z)({ user: l }),
                w = (0, A.Z)(l.id),
                F = (0, P.Z)(l.id),
                Y = (0, c.Z)({
                    guildId: t,
                    userId: l.id,
                    analyticsLocation: p,
                    context: L
                }),
                H = (0, Z.Z)({
                    user: l,
                    guildId: t
                }),
                Q = (0, S.Z)({
                    user: l,
                    guildId: t
                }),
                K = (0, o.Z)(null, l),
                W = (0, g.Z)({ user: l }),
                J = (0, E.Z)({ user: l }),
                X = (0, I.Z)({ user: l }),
                z = (0, v.Z)({
                    user: l,
                    guildId: t,
                    location: 'GuildUserContextMenu'
                }),
                $ = (0, C.Z)({
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
                onSelect: D,
                children: [
                    !ei &&
                        (0, n.jsxs)(n.Fragment, {
                            children: [
                                (0, n.jsxs)(i.kSQ, {
                                    children: [r && R, s && y, k, V, r && q, r && G, B]
                                }),
                                d && (0, n.jsx)(i.kSQ, { children: w }),
                                (0, n.jsx)(i.kSQ, { children: r && K }),
                                (0, n.jsxs)(i.kSQ, {
                                    children: [d && F, r && Y, r && Q, W, J, X, H, r && $, r && z]
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
        { object: _.qAy.CONTEXT_MENU }
    ),
    [s.Z.CONTEXT_MENU, s.Z.GUILD_USER_MENU]
);
