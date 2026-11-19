var l = n(477900),
    o = n(582128),
    a = n(517352),
    r = n(554146),
    i = n(28863),
    d = n(543862),
    s = n(129230),
    u = n(641436),
    p = n(498470),
    c = n(92551),
    b = n(637706),
    m = n(788883),
    _ = n(635995),
    A = n(652215),
    I = n(49999),
    f = n(792996);
n.d(
    t,
    {},
    {
        A: function () {
            let e = (0, u.uF)(a.oW.NAGBAR),
                t = e?.surface,
                n = e?.id,
                E = e?.promotionId,
                N = o.useCallback(
                    (e) => {
                        null != E &&
                            (0, d.qr)(r.M.PREMIUM_MARKETING_MOMENT_NAGBAR_UPSELL, E, {
                                dismissAction: e,
                                forceTrack: !0,
                            });
                    },
                    [E],
                ),
                T = o.useCallback(() => {
                    (s.default.track(A.HAw.APP_NOTICE_CLOSED, { notice_type: A.kqX.PREMIUM_MARKETING_NAGBAR }),
                        N(I.i.USER_DISMISS));
                }, [N]),
                g = o.useRef(null);
            if (
                (o.useEffect(() => {
                    null == t ||
                        null == E ||
                        (g.current !== E &&
                            ((g.current = E),
                            (0, d.Wx)(r.M.PREMIUM_MARKETING_MOMENT_NAGBAR_UPSELL, { snowflakeId: E })));
                }, [t, E]),
                null == e || null == t || null == n || null == E)
            )
                return null;
            let S = (0, p.h)({
                    buttonAction: t.ctaAction,
                    deeplinkSection: t.deeplinkSection,
                    applicationId: t.navigableStorefrontApplicationId?.value,
                    shopCollectionId: t.shopCollectionId?.value,
                    giftModalDestination: t.giftModalDestination,
                    onClose: () => {
                        N(I.i.TAKE_ACTION);
                    },
                }),
                y = (0, b.C)(t.helpArticle, ""),
                { icon: O, iconPosition: R } = (0, p.x)({ buttonAction: t.ctaAction }),
                M = e.getFormatVariableValues(f.intl.currentLocale),
                C = (0, c.d)(t.body, M);
            if (!C.ok) return null;
            let P = (0, c.n)(t.ctaLabel, M);
            return P.ok
                ? (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)(m.A, {
                              componentType: e.componentType,
                              componentId: n,
                              promotionId: E,
                              dismissibleContent: r.M.PREMIUM_MARKETING_MOMENT_NAGBAR_UPSELL,
                          }),
                          (0, l.jsxs)(_.T0, {
                              onClick: T,
                              children: [
                                  (0, l.jsxs)(_.In, {
                                      children: [
                                          C.content,
                                          null != y &&
                                              (0, l.jsxs)(l.Fragment, {
                                                  children: [
                                                      "\xa0",
                                                      (0, l.jsx)(i.Anchor, { href: y.url, children: y.linkText }),
                                                  ],
                                              }),
                                      ],
                                  }),
                                  "" !== P.content &&
                                      (0, l.jsx)(_.fY, {
                                          text: P.content,
                                          onClick: function () {
                                              (s.default.track(A.HAw.APP_NOTICE_PRIMARY_CTA_OPENED, {
                                                  notice_type: A.kqX.PREMIUM_MARKETING_NAGBAR,
                                              }),
                                                  S());
                                          },
                                          icon: O,
                                          iconPosition: R,
                                      }),
                              ],
                          }),
                      ],
                  })
                : null;
        },
    },
);
