n.d(t, { Z: () => _ });
var r = n(951288),
    i = n(647438),
    a = n(120356),
    l = n.n(a),
    o = n(296009),
    s = n(481060),
    c = n(812206),
    u = n(823379),
    d = n(804919),
    f = n(931847),
    g = n(836197),
    p = n(86419),
    m = n(50130),
    b = n(872269),
    h = n(248554),
    v = n(70399),
    y = n(228168),
    j = n(388032),
    O = n(73686);
let x = {
    [o.l.FAVORITE_GAMES]: {
        placeholder: () => ({
            variant: "details",
            applicationId: d.L.LEAGUE_OF_LEGENDS,
        }),
        getAriaLabel: () => j.intl.string(j.t.xJtdIm),
    },
    [o.l.CURRENT_GAMES]: {
        placeholder: () => ({
            variant: "details",
            applicationId: d.L.VALORANT,
        }),
        getAriaLabel: () => j.intl.string(j.t.Ae8tRi),
    },
    [o.l.PLAYED_GAMES]: {
        placeholder: () => ({
            variant: "grid",
            applicationIds: [d.L.PEAK, d.L.APEX_LEGENDS, d.L.REPO, d.L.BALDURS_GATE_3],
        }),
        getAriaLabel: () => j.intl.string(j.t["pBR+4j"]),
    },
    [o.l.WANT_TO_PLAY_GAMES]: {
        placeholder: () => ({
            variant: "grid",
            applicationIds: [d.L.MARVEL_RIVALS, d.L.WORLD_OF_WARCRAFT, d.L.BATTLEFIELD_6, d.L.RUST],
        }),
        getAriaLabel: () => j.intl.string(j.t.NtoBi1),
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
            return j.intl.formatToPlainString(j.t.KfGahB, {
                applicationName:
                    null != (n = null == (t = c.Z.getApplication(e.applicationId)) ? void 0 : t.name) ? n : "",
            });
        },
    },
};
function _(e) {
    let t,
        { widgetType: n, onAddWidget: a, size: c = "default", loading: d = !1, trackUserProfileEditAction: j } = e,
        { placeholder: _, getAriaLabel: I, icon: P } = x[n],
        w = "small" === c,
        { config: S } = (0, m.G)(),
        E = i.useMemo(() => {
            switch (n) {
                case o.l.CURRENT_GAMES:
                case o.l.FAVORITE_GAMES:
                case o.l.PLAYED_GAMES:
                case o.l.WANT_TO_PLAY_GAMES:
                    return new g.zy({
                        type: n,
                        games: [],
                    });
                case o.l.APPLICATION:
                    let e = null == S ? void 0 : S.application_id;
                    if (null == e) return null;
                    return new f.q({
                        type: n,
                        applicationId: e,
                    });
            }
        }, [n, null == S ? void 0 : S.application_id]),
        T = i.useCallback(() => {
            d ||
                null == E ||
                ((0, p.qH)(n, E),
                j({
                    action: "WIDGET_ADDED",
                    widgetEdited: n,
                }),
                (0, b.L$)(y.qb.WIDGET_ADDED),
                null == a || a());
        }, [d, n, E, j, a]);
    return (null != E && null != P && (t = P(E)), null == E)
        ? null
        : (0, r.jsxs)("div", {
              className: O.addButtonContainer,
              children: [
                  (0, r.jsxs)(s.P3F, {
                      className: l()(O.addButtonContent, w && O.sizeSmall, d && O.loading),
                      onClick: T,
                      "aria-label": I(E),
                      "aria-busy": d,
                      children: [
                          (() => {
                              if (null == E) return null;
                              let e = _(E);
                              switch (e.variant) {
                                  case "details":
                                      return (0, r.jsx)(h.i, {
                                          className: O.placeholderPadding,
                                          applicationId: e.applicationId,
                                          size: c,
                                      });
                                  case "grid":
                                      return (0, r.jsx)(h.c, {
                                          className: O.placeholderPadding,
                                          applicationIds: e.applicationIds,
                                          size: c,
                                      });
                                  case "application-widget":
                                      return (0, r.jsx)(v.Z, {
                                          applicationId: e.applicationId,
                                          size: c,
                                      });
                                  default:
                                      return (0, u.vE)(e);
                              }
                          })(),
                          (0, r.jsxs)("div", {
                              className: O.overlay,
                              children: [
                                  (0, r.jsx)(s.oFk, {
                                      size: "md",
                                      color: "currentColor",
                                      className: O.addButton,
                                  }),
                                  (0, r.jsxs)("div", {
                                      className: O.title,
                                      children: [
                                          (0, r.jsx)(s.Text, {
                                              variant: "text-md/medium",
                                              color: "header-primary",
                                              children: (0, p.mR)(E),
                                          }),
                                          null != t
                                              ? (0, r.jsx)("img", {
                                                    src: t,
                                                    alt: "",
                                                    width: 16,
                                                    height: 16,
                                                    className: O.icon,
                                                })
                                              : null,
                                      ],
                                  }),
                              ],
                          }),
                      ],
                  }),
                  (() => {
                      if (null == E) return null;
                      let e = _(E);
                      return "application-widget" === e.variant
                          ? (0, r.jsx)(v.T, {
                                applicationId: e.applicationId,
                                size: c,
                            })
                          : null;
                  })(),
              ],
          });
}
