n.d(t, {
    default: () => L,
});
var r = n(627968);
n(64700);
var l = n(311907),
    i = n(397927),
    a = n(442433),
    o = n(847767),
    u = n(358367),
    d = n(155718),
    s = n(468389),
    c = n(793574),
    A = n(688810),
    b = n(50268),
    g = n(346247),
    O = n(222311),
    f = n(164891),
    p = n(734057),
    m = n(309010),
    y = n(803664),
    j = n(29293),
    h = n(509302),
    E = n(497600),
    P = n(773699),
    x = n(239211),
    v = n(707378),
    M = n(399476),
    C = n(889460),
    S = n(448290),
    T = n(301541),
    N = n(252726),
    G = n(460597),
    U = n(313998),
    _ = n(146359),
    I = n(243949),
    w = n(180798),
    D = n(77544),
    R = n(652215),
    B = n(985018);
let L = (0, u.A)(
    (0, o.A)(
        function (e) {
            let { user: t, guildId: n, channel: o, context: u, onSelect: L, onHeightUpdate: V } = e,
                k = o.id,
                X = (0, I.A)({
                    userId: t.id,
                    guildId: n,
                    channelId: k,
                }),
                H = (0, S.A)(t, n, u),
                F = (0, T.A)(t.id, u),
                K = (0, D.A)(t.id),
                W = (0, v.A)({
                    user: t,
                    context: u,
                }),
                J = (0, l.bG)([m.A, p.A], () => {
                    let e = m.A.getVoiceChannelId();
                    return p.A.getChannel(e);
                }),
                { enabled: Z } = f.A.useExperiment({
                    guildId: null == J ? void 0 : J.guild_id,
                    location: "ThreadUserContextMenu",
                }),
                q = Z ? (null == J ? void 0 : J.id) : null,
                Q = (0, U.A)(t, q),
                Y = (0, E.A)({
                    user: t,
                    guildId: n,
                    channelId: k,
                    context: u,
                }),
                $ = (0, j.A)({
                    user: t,
                }),
                { analyticsLocations: z } = (0, A.Ay)(c.A.THREAD_USER_MENU),
                ee = (0, g.A)({
                    guildId: n,
                    userId: t.id,
                    analyticsLocation: {
                        page: R.liQ.GUILD_CHANNEL,
                        section: R.JJy.CHAT_USERNAME,
                        object: R.ZSU.CONTEXT_MENU_ITEM,
                    },
                    analyticsLocations: z,
                    context: u,
                }),
                et = (0, C.A)({
                    user: t,
                    guildId: n,
                }),
                en = (0, s.A)(null, t),
                er = (0, y.A)({
                    user: t,
                }),
                el = (0, h.A)({
                    user: t,
                }),
                ei = (0, G.A)({
                    user: t,
                }),
                ea = (0, x.A)({
                    user: t,
                    guildId: n,
                    channelId: k,
                    location: "ThreadUserContextMenu",
                }),
                eo = (0, M.A)({
                    user: t,
                    guildId: n,
                    channelId: k,
                    location: "ThreadUserContextMenu",
                }),
                eu = (0, _.A)(t, n, k),
                ed = (0, w.A)(t.id, n),
                es = (0, N.A)(t, n),
                ec = (0, b.A)({
                    id: t.id,
                    label: B.intl.string(B.t["/AXYnE"]),
                }),
                eA = (0, O.A)(t),
                eb = (0, P.A)({
                    commandType: d.kc.USER,
                    commandTargetId: t.id,
                    channel: o,
                    guildId: n,
                    onHeightUpdate: V,
                }),
                eg = t.isNonUserBot();
            return (0, r.jsxs)(i.W1t, {
                "data-menu-mixed": !0,
                navId: "user-context",
                onClose: a.Z_,
                "aria-label": B.intl.string(B.t.liqwPJ),
                onSelect: L,
                children: [
                    !eg &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(i.rXV, {
                                    children: eA,
                                }),
                                (0, r.jsxs)(i.rXV, {
                                    children: [X, H, F, W, Q, Y, $, K],
                                }),
                                (0, r.jsx)(i.rXV, {
                                    children: en,
                                }),
                                (0, r.jsxs)(i.rXV, {
                                    children: [ee, eb, et, er, el, ei, eo, ea],
                                }),
                                (0, r.jsx)(i.rXV, {
                                    children: eu,
                                }),
                                (0, r.jsxs)(i.rXV, {
                                    children: [ed, es],
                                }),
                            ],
                        }),
                    (0, r.jsx)(i.rXV, {
                        children: ec,
                    }),
                ],
            });
        },
        {
            object: R.ZSU.CONTEXT_MENU,
        },
    ),
    [c.A.CONTEXT_MENU, c.A.THREAD_USER_MENU],
);
