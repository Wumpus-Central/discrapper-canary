n.d(t, { Z: () => b });
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    o = n(296009),
    s = n(481060),
    c = n(804919),
    u = n(86419),
    d = n(872269),
    p = n(248554),
    f = n(228168),
    h = n(388032),
    g = n(229870);
let m = {
    [o.l.FAVORITE_GAMES]: {
        placeholder: {
            variant: "details",
            applicationId: c.L.LEAGUE_OF_LEGENDS,
        },
        getAriaLabel: () => h.intl.string(h.t.xJtdIi),
    },
    [o.l.CURRENT_GAMES]: {
        placeholder: {
            variant: "details",
            applicationId: c.L.VALORANT,
        },
        getAriaLabel: () => h.intl.string(h.t.Ae8tRk),
    },
    [o.l.PLAYED_GAMES]: {
        placeholder: {
            variant: "grid",
            applicationIds: [c.L.PEAK, c.L.APEX_LEGENDS, c.L.REPO, c.L.BALDURS_GATE_3],
        },
        getAriaLabel: () => h.intl.string(h.t["pBR+4u"]),
    },
    [o.l.WANT_TO_PLAY_GAMES]: {
        placeholder: {
            variant: "grid",
            applicationIds: [c.L.MARVEL_RIVALS, c.L.WORLD_OF_WARCRAFT, c.L.RUST, c.L.DELTA_FORCE],
        },
        getAriaLabel: () => h.intl.string(h.t.NtoBi4),
    },
};
function b(e) {
    let { widgetType: t, onAddWidget: n, size: l = "default", loading: o = !1, trackUserProfileEditAction: c } = e,
        { placeholder: h, getAriaLabel: b } = m[t],
        _ = "small" === l,
        O = i.useCallback(() => {
            o ||
                ((0, u.qH)(t),
                c({
                    action: "WIDGET_ADDED",
                    widgetEdited: t,
                }),
                (0, d.L$)(f.qb.WIDGET_ADDED),
                null == n || n());
        }, [t, n, o, c]);
    return (0, r.jsxs)(s.P3F, {
        className: a()(g.addButtonContainer, _ && g.sizeSmall, o && g.loading),
        onClick: O,
        "aria-label": b(),
        "aria-busy": o,
        children: [
            "details" === h.variant
                ? (0, r.jsx)(p.i, {
                      applicationId: h.applicationId,
                      size: l,
                  })
                : (0, r.jsx)(p.c, {
                      applicationIds: h.applicationIds,
                      size: l,
                  }),
            (0, r.jsxs)("div", {
                className: g.overlay,
                children: [
                    (0, r.jsx)(s.oFk, {
                        size: "md",
                        color: "currentColor",
                        className: g.addButton,
                    }),
                    (0, r.jsx)(s.Text, {
                        variant: "text-md/medium",
                        color: "header-primary",
                        children: (0, u.Nc)(t),
                    }),
                ],
            }),
        ],
    });
}
