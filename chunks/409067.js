"use strict";
n.d(t, { a: () => g, u: () => f }), n(321073);
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
function h(e, t) {
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
    if (!n.has(3) && t.selectedGameIds.size > 0 && (null == e.applicationId || !t.selectedGameIds.has(e.applicationId)))
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
    if (!n.has(8)) {
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
}
function f(e, t) {
    return t === c.mu.OLDEST
        ? e.sort((e, t) => e.createdAt - t.createdAt)
        : e.sort((e, t) => t.createdAt - e.createdAt);
}
let p = new Set([0]),
    E = new Set([1, 3]),
    m = new Set([2, 4]);
function g() {
    let e = (0, a.yK)([l.Ay], () => l.Ay.getClips()),
        t = (0, a.bG)([l.Ay], () => l.Ay.getPendingClips()),
        n = (0, d.Pu)(),
        r = (0, a.bG)([o.default], () => o.default.getCurrentUser()?.id);
    return i.useMemo(() => {
        let i = [...t, ...e],
            s = [],
            a = new Map(),
            o = new Map(),
            l = new Map(),
            c = new Map(),
            d = new Map(),
            _ = new Map(),
            g = { allClips: 0, autoClips: 0, favorites: 0 },
            A = { allClips: 0, autoClips: 0, favorites: 0 };
        for (let e of i) {
            if (
                (h(e, n) && s.push(e),
                (g.allClips += 1),
                "auto" === e.clipMethod && (g.autoClips += 1),
                e.isFavorite && (g.favorites += 1),
                null != e.applicationId)
            ) {
                let t = a.get(e.applicationId);
                null == t ? a.set(e.applicationId, { name: e.applicationName, count: 1 }) : (t.count += 1);
            }
            for (let t of e.users) t !== r && l.set(t, (l.get(t) ?? 0) + 1);
            let t = e.decision?.signal?.type === u.Gy.DISTRIBUTED ? e.decision.signal : null;
            if (null != t && t.remoteTriggerUserId !== r) {
                let e = t.remoteTriggerUserId;
                d.set(e, (d.get(e) ?? 0) + 1);
            }
            if (
                (h(e, n, p) &&
                    ((A.allClips += 1),
                    "auto" === e.clipMethod && (A.autoClips += 1),
                    e.isFavorite && (A.favorites += 1)),
                null != e.applicationId && h(e, n, E) && o.set(e.applicationId, (o.get(e.applicationId) ?? 0) + 1),
                h(e, n, m))
            ) {
                for (let t of e.users) t !== r && c.set(t, (c.get(t) ?? 0) + 1);
                if (null != t && t.remoteTriggerUserId !== r) {
                    let e = t.remoteTriggerUserId;
                    _.set(e, (_.get(e) ?? 0) + 1);
                }
            }
        }
        let I = f(s, n.sortOrder),
            T = null != n.gameFacet,
            S = null != n.clippedWithFacet,
            y = Array.from(a.entries())
                .map((e) => {
                    let [t, { name: i, count: r }] = e,
                        s = T ? (o.get(t) ?? 0) : r,
                        a = n.gameFacet === t;
                    return { key: t, name: i, count: s, isSelected: a, isDisabled: 0 === s && !a };
                })
                .sort((e, t) => e.name.toLowerCase().localeCompare(t.name.toLowerCase())),
            N = Array.from(l.entries())
                .map((e) => {
                    let [t, i] = e,
                        r = S ? (c.get(t) ?? 0) : i,
                        s = n.clippedWithFacet === t;
                    return { key: t, name: t, count: r, isSelected: s, isDisabled: 0 === r && !s };
                })
                .sort((e, t) => {
                    let n = l.get(e.key) ?? 0,
                        i = l.get(t.key) ?? 0;
                    return n !== i ? i - n : e.key.localeCompare(t.key);
                });
        return {
            allClips: i,
            filteredClips: I,
            gamesFacet: y,
            participantsFacet: N,
            distributedClipInitiatorsFacet: Array.from(d.entries())
                .map((e) => {
                    let [t, i] = e,
                        r = S ? (_.get(t) ?? 0) : i,
                        s = n.clippedWithFacet === t;
                    return { key: t, name: t, count: r, isSelected: s, isDisabled: 0 === r && !s };
                })
                .sort((e, t) => {
                    let n = d.get(e.key) ?? 0,
                        i = d.get(t.key) ?? 0;
                    return n !== i ? i - n : e.key.localeCompare(t.key);
                }),
            mainLinkCounts: T || S ? g : A,
        };
    }, [e, t, n, r]);
}
