t.d(n, { default: () => D });
var l = t(255367);
t(73800);
var i = t(442837),
    r = t(481060),
    a = t(239091),
    u = t(883385),
    o = t(108843),
    s = t(911969),
    d = t(947440),
    c = t(100527),
    g = t(299206),
    Z = t(976192),
    f = t(819403),
    b = t(163612),
    O = t(592125),
    p = t(944486),
    m = t(777658),
    h = t(858488),
    j = t(44652),
    P = t(185457),
    v = t(570870),
    x = t(389052),
    y = t(24311),
    N = t(158508),
    E = t(710631),
    _ = t(297047),
    C = t(88966),
    I = t(712301),
    S = t(47091),
    T = t(558924),
    U = t(520063),
    A = t(37258),
    k = t(931617),
    w = t(332031),
    M = t(981631),
    R = t(388032);
let D = (0, o.Z)(
    (0, u.Z)(
        function (e) {
            let { user: n, guildId: t, channel: u, context: o, onSelect: c, onHeightUpdate: D } = e,
                G = u.id,
                L = (0, A.Z)({
                    userId: n.id,
                    guildId: t,
                    channelId: G,
                }),
                V = (0, _.Z)(n, t, o),
                q = (0, C.Z)(n.id, o),
                H = (0, w.Z)(n.id),
                B = (0, y.Z)({
                    user: n,
                    context: o,
                }),
                W = (0, i.e7)([p.Z, O.Z], () => {
                    let e = p.Z.getVoiceChannelId();
                    return O.Z.getChannel(e);
                }),
                { enabled: K } = b.Z.useExperiment({
                    guildId: null == W ? void 0 : W.guild_id,
                    location: "ThreadUserContextMenu",
                }),
                F = K ? (null == W ? void 0 : W.id) : null,
                Q = (0, T.Z)(n, F),
                Y = (0, P.Z)({
                    user: n,
                    guildId: t,
                    channelId: G,
                    context: o,
                }),
                X = (0, h.Z)({ user: n }),
                J = (0, Z.Z)({
                    guildId: t,
                    userId: n.id,
                    analyticsLocation: {
                        page: M.ZY5.GUILD_CHANNEL,
                        section: M.jXE.CHAT_USERNAME,
                        object: M.qAy.CONTEXT_MENU_ITEM,
                    },
                    context: o,
                }),
                z = (0, E.Z)({
                    user: n,
                    guildId: t,
                }),
                $ = (0, d.Z)(null, n),
                ee = (0, m.Z)({ user: n }),
                en = (0, j.Z)({ user: n }),
                et = (0, S.Z)({ user: n }),
                el = (0, x.Z)({
                    user: n,
                    guildId: t,
                    channelId: G,
                    location: "ThreadUserContextMenu",
                }),
                ei = (0, N.Z)({
                    user: n,
                    guildId: t,
                    channelId: G,
                    location: "ThreadUserContextMenu",
                }),
                er = (0, U.Z)(n, t, G),
                ea = (0, k.Z)(n.id, t),
                eu = (0, I.Z)(n, t),
                eo = (0, g.Z)({
                    id: n.id,
                    label: R.intl.string(R.t["/AXYnJ"]),
                }),
                es = (0, f.Z)(n),
                ed = (0, v.Z)({
                    commandType: s.yU.USER,
                    commandTargetId: n.id,
                    channel: u,
                    guildId: t,
                    onHeightUpdate: D,
                }),
                ec = n.isNonUserBot();
            return (0, l.jsxs)(r.v2r, {
                navId: "user-context",
                onClose: a.Zy,
                "aria-label": R.intl.string(R.t.liqwPD),
                onSelect: c,
                children: [
                    !ec &&
                        (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsx)(r.kSQ, { children: es }),
                                (0, l.jsxs)(r.kSQ, {
                                    children: [L, V, q, B, Q, Y, X, H],
                                }),
                                (0, l.jsx)(r.kSQ, { children: $ }),
                                (0, l.jsxs)(r.kSQ, {
                                    children: [J, ed, z, ee, en, et, ei, el],
                                }),
                                (0, l.jsx)(r.kSQ, { children: er }),
                                (0, l.jsxs)(r.kSQ, {
                                    children: [ea, eu],
                                }),
                            ],
                        }),
                    (0, l.jsx)(r.kSQ, { children: eo }),
                ],
            });
        },
        { object: M.qAy.CONTEXT_MENU },
    ),
    [c.Z.CONTEXT_MENU, c.Z.THREAD_USER_MENU],
);
