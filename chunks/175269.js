i.d(n, { default: () => V });
var r = i(477900),
    t = i(582128),
    l = i(17928),
    a = i(980707),
    d = i(477782),
    s = i(442433),
    o = i(847767),
    u = i(358367),
    A = i(155718),
    c = i(468389),
    m = i(793574),
    g = i(688810),
    T = i(50268),
    h = i(346247),
    x = i(844065),
    E = i(164891),
    b = i(734057),
    U = i(309010),
    C = i(803664),
    M = i(29293),
    j = i(509302),
    p = i(497600),
    N = i(646911),
    S = i(239211),
    _ = i(373397),
    f = i(399476),
    I = i(889460),
    P = i(448290),
    X = i(301541),
    y = i(252726),
    k = i(460597),
    G = i(313998),
    v = i(192308),
    D = i(80682),
    L = i(660273),
    R = i(351001),
    w = i(867455),
    H = i(406704),
    Z = i(71393),
    q = i(576705),
    J = i(287809),
    O = i(375708),
    W = i(243949),
    z = i(180798),
    B = i(77544),
    F = i(652215);
let V = (0, u.A)(
    (0, o.A)(
        function (e) {
            let n,
                o,
                u,
                V,
                K,
                Q,
                { user: Y, guildId: $, channel: ee, context: en, onSelect: ei, onHeightUpdate: er } = e,
                et = ee.id,
                el = (0, W.A)({ userId: Y.id, guildId: $, channelId: et }),
                ea = (0, P.A)(Y, $, et, en),
                ed = (0, X.A)(Y.id, en),
                es = (0, B.A)(Y.id),
                eo = (0, _.A)({ user: Y, context: en }),
                eu = (0, l.bG)([U.Ay, b.A], () => {
                    let e = U.Ay.getVoiceChannelId();
                    return b.A.getChannel(e);
                }),
                { enabled: eA } = E.A.useExperiment({ guildId: eu?.guild_id, location: "ThreadUserContextMenu" }),
                ec = eA ? eu?.id : null,
                em = (0, G.A)(Y, ec),
                eg = (0, p.A)({ user: Y, guildId: $, channelId: et, context: en }),
                eT = (0, M.A)({ user: Y }),
                { analyticsLocations: eh } = (0, g.Ay)(m.A.THREAD_USER_MENU),
                ex = (0, h.A)({
                    guildId: $,
                    userId: Y.id,
                    analyticsLocation: {
                        page: F.liQ.GUILD_CHANNEL,
                        section: F.JJy.CHAT_USERNAME,
                        object: F.ZSU.CONTEXT_MENU_ITEM,
                    },
                    analyticsLocations: eh,
                    context: en,
                }),
                eE = (0, I.A)({ user: Y, guildId: $ }),
                eb = (0, c.A)(null, Y),
                eU = (0, C.A)({ user: Y }),
                eC = (0, j.A)({ user: Y }),
                eM = (0, k.A)({ user: Y }),
                ej = (0, S.A)({ user: Y, guildId: $, channelId: et, location: "ThreadUserContextMenu" }),
                ep = (0, f.A)({ user: Y, guildId: $, channelId: et, location: "ThreadUserContextMenu" }),
                eN =
                    ((n = t.useMemo(() => ({ [$]: [Y.id] }), [$, Y.id])),
                    (0, D.Eq)(n, "useThreadAdminActionItems"),
                    (0, l.bG)([q.A], () => q.A.getGuildVersion($), [$]),
                    (o = (0, l.bG)([b.A], () => b.A.getChannel(et))),
                    (u = (0, l.bG)([Z.A], () => Z.A.getGuild($), [$])),
                    (V = (0, l.bG)([J.default], () => J.default.getCurrentUser())),
                    (K = (0, L.A)(o, "Context Menu")),
                    (Q = (0, H.qi)(o?.id)),
                    o?.isMediaThread()
                        ? []
                        : V?.id === Y.id
                          ? [K]
                          : null == u || null == o || null == V
                            ? []
                            : [
                                  Q
                                      ? (0, r.jsx)(
                                            d.Dr,
                                            {
                                                id: "remove",
                                                label: o.isForumPost()
                                                    ? O.intl.formatToPlainString(O.t.v2KNNx, { user: Y.username })
                                                    : O.intl.formatToPlainString(O.t["27xWaT"], { user: Y.username }),
                                                color: "danger",
                                                action: () => w.A.removeMember(o.id, Y.id, "Context Menu"),
                                            },
                                            "remove",
                                        )
                                      : null,
                                  (0, R.L7)(Y, u)
                                      ? (0, r.jsx)(
                                            d.Dr,
                                            {
                                                id: "kick",
                                                label: Q
                                                    ? O.intl.formatToPlainString(O.t["1Ie87p"], { user: Y.username })
                                                    : O.intl.formatToPlainString(O.t["9l/iTS"], { user: Y.username }),
                                                color: "danger",
                                                action: () =>
                                                    (0, v.openModalLazy)(async () => {
                                                        let { default: e } = await Promise.all([
                                                            i.e("253335"),
                                                            i.e("140243"),
                                                        ]).then(i.bind(i, 547166));
                                                        return (n) => (0, r.jsx)(e, { ...n, guildId: u.id, user: Y });
                                                    }),
                                            },
                                            "kick",
                                        )
                                      : null,
                                  (0, R.EZ)(Y, u)
                                      ? (0, r.jsx)(
                                            d.Dr,
                                            {
                                                id: "ban",
                                                label: Q
                                                    ? O.intl.formatToPlainString(O.t.i62APf, { user: Y.username })
                                                    : O.intl.formatToPlainString(O.t.WnpUBi, { user: Y.username }),
                                                color: "danger",
                                                action: () =>
                                                    (0, v.openModalLazy)(async () => {
                                                        let { default: e } = await Promise.all([
                                                            i.e("420282"),
                                                            i.e("802504"),
                                                        ]).then(i.bind(i, 333179));
                                                        return (n) => (0, r.jsx)(e, { ...n, guildId: u.id, user: Y });
                                                    }),
                                            },
                                            "ban",
                                        )
                                      : null,
                              ]),
                eS = (0, z.A)(Y.id, $),
                e_ = (0, y.A)(Y, $),
                ef = (0, T.A)({ id: Y.id, label: O.intl.string(O.t["/AXYnE"]) }),
                eI = (0, x.A)(Y),
                eP = (0, N.A)({
                    commandType: A.kc.USER,
                    commandTargetId: Y.id,
                    channel: ee,
                    guildId: $,
                    onHeightUpdate: er,
                }),
                eX = Y.isNonUserBot();
            return (0, r.jsxs)(a.W, {
                "data-menu-migrated": !0,
                navId: "user-context",
                onClose: s.Z_,
                "aria-label": O.intl.string(O.t.liqwPJ),
                onSelect: ei,
                children: [
                    !eX &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(d.rX, { children: eI }),
                                (0, r.jsxs)(d.rX, { children: [el, ea, ed, eo, em, eg, eT, es] }),
                                (0, r.jsx)(d.rX, { children: eb }),
                                (0, r.jsxs)(d.rX, { children: [ex, eP, eE, eU, eC, eM, ep, ej] }),
                                (0, r.jsx)(d.rX, { children: eN }),
                                (0, r.jsxs)(d.rX, { children: [eS, e_] }),
                            ],
                        }),
                    (0, r.jsx)(d.rX, { children: ef }),
                ],
            });
        },
        { object: F.ZSU.CONTEXT_MENU },
    ),
    [m.A.CONTEXT_MENU, m.A.THREAD_USER_MENU],
);
