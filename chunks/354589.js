t.d(n, { default: () => B });
var r = t(951288);
t(647438);
var i = t(442837),
    l = t(481060),
    o = t(239091),
    s = t(883385),
    a = t(108843),
    c = t(911969),
    d = t(947440),
    u = t(100527),
    f = t(441061),
    m = t(167675),
    b = t(737013),
    p = t(607783),
    g = t(299206),
    h = t(819403),
    j = t(163612),
    Z = t(592125),
    v = t(944486),
    O = t(777658),
    y = t(858488),
    x = t(44652),
    _ = t(185457),
    w = t(570870),
    E = t(389052),
    P = t(24311),
    S = t(915193),
    I = t(332576),
    C = t(158508),
    T = t(710631),
    k = t(297047),
    N = t(88966),
    M = t(47091),
    D = t(397616),
    U = t(558924),
    A = t(991307),
    L = t(37258),
    R = t(700994),
    V = t(332031),
    F = t(981631),
    Q = t(388032);
let B = (0, a.Z)(
    (0, s.Z)(
        function (e) {
            var n;
            let {
                    user: t,
                    channel: s,
                    context: a,
                    showChatItems: u = !0,
                    showMediaItems: F = !1,
                    showChannelCallItems: B = !1,
                    showModalItems: H = !0,
                    onSelect: G,
                    onHeightUpdate: K,
                    onInteraction: W,
                } = e,
                Y = (0, L.Z)({
                    userId: t.id,
                    guildId: null,
                }),
                z = (0, k.Z)(t, null, a),
                J = (0, i.e7)([v.Z, Z.Z], () => {
                    let e = v.Z.getVoiceChannelId();
                    return Z.Z.getChannel(e);
                }),
                { enabled: X } = j.Z.useExperiment({
                    guildId: null == J ? void 0 : J.guild_id,
                    location: "GroupDMUserContextMenu",
                }),
                q = X ? (null == J ? void 0 : J.id) : s.id,
                $ = (0, U.Z)(t, q),
                ee = (0, N.Z)(t.id, a),
                en = (0, P.Z)({
                    user: t,
                    context: a,
                }),
                et = (0, _.Z)({
                    user: t,
                    channelId: s.id,
                    context: a,
                }),
                er = (0, y.Z)({ user: t }),
                ei = (0, R.Z)(t.id),
                el = (0, D.Z)(t.id, s.id),
                eo = (0, A.Z)(t.id),
                es = (0, p.B)({
                    userId: t.id,
                    channelId: s.id,
                    guildId: s.getGuildId(),
                }),
                ea = (0, I.Z)(t.id, s.id),
                ec = (0, T.Z)({ user: t }),
                ed = (0, d.Z)(null, t),
                eu = (0, O.Z)({ user: t }),
                ef = (0, x.Z)({ user: t }),
                em = (0, M.Z)({ user: t }),
                eb = (0, E.Z)({
                    user: t,
                    location: "GroupDMUserContextMenu",
                }),
                ep = (0, C.Z)({
                    user: t,
                    location: "GroupDMUserContextMenu",
                }),
                eg = (0, g.Z)({
                    id: t.id,
                    label: Q.intl.string(Q.t["/AXYnJ"]),
                }),
                eh = (0, V.Z)(t.id),
                ej = (0, m.Z)(t.id),
                eZ = (0, f.Z)(s.id),
                ev = (0, h.Z)(t),
                eO = (0, b.Z)(t.id),
                ey = (0, w.Z)({
                    commandType: c.yU.USER,
                    commandTargetId: t.id,
                    channel: s,
                    guildId: void 0,
                    onHeightUpdate: K,
                }),
                ex = (0, S.Z)(t, s),
                e_ = t.isNonUserBot(),
                ew = s.isManaged(),
                eE = null == (n = s.recipients) ? void 0 : n.includes(t.id);
            return (0, r.jsxs)(l.v2r, {
                navId: "user-context",
                onClose: o.Zy,
                "aria-label": Q.intl.string(Q.t.liqwPD),
                onSelect: G,
                onInteraction: W,
                children: [
                    !e_ &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(l.kSQ, { children: ev }),
                                (0, r.jsxs)(l.kSQ, {
                                    children: [H && Y, u && z, ee, en, !ew && $, H && et, H && er, eh],
                                }),
                                F && (0, r.jsx)(l.kSQ, { children: ei }),
                                eE &&
                                    (0, r.jsxs)(l.kSQ, {
                                        children: [!ew && el, ex],
                                    }),
                                (0, r.jsx)(l.kSQ, { children: H && ed }),
                                (0, r.jsxs)(l.kSQ, {
                                    children: [
                                        F && eo,
                                        F && es,
                                        F && ea,
                                        ey,
                                        H && ec,
                                        eu,
                                        ef,
                                        em,
                                        H && ep,
                                        H && eb,
                                        F && eO,
                                    ],
                                }),
                                B &&
                                    (0, r.jsxs)(l.kSQ, {
                                        children: [eZ, ej],
                                    }),
                            ],
                        }),
                    (0, r.jsx)(l.kSQ, { children: eg }),
                ],
            });
        },
        { object: F.qAy.CONTEXT_MENU },
    ),
    [u.Z.CONTEXT_MENU, u.Z.GROUP_DM_USER_MENU],
);
