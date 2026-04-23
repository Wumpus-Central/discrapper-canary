l.d(t, { a: () => m }), l(321073);
var a = l(64700),
    n = l(91871),
    s = l.n(n),
    i = l(989349),
    r = l.n(i),
    d = l(311907),
    o = l(274372),
    c = l(792852);
function u(e, t) {
    return "ascending" === t
        ? e.sort((e, t) => e.createdAt - t.createdAt)
        : "descending" === t
          ? e.sort((e, t) => t.createdAt - e.createdAt)
          : e;
}
function m() {
    let e = (0, d.yK)([o.A], () => o.A.getClips()),
        t = (0, d.bG)([o.A], () => o.A.getPendingClips()),
        l = (0, c.P)();
    return a.useMemo(() => {
        let a = [...t, ...e],
            n = new Map(),
            i = [];
        for (let e of a) {
            let t = (function (e, t) {
                if (t.selectedUserIds.size > 0 && !Array.from(t.selectedUserIds).every((t) => e.users.includes(t)))
                    return !1;
                if ("" !== t.query.trim()) {
                    let l = t.query.toLowerCase(),
                        a = null != e.name && s()(l, e.name.toLowerCase()),
                        n = s()(l, e.applicationName.toLowerCase()),
                        i = e.activity?.state != null && s()(l, e.activity.state.toLowerCase()),
                        r = e.activity?.details != null && s()(l, e.activity.details.toLowerCase());
                    if (!a && !n && !i && !r) return !1;
                }
                if (null !== t.selectedGuildId && e.guildId !== t.selectedGuildId) return !1;
                if (null !== t.selectedActivity) {
                    let l = e.activity?.state,
                        a = e.activity?.details;
                    if (l !== t.selectedActivity && a !== t.selectedActivity) return !1;
                }
                return (null === t.selectedYear || r()(e.createdAt).year() === t.selectedYear) && !0;
            })(e, l);
            if ((t && i.push(e), null == e.applicationId)) continue;
            let a = n.get(e.applicationId);
            null == a
                ? n.set(e.applicationId, {
                      clips: [e],
                      filteredClips: t ? [e] : [],
                      mostRecentClipCreatedAt: e.createdAt,
                      name: e.applicationName,
                  })
                : (a.clips.push(e),
                  t && a.filteredClips.push(e),
                  e.createdAt > a.mostRecentClipCreatedAt && (a.mostRecentClipCreatedAt = e.createdAt));
        }
        let d = u(i, l.sortOrder),
            o = u(
                i.filter((e) => e.isFavorite),
                l.sortOrder,
            );
        return {
            clipsByGame: Array.from(n.entries())
                .map((e) => {
                    let [t, a] = e;
                    return {
                        applicationId: t,
                        name: a.name,
                        count: a.filteredClips.length,
                        mostRecentClipCreatedAt: a.mostRecentClipCreatedAt,
                        filteredClips: u(a.filteredClips, l.sortOrder),
                    };
                })
                .sort((e, t) => t.mostRecentClipCreatedAt - e.mostRecentClipCreatedAt),
            allClips: a,
            filteredClips: d,
            favoriteClips: o,
        };
    }, [e, t, l]);
}
