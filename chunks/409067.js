"use strict";
n.d(t, { a: () => _, u: () => d }), n(321073);
var i = n(64700),
    r = n(91871),
    s = n.n(r),
    a = n(989349),
    o = n.n(a),
    l = n(17928),
    u = n(274372),
    c = n(792852);
function d(e, t) {
    return "ascending" === t
        ? e.sort((e, t) => e.createdAt - t.createdAt)
        : "descending" === t
          ? e.sort((e, t) => t.createdAt - e.createdAt)
          : e;
}
function _() {
    let e = (0, l.yK)([u.A], () => u.A.getClips()),
        t = (0, l.bG)([u.A], () => u.A.getPendingClips()),
        n = (0, c.Pu)();
    return i.useMemo(() => {
        let i = [...t, ...e],
            r = new Map(),
            a = [];
        for (let e of i) {
            let t = (function (e, t) {
                if (t.selectedUserIds.size > 0 && !Array.from(t.selectedUserIds).every((t) => e.users.includes(t)))
                    return !1;
                if ("" !== t.query.trim()) {
                    let n = t.query.toLowerCase(),
                        i = null != e.name && s()(n, e.name.toLowerCase()),
                        r = s()(n, e.applicationName.toLowerCase()),
                        a = e.activity?.state != null && s()(n, e.activity.state.toLowerCase()),
                        o = e.activity?.details != null && s()(n, e.activity.details.toLowerCase());
                    if (!i && !r && !a && !o) return !1;
                }
                if (null !== t.selectedGuildId && e.guildId !== t.selectedGuildId) return !1;
                if (null !== t.selectedActivity) {
                    let n = e.activity?.state,
                        i = e.activity?.details;
                    if (n !== t.selectedActivity && i !== t.selectedActivity) return !1;
                }
                return (null === t.selectedYear || o()(e.createdAt).year() === t.selectedYear) && !0;
            })(e, n);
            if ((t && a.push(e), null == e.applicationId)) continue;
            let i = r.get(e.applicationId);
            null == i
                ? r.set(e.applicationId, {
                      clips: [e],
                      filteredClips: t ? [e] : [],
                      mostRecentClipCreatedAt: e.createdAt,
                      name: e.applicationName,
                  })
                : (i.clips.push(e),
                  t && i.filteredClips.push(e),
                  e.createdAt > i.mostRecentClipCreatedAt && (i.mostRecentClipCreatedAt = e.createdAt));
        }
        let l = d(a, n.sortOrder),
            u = d(
                a.filter((e) => e.isFavorite),
                n.sortOrder,
            );
        return {
            clipsByGame: Array.from(r.entries())
                .map((e) => {
                    let [t, i] = e;
                    return {
                        applicationId: t,
                        name: i.name,
                        count: i.filteredClips.length,
                        mostRecentClipCreatedAt: i.mostRecentClipCreatedAt,
                        filteredClips: d(i.filteredClips, n.sortOrder),
                    };
                })
                .sort((e, t) => t.mostRecentClipCreatedAt - e.mostRecentClipCreatedAt),
            allClips: i,
            filteredClips: l,
            favoriteClips: u,
        };
    }, [e, t, n]);
}
