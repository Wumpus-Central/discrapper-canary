i.d(n, { default: () => K });
var t = i(627968),
    r = i(64700),
    l = i(17928),
    a = i(550079),
    d = i(477782),
    s = i(442433),
    o = i(847767),
    u = i(358367),
    A = i(155718),
    c = i(468389),
    m = i(793574),
    g = i(688810),
    T = i(823104),
    h = i(50268),
    x = i(346247),
    E = i(844065),
    b = i(164891),
    U = i(734057),
    C = i(309010),
    j = i(803664),
    M = i(29293),
    p = i(509302),
    N = i(497600),
    S = i(646911),
    _ = i(239211),
    f = i(707378),
    I = i(399476),
    P = i(889460),
    X = i(448290),
    y = i(301541),
    G = i(252726),
    k = i(460597),
    D = i(313998),
    L = i(192308),
    R = i(80682),
    v = i(660273),
    w = i(351001),
    H = i(867455),
    Z = i(406704),
    q = i(71393),
    J = i(576705),
    O = i(287809),
    W = i(985018),
    z = i(243949),
    B = i(180798),
    F = i(77544),
    V = i(652215);
let K = (0, u.A)(
    (0, o.A)(
        function (e) {
            let n,
                o,
                u,
                K,
                Q,
                Y,
                { user: $, guildId: ee, channel: en, context: ei, onSelect: et, onHeightUpdate: er } = e,
                el = en.id,
                ea = (0, z.A)({ userId: $.id, guildId: ee, channelId: el }),
                ed = (0, X.A)($, ee, ei),
                es = (0, y.A)($.id, ei),
                eo = (0, F.A)($.id),
                eu = (0, f.A)({ user: $, context: ei }),
                eA = (0, T.D)({ userId: $.id }),
                ec = (0, l.bG)([C.A, U.A], () => {
                    let e = C.A.getVoiceChannelId();
                    return U.A.getChannel(e);
                }),
                { enabled: em } = b.A.useExperiment({ guildId: ec?.guild_id, location: "ThreadUserContextMenu" }),
                eg = em ? ec?.id : null,
                eT = (0, D.A)($, eg),
                eh = (0, N.A)({ user: $, guildId: ee, channelId: el, context: ei }),
                ex = (0, M.A)({ user: $ }),
                { analyticsLocations: eE } = (0, g.Ay)(m.A.THREAD_USER_MENU),
                eb = (0, x.A)({
                    guildId: ee,
                    userId: $.id,
                    analyticsLocation: {
                        page: V.liQ.GUILD_CHANNEL,
                        section: V.JJy.CHAT_USERNAME,
                        object: V.ZSU.CONTEXT_MENU_ITEM,
                    },
                    analyticsLocations: eE,
                    context: ei,
                }),
                eU = (0, P.A)({ user: $, guildId: ee }),
                eC = (0, c.A)(null, $),
                ej = (0, j.A)({ user: $ }),
                eM = (0, p.A)({ user: $ }),
                ep = (0, k.A)({ user: $ }),
                eN = (0, _.A)({ user: $, guildId: ee, channelId: el, location: "ThreadUserContextMenu" }),
                eS = (0, I.A)({ user: $, guildId: ee, channelId: el, location: "ThreadUserContextMenu" }),
                e_ =
                    ((n = r.useMemo(() => ({ [ee]: [$.id] }), [ee, $.id])),
                    (0, R.Eq)(n, "useThreadAdminActionItems"),
                    (0, l.bG)([J.A], () => J.A.getGuildVersion(ee), [ee]),
                    (o = (0, l.bG)([U.A], () => U.A.getChannel(el))),
                    (u = (0, l.bG)([q.A], () => q.A.getGuild(ee), [ee])),
                    (K = (0, l.bG)([O.default], () => O.default.getCurrentUser())),
                    (Q = (0, v.A)(o, "Context Menu")),
                    (Y = (0, Z.qi)(o?.id)),
                    K?.id === $.id
                        ? [Q]
                        : null == u || null == o || null == K
                          ? []
                          : [
                                Y
                                    ? (0, t.jsx)(d.Dr, {
                                          id: "remove",
                                          label: o.isForumPost()
                                              ? W.intl.formatToPlainString(W.t.v2KNNx, { user: $.username })
                                              : W.intl.formatToPlainString(W.t["27xWaT"], { user: $.username }),
                                          color: "danger",
                                          action: () => H.A.removeMember(o.id, $.id, "Context Menu"),
                                      })
                                    : null,
                                (0, w.L7)($, u)
                                    ? (0, t.jsx)(d.Dr, {
                                          id: "kick",
                                          label: Y
                                              ? W.intl.formatToPlainString(W.t["1Ie87p"], { user: $.username })
                                              : W.intl.formatToPlainString(W.t["9l/iTS"], { user: $.username }),
                                          color: "danger",
                                          action: () =>
                                              (0, L.openModalLazy)(async () => {
                                                  let { default: e } = await Promise.all([
                                                      i.e("97660"),
                                                      i.e("40243"),
                                                  ]).then(i.bind(i, 547166));
                                                  return (n) => (0, t.jsx)(e, { ...n, guildId: u.id, user: $ });
                                              }),
                                      })
                                    : null,
                                (0, w.EZ)($, u)
                                    ? (0, t.jsx)(d.Dr, {
                                          id: "ban",
                                          label: Y
                                              ? W.intl.formatToPlainString(W.t.i62APf, { user: $.username })
                                              : W.intl.formatToPlainString(W.t.WnpUBi, { user: $.username }),
                                          color: "danger",
                                          action: () =>
                                              (0, L.openModalLazy)(async () => {
                                                  let { default: e } = await Promise.all([
                                                      i.e("33847"),
                                                      i.e("2504"),
                                                  ]).then(i.bind(i, 333179));
                                                  return (n) => (0, t.jsx)(e, { ...n, guildId: u.id, user: $ });
                                              }),
                                      })
                                    : null,
                            ]),
                ef = (0, B.A)($.id, ee),
                eI = (0, G.A)($, ee),
                eP = (0, h.A)({ id: $.id, label: W.intl.string(W.t["/AXYnE"]) }),
                eX = (0, E.A)($),
                ey = (0, S.A)({
                    commandType: A.kc.USER,
                    commandTargetId: $.id,
                    channel: en,
                    guildId: ee,
                    onHeightUpdate: er,
                }),
                eG = $.isNonUserBot();
            return (0, t.jsxs)(a.W, {
                "data-menu-migrated": !0,
                navId: "user-context",
                onClose: s.Z_,
                "aria-label": W.intl.string(W.t.liqwPJ),
                onSelect: et,
                children: [
                    !eG &&
                        (0, t.jsxs)(t.Fragment, {
                            children: [
                                (0, t.jsx)(d.rX, { children: eX }),
                                (0, t.jsxs)(d.rX, { children: [ea, ed, es, eA, eu, eT, eh, ex, eo] }),
                                (0, t.jsx)(d.rX, { children: eC }),
                                (0, t.jsxs)(d.rX, { children: [eb, ey, eU, ej, eM, ep, eS, eN] }),
                                (0, t.jsx)(d.rX, { children: e_ }),
                                (0, t.jsxs)(d.rX, { children: [ef, eI] }),
                            ],
                        }),
                    (0, t.jsx)(d.rX, { children: eP }),
                ],
            });
        },
        { object: V.ZSU.CONTEXT_MENU },
    ),
    [m.A.CONTEXT_MENU, m.A.THREAD_USER_MENU],
);
