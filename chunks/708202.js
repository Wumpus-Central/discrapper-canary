n.d(t, {
    default: () => B,
});
var r = n(627968);
n(64700);
var l = n(311907),
    i = n(397927),
    o = n(442433),
    a = n(847767),
    c = n(358367),
    u = n(155718),
    d = n(468389),
    s = n(793574),
    A = n(688810),
    g = n(50268),
    b = n(346247),
    f = n(222311),
    p = n(164891),
    O = n(734057),
    y = n(309010),
    m = n(803664),
    j = n(29293),
    h = n(509302),
    E = n(497600),
    P = n(773699),
    v = n(239211),
    x = n(707378),
    M = n(399476),
    C = n(889460),
    S = n(448290),
    T = n(301541),
    N = n(252726),
    G = n(460597),
    U = n(313998),
    _ = n(146359),
    D = n(243949),
    I = n(180798),
    R = n(77544),
    w = n(652215),
    L = n(985018);
let B = (0, c.A)(
    (0, a.A)(
        function (e) {
            let { user: t, guildId: n, channel: a, context: c, onSelect: B, onHeightUpdate: V } = e,
                k = a.id,
                X = (0, D.A)({
                    userId: t.id,
                    guildId: n,
                    channelId: k,
                }),
                H = (0, S.A)(t, n, c),
                W = (0, T.A)(t.id, c),
                F = (0, R.A)(t.id),
                K = (0, x.A)({
                    user: t,
                    context: c,
                }),
                J = (0, l.bG)([y.A, O.A], () => {
                    let e = y.A.getVoiceChannelId();
                    return O.A.getChannel(e);
                }),
                { enabled: Z } = p.A.useExperiment({
                    guildId: null == J ? void 0 : J.guild_id,
                    location: "ThreadUserContextMenu",
                }),
                q = Z ? (null == J ? void 0 : J.id) : null,
                Q = (0, U.A)(t, q),
                Y = (0, E.A)({
                    user: t,
                    guildId: n,
                    channelId: k,
                    context: c,
                }),
                $ = (0, j.A)({
                    user: t,
                }),
                { analyticsLocations: z } = (0, A.Ay)(s.A.THREAD_USER_MENU),
                ee = (0, b.A)({
                    guildId: n,
                    userId: t.id,
                    analyticsLocation: {
                        page: w.liQ.GUILD_CHANNEL,
                        section: w.JJy.CHAT_USERNAME,
                        object: w.ZSU.CONTEXT_MENU_ITEM,
                    },
                    analyticsLocations: z,
                    context: c,
                }),
                et = (0, C.A)({
                    user: t,
                    guildId: n,
                }),
                en = (0, d.A)(null, t),
                er = (0, m.A)({
                    user: t,
                }),
                el = (0, h.A)({
                    user: t,
                }),
                ei = (0, G.A)({
                    user: t,
                }),
                eo = (0, v.A)({
                    user: t,
                    guildId: n,
                    channelId: k,
                    location: "ThreadUserContextMenu",
                }),
                ea = (0, M.A)({
                    user: t,
                    guildId: n,
                    channelId: k,
                    location: "ThreadUserContextMenu",
                }),
                ec = (0, _.A)(t, n, k),
                eu = (0, I.A)(t.id, n),
                ed = (0, N.A)(t, n),
                es = (0, g.A)({
                    id: t.id,
                    label: L.intl.string(L.t["/AXYnE"]),
                }),
                eA = (0, f.A)(t),
                eg = (0, P.A)({
                    commandType: u.kc.USER,
                    commandTargetId: t.id,
                    channel: a,
                    guildId: n,
                    onHeightUpdate: V,
                }),
                eb = t.isNonUserBot();
            return (0, r.jsxs)(i.W1t, {
                "data-menu-migrated": !0,
                navId: "user-context",
                onClose: o.Z_,
                "aria-label": L.intl.string(L.t.liqwPJ),
                onSelect: B,
                children: [
                    !eb &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(i.rXV, {
                                    children: eA,
                                }),
                                (0, r.jsxs)(i.rXV, {
                                    children: [X, H, W, K, Q, Y, $, F],
                                }),
                                (0, r.jsx)(i.rXV, {
                                    children: en,
                                }),
                                (0, r.jsxs)(i.rXV, {
                                    children: [ee, eg, et, er, el, ei, ea, eo],
                                }),
                                (0, r.jsx)(i.rXV, {
                                    children: ec,
                                }),
                                (0, r.jsxs)(i.rXV, {
                                    children: [eu, ed],
                                }),
                            ],
                        }),
                    (0, r.jsx)(i.rXV, {
                        children: es,
                    }),
                ],
            });
        },
        {
            object: w.ZSU.CONTEXT_MENU,
        },
    ),
    [s.A.CONTEXT_MENU, s.A.THREAD_USER_MENU],
);
