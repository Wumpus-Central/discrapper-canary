t.d(n, { default: () => D });
var l = t(255367);
t(73800);
var i = t(442837),
    r = t(481060),
    a = t(239091),
    o = t(883385),
    u = t(108843),
    s = t(911969),
    c = t(947440),
    d = t(100527),
    g = t(299206),
    Z = t(976192),
    b = t(819403),
    f = t(163612),
    p = t(592125),
    O = t(944486),
    m = t(777658),
    h = t(858488),
    j = t(44652),
    P = t(185457),
    v = t(570870),
    x = t(389052),
    _ = t(24311),
    y = t(158508),
    N = t(710631),
    E = t(297047),
    C = t(88966),
    I = t(712301),
    S = t(47091),
    T = t(558924),
    U = t(520063),
    A = t(37258),
    w = t(931617),
    M = t(332031),
    k = t(981631),
    R = t(388032);
let D = (0, u.Z)(
    (0, o.Z)(
        function (e) {
            let { user: n, guildId: t, channel: o, context: u, onSelect: d, onHeightUpdate: D } = e,
                G = o.id,
                L = (0, A.Z)({
                    userId: n.id,
                    guildId: t,
                    channelId: G
                }),
                V = (0, E.Z)(n, t, u),
                q = (0, C.Z)(n.id, u),
                W = (0, M.Z)(n.id),
                H = (0, _.Z)({
                    user: n,
                    context: u
                }),
                B = (0, i.e7)([O.Z, p.Z], () => {
                    let e = O.Z.getVoiceChannelId();
                    return p.Z.getChannel(e);
                }),
                { enabled: K } = f.Z.useExperiment({
                    guildId: null == B ? void 0 : B.guild_id,
                    location: 'ThreadUserContextMenu'
                }),
                F = K ? (null == B ? void 0 : B.id) : null,
                Q = (0, T.Z)(n, F),
                Y = (0, P.Z)({
                    user: n,
                    guildId: t,
                    channelId: G,
                    context: u
                }),
                X = (0, h.Z)({ user: n }),
                J = (0, Z.Z)({
                    guildId: t,
                    userId: n.id,
                    analyticsLocation: {
                        page: k.ZY5.GUILD_CHANNEL,
                        section: k.jXE.CHAT_USERNAME,
                        object: k.qAy.CONTEXT_MENU_ITEM
                    },
                    context: u
                }),
                z = (0, N.Z)({
                    user: n,
                    guildId: t
                }),
                $ = (0, c.Z)(null, n),
                ee = (0, m.Z)({ user: n }),
                en = (0, j.Z)({ user: n }),
                et = (0, S.Z)({ user: n }),
                el = (0, x.Z)({
                    user: n,
                    guildId: t,
                    channelId: G,
                    location: 'ThreadUserContextMenu'
                }),
                ei = (0, y.Z)({
                    user: n,
                    guildId: t,
                    channelId: G,
                    location: 'ThreadUserContextMenu'
                }),
                er = (0, U.Z)(n, t, G),
                ea = (0, w.Z)(n.id, t),
                eo = (0, I.Z)(n, t),
                eu = (0, g.Z)({
                    id: n.id,
                    label: R.intl.string(R.t['/AXYnJ'])
                }),
                es = (0, b.Z)(n),
                ec = (0, v.Z)({
                    commandType: s.yU.USER,
                    commandTargetId: n.id,
                    channel: o,
                    guildId: t,
                    onHeightUpdate: D
                }),
                ed = n.isNonUserBot();
            return (0, l.jsxs)(r.v2r, {
                navId: 'user-context',
                onClose: a.Zy,
                'aria-label': R.intl.string(R.t.liqwPD),
                onSelect: d,
                children: [
                    !ed &&
                        (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsx)(r.kSQ, { children: es }),
                                (0, l.jsxs)(r.kSQ, {
                                    children: [L, V, q, H, Q, Y, X, W]
                                }),
                                (0, l.jsx)(r.kSQ, { children: $ }),
                                (0, l.jsxs)(r.kSQ, {
                                    children: [J, ec, z, ee, en, et, ei, el]
                                }),
                                (0, l.jsx)(r.kSQ, { children: er }),
                                (0, l.jsxs)(r.kSQ, {
                                    children: [ea, eo]
                                })
                            ]
                        }),
                    (0, l.jsx)(r.kSQ, { children: eu })
                ]
            });
        },
        { object: k.qAy.CONTEXT_MENU }
    ),
    [d.Z.CONTEXT_MENU, d.Z.THREAD_USER_MENU]
);
