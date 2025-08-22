r.d(t, { Z: () => j });
var n = r(951288),
    i = r(647438),
    a = r(120356),
    l = r.n(a),
    o = r(296009),
    c = r(481060),
    s = r(804919),
    u = r(86419),
    d = r(872269),
    f = r(248554),
    g = r(228168),
    b = r(247397),
    p = r(388032),
    m = r(229870);
let O = {
    [o.l.FAVORITE_GAMES]: {
        placeholder: {
            variant: "details",
            applicationId: s.L.LEAGUE_OF_LEGENDS,
        },
        getAriaLabel: () => p.intl.string(p.t.xJtdIi),
    },
    [o.l.CURRENT_GAMES]: {
        placeholder: {
            variant: "details",
            applicationId: s.L.VALORANT,
        },
        getAriaLabel: () => p.intl.string(p.t.Ae8tRk),
    },
    [o.l.PLAYED_GAMES]: {
        placeholder: {
            variant: "grid",
            applicationIds: [s.L.PEAK, s.L.APEX_LEGENDS, s.L.REPO, s.L.BALDURS_GATE_3],
        },
        getAriaLabel: () => p.intl.string(p.t["pBR+4u"]),
    },
    [o.l.WANT_TO_PLAY_GAMES]: {
        placeholder: {
            variant: "grid",
            applicationIds: [s.L.MARVEL_RIVALS, s.L.WORLD_OF_WARCRAFT, s.L.RUST, s.L.DELTA_FORCE],
        },
        getAriaLabel: () => p.intl.string(p.t.NtoBi4),
    },
};
function j(e) {
    let { widgetType: t, onAddWidget: r, size: a = "default", loading: o = !1 } = e,
        { placeholder: s, getAriaLabel: j } = O[t],
        y = "small" === a,
        x = i.useCallback(() => {
            o || ((0, u.qH)(t), (0, d.L$)(g.qb.WIDGET_ADDED), null == r || r());
        }, [t, r, o]);
    return (0, n.jsxs)(c.P3F, {
        className: l()(m.addButtonContainer, y && m.sizeSmall, o && m.loading),
        onClick: x,
        "aria-label": j(),
        "aria-busy": o,
        children: [
            "details" === s.variant
                ? (0, n.jsx)(f.i, {
                      applicationId: s.applicationId,
                      size: a,
                  })
                : (0, n.jsx)(f.c, {
                      applicationIds: s.applicationIds,
                      size: a,
                  }),
            (0, n.jsxs)("div", {
                className: m.overlay,
                children: [
                    (0, n.jsx)(c.oFk, {
                        size: "md",
                        color: "currentColor",
                        className: m.addButton,
                    }),
                    (0, n.jsx)(c.Text, {
                        variant: "text-md/medium",
                        color: "header-primary",
                        children: p.intl.string(b.NP[t]),
                    }),
                ],
            }),
        ],
    });
}
