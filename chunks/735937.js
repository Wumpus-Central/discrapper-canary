n.d(t, {
    A: () => a,
});
var r = n(627968);
n(64700);
var l = n(585510),
    i = n(903093),
    o = n(976715);

function a(e) {
    let { guild: t } = e,
        { shouldShowIncidentActions: n, incidentData: a, isUnderLockdown: s } = (0, l.Li)(t.id),
        c = !1;
    return (null != a && (c = (0, i.k$)(a) && n), c || s)
        ? (0, r.jsx)(o.A, {
              guild: t,
              incidentData: a,
              isUnderLockdown: s,
              isRaidDetected: c,
          })
        : null;
}
