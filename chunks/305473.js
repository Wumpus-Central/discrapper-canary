l.d(t, { Z: () => s });
var n = l(200651);
l(192379);
var a = l(528011),
    i = l(533244),
    o = l(596482);
function s(e) {
    let { guild: t } = e,
        { shouldShowIncidentActions: l, incidentData: s, isUnderLockdown: r } = (0, a.mI)(t.id),
        c = !1;
    return (null != s && (c = (0, i.i9)(s) && l), c || r)
        ? (0, n.jsx)(o.Z, {
              guild: t,
              incidentData: s,
              isUnderLockdown: r,
              isRaidDetected: c
          })
        : null;
}
