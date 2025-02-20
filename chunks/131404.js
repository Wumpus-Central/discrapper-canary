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
    x = n(62420),
    y = n(122074),
    _ = n(819403),
    S = n(777658),
    m = n(858488),
    I = n(44652),
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
            let { user: t, channel: n, channelSelected: a = !1, showMute: o = !0, showMediaItems: u = !1, showChannelCallItems: Q = !1, showModalItems: V = !0, targetIsUser: z = !1, context: B, onSelect: K, onHeightUpdate: X } = e,
                q = (0, W.Z)({
                    userId: t.id,
                    guildId: null
                }),
                J = (0, T.Z)({
                    user: t,
                    context: B
                }),
                H = (0, C.Z)({
                    user: t,
                    channelId: n.id,
                    context: B
                }),
                $ = (0, m.Z)({ user: t }),
                ee = (0, F.Z)(t.id),
                et = (0, Z.Z)(n.id, a),
                en = (0, D.Z)({ user: t }),
                er = (0, c.Z)(null, t),
                ei = (0, G.Z)(t.id),
                el = (0, k.Z)(t, n.id),
                ea = (0, S.Z)({ user: t }),
                eo = (0, I.Z)({ user: t }),
                es = (0, w.Z)({ user: t }),
                ec = (0, R.Z)(t.id),
                eu = (0, g.B)({
                    userId: t.id,
                    channelId: n.id,
                    guildId: n.getGuildId(),
                    location: 'DMUserContextMenu'
                }),
                ed = (0, U.Z)(t.id, n.id),
                ef = (0, E.Z)({
                    user: t,
                    location: 'DMUserContextMenu'
                }),
                eh = (0, M.Z)({
                    user: t,
                    location: 'DMUserContextMenu'
                }),
                eg = (0, N.ZP)(n),
                eO = (0, y.Uf)(L.aIL, n.id, 'trailing'),
                ej = (0, b.Z)({
                    id: t.id,
                    label: Y.NW.string(Y.t['/AXYnJ'])
                }),
                eN = (0, b.Z)({
                    id: n.id,
                    label: Y.NW.string(Y.t.gFHI3t)
                }),
                eb = (0, j.Z)(n),
                ep = (0, f.Z)(t.id),
                ev = (0, d.Z)(n.id),
                ex = (0, _.Z)(t),
                ey = (0, h.Z)(t.id),
                e_ = (0, P.Z)({
                    commandType: s.yU.USER,
                    commandTargetId: t.id,
                    channel: n,
                    guildId: void 0,
                    onHeightUpdate: X
                }),
                eS = (0, p.l)(n),
                em = (0, p.P)(n),
                eI = (0, v.Z)(n),
                eC = (0, x.Z)(n),
                eP = (0, A.Z)({ channel: n }),
                eE = n.isManaged(),
                eT = t.isNonUserBot();
            return (0, r.jsxs)(i.v2r, {
                navId: 'user-context',
                onClose: l.Zy,
                'aria-label': Y.NW.string(Y.t.liqwPD),
                onSelect: K,
                children: [
                    (0, r.jsx)(i.kSQ, { children: !(eT && !(0, O.Z)(n.id)) && eb }),
                    (0, r.jsxs)(i.kSQ, {
                        children: [eS, eI, eC]
                    }),
                    (0, r.jsx)(i.kSQ, { children: !eT && ex }),
                    (0, r.jsxs)(i.kSQ, {
                        children: [
                            !eT &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [V && q, J, !eE && el, V && H, V && $, ee]
                                }),
                            (0, O.Z)(n.id) && q,
                            et
                        ]
                    }),
                    !eT &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(i.kSQ, { children: u && ei }),
                                (0, r.jsx)(i.kSQ, { children: V && er }),
                                (0, r.jsxs)(i.kSQ, {
                                    children: [u && ec, V && eu, u && ed, e_, V && en, ea, eo, es, V && eh, V && ef, u && ey]
                                }),
                                (0, r.jsxs)(i.kSQ, {
                                    children: [o && eg, eO]
                                }),
                                Q &&
                                    (0, r.jsxs)(i.kSQ, {
                                        children: [ev, ep]
                                    })
                            ]
                        }),
                    (0, O.Z)(n.id) &&
                        (0, r.jsxs)(i.kSQ, {
                            children: [o && eg, eO]
                        }),
                    (0, r.jsx)(i.kSQ, { children: em }),
                    (0, r.jsx)(i.kSQ, { children: eP }),
                    (0, r.jsxs)(i.kSQ, {
                        children: [ej, !z && eN]
                    })
                ]
            });
        },
        { object: L.qAy.CONTEXT_MENU }
    ),
    [u.Z.CONTEXT_MENU, u.Z.DM_USER_MENU]
);
