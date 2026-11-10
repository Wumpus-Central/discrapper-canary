var o = n(477900),
    l = n(582128),
    a = n(877624),
    r = n(554146),
    i = n(206248),
    d = n(43105),
    s = n(273185),
    u = n(549996),
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
                N = (0, u.c)(a.C.PREMIUM_TAB_POPOVER),
                T =
                    null != N && "premiumTabPopover" === N.properties.properties.oneofKind
                        ? N.properties.properties.premiumTabPopover
                        : null,
                E = (0, c.T)(T?.asset),
                g = l.useMemo(() => null != E && (0, s.r1)(E), [E]),
                S = N?.id,
                y = N?.promotionId;
            if (null == T || null == N || null == S || null == y) return t;
            let O = N.getFormatVariableValues(I.intl.currentLocale),
                R = (0, b.n)(T.header, O);
            if (!R.ok) return t;
            let h = (0, b.d)(T.body, O);
            if (!h.ok) return t;
            let C = (0, b.n)(T.button?.copy ?? "", O);
            if (!C.ok) return t;
            let v = (0, o.jsx)(_.A, {
                    componentType: a.C.PREMIUM_TAB_POPOVER,
                    componentId: S,
                    promotionId: y,
                    dismissibleContent: r.M.PREMIUM_MARKETING_MOMENT_REMINDER_UPSELL,
                }),
                { icon: P, iconPosition: M } = (0, p.x)({ buttonAction: T.button?.buttonAction });
            function L() {
                return f(A.i.USER_DISMISS);
            }
            let x =
                    null != T.button
                        ? {
                              text: C.content,
                              variant: "expressive",
                              onClick: (0, p.h)({
                                  buttonAction: T.button.buttonAction,
                                  deeplinkSection: T.button.deeplinkSection,
                                  applicationId: T.button.navigableStorefrontApplicationId?.value,
                                  shopCollectionId: T.button.shopCollectionId?.value,
                                  onClose: L,
                              }),
                              icon: P,
                              iconPosition: M,
                          }
                        : void 0,
                G = (0, m.C)(T.helpArticle, T.helpArticleId),
                U = null != G ? { text: G.linkText, link: G.url } : void 0,
                B = {
                    targetElementRef: n,
                    title: R.content,
                    body: h.content,
                    textLink: U,
                    position: "right",
                    alignmentStrategy: "edge",
                    align: "top",
                    caretConfig: { align: "start" },
                    onRequestClose: L,
                };
            if (g) {
                let e = { ...B, assetUrl: E ?? "", action: x, disableMediaViewer: !0 };
                return (0, o.jsxs)(o.Fragment, {
                    children: [v, (0, o.jsx)("div", { children: t }), (0, o.jsx)(i.H, { ...e })],
                });
            }
            let D = {
                ...B,
                graphic: null != E ? { type: "image", src: E, aspectRatio: "16/9" } : void 0,
                size: "md",
                actions: null != x ? [x] : void 0,
                gradientColor: "nitro-pink",
            };
            return (0, o.jsxs)(o.Fragment, {
                children: [v, (0, o.jsx)("div", { children: t }), (0, o.jsx)(d.A, { ...D })],
            });
        },
    },
);
