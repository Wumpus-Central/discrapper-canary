l.d(n, { A: () => R }), l(321073);
var t = l(627968),
    i = l(64700),
    r = l(503698),
    s = l.n(r),
    a = l(311907),
    o = l(861672),
    d = l(477782),
    c = l(265872),
    u = l(408278),
    g = l(22231),
    A = l(688810),
    m = l(617061),
    f = l(919395),
    p = l(385612),
    x = l(71393),
    h = l(287809),
    v = l(927578),
    j = l(84540),
    I = l(836602),
    b = l(622543),
    C = l(915614),
    N = l(339984),
    y = l(985018),
    E = l(976726);
function P(e) {
    let { onMenuClose: n, items: l, ...i } = e;
    return (0, t.jsx)(o.W, {
        ...i,
        "data-menu-migrated": !0,
        navId: "banner-edit-context",
        onClose: n,
        onSelect: n,
        "aria-label": y.intl.string(y.t.FzU73A),
        children: (0, t.jsx)(d.rX, { children: l }),
    });
}
function R(e) {
    let { user: n, guildId: l } = e,
        [r, o] = i.useState(!1),
        R = i.useRef(null),
        _ = i.useCallback(() => o(!1), []),
        T = (function (e) {
            let { user: n, guildId: l, onClose: r } = e,
                { newestAnalyticsLocation: s, analyticsLocations: o } = (0, A.Ay)(),
                c = (0, f.N2)({ user: n, guildId: l ?? void 0 }),
                u = v.Ay.canUsePremiumProfileCustomization(n),
                g = u || null == l,
                C = null != l,
                { pendingBanner: E, pendingProfileEffect: P } = (0, a.bG)([I.A], () =>
                    I.A.getPendingChanges(l ?? void 0),
                ),
                R = (0, a.bG)([b.A], () =>
                    null != l ? b.A.getGuildMemberProfile(n.id, l)?.banner : b.A.getUserProfile(n.id)?.banner,
                ),
                _ = (0, a.bG)([h.default], () => h.default.getCurrentUser()?.banner != null),
                T = (0, a.bG)([b.A], () => b.A.getUserProfile(n.id)?.profileEffect != null),
                O = (0, f.Ac)(E, R),
                S = C && _,
                k = C && T,
                D = void 0 === P ? null != c : null != P,
                L = i.useCallback(() => {
                    r(),
                        (0, p.XD)({
                            uploadType: N.HL.BANNER,
                            analyticsSource: s,
                            guildId: l ?? void 0,
                            stackingBehavior: "stack",
                        });
                }, [r, s, l]),
                M = i.useCallback(() => {
                    r(),
                        (0, m.W)({
                            analyticsLocations: o,
                            guild: null != l ? (x.A.getGuild(l) ?? void 0) : void 0,
                            initialSelectedEffect: c,
                            stackingBehavior: "stack",
                        });
                }, [r, o, l, c]),
                G = i.useCallback(() => {
                    r(), (0, p.rM)(null, R, (e) => (0, j.p)({ guildId: l ?? void 0, banner: e }));
                }, [r, l, R]),
                U = i.useCallback(() => {
                    r(), (0, j.p)({ guildId: l ?? void 0, profileEffect: null });
                }, [r, l]);
            return i.useMemo(() => {
                let e = [];
                return (
                    u &&
                        e.push(
                            (0, t.jsx)(
                                d.Dr,
                                { id: "change-banner", label: y.intl.string(y.t.N0bC3P), action: L },
                                "change-banner",
                            ),
                        ),
                    g &&
                        e.push(
                            (0, t.jsx)(
                                d.Dr,
                                { id: "change-effect", label: y.intl.string(y.t["/dRfCf"]), action: M },
                                "change-effect",
                            ),
                        ),
                    u &&
                        O &&
                        e.push(
                            S
                                ? (0, t.jsx)(
                                      d.Dr,
                                      {
                                          id: "reset-banner",
                                          color: "danger",
                                          label: y.intl.string(y.t.jHlJNS),
                                          action: G,
                                      },
                                      "reset-banner",
                                  )
                                : (0, t.jsx)(
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
                        D &&
                        e.push(
                            k
                                ? (0, t.jsx)(
                                      d.Dr,
                                      {
                                          id: "reset-effect",
                                          color: "danger",
                                          label: y.intl.string(y.t["SQy/Po"]),
                                          action: U,
                                      },
                                      "reset-effect",
                                  )
                                : (0, t.jsx)(
                                      d.Dr,
                                      {
                                          id: "remove-effect",
                                          color: "danger",
                                          label: y.intl.string(y.t.uMuafO),
                                          action: U,
                                      },
                                      "remove-effect",
                                  ),
                        ),
                    e
                );
            }, [S, u, g, k, O, D, L, M, G, U]);
        })({ user: n, guildId: l, onClose: _ });
    return 0 === T.length
        ? (0, t.jsx)(C.A, { ...e })
        : (0, t.jsxs)("div", {
              className: s()(E.kL, { [E.MO]: r }),
              onMouseDown: (e) => {
                  R.current?.contains(e.target) || o(!0);
              },
              children: [
                  (0, t.jsx)(C.A, { ...e, className: E.Pr }),
                  (0, t.jsx)(c.Y, {
                      targetElementRef: R,
                      shouldShow: r,
                      animation: c.Y.Animation.NONE,
                      position: "right",
                      align: "top",
                      onRequestClose: _,
                      renderPopout: (e) => (0, t.jsx)(P, { ...e, items: T, onMenuClose: _ }),
                      children: (e) =>
                          (0, t.jsx)("div", {
                              ref: R,
                              className: E.r9,
                              children: (0, t.jsx)(u.K, {
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
