t.d(e, { default: () => J });
var i = t(200651);
t(192379);
var l = t(399606),
    r = t(481060),
    d = t(239091),
    s = t(883385),
    a = t(108843),
    u = t(911969),
    o = t(947440),
    c = t(100527),
    f = t(441061),
    h = t(167675),
    g = t(737013),
    Z = t(607783),
    N = t(702321),
    S = t(461535),
    j = t(776568),
    x = t(658138),
    I = t(299206),
    _ = t(895563),
    v = t(212205),
    p = t(62420),
    E = t(122074),
    k = t(819403),
    A = t(163612),
    C = t(592125),
    U = t(944486),
    T = t(777658),
    m = t(858488),
    M = t(44652),
    W = t(185457),
    P = t(570870),
    R = t(389052),
    y = t(24311),
    b = t(794973),
    Q = t(165855),
    D = t(332576),
    O = t(158508),
    V = t(710631),
    w = t(47091),
    F = t(558924),
    K = t(991307),
    G = t(37258),
    Y = t(700994),
    q = t(332031),
    B = t(981631),
    L = t(388032);
let J = (0, a.Z)(
    (0, s.Z)(
        function (n) {
            let { user: e, channel: t, channelSelected: s = !1, showMute: a = !0, showMediaItems: c = !1, showChannelCallItems: J = !1, showModalItems: X = !0, targetIsUser: z = !1, context: H, onSelect: $, onHeightUpdate: nn, onInteraction: ne } = n,
                nt = (0, G.Z)({
                    userId: e.id,
                    guildId: null
                }),
                ni = (0, y.Z)({
                    user: e,
                    context: H
                }),
                nl = (0, W.Z)({
                    user: e,
                    channelId: t.id,
                    context: H
                }),
                nr = (0, m.Z)({ user: e }),
                nd = (0, q.Z)(e.id),
                ns = (0, b.Z)(t.id, s),
                na = (0, V.Z)({ user: e }),
                nu = (0, o.Z)(null, e),
                no = (0, Y.Z)(e.id),
                nc = (0, l.e7)([U.Z, C.Z], () => {
                    let n = U.Z.getVoiceChannelId();
                    return C.Z.getChannel(n);
                }),
                { enabled: nf } = A.Z.useExperiment({
                    guildId: null == nc ? void 0 : nc.guild_id,
                    location: 'DMUserContextMenu'
                }),
                nh = nf ? (null == nc ? void 0 : nc.id) : t.id,
                ng = (0, F.Z)(e, nh),
                nZ = (0, T.Z)({ user: e }),
                nN = (0, M.Z)({ user: e }),
                nS = (0, w.Z)({ user: e }),
                nj = (0, K.Z)(e.id),
                nx = (0, Z.B)({
                    userId: e.id,
                    channelId: t.id,
                    guildId: t.getGuildId()
                }),
                nI = (0, D.Z)(e.id, t.id),
                n_ = (0, R.Z)({
                    user: e,
                    location: 'DMUserContextMenu'
                }),
                nv = (0, O.Z)({
                    user: e,
                    location: 'DMUserContextMenu'
                }),
                np = (0, j.ZP)(t),
                nE = (0, E.Uf)(B.aIL, t.id, 'trailing'),
                nk = (0, I.Z)({
                    id: e.id,
                    label: L.NW.string(L.t['/AXYnJ'])
                }),
                nA = (0, I.Z)({
                    id: t.id,
                    label: L.NW.string(L.t.gFHI3t)
                }),
                nC = (0, S.Z)(t),
                nU = (0, h.Z)(e.id),
                nT = (0, f.Z)(t.id),
                nm = (0, k.Z)(e),
                nM = (0, g.Z)(e.id),
                nW = (0, P.Z)({
                    commandType: u.yU.USER,
                    commandTargetId: e.id,
                    channel: t,
                    guildId: void 0,
                    onHeightUpdate: nn
                }),
                nP = (0, _.l)(t),
                nR = (0, _.P)(t),
                ny = (0, v.Z)(t),
                nb = (0, p.Z)(t),
                nQ = (0, Q.Z)({ channel: t }),
                nD = (0, x.D)(t),
                nO = t.isManaged(),
                nV = e.isNonUserBot();
            return (0, i.jsxs)(r.v2r, {
                navId: 'user-context',
                onClose: d.Zy,
                'aria-label': L.NW.string(L.t.liqwPD),
                onSelect: $,
                onInteraction: ne,
                children: [
                    (0, i.jsx)(r.kSQ, { children: !(nV && !(0, N.Z)(t.id)) && nC }),
                    (0, i.jsxs)(r.kSQ, {
                        children: [nP, ny, nb, nD]
                    }),
                    (0, i.jsx)(r.kSQ, { children: !nV && nm }),
                    (0, i.jsxs)(r.kSQ, {
                        children: [
                            !nV &&
                                (0, i.jsxs)(i.Fragment, {
                                    children: [X && nt, ni, !nO && ng, X && nl, X && nr, nd]
                                }),
                            (0, N.Z)(t.id) && nt,
                            ns
                        ]
                    }),
                    !nV &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(r.kSQ, { children: c && no }),
                                (0, i.jsx)(r.kSQ, { children: X && nu }),
                                (0, i.jsxs)(r.kSQ, {
                                    children: [c && nj, X && nx, c && nI, nW, X && na, nZ, nN, nS, X && nv, X && n_, c && nM]
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
                    (0, N.Z)(t.id) &&
                        (0, i.jsxs)(r.kSQ, {
                            children: [a && np, nE]
                        }),
                    (0, i.jsx)(r.kSQ, { children: nR }),
                    (0, i.jsx)(r.kSQ, { children: nQ }),
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
