n.d(t, { A: () => T });
var o = n(477900),
    l = n(582128),
    a = n(877624),
    r = n(554146),
    i = n(28863),
    d = n(501419),
    s = n(174459),
    u = n(549996),
    p = n(498470),
    c = n(92551),
    b = n(637706),
    m = n(788883),
    _ = n(635995),
    A = n(652215),
    f = n(49999),
    I = n(105292);
function T() {
    let e = (0, u.c)(a.C.NAGBAR),
        t = e?.properties.properties.oneofKind === "nagbar" ? e.properties.properties.nagbar : null,
        n = e?.id,
        T = e?.promotionId,
        N = l.useCallback(
            (e) => {
                null != T &&
                    (0, d.qr)(r.M.PREMIUM_MARKETING_MOMENT_NAGBAR_UPSELL, T, { dismissAction: e, forceTrack: !0 });
            },
            [T],
        ),
        g = l.useCallback(() => {
            (s.default.track(A.HAw.APP_NOTICE_CLOSED, { notice_type: A.kqX.PREMIUM_MARKETING_NAGBAR }),
                N(f.i.USER_DISMISS));
        }, [N]),
        E = l.useRef(null);
    if (
        (l.useEffect(() => {
            null == t ||
                null == T ||
                (E.current !== T &&
                    ((E.current = T), (0, d.Wx)(r.M.PREMIUM_MARKETING_MOMENT_NAGBAR_UPSELL, { snowflakeId: T })));
        }, [t, T]),
        null == e || null == t || null == n || null == T)
    )
        return null;
    let y = (0, p.h)({
            buttonAction: t.ctaAction,
            deeplinkSection: t.deeplinkSection,
            applicationId: t.navigableStorefrontApplicationId?.value,
            onClose: () => {
                N(f.i.TAKE_ACTION);
            },
        }),
        S = (0, b.C)(t.helpArticle, ""),
        { icon: C, iconPosition: O } = (0, p.x)({ buttonAction: t.ctaAction }),
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
                      promotionId: T,
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
                                  icon: C,
                                  iconPosition: O,
                              }),
                      ],
                  }),
              ],
          })
        : null;
}
