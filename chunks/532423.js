n.d(t, { A: () => _ });
var i = n(627968),
    l = n(64700),
    s = n(877624),
    a = n(554146),
    r = n(367727),
    o = n(954571),
    d = n(549996),
    c = n(498470),
    u = n(635995),
    h = n(652215),
    A = n(49999);
function _() {
    let e = (0, d.c)(s.C.NAGBAR),
        t = e?.properties.properties.oneofKind === "nagbar" ? e.properties.properties.nagbar : null,
        n = e?.promotionId,
        _ = l.useCallback(() => {
            null != n && (0, r.qr)(a.M.PREMIUM_MARKETING_MOMENT_NAGBAR_UPSELL, n, { dismissAction: A.i.USER_DISMISS });
        }, [n]),
        m = l.useCallback(() => {
            o.default.track(h.HAw.APP_NOTICE_CLOSED, { notice_type: h.kqX.PREMIUM_MARKETING_NAGBAR }), _();
        }, [_]);
    if (null == t) return null;
    let g = (0, c.h)({ buttonAction: t.ctaAction, onClose: _ });
    return (0, i.jsxs)(u.T0, {
        onClick: m,
        children: [
            (0, i.jsx)(u.In, { children: t.body }),
            "" !== t.ctaLabel &&
                (0, i.jsx)(u.fY, {
                    text: t.ctaLabel,
                    onClick: () => {
                        o.default.track(h.HAw.APP_NOTICE_PRIMARY_CTA_OPENED, {
                            notice_type: h.kqX.PREMIUM_MARKETING_NAGBAR,
                        }),
                            g();
                    },
                }),
        ],
    });
}
