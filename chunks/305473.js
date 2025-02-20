n.d(t, { Z: () => i });
var r = n(200651);
n(192379);
var l = n(528011),
    o = n(533244),
    a = n(596482);
function i(e) {
    let { guild: t } = e,
        { shouldShowIncidentActions: n, incidentData: i, isUnderLockdown: s } = (0, l.mI)(t.id),
        c = !1;
    return (null != i && (c = (0, o.i9)(i) && n), c || s)
        ? (0, r.jsx)(a.Z, {
              guild: t,
              incidentData: i,
              isUnderLockdown: s,
              isRaidDetected: c
          })
        : null;
}
