t.d(n, { default: () => G });
var l = t(951288);
t(647438);
var i = t(442837),
    r = t(481060),
    a = t(239091),
    u = t(883385),
    o = t(108843),
    s = t(911969),
    d = t(947440),
    c = t(100527),
    g = t(906732),
    Z = t(299206),
    f = t(976192),
    b = t(819403),
    O = t(163612),
    m = t(592125),
    h = t(944486),
    p = t(777658),
    P = t(858488),
    j = t(44652),
    v = t(185457),
    y = t(570870),
    N = t(389052),
    x = t(24311),
    E = t(158508),
    _ = t(710631),
    C = t(297047),
    I = t(88966),
    S = t(712301),
    T = t(47091),
    A = t(558924),
    U = t(520063),
    M = t(37258),
    k = t(931617),
    w = t(332031),
    R = t(981631),
    D = t(388032);
let G = (0, o.Z)(
    (0, u.Z)(
        function (e) {
            let { user: n, guildId: t, channel: u, context: o, onSelect: G, onHeightUpdate: L } = e,
                V = u.id,
                H = (0, M.Z)({
                    userId: n.id,
                    guildId: t,
                    channelId: V,
                }),
                q = (0, C.Z)(n, t, o),
                B = (0, I.Z)(n.id, o),
                W = (0, w.Z)(n.id),
                K = (0, x.Z)({
                    user: n,
                    context: o,
                }),
                Q = (0, i.e7)([h.Z, m.Z], () => {
                    let e = h.Z.getVoiceChannelId();
                    return m.Z.getChannel(e);
                }),
                { enabled: F } = O.Z.useExperiment({
                    guildId: null == Q ? void 0 : Q.guild_id,
                    location: "ThreadUserContextMenu",
                }),
                Y = F ? (null == Q ? void 0 : Q.id) : null,
                X = (0, A.Z)(n, Y),
                z = (0, v.Z)({
                    user: n,
                    guildId: t,
                    channelId: V,
                    context: o,
                }),
                J = (0, P.Z)({ user: n }),
                { analyticsLocations: $ } = (0, g.ZP)(c.Z.THREAD_USER_MENU),
                ee = (0, f.Z)({
                    guildId: t,
                    userId: n.id,
                    analyticsLocation: {
                        page: R.ZY5.GUILD_CHANNEL,
                        section: R.jXE.CHAT_USERNAME,
                        object: R.qAy.CONTEXT_MENU_ITEM,
                    },
                    analyticsLocations: $,
                    context: o,
                }),
                en = (0, _.Z)({
                    user: n,
                    guildId: t,
                }),
                et = (0, d.Z)(null, n),
                el = (0, p.Z)({ user: n }),
                ei = (0, j.Z)({ user: n }),
                er = (0, T.Z)({ user: n }),
                ea = (0, N.Z)({
                    user: n,
                    guildId: t,
                    channelId: V,
                    location: "ThreadUserContextMenu",
                }),
                eu = (0, E.Z)({
                    user: n,
                    guildId: t,
                    channelId: V,
                    location: "ThreadUserContextMenu",
                }),
                eo = (0, U.Z)(n, t, V),
                es = (0, k.Z)(n.id, t),
                ed = (0, S.Z)(n, t),
                ec = (0, Z.Z)({
                    id: n.id,
                    label: D.intl.string(D.t["/AXYnE"]),
                }),
                eg = (0, b.Z)(n),
                eZ = (0, y.Z)({
                    commandType: s.yU.USER,
                    commandTargetId: n.id,
                    channel: u,
                    guildId: t,
                    onHeightUpdate: L,
                }),
                ef = n.isNonUserBot();
            return (0, l.jsxs)(r.v2r, {
                navId: "user-context",
                onClose: a.Zy,
                "aria-label": D.intl.string(D.t.liqwPJ),
                onSelect: G,
                children: [
                    !ef &&
                        (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsx)(r.kSQ, { children: eg }),
                                (0, l.jsxs)(r.kSQ, {
                                    children: [H, q, B, K, X, z, J, W],
                                }),
                                (0, l.jsx)(r.kSQ, { children: et }),
                                (0, l.jsxs)(r.kSQ, {
                                    children: [ee, eZ, en, el, ei, er, eu, ea],
                                }),
                                (0, l.jsx)(r.kSQ, { children: eo }),
                                (0, l.jsxs)(r.kSQ, {
                                    children: [es, ed],
                                }),
                            ],
                        }),
                    (0, l.jsx)(r.kSQ, { children: ec }),
                ],
            });
        },
        { object: R.qAy.CONTEXT_MENU },
    ),
    [c.Z.CONTEXT_MENU, c.Z.THREAD_USER_MENU],
);
