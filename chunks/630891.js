i.d(t, { A: () => S });
var e = i(477900),
    o = i(582128),
    l = i(855986),
    r = i(265872),
    a = i(165862),
    c = i(477782),
    s = i(365199),
    u = i(793574),
    p = i(688810),
    d = i(991690),
    I = i(173936),
    g = i(735991),
    A = i(287809),
    f = i(957565),
    P = i(342384),
    b = i(878014),
    x = i(189213),
    O = i(192308),
    _ = i(331322),
    h = i(928658),
    y = i(632738),
    R = i(627363),
    k = i(587895),
    v = i(792996);
let C = "useReportAppItemModal";
var E = i(50268),
    N = i(239211),
    U = i(399476),
    j = i(183555),
    m = i(851767),
    L = i(256847),
    B = i(993401);
function S(n) {
    let { user: t, guildId: i, viewProfileItem: S } = n,
        w = o.useRef(null),
        { trackUserProfileAction: G } = (0, j.NJ)(),
        { analyticsLocations: M, newestAnalyticsLocation: W } = (0, p.Ay)(u.A.USER_PROFILE_OVERFLOW_MENU),
        K = (0, l.bG)([m.A], () => m.A.getUserProfile(t.id)),
        V = K?.application,
        Y = (0, N.A)({
            user: t,
            guildId: i,
            location: W,
            onBlock: () => G({ action: "BLOCK", analyticsLocations: M }),
            onUnblock: () => G({ action: "UNBLOCK", analyticsLocations: M }),
        }),
        D = (0, U.A)({
            user: t,
            guildId: i,
            location: W,
            onIgnore: () => G({ action: "IGNORE", analyticsLocations: M }),
            onUnignore: () => G({ action: "UNIGNORE", analyticsLocations: M }),
        }),
        F = (function (n) {
            let { applicationId: t, ...i } = n;
            return null == t
                ? null
                : (0, e.jsx)(c.Dr, {
                      id: "report-app",
                      color: i.color,
                      label: v.intl.string(v.t.NgA5vp),
                      action: () =>
                          (function (n, t) {
                              function i() {
                                  ((0, O.Oo)(C), t.onSubmit?.());
                              }
                              (0, O.mM)(
                                  async () => {
                                      await R.Ay.fetchApplication(n);
                                      let o = k.A.getApplication(n);
                                      return (n) =>
                                          (0, e.jsx)(x.a, {
                                              title: v.intl.string(v.t.Bd10bR),
                                              actions: [],
                                              ...n,
                                              children: (0, e.jsxs)(_.B, {
                                                  children: [
                                                      (0, e.jsx)(y.PQ, {
                                                          variant: "clickable",
                                                          title: v.intl.string(v.t.eyEkG1),
                                                          description: v.intl.string(v.t.ptItsj),
                                                          onButtonPress: () =>
                                                              (0, h.NW)(t.user, t.guildId, i, t.appContext),
                                                      }),
                                                      (0, e.jsx)(y.PQ, {
                                                          variant: "clickable",
                                                          title: v.intl.string(v.t.atP0yX),
                                                          description: v.intl.string(v.t.UGg603),
                                                          onButtonPress: () => {
                                                              (0, h.r3)({
                                                                  application: o,
                                                                  entrypoint: t.entrypoint ?? "user_profile",
                                                                  contextualGuildId: t.guildId,
                                                                  contextualChannelId: t.channelId,
                                                                  onSubmit: i,
                                                                  appContext: t.appContext,
                                                              });
                                                          },
                                                      }),
                                                  ],
                                              }),
                                          });
                                  },
                                  { modalKey: C },
                              );
                          })(t, i),
                  });
        })({
            applicationId: V?.id,
            user: t,
            guildId: i,
            onSubmit: () => G({ action: "REPORT", analyticsLocations: M }),
            color: "danger",
        }),
        T = (0, E.A)({
            id: V?.id,
            label: v.intl.string(v.t["+NP/b2"]),
            onSuccess: () => G({ action: "COPY_APP_ID", analyticsLocations: M }),
        }),
        X = (function (n) {
            let { application: t, label: i, onSuccess: o, showIconFirst: l } = n;
            if (__OVERLAY__ || !f.p5 || null == t) return null;
            let r = A.default.getCurrentUser(),
                a = (0, g.EF)(t),
                s = `copy-app-link-${t.id}`;
            return (0, e.jsx)(
                c.Dr,
                {
                    id: s,
                    label: i,
                    action: function () {
                        if (null == t) return;
                        let n = (0, b.W)(t, d.U.MAIN)
                            ? (0, P.W)({ applicationId: t.id, referrerId: r?.id })
                            : (0, P.V)({ id: t.id, ...a });
                        null != n && (0, f.C)(n, o);
                    },
                    icon: l ? void 0 : I.LinkIcon,
                    iconLeft: l ? I.LinkIcon : void 0,
                    leadingAccessory: { type: "icon", icon: I.LinkIcon },
                },
                s,
            );
        })({
            application: V,
            label: v.intl.string(v.t.WqhZss),
            onSuccess: () => G({ action: "COPY_APP_LINK", analyticsLocations: M }),
        }),
        z = [
            [S, (0, L.A)({ user: t, location: "BotUserProfileOverflowMenuBannerButton" })],
            [D, Y, F],
            [X, T],
        ];
    return z.every((n) => n.every((n) => null == n))
        ? null
        : (0, e.jsx)(r.Y, {
              targetElementRef: w,
              renderPopout: (n) => {
                  let { closePopout: t } = n;
                  return (0, e.jsx)(a.W, {
                      "data-menu-migrated": !0,
                      navId: "user-bot-profile-overflow-menu",
                      onSelect: void 0,
                      onClose: t,
                      "aria-label": v.intl.string(v.t.AXIHpV),
                      children: z.map((n, t) => (0, e.jsx)(c.rX, { children: n.map((n) => n) }, t)),
                  });
              },
              children: (n) =>
                  (0, e.jsx)(B.br, {
                      buttonRef: w,
                      action: "PRESS_OPTIONS",
                      icon: s.MoreHorizontalIcon,
                      tooltipText: v.intl.string(v.t["UKOtz+"]),
                      ...n,
                  }),
          });
}
