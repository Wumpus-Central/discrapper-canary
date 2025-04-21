n.d(t, { default: () => q });
var i = n(200651);
n(192379);
var l = n(399606),
    r = n(481060),
    s = n(239091),
    a = n(883385),
    d = n(108843),
    o = n(911969),
    u = n(947440),
    c = n(100527),
    f = n(441061),
    g = n(167675),
    Z = n(737013),
    h = n(607783),
    j = n(702321),
    v = n(461535),
    b = n(776568),
    S = n(658138),
    x = n(299206),
    m = n(895563),
    p = n(212205),
    _ = n(62420),
    I = n(122074),
    N = n(819403),
    E = n(163612),
    A = n(592125),
    y = n(944486),
    M = n(777658),
    O = n(858488),
    U = n(44652),
    P = n(185457),
    D = n(570870),
    C = n(389052),
    k = n(24311),
    T = n(794973),
    L = n(165855),
    R = n(332576),
    V = n(158508),
    w = n(710631),
    Q = n(47091),
    W = n(558924),
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
                ei = (0, k.Z)({
                    user: t,
                    context: X
                }),
                el = (0, P.Z)({
                    user: t,
                    channelId: n.id,
                    context: X
                }),
                er = (0, O.Z)({ user: t }),
                es = (0, Y.Z)(t.id),
                ea = (0, T.Z)(n.id, a),
                ed = (0, w.Z)({ user: t }),
                eo = (0, u.Z)(null, t),
                eu = (0, K.Z)(t.id),
                ec = (0, l.e7)([y.Z, A.Z], () => {
                    let e = y.Z.getVoiceChannelId();
                    return A.Z.getChannel(e);
                }),
                { enabled: ef } = E.Z.useExperiment({
                    guildId: null == ec ? void 0 : ec.guild_id,
                    location: 'DMUserContextMenu'
                }),
                eg = ef ? (null == ec ? void 0 : ec.id) : n.id,
                eZ = (0, W.Z)(t, eg),
                eh = (0, M.Z)({ user: t }),
                ej = (0, U.Z)({ user: t }),
                ev = (0, Q.Z)({ user: t }),
                eb = (0, B.Z)(t.id),
                eS = (0, h.B)({
                    userId: t.id,
                    channelId: n.id,
                    guildId: n.getGuildId()
                }),
                ex = (0, R.Z)(t.id, n.id),
                em = (0, C.Z)({
                    user: t,
                    location: 'DMUserContextMenu'
                }),
                ep = (0, V.Z)({
                    user: t,
                    location: 'DMUserContextMenu'
                }),
                e_ = (0, b.ZP)(n),
                eI = (0, I.Uf)(G.aIL, n.id, 'trailing'),
                eN = (0, x.Z)({
                    id: t.id,
                    label: J.intl.string(J.t['/AXYnJ'])
                }),
                eE = (0, x.Z)({
                    id: n.id,
                    label: J.intl.string(J.t.gFHI3t)
                }),
                eA = (0, v.Z)(n),
                ey = (0, g.Z)(t.id),
                eM = (0, f.Z)(n.id),
                eO = (0, N.Z)(t),
                eU = (0, Z.Z)(t.id),
                eP = (0, D.Z)({
                    commandType: o.yU.USER,
                    commandTargetId: t.id,
                    channel: n,
                    guildId: void 0,
                    onHeightUpdate: ee
                }),
                eD = (0, m.l)(n),
                eC = (0, m.P)(n),
                ek = (0, p.Z)(n),
                eT = (0, _.Z)(n),
                eL = (0, L.Z)({ channel: n }),
                eR = (0, S.D)(n),
                eV = n.isManaged(),
                ew = t.isNonUserBot();
            return (0, i.jsxs)(r.v2r, {
                navId: 'user-context',
                onClose: s.Zy,
                'aria-label': J.intl.string(J.t.liqwPD),
                onSelect: $,
                onInteraction: et,
                children: [
                    (0, i.jsx)(r.kSQ, { children: !(ew && !(0, j.Z)(n.id)) && eA }),
                    (0, i.jsxs)(r.kSQ, {
                        children: [eD, ek, eT, eR]
                    }),
                    (0, i.jsx)(r.kSQ, { children: !ew && eO }),
                    (0, i.jsxs)(r.kSQ, {
                        children: [
                            !ew &&
                                (0, i.jsxs)(i.Fragment, {
                                    children: [H && en, ei, !eV && eZ, H && el, H && er, es]
                                }),
                            (0, j.Z)(n.id) && en,
                            ea
                        ]
                    }),
                    !ew &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(r.kSQ, { children: c && eu }),
                                (0, i.jsx)(r.kSQ, { children: H && eo }),
                                (0, i.jsxs)(r.kSQ, {
                                    children: [c && eb, H && eS, c && ex, eP, H && ed, eh, ej, ev, H && ep, H && em, c && eU]
                                }),
                                (0, i.jsxs)(r.kSQ, {
                                    children: [d && e_, eI]
                                }),
                                q &&
                                    (0, i.jsxs)(r.kSQ, {
                                        children: [eM, ey]
                                    })
                            ]
                        }),
                    (0, j.Z)(n.id) &&
                        (0, i.jsxs)(r.kSQ, {
                            children: [d && e_, eI]
                        }),
                    (0, i.jsx)(r.kSQ, { children: eC }),
                    (0, i.jsx)(r.kSQ, { children: eL }),
                    (0, i.jsxs)(r.kSQ, {
                        children: [eN, !z && eE]
                    })
                ]
            });
        },
        { object: G.qAy.CONTEXT_MENU }
    ),
    [c.Z.CONTEXT_MENU, c.Z.DM_USER_MENU]
);
