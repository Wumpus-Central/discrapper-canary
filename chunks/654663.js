n.d(t, { default: () => M });
var l = n(200651);
n(192379);
var r = n(442837),
    i = n(481060),
    a = n(239091),
    o = n(883385),
    u = n(108843),
    s = n(911969),
    c = n(947440),
    d = n(100527),
    g = n(299206),
    f = n(976192),
    Z = n(819403),
    b = n(163612),
    p = n(944486),
    O = n(777658),
    m = n(858488),
    h = n(44652),
    N = n(185457),
    j = n(570870),
    P = n(389052),
    v = n(24311),
    x = n(158508),
    y = n(710631),
    E = n(297047),
    C = n(88966),
    S = n(712301),
    _ = n(47091),
    I = n(558924),
    T = n(520063),
    W = n(37258),
    w = n(931617),
    U = n(332031),
    k = n(981631),
    A = n(388032);
let M = (0, u.Z)(
    (0, o.Z)(
        function (e) {
            let { user: t, guildId: n, channel: o, context: u, onSelect: d, onHeightUpdate: M } = e,
                R = o.id,
                D = (0, W.Z)({
                    userId: t.id,
                    guildId: n,
                    channelId: R
                }),
                L = (0, E.Z)(t, n, u),
                V = (0, C.Z)(t.id, u),
                q = (0, U.Z)(t.id),
                G = (0, v.Z)({
                    user: t,
                    context: u
                }),
                H = (0, r.e7)([p.Z], () => p.Z.getVoiceChannelId()),
                { enabled: F } = b.Z.useExperiment({
                    guildId: null == o ? void 0 : o.guild_id,
                    location: 'ThreadUserContextMenu'
                }),
                Q = (0, I.Z)(t, F ? H : null),
                B = (0, N.Z)({
                    user: t,
                    guildId: n,
                    channelId: R,
                    context: u
                }),
                K = (0, m.Z)({ user: t }),
                Y = (0, f.Z)({
                    guildId: n,
                    userId: t.id,
                    analyticsLocation: {
                        page: k.ZY5.GUILD_CHANNEL,
                        section: k.jXE.CHAT_USERNAME,
                        object: k.qAy.CONTEXT_MENU_ITEM
                    },
                    context: u
                }),
                X = (0, y.Z)({
                    user: t,
                    guildId: n
                }),
                J = (0, c.Z)(null, t),
                z = (0, O.Z)({ user: t }),
                $ = (0, h.Z)({ user: t }),
                ee = (0, _.Z)({ user: t }),
                et = (0, P.Z)({
                    user: t,
                    guildId: n,
                    channelId: R,
                    location: 'ThreadUserContextMenu'
                }),
                en = (0, x.Z)({
                    user: t,
                    guildId: n,
                    channelId: R,
                    location: 'ThreadUserContextMenu'
                }),
                el = (0, T.Z)(t, n, R),
                er = (0, w.Z)(t.id, n),
                ei = (0, S.Z)(t, n),
                ea = (0, g.Z)({
                    id: t.id,
                    label: A.NW.string(A.t['/AXYnJ'])
                }),
                eo = (0, Z.Z)(t),
                eu = (0, j.Z)({
                    commandType: s.yU.USER,
                    commandTargetId: t.id,
                    channel: o,
                    guildId: n,
                    onHeightUpdate: M
                }),
                es = t.isNonUserBot();
            return (0, l.jsxs)(i.v2r, {
                navId: 'user-context',
                onClose: a.Zy,
                'aria-label': A.NW.string(A.t.liqwPD),
                onSelect: d,
                children: [
                    !es &&
                        (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsx)(i.kSQ, { children: eo }),
                                (0, l.jsxs)(i.kSQ, {
                                    children: [D, L, V, G, Q, B, K, q]
                                }),
                                (0, l.jsx)(i.kSQ, { children: J }),
                                (0, l.jsxs)(i.kSQ, {
                                    children: [Y, eu, X, z, $, ee, en, et]
                                }),
                                (0, l.jsx)(i.kSQ, { children: el }),
                                (0, l.jsxs)(i.kSQ, {
                                    children: [er, ei]
                                })
                            ]
                        }),
                    (0, l.jsx)(i.kSQ, { children: ea })
                ]
            });
        },
        { object: k.qAy.CONTEXT_MENU }
    ),
    [d.Z.CONTEXT_MENU, d.Z.THREAD_USER_MENU]
);
