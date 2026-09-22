t.d(n, { A: () => O });
var i = t(477900),
    c = t(582128),
    l = t(877624),
    o = t(554146),
    s = t(28863),
    r = t(367727),
    a = t(174459),
    _ = t(549996),
    T = t(498470),
    A = t(637706),
    E = t(788883),
    I = t(635995),
    u = t(652215),
    N = t(49999);
function O() {
    let e = (0, _.c)(l.C.NAGBAR),
        n = e?.properties.properties.oneofKind === "nagbar" ? e.properties.properties.nagbar : null,
        t = e?.id,
        O = e?.promotionId,
        R = c.useCallback(
            (e) => {
                null != O &&
                    (0, r.qr)(o.M.PREMIUM_MARKETING_MOMENT_NAGBAR_UPSELL, O, { dismissAction: e, forceTrack: !0 });
            },
            [O],
        ),
        d = c.useCallback(() => {
            (a.default.track(u.HAw.APP_NOTICE_CLOSED, { notice_type: u.kqX.PREMIUM_MARKETING_NAGBAR }),
                R(N.i.USER_DISMISS));
        }, [R]),
        p = c.useRef(null);
    if (
        (c.useEffect(() => {
            null == n ||
                null == O ||
                (p.current !== O &&
                    ((p.current = O), (0, r.Wx)(o.M.PREMIUM_MARKETING_MOMENT_NAGBAR_UPSELL, { snowflakeId: O })));
        }, [n, O]),
        null == n || null == t || null == O)
    )
        return null;
    let M = (0, T.h)({
            buttonAction: n.ctaAction,
            deeplinkSection: n.deeplinkSection,
            applicationId: n.navigableStorefrontApplicationId?.value,
            onClose: () => {
                R(N.i.TAKE_ACTION);
            },
        }),
        P = (0, A.C)(n.helpArticle, ""),
        { icon: C, iconPosition: b } = (0, T.x)({ buttonAction: n.ctaAction });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(E.A, {
                componentType: l.C.NAGBAR,
                componentId: t,
                promotionId: O,
                dismissibleContent: o.M.PREMIUM_MARKETING_MOMENT_NAGBAR_UPSELL,
            }),
            (0, i.jsxs)(I.T0, {
                onClick: d,
                children: [
                    (0, i.jsxs)(I.In, {
                        children: [
                            n.body,
                            null != P &&
                                (0, i.jsxs)(i.Fragment, {
                                    children: ["\xa0", (0, i.jsx)(s.Anchor, { href: P.url, children: P.linkText })],
                                }),
                        ],
                    }),
                    "" !== n.ctaLabel &&
                        (0, i.jsx)(I.fY, {
                            text: n.ctaLabel,
                            onClick: function () {
                                (a.default.track(u.HAw.APP_NOTICE_PRIMARY_CTA_OPENED, {
                                    notice_type: u.kqX.PREMIUM_MARKETING_NAGBAR,
                                }),
                                    M());
                            },
                            icon: C,
                            iconPosition: b,
                        }),
                ],
            }),
        ],
    });
}
