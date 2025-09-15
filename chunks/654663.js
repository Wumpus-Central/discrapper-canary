t.d(n, { default: () => G });
var l = t(951288);
t(647438);
var i = t(442837),
    r = t(481060),
    a = t(239091),
    o = t(883385),
    u = t(108843),
    s = t(911969),
    c = t(947440),
    d = t(100527),
    g = t(906732),
    Z = t(299206),
    b = t(976192),
    f = t(819403),
    p = t(163612),
    m = t(592125),
    O = t(944486),
    h = t(777658),
    j = t(858488),
    P = t(44652),
    v = t(185457),
    x = t(570870),
    _ = t(389052),
    y = t(24311),
    N = t(158508),
    E = t(710631),
    C = t(297047),
    I = t(88966),
    S = t(712301),
    T = t(47091),
    U = t(558924),
    A = t(520063),
    w = t(37258),
    k = t(931617),
    M = t(332031),
    R = t(981631),
    D = t(388032);
let G = (0, u.Z)(
    (0, o.Z)(
        function (e) {
            let { user: n, guildId: t, channel: o, context: u, onSelect: G, onHeightUpdate: L } = e,
                V = o.id,
                q = (0, w.Z)({
                    userId: n.id,
                    guildId: t,
                    channelId: V,
                }),
                H = (0, C.Z)(n, t, u),
                W = (0, I.Z)(n.id, u),
                B = (0, M.Z)(n.id),
                K = (0, y.Z)({
                    user: n,
                    context: u,
                }),
                F = (0, i.e7)([O.Z, m.Z], () => {
                    let e = O.Z.getVoiceChannelId();
                    return m.Z.getChannel(e);
                }),
                { enabled: Q } = p.Z.useExperiment({
                    guildId: null == F ? void 0 : F.guild_id,
                    location: "ThreadUserContextMenu",
                }),
                Y = Q ? (null == F ? void 0 : F.id) : null,
                X = (0, U.Z)(n, Y),
                J = (0, v.Z)({
                    user: n,
                    guildId: t,
                    channelId: V,
                    context: u,
                }),
                z = (0, j.Z)({ user: n }),
                { analyticsLocations: $ } = (0, g.ZP)(d.Z.THREAD_USER_MENU),
                ee = (0, b.Z)({
                    guildId: t,
                    userId: n.id,
                    analyticsLocation: {
                        page: R.ZY5.GUILD_CHANNEL,
                        section: R.jXE.CHAT_USERNAME,
                        object: R.qAy.CONTEXT_MENU_ITEM,
                    },
                    analyticsLocations: $,
                    context: u,
                }),
                en = (0, E.Z)({
                    user: n,
                    guildId: t,
                }),
                et = (0, c.Z)(null, n),
                el = (0, h.Z)({ user: n }),
                ei = (0, P.Z)({ user: n }),
                er = (0, T.Z)({ user: n }),
                ea = (0, _.Z)({
                    user: n,
                    guildId: t,
                    channelId: V,
                    location: "ThreadUserContextMenu",
                }),
                eo = (0, N.Z)({
                    user: n,
                    guildId: t,
                    channelId: V,
                    location: "ThreadUserContextMenu",
                }),
                eu = (0, A.Z)(n, t, V),
                es = (0, k.Z)(n.id, t),
                ec = (0, S.Z)(n, t),
                ed = (0, Z.Z)({
                    id: n.id,
                    label: D.intl.string(D.t["/AXYnJ"]),
                }),
                eg = (0, f.Z)(n),
                eZ = (0, x.Z)({
                    commandType: s.yU.USER,
                    commandTargetId: n.id,
                    channel: o,
                    guildId: t,
                    onHeightUpdate: L,
                }),
                eb = n.isNonUserBot();
            return (0, l.jsxs)(r.v2r, {
                navId: "user-context",
                onClose: a.Zy,
                "aria-label": D.intl.string(D.t.liqwPD),
                onSelect: G,
                children: [
                    !eb &&
                        (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsx)(r.kSQ, { children: eg }),
                                (0, l.jsxs)(r.kSQ, {
                                    children: [q, H, W, K, X, J, z, B],
                                }),
                                (0, l.jsx)(r.kSQ, { children: et }),
                                (0, l.jsxs)(r.kSQ, {
                                    children: [ee, eZ, en, el, ei, er, eo, ea],
                                }),
                                (0, l.jsx)(r.kSQ, { children: eu }),
                                (0, l.jsxs)(r.kSQ, {
                                    children: [es, ec],
                                }),
                            ],
                        }),
                    (0, l.jsx)(r.kSQ, { children: ed }),
                ],
            });
        },
        { object: R.qAy.CONTEXT_MENU },
    ),
    [d.Z.CONTEXT_MENU, d.Z.THREAD_USER_MENU],
);
