n.d(t, {
    Z: function () {
        return d;
    }
});
var i = n(200651);
n(192379);
var r = n(324262),
    l = n(63063),
    a = n(981631),
    s = n(921944),
    o = n(388032),
    c = n(157476);
function d(e) {
    let { guild: t, markAsDismissed: n } = e;
    return (0, i.jsx)(r.Z, {
        image: c,
        guild: t,
        onDismissed: () => n(s.L.UNKNOWN),
        onClick: () => {
            open(l.Z.getArticleURL(a.BhN.CONNECTION_DETAILS)), n(s.L.UNKNOWN);
        },
        title: o.intl.string(o.t.YMgaJi),
        message: o.intl.string(o.t['AV/9eX']),
        cta: o.intl.string(o.t.hvVgAQ),
        trackingSource: a.PsQ.LINKED_ROLES_ADMIN_NUX,
        type: a.vID.LINKED_ROLES_ADMIN
    });
}
