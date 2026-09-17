t.d(n, { A: () => N });
var i = t(477900),
    l = t(582128),
    c = t(877624),
    r = t(554146),
    o = t(28863),
    s = t(367727),
    a = t(174459),
    _ = t(549996),
    A = t(498470),
    T = t(637706),
    u = t(788883),
    E = t(635995),
    I = t(652215),
    d = t(49999);
function N() {
    let e = (0, _.c)(c.C.NAGBAR),
        n = e?.properties.properties.oneofKind === "nagbar" ? e.properties.properties.nagbar : null,
        t = e?.id,
        N = e?.promotionId,
        R = l.useCallback(
            (e) => {
                null != N &&
                    (0, s.qr)(r.M.PREMIUM_MARKETING_MOMENT_NAGBAR_UPSELL, N, { dismissAction: e, forceTrack: !0 });
            },
            [N],
        ),
        O = l.useCallback(() => {
            (a.default.track(I.HAw.APP_NOTICE_CLOSED, { notice_type: I.kqX.PREMIUM_MARKETING_NAGBAR }),
                R(d.i.USER_DISMISS));
        }, [R]),
        p = l.useRef(null);
    if (
        (l.useEffect(() => {
            null == n ||
                null == N ||
                (p.current !== N &&
                    ((p.current = N), (0, s.Wx)(r.M.PREMIUM_MARKETING_MOMENT_NAGBAR_UPSELL, { snowflakeId: N })));
        }, [n, N]),
        null == n || null == t || null == N)
    )
        return null;
    let M = (0, A.h)({
            buttonAction: n.ctaAction,
            deeplinkSection: n.deeplinkSection,
            applicationId: n.navigableStorefrontApplicationId?.value,
            onClose: () => {
                R(d.i.TAKE_ACTION);
            },
        }),
        P = (0, T.C)(n.helpArticle, ""),
        { icon: f, iconPosition: C } = (0, A.x)({ buttonAction: n.ctaAction });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(u.A, {
                componentType: c.C.NAGBAR,
                componentId: t,
                promotionId: N,
                dismissibleContent: r.M.PREMIUM_MARKETING_MOMENT_NAGBAR_UPSELL,
            }),
            (0, i.jsxs)(E.T0, {
                onClick: O,
                children: [
                    (0, i.jsxs)(E.In, {
                        children: [
                            n.body,
                            null != P &&
                                (0, i.jsxs)(i.Fragment, {
                                    children: ["\xa0", (0, i.jsx)(o.Anchor, { href: P.url, children: P.linkText })],
                                }),
                        ],
                    }),
                    "" !== n.ctaLabel &&
                        (0, i.jsx)(E.fY, {
                            text: n.ctaLabel,
                            onClick: function () {
                                (a.default.track(I.HAw.APP_NOTICE_PRIMARY_CTA_OPENED, {
                                    notice_type: I.kqX.PREMIUM_MARKETING_NAGBAR,
                                }),
                                    M());
                            },
                            icon: f,
                            iconPosition: C,
                        }),
                ],
            }),
        ],
    });
}
