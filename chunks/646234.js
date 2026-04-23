n.d(t, { C: () => E });
var i = n(627968),
    s = n(935399),
    l = n(785007),
    a = n(331322),
    r = n(311907),
    o = n(793574),
    d = n(526162),
    u = n(848971),
    c = n(915089),
    g = n(419954),
    m = n(954571),
    _ = n(780964),
    A = n(652215),
    h = n(635917),
    p = n(788868),
    x = n(985018);
let E = (0, g.E2)(_.X.APPEARANCE_IN_APP_ICON, {
    useSearchTerms: () => [x.intl.string(x.t.gnwxvT)],
    Component: function () {
        let e = (0, c.GV)(),
            { ref: t, ...n } = (0, l._u)({ orientation: "horizontal", labelledBy: e }),
            g = (0, r.bG)([d.A], () => d.A.isUpsellPreview);
        return (
            (0, s.Ay)(() => {
                g &&
                    m.default.track(A.HAw.PREMIUM_UPSELL_VIEWED, {
                        type: p.e.APP_ICON_UPSELL,
                        location_stack: [o.A.USER_SETTINGS],
                    });
            }),
            (0, i.jsx)("div", {
                ...n,
                ref: t,
                children: (0, i.jsx)(a.B, {
                    direction: "horizontal",
                    wrap: !0,
                    gap: 8,
                    children: (0, i.jsx)(u.m, { disabled: g, size: h.N8.SIZE_48 }),
                }),
            })
        );
    },
});
