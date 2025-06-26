t.d(n, { default: () => B });
var r = t(255367);
t(73800);
var i = t(442837),
    l = t(481060),
    o = t(239091),
    a = t(883385),
    c = t(108843),
    s = t(911969),
    u = t(947440),
    d = t(100527),
    f = t(441061),
    h = t(167675),
    p = t(737013),
    g = t(607783),
    b = t(299206),
    m = t(819403),
    v = t(163612),
    y = t(592125),
    _ = t(944486),
    O = t(777658),
    E = t(858488),
    Z = t(44652),
    j = t(185457),
    T = t(570870),
    S = t(389052),
    x = t(24311),
    A = t(915193),
    I = t(332576),
    P = t(158508),
    C = t(710631),
    w = t(297047),
    N = t(88966),
    M = t(47091),
    D = t(397616),
    U = t(558924),
    k = t(991307),
    R = t(37258),
    L = t(700994),
    V = t(332031),
    G = t(981631),
    W = t(388032);
let B = (0, c.Z)(
    (0, a.Z)(
        function (e) {
            var n;
            let { user: t, channel: a, context: c, showChatItems: d = !0, showMediaItems: G = !1, showChannelCallItems: B = !1, showModalItems: K = !0, onSelect: H, onHeightUpdate: Q, onInteraction: q } = e,
                Y = (0, R.Z)({
                    userId: t.id,
                    guildId: null
                }),
                F = (0, w.Z)(t, null, c),
                z = (0, i.e7)([_.Z, y.Z], () => {
                    let e = _.Z.getVoiceChannelId();
                    return y.Z.getChannel(e);
                }),
                { enabled: X } = v.Z.useExperiment({
                    guildId: null == z ? void 0 : z.guild_id,
                    location: 'GroupDMUserContextMenu'
                }),
                J = X ? (null == z ? void 0 : z.id) : a.id,
                $ = (0, U.Z)(t, J),
                ee = (0, N.Z)(t.id, c),
                en = (0, x.Z)({
                    user: t,
                    context: c
                }),
                et = (0, j.Z)({
                    user: t,
                    channelId: a.id,
                    context: c
                }),
                er = (0, E.Z)({ user: t }),
                ei = (0, L.Z)(t.id),
                el = (0, D.Z)(t.id, a.id),
                eo = (0, k.Z)(t.id),
                ea = (0, g.B)({
                    userId: t.id,
                    channelId: a.id,
                    guildId: a.getGuildId()
                }),
                ec = (0, I.Z)(t.id, a.id),
                es = (0, C.Z)({ user: t }),
                eu = (0, u.Z)(null, t),
                ed = (0, O.Z)({ user: t }),
                ef = (0, Z.Z)({ user: t }),
                eh = (0, M.Z)({ user: t }),
                ep = (0, S.Z)({
                    user: t,
                    location: 'GroupDMUserContextMenu'
                }),
                eg = (0, P.Z)({
                    user: t,
                    location: 'GroupDMUserContextMenu'
                }),
                eb = (0, b.Z)({
                    id: t.id,
                    label: W.intl.string(W.t['/AXYnJ'])
                }),
                em = (0, V.Z)(t.id),
                ev = (0, h.Z)(t.id),
                ey = (0, f.Z)(a.id),
                e_ = (0, m.Z)(t),
                eO = (0, p.Z)(t.id),
                eE = (0, T.Z)({
                    commandType: s.yU.USER,
                    commandTargetId: t.id,
                    channel: a,
                    guildId: void 0,
                    onHeightUpdate: Q
                }),
                eZ = (0, A.Z)(t, a),
                ej = t.isNonUserBot(),
                eT = a.isManaged(),
                eS = null == (n = a.recipients) ? void 0 : n.includes(t.id);
            return (0, r.jsxs)(l.v2r, {
                navId: 'user-context',
                onClose: o.Zy,
                'aria-label': W.intl.string(W.t.liqwPD),
                onSelect: H,
                onInteraction: q,
                children: [
                    !ej &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(l.kSQ, { children: e_ }),
                                (0, r.jsxs)(l.kSQ, {
                                    children: [K && Y, d && F, ee, en, !eT && $, K && et, K && er, em]
                                }),
                                G && (0, r.jsx)(l.kSQ, { children: ei }),
                                eS &&
                                    (0, r.jsxs)(l.kSQ, {
                                        children: [!eT && el, eZ]
                                    }),
                                (0, r.jsx)(l.kSQ, { children: K && eu }),
                                (0, r.jsxs)(l.kSQ, {
                                    children: [G && eo, G && ea, G && ec, eE, K && es, ed, ef, eh, K && eg, K && ep, G && eO]
                                }),
                                B &&
                                    (0, r.jsxs)(l.kSQ, {
                                        children: [ey, ev]
                                    })
                            ]
                        }),
                    (0, r.jsx)(l.kSQ, { children: eb })
                ]
            });
        },
        { object: G.qAy.CONTEXT_MENU }
    ),
    [d.Z.CONTEXT_MENU, d.Z.GROUP_DM_USER_MENU]
);
