n.d(t, {
    H: () => p,
    default: () => f,
});
var r = n(951288),
    l = n(647438),
    i = n(990547),
    a = n(481060),
    s = n(390885),
    o = n(495784),
    c = n(950012),
    d = n(161836),
    u = n(630724),
    m = n(388032),
    g = n(759137);
function f(e) {
    let { transitionState: t, onClose: n, isNUXFlow: f } = e;
    return (
        l.useEffect(() => {
            o.Z.hideHubUpsell(), f && s.Z.flowStep(u.MK.ORGANIC, u.EW.HUB_CONNECTION);
        }, [f]),
        (0, r.jsx)(a.Y0X, {
            className: g.modalRoot,
            transitionState: t,
            "aria-label": m.intl.string(m.t["3khS8P"]),
            impression: { impressionName: i.ImpressionNames.HUB_EMAIL_SIGNUP },
            parentComponent: "HubEmailConnectionModal",
            children: (0, r.jsx)(a.hzk, {
                style: {
                    overflow: "hidden",
                    paddingRight: "0px",
                },
                paddingFix: !1,
                className: g.modalContent,
                children: (0, r.jsxs)("div", {
                    className: g.container,
                    children: [
                        (0, r.jsx)("div", {
                            className: g.sidebarContainer,
                            children: (0, r.jsx)(d.Z, {}),
                        }),
                        (0, r.jsxs)("div", {
                            className: g.contentContainer,
                            children: [
                                (0, r.jsx)(a.olH, {
                                    onClick: n,
                                    className: g.closeButton,
                                }),
                                (0, r.jsx)(c.Z, {
                                    isNUXFlow: f,
                                    onClose: n,
                                }),
                            ],
                        }),
                    ],
                }),
            }),
        })
    );
}
let p = (e) => {
    let { invite: t } = e;
    return (0, r.jsxs)("div", {
        className: g.container,
        children: [
            (0, r.jsx)("div", {
                className: g.sidebarContainer,
                children: (0, r.jsx)(d.Z, {}),
            }),
            (0, r.jsx)("div", {
                className: g.contentContainer,
                children: (0, r.jsx)(c.Z, { invite: t }),
            }),
        ],
    });
};
