n.d(t, { Z: () => O });
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    o = n(296009),
    s = n(481060),
    c = n(812206),
    u = n(823379),
    d = n(804919),
    p = n(86419),
    f = n(872269),
    g = n(248554),
    h = n(70399),
    m = n(228168),
    b = n(388032),
    _ = n(119078);
let E = {
    [o.l.FAVORITE_GAMES]: {
        placeholder: () => ({
            variant: "details",
            applicationId: d.L.LEAGUE_OF_LEGENDS,
        }),
        getAriaLabel: () => b.intl.string(b.t.xJtdIm),
    },
    [o.l.CURRENT_GAMES]: {
        placeholder: () => ({
            variant: "details",
            applicationId: d.L.VALORANT,
        }),
        getAriaLabel: () => b.intl.string(b.t.Ae8tRi),
    },
    [o.l.PLAYED_GAMES]: {
        placeholder: () => ({
            variant: "grid",
            applicationIds: [d.L.PEAK, d.L.BATTLEFIELD_6, d.L.REPO, d.L.BALDURS_GATE_3],
        }),
        getAriaLabel: () => b.intl.string(b.t["pBR+4j"]),
    },
    [o.l.WANT_TO_PLAY_GAMES]: {
        placeholder: () => ({
            variant: "grid",
            applicationIds: [d.L.MARVEL_RIVALS, d.L.WORLD_OF_WARCRAFT, d.L.RUST, d.L.SILKSONG],
        }),
        getAriaLabel: () => b.intl.string(b.t.NtoBi1),
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
            return b.intl.formatToPlainString(b.t.KfGahB, {
                applicationName:
                    null != (n = null == (t = c.Z.getApplication(e.applicationId)) ? void 0 : t.name) ? n : "",
            });
        },
    },
};
function O(e) {
    let { widget: t, onAddWidget: n, size: l = "default", loading: o = !1, trackUserProfileEditAction: c } = e,
        { placeholder: d, getAriaLabel: b, icon: O } = E[t.type],
        v = "small" === l,
        y = i.useCallback(() => {
            o ||
                ((0, p.qH)(t),
                c(
                    (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                r = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols &&
                                (r = r.concat(
                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                    }),
                                )),
                                r.forEach(function (t) {
                                    var r;
                                    (r = n[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: r,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0,
                                              })
                                            : (e[t] = r);
                                });
                        }
                        return e;
                    })({ action: "WIDGET_ADDED" }, t.getProfileEditAnalyticsOptions()),
                ),
                (0, f.L$)(m.qb.WIDGET_ADDED),
                null == n || n());
        }, [o, t, c, n]),
        I = null == O ? void 0 : O(t);
    return (0, r.jsxs)("div", {
        className: _.addButtonContainer,
        children: [
            (0, r.jsxs)(s.P3F, {
                className: a()(_.addButtonContent, v && _.sizeSmall, o && _.loading),
                onClick: y,
                "aria-label": b(t),
                "aria-busy": o,
                children: [
                    (() => {
                        let e = d(t);
                        switch (e.variant) {
                            case "details":
                                return (0, r.jsx)(g.i, {
                                    className: _.placeholderPadding,
                                    applicationId: e.applicationId,
                                    size: l,
                                });
                            case "grid":
                                return (0, r.jsx)(g.c, {
                                    className: _.placeholderPadding,
                                    applicationIds: e.applicationIds,
                                    size: l,
                                });
                            case "application-widget":
                                return (0, r.jsx)(h.Z, {
                                    applicationId: e.applicationId,
                                    size: l,
                                });
                            default:
                                return (0, u.vE)(e);
                        }
                    })(),
                    (0, r.jsxs)("div", {
                        className: _.overlay,
                        children: [
                            (0, r.jsx)(s.oFk, {
                                size: "md",
                                color: "currentColor",
                                className: _.addButton,
                            }),
                            (0, r.jsxs)("div", {
                                className: _.title,
                                children: [
                                    (0, r.jsx)(s.Text, {
                                        variant: "text-md/medium",
                                        color: "text-strong",
                                        children: (0, p.mR)(t),
                                    }),
                                    null != I
                                        ? (0, r.jsx)("img", {
                                              src: I,
                                              alt: "",
                                              width: 16,
                                              height: 16,
                                              className: _.icon,
                                          })
                                        : null,
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            (() => {
                let e = d(t);
                return "application-widget" === e.variant
                    ? (0, r.jsx)(h.T, {
                          applicationId: e.applicationId,
                          size: l,
                      })
                    : null;
            })(),
        ],
    });
}
