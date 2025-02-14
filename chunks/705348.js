n.d(t, { Z: () => c });
var i = n(200651);
n(192379);
var l = n(324262),
    r = n(63063),
    a = n(981631),
    s = n(921944),
    o = n(388032),
    d = n(157476);
function c(e) {
    let { guild: t, markAsDismissed: n } = e;
    return (0, i.jsx)(l.Z, {
        image: d,
        guild: t,
        onDismissed: () => n(s.L.UNKNOWN),
        onClick: () => {
            open(r.Z.getArticleURL(a.BhN.CONNECTION_DETAILS)), n(s.L.UNKNOWN);
        },
        title: o.intl.string(o.t.YMgaJi),
        message: o.intl.string(o.t['AV/9eX']),
        cta: o.intl.string(o.t.hvVgAQ),
        trackingSource: a.PsQ.LINKED_ROLES_ADMIN_NUX,
        type: a.vID.LINKED_ROLES_ADMIN
    });
}
