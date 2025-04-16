n.d(t, { default: () => W });
var r = n(200651);
n(192379);
var l = n(442837),
    i = n(481060),
    o = n(239091),
    a = n(883385),
    u = n(108843),
    s = n(911969),
    c = n(947440),
    d = n(100527),
    b = n(299206),
    g = n(976192),
    Z = n(819403),
    f = n(163612),
    p = n(592125),
    O = n(944486),
    h = n(777658),
    m = n(858488),
    j = n(44652),
    P = n(185457),
    N = n(570870),
    y = n(389052),
    E = n(24311),
    x = n(158508),
    v = n(710631),
    _ = n(297047),
    C = n(88966),
    S = n(712301),
    M = n(47091),
    T = n(558924),
    I = n(520063),
    w = n(37258),
    R = n(931617),
    A = n(332031),
    U = n(981631),
    k = n(388032);
let W = (0, u.Z)(
    (0, a.Z)(
        function (e) {
            let { user: t, guildId: n, channel: a, context: u, onSelect: d, onHeightUpdate: W } = e,
                D = a.id,
                q = (0, w.Z)({
                    userId: t.id,
                    guildId: n,
                    channelId: D
                }),
                L = (0, _.Z)(t, n, u),
                G = (0, C.Z)(t.id, u),
                Q = (0, A.Z)(t.id),
                V = (0, E.Z)({
                    user: t,
                    context: u
                }),
                H = (0, l.e7)([O.Z, p.Z], () => {
                    let e = O.Z.getVoiceChannelId();
                    return p.Z.getChannel(e);
                }),
                { enabled: B } = f.Z.useExperiment({
                    guildId: null == H ? void 0 : H.guild_id,
                    location: 'ThreadUserContextMenu'
                }),
                F = B ? (null == H ? void 0 : H.id) : null,
                K = (0, T.Z)(t, F),
                X = (0, P.Z)({
                    user: t,
                    guildId: n,
                    channelId: D,
                    context: u
                }),
                Y = (0, m.Z)({ user: t }),
                J = (0, g.Z)({
                    guildId: n,
                    userId: t.id,
                    analyticsLocation: {
                        page: U.ZY5.GUILD_CHANNEL,
                        section: U.jXE.CHAT_USERNAME,
                        object: U.qAy.CONTEXT_MENU_ITEM
                    },
                    context: u
                }),
                $ = (0, v.Z)({
                    user: t,
                    guildId: n
                }),
                z = (0, c.Z)(null, t),
                ee = (0, h.Z)({ user: t }),
                et = (0, j.Z)({ user: t }),
                en = (0, M.Z)({ user: t }),
                er = (0, y.Z)({
                    user: t,
                    guildId: n,
                    channelId: D,
                    location: 'ThreadUserContextMenu'
                }),
                el = (0, x.Z)({
                    user: t,
                    guildId: n,
                    channelId: D,
                    location: 'ThreadUserContextMenu'
                }),
                ei = (0, I.Z)(t, n, D),
                eo = (0, R.Z)(t.id, n),
                ea = (0, S.Z)(t, n),
                eu = (0, b.Z)({
                    id: t.id,
                    label: k.NW.string(k.t['/AXYnJ'])
                }),
                es = (0, Z.Z)(t),
                ec = (0, N.Z)({
                    commandType: s.yU.USER,
                    commandTargetId: t.id,
                    channel: a,
                    guildId: n,
                    onHeightUpdate: W
                }),
                ed = t.isNonUserBot();
            return (0, r.jsxs)(i.v2r, {
                navId: 'user-context',
                onClose: o.Zy,
                'aria-label': k.NW.string(k.t.liqwPD),
                onSelect: d,
                children: [
                    !ed &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(i.kSQ, { children: es }),
                                (0, r.jsxs)(i.kSQ, {
                                    children: [q, L, G, V, K, X, Y, Q]
                                }),
                                (0, r.jsx)(i.kSQ, { children: z }),
                                (0, r.jsxs)(i.kSQ, {
                                    children: [J, ec, $, ee, et, en, el, er]
                                }),
                                (0, r.jsx)(i.kSQ, { children: ei }),
                                (0, r.jsxs)(i.kSQ, {
                                    children: [eo, ea]
                                })
                            ]
                        }),
                    (0, r.jsx)(i.kSQ, { children: eu })
                ]
            });
        },
        { object: U.qAy.CONTEXT_MENU }
    ),
    [d.Z.CONTEXT_MENU, d.Z.THREAD_USER_MENU]
);
