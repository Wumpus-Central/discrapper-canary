n.d(t, { A: () => I });
var o = n(477900),
    l = n(582128),
    a = n(877624),
    r = n(554146),
    i = n(206248),
    d = n(43105),
    s = n(59318),
    u = n(549996),
    p = n(498470),
    c = n(807098),
    b = n(92551),
    m = n(637706),
    _ = n(788883),
    A = n(49999),
    f = n(105292);
function I(e) {
    let { children: t, targetElementRef: n, dismissPopover: I } = e,
        T = (0, u.c)(a.C.PREMIUM_TAB_POPOVER),
        N =
            null != T && "premiumTabPopover" === T.properties.properties.oneofKind
                ? T.properties.properties.premiumTabPopover
                : null,
        g = (0, c.T)(N?.asset),
        E = l.useMemo(() => null != g && (0, s.r1)(g), [g]),
        y = T?.id,
        S = T?.promotionId;
    if (null == N || null == T || null == y || null == S) return t;
    let C = T.getFormatVariableValues(f.intl.currentLocale),
        O = (0, b.n)(N.header, C);
    if (!O.ok) return t;
    let R =
            T.promotionEndDate?.getFullYear() === new Date().getFullYear()
                ? T.getFormatVariableValues(f.intl.currentLocale, { includeYear: !1 })
                : C,
        h = (0, b.d)(N.body, R);
    if (!h.ok) return t;
    let P = (0, b.n)(N.button?.copy ?? "", C);
    if (!P.ok) return t;
    let v = (0, o.jsx)(_.A, {
            componentType: a.C.PREMIUM_TAB_POPOVER,
            componentId: y,
            promotionId: S,
            dismissibleContent: r.M.PREMIUM_MARKETING_MOMENT_REMINDER_UPSELL,
        }),
        { icon: M, iconPosition: L } = (0, p.x)({ buttonAction: N.button?.buttonAction });
    function x() {
        return I(A.i.USER_DISMISS);
    }
    let G =
            null != N.button
                ? {
                      text: P.content,
                      variant: "expressive",
                      onClick: (0, p.h)({
                          buttonAction: N.button.buttonAction,
                          deeplinkSection: N.button.deeplinkSection,
                          applicationId: N.button.navigableStorefrontApplicationId?.value,
                          onClose: x,
                      }),
                      icon: M,
                      iconPosition: L,
                  }
                : void 0,
        U = (0, m.C)(N.helpArticle, N.helpArticleId),
        B = null != U ? { text: U.linkText, link: U.url } : void 0,
        D = {
            targetElementRef: n,
            title: O.content,
            body: h.content,
            textLink: B,
            position: "right",
            alignmentStrategy: "edge",
            align: "top",
            caretConfig: { align: "start" },
            onRequestClose: x,
        };
    if (E) {
        let e = { ...D, assetUrl: g ?? "", action: G, disableMediaViewer: !0 };
        return (0, o.jsxs)(o.Fragment, {
            children: [v, (0, o.jsx)("div", { children: t }), (0, o.jsx)(i.H, { ...e })],
        });
    }
    let k = {
        ...D,
        graphic: null != g ? { type: "image", src: g, aspectRatio: "16/9" } : void 0,
        size: "md",
        actions: null != G ? [G] : void 0,
        gradientColor: "nitro-pink",
    };
    return (0, o.jsxs)(o.Fragment, { children: [v, (0, o.jsx)("div", { children: t }), (0, o.jsx)(d.A, { ...k })] });
}
