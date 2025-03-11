n.d(t, { default: () => B });
var r = n(200651);
n(192379);
var i = n(399606),
    l = n(481060),
    a = n(239091),
    o = n(883385),
    s = n(108843),
    c = n(911969),
    u = n(947440),
    d = n(100527),
    f = n(441061),
    h = n(167675),
    g = n(737013),
    O = n(607783),
    N = n(702321),
    j = n(461535),
    b = n(776568),
    p = n(299206),
    v = n(895563),
    y = n(212205),
    _ = n(62420),
    x = n(122074),
    S = n(819403),
    I = n(163612),
    m = n(944486),
    C = n(777658),
    P = n(858488),
    E = n(44652),
    Z = n(185457),
    T = n(570870),
    A = n(389052),
    U = n(24311),
    M = n(794973),
    D = n(165855),
    w = n(332576),
    k = n(158508),
    R = n(710631),
    W = n(47091),
    G = n(558924),
    L = n(991307),
    F = n(37258),
    Y = n(700994),
    Q = n(332031),
    V = n(981631),
    z = n(388032);
let B = (0, s.Z)(
    (0, o.Z)(
        function (e) {
            let { user: t, channel: n, channelSelected: o = !1, showMute: s = !0, showMediaItems: d = !1, showChannelCallItems: B = !1, showModalItems: K = !0, targetIsUser: X = !1, context: q, onSelect: J, onHeightUpdate: H, onInteraction: $ } = e,
                ee = (0, F.Z)({
                    userId: t.id,
                    guildId: null
                }),
                et = (0, U.Z)({
                    user: t,
                    context: q
                }),
                en = (0, Z.Z)({
                    user: t,
                    channelId: n.id,
                    context: q
                }),
                er = (0, P.Z)({ user: t }),
                ei = (0, Q.Z)(t.id),
                el = (0, M.Z)(n.id, o),
                ea = (0, R.Z)({ user: t }),
                eo = (0, u.Z)(null, t),
                es = (0, Y.Z)(t.id),
                { enabled: ec } = I.Z.useExperiment({
                    guildId: null == n ? void 0 : n.guild_id,
                    location: 'DMUserContextMenu'
                }),
                eu = (0, i.e7)([m.Z], () => m.Z.getVoiceChannelId()),
                ed = ec ? eu : n.id,
                ef = (0, G.Z)(t, ed),
                eh = (0, C.Z)({ user: t }),
                eg = (0, E.Z)({ user: t }),
                eO = (0, W.Z)({ user: t }),
                eN = (0, L.Z)(t.id),
                ej = (0, O.B)({
                    userId: t.id,
                    channelId: n.id,
                    guildId: n.getGuildId(),
                    location: 'DMUserContextMenu'
                }),
                eb = (0, w.Z)(t.id, n.id),
                ep = (0, A.Z)({
                    user: t,
                    location: 'DMUserContextMenu'
                }),
                ev = (0, k.Z)({
                    user: t,
                    location: 'DMUserContextMenu'
                }),
                ey = (0, b.ZP)(n),
                e_ = (0, x.Uf)(V.aIL, n.id, 'trailing'),
                ex = (0, p.Z)({
                    id: t.id,
                    label: z.NW.string(z.t['/AXYnJ'])
                }),
                eS = (0, p.Z)({
                    id: n.id,
                    label: z.NW.string(z.t.gFHI3t)
                }),
                eI = (0, j.Z)(n),
                em = (0, h.Z)(t.id),
                eC = (0, f.Z)(n.id),
                eP = (0, S.Z)(t),
                eE = (0, g.Z)(t.id),
                eZ = (0, T.Z)({
                    commandType: c.yU.USER,
                    commandTargetId: t.id,
                    channel: n,
                    guildId: void 0,
                    onHeightUpdate: H
                }),
                eT = (0, v.l)(n),
                eA = (0, v.P)(n),
                eU = (0, y.Z)(n),
                eM = (0, _.Z)(n),
                eD = (0, D.Z)({ channel: n }),
                ew = n.isManaged(),
                ek = t.isNonUserBot();
            return (0, r.jsxs)(l.v2r, {
                navId: 'user-context',
                onClose: a.Zy,
                'aria-label': z.NW.string(z.t.liqwPD),
                onSelect: J,
                onInteraction: $,
                children: [
                    (0, r.jsx)(l.kSQ, { children: !(ek && !(0, N.Z)(n.id)) && eI }),
                    (0, r.jsxs)(l.kSQ, {
                        children: [eT, eU, eM]
                    }),
                    (0, r.jsx)(l.kSQ, { children: !ek && eP }),
                    (0, r.jsxs)(l.kSQ, {
                        children: [
                            !ek &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [K && ee, et, !ew && ef, K && en, K && er, ei]
                                }),
                            (0, N.Z)(n.id) && ee,
                            el
                        ]
                    }),
                    !ek &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(l.kSQ, { children: d && es }),
                                (0, r.jsx)(l.kSQ, { children: K && eo }),
                                (0, r.jsxs)(l.kSQ, {
                                    children: [d && eN, K && ej, d && eb, eZ, K && ea, eh, eg, eO, K && ev, K && ep, d && eE]
                                }),
                                (0, r.jsxs)(l.kSQ, {
                                    children: [s && ey, e_]
                                }),
                                B &&
                                    (0, r.jsxs)(l.kSQ, {
                                        children: [eC, em]
                                    })
                            ]
                        }),
                    (0, N.Z)(n.id) &&
                        (0, r.jsxs)(l.kSQ, {
                            children: [s && ey, e_]
                        }),
                    (0, r.jsx)(l.kSQ, { children: eA }),
                    (0, r.jsx)(l.kSQ, { children: eD }),
                    (0, r.jsxs)(l.kSQ, {
                        children: [ex, !X && eS]
                    })
                ]
            });
        },
        { object: V.qAy.CONTEXT_MENU }
    ),
    [d.Z.CONTEXT_MENU, d.Z.DM_USER_MENU]
);
