n.d(r, { default: () => z });
var t = n(200651);
n(192379);
var i = n(442837),
    o = n(481060),
    s = n(239091),
    a = n(883385),
    d = n(108843),
    l = n(911969),
    c = n(947440),
    u = n(100527),
    m = n(441061),
    h = n(167675),
    b = n(737013),
    p = n(607783),
    f = n(299206),
    Z = n(819403),
    x = n(163612),
    g = n(944486),
    j = n(777658),
    v = n(858488),
    _ = n(44652),
    O = n(185457),
    N = n(570870),
    I = n(389052),
    w = n(24311),
    y = n(915193),
    C = n(332576),
    k = n(158508),
    M = n(710631),
    P = n(297047),
    E = n(88966),
    S = n(47091),
    T = n(397616),
    U = n(558924),
    W = n(991307),
    D = n(37258),
    Q = n(700994),
    R = n(332031),
    A = n(981631),
    G = n(388032);
let z = (0, d.Z)(
    (0, a.Z)(
        function (e) {
            var r;
            let { user: n, channel: a, context: d, showChatItems: u = !0, showMediaItems: A = !1, showChannelCallItems: z = !1, showModalItems: L = !0, onSelect: q, onHeightUpdate: B, onInteraction: F } = e,
                J = (0, D.Z)({
                    userId: n.id,
                    guildId: null
                }),
                X = (0, P.Z)(n, null, d),
                { enabled: Y } = x.Z.useExperiment({
                    guildId: null == a ? void 0 : a.guild_id,
                    location: 'GroupDMUserContextMenu'
                }),
                H = (0, i.e7)([g.Z], () => g.Z.getVoiceChannelId()),
                K = Y ? H : a.id,
                V = (0, U.Z)(n, K),
                $ = (0, E.Z)(n.id, d),
                ee = (0, w.Z)({
                    user: n,
                    context: d
                }),
                er = (0, O.Z)({
                    user: n,
                    channelId: a.id,
                    context: d
                }),
                en = (0, v.Z)({ user: n }),
                et = (0, Q.Z)(n.id),
                ei = (0, T.Z)(n.id, a.id),
                eo = (0, W.Z)(n.id),
                es = (0, p.B)({
                    userId: n.id,
                    channelId: a.id,
                    guildId: a.getGuildId(),
                    location: 'GroupDMUserContextMenu'
                }),
                ea = (0, C.Z)(n.id, a.id),
                ed = (0, M.Z)({ user: n }),
                el = (0, c.Z)(null, n),
                ec = (0, j.Z)({ user: n }),
                eu = (0, _.Z)({ user: n }),
                em = (0, S.Z)({ user: n }),
                eh = (0, I.Z)({
                    user: n,
                    location: 'GroupDMUserContextMenu'
                }),
                eb = (0, k.Z)({
                    user: n,
                    location: 'GroupDMUserContextMenu'
                }),
                ep = (0, f.Z)({
                    id: n.id,
                    label: G.NW.string(G.t['/AXYnJ'])
                }),
                ef = (0, R.Z)(n.id),
                eZ = (0, h.Z)(n.id),
                ex = (0, m.Z)(a.id),
                eg = (0, Z.Z)(n),
                ej = (0, b.Z)(n.id),
                ev = (0, N.Z)({
                    commandType: l.yU.USER,
                    commandTargetId: n.id,
                    channel: a,
                    guildId: void 0,
                    onHeightUpdate: B
                }),
                e_ = (0, y.Z)(n, a),
                eO = n.isNonUserBot(),
                eN = a.isManaged(),
                eI = null === (r = a.recipients) || void 0 === r ? void 0 : r.includes(n.id);
            return (0, t.jsxs)(o.v2r, {
                navId: 'user-context',
                onClose: s.Zy,
                'aria-label': G.NW.string(G.t.liqwPD),
                onSelect: q,
                onInteraction: F,
                children: [
                    !eO &&
                        (0, t.jsxs)(t.Fragment, {
                            children: [
                                (0, t.jsx)(o.kSQ, { children: eg }),
                                (0, t.jsxs)(o.kSQ, {
                                    children: [L && J, u && X, $, ee, !eN && V, L && er, L && en, ef]
                                }),
                                A && (0, t.jsx)(o.kSQ, { children: et }),
                                eI &&
                                    (0, t.jsxs)(o.kSQ, {
                                        children: [!eN && ei, e_]
                                    }),
                                (0, t.jsx)(o.kSQ, { children: L && el }),
                                (0, t.jsxs)(o.kSQ, {
                                    children: [A && eo, A && es, A && ea, ev, L && ed, ec, eu, em, L && eb, L && eh, A && ej]
                                }),
                                z &&
                                    (0, t.jsxs)(o.kSQ, {
                                        children: [ex, eZ]
                                    })
                            ]
                        }),
                    (0, t.jsx)(o.kSQ, { children: ep })
                ]
            });
        },
        { object: A.qAy.CONTEXT_MENU }
    ),
    [u.Z.CONTEXT_MENU, u.Z.GROUP_DM_USER_MENU]
);
