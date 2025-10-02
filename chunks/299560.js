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
    p = n(350327),
    f = n(931847),
    h = n(836197),
    g = n(86419),
    m = n(872269),
    b = n(248554),
    _ = n(70399),
    O = n(228168),
    E = n(388032),
    v = n(73686);
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
            applicationIds: [d.L.MARVEL_RIVALS, d.L.WORLD_OF_WARCRAFT, d.L.RUST, d.L.DELTA_FORCE],
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
    var t;
    let n,
        { widgetType: l, onAddWidget: c, size: d = "default", loading: E = !1, trackUserProfileEditAction: I } = e,
        { placeholder: C, getAriaLabel: S, icon: T } = y[l],
        N = "small" === d,
        j = null == (t = (0, p.uV)().data) ? void 0 : t.map((e) => e.application_id),
        P = i.useMemo(() => {
            switch (l) {
                case o.l.CURRENT_GAMES:
                case o.l.FAVORITE_GAMES:
                case o.l.PLAYED_GAMES:
                case o.l.WANT_TO_PLAY_GAMES:
                    return new h.zy({
                        type: l,
                        games: [],
                    });
                case o.l.APPLICATION:
                    let e = null == j ? void 0 : j[0];
                    if (null == e) return null;
                    return new f.q({
                        type: l,
                        applicationId: e,
                    });
            }
        }, [l, j]),
        x = i.useCallback(() => {
            E ||
                null == P ||
                ((0, g.qH)(l, P),
                I({
                    action: "WIDGET_ADDED",
                    widgetEdited: l,
                }),
                (0, m.L$)(O.qb.WIDGET_ADDED),
                null == c || c());
        }, [E, l, P, I, c]);
    return (null != P && null != T && (n = T(P)), null == P)
        ? null
        : (0, r.jsxs)("div", {
              className: v.addButtonContainer,
              children: [
                  (0, r.jsxs)(s.P3F, {
                      className: a()(v.addButtonContent, N && v.sizeSmall, E && v.loading),
                      onClick: x,
                      "aria-label": S(P),
                      "aria-busy": E,
                      children: [
                          (() => {
                              if (null == P) return null;
                              let e = C(P);
                              switch (e.variant) {
                                  case "details":
                                      return (0, r.jsx)(b.i, {
                                          className: v.placeholderPadding,
                                          applicationId: e.applicationId,
                                          size: d,
                                      });
                                  case "grid":
                                      return (0, r.jsx)(b.c, {
                                          className: v.placeholderPadding,
                                          applicationIds: e.applicationIds,
                                          size: d,
                                      });
                                  case "application-widget":
                                      return (0, r.jsx)(_.Z, {
                                          applicationId: e.applicationId,
                                          size: d,
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
                                              children: (0, g.mR)(P),
                                          }),
                                          null != n
                                              ? (0, r.jsx)("img", {
                                                    src: n,
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
                      if (null == P) return null;
                      let e = C(P);
                      return "application-widget" === e.variant
                          ? (0, r.jsx)(_.T, {
                                applicationId: e.applicationId,
                                size: d,
                            })
                          : null;
                  })(),
              ],
          });
}
