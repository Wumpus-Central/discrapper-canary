t.r(e);
var i = t(200651);
t(192379);
var r = t(481060),
    l = t(239091),
    a = t(883385),
    o = t(108843),
    d = t(911969),
    u = t(947440),
    s = t(100527),
    c = t(441061),
    f = t(167675),
    p = t(737013),
    m = t(607783),
    h = t(299206),
    g = t(819403),
    _ = t(777658),
    v = t(858488),
    E = t(185457),
    Z = t(570870),
    x = t(389052),
    I = t(24311),
    T = t(915193),
    b = t(332576),
    M = t(158508),
    A = t(710631),
    C = t(297047),
    S = t(88966),
    j = t(397616),
    y = t(558924),
    N = t(991307),
    O = t(37258),
    P = t(700994),
    w = t(332031),
    k = t(981631),
    U = t(388032);
e.default = (0, o.Z)(
    (0, a.Z)(
        function (n) {
            var e;
            let { user: t, channel: a, context: o, showChatItems: s = !0, showMediaItems: k = !1, showChannelCallItems: D = !1, showModalItems: R = !0, onSelect: G, onHeightUpdate: W } = n,
                B = (0, O.Z)({
                    userId: t.id,
                    guildId: null
                }),
                V = (0, C.Z)(t, null, o),
                L = (0, y.Z)(t, a.id),
                H = (0, S.Z)(t.id, o),
                K = (0, I.Z)({
                    user: t,
                    context: o
                }),
                z = (0, E.Z)({
                    user: t,
                    channelId: a.id,
                    context: o
                }),
                q = (0, v.Z)({ user: t }),
                F = (0, P.Z)(t.id),
                Y = (0, j.Z)(t.id, a.id),
                J = (0, N.Z)(t.id),
                Q = (0, m.B)({
                    userId: t.id,
                    channelId: a.id,
                    guildId: a.getGuildId(),
                    location: 'GroupDMUserContextMenu'
                }),
                X = (0, b.Z)(t.id, a.id),
                $ = (0, A.Z)({ user: t }),
                nn = (0, u.Z)(null, t),
                ne = (0, _.Z)(t),
                nt = (0, x.Z)({
                    user: t,
                    location: 'GroupDMUserContextMenu'
                }),
                ni = (0, M.Z)({
                    user: t,
                    location: 'GroupDMUserContextMenu'
                }),
                nr = (0, h.Z)({
                    id: t.id,
                    label: U.intl.string(U.t['/AXYnJ'])
                }),
                nl = (0, w.Z)(t.id),
                na = (0, f.Z)(t.id),
                no = (0, c.Z)(a.id),
                nd = (0, g.Z)(t),
                nu = (0, p.Z)(t.id),
                ns = (0, Z.Z)({
                    commandType: d.yU.USER,
                    commandTargetId: t.id,
                    channel: a,
                    guildId: void 0,
                    onHeightUpdate: W
                }),
                nc = (0, T.Z)(t, a),
                nf = t.isNonUserBot(),
                np = a.isManaged(),
                nm = null === (e = a.recipients) || void 0 === e ? void 0 : e.includes(t.id);
            return (0, i.jsxs)(r.Menu, {
                navId: 'user-context',
                onClose: l.Zy,
                'aria-label': U.intl.string(U.t.liqwPD),
                onSelect: G,
                children: [
                    !nf &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(r.MenuGroup, { children: nd }),
                                (0, i.jsxs)(r.MenuGroup, {
                                    children: [R && B, s && V, H, K, !np && L, R && z, R && q, nl]
                                }),
                                k && (0, i.jsx)(r.MenuGroup, { children: F }),
                                nm &&
                                    (0, i.jsxs)(r.MenuGroup, {
                                        children: [!np && Y, nc]
                                    }),
                                (0, i.jsx)(r.MenuGroup, { children: R && nn }),
                                (0, i.jsxs)(r.MenuGroup, {
                                    children: [k && J, k && Q, k && X, ns, R && $, ne, R && ni, R && nt, k && nu]
                                }),
                                D &&
                                    (0, i.jsxs)(r.MenuGroup, {
                                        children: [no, na]
                                    })
                            ]
                        }),
                    (0, i.jsx)(r.MenuGroup, { children: nr })
                ]
            });
        },
        { object: k.qAy.CONTEXT_MENU }
    ),
    [s.Z.CONTEXT_MENU, s.Z.GROUP_DM_USER_MENU]
);
