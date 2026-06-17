"use strict";
n.d(t, { ad: () => p, kD: () => h, uu: () => f }), n(321073);
var i = n(64700),
    r = n(91871),
    s = n.n(r),
    a = n(17928),
    o = n(287809),
    l = n(274372),
    u = n(372684),
    c = n(111994),
    d = n(792852);
let _ = new Set();
function h(e) {
    return e.decision?.signal?.type === u.Gy.DISTRIBUTED;
}
function f(e, t) {
    return t === c.mu.OLDEST
        ? e.sort((e, t) => e.createdAt - t.createdAt)
        : e.sort((e, t) => t.createdAt - e.createdAt);
}
function p() {
    let e = (0, a.yK)([l.Ay], () => Object.values(l.Ay.getClips())),
        t = (0, a.yK)([l.Ay], () => l.Ay.getNewClipIds()),
        n = (0, d.P)(),
        r = (0, a.bG)([l.Ay], () => l.Ay.getSettings().showPovClipsInGallery),
        p = (0, a.bG)([o.default], () => o.default.getCurrentUser()?.id);
    return i.useMemo(() => {
        let i = r ? e : e.filter((e) => !h(e)),
            a = new Set(t),
            o = [],
            l = new Map(),
            d = new Map(),
            E = new Map(),
            m = { allClips: 0, autoClips: 0, favorites: 0 },
            g = new Map(),
            A = { allClips: 0, autoClips: 0, favorites: 0 };
        for (let e of i) {
            if (
                ((function (e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : _;
                    if (
                        (!n.has(0) &&
                            ((t.activeMainLink === c.oH.AUTO_CLIPS && "auto" !== e.clipMethod) ||
                                (t.activeMainLink === c.oH.FAVORITES && !e.isFavorite))) ||
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
                                i = null != e.name && s()(t, e.name.toLowerCase()),
                                r = s()(t, e.applicationName.toLowerCase()),
                                a = e.activity?.state != null && s()(t, e.activity.state.toLowerCase()),
                                o = e.activity?.details != null && s()(t, e.activity.details.toLowerCase());
                            if (!i && !r && !a && !o) return !1;
                        }
                    }
                    return !0;
                })(e, n) && o.push(e),
                (m.allClips += 1),
                "auto" === e.clipMethod && (m.autoClips += 1),
                e.isFavorite && (m.favorites += 1),
                a.has(e.id) &&
                    ((A.allClips += 1),
                    "auto" === e.clipMethod && (A.autoClips += 1),
                    e.isFavorite && (A.favorites += 1),
                    null != e.applicationId && g.set(e.applicationId, (g.get(e.applicationId) ?? 0) + 1)),
                null != e.applicationId)
            ) {
                let t = l.get(e.applicationId);
                null == t ? l.set(e.applicationId, { name: e.applicationName, count: 1 }) : (t.count += 1);
            }
            for (let t of e.users) t !== p && d.set(t, (d.get(t) ?? 0) + 1);
            let t = e.decision?.signal?.type === u.Gy.DISTRIBUTED ? e.decision.signal : null;
            if (null != t && t.remoteTriggerUserId !== p) {
                let e = t.remoteTriggerUserId;
                E.set(e, (E.get(e) ?? 0) + 1);
            }
        }
        let I = f(o, n.sortOrder),
            T = I.length,
            S = null != n.gameFacet,
            y = null != n.clippedWithFacet,
            C = Array.from(l.entries())
                .map((e) => {
                    let [t, { name: i, count: r }] = e,
                        s = n.gameFacet === t;
                    return {
                        key: t,
                        name: i,
                        count: s ? T : r,
                        isSelected: s,
                        isDisabled: !1,
                        newCount: g.get(t) ?? 0,
                    };
                })
                .sort((e, t) => e.name.toLowerCase().localeCompare(t.name.toLowerCase())),
            N = Array.from(d.entries())
                .map((e) => {
                    let [t, i] = e,
                        r = n.clippedWithFacet === t;
                    return { key: t, name: t, count: r ? T : i, isSelected: r, isDisabled: !1, newCount: 0 };
                })
                .sort((e, t) => {
                    let n = d.get(e.key) ?? 0,
                        i = d.get(t.key) ?? 0;
                    return n !== i ? i - n : e.key.localeCompare(t.key);
                }),
            v = Array.from(E.entries())
                .map((e) => {
                    let [t, i] = e,
                        r = n.clippedWithFacet === t;
                    return { key: t, name: t, count: r ? T : i, isSelected: r, isDisabled: !1, newCount: 0 };
                })
                .sort((e, t) => {
                    let n = E.get(e.key) ?? 0,
                        i = E.get(t.key) ?? 0;
                    return n !== i ? i - n : e.key.localeCompare(t.key);
                }),
            R = !S && !y;
        return {
            allClips: i,
            filteredClips: I,
            gamesFacet: C,
            participantsFacet: N,
            distributedClipInitiatorsFacet: v,
            mainLinkCounts: {
                allClips: R && n.activeMainLink === c.oH.ALL_CLIPS ? T : m.allClips,
                autoClips: R && n.activeMainLink === c.oH.AUTO_CLIPS ? T : m.autoClips,
                favorites: R && n.activeMainLink === c.oH.FAVORITES ? T : m.favorites,
            },
            mainLinkNewCounts: A,
        };
    }, [e, t, n, p, r]);
}
