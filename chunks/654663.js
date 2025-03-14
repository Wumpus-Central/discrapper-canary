n.d(t, { default: () => R });
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
    Z = n(976192),
    f = n(819403),
    b = n(163612),
    p = n(592125),
    O = n(944486),
    m = n(777658),
    h = n(858488),
    N = n(44652),
    j = n(185457),
    P = n(570870),
    v = n(389052),
    x = n(24311),
    y = n(158508),
    E = n(710631),
    C = n(297047),
    _ = n(88966),
    S = n(712301),
    I = n(47091),
    T = n(558924),
    W = n(520063),
    w = n(37258),
    U = n(931617),
    k = n(332031),
    A = n(981631),
    M = n(388032);
let R = (0, u.Z)(
    (0, o.Z)(
        function (e) {
            let { user: t, guildId: n, channel: o, context: u, onSelect: d, onHeightUpdate: R } = e,
                D = o.id,
                L = (0, w.Z)({
                    userId: t.id,
                    guildId: n,
                    channelId: D
                }),
                V = (0, C.Z)(t, n, u),
                q = (0, _.Z)(t.id, u),
                G = (0, k.Z)(t.id),
                H = (0, x.Z)({
                    user: t,
                    context: u
                }),
                F = (0, r.e7)([O.Z, p.Z], () => {
                    let e = O.Z.getVoiceChannelId();
                    return p.Z.getChannel(e);
                }),
                { enabled: Q } = b.Z.useExperiment({
                    guildId: null == F ? void 0 : F.guild_id,
                    location: 'ThreadUserContextMenu'
                }),
                B = Q ? (null == F ? void 0 : F.id) : null,
                K = (0, T.Z)(t, B),
                Y = (0, j.Z)({
                    user: t,
                    guildId: n,
                    channelId: D,
                    context: u
                }),
                X = (0, h.Z)({ user: t }),
                J = (0, Z.Z)({
                    guildId: n,
                    userId: t.id,
                    analyticsLocation: {
                        page: A.ZY5.GUILD_CHANNEL,
                        section: A.jXE.CHAT_USERNAME,
                        object: A.qAy.CONTEXT_MENU_ITEM
                    },
                    context: u
                }),
                z = (0, E.Z)({
                    user: t,
                    guildId: n
                }),
                $ = (0, c.Z)(null, t),
                ee = (0, m.Z)({ user: t }),
                et = (0, N.Z)({ user: t }),
                en = (0, I.Z)({ user: t }),
                el = (0, v.Z)({
                    user: t,
                    guildId: n,
                    channelId: D,
                    location: 'ThreadUserContextMenu'
                }),
                er = (0, y.Z)({
                    user: t,
                    guildId: n,
                    channelId: D,
                    location: 'ThreadUserContextMenu'
                }),
                ei = (0, W.Z)(t, n, D),
                ea = (0, U.Z)(t.id, n),
                eo = (0, S.Z)(t, n),
                eu = (0, g.Z)({
                    id: t.id,
                    label: M.NW.string(M.t['/AXYnJ'])
                }),
                es = (0, f.Z)(t),
                ec = (0, P.Z)({
                    commandType: s.yU.USER,
                    commandTargetId: t.id,
                    channel: o,
                    guildId: n,
                    onHeightUpdate: R
                }),
                ed = t.isNonUserBot();
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
                                    children: [L, V, q, H, K, Y, X, G]
                                }),
                                (0, l.jsx)(i.kSQ, { children: $ }),
                                (0, l.jsxs)(i.kSQ, {
                                    children: [J, ec, z, ee, et, en, er, el]
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
        { object: A.qAy.CONTEXT_MENU }
    ),
    [d.Z.CONTEXT_MENU, d.Z.THREAD_USER_MENU]
);
