l.d(t, {
    a: () => m,
}),
    l(733351),
    l(638769),
    l(896048),
    l(321073);
var n = l(64700),
    r = l(91871),
    i = l.n(r),
    a = l(989349),
    s = l.n(a),
    c = l(311907),
    o = l(661191),
    u = l(274372),
    d = l(792852);

function p(e, t) {
    return "ascending" === t
        ? e.sort((e, t) => e.id.localeCompare(t.id))
        : "descending" === t
          ? e.sort((e, t) => t.id.localeCompare(e.id))
          : e;
}

function m() {
    let e = (0, c.bG)([u.A], () => u.A.getClips()),
        t = (0, c.bG)([u.A], () => u.A.getPendingClips()),
        l = (0, d.P)();
    return n.useMemo(() => {
        let n = [...t, ...e],
            r = new Map(),
            a = [];
        for (let e of n) {
            let t = (function (e, t) {
                var l, n, r, a;
                if (t.selectedUserIds.size > 0 && !Array.from(t.selectedUserIds).every((t) => e.users.includes(t)))
                    return !1;
                if ("" !== t.query.trim()) {
                    let r = t.query.toLowerCase(),
                        a = null != e.name && i()(r, e.name.toLowerCase()),
                        s = i()(r, e.applicationName.toLowerCase()),
                        c =
                            (null == (l = e.activity) ? void 0 : l.state) != null &&
                            i()(r, e.activity.state.toLowerCase()),
                        o =
                            (null == (n = e.activity) ? void 0 : n.details) != null &&
                            i()(r, e.activity.details.toLowerCase());
                    if (!a && !s && !c && !o) return !1;
                }
                if (null !== t.selectedGuildId && e.guildId !== t.selectedGuildId) return !1;
                if (null !== t.selectedActivity) {
                    let l = null == (r = e.activity) ? void 0 : r.state,
                        n = null == (a = e.activity) ? void 0 : a.details;
                    if (l !== t.selectedActivity && n !== t.selectedActivity) return !1;
                }
                return (
                    (null === t.selectedYear || s()(o.default.extractTimestamp(e.id)).year() === t.selectedYear) && !0
                );
            })(e, l);
            if ((t && a.push(e), null == e.applicationId)) continue;
            let n = r.get(e.applicationId);
            null == n
                ? r.set(e.applicationId, {
                      clips: [e],
                      filteredClips: t ? [e] : [],
                      mostRecentClipId: e.id,
                      name: e.applicationName,
                  })
                : (n.clips.push(e),
                  t && n.filteredClips.push(e),
                  e.id > n.mostRecentClipId && (n.mostRecentClipId = e.id));
        }
        let c = p(a, l.sortOrder),
            u = p(
                a.filter((e) => e.isFavorite),
                l.sortOrder,
            );
        return {
            clipsByGame: Array.from(r.entries())
                .map((e) => {
                    let [t, n] = e;
                    return {
                        applicationId: t,
                        name: n.name,
                        count: n.filteredClips.length,
                        mostRecentClipId: n.mostRecentClipId,
                        filteredClips: p(n.filteredClips, l.sortOrder),
                    };
                })
                .sort((e, t) => t.mostRecentClipId.localeCompare(e.mostRecentClipId)),
            allClips: n,
            filteredClips: c,
            favoriteClips: u,
        };
    }, [e, t, l]);
}
