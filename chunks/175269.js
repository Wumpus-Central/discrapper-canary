i.d(n, { default: () => B });
var r = i(477900),
    t = i(582128),
    l = i(980707),
    a = i(477782),
    d = i(442433),
    s = i(847767),
    o = i(358367),
    u = i(155718),
    A = i(468389),
    c = i(793574),
    m = i(688810),
    T = i(50268),
    g = i(346247),
    h = i(844065),
    x = i(803664),
    E = i(29293),
    b = i(509302),
    U = i(497600),
    j = i(646911),
    M = i(239211),
    C = i(373397),
    N = i(399476),
    S = i(889460),
    f = i(448290),
    p = i(301541),
    _ = i(252726),
    P = i(460597),
    X = i(313998),
    I = i(17928),
    k = i(192308),
    y = i(80682),
    G = i(660273),
    v = i(351001),
    D = i(867455),
    L = i(406704),
    R = i(734057),
    w = i(71393),
    H = i(576705),
    Z = i(287809),
    q = i(375708),
    J = i(243949),
    O = i(180798),
    W = i(77544),
    z = i(652215);
let B = (0, o.A)(
    (0, s.A)(
        function (e) {
            let n,
                s,
                o,
                B,
                F,
                K,
                { user: Q, guildId: V, channel: Y, context: $, onSelect: ee, onHeightUpdate: en } = e,
                ei = Y.id,
                er = (0, J.A)({ userId: Q.id, guildId: V, channelId: ei }),
                et = (0, f.A)(Q, V, ei, $),
                el = (0, p.A)(Q.id, $),
                ea = (0, W.A)(Q.id),
                ed = (0, C.A)({ user: Q, context: $ }),
                es = (0, X.A)(Q, null),
                eo = (0, U.A)({ user: Q, guildId: V, channelId: ei, context: $ }),
                eu = (0, E.A)({ user: Q }),
                { analyticsLocations: eA } = (0, m.Ay)(c.A.THREAD_USER_MENU),
                ec = (0, g.A)({
                    guildId: V,
                    userId: Q.id,
                    analyticsLocation: {
                        page: z.liQ.GUILD_CHANNEL,
                        section: z.JJy.CHAT_USERNAME,
                        object: z.ZSU.CONTEXT_MENU_ITEM,
                    },
                    analyticsLocations: eA,
                    context: $,
                }),
                em = (0, S.A)({ user: Q, guildId: V }),
                eT = (0, A.A)(null, Q),
                eg = (0, x.A)({ user: Q }),
                eh = (0, b.A)({ user: Q }),
                ex = (0, P.A)({ user: Q }),
                eE = (0, M.A)({ user: Q, guildId: V, channelId: ei, location: "ThreadUserContextMenu" }),
                eb = (0, N.A)({ user: Q, guildId: V, channelId: ei, location: "ThreadUserContextMenu" }),
                eU =
                    ((n = t.useMemo(() => ({ [V]: [Q.id] }), [V, Q.id])),
                    (0, y.Eq)(n, "useThreadAdminActionItems"),
                    (0, I.bG)([H.A], () => H.A.getGuildVersion(V), [V]),
                    (s = (0, I.bG)([R.A], () => R.A.getChannel(ei))),
                    (o = (0, I.bG)([w.A], () => w.A.getGuild(V), [V])),
                    (B = (0, I.bG)([Z.default], () => Z.default.getCurrentUser())),
                    (F = (0, G.A)(s, "Context Menu")),
                    (K = (0, L.qi)(s?.id)),
                    s?.isMediaThread()
                        ? []
                        : B?.id === Q.id
                          ? [F]
                          : null == o || null == s || null == B
                            ? []
                            : [
                                  K
                                      ? (0, r.jsx)(
                                            a.Dr,
                                            {
                                                id: "remove",
                                                label: s.isForumPost()
                                                    ? q.intl.formatToPlainString(q.t.v2KNNx, { user: Q.username })
                                                    : q.intl.formatToPlainString(q.t["27xWaT"], { user: Q.username }),
                                                color: "danger",
                                                action: () => D.A.removeMember(s.id, Q.id, "Context Menu"),
                                            },
                                            "remove",
                                        )
                                      : null,
                                  (0, v.L7)(Q, o)
                                      ? (0, r.jsx)(
                                            a.Dr,
                                            {
                                                id: "kick",
                                                label: K
                                                    ? q.intl.formatToPlainString(q.t["1Ie87p"], { user: Q.username })
                                                    : q.intl.formatToPlainString(q.t["9l/iTS"], { user: Q.username }),
                                                color: "danger",
                                                action: () =>
                                                    (0, k.openModalLazy)(async () => {
                                                        let { default: e } = await Promise.all([
                                                            i.e("253335"),
                                                            i.e("140243"),
                                                        ]).then(i.bind(i, 547166));
                                                        return (n) => (0, r.jsx)(e, { ...n, guildId: o.id, user: Q });
                                                    }),
                                            },
                                            "kick",
                                        )
                                      : null,
                                  (0, v.EZ)(Q, o)
                                      ? (0, r.jsx)(
                                            a.Dr,
                                            {
                                                id: "ban",
                                                label: K
                                                    ? q.intl.formatToPlainString(q.t.i62APf, { user: Q.username })
                                                    : q.intl.formatToPlainString(q.t.WnpUBi, { user: Q.username }),
                                                color: "danger",
                                                action: () =>
                                                    (0, k.openModalLazy)(async () => {
                                                        let { default: e } = await Promise.all([
                                                            i.e("420282"),
                                                            i.e("802504"),
                                                        ]).then(i.bind(i, 333179));
                                                        return (n) => (0, r.jsx)(e, { ...n, guildId: o.id, user: Q });
                                                    }),
                                            },
                                            "ban",
                                        )
                                      : null,
                              ]),
                ej = (0, O.A)(Q.id, V),
                eM = (0, _.A)(Q, V),
                eC = (0, T.A)({ id: Q.id, label: q.intl.string(q.t["/AXYnE"]) }),
                eN = (0, h.A)(Q),
                eS = (0, j.A)({
                    commandType: u.kc.USER,
                    commandTargetId: Q.id,
                    channel: Y,
                    guildId: V,
                    onHeightUpdate: en,
                }),
                ef = Q.isNonUserBot();
            return (0, r.jsxs)(l.W, {
                "data-menu-migrated": !0,
                navId: "user-context",
                onClose: d.Z_,
                "aria-label": q.intl.string(q.t.liqwPJ),
                onSelect: ee,
                children: [
                    !ef &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(a.rX, { children: eN }),
                                (0, r.jsxs)(a.rX, { children: [er, et, el, ed, es, eo, eu, ea] }),
                                (0, r.jsx)(a.rX, { children: eT }),
                                (0, r.jsxs)(a.rX, { children: [ec, eS, em, eg, eh, ex, eb, eE] }),
                                (0, r.jsx)(a.rX, { children: eU }),
                                (0, r.jsxs)(a.rX, { children: [ej, eM] }),
                            ],
                        }),
                    (0, r.jsx)(a.rX, { children: eC }),
                ],
            });
        },
        { object: z.ZSU.CONTEXT_MENU },
    ),
    [c.A.CONTEXT_MENU, c.A.THREAD_USER_MENU],
);
