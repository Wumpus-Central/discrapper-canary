l.d(t, { a: () => p }), l(321073);
var i = l(64700),
    s = l(91871),
    a = l.n(s),
    n = l(989349),
    r = l.n(n),
    d = l(311907),
    c = l(661191),
    o = l(274372),
    u = l(792852);
function m(e, t) {
    return "ascending" === t
        ? e.sort((e, t) => e.id.localeCompare(t.id))
        : "descending" === t
          ? e.sort((e, t) => t.id.localeCompare(e.id))
          : e;
}
function p() {
    let e = (0, d.bG)([o.A], () => o.A.getClips()),
        t = (0, d.bG)([o.A], () => o.A.getPendingClips()),
        l = (0, u.P)();
    return i.useMemo(() => {
        let i = [...t, ...e],
            s = new Map(),
            n = [];
        for (let e of i) {
            let t = (function (e, t) {
                if (t.selectedUserIds.size > 0 && !Array.from(t.selectedUserIds).every((t) => e.users.includes(t)))
                    return !1;
                if ("" !== t.query.trim()) {
                    let l = t.query.toLowerCase(),
                        i = null != e.name && a()(l, e.name.toLowerCase()),
                        s = a()(l, e.applicationName.toLowerCase()),
                        n = e.activity?.state != null && a()(l, e.activity.state.toLowerCase()),
                        r = e.activity?.details != null && a()(l, e.activity.details.toLowerCase());
                    if (!i && !s && !n && !r) return !1;
                }
                if (null !== t.selectedGuildId && e.guildId !== t.selectedGuildId) return !1;
                if (null !== t.selectedActivity) {
                    let l = e.activity?.state,
                        i = e.activity?.details;
                    if (l !== t.selectedActivity && i !== t.selectedActivity) return !1;
                }
                return (
                    (null === t.selectedYear || r()(c.default.extractTimestamp(e.id)).year() === t.selectedYear) && !0
                );
            })(e, l);
            if ((t && n.push(e), null == e.applicationId)) continue;
            let i = s.get(e.applicationId);
            null == i
                ? s.set(e.applicationId, {
                      clips: [e],
                      filteredClips: t ? [e] : [],
                      mostRecentClipId: e.id,
                      name: e.applicationName,
                  })
                : (i.clips.push(e),
                  t && i.filteredClips.push(e),
                  e.id > i.mostRecentClipId && (i.mostRecentClipId = e.id));
        }
        let d = m(n, l.sortOrder),
            o = m(
                n.filter((e) => e.isFavorite),
                l.sortOrder,
            );
        return {
            clipsByGame: Array.from(s.entries())
                .map((e) => {
                    let [t, i] = e;
                    return {
                        applicationId: t,
                        name: i.name,
                        count: i.filteredClips.length,
                        mostRecentClipId: i.mostRecentClipId,
                        filteredClips: m(i.filteredClips, l.sortOrder),
                    };
                })
                .sort((e, t) => t.mostRecentClipId.localeCompare(e.mostRecentClipId)),
            allClips: i,
            filteredClips: d,
            favoriteClips: o,
        };
    }, [e, t, l]);
}
