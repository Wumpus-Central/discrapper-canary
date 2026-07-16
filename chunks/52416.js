n.d(t, { A: () => m });
var o = n(627968),
    l = n(64700),
    a = n(877624),
    r = n(338854),
    i = n(43105),
    d = n(59318),
    s = n(549996),
    u = n(498470),
    p = n(807098),
    c = n(637706),
    b = n(49999);
function m(e) {
    let { children: t, targetElementRef: n, dismissPopover: m } = e,
        f = (0, s.c)(a.C.PREMIUM_TAB_POPOVER),
        _ =
            null != f && "premiumTabPopover" === f.properties.properties.oneofKind
                ? f.properties.properties.premiumTabPopover
                : null,
        A = (0, p.T)(_?.asset),
        T = l.useMemo(() => null != A && (0, d.r1)(A), [A]);
    if (null == _) return t;
    let { icon: g } = (0, u.x)({ buttonAction: _.button?.buttonAction });
    function I() {
        return m(b.i.USER_DISMISS);
    }
    let N =
            _.button?.copy != null
                ? {
                      text: _.button.copy,
                      variant: "expressive",
                      onClick: (0, u.h)({
                          buttonAction: _.button.buttonAction,
                          deeplinkSection: _.button.deeplinkSection,
                          applicationId: _.button.navigableStorefrontApplicationId?.value,
                          onClose: I,
                      }),
                      icon: g,
                  }
                : void 0,
        E = (0, c.C)(_.helpArticle, _.helpArticleId),
        y = null != E ? { text: E.linkText, link: E.url } : void 0,
        S = {
            targetElementRef: n,
            title: _.header,
            body: _.body,
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
