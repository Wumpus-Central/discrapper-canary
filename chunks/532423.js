"use strict";
n.d(t, { A: () => A });
var i = n(627968),
    r = n(64700),
    l = n(877624),
    s = n(554146),
    a = n(367727),
    o = n(954571),
    c = n(549996),
    u = n(498470),
    d = n(635995),
    _ = n(652215),
    E = n(49999);
function A() {
    let e = (0, c.c)(l.C.NAGBAR),
        t = e?.properties.properties.oneofKind === "nagbar" ? e.properties.properties.nagbar : null,
        n = e?.promotionId,
        A = r.useCallback(() => {
            null != n && (0, a.qr)(s.M.PREMIUM_MARKETING_MOMENT_NAGBAR_UPSELL, n, { dismissAction: E.i.USER_DISMISS });
        }, [n]),
        m = r.useCallback(() => {
            o.default.track(_.HAw.APP_NOTICE_CLOSED, { notice_type: _.kqX.PREMIUM_MARKETING_NAGBAR }), A();
        }, [A]);
    if (null == t) return null;
    let I = (0, u.h)({ buttonAction: t.ctaAction, deeplinkSection: t.deeplinkSection, onClose: A });
    return (0, i.jsxs)(d.T0, {
        onClick: m,
        children: [
            (0, i.jsx)(d.In, { children: t.body }),
            "" !== t.ctaLabel &&
                (0, i.jsx)(d.fY, {
                    text: t.ctaLabel,
                    onClick: () => {
                        o.default.track(_.HAw.APP_NOTICE_PRIMARY_CTA_OPENED, {
                            notice_type: _.kqX.PREMIUM_MARKETING_NAGBAR,
                        }),
                            I();
                    },
                }),
        ],
    });
}
