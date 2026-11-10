var o = n(477900),
    l = n(582128),
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
            let e = (0, u.u)(a.oW.NAGBAR),
                t = e?.surface,
                n = e?.id,
                N = e?.promotionId,
                T = l.useCallback(
                    (e) => {
                        null != N &&
                            (0, d.qr)(r.M.PREMIUM_MARKETING_MOMENT_NAGBAR_UPSELL, N, {
                                dismissAction: e,
                                forceTrack: !0,
                            });
                    },
                    [N],
                ),
                E = l.useCallback(() => {
                    (s.default.track(A.HAw.APP_NOTICE_CLOSED, { notice_type: A.kqX.PREMIUM_MARKETING_NAGBAR }),
                        T(I.i.USER_DISMISS));
                }, [T]),
                g = l.useRef(null);
            if (
                (l.useEffect(() => {
                    null == t ||
                        null == N ||
                        (g.current !== N &&
                            ((g.current = N),
                            (0, d.Wx)(r.M.PREMIUM_MARKETING_MOMENT_NAGBAR_UPSELL, { snowflakeId: N })));
                }, [t, N]),
                null == e || null == t || null == n || null == N)
            )
                return null;
            let S = (0, p.h)({
                    buttonAction: t.ctaAction,
                    deeplinkSection: t.deeplinkSection,
                    applicationId: t.navigableStorefrontApplicationId?.value,
                    shopCollectionId: t.shopCollectionId?.value,
                    onClose: () => {
                        T(I.i.TAKE_ACTION);
                    },
                }),
                y = (0, b.C)(t.helpArticle, ""),
                { icon: O, iconPosition: R } = (0, p.x)({ buttonAction: t.ctaAction }),
                h = e.getFormatVariableValues(f.intl.currentLocale),
                C = (0, c.d)(t.body, h);
            if (!C.ok) return null;
            let v = (0, c.n)(t.ctaLabel, h);
            return v.ok
                ? (0, o.jsxs)(o.Fragment, {
                      children: [
                          (0, o.jsx)(m.A, {
                              componentType: e.componentType,
                              componentId: n,
                              promotionId: N,
                              dismissibleContent: r.M.PREMIUM_MARKETING_MOMENT_NAGBAR_UPSELL,
                          }),
                          (0, o.jsxs)(_.T0, {
                              onClick: E,
                              children: [
                                  (0, o.jsxs)(_.In, {
                                      children: [
                                          C.content,
                                          null != y &&
                                              (0, o.jsxs)(o.Fragment, {
                                                  children: [
                                                      "\xa0",
                                                      (0, o.jsx)(i.Anchor, { href: y.url, children: y.linkText }),
                                                  ],
                                              }),
                                      ],
                                  }),
                                  "" !== v.content &&
                                      (0, o.jsx)(_.fY, {
                                          text: v.content,
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
