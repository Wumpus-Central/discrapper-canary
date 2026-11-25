var l = n(477900),
    o = n(582128),
    a = n(517352),
    r = n(554146),
    i = n(28863),
    d = n(403581),
    s = n(543862),
    u = n(430783),
    p = n(129230),
    c = n(641436),
    b = n(498470),
    _ = n(92551),
    m = n(637706),
    I = n(788883),
    A = n(635995),
    f = n(652215),
    E = n(49999),
    N = n(792996);
n.d(
    t,
    {},
    {
        A: function () {
            let e = (0, c.uF)(a.oW.NAGBAR),
                t = e?.surface,
                n = e?.id,
                T = e?.promotionId,
                g = o.useCallback(
                    (e) => {
                        null != T &&
                            (0, s.qr)(r.M.PREMIUM_MARKETING_MOMENT_NAGBAR_UPSELL, T, {
                                dismissAction: e,
                                forceTrack: !0,
                            });
                    },
                    [T],
                ),
                S = o.useCallback(() => {
                    (p.default.track(f.HAw.APP_NOTICE_CLOSED, { notice_type: f.kqX.PREMIUM_MARKETING_NAGBAR }),
                        g(E.i.USER_DISMISS));
                }, [g]),
                y = o.useRef(null);
            if (
                (o.useEffect(() => {
                    null == t ||
                        null == T ||
                        (y.current !== T &&
                            ((y.current = T),
                            (0, s.Wx)(r.M.PREMIUM_MARKETING_MOMENT_NAGBAR_UPSELL, { snowflakeId: T })));
                }, [t, T]),
                null == e || null == t || null == n || null == T)
            )
                return null;
            let O = (0, b.h)({
                    buttonAction: t.ctaAction,
                    deeplinkSection: t.deeplinkSection,
                    applicationId: t.navigableStorefrontApplicationId?.value,
                    shopCollectionId: t.shopCollectionId?.value,
                    giftModalDestination: t.giftModalDestination,
                    onClose: () => {
                        g(E.i.TAKE_ACTION);
                    },
                }),
                R = (0, m.C)(t.helpArticle, ""),
                { icon: M, iconPosition: C } = (0, b.x)({ buttonAction: t.ctaAction }),
                P = e.getFormatVariableValues(N.intl.currentLocale),
                h = (0, _.d)(t.body, P);
            if (!h.ok) return null;
            let v = (0, _.n)(t.ctaLabel, P);
            if (!v.ok) return null;
            let D = (0, l.jsxs)(A.T0, {
                    onClick: S,
                    children: [
                        (0, l.jsxs)(A.In, {
                            children: [
                                h.content,
                                null != R &&
                                    (0, l.jsxs)(l.Fragment, {
                                        children: [
                                            "\xa0",
                                            (0, l.jsx)(i.Anchor, {
                                                href: R.url,
                                                onClick: () => (0, u.Ux)(f.kqX.PREMIUM_MARKETING_NAGBAR, R.url),
                                                children: R.linkText,
                                            }),
                                        ],
                                    }),
                            ],
                        }),
                        "" !== v.content &&
                            (0, l.jsx)(A.fY, {
                                text: v.content,
                                onClick: function () {
                                    (p.default.track(f.HAw.APP_NOTICE_PRIMARY_CTA_OPENED, {
                                        notice_type: f.kqX.PREMIUM_MARKETING_NAGBAR,
                                    }),
                                        O());
                                },
                                icon: M,
                                iconPosition: C,
                            }),
                    ],
                }),
                L =
                    null == R
                        ? void 0
                        : { text: R.linkText, href: R.url, target: "_blank", rel: "noreferrer noopener" };
            return (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsx)(I.A, {
                        componentType: e.componentType,
                        componentId: n,
                        promotionId: T,
                        dismissibleContent: r.M.PREMIUM_MARKETING_MOMENT_NAGBAR_UPSELL,
                    }),
                    (0, l.jsx)(u.qg, {
                        noticeType: f.kqX.PREMIUM_MARKETING_NAGBAR,
                        variant: "promotion",
                        type: "nitro",
                        message: h.content,
                        link: L,
                        primaryAction:
                            "" !== v.content ? { text: v.content, icon: M ?? d.NitroWheelIcon, onClick: O } : void 0,
                        onDismiss: () => g(E.i.USER_DISMISS),
                        legacy: D,
                    }),
                ],
            });
        },
    },
);
