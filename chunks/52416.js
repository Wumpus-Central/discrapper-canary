var o = n(477900),
    l = n(582128),
    a = n(517352),
    r = n(554146),
    i = n(206248),
    d = n(43105),
    s = n(273185),
    u = n(641436),
    p = n(498470),
    c = n(807098),
    b = n(92551),
    m = n(637706),
    _ = n(788883),
    A = n(49999),
    I = n(792996);
n.d(
    t,
    {},
    {
        A: function (e) {
            let { children: t, targetElementRef: n, dismissPopover: f } = e,
                N = (0, u.u)(a.oW.PREMIUM_TAB_POPOVER),
                T = (0, c.T)(N?.surface.asset),
                E = l.useMemo(() => null != T && (0, s.r1)(T), [T]);
            if (null == N) return t;
            let { surface: g, id: S, promotionId: y, componentType: O } = N,
                R = N.getFormatVariableValues(I.intl.currentLocale),
                h = (0, b.n)(g.header, R);
            if (!h.ok) return t;
            let C = (0, b.d)(g.body, R);
            if (!C.ok) return t;
            let v = (0, b.n)(g.button?.copy ?? "", R);
            if (!v.ok) return t;
            let P = (0, o.jsx)(_.A, {
                    componentType: O,
                    componentId: S,
                    promotionId: y,
                    dismissibleContent: r.M.PREMIUM_MARKETING_MOMENT_REMINDER_UPSELL,
                }),
                { icon: M, iconPosition: L } = (0, p.x)({ buttonAction: g.button?.buttonAction });
            function x() {
                return f(A.i.USER_DISMISS);
            }
            let G =
                    null != g.button
                        ? {
                              text: v.content,
                              variant: "expressive",
                              onClick: (0, p.h)({
                                  buttonAction: g.button.buttonAction,
                                  deeplinkSection: g.button.deeplinkSection,
                                  applicationId: g.button.navigableStorefrontApplicationId?.value,
                                  shopCollectionId: g.button.shopCollectionId?.value,
                                  onClose: x,
                              }),
                              icon: M,
                              iconPosition: L,
                          }
                        : void 0,
                U = (0, m.C)(g.helpArticle, g.helpArticleId),
                B = null != U ? { text: U.linkText, link: U.url } : void 0,
                D = {
                    targetElementRef: n,
                    title: h.content,
                    body: C.content,
                    textLink: B,
                    position: "right",
                    alignmentStrategy: "edge",
                    align: "top",
                    caretConfig: { align: "start" },
                    onRequestClose: x,
                };
            if (E) {
                let e = { ...D, assetUrl: T ?? "", action: G, disableMediaViewer: !0 };
                return (0, o.jsxs)(o.Fragment, {
                    children: [P, (0, o.jsx)("div", { children: t }), (0, o.jsx)(i.H, { ...e })],
                });
            }
            let k = {
                ...D,
                graphic: null != T ? { type: "image", src: T, aspectRatio: "16/9" } : void 0,
                size: "md",
                actions: null != G ? [G] : void 0,
                gradientColor: "nitro-pink",
            };
            return (0, o.jsxs)(o.Fragment, {
                children: [P, (0, o.jsx)("div", { children: t }), (0, o.jsx)(d.A, { ...k })],
            });
        },
    },
);
