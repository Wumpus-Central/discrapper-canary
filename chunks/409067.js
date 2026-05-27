l.d(t, { a: () => m, u: () => u }), l(321073);
var i = l(64700),
    a = l(91871),
    s = l.n(a),
    n = l(989349),
    r = l.n(n),
    d = l(17928),
    c = l(274372),
    o = l(792852);
function u(e, t) {
    return "ascending" === t
        ? e.sort((e, t) => e.createdAt - t.createdAt)
        : "descending" === t
          ? e.sort((e, t) => t.createdAt - e.createdAt)
          : e;
}
function m() {
    let e = (0, d.yK)([c.A], () => c.A.getClips()),
        t = (0, d.bG)([c.A], () => c.A.getPendingClips()),
        l = (0, o.Pu)();
    return i.useMemo(() => {
        let i = [...t, ...e],
            a = new Map(),
            n = [];
        for (let e of i) {
            let t = (function (e, t) {
                if (t.selectedUserIds.size > 0 && !Array.from(t.selectedUserIds).every((t) => e.users.includes(t)))
                    return !1;
                if ("" !== t.query.trim()) {
                    let l = t.query.toLowerCase(),
                        i = null != e.name && s()(l, e.name.toLowerCase()),
                        a = s()(l, e.applicationName.toLowerCase()),
                        n = e.activity?.state != null && s()(l, e.activity.state.toLowerCase()),
                        r = e.activity?.details != null && s()(l, e.activity.details.toLowerCase());
                    if (!i && !a && !n && !r) return !1;
                }
                if (null !== t.selectedGuildId && e.guildId !== t.selectedGuildId) return !1;
                if (null !== t.selectedActivity) {
                    let l = e.activity?.state,
                        i = e.activity?.details;
                    if (l !== t.selectedActivity && i !== t.selectedActivity) return !1;
                }
                return (null === t.selectedYear || r()(e.createdAt).year() === t.selectedYear) && !0;
            })(e, l);
            if ((t && n.push(e), null == e.applicationId)) continue;
            let i = a.get(e.applicationId);
            null == i
                ? a.set(e.applicationId, {
                      clips: [e],
                      filteredClips: t ? [e] : [],
                      mostRecentClipCreatedAt: e.createdAt,
                      name: e.applicationName,
                  })
                : (i.clips.push(e),
                  t && i.filteredClips.push(e),
                  e.createdAt > i.mostRecentClipCreatedAt && (i.mostRecentClipCreatedAt = e.createdAt));
        }
        let d = u(n, l.sortOrder),
            c = u(
                n.filter((e) => e.isFavorite),
                l.sortOrder,
            );
        return {
            clipsByGame: Array.from(a.entries())
                .map((e) => {
                    let [t, i] = e;
                    return {
                        applicationId: t,
                        name: i.name,
                        count: i.filteredClips.length,
                        mostRecentClipCreatedAt: i.mostRecentClipCreatedAt,
                        filteredClips: u(i.filteredClips, l.sortOrder),
                    };
                })
                .sort((e, t) => t.mostRecentClipCreatedAt - e.mostRecentClipCreatedAt),
            allClips: i,
            filteredClips: d,
            favoriteClips: c,
        };
    }, [e, t, l]);
}
