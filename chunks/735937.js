l.d(t, { A: () => C });
var n = l(627968);
l(64700);
var i = l(585510),
    a = l(903093),
    s = l(976715);
function C(e) {
    let { guild: t } = e,
        { shouldShowIncidentActions: l, incidentData: C, isUnderLockdown: r } = (0, i.Li)(t.id),
        o = !1;
    return (null != C && (o = (0, a.k$)(C) && l), o || r)
        ? (0, n.jsx)(s.A, { guild: t, incidentData: C, isUnderLockdown: r, isRaidDetected: o })
        : null;
}
