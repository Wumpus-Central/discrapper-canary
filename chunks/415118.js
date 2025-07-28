n.d(t, { default: () => T });
var l = n(255367);
n(73800);
var i = n(481060),
    r = n(239091),
    o = n(883385),
    a = n(108843),
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
    j = n(158508),
    v = n(710631),
    P = n(297047),
    p = n(88966),
    y = n(712301),
    S = n(47091),
    C = n(991307),
    M = n(37258),
    x = n(931617),
    I = n(700994),
    N = n(332031),
    _ = n(981631),
    A = n(388032);
let T = (0, a.Z)(
    (0, o.Z)(
        function (e) {
            let { user: t, guildId: n, showModalItems: o = !0, showMediaItems: a = !1, showChatItems: u = !0, context: T, onSelect: U } = e,
                D = {
                    page: _.ZY5.GUILD_CHANNEL,
                    section: _.jXE.CHAT_USERNAME,
                    object: _.qAy.CONTEXT_MENU_ITEM
                },
                L = (0, M.Z)({
                    userId: t.id,
                    guildId: n
                }),
                w = (0, P.Z)(t, n, T),
                k = (0, p.Z)(t.id, T),
                R = (0, N.Z)(t.id),
                B = (0, E.Z)({
                    user: t,
                    context: T
                }),
                q = (0, m.Z)({
                    user: t,
                    guildId: n,
                    context: T
                }),
                V = (0, f.Z)({ user: t }),
                G = (0, I.Z)(t.id),
                F = (0, C.Z)(t.id),
                Y = (0, c.Z)({
                    guildId: n,
                    userId: t.id,
                    analyticsLocation: D,
                    context: T
                }),
                H = (0, g.Z)({
                    user: t,
                    guildId: n
                }),
                Q = (0, v.Z)({
                    user: t,
                    guildId: n
                }),
                K = (0, s.Z)(null, t),
                W = (0, Z.Z)({ user: t }),
                J = (0, b.Z)({ user: t }),
                X = (0, S.Z)({ user: t }),
                z = (0, h.Z)({
                    user: t,
                    guildId: n,
                    location: 'GuildUserContextMenu'
                }),
                $ = (0, j.Z)({
                    user: t,
                    guildId: n,
                    location: 'GuildUserContextMenu'
                }),
                ee = (0, O.Z)(t, n),
                et = (0, x.Z)(t.id, n),
                en = (0, y.Z)(t, n),
                el = (0, d.Z)({
                    id: t.id,
                    label: A.intl.string(A.t['/AXYnJ'])
                }),
                ei = t.isNonUserBot();
            return (0, l.jsxs)(i.v2r, {
                navId: 'user-context',
                onClose: r.Zy,
                'aria-label': A.intl.string(A.t.liqwPD),
                onSelect: U,
                children: [
                    !ei &&
                        (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsxs)(i.kSQ, {
                                    children: [o && L, u && w, k, B, o && q, o && V, R]
                                }),
                                a && (0, l.jsx)(i.kSQ, { children: G }),
                                (0, l.jsx)(i.kSQ, { children: o && K }),
                                (0, l.jsxs)(i.kSQ, {
                                    children: [a && F, o && Y, o && Q, W, J, X, H, o && $, o && z]
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
        { object: _.qAy.CONTEXT_MENU }
    ),
    [u.Z.CONTEXT_MENU, u.Z.GUILD_USER_MENU]
);
