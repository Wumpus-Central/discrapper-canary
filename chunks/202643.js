i.d(n, { default: () => B });
var r = i(477900),
    t = i(582128),
    l = i(165862),
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
    h = i(106401),
    x = i(803664),
    E = i(29293),
    b = i(509302),
    U = i(497600),
    j = i(173500),
    M = i(239211),
    N = i(949674),
    S = i(399476),
    f = i(889460),
    C = i(448290),
    _ = i(301541),
    p = i(252726),
    P = i(460597),
    X = i(313998),
    I = i(855986),
    k = i(192308),
    G = i(80682),
    v = i(351001),
    y = i(7909),
    D = i(406704),
    R = i(734057),
    w = i(71393),
    H = i(576705),
    L = i(287809),
    Z = i(792996),
    q = i(243949),
    J = i(180798),
    O = i(77544),
    W = i(652215);
let B = (0, o.A)(
    (0, s.A)(
        function (e) {
            let n,
                s,
                o,
                B,
                F,
                { user: K, guildId: Q, channel: V, context: Y, onSelect: z, onHeightUpdate: $ } = e,
                ee = V.id,
                en = (0, q.A)({ userId: K.id, guildId: Q, channelId: ee }),
                ei = (0, C.A)(K, Q, ee, Y),
                er = (0, _.A)(K.id, Y),
                et = (0, O.A)(K.id),
                el = (0, N.A)({ user: K, context: Y }),
                ea = (0, X.A)(K, null),
                ed = (0, U.A)({ user: K, guildId: Q, channelId: ee, context: Y }),
                es = (0, E.A)({ user: K }),
                { analyticsLocations: eo } = (0, m.Ay)(c.A.THREAD_USER_MENU),
                eu = (0, g.A)({
                    guildId: Q,
                    userId: K.id,
                    analyticsLocation: {
                        page: W.liQ.GUILD_CHANNEL,
                        section: W.JJy.CHAT_USERNAME,
                        object: W.ZSU.CONTEXT_MENU_ITEM,
                    },
                    analyticsLocations: eo,
                    context: Y,
                }),
                eA = (0, f.A)({ user: K, guildId: Q }),
                ec = (0, A.A)(null, K),
                em = (0, x.A)({ user: K }),
                eT = (0, b.A)({ user: K }),
                eg = (0, P.A)({ user: K }),
                eh = (0, M.A)({ user: K, guildId: Q, channelId: ee, location: "ThreadUserContextMenu" }),
                ex = (0, S.A)({ user: K, guildId: Q, channelId: ee, location: "ThreadUserContextMenu" }),
                eE =
                    ((n = t.useMemo(() => ({ [Q]: [K.id] }), [Q, K.id])),
                    (0, G.Eq)(n, "useThreadAdminActionItems"),
                    (0, I.bG)([H.A], () => H.A.getGuildVersion(Q), [Q]),
                    (s = (0, I.bG)([R.A], () => R.A.getChannel(ee))),
                    (o = (0, I.bG)([w.A], () => w.A.getGuild(Q), [Q])),
                    (B = (0, I.bG)([L.default], () => L.default.getCurrentUser())),
                    (F = (0, D.qi)(s?.id)),
                    s?.isMediaThread() || B?.id === K.id || null == o || null == s || null == B
                        ? []
                        : [
                              F
                                  ? (0, r.jsx)(
                                        a.Dr,
                                        {
                                            id: "remove",
                                            label: s.isForumPost()
                                                ? Z.intl.formatToPlainString(Z.t.v2KNNx, { user: K.username })
                                                : Z.intl.formatToPlainString(Z.t["27xWaT"], { user: K.username }),
                                            color: "danger",
                                            action: () => y.A.removeMember(s.id, K.id, "Context Menu"),
                                        },
                                        "remove",
                                    )
                                  : null,
                              (0, v.L7)(K, o)
                                  ? (0, r.jsx)(
                                        a.Dr,
                                        {
                                            id: "kick",
                                            label: F
                                                ? Z.intl.formatToPlainString(Z.t["1Ie87p"], { user: K.username })
                                                : Z.intl.formatToPlainString(Z.t["9l/iTS"], { user: K.username }),
                                            color: "danger",
                                            action: () =>
                                                (0, k.mM)(async () => {
                                                    let { default: e } = await Promise.all([
                                                        i.e(551257),
                                                        i.e(916758),
                                                        i.e(356664),
                                                        i.e(387634),
                                                        i.e(967874),
                                                        i.e(479971),
                                                        i.e(202622),
                                                        i.e(736621),
                                                        i.e(140243),
                                                    ]).then(i.bind(i, 547166));
                                                    return (n) => (0, r.jsx)(e, { ...n, guildId: o.id, user: K });
                                                }),
                                        },
                                        "kick",
                                    )
                                  : null,
                              (0, v.EZ)(K, o)
                                  ? (0, r.jsx)(
                                        a.Dr,
                                        {
                                            id: "ban",
                                            label: F
                                                ? Z.intl.formatToPlainString(Z.t.i62APf, { user: K.username })
                                                : Z.intl.formatToPlainString(Z.t.WnpUBi, { user: K.username }),
                                            color: "danger",
                                            action: () =>
                                                (0, k.mM)(async () => {
                                                    let { default: e } = await Promise.all([
                                                        i.e(420282),
                                                        i.e(802504),
                                                    ]).then(i.bind(i, 333179));
                                                    return (n) => (0, r.jsx)(e, { ...n, guildId: o.id, user: K });
                                                }),
                                        },
                                        "ban",
                                    )
                                  : null,
                          ]),
                eb = (0, J.A)(K.id, Q),
                eU = (0, p.A)(K, Q),
                ej = (0, T.A)({ id: K.id, label: Z.intl.string(Z.t["/AXYnE"]) }),
                eM = (0, h.A)(K),
                eN = (0, j.A)({
                    commandType: u.kc.USER,
                    commandTargetId: K.id,
                    channel: V,
                    guildId: Q,
                    onHeightUpdate: $,
                }),
                eS = K.isNonUserBot();
            return (0, r.jsxs)(l.W, {
                "data-menu-migrated": !0,
                navId: "user-context",
                onClose: d.Z_,
                "aria-label": Z.intl.string(Z.t.liqwPJ),
                onSelect: z,
                children: [
                    !eS &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(a.rX, { children: eM }),
                                (0, r.jsxs)(a.rX, { children: [en, ei, er, el, ea, ed, es, et] }),
                                (0, r.jsx)(a.rX, { children: ec }),
                                (0, r.jsxs)(a.rX, { children: [eu, eN, eA, em, eT, eg, ex, eh] }),
                                (0, r.jsx)(a.rX, { children: eE }),
                                (0, r.jsxs)(a.rX, { children: [eb, eU] }),
                            ],
                        }),
                    (0, r.jsx)(a.rX, { children: ej }),
                ],
            });
        },
        { object: W.ZSU.CONTEXT_MENU },
    ),
    [c.A.CONTEXT_MENU, c.A.THREAD_USER_MENU],
);
