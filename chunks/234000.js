"use strict";
n.d(t, { Jp: () => l, Rr: () => c, S0: () => d, gz: () => o }), n(321073);
var i = n(70283),
    r = n(228366);
n(287809), n(982240);
var a = n(609782),
    s = n(988341);
function l() {
    r.h.dispatch({
        type: "USER_PROFILE_SETTINGS_SET_PENDING_CHANGES",
        pendingBadgeDisplayOrder: void 0,
        pendingBadgeHiddenBadges: void 0,
    });
}
function o(e) {
    let { pendingBadgeDisplayOrder: t, pendingBadgeHiddenBadges: n } = e;
    return void 0 !== t || void 0 !== n;
}
function d(e, t) {
    let { pendingBadgeDisplayOrder: n, pendingBadgeHiddenBadges: i } = t,
        r = null != i ? new Set(i) : null,
        a = null == r ? [...e] : e.map((e) => ((0, s.A)(e.badge_id) ? e : { ...e, hidden: r.has(e.badge_id) }));
    if (null == n) return a;
    let l = [],
        o = new Map();
    for (let e of a) (0, s.A)(e.badge_id) ? l.push(e) : o.set(e.badge_id, e);
    let d = [];
    for (let e of n) {
        let t = o.get(e);
        null != t && (d.push(t), o.delete(e));
    }
    return [...l, ...d, ...o.values()];
}
function c(e, t, n) {
    let { pendingBadgeDisplayOrder: r, pendingBadgeHiddenBadges: s } = n;
    if (null == s) return u(e, n);
    let l = new Set(e.map((e) => (0, a.w0)(e.id))),
        o = new Set(s),
        d = new Set(r ?? []);
    return u(
        [
            ...e,
            ...t
                .filter(
                    (e) =>
                        e.owned &&
                        e.badge_id !== i.$.LEGACY_USERNAME &&
                        ((e.hidden ?? !1) || d.has(e.badge_id)) &&
                        !o.has(e.badge_id) &&
                        !l.has(e.badge_id),
                )
                .map((e) => {
                    let t = (0, a.I)(e.badge_id);
                    return { id: t, icon: t, iconSrc: e.simple_icon_url, description: e.name };
                }),
        ],
        n,
    );
}
function u(e, t) {
    let { pendingBadgeDisplayOrder: n, pendingBadgeHiddenBadges: i } = t;
    if (null == n && null == i) return [...e];
    let r = null != i ? new Set(i) : null,
        l =
            null == r
                ? [...e]
                : e.filter((e) => {
                      let t = (0, a.w0)(e.id);
                      return null == t || (0, s.A)(t) || !r.has(t);
                  });
    if (null == n) return l;
    let o = [],
        d = new Map();
    for (let e of l) {
        let t = (0, a.w0)(e.id);
        null == t || (0, s.A)(t) || d.has(t) ? o.push(e) : d.set(t, e);
    }
    let c = [];
    for (let e of n) {
        let t = d.get(e);
        null != t && (c.push(t), d.delete(e));
    }
    return [...o, ...c, ...d.values()];
}
