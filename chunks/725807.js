var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(855986),
    o = n(862482),
    d = n(930861),
    c = n(403581),
    u = n(866665),
    _ = n(531685),
    E = n(783420),
    A = n(572079),
    f = n(682901),
    h = n(347789);
n.d(
    t,
    {},
    {
        A: function (e) {
            let {
                    subscriptionTier: t,
                    onClick: n,
                    size: a,
                    className: I,
                    textOptions: p,
                    iconClassName: m,
                    postSuccessGuild: T,
                    onSubscribeModalClose: g,
                    premiumModalAnalyticsLocation: S,
                    showIcon: N = !0,
                    disableShine: C,
                    applicationId: O,
                    shinyButtonClassName: R,
                    showGradient: L = !1,
                    confirmationFooter: y,
                    color: D,
                    iconColor: b = "currentColor",
                    ...v
                } = e,
                P = (0, l.bG)([_.A], () => _.A.isFocused()),
                M = (0, A.A)({
                    subscriptionTier: t,
                    buttonTextOverride: p?.textOverride,
                    defaultTextOverride: p?.subscribeText,
                }),
                U = D ?? (t === f.pe.TIER_1 ? o.$n.Colors.PRIMARY : o.$n.Colors.GREEN),
                w = (0, i.jsxs)(d.wL, {
                    "data-migration-pending": !0,
                    disabled: M.disabled,
                    innerClassName: h.UO,
                    color: U,
                    size: a,
                    className: R,
                    wrapperClassName: s()({ [h.PJ]: L && t === f.pe.TIER_2, [h.Up]: L && t === f.pe.TIER_1 }, I),
                    buttonShineClassName:
                        "buttonShineClassName" in v
                            ? v.buttonShineClassName
                            : U === o.XD.BRAND_INVERTED
                              ? h.nz
                              : void 0,
                    pauseAnimation: !P || C,
                    ...v,
                    children: [
                        N && (0, i.jsx)(c.NitroWheelIcon, { size: "md", color: b, className: s()(h.PC, m) }),
                        (0, i.jsx)("span", { className: s()(h._d, p?.textClassName), children: M.buttonText }),
                    ],
                });
            return (0, i.jsx)(E.A, {
                onClick: n,
                subscriptionTier: t,
                postSuccessGuild: T,
                onSubscribeModalClose: g,
                premiumModalAnalyticsLocation: S,
                applicationId: O,
                confirmationFooter: y,
                children: (e) => {
                    let { onClick: t } = e,
                        n = r.cloneElement(w, { onClick: t });
                    return null != M.buttonTooltipText
                        ? (0, i.jsx)(u.m, { text: M.buttonTooltipText, children: n })
                        : n;
                },
            });
        },
    },
);
