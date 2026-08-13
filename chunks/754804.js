n.d(t, { A: () => R });
var i = n(477900),
    l = n(582128),
    c = n(877624),
    r = n(554146),
    a = n(349288),
    s = n(367727),
    o = n(174459),
    _ = n(549996),
    T = n(498470),
    A = n(637706),
    E = n(635995),
    u = n(652215),
    I = n(49999);
function R() {
    let e = (0, _.c)(c.C.NAGBAR),
        t = e?.properties.properties.oneofKind === "nagbar" ? e.properties.properties.nagbar : null,
        n = e?.promotionId,
        R = l.useCallback(
            (e) => {
                null != n &&
                    (0, s.qr)(r.M.PREMIUM_MARKETING_MOMENT_NAGBAR_UPSELL, n, { dismissAction: e, forceTrack: !0 });
            },
            [n],
        ),
        N = l.useCallback(() => {
            o.default.track(u.HAw.APP_NOTICE_CLOSED, { notice_type: u.kqX.PREMIUM_MARKETING_NAGBAR }),
                R(I.i.USER_DISMISS);
        }, [R]),
        d = l.useRef(null);
    if (
        (l.useEffect(() => {
            null == t ||
                null == n ||
                (d.current !== n &&
                    ((d.current = n), (0, s.Wx)(r.M.PREMIUM_MARKETING_MOMENT_NAGBAR_UPSELL, { snowflakeId: n })));
        }, [t, n]),
        null == t)
    )
        return null;
    let O = (0, T.h)({
            buttonAction: t.ctaAction,
            deeplinkSection: t.deeplinkSection,
            applicationId: t.navigableStorefrontApplicationId?.value,
            onClose: () => {
                R(I.i.TAKE_ACTION);
            },
        }),
        p = (0, A.C)(t.helpArticle, "");
    return (0, i.jsxs)(E.T0, {
        onClick: N,
        children: [
            (0, i.jsxs)(E.In, {
                children: [
                    t.body,
                    null != p &&
                        (0, i.jsxs)(i.Fragment, {
                            children: ["\xa0", (0, i.jsx)(a.Anchor, { href: p.url, children: p.linkText })],
                        }),
                ],
            }),
            "" !== t.ctaLabel &&
                (0, i.jsx)(E.fY, {
                    text: t.ctaLabel,
                    onClick: function () {
                        o.default.track(u.HAw.APP_NOTICE_PRIMARY_CTA_OPENED, {
                            notice_type: u.kqX.PREMIUM_MARKETING_NAGBAR,
                        }),
                            O();
                    },
                }),
        ],
    });
}
