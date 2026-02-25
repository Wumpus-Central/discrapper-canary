i.d(e, { C: () => I });
var n = i(627968),
    l = i(935399),
    s = i(158954),
    r = i(311907),
    a = i(793574),
    u = i(526162),
    o = i(848971),
    d = i(915089),
    A = i(419954),
    T = i(954571),
    S = i(780964),
    E = i(652215),
    g = i(635917),
    _ = i(788868),
    c = i(985018);
let I = (0, A.E2)(S.X.DISPLAY_IN_APP_ICON, {
    useSearchTerms: () => [c.intl.string(c.t.gnwxvT)],
    Component: function () {
        let t = (0, d.GV)(),
            { ref: e, ...i } = (0, s._uI)({ orientation: "horizontal", labelledBy: t }),
            A = (0, r.bG)([u.A], () => u.A.isUpsellPreview);
        return (
            (0, l.Ay)(() => {
                A &&
                    T.default.track(E.HAw.PREMIUM_UPSELL_VIEWED, {
                        type: _.e.APP_ICON_UPSELL,
                        location_stack: [a.A.USER_SETTINGS],
                    });
            }),
            (0, n.jsx)("div", {
                ...i,
                ref: e,
                children: (0, n.jsx)(s.BJc, {
                    direction: "horizontal",
                    wrap: !0,
                    gap: 8,
                    children: (0, n.jsx)(o.m, { disabled: A, size: g.N8.SIZE_48 }),
                }),
            })
        );
    },
});
