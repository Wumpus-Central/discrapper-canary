n.d(t, { A: () => A });
var o = n(477900),
    l = n(582128),
    a = n(877624),
    r = n(554146),
    i = n(338854),
    d = n(43105),
    s = n(59318),
    p = n(549996),
    u = n(498470),
    c = n(807098),
    b = n(637706),
    m = n(788883),
    f = n(49999);
function A(e) {
    let { children: t, targetElementRef: n, dismissPopover: A } = e,
        g = (0, p.c)(a.C.PREMIUM_TAB_POPOVER),
        T =
            null != g && "premiumTabPopover" === g.properties.properties.oneofKind
                ? g.properties.properties.premiumTabPopover
                : null,
        y = (0, c.T)(T?.asset),
        N = l.useMemo(() => null != y && (0, s.r1)(y), [y]),
        _ = g?.id,
        I = g?.promotionId;
    if (null == T || null == _ || null == I) return t;
    let E = (0, o.jsx)(m.A, {
            componentType: a.C.PREMIUM_TAB_POPOVER,
            componentId: _,
            promotionId: I,
            dismissibleContent: r.M.PREMIUM_MARKETING_MOMENT_REMINDER_UPSELL,
        }),
        { icon: C } = (0, u.x)({ buttonAction: T.button?.buttonAction });
    function S() {
        return A(f.i.USER_DISMISS);
    }
    let O =
            T.button?.copy != null
                ? {
                      text: T.button.copy,
                      variant: "expressive",
                      onClick: (0, u.h)({
                          buttonAction: T.button.buttonAction,
                          deeplinkSection: T.button.deeplinkSection,
                          applicationId: T.button.navigableStorefrontApplicationId?.value,
                          onClose: S,
                      }),
                      icon: C,
                  }
                : void 0,
        h = (0, b.C)(T.helpArticle, T.helpArticleId),
        v = null != h ? { text: h.linkText, link: h.url } : void 0,
        R = {
            targetElementRef: n,
            title: T.header,
            body: T.body,
            textLink: v,
            position: "right",
            alignmentStrategy: "edge",
            align: "top",
            caretConfig: { align: "start" },
            onRequestClose: S,
        };
    if (N) {
        let e = { ...R, assetUrl: y ?? "", action: O, disableMediaViewer: !0 };
        return (0, o.jsxs)(o.Fragment, {
            children: [E, (0, o.jsx)("div", { children: t }), (0, o.jsx)(i.H, { ...e })],
        });
    }
    let P = {
        ...R,
        graphic: null != y ? { type: "image", src: y, aspectRatio: "16/9" } : void 0,
        size: "md",
        actions: null != O ? [O] : void 0,
        gradientColor: "nitro-pink",
    };
    return (0, o.jsxs)(o.Fragment, { children: [E, (0, o.jsx)("div", { children: t }), (0, o.jsx)(d.A, { ...P })] });
}
