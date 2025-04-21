n.d(t, { default: () => J });
var i = n(200651);
n(192379);
var r = n(442837),
    l = n(481060),
    o = n(239091),
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
    y = n(44652),
    E = n(185457),
    S = n(570870),
    I = n(389052),
    M = n(24311),
    w = n(915193),
    C = n(332576),
    P = n(158508),
    D = n(710631),
    N = n(297047),
    U = n(88966),
    _ = n(47091),
    k = n(397616),
    L = n(558924),
    A = n(991307),
    T = n(37258),
    R = n(700994),
    V = n(332031),
    B = n(981631),
    F = n(388032);
let J = (0, a.Z)(
    (0, s.Z)(
        function (e) {
            var t;
            let { user: n, channel: s, context: a, showChatItems: u = !0, showMediaItems: B = !1, showChannelCallItems: J = !1, showModalItems: Q = !0, onSelect: z, onHeightUpdate: G, onInteraction: Y } = e,
                H = (0, T.Z)({
                    userId: n.id,
                    guildId: null
                }),
                W = (0, N.Z)(n, null, a),
                q = (0, r.e7)([v.Z, p.Z], () => {
                    let e = v.Z.getVoiceChannelId();
                    return p.Z.getChannel(e);
                }),
                { enabled: K } = j.Z.useExperiment({
                    guildId: null == q ? void 0 : q.guild_id,
                    location: 'GroupDMUserContextMenu'
                }),
                X = K ? (null == q ? void 0 : q.id) : s.id,
                $ = (0, L.Z)(n, X),
                ee = (0, U.Z)(n.id, a),
                et = (0, M.Z)({
                    user: n,
                    context: a
                }),
                en = (0, E.Z)({
                    user: n,
                    channelId: s.id,
                    context: a
                }),
                ei = (0, x.Z)({ user: n }),
                er = (0, R.Z)(n.id),
                el = (0, k.Z)(n.id, s.id),
                eo = (0, A.Z)(n.id),
                es = (0, Z.B)({
                    userId: n.id,
                    channelId: s.id,
                    guildId: s.getGuildId()
                }),
                ea = (0, C.Z)(n.id, s.id),
                ed = (0, D.Z)({ user: n }),
                ec = (0, c.Z)(null, n),
                eu = (0, O.Z)({ user: n }),
                eg = (0, y.Z)({ user: n }),
                ef = (0, _.Z)({ user: n }),
                em = (0, I.Z)({
                    user: n,
                    location: 'GroupDMUserContextMenu'
                }),
                eZ = (0, P.Z)({
                    user: n,
                    location: 'GroupDMUserContextMenu'
                }),
                eb = (0, b.Z)({
                    id: n.id,
                    label: F.intl.string(F.t['/AXYnJ'])
                }),
                eh = (0, V.Z)(n.id),
                ej = (0, f.Z)(n.id),
                ep = (0, g.Z)(s.id),
                ev = (0, h.Z)(n),
                eO = (0, m.Z)(n.id),
                ex = (0, S.Z)({
                    commandType: d.yU.USER,
                    commandTargetId: n.id,
                    channel: s,
                    guildId: void 0,
                    onHeightUpdate: G
                }),
                ey = (0, w.Z)(n, s),
                eE = n.isNonUserBot(),
                eS = s.isManaged(),
                eI = null == (t = s.recipients) ? void 0 : t.includes(n.id);
            return (0, i.jsxs)(l.v2r, {
                navId: 'user-context',
                onClose: o.Zy,
                'aria-label': F.intl.string(F.t.liqwPD),
                onSelect: z,
                onInteraction: Y,
                children: [
                    !eE &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(l.kSQ, { children: ev }),
                                (0, i.jsxs)(l.kSQ, {
                                    children: [Q && H, u && W, ee, et, !eS && $, Q && en, Q && ei, eh]
                                }),
                                B && (0, i.jsx)(l.kSQ, { children: er }),
                                eI &&
                                    (0, i.jsxs)(l.kSQ, {
                                        children: [!eS && el, ey]
                                    }),
                                (0, i.jsx)(l.kSQ, { children: Q && ec }),
                                (0, i.jsxs)(l.kSQ, {
                                    children: [B && eo, B && es, B && ea, ex, Q && ed, eu, eg, ef, Q && eZ, Q && em, B && eO]
                                }),
                                J &&
                                    (0, i.jsxs)(l.kSQ, {
                                        children: [ep, ej]
                                    })
                            ]
                        }),
                    (0, i.jsx)(l.kSQ, { children: eb })
                ]
            });
        },
        { object: B.qAy.CONTEXT_MENU }
    ),
    [u.Z.CONTEXT_MENU, u.Z.GROUP_DM_USER_MENU]
);
