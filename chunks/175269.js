i.d(n, { default: () => z });
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
    N = i(373397),
    S = i(399476),
    f = i(889460),
    p = i(448290),
    C = i(301541),
    _ = i(252726),
    P = i(460597),
    X = i(313998),
    I = i(17928),
    k = i(192308),
    y = i(80682),
    G = i(351001),
    v = i(472456),
    D = i(406704),
    L = i(734057),
    R = i(71393),
    w = i(576705),
    H = i(287809),
    Z = i(105292),
    q = i(243949),
    J = i(180798),
    O = i(77544),
    W = i(652215);
let z = (0, o.A)(
    (0, s.A)(
        function (e) {
            let n,
                s,
                o,
                z,
                B,
                { user: F, guildId: K, channel: Q, context: V, onSelect: Y, onHeightUpdate: $ } = e,
                ee = Q.id,
                en = (0, q.A)({ userId: F.id, guildId: K, channelId: ee }),
                ei = (0, p.A)(F, K, ee, V),
                er = (0, C.A)(F.id, V),
                et = (0, O.A)(F.id),
                el = (0, N.A)({ user: F, context: V }),
                ea = (0, X.A)(F, null),
                ed = (0, U.A)({ user: F, guildId: K, channelId: ee, context: V }),
                es = (0, E.A)({ user: F }),
                { analyticsLocations: eo } = (0, m.Ay)(c.A.THREAD_USER_MENU),
                eu = (0, g.A)({
                    guildId: K,
                    userId: F.id,
                    analyticsLocation: {
                        page: W.liQ.GUILD_CHANNEL,
                        section: W.JJy.CHAT_USERNAME,
                        object: W.ZSU.CONTEXT_MENU_ITEM,
                    },
                    analyticsLocations: eo,
                    context: V,
                }),
                eA = (0, f.A)({ user: F, guildId: K }),
                ec = (0, A.A)(null, F),
                em = (0, x.A)({ user: F }),
                eT = (0, b.A)({ user: F }),
                eg = (0, P.A)({ user: F }),
                eh = (0, M.A)({ user: F, guildId: K, channelId: ee, location: "ThreadUserContextMenu" }),
                ex = (0, S.A)({ user: F, guildId: K, channelId: ee, location: "ThreadUserContextMenu" }),
                eE =
                    ((n = t.useMemo(() => ({ [K]: [F.id] }), [K, F.id])),
                    (0, y.Eq)(n, "useThreadAdminActionItems"),
                    (0, I.bG)([w.A], () => w.A.getGuildVersion(K), [K]),
                    (s = (0, I.bG)([L.A], () => L.A.getChannel(ee))),
                    (o = (0, I.bG)([R.A], () => R.A.getGuild(K), [K])),
                    (z = (0, I.bG)([H.default], () => H.default.getCurrentUser())),
                    (B = (0, D.qi)(s?.id)),
                    s?.isMediaThread() || z?.id === F.id || null == o || null == s || null == z
                        ? []
                        : [
                              B
                                  ? (0, r.jsx)(
                                        a.Dr,
                                        {
                                            id: "remove",
                                            label: s.isForumPost()
                                                ? Z.intl.formatToPlainString(Z.t.v2KNNx, { user: F.username })
                                                : Z.intl.formatToPlainString(Z.t["27xWaT"], { user: F.username }),
                                            color: "danger",
                                            action: () => v.A.removeMember(s.id, F.id, "Context Menu"),
                                        },
                                        "remove",
                                    )
                                  : null,
                              (0, G.L7)(F, o)
                                  ? (0, r.jsx)(
                                        a.Dr,
                                        {
                                            id: "kick",
                                            label: B
                                                ? Z.intl.formatToPlainString(Z.t["1Ie87p"], { user: F.username })
                                                : Z.intl.formatToPlainString(Z.t["9l/iTS"], { user: F.username }),
                                            color: "danger",
                                            action: () =>
                                                (0, k.openModalLazy)(async () => {
                                                    let { default: e } = await Promise.all([
                                                        i.e("304350"),
                                                        i.e("253335"),
                                                        i.e("916758"),
                                                        i.e("356664"),
                                                        i.e("473380"),
                                                        i.e("387634"),
                                                        i.e("627487"),
                                                        i.e("479971"),
                                                        i.e("736621"),
                                                        i.e("140243"),
                                                    ]).then(i.bind(i, 547166));
                                                    return (n) => (0, r.jsx)(e, { ...n, guildId: o.id, user: F });
                                                }),
                                        },
                                        "kick",
                                    )
                                  : null,
                              (0, G.EZ)(F, o)
                                  ? (0, r.jsx)(
                                        a.Dr,
                                        {
                                            id: "ban",
                                            label: B
                                                ? Z.intl.formatToPlainString(Z.t.i62APf, { user: F.username })
                                                : Z.intl.formatToPlainString(Z.t.WnpUBi, { user: F.username }),
                                            color: "danger",
                                            action: () =>
                                                (0, k.openModalLazy)(async () => {
                                                    let { default: e } = await Promise.all([
                                                        i.e("420282"),
                                                        i.e("802504"),
                                                    ]).then(i.bind(i, 333179));
                                                    return (n) => (0, r.jsx)(e, { ...n, guildId: o.id, user: F });
                                                }),
                                        },
                                        "ban",
                                    )
                                  : null,
                          ]),
                eb = (0, J.A)(F.id, K),
                eU = (0, _.A)(F, K),
                ej = (0, T.A)({ id: F.id, label: Z.intl.string(Z.t["/AXYnE"]) }),
                eM = (0, h.A)(F),
                eN = (0, j.A)({
                    commandType: u.kc.USER,
                    commandTargetId: F.id,
                    channel: Q,
                    guildId: K,
                    onHeightUpdate: $,
                }),
                eS = F.isNonUserBot();
            return (0, r.jsxs)(l.W, {
                "data-menu-migrated": !0,
                navId: "user-context",
                onClose: d.Z_,
                "aria-label": Z.intl.string(Z.t.liqwPJ),
                onSelect: Y,
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
