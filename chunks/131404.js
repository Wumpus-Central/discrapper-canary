t.r(e);
var i = t(200651);
t(192379);
var r = t(481060),
    l = t(239091),
    u = t(883385),
    a = t(108843),
    o = t(911969),
    d = t(947440),
    s = t(100527),
    c = t(441061),
    f = t(167675),
    I = t(737013),
    x = t(607783),
    M = t(702321),
    _ = t(461535),
    h = t(776568),
    m = t(299206),
    g = t(895563),
    p = t(212205),
    v = t(62420),
    C = t(122074),
    j = t(819403),
    T = t(777658),
    E = t(858488),
    N = t(185457),
    Z = t(570870),
    S = t(389052),
    A = t(24311),
    U = t(794973),
    O = t(165855),
    G = t(332576),
    y = t(158508),
    P = t(710631),
    b = t(558924),
    R = t(991307),
    D = t(37258),
    L = t(700994),
    F = t(332031),
    k = t(981631),
    w = t(388032);
e.default = (0, a.Z)(
    (0, u.Z)(
        function (n) {
            let { user: e, channel: t, channelSelected: u = !1, showMute: a = !0, showMediaItems: s = !1, showChannelCallItems: Y = !1, showModalItems: z = !0, targetIsUser: B = !1, context: V, onSelect: W, onHeightUpdate: K } = n,
                X = (0, D.Z)({
                    userId: e.id,
                    guildId: null
                }),
                q = (0, A.Z)({
                    user: e,
                    context: V
                }),
                J = (0, N.Z)({
                    user: e,
                    channelId: t.id,
                    context: V
                }),
                H = (0, E.Z)({ user: e }),
                Q = (0, F.Z)(e.id),
                $ = (0, U.Z)(t.id, u),
                nn = (0, P.Z)({ user: e }),
                ne = (0, d.Z)(null, e),
                nt = (0, L.Z)(e.id),
                ni = (0, b.Z)(e, t.id),
                nr = (0, T.Z)(e),
                nl = (0, R.Z)(e.id),
                nu = (0, x.B)({
                    userId: e.id,
                    channelId: t.id,
                    guildId: t.getGuildId(),
                    location: 'DMUserContextMenu'
                }),
                na = (0, G.Z)(e.id, t.id),
                no = (0, S.Z)({
                    user: e,
                    location: 'DMUserContextMenu'
                }),
                nd = (0, y.Z)({
                    user: e,
                    location: 'DMUserContextMenu'
                }),
                ns = (0, h.ZP)(t),
                nc = (0, C.Uf)(k.aIL, t.id, 'trailing'),
                nf = (0, m.Z)({
                    id: e.id,
                    label: w.intl.string(w.t['/AXYnJ'])
                }),
                nI = (0, m.Z)({
                    id: t.id,
                    label: w.intl.string(w.t.gFHI3t)
                }),
                nx = (0, _.Z)(t),
                nM = (0, f.Z)(e.id),
                n_ = (0, c.Z)(t.id),
                nh = (0, j.Z)(e),
                nm = (0, I.Z)(e.id),
                ng = (0, Z.Z)({
                    commandType: o.yU.USER,
                    commandTargetId: e.id,
                    channel: t,
                    guildId: void 0,
                    onHeightUpdate: K
                }),
                np = (0, g.l)(t),
                nv = (0, g.P)(t),
                nC = (0, p.Z)(t),
                nj = (0, v.Z)(t),
                nT = (0, O.Z)({ channel: t }),
                nE = t.isManaged(),
                nN = e.isNonUserBot();
            return (0, i.jsxs)(r.Menu, {
                navId: 'user-context',
                onClose: l.Zy,
                'aria-label': w.intl.string(w.t.liqwPD),
                onSelect: W,
                children: [
                    (0, i.jsx)(r.MenuGroup, { children: !(nN && !(0, M.Z)(t.id)) && nx }),
                    (0, i.jsxs)(r.MenuGroup, {
                        children: [np, nC, nj]
                    }),
                    (0, i.jsx)(r.MenuGroup, { children: !nN && nh }),
                    (0, i.jsxs)(r.MenuGroup, {
                        children: [
                            !nN &&
                                (0, i.jsxs)(i.Fragment, {
                                    children: [z && X, q, !nE && ni, z && J, z && H, Q]
                                }),
                            (0, M.Z)(t.id) && X,
                            $
                        ]
                    }),
                    !nN &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(r.MenuGroup, { children: s && nt }),
                                (0, i.jsx)(r.MenuGroup, { children: z && ne }),
                                (0, i.jsxs)(r.MenuGroup, {
                                    children: [s && nl, z && nu, s && na, ng, z && nn, nr, z && nd, z && no, s && nm]
                                }),
                                (0, i.jsxs)(r.MenuGroup, {
                                    children: [a && ns, nc]
                                }),
                                Y &&
                                    (0, i.jsxs)(r.MenuGroup, {
                                        children: [n_, nM]
                                    })
                            ]
                        }),
                    (0, M.Z)(t.id) &&
                        (0, i.jsxs)(r.MenuGroup, {
                            children: [a && ns, nc]
                        }),
                    (0, i.jsx)(r.MenuGroup, { children: nv }),
                    (0, i.jsx)(r.MenuGroup, { children: nT }),
                    (0, i.jsxs)(r.MenuGroup, {
                        children: [nf, !B && nI]
                    })
                ]
            });
        },
        { object: k.qAy.CONTEXT_MENU }
    ),
    [s.Z.CONTEXT_MENU, s.Z.DM_USER_MENU]
);
