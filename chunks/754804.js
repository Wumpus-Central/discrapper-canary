"use strict";
n.d(t, { A: () => p });
var i = n(627968),
    r = n(64700),
    s = n(877624),
    a = n(554146),
    o = n(349288),
    l = n(367727),
    u = n(174459),
    c = n(549996),
    d = n(498470),
    _ = n(637706),
    h = n(635995),
    f = n(652215),
    E = n(49999);
function p() {
    let e = (0, c.c)(s.C.NAGBAR),
        t = e?.properties.properties.oneofKind === "nagbar" ? e.properties.properties.nagbar : null,
        n = e?.promotionId,
        p = r.useCallback(
            (e) => {
                null != n &&
                    (0, l.qr)(a.M.PREMIUM_MARKETING_MOMENT_NAGBAR_UPSELL, n, { dismissAction: e, forceTrack: !0 });
            },
            [n],
        ),
        m = r.useCallback(() => {
            u.default.track(f.HAw.APP_NOTICE_CLOSED, { notice_type: f.kqX.PREMIUM_MARKETING_NAGBAR }),
                p(E.i.USER_DISMISS);
        }, [p]),
        g = r.useRef(null);
    if (
        (r.useEffect(() => {
            null == t ||
                null == n ||
                (g.current !== n &&
                    ((g.current = n), (0, l.Wx)(a.M.PREMIUM_MARKETING_MOMENT_NAGBAR_UPSELL, { snowflakeId: n })));
        }, [t, n]),
        null == t)
    )
        return null;
    let A = (0, d.h)({
            buttonAction: t.ctaAction,
            deeplinkSection: t.deeplinkSection,
            applicationId: t.navigableStorefrontApplicationId?.value,
            onClose: () => {
                p(E.i.TAKE_ACTION);
            },
        }),
        I = (0, _.C)(t.helpArticle, "");
    return (0, i.jsxs)(h.T0, {
        onClick: m,
        children: [
            (0, i.jsxs)(h.In, {
                children: [
                    t.body,
                    null != I &&
                        (0, i.jsxs)(i.Fragment, {
                            children: ["\xa0", (0, i.jsx)(o.Anchor, { href: I.url, children: I.linkText })],
                        }),
                ],
            }),
            "" !== t.ctaLabel &&
                (0, i.jsx)(h.fY, {
                    text: t.ctaLabel,
                    onClick: function () {
                        u.default.track(f.HAw.APP_NOTICE_PRIMARY_CTA_OPENED, {
                            notice_type: f.kqX.PREMIUM_MARKETING_NAGBAR,
                        }),
                            A();
                    },
                }),
        ],
    });
}
