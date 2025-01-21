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
    g = t(607783),
    x = t(702321),
    M = t(461535),
    h = t(776568),
    _ = t(299206),
    m = t(895563),
    p = t(212205),
    v = t(62420),
    j = t(122074),
    C = t(819403),
    Z = t(777658),
    T = t(858488),
    E = t(185457),
    N = t(570870),
    S = t(389052),
    A = t(24311),
    U = t(794973),
    O = t(165855),
    y = t(332576),
    b = t(158508),
    G = t(710631),
    P = t(558924),
    R = t(991307),
    D = t(37258),
    F = t(700994),
    L = t(332031),
    k = t(981631),
    w = t(388032);
e.default = (0, a.Z)(
    (0, u.Z)(
        function (n) {
            let { user: e, channel: t, channelSelected: u = !1, showMute: a = !0, showMediaItems: s = !1, showChannelCallItems: Y = !1, showModalItems: z = !0, targetIsUser: B = !1, context: V, onSelect: W, onHeightUpdate: K } = n,
                J = (0, D.Z)({
                    userId: e.id,
                    guildId: null
                }),
                X = (0, A.Z)({
                    user: e,
                    context: V
                }),
                q = (0, E.Z)({
                    user: e,
                    channelId: t.id,
                    context: V
                }),
                H = (0, T.Z)({ user: e }),
                Q = (0, L.Z)(e.id),
                $ = (0, U.Z)(t.id, u),
                nn = (0, G.Z)({ user: e }),
                ne = (0, d.Z)(null, e),
                nt = (0, F.Z)(e.id),
                ni = (0, P.Z)(e, t.id),
                nr = (0, Z.Z)(e),
                nl = (0, R.Z)(e.id),
                nu = (0, g.B)({
                    userId: e.id,
                    channelId: t.id,
                    guildId: t.getGuildId(),
                    location: 'DMUserContextMenu'
                }),
                na = (0, y.Z)(e.id, t.id),
                no = (0, S.Z)({
                    user: e,
                    location: 'DMUserContextMenu'
                }),
                nd = (0, b.Z)({
                    user: e,
                    location: 'DMUserContextMenu'
                }),
                ns = (0, h.ZP)(t),
                nc = (0, j.Uf)(k.aIL, t.id, 'trailing'),
                nf = (0, _.Z)({
                    id: e.id,
                    label: w.intl.string(w.t['/AXYnJ'])
                }),
                nI = (0, _.Z)({
                    id: t.id,
                    label: w.intl.string(w.t.gFHI3t)
                }),
                ng = (0, M.Z)(t),
                nx = (0, f.Z)(e.id),
                nM = (0, c.Z)(t.id),
                nh = (0, C.Z)(e),
                n_ = (0, I.Z)(e.id),
                nm = (0, N.Z)({
                    commandType: o.yU.USER,
                    commandTargetId: e.id,
                    channel: t,
                    guildId: void 0,
                    onHeightUpdate: K
                }),
                np = (0, m.l)(t),
                nv = (0, m.P)(t),
                nj = (0, p.Z)(t),
                nC = (0, v.Z)(t),
                nZ = (0, O.Z)({ channel: t }),
                nT = t.isManaged(),
                nE = e.isNonUserBot();
            return (0, i.jsxs)(r.Menu, {
                navId: 'user-context',
                onClose: l.Zy,
                'aria-label': w.intl.string(w.t.liqwPD),
                onSelect: W,
                children: [
                    (0, i.jsx)(r.MenuGroup, { children: !(nE && !(0, x.Z)(t.id)) && ng }),
                    (0, i.jsxs)(r.MenuGroup, {
                        children: [np, nj, nC]
                    }),
                    (0, i.jsx)(r.MenuGroup, { children: !nE && nh }),
                    (0, i.jsxs)(r.MenuGroup, {
                        children: [
                            !nE &&
                                (0, i.jsxs)(i.Fragment, {
                                    children: [z && J, X, !nT && ni, z && q, z && H, Q]
                                }),
                            (0, x.Z)(t.id) && J,
                            $
                        ]
                    }),
                    !nE &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(r.MenuGroup, { children: s && nt }),
                                (0, i.jsx)(r.MenuGroup, { children: z && ne }),
                                (0, i.jsxs)(r.MenuGroup, {
                                    children: [s && nl, z && nu, s && na, nm, z && nn, nr, z && nd, z && no, s && n_]
                                }),
                                (0, i.jsxs)(r.MenuGroup, {
                                    children: [a && ns, nc]
                                }),
                                Y &&
                                    (0, i.jsxs)(r.MenuGroup, {
                                        children: [nM, nx]
                                    })
                            ]
                        }),
                    (0, x.Z)(t.id) &&
                        (0, i.jsxs)(r.MenuGroup, {
                            children: [a && ns, nc]
                        }),
                    (0, i.jsx)(r.MenuGroup, { children: nv }),
                    (0, i.jsx)(r.MenuGroup, { children: nZ }),
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
