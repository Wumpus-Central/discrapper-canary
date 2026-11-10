var o = n(477900),
    l = n(582128),
    a = n(877624),
    r = n(554146),
    i = n(206248),
    d = n(43105),
    s = n(273185),
    p = n(24981),
    u = n(498470),
    c = n(807098),
    b = n(92551),
    m = n(637706),
    _ = n(788883),
    A = n(49999),
    f = n(792996);
n.d(
    t,
    {},
    {
        A: function (e) {
            let { children: t, targetElementRef: n, dismissPopover: I } = e,
                N = (0, p.c)(a.C.PREMIUM_TAB_POPOVER),
                T =
                    null != N && "premiumTabPopover" === N.properties.properties.oneofKind
                        ? N.properties.properties.premiumTabPopover
                        : null,
                g = (0, c.T)(T?.asset),
                E = l.useMemo(() => null != g && (0, s.r1)(g), [g]),
                S = N?.id,
                y = N?.promotionId;
            if (null == T || null == N || null == S || null == y) return t;
            let C = N.getFormatVariableValues(f.intl.currentLocale),
                O = (0, b.n)(T.header, C);
            if (!O.ok) return t;
            let h = (0, b.d)(T.body, C);
            if (!h.ok) return t;
            let R = (0, b.n)(T.button?.copy ?? "", C);
            if (!R.ok) return t;
            let v = (0, o.jsx)(_.A, {
                    componentType: a.C.PREMIUM_TAB_POPOVER,
                    componentId: S,
                    promotionId: y,
                    dismissibleContent: r.M.PREMIUM_MARKETING_MOMENT_REMINDER_UPSELL,
                }),
                { icon: P, iconPosition: M } = (0, u.x)({ buttonAction: T.button?.buttonAction });
            function L() {
                return I(A.i.USER_DISMISS);
            }
            let x =
                    null != T.button
                        ? {
                              text: R.content,
                              variant: "expressive",
                              onClick: (0, u.h)({
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
                    title: O.content,
                    body: h.content,
                    textLink: U,
                    position: "right",
                    alignmentStrategy: "edge",
                    align: "top",
                    caretConfig: { align: "start" },
                    onRequestClose: L,
                };
            if (E) {
                let e = { ...B, assetUrl: g ?? "", action: x, disableMediaViewer: !0 };
                return (0, o.jsxs)(o.Fragment, {
                    children: [v, (0, o.jsx)("div", { children: t }), (0, o.jsx)(i.H, { ...e })],
                });
            }
            let D = {
                ...B,
                graphic: null != g ? { type: "image", src: g, aspectRatio: "16/9" } : void 0,
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
