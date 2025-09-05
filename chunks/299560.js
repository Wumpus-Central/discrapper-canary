n.d(t, { Z: () => O });
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    o = n(296009),
    s = n(481060),
    c = n(812206),
    u = n(835473),
    d = n(804919),
    p = n(86419),
    f = n(872269),
    h = n(248554),
    g = n(228168),
    m = n(388032),
    b = n(73686);
let _ = {
    [o.l.FAVORITE_GAMES]: {
        placeholder: {
            variant: "details",
            applicationId: d.L.LEAGUE_OF_LEGENDS,
        },
        getAriaLabel: () => m.intl.string(m.t.xJtdIi),
    },
    [o.l.CURRENT_GAMES]: {
        placeholder: {
            variant: "details",
            applicationId: d.L.VALORANT,
        },
        getAriaLabel: () => m.intl.string(m.t.Ae8tRk),
    },
    [o.l.PLAYED_GAMES]: {
        placeholder: {
            variant: "grid",
            applicationIds: [d.L.PEAK, d.L.APEX_LEGENDS, d.L.REPO, d.L.BALDURS_GATE_3],
        },
        getAriaLabel: () => m.intl.string(m.t["pBR+4u"]),
    },
    [o.l.WANT_TO_PLAY_GAMES]: {
        placeholder: {
            variant: "grid",
            applicationIds: [d.L.MARVEL_RIVALS, d.L.WORLD_OF_WARCRAFT, d.L.RUST, d.L.DELTA_FORCE],
        },
        getAriaLabel: () => m.intl.string(m.t.NtoBi4),
    },
    [o.l.APPLICATION]: {
        placeholder: { variant: "details" },
        getAriaLabel: (e) => {
            var t, n;
            return m.intl.formatToPlainString(m.t.KfGahI, {
                applicationName:
                    null != (n = null == (t = c.Z.getApplication(e.applicationId)) ? void 0 : t.name) ? n : "",
            });
        },
    },
};
function O(e) {
    let { widgetType: t, onAddWidget: n, size: l = "default", loading: c = !1, trackUserProfileEditAction: d } = e,
        { placeholder: m, getAriaLabel: O } = _[t],
        E = "small" === l,
        y = i.useMemo(() => {
            switch (t) {
                case o.l.CURRENT_GAMES:
                case o.l.FAVORITE_GAMES:
                case o.l.PLAYED_GAMES:
                case o.l.WANT_TO_PLAY_GAMES:
                    return {
                        id: t,
                        type: t,
                        games: [],
                    };
                case o.l.APPLICATION:
                    return {
                        id: t,
                        type: t,
                        applicationId: "",
                    };
            }
        }, [t]);
    (0, u.q)(y.type === o.l.APPLICATION ? y.applicationId : null);
    let v = i.useCallback(() => {
        c ||
            ((0, p.qH)(t, y),
            d({
                action: "WIDGET_ADDED",
                widgetEdited: t,
            }),
            (0, f.L$)(g.qb.WIDGET_ADDED),
            null == n || n());
    }, [c, t, y, d, n]);
    return (0, r.jsxs)(s.P3F, {
        className: a()(b.addButtonContainer, E && b.sizeSmall, c && b.loading),
        onClick: v,
        "aria-label": O(y),
        "aria-busy": c,
        children: [
            "details" === m.variant
                ? (0, r.jsx)(h.i, {
                      applicationId: m.applicationId,
                      size: l,
                  })
                : (0, r.jsx)(h.c, {
                      applicationIds: m.applicationIds,
                      size: l,
                  }),
            (0, r.jsxs)("div", {
                className: b.overlay,
                children: [
                    (0, r.jsx)(s.oFk, {
                        size: "md",
                        color: "currentColor",
                        className: b.addButton,
                    }),
                    (0, r.jsx)(s.Text, {
                        variant: "text-md/medium",
                        color: "header-primary",
                        children: (0, p.mR)(y),
                    }),
                ],
            }),
        ],
    });
}
