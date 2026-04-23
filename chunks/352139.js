"use strict";
n.d(t, { $: () => m, A: () => T });
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
    E = new Map();
function m(e) {
    return `${e.author_id}:${e.id}`;
}
function g(e) {
    let t = new Set(),
        n = new Set();
    for (let r of e) {
        let e = (function (e) {
            return (0, f.I5)(e)
                ? null
                : (0, f.JM)(e) && e.author_type === s.ContentInventoryAuthorType.USER
                  ? u.A.getActivities(e.author_id).find((t) =>
                        t.type === p.$pd.PLAYING && (0, d.P)(e)
                            ? (0, _.fp)(e, t)
                            : !!(t.type === p.$pd.LISTENING && (0, d.Tq)(e)) && (0, _.qb)(e, t),
                    )
                  : void 0;
        })(r.content);
        if (void 0 !== e) {
            let i = m(r.content);
            n.add(i), e !== E.get(i) && (t.add(i), E.set(i, e));
        }
    }
    return { updatedKeys: t, matchedKeys: n };
}
function A() {
    let e = !1,
        t = Array.from(E.keys()),
        n = new Set(),
        r = new Set();
    for (let t of c.A.getFeeds().values()) {
        let { updatedKeys: i, matchedKeys: s } = g(
            n.size > 0 ? t.entries.filter((e) => !n.has(m(e.content))) : t.entries,
        );
        for (let e of i) n.add(e);
        for (let e of s) r.add(e);
        e = e || i.size > 0;
    }
    for (let n of i().difference(t, [...r])) E.delete(n), (e = !0);
    return e;
}
class I extends o.Ay.Store {
    static displayName = "ContentInventoryActivityStore";
    initialize() {
        this.waitFor(c.A, u.A), this.syncWith([u.A], A);
    }
    canRenderContent = (e) => !(0, f.I5)(e) && (!h.has(e.content_type) || null != this.getMatchingActivity(e));
    getMatchingActivity(e) {
        return (0, f.I5)(e) ? null : E.get(m(e));
    }
}
let T = new I(l.h, {
    CONNECTION_OPEN: function () {
        E.clear();
    },
    CONTENT_INVENTORY_SET_FEED: function (e) {
        let { feed: t } = e,
            { updatedKeys: n } = g(t.entries);
        return n.size > 0;
    },
});
