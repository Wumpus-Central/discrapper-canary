n.d(t, { ad: () => h, kD: () => E, uu: () => A }), n(321073);
var i = n(582128),
    r = n(91871),
    a = n.n(r),
    s = n(17928),
    l = n(287809),
    o = n(915725),
    d = n(111994),
    c = n(792852),
    u = n(696016);
let _ = new Set();
function E(e) {
    return e.decision?.signal?.type === u.Gy.DISTRIBUTED;
}
function A(e, t) {
    return t === d.mu.OLDEST
        ? e.sort((e, t) => e.createdAt - t.createdAt)
        : e.sort((e, t) => t.createdAt - e.createdAt);
}
function h() {
    let e = (0, s.yK)([o.Ay], () => Object.values(o.Ay.getClips())),
        t = (0, s.yK)([o.Ay], () => o.Ay.getPendingMontageClips()),
        n = (0, s.yK)([o.Ay], () => o.Ay.getNewClipIds()),
        r = (0, c.P)(),
        h = (0, s.bG)([o.Ay], () => o.Ay.getSettings().showPovClipsInGallery),
        I = (0, s.bG)([l.default], () => l.default.getCurrentUser()?.id);
    return i.useMemo(() => {
        let i = [...t, ...(h ? e : e.filter((e) => !E(e)))],
            s = new Set(n),
            l = [],
            o = new Map(),
            c = new Map(),
            f = new Map(),
            p = { allClips: 0, autoClips: 0, favorites: 0 },
            T = new Map(),
            m = { allClips: 0, autoClips: 0, favorites: 0 };
        for (let e of i) {
            if (
                ((function (e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : _;
                    if (
                        (!n.has(0) &&
                            ((t.activeMainLink === d.oH.AUTO_CLIPS && "auto" !== e.clipMethod) ||
                                (t.activeMainLink === d.oH.FAVORITES && !e.isFavorite))) ||
                        (!n.has(1) && null != t.gameFacet && e.applicationId !== t.gameFacet)
                    )
                        return !1;
                    if (!n.has(2) && null != t.clippedWithFacet) {
                        let n = e.decision?.signal;
                        if (n?.type !== u.Gy.DISTRIBUTED || n.remoteTriggerUserId !== t.clippedWithFacet) return !1;
                    }
                    if (
                        !n.has(3) &&
                        t.selectedGameIds.size > 0 &&
                        (null == e.applicationId || !t.selectedGameIds.has(e.applicationId))
                    )
                        return !1;
                    if (!n.has(4) && t.selectedUserIds.size > 0) {
                        for (let n of t.selectedUserIds) if (!e.users.includes(n)) return !1;
                    }
                    if (
                        (!n.has(5) && null != t.selectedGuildId && e.guildId !== t.selectedGuildId) ||
                        (!n.has(6) &&
                            null != t.selectedActivity &&
                            e.activity?.state !== t.selectedActivity &&
                            e.activity?.details !== t.selectedActivity)
                    )
                        return !1;
                    if (!n.has(7) && null != t.dateFilter) {
                        let { after: n, before: i } = t.dateFilter;
                        if ((null != n && e.createdAt < n) || (null != i && e.createdAt > i)) return !1;
                    }
                    if (
                        !n.has(8) &&
                        (("auto" === t.clipMethodFilter && "auto" !== e.clipMethod) ||
                            ("manual" === t.clipMethodFilter && "manual" !== e.clipMethod))
                    )
                        return !1;
                    if (!n.has(9)) {
                        let n = t.query.trim();
                        if ("" !== n) {
                            let t = n.toLowerCase(),
                                i = null != e.name && a()(t, e.name.toLowerCase()),
                                r = a()(t, e.applicationName.toLowerCase()),
                                s = e.activity?.state != null && a()(t, e.activity.state.toLowerCase()),
                                l = e.activity?.details != null && a()(t, e.activity.details.toLowerCase());
                            if (!i && !r && !s && !l) return !1;
                        }
                    }
                    return !0;
                })(e, r) && l.push(e),
                (p.allClips += 1),
                "auto" === e.clipMethod && (p.autoClips += 1),
                e.isFavorite && (p.favorites += 1),
                s.has(e.id) &&
                    ((m.allClips += 1),
                    "auto" === e.clipMethod && (m.autoClips += 1),
                    e.isFavorite && (m.favorites += 1),
                    null != e.applicationId && T.set(e.applicationId, (T.get(e.applicationId) ?? 0) + 1)),
                null != e.applicationId)
            ) {
                let t = o.get(e.applicationId);
                null == t ? o.set(e.applicationId, { name: e.applicationName, count: 1 }) : (t.count += 1);
            }
            for (let t of e.users) t !== I && c.set(t, (c.get(t) ?? 0) + 1);
            let t = e.decision?.signal?.type === u.Gy.DISTRIBUTED ? e.decision.signal : null;
            if (null != t && t.remoteTriggerUserId !== I) {
                let e = t.remoteTriggerUserId;
                f.set(e, (f.get(e) ?? 0) + 1);
            }
        }
        let g = A(l, r.sortOrder),
            S = g.length,
            N = null != r.gameFacet,
            C = null != r.clippedWithFacet,
            O = Array.from(o.entries())
                .map((e) => {
                    let [t, { name: n, count: i }] = e,
                        a = r.gameFacet === t;
                    return {
                        key: t,
                        name: n,
                        count: a ? S : i,
                        isSelected: a,
                        isDisabled: !1,
                        newCount: T.get(t) ?? 0,
                    };
                })
                .sort((e, t) => e.name.toLowerCase().localeCompare(t.name.toLowerCase())),
            R = Array.from(c.entries())
                .map((e) => {
                    let [t, n] = e,
                        i = r.clippedWithFacet === t;
                    return { key: t, name: t, count: i ? S : n, isSelected: i, isDisabled: !1, newCount: 0 };
                })
                .sort((e, t) => {
                    let n = c.get(e.key) ?? 0,
                        i = c.get(t.key) ?? 0;
                    return n !== i ? i - n : e.key.localeCompare(t.key);
                }),
            L = Array.from(f.entries())
                .map((e) => {
                    let [t, n] = e,
                        i = r.clippedWithFacet === t;
                    return { key: t, name: t, count: i ? S : n, isSelected: i, isDisabled: !1, newCount: 0 };
                })
                .sort((e, t) => {
                    let n = f.get(e.key) ?? 0,
                        i = f.get(t.key) ?? 0;
                    return n !== i ? i - n : e.key.localeCompare(t.key);
                }),
            y = !N && !C;
        return {
            allClips: i,
            filteredClips: g,
            gamesFacet: O,
            participantsFacet: R,
            distributedClipInitiatorsFacet: L,
            mainLinkCounts: {
                allClips: y && r.activeMainLink === d.oH.ALL_CLIPS ? S : p.allClips,
                autoClips: y && r.activeMainLink === d.oH.AUTO_CLIPS ? S : p.autoClips,
                favorites: y && r.activeMainLink === d.oH.FAVORITES ? S : p.favorites,
            },
            mainLinkNewCounts: m,
        };
    }, [e, t, n, r, I, h]);
}
