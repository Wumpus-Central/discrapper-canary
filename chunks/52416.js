"use strict";
n.d(t, { A: () => f });
var i = n(627968),
    r = n(64700),
    s = n(877624),
    a = n(338854),
    o = n(43105),
    l = n(59318),
    u = n(549996),
    c = n(498470),
    d = n(807098),
    _ = n(637706),
    h = n(49999);
function f(e) {
    let { children: t, targetElementRef: n, dismissPopover: f } = e,
        p = (0, u.c)(s.C.PREMIUM_TAB_POPOVER),
        E =
            null != p && "premiumTabPopover" === p.properties.properties.oneofKind
                ? p.properties.properties.premiumTabPopover
                : null,
        m = (0, d.T)(E?.asset),
        g = r.useMemo(() => null != m && (0, l.r1)(m), [m]);
    if (null == E) return t;
    let { icon: A } = (0, c.x)({ buttonAction: E.button?.buttonAction }),
        I = () => f(h.i.USER_DISMISS),
        T =
            E.button?.copy != null
                ? {
                      text: E.button.copy,
                      variant: "expressive",
                      onClick: (0, c.h)({
                          buttonAction: E.button.buttonAction,
                          deeplinkSection: E.button.deeplinkSection,
                          applicationId: E.button.navigableStorefrontApplicationId?.value,
                          onClose: I,
                      }),
                      icon: A,
                  }
                : void 0,
        S = (0, _.C)(E.helpArticle, E.helpArticleId),
        y = null != S ? { text: S.linkText, link: S.url } : void 0,
        C = {
            targetElementRef: n,
            title: E.header,
            body: E.body,
            textLink: y,
            position: "right",
            alignmentStrategy: "edge",
            align: "top",
            caretConfig: { align: "start" },
            onRequestClose: I,
        };
    if (g) {
        let e = { ...C, assetUrl: m ?? "", action: T, disableMediaViewer: !0 };
        return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)("div", { children: t }), (0, i.jsx)(a.H, { ...e })] });
    }
    let N = {
        ...C,
        graphic: null != m ? { type: "image", src: m, aspectRatio: "16/9" } : void 0,
        size: "md",
        actions: null != T ? [T] : void 0,
        gradientColor: "nitro-pink",
    };
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)("div", { children: t }), (0, i.jsx)(o.A, { ...N })] });
}
