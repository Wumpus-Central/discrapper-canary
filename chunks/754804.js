"use strict";
n.d(t, { A: () => f });
var i = n(477900),
    r = n(582128),
    a = n(877624),
    s = n(554146),
    l = n(349288),
    o = n(367727),
    d = n(174459),
    c = n(549996),
    u = n(498470),
    _ = n(637706),
    E = n(788883),
    A = n(635995),
    h = n(652215),
    I = n(49999);
function f() {
    let e = (0, c.c)(a.C.NAGBAR),
        t = e?.properties.properties.oneofKind === "nagbar" ? e.properties.properties.nagbar : null,
        n = e?.id,
        f = e?.promotionId,
        p = r.useCallback(
            (e) => {
                null != f &&
                    (0, o.qr)(s.M.PREMIUM_MARKETING_MOMENT_NAGBAR_UPSELL, f, { dismissAction: e, forceTrack: !0 });
            },
            [f],
        ),
        T = r.useCallback(() => {
            d.default.track(h.HAw.APP_NOTICE_CLOSED, { notice_type: h.kqX.PREMIUM_MARKETING_NAGBAR }),
                p(I.i.USER_DISMISS);
        }, [p]),
        m = r.useRef(null);
    if (
        (r.useEffect(() => {
            null == t ||
                null == f ||
                (m.current !== f &&
                    ((m.current = f), (0, o.Wx)(s.M.PREMIUM_MARKETING_MOMENT_NAGBAR_UPSELL, { snowflakeId: f })));
        }, [t, f]),
        null == t || null == n || null == f)
    )
        return null;
    let g = (0, u.h)({
            buttonAction: t.ctaAction,
            deeplinkSection: t.deeplinkSection,
            applicationId: t.navigableStorefrontApplicationId?.value,
            onClose: () => {
                p(I.i.TAKE_ACTION);
            },
        }),
        S = (0, _.C)(t.helpArticle, "");
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(E.A, {
                componentType: a.C.NAGBAR,
                componentId: n,
                promotionId: f,
                dismissibleContent: s.M.PREMIUM_MARKETING_MOMENT_NAGBAR_UPSELL,
            }),
            (0, i.jsxs)(A.T0, {
                onClick: T,
                children: [
                    (0, i.jsxs)(A.In, {
                        children: [
                            t.body,
                            null != S &&
                                (0, i.jsxs)(i.Fragment, {
                                    children: ["\xa0", (0, i.jsx)(l.Anchor, { href: S.url, children: S.linkText })],
                                }),
                        ],
                    }),
                    "" !== t.ctaLabel &&
                        (0, i.jsx)(A.fY, {
                            text: t.ctaLabel,
                            onClick: function () {
                                d.default.track(h.HAw.APP_NOTICE_PRIMARY_CTA_OPENED, {
                                    notice_type: h.kqX.PREMIUM_MARKETING_NAGBAR,
                                }),
                                    g();
                            },
                        }),
                ],
            }),
        ],
    });
}
