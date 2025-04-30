t.d(n, { default: () => D });
var l = t(200651);
t(192379);
var i = t(442837),
    r = t(481060),
    a = t(239091),
    o = t(883385),
    u = t(108843),
    s = t(911969),
    c = t(947440),
    d = t(100527),
    g = t(299206),
    b = t(976192),
    Z = t(819403),
    f = t(163612),
    p = t(592125),
    O = t(944486),
    m = t(777658),
    h = t(858488),
    j = t(44652),
    P = t(185457),
    v = t(570870),
    x = t(389052),
    y = t(24311),
    N = t(158508),
    _ = t(710631),
    E = t(297047),
    C = t(88966),
    I = t(712301),
    S = t(47091),
    T = t(558924),
    U = t(520063),
    A = t(37258),
    R = t(931617),
    w = t(332031),
    M = t(981631),
    k = t(388032);
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
                H = (0, w.Z)(n.id),
                W = (0, y.Z)({
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
                X = (0, P.Z)({
                    user: n,
                    guildId: t,
                    channelId: G,
                    context: u
                }),
                Y = (0, h.Z)({ user: n }),
                z = (0, b.Z)({
                    guildId: t,
                    userId: n.id,
                    analyticsLocation: {
                        page: M.ZY5.GUILD_CHANNEL,
                        section: M.jXE.CHAT_USERNAME,
                        object: M.qAy.CONTEXT_MENU_ITEM
                    },
                    context: u
                }),
                J = (0, _.Z)({
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
                ei = (0, N.Z)({
                    user: n,
                    guildId: t,
                    channelId: G,
                    location: 'ThreadUserContextMenu'
                }),
                er = (0, U.Z)(n, t, G),
                ea = (0, R.Z)(n.id, t),
                eo = (0, I.Z)(n, t),
                eu = (0, g.Z)({
                    id: n.id,
                    label: k.intl.string(k.t['/AXYnJ'])
                }),
                es = (0, Z.Z)(n),
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
                'aria-label': k.intl.string(k.t.liqwPD),
                onSelect: d,
                children: [
                    !ed &&
                        (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsx)(r.kSQ, { children: es }),
                                (0, l.jsxs)(r.kSQ, {
                                    children: [L, V, q, W, Q, X, Y, H]
                                }),
                                (0, l.jsx)(r.kSQ, { children: $ }),
                                (0, l.jsxs)(r.kSQ, {
                                    children: [z, ec, J, ee, en, et, ei, el]
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
        { object: M.qAy.CONTEXT_MENU }
    ),
    [d.Z.CONTEXT_MENU, d.Z.THREAD_USER_MENU]
);
