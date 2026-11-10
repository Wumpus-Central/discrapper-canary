i.d(n, { default: () => F });
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
    T = i(374846),
    g = i(50268),
    h = i(346247),
    x = i(106401),
    E = i(803664),
    b = i(29293),
    U = i(509302),
    j = i(497600),
    M = i(173500),
    N = i(239211),
    S = i(949674),
    f = i(399476),
    C = i(889460),
    P = i(448290),
    _ = i(301541),
    p = i(252726),
    I = i(460597),
    X = i(313998),
    k = i(855986),
    G = i(192308),
    R = i(80682),
    v = i(351001),
    y = i(7909),
    D = i(406704),
    w = i(734057),
    O = i(71393),
    H = i(576705),
    L = i(287809),
    Z = i(792996),
    q = i(243949),
    B = i(180798),
    J = i(77544),
    W = i(652215);
let F = (0, o.A)(
    (0, s.A)(
        function (e) {
            let n,
                s,
                o,
                F,
                K,
                { user: Q, guildId: V, channel: Y, context: z, onSelect: $, onHeightUpdate: ee } = e,
                en = Y.id,
                ei = (0, q.A)({ userId: Q.id, guildId: V, channelId: en }),
                er = (0, P.A)(Q, (0, T.I)(z === W.BRT.POPOUT ? null : en)),
                et = (0, _.A)(Q.id, z),
                el = (0, J.A)(Q.id),
                ea = (0, S.A)({ user: Q, context: z }),
                ed = (0, X.A)(Q, null),
                es = (0, j.A)({ user: Q, guildId: V, channelId: en, context: z }),
                eo = (0, b.A)({ user: Q }),
                { analyticsLocations: eu } = (0, m.Ay)(c.A.THREAD_USER_MENU),
                eA = (0, h.A)({
                    guildId: V,
                    userId: Q.id,
                    analyticsLocation: {
                        page: W.liQ.GUILD_CHANNEL,
                        section: W.JJy.CHAT_USERNAME,
                        object: W.ZSU.CONTEXT_MENU_ITEM,
                    },
                    analyticsLocations: eu,
                    context: z,
                }),
                ec = (0, C.A)({ user: Q, guildId: V }),
                em = (0, A.A)(null, Q),
                eT = (0, E.A)({ user: Q }),
                eg = (0, U.A)({ user: Q }),
                eh = (0, I.A)({ user: Q }),
                ex = (0, N.A)({ user: Q, guildId: V, channelId: en, location: "ThreadUserContextMenu" }),
                eE = (0, f.A)({ user: Q, guildId: V, channelId: en, location: "ThreadUserContextMenu" }),
                eb =
                    ((n = t.useMemo(() => ({ [V]: [Q.id] }), [V, Q.id])),
                    (0, R.Eq)(n, "useThreadAdminActionItems"),
                    (0, k.bG)([H.A], () => H.A.getGuildVersion(V), [V]),
                    (s = (0, k.bG)([w.A], () => w.A.getChannel(en))),
                    (o = (0, k.bG)([O.A], () => O.A.getGuild(V), [V])),
                    (F = (0, k.bG)([L.default], () => L.default.getCurrentUser())),
                    (K = (0, D.qi)(s?.id)),
                    s?.isMediaThread() || F?.id === Q.id || null == o || null == s || null == F
                        ? []
                        : [
                              K
                                  ? (0, r.jsx)(
                                        a.Dr,
                                        {
                                            id: "remove",
                                            label: s.isForumPost()
                                                ? Z.intl.formatToPlainString(Z.t.v2KNNx, { user: Q.username })
                                                : Z.intl.formatToPlainString(Z.t["27xWaT"], { user: Q.username }),
                                            color: "danger",
                                            action: () => y.A.removeMember(s.id, Q.id, "Context Menu"),
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
                                                ? Z.intl.formatToPlainString(Z.t["1Ie87p"], { user: Q.username })
                                                : Z.intl.formatToPlainString(Z.t["9l/iTS"], { user: Q.username }),
                                            color: "danger",
                                            action: () =>
                                                (0, G.mM)(async () => {
                                                    let { default: e } = await Promise.all([
                                                        i.e(142651),
                                                        i.e(916758),
                                                        i.e(356664),
                                                        i.e(387634),
                                                        i.e(967874),
                                                        i.e(479971),
                                                        i.e(202622),
                                                        i.e(736621),
                                                        i.e(140243),
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
                                                ? Z.intl.formatToPlainString(Z.t.i62APf, { user: Q.username })
                                                : Z.intl.formatToPlainString(Z.t.WnpUBi, { user: Q.username }),
                                            color: "danger",
                                            action: () =>
                                                (0, G.mM)(async () => {
                                                    let { default: e } = await Promise.all([
                                                        i.e(420282),
                                                        i.e(802504),
                                                    ]).then(i.bind(i, 333179));
                                                    return (n) => (0, r.jsx)(e, { ...n, guildId: o.id, user: Q });
                                                }),
                                        },
                                        "ban",
                                    )
                                  : null,
                          ]),
                eU = (0, B.A)(Q.id, V),
                ej = (0, p.A)(Q, V),
                eM = (0, g.A)({ id: Q.id, label: Z.intl.string(Z.t["/AXYnE"]) }),
                eN = (0, x.A)(Q),
                eS = (0, M.A)({
                    commandType: u.kc.USER,
                    commandTargetId: Q.id,
                    channel: Y,
                    guildId: V,
                    onHeightUpdate: ee,
                }),
                ef = Q.isNonUserBot();
            return (0, r.jsxs)(l.W, {
                "data-menu-migrated": !0,
                navId: "user-context",
                onClose: d.Z_,
                "aria-label": Z.intl.string(Z.t.liqwPJ),
                onSelect: $,
                children: [
                    !ef &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(a.rX, { children: eN }),
                                (0, r.jsxs)(a.rX, { children: [ei, er, et, ea, ed, es, eo, el] }),
                                (0, r.jsx)(a.rX, { children: em }),
                                (0, r.jsxs)(a.rX, { children: [eA, eS, ec, eT, eg, eh, eE, ex] }),
                                (0, r.jsx)(a.rX, { children: eb }),
                                (0, r.jsxs)(a.rX, { children: [eU, ej] }),
                            ],
                        }),
                    (0, r.jsx)(a.rX, { children: eM }),
                ],
            });
        },
        { object: W.ZSU.CONTEXT_MENU },
    ),
    [c.A.CONTEXT_MENU, c.A.THREAD_USER_MENU],
);
