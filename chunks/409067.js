"use strict";
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
        t = (0, s.yK)([o.Ay], () => o.Ay.getNewClipIds()),
        n = (0, c.P)(),
        r = (0, s.bG)([o.Ay], () => o.Ay.getSettings().showPovClipsInGallery),
        h = (0, s.bG)([l.default], () => l.default.getCurrentUser()?.id);
    return i.useMemo(() => {
        let i = r ? e : e.filter((e) => !E(e)),
            s = new Set(t),
            l = [],
            o = new Map(),
            c = new Map(),
            I = new Map(),
            f = { allClips: 0, autoClips: 0, favorites: 0 },
            p = new Map(),
            T = { allClips: 0, autoClips: 0, favorites: 0 };
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
                })(e, n) && l.push(e),
                (f.allClips += 1),
                "auto" === e.clipMethod && (f.autoClips += 1),
                e.isFavorite && (f.favorites += 1),
                s.has(e.id) &&
                    ((T.allClips += 1),
                    "auto" === e.clipMethod && (T.autoClips += 1),
                    e.isFavorite && (T.favorites += 1),
                    null != e.applicationId && p.set(e.applicationId, (p.get(e.applicationId) ?? 0) + 1)),
                null != e.applicationId)
            ) {
                let t = o.get(e.applicationId);
                null == t ? o.set(e.applicationId, { name: e.applicationName, count: 1 }) : (t.count += 1);
            }
            for (let t of e.users) t !== h && c.set(t, (c.get(t) ?? 0) + 1);
            let t = e.decision?.signal?.type === u.Gy.DISTRIBUTED ? e.decision.signal : null;
            if (null != t && t.remoteTriggerUserId !== h) {
                let e = t.remoteTriggerUserId;
                I.set(e, (I.get(e) ?? 0) + 1);
            }
        }
        let m = A(l, n.sortOrder),
            g = m.length,
            S = null != n.gameFacet,
            N = null != n.clippedWithFacet,
            C = Array.from(o.entries())
                .map((e) => {
                    let [t, { name: i, count: r }] = e,
                        a = n.gameFacet === t;
                    return {
                        key: t,
                        name: i,
                        count: a ? g : r,
                        isSelected: a,
                        isDisabled: !1,
                        newCount: p.get(t) ?? 0,
                    };
                })
                .sort((e, t) => e.name.toLowerCase().localeCompare(t.name.toLowerCase())),
            O = Array.from(c.entries())
                .map((e) => {
                    let [t, i] = e,
                        r = n.clippedWithFacet === t;
                    return { key: t, name: t, count: r ? g : i, isSelected: r, isDisabled: !1, newCount: 0 };
                })
                .sort((e, t) => {
                    let n = c.get(e.key) ?? 0,
                        i = c.get(t.key) ?? 0;
                    return n !== i ? i - n : e.key.localeCompare(t.key);
                }),
            R = Array.from(I.entries())
                .map((e) => {
                    let [t, i] = e,
                        r = n.clippedWithFacet === t;
                    return { key: t, name: t, count: r ? g : i, isSelected: r, isDisabled: !1, newCount: 0 };
                })
                .sort((e, t) => {
                    let n = I.get(e.key) ?? 0,
                        i = I.get(t.key) ?? 0;
                    return n !== i ? i - n : e.key.localeCompare(t.key);
                }),
            L = !S && !N;
        return {
            allClips: i,
            filteredClips: m,
            gamesFacet: C,
            participantsFacet: O,
            distributedClipInitiatorsFacet: R,
            mainLinkCounts: {
                allClips: L && n.activeMainLink === d.oH.ALL_CLIPS ? g : f.allClips,
                autoClips: L && n.activeMainLink === d.oH.AUTO_CLIPS ? g : f.autoClips,
                favorites: L && n.activeMainLink === d.oH.FAVORITES ? g : f.favorites,
            },
            mainLinkNewCounts: T,
        };
    }, [e, t, n, h, r]);
}
