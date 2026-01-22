n.d(t, { default: () => L });
var r = n(627968);
n(64700);
var l = n(311907),
    i = n(397927),
    a = n(442433),
    o = n(847767),
    s = n(358367),
    u = n(155718),
    c = n(468389),
    d = n(793574),
    A = n(688810),
    b = n(50268),
    g = n(346247),
    O = n(222311),
    f = n(164891),
    p = n(734057),
    m = n(309010),
    j = n(803664),
    h = n(29293),
    y = n(509302),
    E = n(497600),
    x = n(773699),
    P = n(239211),
    v = n(707378),
    M = n(399476),
    C = n(889460),
    N = n(448290),
    S = n(301541),
    T = n(252726),
    G = n(460597),
    U = n(313998),
    _ = n(146359),
    I = n(243949),
    R = n(180798),
    w = n(77544),
    D = n(652215),
    B = n(985018);
let L = (0, s.A)(
    (0, o.A)(
        function (e) {
            let { user: t, guildId: n, channel: o, context: s, onSelect: L, onHeightUpdate: V } = e,
                k = o.id,
                X = (0, I.A)({
                    userId: t.id,
                    guildId: n,
                    channelId: k,
                }),
                H = (0, N.A)(t, n, s),
                W = (0, S.A)(t.id, s),
                F = (0, w.A)(t.id),
                K = (0, v.A)({
                    user: t,
                    context: s,
                }),
                J = (0, l.bG)([m.A, p.A], () => {
                    let e = m.A.getVoiceChannelId();
                    return p.A.getChannel(e);
                }),
                { enabled: Y } = f.A.useExperiment({
                    guildId: null == J ? void 0 : J.guild_id,
                    location: "ThreadUserContextMenu",
                }),
                Z = Y ? (null == J ? void 0 : J.id) : null,
                q = (0, U.A)(t, Z),
                Q = (0, E.A)({
                    user: t,
                    guildId: n,
                    channelId: k,
                    context: s,
                }),
                $ = (0, h.A)({ user: t }),
                { analyticsLocations: z } = (0, A.Ay)(d.A.THREAD_USER_MENU),
                ee = (0, g.A)({
                    guildId: n,
                    userId: t.id,
                    analyticsLocation: {
                        page: D.liQ.GUILD_CHANNEL,
                        section: D.JJy.CHAT_USERNAME,
                        object: D.ZSU.CONTEXT_MENU_ITEM,
                    },
                    analyticsLocations: z,
                    context: s,
                }),
                et = (0, C.A)({
                    user: t,
                    guildId: n,
                }),
                en = (0, c.A)(null, t),
                er = (0, j.A)({ user: t }),
                el = (0, y.A)({ user: t }),
                ei = (0, G.A)({ user: t }),
                ea = (0, P.A)({
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
                es = (0, _.A)(t, n, k),
                eu = (0, R.A)(t.id, n),
                ec = (0, T.A)(t, n),
                ed = (0, b.A)({
                    id: t.id,
                    label: B.intl.string(B.t["/AXYnE"]),
                }),
                eA = (0, O.A)(t),
                eb = (0, x.A)({
                    commandType: u.kc.USER,
                    commandTargetId: t.id,
                    channel: o,
                    guildId: n,
                    onHeightUpdate: V,
                }),
                eg = t.isNonUserBot();
            return (0, r.jsxs)(i.W1t, {
                navId: "user-context",
                onClose: a.Z_,
                "aria-label": B.intl.string(B.t.liqwPJ),
                onSelect: L,
                children: [
                    !eg &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(i.rXV, { children: eA }),
                                (0, r.jsxs)(i.rXV, {
                                    children: [X, H, W, K, q, Q, $, F],
                                }),
                                (0, r.jsx)(i.rXV, { children: en }),
                                (0, r.jsxs)(i.rXV, {
                                    children: [ee, eb, et, er, el, ei, eo, ea],
                                }),
                                (0, r.jsx)(i.rXV, { children: es }),
                                (0, r.jsxs)(i.rXV, {
                                    children: [eu, ec],
                                }),
                            ],
                        }),
                    (0, r.jsx)(i.rXV, { children: ed }),
                ],
            });
        },
        { object: D.ZSU.CONTEXT_MENU },
    ),
    [d.A.CONTEXT_MENU, d.A.THREAD_USER_MENU],
);
