n.d(t, { C: () => p });
var i = n(627968),
    s = n(935399),
    l = n(158954),
    r = n(311907),
    a = n(793574),
    o = n(526162),
    d = n(848971),
    c = n(915089),
    u = n(419954),
    m = n(954571),
    g = n(780964),
    _ = n(652215),
    x = n(635917),
    h = n(788868),
    A = n(985018);
let p = (0, u.E2)(g.X.APPEARANCE_IN_APP_ICON, {
    useSearchTerms: () => [A.intl.string(A.t.gnwxvT)],
    Component: function () {
        let e = (0, c.GV)(),
            { ref: t, ...n } = (0, l._uI)({ orientation: "horizontal", labelledBy: e }),
            u = (0, r.bG)([o.A], () => o.A.isUpsellPreview);
        return (
            (0, s.Ay)(() => {
                u &&
                    m.default.track(_.HAw.PREMIUM_UPSELL_VIEWED, {
                        type: h.e.APP_ICON_UPSELL,
                        location_stack: [a.A.USER_SETTINGS],
                    });
            }),
            (0, i.jsx)("div", {
                ...n,
                ref: t,
                children: (0, i.jsx)(l.BJc, {
                    direction: "horizontal",
                    wrap: !0,
                    gap: 8,
                    children: (0, i.jsx)(d.m, { disabled: u, size: x.N8.SIZE_48 }),
                }),
            })
        );
    },
});
