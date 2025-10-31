r.d(n, { default: () => G });
var t = r(951288);
r(647438);
var i = r(442837),
    s = r(481060),
    o = r(239091),
    l = r(883385),
    a = r(108843),
    d = r(911969),
    c = r(947440),
    u = r(100527),
    m = r(441061),
    p = r(167675),
    h = r(737013),
    b = r(607783),
    g = r(299206),
    f = r(819403),
    Z = r(163612),
    x = r(592125),
    j = r(944486),
    _ = r(777658),
    v = r(858488),
    O = r(44652),
    I = r(185457),
    C = r(570870),
    w = r(389052),
    y = r(24311),
    P = r(915193),
    k = r(332576),
    E = r(158508),
    N = r(710631),
    S = r(297047),
    T = r(88966),
    M = r(47091),
    U = r(397616),
    D = r(558924),
    Q = r(991307),
    R = r(37258),
    W = r(700994),
    A = r(332031),
    z = r(981631),
    F = r(388032);
let G = (0, a.Z)(
    (0, l.Z)(
        function (e) {
            var n;
            let {
                    user: r,
                    channel: l,
                    context: a,
                    showChatItems: u = !0,
                    showMediaItems: z = !1,
                    showChannelCallItems: G = !1,
                    showModalItems: L = !0,
                    onSelect: q,
                    onHeightUpdate: B,
                    onInteraction: X,
                } = e,
                Y = (0, R.Z)({
                    userId: r.id,
                    guildId: null,
                }),
                H = (0, S.Z)(r, null, a),
                J = (0, i.e7)([j.Z, x.Z], () => {
                    let e = j.Z.getVoiceChannelId();
                    return x.Z.getChannel(e);
                }),
                { enabled: K } = Z.Z.useExperiment({
                    guildId: null == J ? void 0 : J.guild_id,
                    location: "GroupDMUserContextMenu",
                }),
                V = K ? (null == J ? void 0 : J.id) : l.id,
                $ = (0, D.Z)(r, V),
                ee = (0, T.Z)(r.id, a),
                en = (0, y.Z)({
                    user: r,
                    context: a,
                }),
                er = (0, I.Z)({
                    user: r,
                    channelId: l.id,
                    context: a,
                }),
                et = (0, v.Z)({ user: r }),
                ei = (0, W.Z)(r.id),
                es = (0, U.Z)(r.id, l.id),
                eo = (0, Q.Z)(r.id),
                el = (0, b.B)({
                    userId: r.id,
                    channelId: l.id,
                    guildId: l.getGuildId(),
                }),
                ea = (0, k.Z)(r.id, l.id),
                ed = (0, N.Z)({ user: r }),
                ec = (0, c.Z)(null, r),
                eu = (0, _.Z)({ user: r }),
                em = (0, O.Z)({ user: r }),
                ep = (0, M.Z)({ user: r }),
                eh = (0, w.Z)({
                    user: r,
                    location: "GroupDMUserContextMenu",
                }),
                eb = (0, E.Z)({
                    user: r,
                    location: "GroupDMUserContextMenu",
                }),
                eg = (0, g.Z)({
                    id: r.id,
                    label: F.intl.string(F.t["/AXYnE"]),
                }),
                ef = (0, A.Z)(r.id),
                eZ = (0, p.Z)(r.id),
                ex = (0, m.Z)(l.id),
                ej = (0, f.Z)(r),
                e_ = (0, h.Z)(r.id),
                ev = (0, C.Z)({
                    commandType: d.yU.USER,
                    commandTargetId: r.id,
                    channel: l,
                    guildId: void 0,
                    onHeightUpdate: B,
                }),
                eO = (0, P.Z)(r, l),
                eI = r.isNonUserBot(),
                eC = l.isManaged(),
                ew = null == (n = l.recipients) ? void 0 : n.includes(r.id);
            return (0, t.jsxs)(s.v2r, {
                navId: "user-context",
                onClose: o.Zy,
                "aria-label": F.intl.string(F.t.liqwPJ),
                onSelect: q,
                onInteraction: X,
                children: [
                    !eI &&
                        (0, t.jsxs)(t.Fragment, {
                            children: [
                                (0, t.jsx)(s.kSQ, { children: ej }),
                                (0, t.jsxs)(s.kSQ, {
                                    children: [L && Y, u && H, ee, en, !eC && $, L && er, L && et, ef],
                                }),
                                z && (0, t.jsx)(s.kSQ, { children: ei }),
                                ew &&
                                    (0, t.jsxs)(s.kSQ, {
                                        children: [!eC && es, eO],
                                    }),
                                (0, t.jsx)(s.kSQ, { children: L && ec }),
                                (0, t.jsxs)(s.kSQ, {
                                    children: [
                                        z && eo,
                                        z && el,
                                        z && ea,
                                        ev,
                                        L && ed,
                                        eu,
                                        em,
                                        ep,
                                        L && eb,
                                        L && eh,
                                        z && e_,
                                    ],
                                }),
                                G &&
                                    (0, t.jsxs)(s.kSQ, {
                                        children: [ex, eZ],
                                    }),
                            ],
                        }),
                    (0, t.jsx)(s.kSQ, { children: eg }),
                ],
            });
        },
        { object: z.qAy.CONTEXT_MENU },
    ),
    [u.Z.CONTEXT_MENU, u.Z.GROUP_DM_USER_MENU],
);
