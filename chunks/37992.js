n.d(t, { A: () => p });
var i = n(627968),
    l = n(64700),
    s = n(554146),
    a = n(397927),
    r = n(367727),
    o = n(954571),
    d = n(635995),
    c = n(88001),
    u = n(652215),
    h = n(49999),
    A = n(466919),
    _ = n(985018),
    m = n(375043);
function p(e) {
    let { premiumSubscription: t } = e,
        p = t?.id,
        g = l.useCallback(() => {
            null != p && (0, r.qr)(s.M.PREMIUM_GROUP_PRIMARY_REMINDER_NAGBAR, p, { dismissAction: h.i.USER_DISMISS });
        }, [p]),
        f = l.useCallback(() => {
            g(), o.default.track(u.HAw.APP_NOTICE_CLOSED, { notice_type: u.kqX.PREMIUM_GROUP_PRIMARY_REMINDER_NAGBAR });
        }, [g]),
        E = l.useCallback(() => {
            null != t &&
                (o.default.track(u.HAw.APP_NOTICE_PRIMARY_CTA_OPENED, {
                    notice_type: u.kqX.PREMIUM_GROUP_PRIMARY_REMINDER_NAGBAR,
                }),
                g(),
                (0, a.mMO)(async () => {
                    let { default: e } = await n.e("73987").then(n.bind(n, 773486));
                    return (n) => (0, i.jsx)(e, { ...n, subscription: t });
                }));
        }, [t, g]);
    return (0, i.jsxs)(d.T0, {
        onClick: f,
        className: m.A,
        children: [
            (0, i.jsx)(a.tvc, { color: a.LU0.colors.ICON_STRONG }),
            (0, i.jsx)(d.In, { children: _.intl.format(A.default.fFt9bd, { premiumGroupProductName: (0, c.DP)() }) }),
            (0, i.jsx)(a.Button, {
                onClick: E,
                text: _.intl.string(A.default["5fZHp3"]),
                size: "sm",
                variant: "overlay-primary",
            }),
        ],
    });
}
