e.d(t, { default: () => V });
var i = e(200651);
e(192379);
var l = e(481060),
    r = e(239091),
    a = e(883385),
    s = e(108843),
    d = e(911969),
    u = e(947440),
    o = e(100527),
    c = e(441061),
    h = e(167675),
    f = e(737013),
    x = e(607783),
    _ = e(702321),
    g = e(461535),
    I = e(776568),
    N = e(299206),
    S = e(895563),
    v = e(212205),
    C = e(62420),
    j = e(122074),
    m = e(819403),
    T = e(777658),
    Z = e(858488),
    E = e(44652),
    A = e(185457),
    U = e(570870),
    O = e(389052),
    p = e(24311),
    M = e(794973),
    y = e(165855),
    b = e(332576),
    P = e(158508),
    k = e(710631),
    R = e(47091),
    D = e(558924),
    G = e(991307),
    F = e(37258),
    L = e(700994),
    w = e(332031),
    Y = e(981631),
    Q = e(388032);
let V = (0, s.Z)(
    (0, a.Z)(
        function (n) {
            let { user: t, channel: e, channelSelected: a = !1, showMute: s = !0, showMediaItems: o = !1, showChannelCallItems: V = !1, showModalItems: z = !0, targetIsUser: B = !1, context: W, onSelect: K, onHeightUpdate: X } = n,
                q = (0, F.Z)({
                    userId: t.id,
                    guildId: null
                }),
                J = (0, p.Z)({
                    user: t,
                    context: W
                }),
                H = (0, A.Z)({
                    user: t,
                    channelId: e.id,
                    context: W
                }),
                $ = (0, Z.Z)({ user: t }),
                nn = (0, w.Z)(t.id),
                nt = (0, M.Z)(e.id, a),
                ne = (0, k.Z)({ user: t }),
                ni = (0, u.Z)(null, t),
                nl = (0, L.Z)(t.id),
                nr = (0, D.Z)(t, e.id),
                na = (0, T.Z)({ user: t }),
                ns = (0, E.Z)({ user: t }),
                nd = (0, R.Z)({ user: t }),
                nu = (0, G.Z)(t.id),
                no = (0, x.B)({
                    userId: t.id,
                    channelId: e.id,
                    guildId: e.getGuildId(),
                    location: 'DMUserContextMenu'
                }),
                nc = (0, b.Z)(t.id, e.id),
                nh = (0, O.Z)({
                    user: t,
                    location: 'DMUserContextMenu'
                }),
                nf = (0, P.Z)({
                    user: t,
                    location: 'DMUserContextMenu'
                }),
                nx = (0, I.ZP)(e),
                n_ = (0, j.Uf)(Y.aIL, e.id, 'trailing'),
                ng = (0, N.Z)({
                    id: t.id,
                    label: Q.intl.string(Q.t['/AXYnJ'])
                }),
                nI = (0, N.Z)({
                    id: e.id,
                    label: Q.intl.string(Q.t.gFHI3t)
                }),
                nN = (0, g.Z)(e),
                nS = (0, h.Z)(t.id),
                nv = (0, c.Z)(e.id),
                nC = (0, m.Z)(t),
                nj = (0, f.Z)(t.id),
                nm = (0, U.Z)({
                    commandType: d.yU.USER,
                    commandTargetId: t.id,
                    channel: e,
                    guildId: void 0,
                    onHeightUpdate: X
                }),
                nT = (0, S.l)(e),
                nZ = (0, S.P)(e),
                nE = (0, v.Z)(e),
                nA = (0, C.Z)(e),
                nU = (0, y.Z)({ channel: e }),
                nO = e.isManaged(),
                np = t.isNonUserBot();
            return (0, i.jsxs)(l.v2r, {
                navId: 'user-context',
                onClose: r.Zy,
                'aria-label': Q.intl.string(Q.t.liqwPD),
                onSelect: K,
                children: [
                    (0, i.jsx)(l.kSQ, { children: !(np && !(0, _.Z)(e.id)) && nN }),
                    (0, i.jsxs)(l.kSQ, {
                        children: [nT, nE, nA]
                    }),
                    (0, i.jsx)(l.kSQ, { children: !np && nC }),
                    (0, i.jsxs)(l.kSQ, {
                        children: [
                            !np &&
                                (0, i.jsxs)(i.Fragment, {
                                    children: [z && q, J, !nO && nr, z && H, z && $, nn]
                                }),
                            (0, _.Z)(e.id) && q,
                            nt
                        ]
                    }),
                    !np &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(l.kSQ, { children: o && nl }),
                                (0, i.jsx)(l.kSQ, { children: z && ni }),
                                (0, i.jsxs)(l.kSQ, {
                                    children: [o && nu, z && no, o && nc, nm, z && ne, na, ns, nd, z && nf, z && nh, o && nj]
                                }),
                                (0, i.jsxs)(l.kSQ, {
                                    children: [s && nx, n_]
                                }),
                                V &&
                                    (0, i.jsxs)(l.kSQ, {
                                        children: [nv, nS]
                                    })
                            ]
                        }),
                    (0, _.Z)(e.id) &&
                        (0, i.jsxs)(l.kSQ, {
                            children: [s && nx, n_]
                        }),
                    (0, i.jsx)(l.kSQ, { children: nZ }),
                    (0, i.jsx)(l.kSQ, { children: nU }),
                    (0, i.jsxs)(l.kSQ, {
                        children: [ng, !B && nI]
                    })
                ]
            });
        },
        { object: Y.qAy.CONTEXT_MENU }
    ),
    [o.Z.CONTEXT_MENU, o.Z.DM_USER_MENU]
);
