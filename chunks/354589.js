n.d(t, { default: () => F });
var r = n(200651);
n(192379);
var i = n(442837),
    o = n(481060),
    l = n(239091),
    s = n(883385),
    a = n(108843),
    d = n(911969),
    c = n(947440),
    u = n(100527),
    g = n(441061),
    f = n(167675),
    m = n(737013),
    Z = n(607783),
    b = n(299206),
    h = n(819403),
    j = n(163612),
    p = n(592125),
    v = n(944486),
    O = n(777658),
    x = n(858488),
    N = n(44652),
    y = n(185457),
    E = n(570870),
    S = n(389052),
    I = n(24311),
    M = n(915193),
    w = n(332576),
    C = n(158508),
    P = n(710631),
    D = n(297047),
    U = n(88966),
    _ = n(47091),
    W = n(397616),
    k = n(558924),
    L = n(991307),
    A = n(37258),
    T = n(700994),
    R = n(332031),
    V = n(981631),
    B = n(388032);
let F = (0, a.Z)(
    (0, s.Z)(
        function (e) {
            var t;
            let { user: n, channel: s, context: a, showChatItems: u = !0, showMediaItems: V = !1, showChannelCallItems: F = !1, showModalItems: J = !0, onSelect: Q, onHeightUpdate: z, onInteraction: G } = e,
                Y = (0, A.Z)({
                    userId: n.id,
                    guildId: null
                }),
                H = (0, D.Z)(n, null, a),
                q = (0, i.e7)([v.Z, p.Z], () => {
                    let e = v.Z.getVoiceChannelId();
                    return p.Z.getChannel(e);
                }),
                { enabled: K } = j.Z.useExperiment({
                    guildId: null == q ? void 0 : q.guild_id,
                    location: 'GroupDMUserContextMenu'
                }),
                X = K ? (null == q ? void 0 : q.id) : s.id,
                $ = (0, k.Z)(n, X),
                ee = (0, U.Z)(n.id, a),
                et = (0, I.Z)({
                    user: n,
                    context: a
                }),
                en = (0, y.Z)({
                    user: n,
                    channelId: s.id,
                    context: a
                }),
                er = (0, x.Z)({ user: n }),
                ei = (0, T.Z)(n.id),
                eo = (0, W.Z)(n.id, s.id),
                el = (0, L.Z)(n.id),
                es = (0, Z.B)({
                    userId: n.id,
                    channelId: s.id,
                    guildId: s.getGuildId()
                }),
                ea = (0, w.Z)(n.id, s.id),
                ed = (0, P.Z)({ user: n }),
                ec = (0, c.Z)(null, n),
                eu = (0, O.Z)({ user: n }),
                eg = (0, N.Z)({ user: n }),
                ef = (0, _.Z)({ user: n }),
                em = (0, S.Z)({
                    user: n,
                    location: 'GroupDMUserContextMenu'
                }),
                eZ = (0, C.Z)({
                    user: n,
                    location: 'GroupDMUserContextMenu'
                }),
                eb = (0, b.Z)({
                    id: n.id,
                    label: B.NW.string(B.t['/AXYnJ'])
                }),
                eh = (0, R.Z)(n.id),
                ej = (0, f.Z)(n.id),
                ep = (0, g.Z)(s.id),
                ev = (0, h.Z)(n),
                eO = (0, m.Z)(n.id),
                ex = (0, E.Z)({
                    commandType: d.yU.USER,
                    commandTargetId: n.id,
                    channel: s,
                    guildId: void 0,
                    onHeightUpdate: z
                }),
                eN = (0, M.Z)(n, s),
                ey = n.isNonUserBot(),
                eE = s.isManaged(),
                eS = null == (t = s.recipients) ? void 0 : t.includes(n.id);
            return (0, r.jsxs)(o.v2r, {
                navId: 'user-context',
                onClose: l.Zy,
                'aria-label': B.NW.string(B.t.liqwPD),
                onSelect: Q,
                onInteraction: G,
                children: [
                    !ey &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(o.kSQ, { children: ev }),
                                (0, r.jsxs)(o.kSQ, {
                                    children: [J && Y, u && H, ee, et, !eE && $, J && en, J && er, eh]
                                }),
                                V && (0, r.jsx)(o.kSQ, { children: ei }),
                                eS &&
                                    (0, r.jsxs)(o.kSQ, {
                                        children: [!eE && eo, eN]
                                    }),
                                (0, r.jsx)(o.kSQ, { children: J && ec }),
                                (0, r.jsxs)(o.kSQ, {
                                    children: [V && el, V && es, V && ea, ex, J && ed, eu, eg, ef, J && eZ, J && em, V && eO]
                                }),
                                F &&
                                    (0, r.jsxs)(o.kSQ, {
                                        children: [ep, ej]
                                    })
                            ]
                        }),
                    (0, r.jsx)(o.kSQ, { children: eb })
                ]
            });
        },
        { object: V.qAy.CONTEXT_MENU }
    ),
    [u.Z.CONTEXT_MENU, u.Z.GROUP_DM_USER_MENU]
);
