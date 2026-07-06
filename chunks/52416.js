n.d(t, { A: () => b });
var o = n(627968),
    a = n(64700),
    l = n(877624),
    r = n(338854),
    i = n(43105),
    d = n(59318),
    u = n(549996),
    s = n(498470),
    p = n(807098),
    c = n(637706),
    m = n(49999);
function b(e) {
    let { children: t, targetElementRef: n, dismissPopover: b } = e,
        f = (0, u.c)(l.C.PREMIUM_TAB_POPOVER),
        _ =
            null != f && "premiumTabPopover" === f.properties.properties.oneofKind
                ? f.properties.properties.premiumTabPopover
                : null,
        A = (0, p.T)(_?.asset),
        T = a.useMemo(() => null != A && (0, d.r1)(A), [A]);
    if (null == _) return t;
    let { icon: g } = (0, s.x)({ buttonAction: _.button?.buttonAction }),
        I = () => b(m.i.USER_DISMISS),
        N =
            _.button?.copy != null
                ? {
                      text: _.button.copy,
                      variant: "expressive",
                      onClick: (0, s.h)({
                          buttonAction: _.button.buttonAction,
                          deeplinkSection: _.button.deeplinkSection,
                          applicationId: _.button.navigableStorefrontApplicationId?.value,
                          onClose: I,
                      }),
                      icon: g,
                  }
                : void 0,
        y = (0, c.C)(_.helpArticle, _.helpArticleId),
        E = null != y ? { text: y.linkText, link: y.url } : void 0,
        S = {
            targetElementRef: n,
            title: _.header,
            body: _.body,
            textLink: E,
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
