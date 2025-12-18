n.d(t, { Z: () => u });
var r = n(54381),
    i = n(473749),
    a = n(481060),
    o = n(909917),
    s = n(452762),
    l = n(981631),
    c = n(388032);
function u(e) {
    let { user: t, analyticsLocations: n, confettiEnabled: u = !0 } = e,
        { giftButtonRef: d, handleMouseEnter: f } = (0, s.Z)({ enabled: u }),
        p = i.useCallback(() => {
            (0, o.Z)({
                giftRecipient: t,
                analyticsLocations: n,
                analyticsObject: {
                    page: l.ZY5.USER_PROFILE,
                    section: l.jXE.USER_PROFILE,
                    object: l.qAy.BUTTON_ICON,
                    objectType: l.AnalyticsObjectTypes.GIFT,
                },
            });
        }, [t, n]);
    return (0, r.jsx)("div", {
        ref: d,
        onMouseEnter: f,
        children: (0, r.jsx)(a.hU, {
            size: "sm",
            variant: "icon-only",
            icon: a.OgN,
            "aria-label": c.intl.string(c.t.PEjaCx),
            onClick: p,
        }),
    });
}
