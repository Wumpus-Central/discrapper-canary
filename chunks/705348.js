n.d(t, { Z: () => u });
var r = n(200651);
n(192379);
var i = n(324262),
    l = n(63063),
    o = n(981631),
    a = n(921944),
    s = n(388032),
    c = n(157476);
function u(e) {
    let { guild: t, markAsDismissed: n } = e;
    return (0, r.jsx)(i.Z, {
        image: c,
        guild: t,
        onDismissed: () => n(a.L.UNKNOWN),
        onClick: () => {
            open(l.Z.getArticleURL(o.BhN.CONNECTION_DETAILS)), n(a.L.UNKNOWN);
        },
        title: s.NW.string(s.t.YMgaJi),
        message: s.NW.string(s.t['AV/9eX']),
        cta: s.NW.string(s.t.hvVgAQ),
        trackingSource: o.PsQ.LINKED_ROLES_ADMIN_NUX,
        type: o.vID.LINKED_ROLES_ADMIN
    });
}
