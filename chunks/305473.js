n.d(t, { Z: () => a });
var r = n(200651);
n(192379);
var l = n(528011),
    o = n(533244),
    i = n(596482);
function a(e) {
    let { guild: t } = e,
        { shouldShowIncidentActions: n, incidentData: a, isUnderLockdown: s } = (0, l.mI)(t.id),
        c = !1;
    return (null != a && (c = (0, o.i9)(a) && n), c || s)
        ? (0, r.jsx)(i.Z, {
              guild: t,
              incidentData: a,
              isUnderLockdown: s,
              isRaidDetected: c
          })
        : null;
}
