n.d(t, { A: () => b });
var o = n(627968),
    a = n(64700),
    l = n(877624),
    r = n(338854),
    i = n(43105),
    d = n(59318),
    s = n(549996),
    u = n(498470),
    p = n(807098),
    c = n(637706),
    m = n(49999);
function b(e) {
    let { children: t, targetElementRef: n, dismissPopover: b } = e,
        _ = (0, s.c)(l.C.PREMIUM_TAB_POPOVER),
        f =
            null != _ && "premiumTabPopover" === _.properties.properties.oneofKind
                ? _.properties.properties.premiumTabPopover
                : null,
        A = (0, p.T)(f?.asset),
        T = a.useMemo(() => null != A && (0, d.r1)(A), [A]);
    if (null == f) return t;
    let { icon: g } = (0, u.x)({ buttonAction: f.button?.buttonAction }),
        I = () => b(m.i.USER_DISMISS),
        N =
            f.button?.copy != null
                ? {
                      text: f.button.copy,
                      variant: "expressive",
                      onClick: (0, u.h)({
                          buttonAction: f.button.buttonAction,
                          deeplinkSection: f.button.deeplinkSection,
                          applicationId: f.button.navigableStorefrontApplicationId?.value,
                          onClose: I,
                      }),
                      icon: g,
                  }
                : void 0,
        E = (0, c.C)(f.helpArticle, f.helpArticleId),
        y = null != E ? { text: E.linkText, link: E.url } : void 0,
        S = {
            targetElementRef: n,
            title: f.header,
            body: f.body,
            textLink: y,
            position: "right",
            alignmentStrategy: "edge",
            align: "top",
            caretConfig: { align: "start" },
            onRequestClose: I,
        };
    if (T) {
        let e = { ...S, assetUrl: A ?? "", action: N, disableMediaViewer: !0 };
        return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)("div", { children: t }), (0, o.jsx)(r.H, { ...e })] });
    }
    let C = {
        ...S,
        graphic: null != A ? { type: "image", src: A, aspectRatio: "16/9" } : void 0,
        size: "md",
        actions: null != N ? [N] : void 0,
        gradientColor: "nitro-pink",
    };
    return (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)("div", { children: t }), (0, o.jsx)(i.A, { ...C })] });
}
