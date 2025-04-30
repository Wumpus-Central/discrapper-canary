e.d(t, { default: () => J });
var i = e(200651);
e(192379);
var l = e(399606),
    r = e(481060),
    d = e(239091),
    s = e(883385),
    a = e(108843),
    u = e(911969),
    o = e(947440),
    c = e(100527),
    f = e(441061),
    h = e(167675),
    g = e(737013),
    Z = e(607783),
    S = e(702321),
    j = e(461535),
    x = e(776568),
    I = e(658138),
    _ = e(299206),
    N = e(895563),
    v = e(212205),
    p = e(62420),
    E = e(122074),
    k = e(819403),
    A = e(163612),
    C = e(592125),
    U = e(944486),
    T = e(777658),
    m = e(858488),
    M = e(44652),
    P = e(185457),
    R = e(570870),
    y = e(389052),
    b = e(24311),
    Q = e(794973),
    D = e(165855),
    O = e(332576),
    W = e(158508),
    V = e(710631),
    w = e(47091),
    F = e(558924),
    K = e(991307),
    G = e(37258),
    Y = e(700994),
    q = e(332031),
    B = e(981631),
    L = e(388032);
let J = (0, a.Z)(
    (0, s.Z)(
        function (n) {
            let { user: t, channel: e, channelSelected: s = !1, showMute: a = !0, showMediaItems: c = !1, showChannelCallItems: J = !1, showModalItems: X = !0, targetIsUser: z = !1, context: H, onSelect: $, onHeightUpdate: nn, onInteraction: nt } = n,
                ne = (0, G.Z)({
                    userId: t.id,
                    guildId: null
                }),
                ni = (0, b.Z)({
                    user: t,
                    context: H
                }),
                nl = (0, P.Z)({
                    user: t,
                    channelId: e.id,
                    context: H
                }),
                nr = (0, m.Z)({ user: t }),
                nd = (0, q.Z)(t.id),
                ns = (0, Q.Z)(e.id, s),
                na = (0, V.Z)({ user: t }),
                nu = (0, o.Z)(null, t),
                no = (0, Y.Z)(t.id),
                nc = (0, l.e7)([U.Z, C.Z], () => {
                    let n = U.Z.getVoiceChannelId();
                    return C.Z.getChannel(n);
                }),
                { enabled: nf } = A.Z.useExperiment({
                    guildId: null == nc ? void 0 : nc.guild_id,
                    location: 'DMUserContextMenu'
                }),
                nh = nf ? (null == nc ? void 0 : nc.id) : e.id,
                ng = (0, F.Z)(t, nh),
                nZ = (0, T.Z)({ user: t }),
                nS = (0, M.Z)({ user: t }),
                nj = (0, w.Z)({ user: t }),
                nx = (0, K.Z)(t.id),
                nI = (0, Z.B)({
                    userId: t.id,
                    channelId: e.id,
                    guildId: e.getGuildId()
                }),
                n_ = (0, O.Z)(t.id, e.id),
                nN = (0, y.Z)({
                    user: t,
                    location: 'DMUserContextMenu'
                }),
                nv = (0, W.Z)({
                    user: t,
                    location: 'DMUserContextMenu'
                }),
                np = (0, x.ZP)(e),
                nE = (0, E.Uf)(B.aIL, e.id, 'trailing'),
                nk = (0, _.Z)({
                    id: t.id,
                    label: L.intl.string(L.t['/AXYnJ'])
                }),
                nA = (0, _.Z)({
                    id: e.id,
                    label: L.intl.string(L.t.gFHI3t)
                }),
                nC = (0, j.Z)(e),
                nU = (0, h.Z)(t.id),
                nT = (0, f.Z)(e.id),
                nm = (0, k.Z)(t),
                nM = (0, g.Z)(t.id),
                nP = (0, R.Z)({
                    commandType: u.yU.USER,
                    commandTargetId: t.id,
                    channel: e,
                    guildId: void 0,
                    onHeightUpdate: nn
                }),
                nR = (0, N.l)(e),
                ny = (0, N.P)(e),
                nb = (0, v.Z)(e),
                nQ = (0, p.Z)(e),
                nD = (0, D.Z)({ channel: e }),
                nO = (0, I.D)(e),
                nW = e.isManaged(),
                nV = t.isNonUserBot();
            return (0, i.jsxs)(r.v2r, {
                navId: 'user-context',
                onClose: d.Zy,
                'aria-label': L.intl.string(L.t.liqwPD),
                onSelect: $,
                onInteraction: nt,
                children: [
                    (0, i.jsx)(r.kSQ, { children: !(nV && !(0, S.Z)(e.id)) && nC }),
                    (0, i.jsxs)(r.kSQ, {
                        children: [nR, nb, nQ, nO]
                    }),
                    (0, i.jsx)(r.kSQ, { children: !nV && nm }),
                    (0, i.jsxs)(r.kSQ, {
                        children: [
                            !nV &&
                                (0, i.jsxs)(i.Fragment, {
                                    children: [X && ne, ni, !nW && ng, X && nl, X && nr, nd]
                                }),
                            (0, S.Z)(e.id) && ne,
                            ns
                        ]
                    }),
                    !nV &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(r.kSQ, { children: c && no }),
                                (0, i.jsx)(r.kSQ, { children: X && nu }),
                                (0, i.jsxs)(r.kSQ, {
                                    children: [c && nx, X && nI, c && n_, nP, X && na, nZ, nS, nj, X && nv, X && nN, c && nM]
                                }),
                                (0, i.jsxs)(r.kSQ, {
                                    children: [a && np, nE]
                                }),
                                J &&
                                    (0, i.jsxs)(r.kSQ, {
                                        children: [nT, nU]
                                    })
                            ]
                        }),
                    (0, S.Z)(e.id) &&
                        (0, i.jsxs)(r.kSQ, {
                            children: [a && np, nE]
                        }),
                    (0, i.jsx)(r.kSQ, { children: ny }),
                    (0, i.jsx)(r.kSQ, { children: nD }),
                    (0, i.jsxs)(r.kSQ, {
                        children: [nk, !z && nA]
                    })
                ]
            });
        },
        { object: B.qAy.CONTEXT_MENU }
    ),
    [c.Z.CONTEXT_MENU, c.Z.DM_USER_MENU]
);
