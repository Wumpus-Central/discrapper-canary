r.d(n, { default: () => L });
var t = r(54381);
r(473749);
var i = r(442837),
    o = r(481060),
    s = r(239091),
    l = r(883385),
    a = r(108843),
    d = r(911969),
    c = r(947440),
    u = r(100527),
    m = r(434500),
    p = r(441061),
    h = r(167675),
    b = r(737013),
    g = r(607783),
    f = r(299206),
    Z = r(819403),
    x = r(163612),
    j = r(592125),
    _ = r(944486),
    v = r(777658),
    O = r(858488),
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
                    showModalItems: q = !0,
                    onSelect: B,
                    onHeightUpdate: X,
                    onInteraction: Y,
                } = e,
                H = (0, W.Z)({
                    userId: r.id,
                    guildId: null,
                }),
                J = (0, T.Z)(r, null, a),
                V = (0, i.e7)([_.Z, j.Z], () => {
                    let e = _.Z.getVoiceChannelId();
                    return j.Z.getChannel(e);
                }),
                { enabled: K } = x.Z.useExperiment({
                    guildId: null == V ? void 0 : V.guild_id,
                    location: "GroupDMUserContextMenu",
                }),
                $ = K ? (null == V ? void 0 : V.id) : l.id,
                ee = (0, Q.Z)(r, $),
                en = (0, M.Z)(r.id, a),
                er = (0, P.Z)({
                    user: r,
                    context: a,
                }),
                et = (0, C.Z)({
                    user: r,
                    channelId: l.id,
                    context: a,
                }),
                ei = (0, O.Z)({ user: r }),
                eo = (0, A.Z)(r.id),
                es = (0, D.Z)(r.id, l.id),
                el = (0, R.Z)(r.id),
                ea = (0, g.B)({
                    userId: r.id,
                    channelId: l.id,
                    guildId: l.getGuildId(),
                }),
                ed = (0, E.Z)(r.id, l.id),
                ec = (0, S.Z)({ user: r }),
                eu = (0, c.Z)(null, r),
                em = (0, v.Z)({ user: r }),
                ep = (0, I.Z)({ user: r }),
                eh = (0, U.Z)({ user: r }),
                eb = (0, y.Z)({
                    user: r,
                    location: "GroupDMUserContextMenu",
                }),
                eg = (0, N.Z)({
                    user: r,
                    location: "GroupDMUserContextMenu",
                }),
                ef = (0, f.Z)({
                    id: r.id,
                    label: G.intl.string(G.t["/AXYnE"]),
                }),
                eZ = (0, z.Z)(r.id),
                ex = (0, h.Z)(r.id),
                ej = (0, p.Z)(l.id),
                e_ = (0, Z.Z)(r),
                ev = (0, b.Z)(r.id),
                eO = (0, m.Z)(l.id, r.id),
                eI = (0, w.Z)({
                    commandType: d.yU.USER,
                    commandTargetId: r.id,
                    channel: l,
                    guildId: void 0,
                    onHeightUpdate: X,
                }),
                eC = (0, k.Z)(r, l),
                ew = r.isNonUserBot(),
                ey = l.isManaged(),
                eP = null == (n = l.recipients) ? void 0 : n.includes(r.id);
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
                                (0, t.jsx)(o.kSQ, { children: e_ }),
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
                                        F && el,
                                        F && ea,
                                        F && ed,
                                        eI,
                                        q && ec,
                                        em,
                                        ep,
                                        eh,
                                        q && eg,
                                        q && eb,
                                        F && ev,
                                    ],
                                }),
                                L &&
                                    (0, t.jsxs)(o.kSQ, {
                                        children: [eO, ej, ex],
                                    }),
                            ],
                        }),
                    (0, t.jsx)(o.kSQ, { children: ef }),
                ],
            });
        },
        { object: F.qAy.CONTEXT_MENU },
    ),
    [u.Z.CONTEXT_MENU, u.Z.GROUP_DM_USER_MENU],
);
