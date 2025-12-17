r.d(n, { default: () => L });
var t = r(54381);
r(473749);
var i = r(442837),
    o = r(481060),
    s = r(239091),
    a = r(883385),
    c = r(108843),
    d = r(911969),
    l = r(947440),
    u = r(100527),
    m = r(434500),
    f = r(441061),
    b = r(167675),
    p = r(737013),
    h = r(607783),
    g = r(299206),
    Z = r(819403),
    x = r(163612),
    j = r(592125),
    v = r(944486),
    O = r(777658),
    _ = r(858488),
    I = r(44652),
    C = r(185457),
    w = r(570870),
    y = r(389052),
    P = r(24311),
    k = r(915193),
    E = r(332576),
    N = r(158508),
    S = r(710631),
    T = r(297047),
    M = r(88966),
    U = r(47091),
    D = r(397616),
    Q = r(558924),
    R = r(991307),
    W = r(37258),
    A = r(700994),
    z = r(332031),
    F = r(981631),
    G = r(388032);
let L = (0, c.Z)(
    (0, a.Z)(
        function (e) {
            var n;
            let {
                    user: r,
                    channel: a,
                    context: c,
                    showChatItems: u = !0,
                    showMediaItems: F = !1,
                    showChannelCallItems: L = !1,
                    showModalItems: q = !0,
                    onSelect: B,
                    onHeightUpdate: X,
                    onInteraction: Y,
                } = e,
                H = (0, W.Z)({
                    userId: r.id,
                    guildId: null,
                }),
                J = (0, T.Z)(r, null, c),
                V = (0, i.e7)([v.Z, j.Z], () => {
                    let e = v.Z.getVoiceChannelId();
                    return j.Z.getChannel(e);
                }),
                { enabled: K } = x.Z.useExperiment({
                    guildId: null == V ? void 0 : V.guild_id,
                    location: "GroupDMUserContextMenu",
                }),
                $ = K ? (null == V ? void 0 : V.id) : a.id,
                ee = (0, Q.Z)(r, $),
                en = (0, M.Z)(r.id, c),
                er = (0, P.Z)({
                    user: r,
                    context: c,
                }),
                et = (0, C.Z)({
                    user: r,
                    channelId: a.id,
                    context: c,
                }),
                ei = (0, _.Z)({ user: r }),
                eo = (0, A.Z)(r.id),
                es = (0, D.Z)(r.id, a.id),
                ea = (0, R.Z)(r.id),
                ec = (0, h.B)({
                    userId: r.id,
                    channelId: a.id,
                    guildId: a.getGuildId(),
                }),
                ed = (0, E.Z)(r.id, a.id),
                el = (0, S.Z)({ user: r }),
                eu = (0, l.Z)(null, r),
                em = (0, O.Z)({ user: r }),
                ef = (0, I.Z)({ user: r }),
                eb = (0, U.Z)({ user: r }),
                ep = (0, y.Z)({
                    user: r,
                    location: "GroupDMUserContextMenu",
                }),
                eh = (0, N.Z)({
                    user: r,
                    location: "GroupDMUserContextMenu",
                }),
                eg = (0, g.Z)({
                    id: r.id,
                    label: G.intl.string(G.t["/AXYnE"]),
                }),
                eZ = (0, z.Z)(r.id),
                ex = (0, b.Z)(r.id),
                ej = (0, f.Z)(a.id),
                ev = (0, Z.Z)(r),
                eO = (0, p.Z)(r.id),
                e_ = (0, m.Z)(a.id, r.id),
                eI = (0, w.Z)({
                    commandType: d.yU.USER,
                    commandTargetId: r.id,
                    channel: a,
                    guildId: void 0,
                    onHeightUpdate: X,
                }),
                eC = (0, k.Z)(r, a),
                ew = r.isNonUserBot(),
                ey = a.isManaged(),
                eP = null == (n = a.recipients) ? void 0 : n.includes(r.id);
            return (0, t.jsxs)(o.v2r, {
                navId: "user-context",
                onClose: s.Zy,
                "aria-label": G.intl.string(G.t.liqwPJ),
                onSelect: B,
                onInteraction: Y,
                children: [
                    !ew &&
                        (0, t.jsxs)(t.Fragment, {
                            children: [
                                (0, t.jsx)(o.kSQ, { children: ev }),
                                (0, t.jsxs)(o.kSQ, {
                                    children: [q && H, u && J, en, er, !ey && ee, q && et, q && ei, eZ],
                                }),
                                F && (0, t.jsx)(o.kSQ, { children: eo }),
                                eP &&
                                    (0, t.jsxs)(o.kSQ, {
                                        children: [!ey && es, eC],
                                    }),
                                (0, t.jsx)(o.kSQ, { children: q && eu }),
                                (0, t.jsxs)(o.kSQ, {
                                    children: [
                                        F && ea,
                                        F && ec,
                                        F && ed,
                                        eI,
                                        q && el,
                                        em,
                                        ef,
                                        eb,
                                        q && eh,
                                        q && ep,
                                        F && eO,
                                    ],
                                }),
                                L &&
                                    (0, t.jsxs)(o.kSQ, {
                                        children: [e_, ej, ex],
                                    }),
                            ],
                        }),
                    (0, t.jsx)(o.kSQ, { children: eg }),
                ],
            });
        },
        { object: F.qAy.CONTEXT_MENU },
    ),
    [u.Z.CONTEXT_MENU, u.Z.GROUP_DM_USER_MENU],
);
