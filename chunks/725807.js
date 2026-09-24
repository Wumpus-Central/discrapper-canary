n.d(t, { A: () => f });
var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(17928),
    o = n(862482),
    d = n(930861),
    c = n(403581),
    u = n(866665),
    _ = n(531685),
    E = n(783420),
    A = n(245383),
    h = n(202541),
    I = n(347789);
let f = function (e) {
    let {
            subscriptionTier: t,
            onClick: n,
            size: a,
            className: f,
            textOptions: p,
            iconClassName: T,
            postSuccessGuild: m,
            onSubscribeModalClose: g,
            premiumModalAnalyticsLocation: S,
            showIcon: N = !0,
            disableShine: C,
            applicationId: O,
            shinyButtonClassName: R,
            showGradient: L = !1,
            confirmationFooter: y,
            color: D,
            iconColor: v = "currentColor",
            ...b
        } = e,
        M = (0, l.bG)([_.A], () => _.A.isFocused()),
        P = (0, A.A)({
            subscriptionTier: t,
            buttonTextOverride: p?.textOverride,
            defaultTextOverride: p?.subscribeText,
        }),
        U = D ?? (t === h.pe.TIER_1 ? o.$n.Colors.PRIMARY : o.$n.Colors.GREEN),
        w = (0, i.jsxs)(d.wL, {
            "data-migration-pending": !0,
            disabled: P.disabled,
            innerClassName: I.UO,
            color: U,
            size: a,
            className: R,
            wrapperClassName: s()({ [I.PJ]: L && t === h.pe.TIER_2, [I.Up]: L && t === h.pe.TIER_1 }, f),
            buttonShineClassName:
                "buttonShineClassName" in b ? b.buttonShineClassName : U === o.XD.BRAND_INVERTED ? I.nz : void 0,
            pauseAnimation: !M || C,
            ...b,
            children: [
                N && (0, i.jsx)(c.t, { size: "md", color: v, className: s()(I.PC, T) }),
                (0, i.jsx)("span", { className: s()(I._d, p?.textClassName), children: P.buttonText }),
            ],
        });
    return (0, i.jsx)(E.A, {
        onClick: n,
        subscriptionTier: t,
        postSuccessGuild: m,
        onSubscribeModalClose: g,
        premiumModalAnalyticsLocation: S,
        applicationId: O,
        confirmationFooter: y,
        children: (e) => {
            let { onClick: t } = e,
                n = r.cloneElement(w, { onClick: t });
            return null != P.buttonTooltipText ? (0, i.jsx)(u.m, { text: P.buttonTooltipText, children: n }) : n;
        },
    });
};
