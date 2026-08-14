n.d(t, { A: () => f });
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
    A = n(49999);
function f(e) {
    let { children: t, targetElementRef: n, dismissPopover: f } = e,
        _ = (0, p.c)(a.C.PREMIUM_TAB_POPOVER),
        T =
            null != _ && "premiumTabPopover" === _.properties.properties.oneofKind
                ? _.properties.properties.premiumTabPopover
                : null,
        g = (0, c.T)(T?.asset),
        I = l.useMemo(() => null != g && (0, s.r1)(g), [g]),
        N = _?.id,
        E = _?.promotionId;
    if (null == T || null == N || null == E) return t;
    let y = (0, o.jsx)(m.A, {
            componentType: a.C.PREMIUM_TAB_POPOVER,
            componentId: N,
            promotionId: E,
            dismissibleContent: r.M.PREMIUM_MARKETING_MOMENT_REMINDER_UPSELL,
        }),
        { icon: S } = (0, u.x)({ buttonAction: T.button?.buttonAction });
    function C() {
        return f(A.i.USER_DISMISS);
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
                          onClose: C,
                      }),
                      icon: S,
                  }
                : void 0,
        R = (0, b.C)(T.helpArticle, T.helpArticleId),
        h = null != R ? { text: R.linkText, link: R.url } : void 0,
        v = {
            targetElementRef: n,
            title: T.header,
            body: T.body,
            textLink: h,
            position: "right",
            alignmentStrategy: "edge",
            align: "top",
            caretConfig: { align: "start" },
            onRequestClose: C,
        };
    if (I) {
        let e = { ...v, assetUrl: g ?? "", action: O, disableMediaViewer: !0 };
        return (0, o.jsxs)(o.Fragment, {
            children: [y, (0, o.jsx)("div", { children: t }), (0, o.jsx)(i.H, { ...e })],
        });
    }
    let P = {
        ...v,
        graphic: null != g ? { type: "image", src: g, aspectRatio: "16/9" } : void 0,
        size: "md",
        actions: null != O ? [O] : void 0,
        gradientColor: "nitro-pink",
    };
    return (0, o.jsxs)(o.Fragment, { children: [y, (0, o.jsx)("div", { children: t }), (0, o.jsx)(d.A, { ...P })] });
}
