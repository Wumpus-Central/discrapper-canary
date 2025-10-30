n.d(t, { Z: () => v });
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    s = n(296009),
    o = n(481060),
    c = n(812206),
    u = n(823379),
    d = n(804919),
    p = n(931847),
    f = n(836197),
    m = n(86419),
    h = n(50130),
    g = n(872269),
    _ = n(248554),
    b = n(70399),
    E = n(228168),
    O = n(388032),
    I = n(73686);
let y = {
    [s.l.FAVORITE_GAMES]: {
        placeholder: () => ({
            variant: "details",
            applicationId: d.L.LEAGUE_OF_LEGENDS,
        }),
        getAriaLabel: () => O.intl.string(O.t.xJtdIm),
    },
    [s.l.CURRENT_GAMES]: {
        placeholder: () => ({
            variant: "details",
            applicationId: d.L.VALORANT,
        }),
        getAriaLabel: () => O.intl.string(O.t.Ae8tRi),
    },
    [s.l.PLAYED_GAMES]: {
        placeholder: () => ({
            variant: "grid",
            applicationIds: [d.L.PEAK, d.L.APEX_LEGENDS, d.L.REPO, d.L.BALDURS_GATE_3],
        }),
        getAriaLabel: () => O.intl.string(O.t["pBR+4j"]),
    },
    [s.l.WANT_TO_PLAY_GAMES]: {
        placeholder: () => ({
            variant: "grid",
            applicationIds: [d.L.MARVEL_RIVALS, d.L.WORLD_OF_WARCRAFT, d.L.BATTLEFIELD_6, d.L.RUST],
        }),
        getAriaLabel: () => O.intl.string(O.t.NtoBi1),
    },
    [s.l.APPLICATION]: {
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
            return O.intl.formatToPlainString(O.t.KfGahB, {
                applicationName:
                    null != (n = null == (t = c.Z.getApplication(e.applicationId)) ? void 0 : t.name) ? n : "",
            });
        },
    },
};
function v(e) {
    let t,
        { widgetType: n, onAddWidget: l, size: c = "default", loading: d = !1, trackUserProfileEditAction: O } = e,
        { placeholder: v, getAriaLabel: C, icon: S } = y[n],
        T = "small" === c,
        { config: N } = (0, h.G)(),
        j = i.useMemo(() => {
            switch (n) {
                case s.l.CURRENT_GAMES:
                case s.l.FAVORITE_GAMES:
                case s.l.PLAYED_GAMES:
                case s.l.WANT_TO_PLAY_GAMES:
                    return new f.zy({
                        type: n,
                        games: [],
                    });
                case s.l.APPLICATION:
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
                ((0, m.qH)(n, j),
                O({
                    action: "WIDGET_ADDED",
                    widgetEdited: n,
                }),
                (0, g.L$)(E.qb.WIDGET_ADDED),
                null == l || l());
        }, [d, n, j, O, l]);
    return (null != j && null != S && (t = S(j)), null == j)
        ? null
        : (0, r.jsxs)("div", {
              className: I.addButtonContainer,
              children: [
                  (0, r.jsxs)(o.P3F, {
                      className: a()(I.addButtonContent, T && I.sizeSmall, d && I.loading),
                      onClick: P,
                      "aria-label": C(j),
                      "aria-busy": d,
                      children: [
                          (() => {
                              if (null == j) return null;
                              let e = v(j);
                              switch (e.variant) {
                                  case "details":
                                      return (0, r.jsx)(_.i, {
                                          className: I.placeholderPadding,
                                          applicationId: e.applicationId,
                                          size: c,
                                      });
                                  case "grid":
                                      return (0, r.jsx)(_.c, {
                                          className: I.placeholderPadding,
                                          applicationIds: e.applicationIds,
                                          size: c,
                                      });
                                  case "application-widget":
                                      return (0, r.jsx)(b.Z, {
                                          applicationId: e.applicationId,
                                          size: c,
                                      });
                                  default:
                                      return (0, u.vE)(e);
                              }
                          })(),
                          (0, r.jsxs)("div", {
                              className: I.overlay,
                              children: [
                                  (0, r.jsx)(o.oFk, {
                                      size: "md",
                                      color: "currentColor",
                                      className: I.addButton,
                                  }),
                                  (0, r.jsxs)("div", {
                                      className: I.title,
                                      children: [
                                          (0, r.jsx)(o.Text, {
                                              variant: "text-md/medium",
                                              color: "header-primary",
                                              children: (0, m.mR)(j),
                                          }),
                                          null != t
                                              ? (0, r.jsx)("img", {
                                                    src: t,
                                                    alt: "",
                                                    width: 16,
                                                    height: 16,
                                                    className: I.icon,
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
                      let e = v(j);
                      return "application-widget" === e.variant
                          ? (0, r.jsx)(b.T, {
                                applicationId: e.applicationId,
                                size: c,
                            })
                          : null;
                  })(),
              ],
          });
}
