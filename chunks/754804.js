var o = n(477900),
    l = n(582128),
    a = n(877624),
    r = n(554146),
    i = n(28863),
    d = n(543862),
    s = n(129230),
    p = n(549996),
    u = n(498470),
    c = n(92551),
    b = n(637706),
    m = n(788883),
    _ = n(635995),
    A = n(652215),
    f = n(49999),
    I = n(792996);
n.d(
    t,
    {},
    {
        A: function () {
            let e = (0, p.c)(a.C.NAGBAR),
                t = e?.properties.properties.oneofKind === "nagbar" ? e.properties.properties.nagbar : null,
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
                g = l.useCallback(() => {
                    (s.default.track(A.HAw.APP_NOTICE_CLOSED, { notice_type: A.kqX.PREMIUM_MARKETING_NAGBAR }),
                        T(f.i.USER_DISMISS));
                }, [T]),
                E = l.useRef(null);
            if (
                (l.useEffect(() => {
                    null == t ||
                        null == N ||
                        (E.current !== N &&
                            ((E.current = N),
                            (0, d.Wx)(r.M.PREMIUM_MARKETING_MOMENT_NAGBAR_UPSELL, { snowflakeId: N })));
                }, [t, N]),
                null == e || null == t || null == n || null == N)
            )
                return null;
            let y = (0, u.h)({
                    buttonAction: t.ctaAction,
                    deeplinkSection: t.deeplinkSection,
                    applicationId: t.navigableStorefrontApplicationId?.value,
                    shopCollectionId: t.shopCollectionId?.value,
                    onClose: () => {
                        T(f.i.TAKE_ACTION);
                    },
                }),
                S = (0, b.C)(t.helpArticle, ""),
                { icon: O, iconPosition: C } = (0, u.x)({ buttonAction: t.ctaAction }),
                R = e.getFormatVariableValues(I.intl.currentLocale),
                h = (0, c.d)(t.body, R);
            if (!h.ok) return null;
            let P = (0, c.n)(t.ctaLabel, R);
            return P.ok
                ? (0, o.jsxs)(o.Fragment, {
                      children: [
                          (0, o.jsx)(m.A, {
                              componentType: a.C.NAGBAR,
                              componentId: n,
                              promotionId: N,
                              dismissibleContent: r.M.PREMIUM_MARKETING_MOMENT_NAGBAR_UPSELL,
                          }),
                          (0, o.jsxs)(_.T0, {
                              onClick: g,
                              children: [
                                  (0, o.jsxs)(_.In, {
                                      children: [
                                          h.content,
                                          null != S &&
                                              (0, o.jsxs)(o.Fragment, {
                                                  children: [
                                                      "\xa0",
                                                      (0, o.jsx)(i.Anchor, { href: S.url, children: S.linkText }),
                                                  ],
                                              }),
                                      ],
                                  }),
                                  "" !== P.content &&
                                      (0, o.jsx)(_.fY, {
                                          text: P.content,
                                          onClick: function () {
                                              (s.default.track(A.HAw.APP_NOTICE_PRIMARY_CTA_OPENED, {
                                                  notice_type: A.kqX.PREMIUM_MARKETING_NAGBAR,
                                              }),
                                                  y());
                                          },
                                          icon: O,
                                          iconPosition: C,
                                      }),
                              ],
                          }),
                      ],
                  })
                : null;
        },
    },
);
