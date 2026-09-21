(n.d(t, { Jp: () => u, RC: () => c, Rr: () => A, S0: () => E, gz: () => _, hB: () => d, i1: () => I }), n(321073));
var i = n(228366),
    r = n(287809),
    a = n(982240),
    s = n(609782),
    l = n(988341);
function o() {
    let e = r.default.getCurrentUser()?.id;
    if (null == e || !a.Ay.hasCatalogFor(e)) return null;
    let t = [],
        n = new Set();
    for (let i of a.Ay.getBadges(e))
        if (!(0, l.A)(i.badge_id) && i.owned) {
            if (i.hidden) {
                n.add(i.badge_id);
                continue;
            }
            t.push(i.badge_id);
        }
    return { displayOrder: t, hiddenBadges: n };
}
function d(e) {
    var t;
    let n = o(),
        r = null != n && ((t = n.displayOrder), e.length === t.length && e.every((e, n) => e === t[n]));
    i.h.dispatch({ type: "USER_PROFILE_SETTINGS_SET_PENDING_CHANGES", pendingBadgeDisplayOrder: r ? void 0 : [...e] });
}
function c(e) {
    var t, n;
    let r,
        a,
        { badgeId: s, hidden: l, reorderableBadgeIds: c, hiddenBadgeIds: u, canReorder: _ } = e;
    (_ && d(l ? c.filter((e) => e !== s) : [...c, s]),
        (t = l ? [...u, s] : u.filter((e) => e !== s)),
        (a = null != (r = o()) && ((n = r.hiddenBadges), t.length === n.size && t.every((e) => n.has(e)))),
        i.h.dispatch({
            type: "USER_PROFILE_SETTINGS_SET_PENDING_CHANGES",
            pendingBadgeHiddenBadges: a ? void 0 : [...t],
        }));
}
function u() {
    i.h.dispatch({
        type: "USER_PROFILE_SETTINGS_SET_PENDING_CHANGES",
        pendingBadgeDisplayOrder: void 0,
        pendingBadgeHiddenBadges: void 0,
    });
}
function _(e) {
    let { pendingBadgeDisplayOrder: t, pendingBadgeHiddenBadges: n } = e;
    return void 0 !== t || void 0 !== n;
}
function E(e, t) {
    let { pendingBadgeDisplayOrder: n, pendingBadgeHiddenBadges: i } = t,
        r = null != i ? new Set(i) : null,
        a = null == r ? [...e] : e.map((e) => ((0, l.A)(e.badge_id) ? e : { ...e, hidden: r.has(e.badge_id) }));
    if (null == n) return a;
    let s = [],
        o = new Map();
    for (let e of a) (0, l.A)(e.badge_id) ? s.push(e) : o.set(e.badge_id, e);
    let d = [];
    for (let e of n) {
        let t = o.get(e);
        null != t && (d.push(t), o.delete(e));
    }
    return [...s, ...d, ...o.values()];
}
function A(e, t, n) {
    let { pendingBadgeDisplayOrder: i, pendingBadgeHiddenBadges: r } = n;
    if (null == r) return h(e, n);
    let a = new Set(e.map((e) => (0, s.w0)(e.id))),
        l = new Set(r),
        o = new Set(i ?? []);
    return h(
        [
            ...e,
            ...t
                .filter(
                    (e) =>
                        e.owned && ((e.hidden ?? !1) || o.has(e.badge_id)) && !l.has(e.badge_id) && !a.has(e.badge_id),
                )
                .map((e) => {
                    let t = (0, s.I)(e.badge_id);
                    return { id: t, icon: t, iconSrc: e.simple_icon_raster_url, description: e.name };
                }),
        ],
        n,
    );
}
function h(e, t) {
    let { pendingBadgeDisplayOrder: n, pendingBadgeHiddenBadges: i } = t;
    if (null == n && null == i) return [...e];
    let r = null != i ? new Set(i) : null,
        a =
            null == r
                ? [...e]
                : e.filter((e) => {
                      let t = (0, s.w0)(e.id);
                      return null == t || (0, l.A)(t) || !r.has(t);
                  });
    if (null == n) return a;
    let o = [],
        d = new Map();
    for (let e of a) {
        let t = (0, s.w0)(e.id);
        null == t || (0, l.A)(t) || d.has(t) ? o.push(e) : d.set(t, e);
    }
    let c = [];
    for (let e of n) {
        let t = d.get(e);
        null != t && (c.push(t), d.delete(e));
    }
    return [...o, ...c, ...d.values()];
}
function I(e, t, n) {
    if (t === n || t < 0 || t >= e.length) return e;
    let i = [...e],
        [r] = i.splice(t, 1);
    return (i.splice(Math.min(Math.max(n, 0), i.length), 0, r), i);
}
