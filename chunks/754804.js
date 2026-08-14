n.d(t, { A: () => N });
var i = n(477900),
    l = n(582128),
    c = n(877624),
    r = n(554146),
    s = n(349288),
    o = n(367727),
    a = n(174459),
    _ = n(549996),
    A = n(498470),
    T = n(637706),
    E = n(788883),
    I = n(635995),
    u = n(652215),
    R = n(49999);
function N() {
    let e = (0, _.c)(c.C.NAGBAR),
        t = e?.properties.properties.oneofKind === "nagbar" ? e.properties.properties.nagbar : null,
        n = e?.id,
        N = e?.promotionId,
        d = l.useCallback(
            (e) => {
                null != N &&
                    (0, o.qr)(r.M.PREMIUM_MARKETING_MOMENT_NAGBAR_UPSELL, N, { dismissAction: e, forceTrack: !0 });
            },
            [N],
        ),
        O = l.useCallback(() => {
            a.default.track(u.HAw.APP_NOTICE_CLOSED, { notice_type: u.kqX.PREMIUM_MARKETING_NAGBAR }),
                d(R.i.USER_DISMISS);
        }, [d]),
        p = l.useRef(null);
    if (
        (l.useEffect(() => {
            null == t ||
                null == N ||
                (p.current !== N &&
                    ((p.current = N), (0, o.Wx)(r.M.PREMIUM_MARKETING_MOMENT_NAGBAR_UPSELL, { snowflakeId: N })));
        }, [t, N]),
        null == t || null == n || null == N)
    )
        return null;
    let M = (0, A.h)({
            buttonAction: t.ctaAction,
            deeplinkSection: t.deeplinkSection,
            applicationId: t.navigableStorefrontApplicationId?.value,
            onClose: () => {
                d(R.i.TAKE_ACTION);
            },
        }),
        P = (0, T.C)(t.helpArticle, "");
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(E.A, {
                componentType: c.C.NAGBAR,
                componentId: n,
                promotionId: N,
                dismissibleContent: r.M.PREMIUM_MARKETING_MOMENT_NAGBAR_UPSELL,
            }),
            (0, i.jsxs)(I.T0, {
                onClick: O,
                children: [
                    (0, i.jsxs)(I.In, {
                        children: [
                            t.body,
                            null != P &&
                                (0, i.jsxs)(i.Fragment, {
                                    children: ["\xa0", (0, i.jsx)(s.Anchor, { href: P.url, children: P.linkText })],
                                }),
                        ],
                    }),
                    "" !== t.ctaLabel &&
                        (0, i.jsx)(I.fY, {
                            text: t.ctaLabel,
                            onClick: function () {
                                a.default.track(u.HAw.APP_NOTICE_PRIMARY_CTA_OPENED, {
                                    notice_type: u.kqX.PREMIUM_MARKETING_NAGBAR,
                                }),
                                    M();
                            },
                        }),
                ],
            }),
        ],
    });
}
