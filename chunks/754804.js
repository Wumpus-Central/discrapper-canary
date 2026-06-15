a.d(t, { A: () => p });
var s = a(627968),
    i = a(64700),
    n = a(877624),
    r = a(554146),
    l = a(349288),
    c = a(367727),
    o = a(174459),
    d = a(549996),
    u = a(498470),
    m = a(637706),
    A = a(635995),
    N = a(652215),
    g = a(49999);
function p() {
    let e = (0, d.c)(n.C.NAGBAR),
        t = e?.properties.properties.oneofKind === "nagbar" ? e.properties.properties.nagbar : null,
        a = e?.promotionId,
        p = i.useCallback(
            (e) => {
                null != a &&
                    (0, c.qr)(r.M.PREMIUM_MARKETING_MOMENT_NAGBAR_UPSELL, a, { dismissAction: e, forceTrack: !0 });
            },
            [a],
        ),
        x = i.useCallback(() => {
            o.default.track(N.HAw.APP_NOTICE_CLOSED, { notice_type: N.kqX.PREMIUM_MARKETING_NAGBAR }),
                p(g.i.USER_DISMISS);
        }, [p]),
        E = i.useRef(null);
    if (
        (i.useEffect(() => {
            null == t ||
                null == a ||
                (E.current !== a &&
                    ((E.current = a), (0, c.Wx)(r.M.PREMIUM_MARKETING_MOMENT_NAGBAR_UPSELL, { snowflakeId: a })));
        }, [t, a]),
        null == t)
    )
        return null;
    let h = (0, u.h)({
            buttonAction: t.ctaAction,
            deeplinkSection: t.deeplinkSection,
            onClose: () => {
                p(g.i.TAKE_ACTION);
            },
        }),
        f = (0, m.C)(t.helpArticle, "");
    return (0, s.jsxs)(A.T0, {
        onClick: x,
        children: [
            (0, s.jsxs)(A.In, {
                children: [
                    t.body,
                    null != f &&
                        (0, s.jsxs)(s.Fragment, {
                            children: ["\xa0", (0, s.jsx)(l.Anchor, { href: f.url, children: f.linkText })],
                        }),
                ],
            }),
            "" !== t.ctaLabel &&
                (0, s.jsx)(A.fY, {
                    text: t.ctaLabel,
                    onClick: () => {
                        o.default.track(N.HAw.APP_NOTICE_PRIMARY_CTA_OPENED, {
                            notice_type: N.kqX.PREMIUM_MARKETING_NAGBAR,
                        }),
                            h();
                    },
                }),
        ],
    });
}
