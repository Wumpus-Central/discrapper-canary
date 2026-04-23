l.d(n, { default: () => J });
var t = l(627968),
    i = l(64700),
    r = l(17928),
    a = l(550079),
    d = l(477782),
    s = l(442433),
    o = l(847767),
    u = l(358367),
    c = l(155718),
    A = l(468389),
    g = l(793574),
    b = l(688810),
    m = l(823104),
    x = l(50268),
    f = l(346247),
    h = l(844065),
    E = l(164891),
    C = l(734057),
    p = l(309010),
    _ = l(803664),
    N = l(29293),
    T = l(509302),
    v = l(497600),
    j = l(646911),
    I = l(239211),
    y = l(707378),
    G = l(399476),
    M = l(889460),
    O = l(448290),
    U = l(301541),
    S = l(252726),
    P = l(460597),
    R = l(313998),
    D = l(192308),
    k = l(80682),
    L = l(660273),
    B = l(351001),
    V = l(867455),
    H = l(406704),
    W = l(71393),
    w = l(576705),
    K = l(287809),
    F = l(985018),
    X = l(243949),
    z = l(180798),
    q = l(77544),
    Z = l(652215);
let J = (0, u.A)(
    (0, o.A)(
        function (e) {
            let n,
                o,
                u,
                J,
                Q,
                Y,
                { user: $, guildId: ee, channel: en, context: el, onSelect: et, onHeightUpdate: ei } = e,
                er = en.id,
                ea = (0, X.A)({ userId: $.id, guildId: ee, channelId: er }),
                ed = (0, O.A)($, ee, el),
                es = (0, U.A)($.id, el),
                eo = (0, q.A)($.id),
                eu = (0, y.A)({ user: $, context: el }),
                ec = (0, m.D)({ userId: $.id }),
                eA = (0, r.bG)([p.A, C.A], () => {
                    let e = p.A.getVoiceChannelId();
                    return C.A.getChannel(e);
                }),
                { enabled: eg } = E.A.useExperiment({ guildId: eA?.guild_id, location: "ThreadUserContextMenu" }),
                eb = eg ? eA?.id : null,
                em = (0, R.A)($, eb),
                ex = (0, v.A)({ user: $, guildId: ee, channelId: er, context: el }),
                ef = (0, N.A)({ user: $ }),
                { analyticsLocations: eh } = (0, b.Ay)(g.A.THREAD_USER_MENU),
                eE = (0, f.A)({
                    guildId: ee,
                    userId: $.id,
                    analyticsLocation: {
                        page: Z.liQ.GUILD_CHANNEL,
                        section: Z.JJy.CHAT_USERNAME,
                        object: Z.ZSU.CONTEXT_MENU_ITEM,
                    },
                    analyticsLocations: eh,
                    context: el,
                }),
                eC = (0, M.A)({ user: $, guildId: ee }),
                ep = (0, A.A)(null, $),
                e_ = (0, _.A)({ user: $ }),
                eN = (0, T.A)({ user: $ }),
                eT = (0, P.A)({ user: $ }),
                ev = (0, I.A)({ user: $, guildId: ee, channelId: er, location: "ThreadUserContextMenu" }),
                ej = (0, G.A)({ user: $, guildId: ee, channelId: er, location: "ThreadUserContextMenu" }),
                eI =
                    ((n = i.useMemo(() => ({ [ee]: [$.id] }), [ee, $.id])),
                    (0, k.Eq)(n, "useThreadAdminActionItems"),
                    (0, r.bG)([w.A], () => w.A.getGuildVersion(ee), [ee]),
                    (o = (0, r.bG)([C.A], () => C.A.getChannel(er))),
                    (u = (0, r.bG)([W.A], () => W.A.getGuild(ee), [ee])),
                    (J = (0, r.bG)([K.default], () => K.default.getCurrentUser())),
                    (Q = (0, L.A)(o, "Context Menu")),
                    (Y = (0, H.qi)(o?.id)),
                    J?.id === $.id
                        ? [Q]
                        : null == u || null == o || null == J
                          ? []
                          : [
                                Y
                                    ? (0, t.jsx)(d.Dr, {
                                          id: "remove",
                                          label: o.isForumPost()
                                              ? F.intl.formatToPlainString(F.t.v2KNNx, { user: $.username })
                                              : F.intl.formatToPlainString(F.t["27xWaT"], { user: $.username }),
                                          color: "danger",
                                          action: () => V.A.removeMember(o.id, $.id, "Context Menu"),
                                      })
                                    : null,
                                (0, B.L7)($, u)
                                    ? (0, t.jsx)(d.Dr, {
                                          id: "kick",
                                          label: Y
                                              ? F.intl.formatToPlainString(F.t["1Ie87p"], { user: $.username })
                                              : F.intl.formatToPlainString(F.t["9l/iTS"], { user: $.username }),
                                          color: "danger",
                                          action: () =>
                                              (0, D.openModalLazy)(async () => {
                                                  let { default: e } = await l.e("17862").then(l.bind(l, 547166));
                                                  return (n) => (0, t.jsx)(e, { ...n, guildId: u.id, user: $ });
                                              }),
                                      })
                                    : null,
                                (0, B.EZ)($, u)
                                    ? (0, t.jsx)(d.Dr, {
                                          id: "ban",
                                          label: Y
                                              ? F.intl.formatToPlainString(F.t.i62APf, { user: $.username })
                                              : F.intl.formatToPlainString(F.t.WnpUBi, { user: $.username }),
                                          color: "danger",
                                          action: () =>
                                              (0, D.openModalLazy)(async () => {
                                                  let { default: e } = await l.e("57742").then(l.bind(l, 333179));
                                                  return (n) => (0, t.jsx)(e, { ...n, guildId: u.id, user: $ });
                                              }),
                                      })
                                    : null,
                            ]),
                ey = (0, z.A)($.id, ee),
                eG = (0, S.A)($, ee),
                eM = (0, x.A)({ id: $.id, label: F.intl.string(F.t["/AXYnE"]) }),
                eO = (0, h.A)($),
                eU = (0, j.A)({
                    commandType: c.kc.USER,
                    commandTargetId: $.id,
                    channel: en,
                    guildId: ee,
                    onHeightUpdate: ei,
                }),
                eS = $.isNonUserBot();
            return (0, t.jsxs)(a.W, {
                "data-menu-migrated": !0,
                navId: "user-context",
                onClose: s.Z_,
                "aria-label": F.intl.string(F.t.liqwPJ),
                onSelect: et,
                children: [
                    !eS &&
                        (0, t.jsxs)(t.Fragment, {
                            children: [
                                (0, t.jsx)(d.rX, { children: eO }),
                                (0, t.jsxs)(d.rX, { children: [ea, ed, es, ec, eu, em, ex, ef, eo] }),
                                (0, t.jsx)(d.rX, { children: ep }),
                                (0, t.jsxs)(d.rX, { children: [eE, eU, eC, e_, eN, eT, ej, ev] }),
                                (0, t.jsx)(d.rX, { children: eI }),
                                (0, t.jsxs)(d.rX, { children: [ey, eG] }),
                            ],
                        }),
                    (0, t.jsx)(d.rX, { children: eM }),
                ],
            });
        },
        { object: Z.ZSU.CONTEXT_MENU },
    ),
    [g.A.CONTEXT_MENU, g.A.THREAD_USER_MENU],
);
