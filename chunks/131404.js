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
    m = t(737013),
    I = t(607783),
    x = t(702321),
    h = t(461535),
    g = t(776568),
    M = t(299206),
    _ = t(895563),
    p = t(212205),
    v = t(62420),
    C = t(122074),
    j = t(819403),
    Z = t(777658),
    T = t(858488),
    E = t(44652),
    N = t(185457),
    S = t(570870),
    A = t(389052),
    U = t(24311),
    O = t(794973),
    b = t(165855),
    G = t(332576),
    y = t(158508),
    P = t(710631),
    R = t(47091),
    D = t(558924),
    F = t(991307),
    L = t(37258),
    k = t(700994),
    w = t(332031),
    z = t(981631),
    Y = t(388032);
e.default = (0, a.Z)(
    (0, u.Z)(
        function (n) {
            let { user: e, channel: t, channelSelected: u = !1, showMute: a = !0, showMediaItems: s = !1, showChannelCallItems: B = !1, showModalItems: V = !0, targetIsUser: W = !1, context: K, onSelect: X, onHeightUpdate: q } = n,
                J = (0, L.Z)({
                    userId: e.id,
                    guildId: null
                }),
                H = (0, U.Z)({
                    user: e,
                    context: K
                }),
                Q = (0, N.Z)({
                    user: e,
                    channelId: t.id,
                    context: K
                }),
                $ = (0, T.Z)({ user: e }),
                nn = (0, w.Z)(e.id),
                ne = (0, O.Z)(t.id, u),
                nt = (0, P.Z)({ user: e }),
                ni = (0, d.Z)(null, e),
                nr = (0, k.Z)(e.id),
                nl = (0, D.Z)(e, t.id),
                nu = (0, Z.Z)(e),
                na = (0, E.Z)({ user: e }),
                no = (0, R.Z)({ user: e }),
                nd = (0, F.Z)(e.id),
                ns = (0, I.B)({
                    userId: e.id,
                    channelId: t.id,
                    guildId: t.getGuildId(),
                    location: 'DMUserContextMenu'
                }),
                nc = (0, G.Z)(e.id, t.id),
                nf = (0, A.Z)({
                    user: e,
                    location: 'DMUserContextMenu'
                }),
                nm = (0, y.Z)({
                    user: e,
                    location: 'DMUserContextMenu'
                }),
                nI = (0, g.ZP)(t),
                nx = (0, C.Uf)(z.aIL, t.id, 'trailing'),
                nh = (0, M.Z)({
                    id: e.id,
                    label: Y.intl.string(Y.t['/AXYnJ'])
                }),
                ng = (0, M.Z)({
                    id: t.id,
                    label: Y.intl.string(Y.t.gFHI3t)
                }),
                nM = (0, h.Z)(t),
                n_ = (0, f.Z)(e.id),
                np = (0, c.Z)(t.id),
                nv = (0, j.Z)(e),
                nC = (0, m.Z)(e.id),
                nj = (0, S.Z)({
                    commandType: o.yU.USER,
                    commandTargetId: e.id,
                    channel: t,
                    guildId: void 0,
                    onHeightUpdate: q
                }),
                nZ = (0, _.l)(t),
                nT = (0, _.P)(t),
                nE = (0, p.Z)(t),
                nN = (0, v.Z)(t),
                nS = (0, b.Z)({ channel: t }),
                nA = t.isManaged(),
                nU = e.isNonUserBot();
            return (0, i.jsxs)(r.Menu, {
                navId: 'user-context',
                onClose: l.Zy,
                'aria-label': Y.intl.string(Y.t.liqwPD),
                onSelect: X,
                children: [
                    (0, i.jsx)(r.MenuGroup, { children: !(nU && !(0, x.Z)(t.id)) && nM }),
                    (0, i.jsxs)(r.MenuGroup, {
                        children: [nZ, nE, nN]
                    }),
                    (0, i.jsx)(r.MenuGroup, { children: !nU && nv }),
                    (0, i.jsxs)(r.MenuGroup, {
                        children: [
                            !nU &&
                                (0, i.jsxs)(i.Fragment, {
                                    children: [V && J, H, !nA && nl, V && Q, V && $, nn]
                                }),
                            (0, x.Z)(t.id) && J,
                            ne
                        ]
                    }),
                    !nU &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(r.MenuGroup, { children: s && nr }),
                                (0, i.jsx)(r.MenuGroup, { children: V && ni }),
                                (0, i.jsxs)(r.MenuGroup, {
                                    children: [s && nd, V && ns, s && nc, nj, V && nt, nu, na, no, V && nm, V && nf, s && nC]
                                }),
                                (0, i.jsxs)(r.MenuGroup, {
                                    children: [a && nI, nx]
                                }),
                                B &&
                                    (0, i.jsxs)(r.MenuGroup, {
                                        children: [np, n_]
                                    })
                            ]
                        }),
                    (0, x.Z)(t.id) &&
                        (0, i.jsxs)(r.MenuGroup, {
                            children: [a && nI, nx]
                        }),
                    (0, i.jsx)(r.MenuGroup, { children: nT }),
                    (0, i.jsx)(r.MenuGroup, { children: nS }),
                    (0, i.jsxs)(r.MenuGroup, {
                        children: [nh, !W && ng]
                    })
                ]
            });
        },
        { object: z.qAy.CONTEXT_MENU }
    ),
    [s.Z.CONTEXT_MENU, s.Z.DM_USER_MENU]
);
