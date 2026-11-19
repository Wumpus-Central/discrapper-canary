var l = n(477900),
    o = n(582128),
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
                E = (0, u.uF)(a.oW.PREMIUM_TAB_POPOVER),
                N = (0, c.T)(E?.surface.asset),
                T = o.useMemo(() => null != N && (0, s.r1)(N), [N]);
            if (null == E) return t;
            let { surface: g, id: S, promotionId: y, componentType: O } = E,
                R = E.getFormatVariableValues(I.intl.currentLocale),
                M = (0, b.n)(g.header, R);
            if (!M.ok) return t;
            let C = (0, b.d)(g.body, R);
            if (!C.ok) return t;
            let P = (0, b.n)(g.button?.copy ?? "", R);
            if (!P.ok) return t;
            let h = (0, l.jsx)(_.A, {
                    componentType: O,
                    componentId: S,
                    promotionId: y,
                    dismissibleContent: r.M.PREMIUM_MARKETING_MOMENT_REMINDER_UPSELL,
                }),
                { icon: v, iconPosition: L } = (0, p.x)({ buttonAction: g.button?.buttonAction });
            function D() {
                return f(A.i.USER_DISMISS);
            }
            let U =
                    null != g.button
                        ? {
                              text: P.content,
                              variant: "expressive",
                              onClick: (0, p.h)({
                                  buttonAction: g.button.buttonAction,
                                  deeplinkSection: g.button.deeplinkSection,
                                  applicationId: g.button.navigableStorefrontApplicationId?.value,
                                  shopCollectionId: g.button.shopCollectionId?.value,
                                  giftModalDestination: g.button.giftModalDestination,
                                  onClose: D,
                              }),
                              icon: v,
                              iconPosition: L,
                          }
                        : void 0,
                G = (0, m.C)(g.helpArticle, g.helpArticleId),
                x = null != G ? { text: G.linkText, link: G.url } : void 0,
                B = {
                    targetElementRef: n,
                    title: M.content,
                    body: C.content,
                    textLink: x,
                    position: "right",
                    alignmentStrategy: "edge",
                    align: "top",
                    caretConfig: { align: "start" },
                    onRequestClose: D,
                };
            if (T) {
                let e = { ...B, assetUrl: N ?? "", action: U, disableMediaViewer: !0 };
                return (0, l.jsxs)(l.Fragment, {
                    children: [h, (0, l.jsx)("div", { children: t }), (0, l.jsx)(i.H, { ...e })],
                });
            }
            let F = {
                ...B,
                graphic: null != N ? { type: "image", src: N, aspectRatio: "16/9" } : void 0,
                size: "md",
                actions: null != U ? [U] : void 0,
                gradientColor: "nitro-pink",
            };
            return (0, l.jsxs)(l.Fragment, {
                children: [h, (0, l.jsx)("div", { children: t }), (0, l.jsx)(d.A, { ...F })],
            });
        },
    },
);
