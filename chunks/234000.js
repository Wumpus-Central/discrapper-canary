"use strict";
n.d(t, { Jp: () => _, RC: () => u, Rr: () => h, S0: () => A, gz: () => E, hB: () => c, i1: () => f }), n(321073);
var i = n(70283),
    r = n(228366),
    a = n(287809),
    s = n(982240),
    l = n(609782),
    o = n(988341);
function d() {
    let e = a.default.getCurrentUser()?.id;
    if (null == e || !s.Ay.hasCatalogFor(e)) return null;
    let t = [],
        n = new Set();
    for (let i of s.Ay.getBadges(e))
        if (!(0, o.A)(i.badge_id) && i.owned) {
            if (i.hidden) {
                n.add(i.badge_id);
                continue;
            }
            t.push(i.badge_id);
        }
    return { displayOrder: t, hiddenBadges: n };
}
function c(e) {
    var t;
    let n = d(),
        i = null != n && ((t = n.displayOrder), e.length === t.length && e.every((e, n) => e === t[n]));
    r.h.dispatch({ type: "USER_PROFILE_SETTINGS_SET_PENDING_CHANGES", pendingBadgeDisplayOrder: i ? void 0 : [...e] });
}
function u(e) {
    var t, n;
    let i,
        a,
        { badgeId: s, hidden: l, reorderableBadgeIds: o, hiddenBadgeIds: u, canReorder: _ } = e;
    _ && c(l ? o.filter((e) => e !== s) : [...o, s]),
        (t = l ? [...u, s] : u.filter((e) => e !== s)),
        (a = null != (i = d()) && ((n = i.hiddenBadges), t.length === n.size && t.every((e) => n.has(e)))),
        r.h.dispatch({
            type: "USER_PROFILE_SETTINGS_SET_PENDING_CHANGES",
            pendingBadgeHiddenBadges: a ? void 0 : [...t],
        });
}
function _() {
    r.h.dispatch({
        type: "USER_PROFILE_SETTINGS_SET_PENDING_CHANGES",
        pendingBadgeDisplayOrder: void 0,
        pendingBadgeHiddenBadges: void 0,
    });
}
function E(e) {
    let { pendingBadgeDisplayOrder: t, pendingBadgeHiddenBadges: n } = e;
    return void 0 !== t || void 0 !== n;
}
function A(e, t) {
    let { pendingBadgeDisplayOrder: n, pendingBadgeHiddenBadges: i } = t,
        r = null != i ? new Set(i) : null,
        a = null == r ? [...e] : e.map((e) => ((0, o.A)(e.badge_id) ? e : { ...e, hidden: r.has(e.badge_id) }));
    if (null == n) return a;
    let s = [],
        l = new Map();
    for (let e of a) (0, o.A)(e.badge_id) ? s.push(e) : l.set(e.badge_id, e);
    let d = [];
    for (let e of n) {
        let t = l.get(e);
        null != t && (d.push(t), l.delete(e));
    }
    return [...s, ...d, ...l.values()];
}
function h(e, t, n) {
    let { pendingBadgeDisplayOrder: r, pendingBadgeHiddenBadges: a } = n;
    if (null == a) return I(e, n);
    let s = new Set(e.map((e) => (0, l.w0)(e.id))),
        o = new Set(a),
        d = new Set(r ?? []);
    return I(
        [
            ...e,
            ...t
                .filter(
                    (e) =>
                        e.owned &&
                        e.badge_id !== i.$.LEGACY_USERNAME &&
                        ((e.hidden ?? !1) || d.has(e.badge_id)) &&
                        !o.has(e.badge_id) &&
                        !s.has(e.badge_id),
                )
                .map((e) => {
                    let t = (0, l.I)(e.badge_id);
                    return { id: t, icon: t, iconSrc: e.simple_icon_url, description: e.name };
                }),
        ],
        n,
    );
}
function I(e, t) {
    let { pendingBadgeDisplayOrder: n, pendingBadgeHiddenBadges: i } = t;
    if (null == n && null == i) return [...e];
    let r = null != i ? new Set(i) : null,
        a =
            null == r
                ? [...e]
                : e.filter((e) => {
                      let t = (0, l.w0)(e.id);
                      return null == t || (0, o.A)(t) || !r.has(t);
                  });
    if (null == n) return a;
    let s = [],
        d = new Map();
    for (let e of a) {
        let t = (0, l.w0)(e.id);
        null == t || (0, o.A)(t) || d.has(t) ? s.push(e) : d.set(t, e);
    }
    let c = [];
    for (let e of n) {
        let t = d.get(e);
        null != t && (c.push(t), d.delete(e));
    }
    return [...s, ...c, ...d.values()];
}
function f(e, t, n) {
    if (t === n || t < 0 || t >= e.length) return e;
    let i = [...e],
        [r] = i.splice(t, 1);
    return i.splice(Math.min(Math.max(n, 0), i.length), 0, r), i;
}
