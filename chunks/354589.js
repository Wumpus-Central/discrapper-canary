r.d(n, { default: () => L });
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
    h = r(167675),
    b = r(737013),
    g = r(607783),
    p = r(299206),
    f = r(819403),
    Z = r(163612),
    j = r(592125),
    x = r(944486),
    v = r(777658),
    _ = r(858488),
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
    A = r(700994),
    z = r(332031),
    F = r(981631),
    G = r(388032);
let L = (0, a.Z)(
    (0, l.Z)(
        function (e) {
            var n;
            let {
                    user: r,
                    channel: l,
                    context: a,
                    showChatItems: u = !0,
                    showMediaItems: F = !1,
                    showChannelCallItems: L = !1,
                    showModalItems: W = !0,
                    onSelect: q,
                    onHeightUpdate: B,
                    onInteraction: X,
                } = e,
                Y = (0, R.Z)({
                    userId: r.id,
                    guildId: null,
                }),
                H = (0, S.Z)(r, null, a),
                J = (0, i.e7)([x.Z, j.Z], () => {
                    let e = x.Z.getVoiceChannelId();
                    return j.Z.getChannel(e);
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
                et = (0, _.Z)({ user: r }),
                ei = (0, A.Z)(r.id),
                es = (0, U.Z)(r.id, l.id),
                eo = (0, Q.Z)(r.id),
                el = (0, g.B)({
                    userId: r.id,
                    channelId: l.id,
                    guildId: l.getGuildId(),
                }),
                ea = (0, k.Z)(r.id, l.id),
                ed = (0, N.Z)({ user: r }),
                ec = (0, c.Z)(null, r),
                eu = (0, v.Z)({ user: r }),
                em = (0, O.Z)({ user: r }),
                eh = (0, M.Z)({ user: r }),
                eb = (0, w.Z)({
                    user: r,
                    location: "GroupDMUserContextMenu",
                }),
                eg = (0, E.Z)({
                    user: r,
                    location: "GroupDMUserContextMenu",
                }),
                ep = (0, p.Z)({
                    id: r.id,
                    label: G.intl.string(G.t["/AXYnE"]),
                }),
                ef = (0, z.Z)(r.id),
                eZ = (0, h.Z)(r.id),
                ej = (0, m.Z)(l.id),
                ex = (0, f.Z)(r),
                ev = (0, b.Z)(r.id),
                e_ = (0, C.Z)({
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
                "aria-label": G.intl.string(G.t.liqwPJ),
                onSelect: q,
                onInteraction: X,
                children: [
                    !eI &&
                        (0, t.jsxs)(t.Fragment, {
                            children: [
                                (0, t.jsx)(s.kSQ, { children: ex }),
                                (0, t.jsxs)(s.kSQ, {
                                    children: [W && Y, u && H, ee, en, !eC && $, W && er, W && et, ef],
                                }),
                                F && (0, t.jsx)(s.kSQ, { children: ei }),
                                ew &&
                                    (0, t.jsxs)(s.kSQ, {
                                        children: [!eC && es, eO],
                                    }),
                                (0, t.jsx)(s.kSQ, { children: W && ec }),
                                (0, t.jsxs)(s.kSQ, {
                                    children: [
                                        F && eo,
                                        F && el,
                                        F && ea,
                                        e_,
                                        W && ed,
                                        eu,
                                        em,
                                        eh,
                                        W && eg,
                                        W && eb,
                                        F && ev,
                                    ],
                                }),
                                L &&
                                    (0, t.jsxs)(s.kSQ, {
                                        children: [ej, eZ],
                                    }),
                            ],
                        }),
                    (0, t.jsx)(s.kSQ, { children: ep }),
                ],
            });
        },
        { object: F.qAy.CONTEXT_MENU },
    ),
    [u.Z.CONTEXT_MENU, u.Z.GROUP_DM_USER_MENU],
);
