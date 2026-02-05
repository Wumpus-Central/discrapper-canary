l.d(t, { A: () => r });
var n = l(627968);
l(64700);
var i = l(585510),
    s = l(903093),
    a = l(976715);
function r(e) {
    let { guild: t } = e,
        { shouldShowIncidentActions: l, incidentData: r, isUnderLockdown: o } = (0, i.Li)(t.id),
        C = !1;
    return (null != r && (C = (0, s.k$)(r) && l), C || o)
        ? (0, n.jsx)(a.A, { guild: t, incidentData: r, isUnderLockdown: o, isRaidDetected: C })
        : null;
}
