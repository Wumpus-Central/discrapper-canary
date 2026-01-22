n.d(t, {
    A: () => u,
});
var r = n(627968);
n(64700);
var i = n(64983),
    l = n(975571),
    a = n(652215),
    s = n(49999),
    o = n(985018),
    c = n(183292);

function u(e) {
    let { guild: t, markAsDismissed: n } = e;
    return (0, r.jsx)(i.A, {
        image: c,
        guild: t,
        onDismissed: () => n(s.i.UNKNOWN),
        onClick: () => {
            open(l.A.getArticleURL(a.MVz.CONNECTION_DETAILS)), n(s.i.UNKNOWN);
        },
        title: o.intl.string(o.t.YMgaJt),
        message: o.intl.string(o.t["AV/9eW"]),
        cta: o.intl.string(o.t.hvVgAZ),
        trackingSource: a.kZU.LINKED_ROLES_ADMIN_NUX,
        type: a.n5X.LINKED_ROLES_ADMIN,
    });
}
