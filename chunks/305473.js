n.d(t, { Z: () => a });
var r = n(54381);
n(473749);
var l = n(528011),
    i = n(533244),
    o = n(596482);
function a(e) {
    let { guild: t } = e,
        { shouldShowIncidentActions: n, incidentData: a, isUnderLockdown: s } = (0, l.mI)(t.id),
        c = !1;
    return (null != a && (c = (0, i.i9)(a) && n), c || s)
        ? (0, r.jsx)(o.Z, {
              guild: t,
              incidentData: a,
              isUnderLockdown: s,
              isRaidDetected: c,
          })
        : null;
}
