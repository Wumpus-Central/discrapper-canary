l.d(t, {
    default: () => F,
});
var n = l(627968);
l(64700);
var i = l(311907),
    r = l(397927),
    o = l(442433),
    a = l(847767),
    c = l(358367),
    d = l(155718),
    s = l(468389),
    u = l(793574),
    A = l(810845),
    g = l(854182),
    p = l(734337),
    b = l(855187),
    f = l(479335),
    h = l(50268),
    y = l(346247),
    O = l(235052),
    j = l(222311),
    C = l(237749),
    E = l(734057),
    m = l(309010),
    x = l(803664),
    M = l(29293),
    N = l(497600),
    v = l(291247),
    G = l(773699),
    I = l(239211),
    P = l(707378),
    U = l(984894),
    S = l(399476),
    _ = l(889460),
    T = l(448290),
    R = l(301541),
    D = l(252726),
    V = l(313998),
    B = l(198229),
    L = l(243949),
    w = l(180798),
    k = l(972432),
    X = l(77544),
    H = l(652215),
    K = l(985018);
let F = (0, c.A)(
    (0, a.A)(
        function (e) {
            let {
                    user: t,
                    guildId: l,
                    channel: a,
                    showMediaItems: c = !1,
                    showChatItems: u = !0,
                    showChannelCallItems: F = !1,
                    showModalItems: J = !0,
                    showStageChannelItems: W = !1,
                    context: Q,
                    onSelect: Y,
                    onHeightUpdate: Z,
                    viewingChannelId: q,
                    onInteraction: $,
                } = e,
                z = a.id,
                ee = {
                    page: H.liQ.GUILD_CHANNEL,
                    section: H.JJy.CHAT_USERNAME,
                    object: H.ZSU.CONTEXT_MENU_ITEM,
                },
                et = (0, L.A)({
                    userId: t.id,
                    guildId: l,
                    channelId: z,
                    showGuildProfile: !0,
                }),
                el = (0, T.A)(t, l, Q),
                en = (0, R.A)(t.id, Q),
                ei = (0, X.A)(t.id),
                er = (0, P.A)({
                    user: t,
                    context: Q,
                }),
                eo = (0, N.A)({
                    user: t,
                    guildId: l,
                    channelId: z,
                    context: Q,
                }),
                ea = (0, M.A)({
                    user: t,
                }),
                ec = (0, k.A)(t.id),
                ed = (0, B.A)(t.id),
                es = (0, f.u)({
                    userId: t.id,
                    channelId: z,
                    guildId: a.getGuildId(),
                }),
                eu = (0, y.A)({
                    guildId: l,
                    userId: t.id,
                    analyticsLocation: ee,
                    context: Q,
                }),
                eA = (0, _.A)({
                    user: t,
                    guildId: l,
                }),
                eg = (0, s.A)(null, t),
                ep = (0, x.A)({
                    user: t,
                }),
                eb = (0, I.A)({
                    user: t,
                    guildId: l,
                    channelId: z,
                    location: "GuildChannelUserContextMenu",
                }),
                ef = (0, S.A)({
                    user: t,
                    guildId: l,
                    channelId: z,
                    location: "GuildChannelUserContextMenu",
                }),
                eh = (0, v.A)(t, l, z),
                ey = (0, w.A)(t.id, l),
                eO = (0, D.A)(t, l),
                ej = (0, h.A)({
                    id: t.id,
                    label: K.intl.string(K.t["/AXYnE"]),
                }),
                eC = (0, U.A)(t.id, z),
                eE = (0, p.A)(t.id),
                em = (0, g.A)(z),
                ex = (0, j.A)(t),
                eM = (0, C.A)(t, l, z),
                eN = (0, A.A)(z, t.id),
                ev = (0, i.bG)([E.A], () => (null != q ? E.A.getChannel(q) : null)),
                eG = (0, G.A)({
                    commandType: d.kc.USER,
                    commandTargetId: t.id,
                    channel: null != ev ? ev : a,
                    guildId: l,
                    onHeightUpdate: Z,
                    context: Q,
                }),
                eI = (0, b.A)(t.id),
                eP = (0, i.bG)([m.A], () => m.A.getVoiceChannelId()),
                eU = (0, V.A)(t, eP),
                eS = (0, O.A)(t.id, a),
                e_ = t.isNonUserBot();
            return (0, n.jsxs)(r.W1t, {
                "data-menu-needs-review": !0,
                navId: "user-context",
                onClose: o.Z_,
                "aria-label": K.intl.string(K.t.liqwPJ),
                onSelect: Y,
                onInteraction: $,
                children: [
                    !e_ &&
                        (0, n.jsxs)(n.Fragment, {
                            children: [
                                (0, n.jsxs)(r.rXV, {
                                    children: [ex, c && !W && eS, W && eM],
                                }),
                                (0, n.jsxs)(r.rXV, {
                                    children: [J && et, u && el, en, er, eU, J && eo, J && ea, ei],
                                }),
                                c &&
                                    (0, n.jsx)(r.rXV, {
                                        children: ec,
                                    }),
                                (0, n.jsx)(r.rXV, {
                                    children: J && eg,
                                }),
                                (0, n.jsxs)(r.rXV, {
                                    children: [
                                        c && ed,
                                        c && es,
                                        c && eC,
                                        F && eI,
                                        J && eu,
                                        eG,
                                        J && eA,
                                        ep,
                                        J && ef,
                                        J && eb,
                                    ],
                                }),
                                (0, n.jsxs)(r.rXV, {
                                    children: [ey, eO],
                                }),
                                F &&
                                    (0, n.jsxs)(r.rXV, {
                                        children: [eN, em, eE],
                                    }),
                                (0, n.jsx)(r.rXV, {
                                    children: eh,
                                }),
                            ],
                        }),
                    (0, n.jsx)(r.rXV, {
                        children: ej,
                    }),
                ],
            });
        },
        {
            object: H.ZSU.CONTEXT_MENU,
        },
    ),
    [u.A.CONTEXT_MENU, u.A.GUILD_CHANNEL_USER_MENU],
);
