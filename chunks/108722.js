n.d(t, { A: () => c });
var i = n(627968);
n(64700);
var a = n(926466),
    r = n(975571),
    l = n(652215),
    s = n(49999),
    o = n(985018),
    d = n(183292);
function c(e) {
    let { guild: t, markAsDismissed: n } = e;
    return (0, i.jsx)(a.A, {
        image: d,
        guild: t,
        onDismissed: () => n(s.i.UNKNOWN),
        onClick: () => {
            open(r.A.getArticleURL(l.MVz.CONNECTION_DETAILS)), n(s.i.UNKNOWN);
        },
        title: o.intl.string(o.t.YMgaJt),
        message: o.intl.string(o.t["AV/9eW"]),
        cta: o.intl.string(o.t.hvVgAZ),
        trackingSource: l.kZU.LINKED_ROLES_ADMIN_NUX,
        type: l.n5X.LINKED_ROLES_ADMIN,
    });
}
