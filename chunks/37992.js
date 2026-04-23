"use strict";
n.d(t, { A: () => g });
var i = n(627968),
    r = n(64700),
    l = n(554146);
if (21552 == n.j) var s = n(192308);
if (21552 == n.j) var a = n(403581);
if (21552 == n.j) var o = n(827734);
if (21552 == n.j) var c = n(821609);
var u = n(367727),
    d = n(954571),
    _ = n(635995),
    E = n(88001),
    A = n(652215),
    m = n(49999),
    I = n(466919),
    T = n(985018),
    N = n(375043);
function g(e) {
    let { premiumSubscription: t } = e,
        g = t?.id,
        p = r.useCallback(() => {
            null != g && (0, u.qr)(l.M.PREMIUM_GROUP_PRIMARY_REMINDER_NAGBAR, g, { dismissAction: m.i.USER_DISMISS });
        }, [g]),
        C = r.useCallback(() => {
            p(), d.default.track(A.HAw.APP_NOTICE_CLOSED, { notice_type: A.kqX.PREMIUM_GROUP_PRIMARY_REMINDER_NAGBAR });
        }, [p]),
        f = r.useCallback(() => {
            null != t &&
                (d.default.track(A.HAw.APP_NOTICE_PRIMARY_CTA_OPENED, {
                    notice_type: A.kqX.PREMIUM_GROUP_PRIMARY_REMINDER_NAGBAR,
                }),
                p(),
                (0, s.openModalLazy)(async () => {
                    let { default: e } = await n.e("73987").then(n.bind(n, 773486));
                    return (n) => (0, i.jsx)(e, { ...n, subscription: t });
                }));
        }, [t, p]);
    return (0, i.jsxs)(_.T0, {
        onClick: C,
        className: N.A,
        children: [
            (0, i.jsx)(a.t, { color: o.A.colors.ICON_STRONG }),
            (0, i.jsx)(_.In, { children: T.intl.format(I.default.fFt9bd, { premiumGroupProductName: (0, E.DP)() }) }),
            (0, i.jsx)(c.$, {
                onClick: f,
                text: T.intl.string(I.default["5fZHp3"]),
                size: "sm",
                variant: "overlay-primary",
            }),
        ],
    });
}
