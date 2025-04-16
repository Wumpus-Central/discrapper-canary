n.d(t, { default: () => q });
var i = n(200651);
n(192379);
var r = n(399606),
    l = n(481060),
    s = n(239091),
    a = n(883385),
    d = n(108843),
    o = n(911969),
    u = n(947440),
    c = n(100527),
    f = n(441061),
    g = n(167675),
    Z = n(737013),
    N = n(607783),
    h = n(702321),
    j = n(461535),
    v = n(776568),
    b = n(658138),
    S = n(299206),
    x = n(895563),
    m = n(212205),
    p = n(62420),
    _ = n(122074),
    I = n(819403),
    E = n(163612),
    A = n(592125),
    y = n(944486),
    M = n(777658),
    O = n(858488),
    W = n(44652),
    U = n(185457),
    P = n(570870),
    D = n(389052),
    C = n(24311),
    k = n(794973),
    T = n(165855),
    L = n(332576),
    R = n(158508),
    V = n(710631),
    w = n(47091),
    Q = n(558924),
    B = n(991307),
    F = n(37258),
    K = n(700994),
    Y = n(332031),
    G = n(981631),
    J = n(388032);
let q = (0, d.Z)(
    (0, a.Z)(
        function (e) {
            let { user: t, channel: n, channelSelected: a = !1, showMute: d = !0, showMediaItems: c = !1, showChannelCallItems: q = !1, showModalItems: H = !0, targetIsUser: z = !1, context: X, onSelect: $, onHeightUpdate: ee, onInteraction: et } = e,
                en = (0, F.Z)({
                    userId: t.id,
                    guildId: null
                }),
                ei = (0, C.Z)({
                    user: t,
                    context: X
                }),
                er = (0, U.Z)({
                    user: t,
                    channelId: n.id,
                    context: X
                }),
                el = (0, O.Z)({ user: t }),
                es = (0, Y.Z)(t.id),
                ea = (0, k.Z)(n.id, a),
                ed = (0, V.Z)({ user: t }),
                eo = (0, u.Z)(null, t),
                eu = (0, K.Z)(t.id),
                ec = (0, r.e7)([y.Z, A.Z], () => {
                    let e = y.Z.getVoiceChannelId();
                    return A.Z.getChannel(e);
                }),
                { enabled: ef } = E.Z.useExperiment({
                    guildId: null == ec ? void 0 : ec.guild_id,
                    location: 'DMUserContextMenu'
                }),
                eg = ef ? (null == ec ? void 0 : ec.id) : n.id,
                eZ = (0, Q.Z)(t, eg),
                eN = (0, M.Z)({ user: t }),
                eh = (0, W.Z)({ user: t }),
                ej = (0, w.Z)({ user: t }),
                ev = (0, B.Z)(t.id),
                eb = (0, N.B)({
                    userId: t.id,
                    channelId: n.id,
                    guildId: n.getGuildId()
                }),
                eS = (0, L.Z)(t.id, n.id),
                ex = (0, D.Z)({
                    user: t,
                    location: 'DMUserContextMenu'
                }),
                em = (0, R.Z)({
                    user: t,
                    location: 'DMUserContextMenu'
                }),
                ep = (0, v.ZP)(n),
                e_ = (0, _.Uf)(G.aIL, n.id, 'trailing'),
                eI = (0, S.Z)({
                    id: t.id,
                    label: J.NW.string(J.t['/AXYnJ'])
                }),
                eE = (0, S.Z)({
                    id: n.id,
                    label: J.NW.string(J.t.gFHI3t)
                }),
                eA = (0, j.Z)(n),
                ey = (0, g.Z)(t.id),
                eM = (0, f.Z)(n.id),
                eO = (0, I.Z)(t),
                eW = (0, Z.Z)(t.id),
                eU = (0, P.Z)({
                    commandType: o.yU.USER,
                    commandTargetId: t.id,
                    channel: n,
                    guildId: void 0,
                    onHeightUpdate: ee
                }),
                eP = (0, x.l)(n),
                eD = (0, x.P)(n),
                eC = (0, m.Z)(n),
                ek = (0, p.Z)(n),
                eT = (0, T.Z)({ channel: n }),
                eL = (0, b.D)(n),
                eR = n.isManaged(),
                eV = t.isNonUserBot();
            return (0, i.jsxs)(l.v2r, {
                navId: 'user-context',
                onClose: s.Zy,
                'aria-label': J.NW.string(J.t.liqwPD),
                onSelect: $,
                onInteraction: et,
                children: [
                    (0, i.jsx)(l.kSQ, { children: !(eV && !(0, h.Z)(n.id)) && eA }),
                    (0, i.jsxs)(l.kSQ, {
                        children: [eP, eC, ek, eL]
                    }),
                    (0, i.jsx)(l.kSQ, { children: !eV && eO }),
                    (0, i.jsxs)(l.kSQ, {
                        children: [
                            !eV &&
                                (0, i.jsxs)(i.Fragment, {
                                    children: [H && en, ei, !eR && eZ, H && er, H && el, es]
                                }),
                            (0, h.Z)(n.id) && en,
                            ea
                        ]
                    }),
                    !eV &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(l.kSQ, { children: c && eu }),
                                (0, i.jsx)(l.kSQ, { children: H && eo }),
                                (0, i.jsxs)(l.kSQ, {
                                    children: [c && ev, H && eb, c && eS, eU, H && ed, eN, eh, ej, H && em, H && ex, c && eW]
                                }),
                                (0, i.jsxs)(l.kSQ, {
                                    children: [d && ep, e_]
                                }),
                                q &&
                                    (0, i.jsxs)(l.kSQ, {
                                        children: [eM, ey]
                                    })
                            ]
                        }),
                    (0, h.Z)(n.id) &&
                        (0, i.jsxs)(l.kSQ, {
                            children: [d && ep, e_]
                        }),
                    (0, i.jsx)(l.kSQ, { children: eD }),
                    (0, i.jsx)(l.kSQ, { children: eT }),
                    (0, i.jsxs)(l.kSQ, {
                        children: [eI, !z && eE]
                    })
                ]
            });
        },
        { object: G.qAy.CONTEXT_MENU }
    ),
    [c.Z.CONTEXT_MENU, c.Z.DM_USER_MENU]
);
