n.d(t, { default: () => U });
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
    h = n(389052),
    j = n(24311),
    E = n(158508),
    v = n(710631),
    p = n(297047),
    P = n(88966),
    y = n(712301),
    S = n(47091),
    C = n(991307),
    M = n(37258),
    x = n(931617),
    N = n(700994),
    I = n(332031),
    A = n(981631),
    T = n(388032);
let U = (0, a.Z)(
    (0, o.Z)(
        function (e) {
            let { user: t, guildId: n, showModalItems: o = !0, showMediaItems: a = !1, showChatItems: u = !0, context: U, onSelect: _ } = e,
                D = {
                    page: A.ZY5.GUILD_CHANNEL,
                    section: A.jXE.CHAT_USERNAME,
                    object: A.qAy.CONTEXT_MENU_ITEM
                },
                L = (0, M.Z)({
                    userId: t.id,
                    guildId: n
                }),
                w = (0, p.Z)(t, n, U),
                k = (0, P.Z)(t.id, U),
                R = (0, I.Z)(t.id),
                B = (0, j.Z)({
                    user: t,
                    context: U
                }),
                V = (0, O.Z)({
                    user: t,
                    guildId: n,
                    context: U
                }),
                q = (0, Z.Z)({ user: t }),
                G = (0, N.Z)(t.id),
                F = (0, C.Z)(t.id),
                Y = (0, c.Z)({
                    guildId: n,
                    userId: t.id,
                    analyticsLocation: D,
                    context: U
                }),
                H = (0, f.Z)({
                    user: t,
                    guildId: n
                }),
                Q = (0, v.Z)({
                    user: t,
                    guildId: n
                }),
                K = (0, s.Z)(null, t),
                W = (0, g.Z)({ user: t }),
                J = (0, b.Z)({ user: t }),
                X = (0, S.Z)({ user: t }),
                z = (0, h.Z)({
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
                et = (0, x.Z)(t.id, n),
                en = (0, y.Z)(t, n),
                el = (0, d.Z)({
                    id: t.id,
                    label: T.intl.string(T.t['/AXYnJ'])
                }),
                ei = t.isNonUserBot();
            return (0, l.jsxs)(i.v2r, {
                navId: 'user-context',
                onClose: r.Zy,
                'aria-label': T.intl.string(T.t.liqwPD),
                onSelect: _,
                children: [
                    !ei &&
                        (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsxs)(i.kSQ, {
                                    children: [o && L, u && w, k, B, o && V, o && q, R]
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
        { object: A.qAy.CONTEXT_MENU }
    ),
    [u.Z.CONTEXT_MENU, u.Z.GUILD_USER_MENU]
);
