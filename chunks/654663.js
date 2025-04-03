t.d(n, { default: () => k });
var l = t(200651);
t(192379);
var r = t(442837),
    i = t(481060),
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
    N = t(858488),
    h = t(44652),
    j = t(185457),
    P = t(570870),
    x = t(389052),
    v = t(24311),
    y = t(158508),
    _ = t(710631),
    E = t(297047),
    C = t(88966),
    I = t(712301),
    T = t(47091),
    S = t(558924),
    U = t(520063),
    W = t(37258),
    A = t(931617),
    R = t(332031),
    w = t(981631),
    M = t(388032);
let k = (0, u.Z)(
    (0, o.Z)(
        function (e) {
            let { user: n, guildId: t, channel: o, context: u, onSelect: d, onHeightUpdate: k } = e,
                D = o.id,
                G = (0, W.Z)({
                    userId: n.id,
                    guildId: t,
                    channelId: D
                }),
                L = (0, E.Z)(n, t, u),
                V = (0, C.Z)(n.id, u),
                q = (0, R.Z)(n.id),
                H = (0, v.Z)({
                    user: n,
                    context: u
                }),
                B = (0, r.e7)([O.Z, p.Z], () => {
                    let e = O.Z.getVoiceChannelId();
                    return p.Z.getChannel(e);
                }),
                { enabled: K } = f.Z.useExperiment({
                    guildId: null == B ? void 0 : B.guild_id,
                    location: 'ThreadUserContextMenu'
                }),
                F = K ? (null == B ? void 0 : B.id) : null,
                Q = (0, S.Z)(n, F),
                Y = (0, j.Z)({
                    user: n,
                    guildId: t,
                    channelId: D,
                    context: u
                }),
                X = (0, N.Z)({ user: n }),
                z = (0, Z.Z)({
                    guildId: t,
                    userId: n.id,
                    analyticsLocation: {
                        page: w.ZY5.GUILD_CHANNEL,
                        section: w.jXE.CHAT_USERNAME,
                        object: w.qAy.CONTEXT_MENU_ITEM
                    },
                    context: u
                }),
                J = (0, _.Z)({
                    user: n,
                    guildId: t
                }),
                $ = (0, c.Z)(null, n),
                ee = (0, m.Z)({ user: n }),
                en = (0, h.Z)({ user: n }),
                et = (0, T.Z)({ user: n }),
                el = (0, x.Z)({
                    user: n,
                    guildId: t,
                    channelId: D,
                    location: 'ThreadUserContextMenu'
                }),
                er = (0, y.Z)({
                    user: n,
                    guildId: t,
                    channelId: D,
                    location: 'ThreadUserContextMenu'
                }),
                ei = (0, U.Z)(n, t, D),
                ea = (0, A.Z)(n.id, t),
                eo = (0, I.Z)(n, t),
                eu = (0, g.Z)({
                    id: n.id,
                    label: M.NW.string(M.t['/AXYnJ'])
                }),
                es = (0, b.Z)(n),
                ec = (0, P.Z)({
                    commandType: s.yU.USER,
                    commandTargetId: n.id,
                    channel: o,
                    guildId: t,
                    onHeightUpdate: k
                }),
                ed = n.isNonUserBot();
            return (0, l.jsxs)(i.v2r, {
                navId: 'user-context',
                onClose: a.Zy,
                'aria-label': M.NW.string(M.t.liqwPD),
                onSelect: d,
                children: [
                    !ed &&
                        (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsx)(i.kSQ, { children: es }),
                                (0, l.jsxs)(i.kSQ, {
                                    children: [G, L, V, H, Q, Y, X, q]
                                }),
                                (0, l.jsx)(i.kSQ, { children: $ }),
                                (0, l.jsxs)(i.kSQ, {
                                    children: [z, ec, J, ee, en, et, er, el]
                                }),
                                (0, l.jsx)(i.kSQ, { children: ei }),
                                (0, l.jsxs)(i.kSQ, {
                                    children: [ea, eo]
                                })
                            ]
                        }),
                    (0, l.jsx)(i.kSQ, { children: eu })
                ]
            });
        },
        { object: w.qAy.CONTEXT_MENU }
    ),
    [d.Z.CONTEXT_MENU, d.Z.THREAD_USER_MENU]
);
