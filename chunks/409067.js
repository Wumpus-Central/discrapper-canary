(n.d(t, { ad: () => h, kD: () => E, uu: () => A }), n(321073));
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
function h(e) {
    let t = (0, s.yK)([o.Ay], () => Object.values(o.Ay.getClips())),
        n = (0, s.yK)([o.Ay], () => o.Ay.getPendingMontageClips()),
        r = (0, s.yK)([o.Ay], () => o.Ay.getNewClipIds()),
        h = (0, c.P)(),
        I = (0, s.bG)([o.Ay], () => o.Ay.getSettings().showPovClipsInGallery),
        f = (0, s.bG)([l.default], () => l.default.getCurrentUser()?.id);
    return i.useMemo(() => {
        let i = [...n, ...(I ? t : t.filter((e) => !E(e)))],
            s = null != e ? i.filter(e) : i,
            l = new Set(r),
            o = [],
            c = new Map(),
            p = new Map(),
            T = new Map(),
            m = { allClips: 0, autoClips: 0, favorites: 0 },
            g = new Map(),
            S = { allClips: 0, autoClips: 0, favorites: 0 };
        for (let e of s) {
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
                })(e, h) && o.push(e),
                (m.allClips += 1),
                "auto" === e.clipMethod && (m.autoClips += 1),
                e.isFavorite && (m.favorites += 1),
                l.has(e.id) &&
                    ((S.allClips += 1),
                    "auto" === e.clipMethod && (S.autoClips += 1),
                    e.isFavorite && (S.favorites += 1),
                    null != e.applicationId && g.set(e.applicationId, (g.get(e.applicationId) ?? 0) + 1)),
                null != e.applicationId)
            ) {
                let t = c.get(e.applicationId);
                null == t ? c.set(e.applicationId, { name: e.applicationName, count: 1 }) : (t.count += 1);
            }
            for (let t of e.users) t !== f && p.set(t, (p.get(t) ?? 0) + 1);
            let t = e.decision?.signal?.type === u.Gy.DISTRIBUTED ? e.decision.signal : null;
            if (null != t && t.remoteTriggerUserId !== f) {
                let e = t.remoteTriggerUserId;
                T.set(e, (T.get(e) ?? 0) + 1);
            }
        }
        let N = A(o, h.sortOrder),
            C = N.length,
            O = null != h.gameFacet,
            R = null != h.clippedWithFacet,
            L = Array.from(c.entries())
                .map((e) => {
                    let [t, { name: n, count: i }] = e,
                        r = h.gameFacet === t;
                    return {
                        key: t,
                        name: n,
                        count: r ? C : i,
                        isSelected: r,
                        isDisabled: !1,
                        newCount: g.get(t) ?? 0,
                    };
                })
                .sort((e, t) => e.name.toLowerCase().localeCompare(t.name.toLowerCase())),
            y = Array.from(p.entries())
                .map((e) => {
                    let [t, n] = e,
                        i = h.clippedWithFacet === t;
                    return { key: t, name: t, count: i ? C : n, isSelected: i, isDisabled: !1, newCount: 0 };
                })
                .sort((e, t) => {
                    let n = p.get(e.key) ?? 0,
                        i = p.get(t.key) ?? 0;
                    return n !== i ? i - n : e.key.localeCompare(t.key);
                }),
            D = Array.from(T.entries())
                .map((e) => {
                    let [t, n] = e,
                        i = h.clippedWithFacet === t;
                    return { key: t, name: t, count: i ? C : n, isSelected: i, isDisabled: !1, newCount: 0 };
                })
                .sort((e, t) => {
                    let n = T.get(e.key) ?? 0,
                        i = T.get(t.key) ?? 0;
                    return n !== i ? i - n : e.key.localeCompare(t.key);
                }),
            v = !O && !R;
        return {
            allClips: s,
            filteredClips: N,
            gamesFacet: L,
            participantsFacet: y,
            distributedClipInitiatorsFacet: D,
            mainLinkCounts: {
                allClips: v && h.activeMainLink === d.oH.ALL_CLIPS ? C : m.allClips,
                autoClips: v && h.activeMainLink === d.oH.AUTO_CLIPS ? C : m.autoClips,
                favorites: v && h.activeMainLink === d.oH.FAVORITES ? C : m.favorites,
            },
            mainLinkNewCounts: S,
        };
    }, [t, n, r, h, f, I, e]);
}
