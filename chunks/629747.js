t.d(n, { A: () => R }), t(321073);
var l = t(627968),
    i = t(64700),
    r = t(503698),
    a = t.n(r),
    s = t(311907),
    o = t(861672),
    d = t(477782),
    u = t(265872),
    c = t(408278),
    g = t(22231),
    A = t(688810),
    m = t(617061),
    f = t(919395),
    p = t(385612),
    x = t(71393),
    h = t(287809),
    v = t(927578),
    j = t(84540),
    I = t(836602),
    b = t(622543),
    C = t(915614),
    N = t(339984),
    y = t(985018),
    E = t(976726);
function P(e) {
    let { onMenuClose: n, items: t, ...i } = e;
    return (0, l.jsx)(o.W, {
        ...i,
        "data-menu-migrated": !0,
        navId: "banner-edit-context",
        onClose: n,
        onSelect: n,
        "aria-label": y.intl.string(y.t.FzU73A),
        children: (0, l.jsx)(d.rX, { children: t }),
    });
}
function R(e) {
    let { user: n, guildId: t } = e,
        [r, o] = i.useState(!1),
        R = i.useRef(null),
        O = i.useCallback(() => o(!1), []),
        T = (function (e) {
            let { user: n, guildId: t, onClose: r } = e,
                { newestAnalyticsLocation: a, analyticsLocations: o } = (0, A.Ay)(),
                u = (0, f.N2)({ user: n, guildId: t ?? void 0 }),
                c = v.Ay.canUsePremiumProfileCustomization(n),
                g = c || null == t,
                C = null != t,
                { pendingBanner: E, pendingProfileEffect: P } = (0, s.bG)([I.A], () =>
                    I.A.getPendingChanges(t ?? void 0),
                ),
                R = (0, s.bG)([b.A], () =>
                    null != t ? b.A.getGuildMemberProfile(n.id, t)?.banner : b.A.getUserProfile(n.id)?.banner,
                ),
                O = (0, s.bG)([h.default], () => h.default.getCurrentUser()?.banner != null),
                T = (0, s.bG)([b.A], () => b.A.getUserProfile(n.id)?.profileEffect != null),
                _ = (0, f.Ac)(E, R),
                S = C && O,
                D = C && T,
                k = void 0 === P ? null != u : null != P,
                L = i.useCallback(() => {
                    r(),
                        (0, p.XD)({
                            uploadType: N.HL.BANNER,
                            analyticsSource: a,
                            guildId: t ?? void 0,
                            stackingBehavior: "stack",
                        });
                }, [r, a, t]),
                M = i.useCallback(() => {
                    r(),
                        (0, m.W)({
                            analyticsLocations: o,
                            guild: null != t ? (x.A.getGuild(t) ?? void 0) : void 0,
                            initialSelectedEffect: u,
                            stackingBehavior: "stack",
                        });
                }, [r, o, t, u]),
                G = i.useCallback(() => {
                    r(), (0, p.rM)(null, R, (e) => (0, j.p)({ guildId: t ?? void 0, banner: e }));
                }, [r, t, R]),
                w = i.useCallback(() => {
                    r(), (0, j.p)({ guildId: t ?? void 0, profileEffect: null });
                }, [r, t]);
            return i.useMemo(() => {
                let e = [];
                return (
                    c &&
                        e.push(
                            (0, l.jsx)(
                                d.Dr,
                                { id: "change-banner", label: y.intl.string(y.t.N0bC3P), action: L },
                                "change-banner",
                            ),
                        ),
                    g &&
                        e.push(
                            (0, l.jsx)(
                                d.Dr,
                                { id: "change-effect", label: y.intl.string(y.t["/dRfCf"]), action: M },
                                "change-effect",
                            ),
                        ),
                    c &&
                        _ &&
                        e.push(
                            S
                                ? (0, l.jsx)(
                                      d.Dr,
                                      {
                                          id: "reset-banner",
                                          color: "danger",
                                          label: y.intl.string(y.t.jHlJNS),
                                          action: G,
                                      },
                                      "reset-banner",
                                  )
                                : (0, l.jsx)(
                                      d.Dr,
                                      {
                                          id: "remove-banner",
                                          color: "danger",
                                          label: y.intl.string(y.t.tT9n7D),
                                          action: G,
                                      },
                                      "remove-banner",
                                  ),
                        ),
                    g &&
                        k &&
                        e.push(
                            D
                                ? (0, l.jsx)(
                                      d.Dr,
                                      {
                                          id: "reset-effect",
                                          color: "danger",
                                          label: y.intl.string(y.t["SQy/Po"]),
                                          action: w,
                                      },
                                      "reset-effect",
                                  )
                                : (0, l.jsx)(
                                      d.Dr,
                                      {
                                          id: "remove-effect",
                                          color: "danger",
                                          label: y.intl.string(y.t.uMuafO),
                                          action: w,
                                      },
                                      "remove-effect",
                                  ),
                        ),
                    e
                );
            }, [S, c, g, D, _, k, L, M, G, w]);
        })({ user: n, guildId: t, onClose: O });
    return 0 === T.length
        ? (0, l.jsx)(C.A, { ...e })
        : (0, l.jsxs)("div", {
              className: a()(E.kL, { [E.MO]: r }),
              onMouseDown: (e) => {
                  R.current?.contains(e.target) || o(!0);
              },
              children: [
                  (0, l.jsx)(C.A, { ...e, className: E.Pr }),
                  (0, l.jsx)(u.Y, {
                      targetElementRef: R,
                      shouldShow: r,
                      animation: u.Y.Animation.NONE,
                      position: "right",
                      align: "top",
                      onRequestClose: O,
                      renderPopout: (e) => (0, l.jsx)(P, { ...e, items: T, onMenuClose: O }),
                      children: (e) =>
                          (0, l.jsx)("div", {
                              ref: R,
                              className: E.r9,
                              children: (0, l.jsx)(c.K, {
                                  ...e,
                                  variant: "overlay-secondary",
                                  size: "sm",
                                  icon: g.R,
                                  "aria-label": y.intl.string(y.t.FzU73A),
                                  onClick: (e) => {
                                      e.stopPropagation(), o((e) => !e);
                                  },
                              }),
                          }),
                  }),
              ],
          });
}
