l.d(t, { a: () => m }), l(321073);
var n = l(64700),
    a = l(91871),
    i = l.n(a),
    s = l(989349),
    r = l.n(s),
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
    return n.useMemo(() => {
        let n = [...t, ...e],
            a = new Map(),
            s = [];
        for (let e of n) {
            let t = (function (e, t) {
                if (t.selectedUserIds.size > 0 && !Array.from(t.selectedUserIds).every((t) => e.users.includes(t)))
                    return !1;
                if ("" !== t.query.trim()) {
                    let l = t.query.toLowerCase(),
                        n = null != e.name && i()(l, e.name.toLowerCase()),
                        a = i()(l, e.applicationName.toLowerCase()),
                        s = e.activity?.state != null && i()(l, e.activity.state.toLowerCase()),
                        r = e.activity?.details != null && i()(l, e.activity.details.toLowerCase());
                    if (!n && !a && !s && !r) return !1;
                }
                if (null !== t.selectedGuildId && e.guildId !== t.selectedGuildId) return !1;
                if (null !== t.selectedActivity) {
                    let l = e.activity?.state,
                        n = e.activity?.details;
                    if (l !== t.selectedActivity && n !== t.selectedActivity) return !1;
                }
                return (null === t.selectedYear || r()(e.createdAt).year() === t.selectedYear) && !0;
            })(e, l);
            if ((t && s.push(e), null == e.applicationId)) continue;
            let n = a.get(e.applicationId);
            null == n
                ? a.set(e.applicationId, {
                      clips: [e],
                      filteredClips: t ? [e] : [],
                      mostRecentClipCreatedAt: e.createdAt,
                      name: e.applicationName,
                  })
                : (n.clips.push(e),
                  t && n.filteredClips.push(e),
                  e.createdAt > n.mostRecentClipCreatedAt && (n.mostRecentClipCreatedAt = e.createdAt));
        }
        let d = u(s, l.sortOrder),
            o = u(
                s.filter((e) => e.isFavorite),
                l.sortOrder,
            );
        return {
            clipsByGame: Array.from(a.entries())
                .map((e) => {
                    let [t, n] = e;
                    return {
                        applicationId: t,
                        name: n.name,
                        count: n.filteredClips.length,
                        mostRecentClipCreatedAt: n.mostRecentClipCreatedAt,
                        filteredClips: u(n.filteredClips, l.sortOrder),
                    };
                })
                .sort((e, t) => t.mostRecentClipCreatedAt - e.mostRecentClipCreatedAt),
            allClips: n,
            filteredClips: d,
            favoriteClips: o,
        };
    }, [e, t, l]);
}
