n.d(t, { A: () => p });
var i = n(627968),
    a = n(64700),
    s = n(877624),
    r = n(554146),
    l = n(349288),
    c = n(367727),
    o = n(174459),
    d = n(549996),
    u = n(498470),
    m = n(637706),
    A = n(635995),
    g = n(652215),
    N = n(49999);
function p() {
    let e = (0, d.c)(s.C.NAGBAR),
        t = e?.properties.properties.oneofKind === "nagbar" ? e.properties.properties.nagbar : null,
        n = e?.promotionId,
        p = a.useCallback(
            (e) => {
                null != n &&
                    (0, c.qr)(r.M.PREMIUM_MARKETING_MOMENT_NAGBAR_UPSELL, n, { dismissAction: e, forceTrack: !0 });
            },
            [n],
        ),
        f = a.useCallback(() => {
            o.default.track(g.HAw.APP_NOTICE_CLOSED, { notice_type: g.kqX.PREMIUM_MARKETING_NAGBAR }),
                p(N.i.USER_DISMISS);
        }, [p]),
        E = a.useRef(null);
    if (
        (a.useEffect(() => {
            null == t ||
                null == n ||
                (E.current !== n &&
                    ((E.current = n), (0, c.Wx)(r.M.PREMIUM_MARKETING_MOMENT_NAGBAR_UPSELL, { snowflakeId: n })));
        }, [t, n]),
        null == t)
    )
        return null;
    let x = (0, u.h)({
            buttonAction: t.ctaAction,
            deeplinkSection: t.deeplinkSection,
            applicationId: t.navigableStorefrontApplicationId?.value,
            onClose: () => {
                p(N.i.TAKE_ACTION);
            },
        }),
        h = (0, m.C)(t.helpArticle, "");
    return (0, i.jsxs)(A.T0, {
        onClick: f,
        children: [
            (0, i.jsxs)(A.In, {
                children: [
                    t.body,
                    null != h &&
                        (0, i.jsxs)(i.Fragment, {
                            children: ["\xa0", (0, i.jsx)(l.Anchor, { href: h.url, children: h.linkText })],
                        }),
                ],
            }),
            "" !== t.ctaLabel &&
                (0, i.jsx)(A.fY, {
                    text: t.ctaLabel,
                    onClick: function () {
                        o.default.track(g.HAw.APP_NOTICE_PRIMARY_CTA_OPENED, {
                            notice_type: g.kqX.PREMIUM_MARKETING_NAGBAR,
                        }),
                            x();
                    },
                }),
        ],
    });
}
