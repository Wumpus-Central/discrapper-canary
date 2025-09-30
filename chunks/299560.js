n.d(t, { Z: () => y });
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    o = n(296009),
    s = n(481060),
    c = n(812206),
    u = n(804919),
    d = n(350327),
    p = n(931847),
    f = n(836197),
    h = n(86419),
    g = n(872269),
    m = n(248554),
    b = n(228168),
    _ = n(388032),
    O = n(229870);
let E = {
    [o.l.FAVORITE_GAMES]: {
        placeholder: {
            variant: "details",
            applicationId: u.L.LEAGUE_OF_LEGENDS,
        },
        getAriaLabel: () => _.intl.string(_.t.xJtdIi),
    },
    [o.l.CURRENT_GAMES]: {
        placeholder: {
            variant: "details",
            applicationId: u.L.VALORANT,
        },
        getAriaLabel: () => _.intl.string(_.t.Ae8tRk),
    },
    [o.l.PLAYED_GAMES]: {
        placeholder: {
            variant: "grid",
            applicationIds: [u.L.PEAK, u.L.APEX_LEGENDS, u.L.REPO, u.L.BALDURS_GATE_3],
        },
        getAriaLabel: () => _.intl.string(_.t["pBR+4u"]),
    },
    [o.l.WANT_TO_PLAY_GAMES]: {
        placeholder: {
            variant: "grid",
            applicationIds: [u.L.MARVEL_RIVALS, u.L.WORLD_OF_WARCRAFT, u.L.RUST, u.L.DELTA_FORCE],
        },
        getAriaLabel: () => _.intl.string(_.t.NtoBi4),
    },
    [o.l.APPLICATION]: {
        placeholder: { variant: "details" },
        getAriaLabel: (e) => {
            var t, n;
            return _.intl.formatToPlainString(_.t.KfGahI, {
                applicationName:
                    null != (n = null == (t = c.Z.getApplication(e.applicationId)) ? void 0 : t.name) ? n : "",
            });
        },
    },
};
function y(e) {
    var t;
    let { widgetType: n, onAddWidget: l, size: c = "default", loading: u = !1, trackUserProfileEditAction: _ } = e,
        { placeholder: y, getAriaLabel: v } = E[n],
        I = "small" === c,
        S = null == (t = (0, d.uV)().data) ? void 0 : t.map((e) => e.application_id),
        C = i.useMemo(() => {
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
                    let e = null == S ? void 0 : S[0];
                    if (null == e) return null;
                    return new p.q({
                        type: n,
                        applicationId: e,
                    });
            }
        }, [n, S]),
        T = i.useCallback(() => {
            u ||
                null == C ||
                ((0, h.qH)(n, C),
                _({
                    action: "WIDGET_ADDED",
                    widgetEdited: n,
                }),
                (0, g.L$)(b.qb.WIDGET_ADDED),
                null == l || l());
        }, [u, n, C, _, l]);
    return null == C
        ? null
        : (0, r.jsxs)(s.P3F, {
              className: a()(O.addButtonContainer, I && O.sizeSmall, u && O.loading),
              onClick: T,
              "aria-label": v(C),
              "aria-busy": u,
              children: [
                  "details" === y.variant
                      ? (0, r.jsx)(m.i, {
                            applicationId: y.applicationId,
                            size: c,
                        })
                      : (0, r.jsx)(m.c, {
                            applicationIds: y.applicationIds,
                            size: c,
                        }),
                  (0, r.jsxs)("div", {
                      className: O.overlay,
                      children: [
                          (0, r.jsx)(s.oFk, {
                              size: "md",
                              color: "currentColor",
                              className: O.addButton,
                          }),
                          (0, r.jsx)(s.Text, {
                              variant: "text-md/medium",
                              color: "header-primary",
                              children: (0, h.mR)(C),
                          }),
                      ],
                  }),
              ],
          });
}
