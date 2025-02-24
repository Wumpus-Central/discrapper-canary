n.d(t, { default: () => Q });
var r = n(200651);
n(192379);
var i = n(481060),
    l = n(239091),
    a = n(883385),
    o = n(108843),
    s = n(911969),
    c = n(947440),
    u = n(100527),
    d = n(441061),
    f = n(167675),
    h = n(737013),
    g = n(607783),
    O = n(702321),
    j = n(461535),
    N = n(776568),
    b = n(299206),
    p = n(895563),
    v = n(212205),
    y = n(62420),
    _ = n(122074),
    x = n(819403),
    S = n(777658),
    I = n(858488),
    m = n(44652),
    C = n(185457),
    P = n(570870),
    E = n(389052),
    T = n(24311),
    Z = n(794973),
    A = n(165855),
    U = n(332576),
    M = n(158508),
    D = n(710631),
    w = n(47091),
    k = n(558924),
    R = n(991307),
    W = n(37258),
    G = n(700994),
    F = n(332031),
    L = n(981631),
    Y = n(388032);
let Q = (0, o.Z)(
    (0, a.Z)(
        function (e) {
            let { user: t, channel: n, channelSelected: a = !1, showMute: o = !0, showMediaItems: u = !1, showChannelCallItems: Q = !1, showModalItems: V = !0, targetIsUser: z = !1, context: B, onSelect: K, onHeightUpdate: X, onInteraction: q } = e,
                J = (0, W.Z)({
                    userId: t.id,
                    guildId: null
                }),
                H = (0, T.Z)({
                    user: t,
                    context: B
                }),
                $ = (0, C.Z)({
                    user: t,
                    channelId: n.id,
                    context: B
                }),
                ee = (0, I.Z)({ user: t }),
                et = (0, F.Z)(t.id),
                en = (0, Z.Z)(n.id, a),
                er = (0, D.Z)({ user: t }),
                ei = (0, c.Z)(null, t),
                el = (0, G.Z)(t.id),
                ea = (0, k.Z)(t, n.id),
                eo = (0, S.Z)({ user: t }),
                es = (0, m.Z)({ user: t }),
                ec = (0, w.Z)({ user: t }),
                eu = (0, R.Z)(t.id),
                ed = (0, g.B)({
                    userId: t.id,
                    channelId: n.id,
                    guildId: n.getGuildId(),
                    location: 'DMUserContextMenu'
                }),
                ef = (0, U.Z)(t.id, n.id),
                eh = (0, E.Z)({
                    user: t,
                    location: 'DMUserContextMenu'
                }),
                eg = (0, M.Z)({
                    user: t,
                    location: 'DMUserContextMenu'
                }),
                eO = (0, N.ZP)(n),
                ej = (0, _.Uf)(L.aIL, n.id, 'trailing'),
                eN = (0, b.Z)({
                    id: t.id,
                    label: Y.NW.string(Y.t['/AXYnJ'])
                }),
                eb = (0, b.Z)({
                    id: n.id,
                    label: Y.NW.string(Y.t.gFHI3t)
                }),
                ep = (0, j.Z)(n),
                ev = (0, f.Z)(t.id),
                ey = (0, d.Z)(n.id),
                e_ = (0, x.Z)(t),
                ex = (0, h.Z)(t.id),
                eS = (0, P.Z)({
                    commandType: s.yU.USER,
                    commandTargetId: t.id,
                    channel: n,
                    guildId: void 0,
                    onHeightUpdate: X
                }),
                eI = (0, p.l)(n),
                em = (0, p.P)(n),
                eC = (0, v.Z)(n),
                eP = (0, y.Z)(n),
                eE = (0, A.Z)({ channel: n }),
                eT = n.isManaged(),
                eZ = t.isNonUserBot();
            return (0, r.jsxs)(i.v2r, {
                navId: 'user-context',
                onClose: l.Zy,
                'aria-label': Y.NW.string(Y.t.liqwPD),
                onSelect: K,
                onInteraction: q,
                children: [
                    (0, r.jsx)(i.kSQ, { children: !(eZ && !(0, O.Z)(n.id)) && ep }),
                    (0, r.jsxs)(i.kSQ, {
                        children: [eI, eC, eP]
                    }),
                    (0, r.jsx)(i.kSQ, { children: !eZ && e_ }),
                    (0, r.jsxs)(i.kSQ, {
                        children: [
                            !eZ &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [V && J, H, !eT && ea, V && $, V && ee, et]
                                }),
                            (0, O.Z)(n.id) && J,
                            en
                        ]
                    }),
                    !eZ &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(i.kSQ, { children: u && el }),
                                (0, r.jsx)(i.kSQ, { children: V && ei }),
                                (0, r.jsxs)(i.kSQ, {
                                    children: [u && eu, V && ed, u && ef, eS, V && er, eo, es, ec, V && eg, V && eh, u && ex]
                                }),
                                (0, r.jsxs)(i.kSQ, {
                                    children: [o && eO, ej]
                                }),
                                Q &&
                                    (0, r.jsxs)(i.kSQ, {
                                        children: [ey, ev]
                                    })
                            ]
                        }),
                    (0, O.Z)(n.id) &&
                        (0, r.jsxs)(i.kSQ, {
                            children: [o && eO, ej]
                        }),
                    (0, r.jsx)(i.kSQ, { children: em }),
                    (0, r.jsx)(i.kSQ, { children: eE }),
                    (0, r.jsxs)(i.kSQ, {
                        children: [eN, !z && eb]
                    })
                ]
            });
        },
        { object: L.qAy.CONTEXT_MENU }
    ),
    [u.Z.CONTEXT_MENU, u.Z.DM_USER_MENU]
);
