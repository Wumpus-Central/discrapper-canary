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
    let e = (0, a.yK)([l.Ay], () => l.Ay.getClips()),
        t = (0, a.bG)([l.Ay], () => l.Ay.getPendingClips()),
        n = (0, a.yK)([l.Ay], () => l.Ay.getNewClipIds()),
        r = (0, d.P)(),
        p = (0, a.bG)([l.Ay], () => l.Ay.getSettings().showPovClipsInGallery),
        E = (0, a.bG)([o.default], () => o.default.getCurrentUser()?.id);
    return i.useMemo(() => {
        let i = [...t, ...e],
            a = p ? i : i.filter((e) => !h(e)),
            o = new Set(n),
            l = [],
            d = new Map(),
            m = new Map(),
            g = new Map(),
            A = { allClips: 0, autoClips: 0, favorites: 0 },
            I = new Map(),
            T = { allClips: 0, autoClips: 0, favorites: 0 };
        for (let e of a) {
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
                })(e, r) && l.push(e),
                (A.allClips += 1),
                "auto" === e.clipMethod && (A.autoClips += 1),
                e.isFavorite && (A.favorites += 1),
                o.has(e.id) &&
                    ((T.allClips += 1),
                    "auto" === e.clipMethod && (T.autoClips += 1),
                    e.isFavorite && (T.favorites += 1),
                    null != e.applicationId && I.set(e.applicationId, (I.get(e.applicationId) ?? 0) + 1)),
                null != e.applicationId)
            ) {
                let t = d.get(e.applicationId);
                null == t ? d.set(e.applicationId, { name: e.applicationName, count: 1 }) : (t.count += 1);
            }
            for (let t of e.users) t !== E && m.set(t, (m.get(t) ?? 0) + 1);
            let t = e.decision?.signal?.type === u.Gy.DISTRIBUTED ? e.decision.signal : null;
            if (null != t && t.remoteTriggerUserId !== E) {
                let e = t.remoteTriggerUserId;
                g.set(e, (g.get(e) ?? 0) + 1);
            }
        }
        let S = f(l, r.sortOrder),
            y = S.length,
            N = null != r.gameFacet,
            v = null != r.clippedWithFacet,
            C = Array.from(d.entries())
                .map((e) => {
                    let [t, { name: n, count: i }] = e,
                        s = r.gameFacet === t;
                    return {
                        key: t,
                        name: n,
                        count: s ? y : i,
                        isSelected: s,
                        isDisabled: !1,
                        newCount: I.get(t) ?? 0,
                    };
                })
                .sort((e, t) => e.name.toLowerCase().localeCompare(t.name.toLowerCase())),
            R = Array.from(m.entries())
                .map((e) => {
                    let [t, n] = e,
                        i = r.clippedWithFacet === t;
                    return { key: t, name: t, count: i ? y : n, isSelected: i, isDisabled: !1, newCount: 0 };
                })
                .sort((e, t) => {
                    let n = m.get(e.key) ?? 0,
                        i = m.get(t.key) ?? 0;
                    return n !== i ? i - n : e.key.localeCompare(t.key);
                }),
            O = Array.from(g.entries())
                .map((e) => {
                    let [t, n] = e,
                        i = r.clippedWithFacet === t;
                    return { key: t, name: t, count: i ? y : n, isSelected: i, isDisabled: !1, newCount: 0 };
                })
                .sort((e, t) => {
                    let n = g.get(e.key) ?? 0,
                        i = g.get(t.key) ?? 0;
                    return n !== i ? i - n : e.key.localeCompare(t.key);
                }),
            b = !N && !v;
        return {
            allClips: a,
            filteredClips: S,
            gamesFacet: C,
            participantsFacet: R,
            distributedClipInitiatorsFacet: O,
            mainLinkCounts: {
                allClips: b && r.activeMainLink === c.oH.ALL_CLIPS ? y : A.allClips,
                autoClips: b && r.activeMainLink === c.oH.AUTO_CLIPS ? y : A.autoClips,
                favorites: b && r.activeMainLink === c.oH.FAVORITES ? y : A.favorites,
            },
            mainLinkNewCounts: T,
        };
    }, [e, t, n, r, E, p]);
}
