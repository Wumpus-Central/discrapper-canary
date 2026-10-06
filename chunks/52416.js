n.d(t, { A: () => _ });
var o = n(477900),
    l = n(582128),
    a = n(877624),
    r = n(554146),
    i = n(206248),
    d = n(43105),
    s = n(59318),
    p = n(549996),
    u = n(498470),
    c = n(807098),
    b = n(637706),
    m = n(788883),
    A = n(49999);
function _(e) {
    let { children: t, targetElementRef: n, dismissPopover: _ } = e,
        f = (0, p.c)(a.C.PREMIUM_TAB_POPOVER),
        I =
            null != f && "premiumTabPopover" === f.properties.properties.oneofKind
                ? f.properties.properties.premiumTabPopover
                : null,
        T = (0, c.T)(I?.asset),
        N = l.useMemo(() => null != T && (0, s.r1)(T), [T]),
        g = f?.id,
        E = f?.promotionId;
    if (null == I || null == g || null == E) return t;
    let y = (0, o.jsx)(m.A, {
            componentType: a.C.PREMIUM_TAB_POPOVER,
            componentId: g,
            promotionId: E,
            dismissibleContent: r.M.PREMIUM_MARKETING_MOMENT_REMINDER_UPSELL,
        }),
        { icon: S, iconPosition: C } = (0, u.x)({ buttonAction: I.button?.buttonAction });
    function O() {
        return _(A.i.USER_DISMISS);
    }
    let R =
            I.button?.copy != null
                ? {
                      text: I.button.copy,
                      variant: "expressive",
                      onClick: (0, u.h)({
                          buttonAction: I.button.buttonAction,
                          deeplinkSection: I.button.deeplinkSection,
                          applicationId: I.button.navigableStorefrontApplicationId?.value,
                          onClose: O,
                      }),
                      icon: S,
                      iconPosition: C,
                  }
                : void 0,
        h = (0, b.C)(I.helpArticle, I.helpArticleId),
        P = null != h ? { text: h.linkText, link: h.url } : void 0,
        v = {
            targetElementRef: n,
            title: I.header,
            body: I.body,
            textLink: P,
            position: "right",
            alignmentStrategy: "edge",
            align: "top",
            caretConfig: { align: "start" },
            onRequestClose: O,
        };
    if (N) {
        let e = { ...v, assetUrl: T ?? "", action: R, disableMediaViewer: !0 };
        return (0, o.jsxs)(o.Fragment, {
            children: [y, (0, o.jsx)("div", { children: t }), (0, o.jsx)(i.H, { ...e })],
        });
    }
    let M = {
        ...v,
        graphic: null != T ? { type: "image", src: T, aspectRatio: "16/9" } : void 0,
        size: "md",
        actions: null != R ? [R] : void 0,
        gradientColor: "nitro-pink",
    };
    return (0, o.jsxs)(o.Fragment, { children: [y, (0, o.jsx)("div", { children: t }), (0, o.jsx)(d.A, { ...M })] });
}
