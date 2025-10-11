n.d(t, { Z: () => I });
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    o = n(296009),
    s = n(481060),
    c = n(812206),
    u = n(823379),
    d = n(804919),
    p = n(931847),
    f = n(836197),
    h = n(86419),
    g = n(50130),
    m = n(872269),
    b = n(248554),
    _ = n(70399),
    O = n(228168),
    E = n(388032),
    v = n(229870);
let y = {
    [o.l.FAVORITE_GAMES]: {
        placeholder: () => ({
            variant: "details",
            applicationId: d.L.LEAGUE_OF_LEGENDS,
        }),
        getAriaLabel: () => E.intl.string(E.t.xJtdIi),
    },
    [o.l.CURRENT_GAMES]: {
        placeholder: () => ({
            variant: "details",
            applicationId: d.L.VALORANT,
        }),
        getAriaLabel: () => E.intl.string(E.t.Ae8tRk),
    },
    [o.l.PLAYED_GAMES]: {
        placeholder: () => ({
            variant: "grid",
            applicationIds: [d.L.PEAK, d.L.APEX_LEGENDS, d.L.REPO, d.L.BALDURS_GATE_3],
        }),
        getAriaLabel: () => E.intl.string(E.t["pBR+4u"]),
    },
    [o.l.WANT_TO_PLAY_GAMES]: {
        placeholder: () => ({
            variant: "grid",
            applicationIds: [d.L.MARVEL_RIVALS, d.L.WORLD_OF_WARCRAFT, d.L.BATTLEFIELD_6, d.L.RUST],
        }),
        getAriaLabel: () => E.intl.string(E.t.NtoBi4),
    },
    [o.l.APPLICATION]: {
        placeholder: (e) => ({
            variant: "application-widget",
            applicationId: e.applicationId,
        }),
        icon: (e) => {
            var t;
            return null == (t = c.Z.getApplication(e.applicationId)) ? void 0 : t.getIconURL(16);
        },
        getAriaLabel: (e) => {
            var t, n;
            return E.intl.formatToPlainString(E.t.KfGahI, {
                applicationName:
                    null != (n = null == (t = c.Z.getApplication(e.applicationId)) ? void 0 : t.name) ? n : "",
            });
        },
    },
};
function I(e) {
    let t,
        { widgetType: n, onAddWidget: l, size: c = "default", loading: d = !1, trackUserProfileEditAction: E } = e,
        { placeholder: I, getAriaLabel: C, icon: S } = y[n],
        T = "small" === c,
        { config: N } = (0, g.G)(),
        j = i.useMemo(() => {
            switch (n) {
                case o.l.CURRENT_GAMES:
                case o.l.FAVORITE_GAMES:
                case o.l.PLAYED_GAMES:
                case o.l.WANT_TO_PLAY_GAMES:
                    return new f.zy({
                        type: n,
                        games: [],
                    });
                case o.l.APPLICATION:
                    let e = null == N ? void 0 : N.application_id;
                    if (null == e) return null;
                    return new p.q({
                        type: n,
                        applicationId: e,
                    });
            }
        }, [n, null == N ? void 0 : N.application_id]),
        P = i.useCallback(() => {
            d ||
                null == j ||
                ((0, h.qH)(n, j),
                E({
                    action: "WIDGET_ADDED",
                    widgetEdited: n,
                }),
                (0, m.L$)(O.qb.WIDGET_ADDED),
                null == l || l());
        }, [d, n, j, E, l]);
    return (null != j && null != S && (t = S(j)), null == j)
        ? null
        : (0, r.jsxs)("div", {
              className: v.addButtonContainer,
              children: [
                  (0, r.jsxs)(s.P3F, {
                      className: a()(v.addButtonContent, T && v.sizeSmall, d && v.loading),
                      onClick: P,
                      "aria-label": C(j),
                      "aria-busy": d,
                      children: [
                          (() => {
                              if (null == j) return null;
                              let e = I(j);
                              switch (e.variant) {
                                  case "details":
                                      return (0, r.jsx)(b.i, {
                                          className: v.placeholderPadding,
                                          applicationId: e.applicationId,
                                          size: c,
                                      });
                                  case "grid":
                                      return (0, r.jsx)(b.c, {
                                          className: v.placeholderPadding,
                                          applicationIds: e.applicationIds,
                                          size: c,
                                      });
                                  case "application-widget":
                                      return (0, r.jsx)(_.Z, {
                                          applicationId: e.applicationId,
                                          size: c,
                                      });
                                  default:
                                      return (0, u.vE)(e);
                              }
                          })(),
                          (0, r.jsxs)("div", {
                              className: v.overlay,
                              children: [
                                  (0, r.jsx)(s.oFk, {
                                      size: "md",
                                      color: "currentColor",
                                      className: v.addButton,
                                  }),
                                  (0, r.jsxs)("div", {
                                      className: v.title,
                                      children: [
                                          (0, r.jsx)(s.Text, {
                                              variant: "text-md/medium",
                                              color: "header-primary",
                                              children: (0, h.mR)(j),
                                          }),
                                          null != t
                                              ? (0, r.jsx)("img", {
                                                    src: t,
                                                    alt: "",
                                                    width: 16,
                                                    height: 16,
                                                    className: v.icon,
                                                })
                                              : null,
                                      ],
                                  }),
                              ],
                          }),
                      ],
                  }),
                  (() => {
                      if (null == j) return null;
                      let e = I(j);
                      return "application-widget" === e.variant
                          ? (0, r.jsx)(_.T, {
                                applicationId: e.applicationId,
                                size: c,
                            })
                          : null;
                  })(),
              ],
          });
}
