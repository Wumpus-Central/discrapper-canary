i.d(t, { C: () => g });
var n = i(627968),
    l = i(935399),
    s = i(158954),
    r = i(311907),
    a = i(793574),
    u = i(526162),
    o = i(848971),
    d = i(915089),
    _ = i(419954),
    T = i(954571),
    A = i(780964),
    S = i(652215),
    E = i(788868),
    c = i(985018);
let g = (0, _.E2)(A.X.DISPLAY_IN_APP_ICON, {
    useSearchTerms: () => [c.intl.string(c.t.RPh2ou)],
    Component: function () {
        let e = (0, d.GV)(),
            { ref: t, ...i } = (0, s._uI)({ orientation: "horizontal", labelledBy: e }),
            _ = (0, r.bG)([u.A], () => u.A.isUpsellPreview);
        return (
            (0, l.Ay)(() => {
                _ &&
                    T.default.track(S.HAw.PREMIUM_UPSELL_VIEWED, {
                        type: E.e.APP_ICON_UPSELL,
                        location_stack: [a.A.USER_SETTINGS],
                    });
            }),
            (0, n.jsx)("div", {
                ...i,
                ref: t,
                children: (0, n.jsx)(s.BJc, {
                    direction: "horizontal",
                    wrap: !0,
                    gap: 8,
                    children: (0, n.jsx)(o.m, { disabled: _ }),
                }),
            })
        );
    },
});
