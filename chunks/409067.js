"use strict";
n.d(t, { a: () => E, u: () => _ }), n(321073);
var i = n(64700),
    r = n(91871),
    s = n.n(r),
    a = n(17928),
    o = n(274372),
    l = n(111994),
    u = n(792852);
let c = new Set();
function d(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : c;
    if (
        (!n.has(0) &&
            ((t.activeMainLink === l.oH.AUTO_CLIPS && "auto" !== e.clipMethod) ||
                (t.activeMainLink === l.oH.FAVORITES && !e.isFavorite))) ||
        (!n.has(1) && null != t.gameFacet && e.applicationId !== t.gameFacet) ||
        (!n.has(2) && null != t.clippedWithFacet && !e.users.includes(t.clippedWithFacet)) ||
        (!n.has(3) &&
            t.selectedGameIds.size > 0 &&
            (null == e.applicationId || !t.selectedGameIds.has(e.applicationId)))
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
            e.activity?.details !== t.selectedActivity) ||
        (!n.has(7) && null != t.selectedYear && new Date(e.createdAt).getFullYear() !== t.selectedYear)
    )
        return !1;
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
function _(e, t) {
    return t === l.mu.OLDEST
        ? e.sort((e, t) => e.createdAt - t.createdAt)
        : e.sort((e, t) => t.createdAt - e.createdAt);
}
let h = new Set([1, 3]),
    f = new Set([2, 4]),
    p = new Set([0, 1]);
function E() {
    let e = (0, a.yK)([o.Ay], () => o.Ay.getClips()),
        t = (0, a.bG)([o.Ay], () => o.Ay.getPendingClips()),
        n = (0, u.Pu)();
    return i.useMemo(() => {
        let i = [...t, ...e],
            r = [],
            s = new Map(),
            a = new Map(),
            o = { allClips: 0, autoClips: 0, favorites: 0 };
        for (let e of i) {
            if ((d(e, n) && r.push(e), null != e.applicationId)) {
                let t = d(e, n, h),
                    i = s.get(e.applicationId);
                null == i ? s.set(e.applicationId, { name: e.applicationName, count: +!!t }) : t && (i.count += 1);
            }
            let t = d(e, n, f);
            for (let n of e.users) {
                let e = a.get(n);
                null == e ? a.set(n, { count: +!!t, totalCount: 1 }) : (t && (e.count += 1), (e.totalCount += 1));
            }
            d(e, n, p) &&
                ((o.allClips += 1), "auto" === e.clipMethod && (o.autoClips += 1), e.isFavorite && (o.favorites += 1));
        }
        let l = _(r, n.sortOrder);
        return {
            allClips: i,
            filteredClips: l,
            gamesFacet: Array.from(s.entries())
                .map((e) => {
                    let [t, { name: i, count: r }] = e;
                    return {
                        key: t,
                        name: i,
                        count: r,
                        isSelected: n.gameFacet === t,
                        isDisabled: 0 === r && n.gameFacet !== t,
                    };
                })
                .sort((e, t) => e.name.toLowerCase().localeCompare(t.name.toLowerCase())),
            participantsFacet: Array.from(a.entries())
                .map((e) => {
                    let [t, { count: i, totalCount: r }] = e;
                    return {
                        key: t,
                        name: t,
                        count: i,
                        totalCount: r,
                        isSelected: n.clippedWithFacet === t,
                        isDisabled: 0 === i && n.clippedWithFacet !== t,
                    };
                })
                .sort((e, t) =>
                    e.totalCount !== t.totalCount ? t.totalCount - e.totalCount : e.key.localeCompare(t.key),
                )
                .map((e) => {
                    let { totalCount: t, ...n } = e;
                    return n;
                }),
            mainLinkCounts: o,
        };
    }, [e, t, n]);
}
