n.d(t, { A: () => f });
var o = n(477900),
    l = n(582128),
    a = n(877624),
    r = n(554146),
    i = n(28863),
    d = n(501419),
    s = n(174459),
    p = n(549996),
    u = n(498470),
    c = n(637706),
    b = n(788883),
    m = n(635995),
    A = n(652215),
    _ = n(49999);
function f() {
    let e = (0, p.c)(a.C.NAGBAR),
        t = e?.properties.properties.oneofKind === "nagbar" ? e.properties.properties.nagbar : null,
        n = e?.id,
        f = e?.promotionId,
        I = l.useCallback(
            (e) => {
                null != f &&
                    (0, d.qr)(r.M.PREMIUM_MARKETING_MOMENT_NAGBAR_UPSELL, f, { dismissAction: e, forceTrack: !0 });
            },
            [f],
        ),
        T = l.useCallback(() => {
            (s.default.track(A.HAw.APP_NOTICE_CLOSED, { notice_type: A.kqX.PREMIUM_MARKETING_NAGBAR }),
                I(_.i.USER_DISMISS));
        }, [I]),
        N = l.useRef(null);
    if (
        (l.useEffect(() => {
            null == t ||
                null == f ||
                (N.current !== f &&
                    ((N.current = f), (0, d.Wx)(r.M.PREMIUM_MARKETING_MOMENT_NAGBAR_UPSELL, { snowflakeId: f })));
        }, [t, f]),
        null == t || null == n || null == f)
    )
        return null;
    let g = (0, u.h)({
            buttonAction: t.ctaAction,
            deeplinkSection: t.deeplinkSection,
            applicationId: t.navigableStorefrontApplicationId?.value,
            onClose: () => {
                I(_.i.TAKE_ACTION);
            },
        }),
        E = (0, c.C)(t.helpArticle, ""),
        { icon: y, iconPosition: S } = (0, u.x)({ buttonAction: t.ctaAction });
    return (0, o.jsxs)(o.Fragment, {
        children: [
            (0, o.jsx)(b.A, {
                componentType: a.C.NAGBAR,
                componentId: n,
                promotionId: f,
                dismissibleContent: r.M.PREMIUM_MARKETING_MOMENT_NAGBAR_UPSELL,
            }),
            (0, o.jsxs)(m.T0, {
                onClick: T,
                children: [
                    (0, o.jsxs)(m.In, {
                        children: [
                            t.body,
                            null != E &&
                                (0, o.jsxs)(o.Fragment, {
                                    children: ["\xa0", (0, o.jsx)(i.Anchor, { href: E.url, children: E.linkText })],
                                }),
                        ],
                    }),
                    "" !== t.ctaLabel &&
                        (0, o.jsx)(m.fY, {
                            text: t.ctaLabel,
                            onClick: function () {
                                (s.default.track(A.HAw.APP_NOTICE_PRIMARY_CTA_OPENED, {
                                    notice_type: A.kqX.PREMIUM_MARKETING_NAGBAR,
                                }),
                                    g());
                            },
                            icon: y,
                            iconPosition: S,
                        }),
                ],
            }),
        ],
    });
}
