n.d(t, { Z: () => u });
var r = n(255367);
n(73800);
var i = n(324262),
    l = n(63063),
    a = n(981631),
    o = n(921944),
    s = n(388032),
    c = n(157476);
function u(e) {
    let { guild: t, markAsDismissed: n } = e;
    return (0, r.jsx)(i.Z, {
        image: c,
        guild: t,
        onDismissed: () => n(o.L.UNKNOWN),
        onClick: () => {
            open(l.Z.getArticleURL(a.BhN.CONNECTION_DETAILS)), n(o.L.UNKNOWN);
        },
        title: s.intl.string(s.t.YMgaJi),
        message: s.intl.string(s.t['AV/9eX']),
        cta: s.intl.string(s.t.hvVgAQ),
        trackingSource: a.PsQ.LINKED_ROLES_ADMIN_NUX,
        type: a.vID.LINKED_ROLES_ADMIN
    });
}
