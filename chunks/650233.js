n.d(t, {
    H: () => h,
    default: () => p,
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
    f = n(759137);
function p(e) {
    let { transitionState: t, onClose: n, isNUXFlow: p } = e;
    return (
        l.useEffect(() => {
            o.Z.hideHubUpsell(), p && s.Z.flowStep(u.MK.ORGANIC, u.EW.HUB_CONNECTION);
        }, [p]),
        (0, r.jsx)(a.Y0X, {
            className: f.modalRoot,
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
                className: f.modalContent,
                children: (0, r.jsxs)("div", {
                    className: f.container,
                    children: [
                        (0, r.jsx)("div", {
                            className: f.sidebarContainer,
                            children: (0, r.jsx)(d.Z, {}),
                        }),
                        (0, r.jsxs)("div", {
                            className: f.contentContainer,
                            children: [
                                (0, r.jsx)(a.olH, {
                                    onClick: n,
                                    className: f.closeButton,
                                }),
                                (0, r.jsx)(c.Z, {
                                    isNUXFlow: p,
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
let h = (e) => {
    let { invite: t } = e;
    return (0, r.jsxs)("div", {
        className: f.container,
        children: [
            (0, r.jsx)("div", {
                className: f.sidebarContainer,
                children: (0, r.jsx)(d.Z, {}),
            }),
            (0, r.jsx)("div", {
                className: f.contentContainer,
                children: (0, r.jsx)(c.Z, { invite: t }),
            }),
        ],
    });
};
