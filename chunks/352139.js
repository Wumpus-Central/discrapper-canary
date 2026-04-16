"use strict";
n.d(t, { $: () => E, A: () => v });
var r = n(735438),
    i = n.n(r),
    s = n(6161),
    a = n(681154),
    o = n(311907),
    l = n(73153),
    u = n(290863),
    c = n(99753),
    d = n(20805),
    _ = n(83971),
    f = n(583846),
    p = n(652215);
let h = new Set([a.ContentInventoryEntryType.LISTENED_SESSION]),
    m = new Map();
function E(e) {
    return `${e.author_id}:${e.id}`;
}
function g(e) {
    return (0, f.I5)(e)
        ? null
        : (0, f.JM)(e) && e.author_type === s.ContentInventoryAuthorType.USER
          ? u.A.getActivities(e.author_id).find((t) =>
                t.type === p.$pd.PLAYING && (0, d.P)(e)
                    ? (0, _.fp)(e, t)
                    : !!(t.type === p.$pd.LISTENING && (0, d.Tq)(e)) && (0, _.qb)(e, t),
            )
          : void 0;
}
function A(e) {
    let t = new Set(),
        n = new Set();
    for (let r of e) {
        let e = g(r.content);
        if (void 0 !== e) {
            let i = E(r.content);
            n.add(i), e !== m.get(i) && (t.add(i), m.set(i, e));
        }
    }
    return { updatedKeys: t, matchedKeys: n };
}
function I(e) {
    let { feed: t } = e,
        { updatedKeys: n } = A(t.entries);
    return n.size > 0;
}
function T() {
    m.clear();
}
function S() {
    let e = !1,
        t = Array.from(m.keys()),
        n = new Set(),
        r = new Set();
    for (let t of c.A.getFeeds().values()) {
        let { updatedKeys: i, matchedKeys: s } = A(
            n.size > 0 ? t.entries.filter((e) => !n.has(E(e.content))) : t.entries,
        );
        for (let e of i) n.add(e);
        for (let e of s) r.add(e);
        e = e || i.size > 0;
    }
    for (let n of i().difference(t, [...r])) m.delete(n), (e = !0);
    return e;
}
class y extends o.Ay.Store {
    static displayName = "ContentInventoryActivityStore";
    initialize() {
        this.waitFor(c.A, u.A), this.syncWith([u.A], S);
    }
    canRenderContent = (e) => !(0, f.I5)(e) && (!h.has(e.content_type) || null != this.getMatchingActivity(e));
    getMatchingActivity(e) {
        return (0, f.I5)(e) ? null : m.get(E(e));
    }
}
let v = new y(l.h, { CONNECTION_OPEN: T, CONTENT_INVENTORY_SET_FEED: I });
