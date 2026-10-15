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
    A = n(788883),
    _ = n(49999),
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
    let R = (0, b.d)(N.body, C);
    if (!R.ok) return t;
    let h = (0, b.n)(N.button?.copy ?? "", C);
    if (!h.ok) return t;
    let P = (0, o.jsx)(A.A, {
            componentType: a.C.PREMIUM_TAB_POPOVER,
            componentId: y,
            promotionId: S,
            dismissibleContent: r.M.PREMIUM_MARKETING_MOMENT_REMINDER_UPSELL,
        }),
        { icon: v, iconPosition: M } = (0, p.x)({ buttonAction: N.button?.buttonAction });
    function L() {
        return I(_.i.USER_DISMISS);
    }
    let x =
            null != N.button
                ? {
                      text: h.content,
                      variant: "expressive",
                      onClick: (0, p.h)({
                          buttonAction: N.button.buttonAction,
                          deeplinkSection: N.button.deeplinkSection,
                          applicationId: N.button.navigableStorefrontApplicationId?.value,
                          onClose: L,
                      }),
                      icon: v,
                      iconPosition: M,
                  }
                : void 0,
        U = (0, m.C)(N.helpArticle, N.helpArticleId),
        G = null != U ? { text: U.linkText, link: U.url } : void 0,
        B = {
            targetElementRef: n,
            title: O.content,
            body: R.content,
            textLink: G,
            position: "right",
            alignmentStrategy: "edge",
            align: "top",
            caretConfig: { align: "start" },
            onRequestClose: L,
        };
    if (E) {
        let e = { ...B, assetUrl: g ?? "", action: x, disableMediaViewer: !0 };
        return (0, o.jsxs)(o.Fragment, {
            children: [P, (0, o.jsx)("div", { children: t }), (0, o.jsx)(i.H, { ...e })],
        });
    }
    let D = {
        ...B,
        graphic: null != g ? { type: "image", src: g, aspectRatio: "16/9" } : void 0,
        size: "md",
        actions: null != x ? [x] : void 0,
        gradientColor: "nitro-pink",
    };
    return (0, o.jsxs)(o.Fragment, { children: [P, (0, o.jsx)("div", { children: t }), (0, o.jsx)(d.A, { ...D })] });
}
