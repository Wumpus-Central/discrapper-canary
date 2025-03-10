n.d(t, { Z: () => s });
var r = n(399606),
    i = n(608949),
    o = n(326660),
    l = n(618460),
    a = n(639777);
function s(e) {
    var t, n, s, c, u;
    let d = e.premiumSubscriberCount,
        p = (0, a.Z)(e),
        h = (0, r.e7)([i.Z], () => i.Z.getNotificationStateForGuild(e.id), [e.id]),
        f = (0, l.u)(e.id);
    if (!p) return;
    let g = null !== (n = null == h ? void 0 : h.lastSeenWarningNotification) && void 0 !== n ? n : Date.now(),
        m = new Date(null === (t = f[f.length - 1]) || void 0 === t ? void 0 : t.ends_at).getTime();
    return f.length > 0 && g < m
        ? {
              type: o.o.WARNING,
              endsAt: m
          }
        : d !== (null !== (s = null == h ? void 0 : h.lastBoostCount) && void 0 !== s ? s : 0) && d - (null !== (c = null == h ? void 0 : h.lastBoostCount) && void 0 !== c ? c : 0) > 0
          ? {
                type: o.o.UNREAD,
                count: d - (null !== (u = null == h ? void 0 : h.lastBoostCount) && void 0 !== u ? u : 0)
            }
          : void 0;
}
