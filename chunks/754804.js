"use strict";
n.d(t, { A: () => I });
var i = n(627968),
    r = n(64700),
    a = n(877624),
    s = n(554146),
    l = n(349288),
    o = n(367727),
    d = n(174459),
    c = n(549996),
    u = n(498470),
    _ = n(637706),
    E = n(635995),
    A = n(652215),
    h = n(49999);
function I() {
    let e = (0, c.c)(a.C.NAGBAR),
        t = e?.properties.properties.oneofKind === "nagbar" ? e.properties.properties.nagbar : null,
        n = e?.promotionId,
        I = r.useCallback(
            (e) => {
                null != n &&
                    (0, o.qr)(s.M.PREMIUM_MARKETING_MOMENT_NAGBAR_UPSELL, n, { dismissAction: e, forceTrack: !0 });
            },
            [n],
        ),
        f = r.useCallback(() => {
            d.default.track(A.HAw.APP_NOTICE_CLOSED, { notice_type: A.kqX.PREMIUM_MARKETING_NAGBAR }),
                I(h.i.USER_DISMISS);
        }, [I]),
        p = r.useRef(null);
    if (
        (r.useEffect(() => {
            null == t ||
                null == n ||
                (p.current !== n &&
                    ((p.current = n), (0, o.Wx)(s.M.PREMIUM_MARKETING_MOMENT_NAGBAR_UPSELL, { snowflakeId: n })));
        }, [t, n]),
        null == t)
    )
        return null;
    let T = (0, u.h)({
            buttonAction: t.ctaAction,
            deeplinkSection: t.deeplinkSection,
            applicationId: t.navigableStorefrontApplicationId?.value,
            onClose: () => {
                I(h.i.TAKE_ACTION);
            },
        }),
        m = (0, _.C)(t.helpArticle, "");
    return (0, i.jsxs)(E.T0, {
        onClick: f,
        children: [
            (0, i.jsxs)(E.In, {
                children: [
                    t.body,
                    null != m &&
                        (0, i.jsxs)(i.Fragment, {
                            children: ["\xa0", (0, i.jsx)(l.Anchor, { href: m.url, children: m.linkText })],
                        }),
                ],
            }),
            "" !== t.ctaLabel &&
                (0, i.jsx)(E.fY, {
                    text: t.ctaLabel,
                    onClick: function () {
                        d.default.track(A.HAw.APP_NOTICE_PRIMARY_CTA_OPENED, {
                            notice_type: A.kqX.PREMIUM_MARKETING_NAGBAR,
                        }),
                            T();
                    },
                }),
        ],
    });
}
