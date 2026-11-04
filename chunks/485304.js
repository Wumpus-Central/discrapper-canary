t.d(n, { default: () => w });
var e = t(477900),
    i = t(582128),
    r = t(855986),
    a = t(165862),
    s = t(477782),
    d = t(442433),
    u = t(847767),
    o = t(358367),
    c = t(212245),
    A = t(793574),
    E = t(688810),
    b = t(50268),
    h = t(346247),
    g = t(504049),
    C = t(696451),
    G = t(977997),
    M = t(291247),
    T = t(239211),
    U = t(399476),
    _ = t(301541),
    x = t(252726),
    m = t(845625),
    N = t(233444),
    j = t(179832),
    p = t(734057),
    O = t(596344),
    S = t(576705),
    f = t(652215),
    y = t(792996),
    I = t(192308),
    P = t(260509),
    k = t(71393),
    D = t(287809),
    L = t(243949),
    X = t(180798);
let w = (0, o.A)(
    (0, u.A)(
        function (l) {
            let n,
                u,
                {
                    user: o,
                    guildId: w,
                    channelId: Z,
                    context: v,
                    onSelect: W,
                    moderationAlertId: q,
                    analyticsLocation: B,
                    analyticsLocations: R,
                    onCloseContextMenu: V,
                    showTransferOwnershipItem: Y,
                } = l,
                { analyticsLocations: F } = (0, E.Ay)(A.A.CONTEXT_MENU),
                J = (0, c.p)(),
                $ = R?.[0] ?? F[0],
                z = (0, g.$9)(w, { location: $, targetUserId: o.id }),
                H = (0, r.bG)([G.A], () => G.A.getUserVoiceChannelId(w, o.id) ?? void 0, [w, o.id]),
                K = i.useCallback(() => {
                    z(g.Nj.COPY_ID);
                }, [z]),
                Q = (0, r.bG)([C.Ay], () => C.Ay.isMember(w, o.id), [w, o.id]),
                ll = (0, L.A)({ userId: o.id, guildId: w, sourceAnalyticsLocations: R }),
                ln = (0, _.A)(o.id, v),
                lt = (0, h.A)({
                    guildId: w,
                    userId: o.id,
                    analyticsLocation: B ?? J.location,
                    analyticsLocations: [$],
                    context: v,
                }),
                le = (0, T.A)({ user: o, guildId: w, location: $, channelId: Z }),
                li = (0, U.A)({ user: o, guildId: w, location: $, channelId: Z }),
                lr = (0, M.A)(o, w, Z ?? H, $),
                la = (function (l, n) {
                    let t = (0, r.bG)(
                            [S.A],
                            () => null != l && S.A.canWithPartialContext(f.xBc.MANAGE_MESSAGES, { channelId: l }),
                            [l],
                        ),
                        i = (0, r.bG)([p.A], () => p.A.getChannel(l), [l]),
                        a = (0, r.bG)([O.A], () => (null != l && null != n ? O.A.getMessage(l, n) : null)),
                        d = (0, N.kZ)(null != a ? a : null);
                    if (null == i || null == a) return null;
                    let u =
                            null != d && d.actions.hasOwnProperty(m.G.SET_COMPLETED)
                                ? m.G.UNSET_COMPLETED
                                : m.G.SET_COMPLETED,
                        o = u === m.G.SET_COMPLETED ? y.intl.string(y.t.VWNyUu) : y.intl.string(y.t.l9GqxI);
                    return t && null != n
                        ? (0, e.jsx)(
                              s.Dr,
                              {
                                  id: "mark-automod-alert-completed",
                                  label: o,
                                  action: () => {
                                      (0, j.E5)(n, i, u);
                                  },
                              },
                              "mark-automod-alert-completed",
                          )
                        : null;
                })(Z, q),
                ls =
                    ((n = (0, r.bG)([D.default], () => D.default.getCurrentUser())),
                    null == (u = (0, r.bG)([k.A], () => k.A.getGuild(w))) ||
                    null == n ||
                    o.id === u.ownerId ||
                    o.bot ||
                    !(0, P.ok)(u, n)
                        ? null
                        : (0, e.jsx)(s.Dr, {
                              id: "transfer-ownership",
                              color: "danger",
                              label: y.intl.string(y.t.Z5s7PM),
                              action: () =>
                                  (0, I.mM)(async () => {
                                      let { default: l } = await Promise.all([
                                          t.e(734027),
                                          t.e(577084),
                                          t.e(564384),
                                      ]).then(t.bind(t, 922269));
                                      return (t) => (0, e.jsx)(l, { ...t, guild: u, fromUser: n, toUser: o });
                                  }),
                          })),
                ld = (0, X.A)(o.id, w, !1, $),
                lu = (0, b.A)({ id: o.id, label: y.intl.string(y.t["/AXYnE"]), onSuccess: K }),
                lo = (0, x.A)(o, w),
                lc = !!o?.isNonUserBot();
            return (0, e.jsxs)(a.W, {
                "data-menu-migrated": !0,
                navId: "user-context",
                onClose: function () {
                    ((0, d.Z_)(), V?.());
                },
                "aria-label": y.intl.string(y.t.liqwPJ),
                onSelect: W,
                children: [
                    !lc &&
                        (0, e.jsxs)(e.Fragment, {
                            children: [
                                (0, e.jsxs)(s.rX, { children: [ll, ln] }),
                                (0, e.jsxs)(s.rX, { children: [lt, li, le] }),
                                Q && (0, e.jsxs)(s.rX, { children: [ld, lr, lo] }),
                                null != q ? la : null,
                                Y && null != ls ? (0, e.jsx)(s.rX, { children: ls }) : null,
                            ],
                        }),
                    (0, e.jsx)(s.rX, { children: lu }),
                ],
            });
        },
        { object: f.ZSU.CONTEXT_MENU },
    ),
    [A.A.CONTEXT_MENU, A.A.GUILD_MODERATION_USER_MENU],
);
