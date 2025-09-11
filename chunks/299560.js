n.d(t, { Z: () => y });
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    o = n(296009),
    s = n(481060),
    c = n(812206),
    u = n(835473),
    d = n(804919),
    p = n(931847),
    f = n(836197),
    h = n(86419),
    g = n(872269),
    m = n(248554),
    b = n(228168),
    _ = n(388032),
    O = n(73686);
let E = {
    [o.l.FAVORITE_GAMES]: {
        placeholder: {
            variant: "details",
            applicationId: d.L.LEAGUE_OF_LEGENDS,
        },
        getAriaLabel: () => _.intl.string(_.t.xJtdIi),
    },
    [o.l.CURRENT_GAMES]: {
        placeholder: {
            variant: "details",
            applicationId: d.L.VALORANT,
        },
        getAriaLabel: () => _.intl.string(_.t.Ae8tRk),
    },
    [o.l.PLAYED_GAMES]: {
        placeholder: {
            variant: "grid",
            applicationIds: [d.L.PEAK, d.L.APEX_LEGENDS, d.L.REPO, d.L.BALDURS_GATE_3],
        },
        getAriaLabel: () => _.intl.string(_.t["pBR+4u"]),
    },
    [o.l.WANT_TO_PLAY_GAMES]: {
        placeholder: {
            variant: "grid",
            applicationIds: [d.L.MARVEL_RIVALS, d.L.WORLD_OF_WARCRAFT, d.L.RUST, d.L.DELTA_FORCE],
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
    let { widgetType: t, onAddWidget: n, size: l = "default", loading: c = !1, trackUserProfileEditAction: d } = e,
        { placeholder: _, getAriaLabel: y } = E[t],
        v = "small" === l,
        I = i.useMemo(() => {
            switch (t) {
                case o.l.CURRENT_GAMES:
                case o.l.FAVORITE_GAMES:
                case o.l.PLAYED_GAMES:
                case o.l.WANT_TO_PLAY_GAMES:
                    return new f.zy({
                        type: t,
                        games: [],
                    });
                case o.l.APPLICATION:
                    return new p.q({
                        type: t,
                        applicationId: "",
                    });
            }
        }, [t]);
    (0, u.q)(I.type === o.l.APPLICATION ? I.applicationId : null);
    let C = i.useCallback(() => {
        c ||
            ((0, h.qH)(t, I),
            d({
                action: "WIDGET_ADDED",
                widgetEdited: t,
            }),
            (0, g.L$)(b.qb.WIDGET_ADDED),
            null == n || n());
    }, [c, t, I, d, n]);
    return (0, r.jsxs)(s.P3F, {
        className: a()(O.addButtonContainer, v && O.sizeSmall, c && O.loading),
        onClick: C,
        "aria-label": y(I),
        "aria-busy": c,
        children: [
            "details" === _.variant
                ? (0, r.jsx)(m.i, {
                      applicationId: _.applicationId,
                      size: l,
                  })
                : (0, r.jsx)(m.c, {
                      applicationIds: _.applicationIds,
                      size: l,
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
                        children: (0, h.mR)(I),
                    }),
                ],
            }),
        ],
    });
}
