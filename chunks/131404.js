t.d(e, { default: () => L });
var i = t(200651);
t(192379);
var r = t(399606),
    l = t(481060),
    s = t(239091),
    d = t(883385),
    a = t(108843),
    u = t(911969),
    o = t(947440),
    c = t(100527),
    f = t(441061),
    h = t(167675),
    g = t(737013),
    N = t(607783),
    Z = t(702321),
    S = t(461535),
    x = t(776568),
    j = t(658138),
    I = t(299206),
    _ = t(895563),
    v = t(212205),
    p = t(62420),
    E = t(122074),
    k = t(819403),
    A = t(163612),
    U = t(944486),
    C = t(777658),
    M = t(858488),
    T = t(44652),
    m = t(185457),
    W = t(570870),
    P = t(389052),
    R = t(24311),
    y = t(794973),
    b = t(165855),
    D = t(332576),
    Q = t(158508),
    O = t(710631),
    V = t(47091),
    w = t(558924),
    F = t(991307),
    K = t(37258),
    G = t(700994),
    Y = t(332031),
    q = t(981631),
    B = t(388032);
let L = (0, a.Z)(
    (0, d.Z)(
        function (n) {
            let { user: e, channel: t, channelSelected: d = !1, showMute: a = !0, showMediaItems: c = !1, showChannelCallItems: L = !1, showModalItems: J = !0, targetIsUser: X = !1, context: z, onSelect: H, onHeightUpdate: $, onInteraction: nn } = n,
                ne = (0, K.Z)({
                    userId: e.id,
                    guildId: null
                }),
                nt = (0, R.Z)({
                    user: e,
                    context: z
                }),
                ni = (0, m.Z)({
                    user: e,
                    channelId: t.id,
                    context: z
                }),
                nr = (0, M.Z)({ user: e }),
                nl = (0, Y.Z)(e.id),
                ns = (0, y.Z)(t.id, d),
                nd = (0, O.Z)({ user: e }),
                na = (0, o.Z)(null, e),
                nu = (0, G.Z)(e.id),
                { enabled: no } = A.Z.useExperiment({
                    guildId: null == t ? void 0 : t.guild_id,
                    location: 'DMUserContextMenu'
                }),
                nc = (0, r.e7)([U.Z], () => U.Z.getVoiceChannelId()),
                nf = no ? nc : t.id,
                nh = (0, w.Z)(e, nf),
                ng = (0, C.Z)({ user: e }),
                nN = (0, T.Z)({ user: e }),
                nZ = (0, V.Z)({ user: e }),
                nS = (0, F.Z)(e.id),
                nx = (0, N.B)({
                    userId: e.id,
                    channelId: t.id,
                    guildId: t.getGuildId(),
                    location: 'DMUserContextMenu'
                }),
                nj = (0, D.Z)(e.id, t.id),
                nI = (0, P.Z)({
                    user: e,
                    location: 'DMUserContextMenu'
                }),
                n_ = (0, Q.Z)({
                    user: e,
                    location: 'DMUserContextMenu'
                }),
                nv = (0, x.ZP)(t),
                np = (0, E.Uf)(q.aIL, t.id, 'trailing'),
                nE = (0, I.Z)({
                    id: e.id,
                    label: B.NW.string(B.t['/AXYnJ'])
                }),
                nk = (0, I.Z)({
                    id: t.id,
                    label: B.NW.string(B.t.gFHI3t)
                }),
                nA = (0, S.Z)(t),
                nU = (0, h.Z)(e.id),
                nC = (0, f.Z)(t.id),
                nM = (0, k.Z)(e),
                nT = (0, g.Z)(e.id),
                nm = (0, W.Z)({
                    commandType: u.yU.USER,
                    commandTargetId: e.id,
                    channel: t,
                    guildId: void 0,
                    onHeightUpdate: $
                }),
                nW = (0, _.l)(t),
                nP = (0, _.P)(t),
                nR = (0, v.Z)(t),
                ny = (0, p.Z)(t),
                nb = (0, b.Z)({ channel: t }),
                nD = (0, j.D)(t),
                nQ = t.isManaged(),
                nO = e.isNonUserBot();
            return (0, i.jsxs)(l.v2r, {
                navId: 'user-context',
                onClose: s.Zy,
                'aria-label': B.NW.string(B.t.liqwPD),
                onSelect: H,
                onInteraction: nn,
                children: [
                    (0, i.jsx)(l.kSQ, { children: !(nO && !(0, Z.Z)(t.id)) && nA }),
                    (0, i.jsxs)(l.kSQ, {
                        children: [nW, nR, ny, nD]
                    }),
                    (0, i.jsx)(l.kSQ, { children: !nO && nM }),
                    (0, i.jsxs)(l.kSQ, {
                        children: [
                            !nO &&
                                (0, i.jsxs)(i.Fragment, {
                                    children: [J && ne, nt, !nQ && nh, J && ni, J && nr, nl]
                                }),
                            (0, Z.Z)(t.id) && ne,
                            ns
                        ]
                    }),
                    !nO &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(l.kSQ, { children: c && nu }),
                                (0, i.jsx)(l.kSQ, { children: J && na }),
                                (0, i.jsxs)(l.kSQ, {
                                    children: [c && nS, J && nx, c && nj, nm, J && nd, ng, nN, nZ, J && n_, J && nI, c && nT]
                                }),
                                (0, i.jsxs)(l.kSQ, {
                                    children: [a && nv, np]
                                }),
                                L &&
                                    (0, i.jsxs)(l.kSQ, {
                                        children: [nC, nU]
                                    })
                            ]
                        }),
                    (0, Z.Z)(t.id) &&
                        (0, i.jsxs)(l.kSQ, {
                            children: [a && nv, np]
                        }),
                    (0, i.jsx)(l.kSQ, { children: nP }),
                    (0, i.jsx)(l.kSQ, { children: nb }),
                    (0, i.jsxs)(l.kSQ, {
                        children: [nE, !X && nk]
                    })
                ]
            });
        },
        { object: q.qAy.CONTEXT_MENU }
    ),
    [c.Z.CONTEXT_MENU, c.Z.DM_USER_MENU]
);
