i.d(n, { default: () => D });
var r = i(200651);
i(192379);
var s = i(481060),
    d = i(239091),
    t = i(883385),
    a = i(108843),
    l = i(911969),
    o = i(947440),
    c = i(100527),
    u = i(441061),
    m = i(167675),
    h = i(737013),
    Z = i(607783),
    x = i(299206),
    v = i(819403),
    f = i(777658),
    g = i(858488),
    j = i(44652),
    p = i(185457),
    _ = i(570870),
    b = i(389052),
    C = i(24311),
    I = i(915193),
    k = i(332576),
    M = i(158508),
    T = i(710631),
    w = i(297047),
    E = i(88966),
    N = i(47091),
    U = i(397616),
    S = i(558924),
    O = i(991307),
    P = i(37258),
    Q = i(700994),
    y = i(332031),
    R = i(981631),
    A = i(388032);
let D = (0, a.Z)(
    (0, t.Z)(
        function (e) {
            var n;
            let { user: i, channel: t, context: a, showChatItems: c = !0, showMediaItems: R = !1, showChannelCallItems: D = !1, showModalItems: z = !0, onSelect: G, onHeightUpdate: L } = e,
                W = (0, P.Z)({
                    userId: i.id,
                    guildId: null
                }),
                q = (0, w.Z)(i, null, a),
                B = (0, S.Z)(i, t.id),
                F = (0, E.Z)(i.id, a),
                J = (0, C.Z)({
                    user: i,
                    context: a
                }),
                X = (0, p.Z)({
                    user: i,
                    channelId: t.id,
                    context: a
                }),
                Y = (0, g.Z)({ user: i }),
                H = (0, Q.Z)(i.id),
                K = (0, U.Z)(i.id, t.id),
                V = (0, O.Z)(i.id),
                $ = (0, Z.B)({
                    userId: i.id,
                    channelId: t.id,
                    guildId: t.getGuildId(),
                    location: 'GroupDMUserContextMenu'
                }),
                ee = (0, k.Z)(i.id, t.id),
                en = (0, T.Z)({ user: i }),
                ei = (0, o.Z)(null, i),
                er = (0, f.Z)({ user: i }),
                es = (0, j.Z)({ user: i }),
                ed = (0, N.Z)({ user: i }),
                et = (0, b.Z)({
                    user: i,
                    location: 'GroupDMUserContextMenu'
                }),
                ea = (0, M.Z)({
                    user: i,
                    location: 'GroupDMUserContextMenu'
                }),
                el = (0, x.Z)({
                    id: i.id,
                    label: A.intl.string(A.t['/AXYnJ'])
                }),
                eo = (0, y.Z)(i.id),
                ec = (0, m.Z)(i.id),
                eu = (0, u.Z)(t.id),
                em = (0, v.Z)(i),
                eh = (0, h.Z)(i.id),
                eZ = (0, _.Z)({
                    commandType: l.yU.USER,
                    commandTargetId: i.id,
                    channel: t,
                    guildId: void 0,
                    onHeightUpdate: L
                }),
                ex = (0, I.Z)(i, t),
                ev = i.isNonUserBot(),
                ef = t.isManaged(),
                eg = null === (n = t.recipients) || void 0 === n ? void 0 : n.includes(i.id);
            return (0, r.jsxs)(s.v2r, {
                navId: 'user-context',
                onClose: d.Zy,
                'aria-label': A.intl.string(A.t.liqwPD),
                onSelect: G,
                children: [
                    !ev &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(s.kSQ, { children: em }),
                                (0, r.jsxs)(s.kSQ, {
                                    children: [z && W, c && q, F, J, !ef && B, z && X, z && Y, eo]
                                }),
                                R && (0, r.jsx)(s.kSQ, { children: H }),
                                eg &&
                                    (0, r.jsxs)(s.kSQ, {
                                        children: [!ef && K, ex]
                                    }),
                                (0, r.jsx)(s.kSQ, { children: z && ei }),
                                (0, r.jsxs)(s.kSQ, {
                                    children: [R && V, R && $, R && ee, eZ, z && en, er, es, ed, z && ea, z && et, R && eh]
                                }),
                                D &&
                                    (0, r.jsxs)(s.kSQ, {
                                        children: [eu, ec]
                                    })
                            ]
                        }),
                    (0, r.jsx)(s.kSQ, { children: el })
                ]
            });
        },
        { object: R.qAy.CONTEXT_MENU }
    ),
    [c.Z.CONTEXT_MENU, c.Z.GROUP_DM_USER_MENU]
);
