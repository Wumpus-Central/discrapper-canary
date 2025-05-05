t.d(n, { default: () => B });
var r = t(255367);
t(73800);
var i = t(442837),
    l = t(481060),
    o = t(239091),
    a = t(883385),
    s = t(108843),
    c = t(911969),
    d = t(947440),
    u = t(100527),
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
    S = t(389052),
    x = t(24311),
    I = t(915193),
    P = t(332576),
    w = t(158508),
    A = t(710631),
    C = t(297047),
    N = t(88966),
    M = t(47091),
    D = t(397616),
    k = t(558924),
    U = t(991307),
    R = t(37258),
    V = t(700994),
    L = t(332031),
    G = t(981631),
    W = t(388032);
let B = (0, s.Z)(
    (0, a.Z)(
        function (e) {
            var n;
            let { user: t, channel: a, context: s, showChatItems: u = !0, showMediaItems: G = !1, showChannelCallItems: B = !1, showModalItems: H = !0, onSelect: K, onHeightUpdate: Q, onInteraction: q } = e,
                Y = (0, R.Z)({
                    userId: t.id,
                    guildId: null
                }),
                F = (0, C.Z)(t, null, s),
                z = (0, i.e7)([y.Z, O.Z], () => {
                    let e = y.Z.getVoiceChannelId();
                    return O.Z.getChannel(e);
                }),
                { enabled: X } = _.Z.useExperiment({
                    guildId: null == z ? void 0 : z.guild_id,
                    location: 'GroupDMUserContextMenu'
                }),
                J = X ? (null == z ? void 0 : z.id) : a.id,
                $ = (0, k.Z)(t, J),
                ee = (0, N.Z)(t.id, s),
                en = (0, x.Z)({
                    user: t,
                    context: s
                }),
                et = (0, j.Z)({
                    user: t,
                    channelId: a.id,
                    context: s
                }),
                er = (0, E.Z)({ user: t }),
                ei = (0, V.Z)(t.id),
                el = (0, D.Z)(t.id, a.id),
                eo = (0, U.Z)(t.id),
                ea = (0, h.B)({
                    userId: t.id,
                    channelId: a.id,
                    guildId: a.getGuildId()
                }),
                es = (0, P.Z)(t.id, a.id),
                ec = (0, A.Z)({ user: t }),
                ed = (0, d.Z)(null, t),
                eu = (0, v.Z)({ user: t }),
                ef = (0, Z.Z)({ user: t }),
                ep = (0, M.Z)({ user: t }),
                eg = (0, S.Z)({
                    user: t,
                    location: 'GroupDMUserContextMenu'
                }),
                eh = (0, w.Z)({
                    user: t,
                    location: 'GroupDMUserContextMenu'
                }),
                eb = (0, b.Z)({
                    id: t.id,
                    label: W.intl.string(W.t['/AXYnJ'])
                }),
                em = (0, L.Z)(t.id),
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
                eZ = (0, I.Z)(t, a),
                ej = t.isNonUserBot(),
                eT = a.isManaged(),
                eS = null == (n = a.recipients) ? void 0 : n.includes(t.id);
            return (0, r.jsxs)(l.v2r, {
                navId: 'user-context',
                onClose: o.Zy,
                'aria-label': W.intl.string(W.t.liqwPD),
                onSelect: K,
                onInteraction: q,
                children: [
                    !ej &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(l.kSQ, { children: ey }),
                                (0, r.jsxs)(l.kSQ, {
                                    children: [H && Y, u && F, ee, en, !eT && $, H && et, H && er, em]
                                }),
                                G && (0, r.jsx)(l.kSQ, { children: ei }),
                                eS &&
                                    (0, r.jsxs)(l.kSQ, {
                                        children: [!eT && el, eZ]
                                    }),
                                (0, r.jsx)(l.kSQ, { children: H && ed }),
                                (0, r.jsxs)(l.kSQ, {
                                    children: [G && eo, G && ea, G && es, eE, H && ec, eu, ef, ep, H && eh, H && eg, G && ev]
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
        { object: G.qAy.CONTEXT_MENU }
    ),
    [u.Z.CONTEXT_MENU, u.Z.GROUP_DM_USER_MENU]
);
