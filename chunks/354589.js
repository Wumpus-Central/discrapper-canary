t.d(n, { default: () => B });
var r = t(200651);
t(192379);
var i = t(442837),
    l = t(481060),
    o = t(239091),
    a = t(883385),
    s = t(108843),
    c = t(911969),
    u = t(947440),
    d = t(100527),
    f = t(441061),
    p = t(167675),
    g = t(737013),
    h = t(607783),
    b = t(299206),
    m = t(819403),
    _ = t(163612),
    O = t(592125),
    y = t(944486),
    v = t(777658),
    E = t(858488),
    Z = t(44652),
    j = t(185457),
    T = t(570870),
    N = t(389052),
    S = t(24311),
    x = t(915193),
    P = t(332576),
    I = t(158508),
    w = t(710631),
    A = t(297047),
    C = t(88966),
    M = t(47091),
    W = t(397616),
    D = t(558924),
    k = t(991307),
    U = t(37258),
    R = t(700994),
    V = t(332031),
    L = t(981631),
    G = t(388032);
let B = (0, s.Z)(
    (0, a.Z)(
        function (e) {
            var n;
            let { user: t, channel: a, context: s, showChatItems: d = !0, showMediaItems: L = !1, showChannelCallItems: B = !1, showModalItems: H = !0, onSelect: K, onHeightUpdate: Q, onInteraction: q } = e,
                Y = (0, U.Z)({
                    userId: t.id,
                    guildId: null
                }),
                F = (0, A.Z)(t, null, s),
                z = (0, i.e7)([y.Z, O.Z], () => {
                    let e = y.Z.getVoiceChannelId();
                    return O.Z.getChannel(e);
                }),
                { enabled: X } = _.Z.useExperiment({
                    guildId: null == z ? void 0 : z.guild_id,
                    location: 'GroupDMUserContextMenu'
                }),
                J = X ? (null == z ? void 0 : z.id) : a.id,
                $ = (0, D.Z)(t, J),
                ee = (0, C.Z)(t.id, s),
                en = (0, S.Z)({
                    user: t,
                    context: s
                }),
                et = (0, j.Z)({
                    user: t,
                    channelId: a.id,
                    context: s
                }),
                er = (0, E.Z)({ user: t }),
                ei = (0, R.Z)(t.id),
                el = (0, W.Z)(t.id, a.id),
                eo = (0, k.Z)(t.id),
                ea = (0, h.B)({
                    userId: t.id,
                    channelId: a.id,
                    guildId: a.getGuildId()
                }),
                es = (0, P.Z)(t.id, a.id),
                ec = (0, w.Z)({ user: t }),
                eu = (0, u.Z)(null, t),
                ed = (0, v.Z)({ user: t }),
                ef = (0, Z.Z)({ user: t }),
                ep = (0, M.Z)({ user: t }),
                eg = (0, N.Z)({
                    user: t,
                    location: 'GroupDMUserContextMenu'
                }),
                eh = (0, I.Z)({
                    user: t,
                    location: 'GroupDMUserContextMenu'
                }),
                eb = (0, b.Z)({
                    id: t.id,
                    label: G.NW.string(G.t['/AXYnJ'])
                }),
                em = (0, V.Z)(t.id),
                e_ = (0, p.Z)(t.id),
                eO = (0, f.Z)(a.id),
                ey = (0, m.Z)(t),
                ev = (0, g.Z)(t.id),
                eE = (0, T.Z)({
                    commandType: c.yU.USER,
                    commandTargetId: t.id,
                    channel: a,
                    guildId: void 0,
                    onHeightUpdate: Q
                }),
                eZ = (0, x.Z)(t, a),
                ej = t.isNonUserBot(),
                eT = a.isManaged(),
                eN = null == (n = a.recipients) ? void 0 : n.includes(t.id);
            return (0, r.jsxs)(l.v2r, {
                navId: 'user-context',
                onClose: o.Zy,
                'aria-label': G.NW.string(G.t.liqwPD),
                onSelect: K,
                onInteraction: q,
                children: [
                    !ej &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(l.kSQ, { children: ey }),
                                (0, r.jsxs)(l.kSQ, {
                                    children: [H && Y, d && F, ee, en, !eT && $, H && et, H && er, em]
                                }),
                                L && (0, r.jsx)(l.kSQ, { children: ei }),
                                eN &&
                                    (0, r.jsxs)(l.kSQ, {
                                        children: [!eT && el, eZ]
                                    }),
                                (0, r.jsx)(l.kSQ, { children: H && eu }),
                                (0, r.jsxs)(l.kSQ, {
                                    children: [L && eo, L && ea, L && es, eE, H && ec, ed, ef, ep, H && eh, H && eg, L && ev]
                                }),
                                B &&
                                    (0, r.jsxs)(l.kSQ, {
                                        children: [eO, e_]
                                    })
                            ]
                        }),
                    (0, r.jsx)(l.kSQ, { children: eb })
                ]
            });
        },
        { object: L.qAy.CONTEXT_MENU }
    ),
    [d.Z.CONTEXT_MENU, d.Z.GROUP_DM_USER_MENU]
);
