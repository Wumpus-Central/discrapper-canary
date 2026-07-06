n.d(t, { A: () => R });
var i = n(627968),
    l = n(64700),
    r = n(877624),
    c = n(554146),
    a = n(349288),
    s = n(367727),
    o = n(174459),
    _ = n(549996),
    u = n(498470),
    T = n(637706),
    A = n(635995),
    E = n(652215),
    I = n(49999);
function R() {
    let e = (0, _.c)(r.C.NAGBAR),
        t = e?.properties.properties.oneofKind === "nagbar" ? e.properties.properties.nagbar : null,
        n = e?.promotionId,
        R = l.useCallback(
            (e) => {
                null != n &&
                    (0, s.qr)(c.M.PREMIUM_MARKETING_MOMENT_NAGBAR_UPSELL, n, { dismissAction: e, forceTrack: !0 });
            },
            [n],
        ),
        d = l.useCallback(() => {
            o.default.track(E.HAw.APP_NOTICE_CLOSED, { notice_type: E.kqX.PREMIUM_MARKETING_NAGBAR }),
                R(I.i.USER_DISMISS);
        }, [R]),
        N = l.useRef(null);
    if (
        (l.useEffect(() => {
            null == t ||
                null == n ||
                (N.current !== n &&
                    ((N.current = n), (0, s.Wx)(c.M.PREMIUM_MARKETING_MOMENT_NAGBAR_UPSELL, { snowflakeId: n })));
        }, [t, n]),
        null == t)
    )
        return null;
    let O = (0, u.h)({
            buttonAction: t.ctaAction,
            deeplinkSection: t.deeplinkSection,
            applicationId: t.navigableStorefrontApplicationId?.value,
            onClose: () => {
                R(I.i.TAKE_ACTION);
            },
        }),
        p = (0, T.C)(t.helpArticle, "");
    return (0, i.jsxs)(A.T0, {
        onClick: d,
        children: [
            (0, i.jsxs)(A.In, {
                children: [
                    t.body,
                    null != p &&
                        (0, i.jsxs)(i.Fragment, {
                            children: ["\xa0", (0, i.jsx)(a.Anchor, { href: p.url, children: p.linkText })],
                        }),
                ],
            }),
            "" !== t.ctaLabel &&
                (0, i.jsx)(A.fY, {
                    text: t.ctaLabel,
                    onClick: function () {
                        o.default.track(E.HAw.APP_NOTICE_PRIMARY_CTA_OPENED, {
                            notice_type: E.kqX.PREMIUM_MARKETING_NAGBAR,
                        }),
                            O();
                    },
                }),
        ],
    });
}
