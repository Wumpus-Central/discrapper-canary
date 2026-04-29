"use strict";
n.d(t, { $: () => x, A: () => I });
var l = n(735438),
    i = n.n(l),
    s = n(6161),
    a = n(681154),
    r = n(17928),
    o = n(228366),
    c = n(290863),
    u = n(99753),
    d = n(20805),
    h = n(83971),
    m = n(583846),
    p = n(652215);
let f = new Set([a.ContentInventoryEntryType.LISTENED_SESSION]),
    g = new Map();
function x(e) {
    return `${e.author_id}:${e.id}`;
}
function C(e) {
    let t = new Set(),
        n = new Set();
    for (let l of e) {
        let e = (function (e) {
            return (0, m.I5)(e)
                ? null
                : (0, m.JM)(e) && e.author_type === s.ContentInventoryAuthorType.USER
                  ? c.A.getActivities(e.author_id).find((t) =>
                        t.type === p.$pd.PLAYING && (0, d.P)(e)
                            ? (0, h.fp)(e, t)
                            : !!(t.type === p.$pd.LISTENING && (0, d.Tq)(e)) && (0, h.qb)(e, t),
                    )
                  : void 0;
        })(l.content);
        if (void 0 !== e) {
            let i = x(l.content);
            n.add(i), e !== g.get(i) && (t.add(i), g.set(i, e));
        }
    }
    return { updatedKeys: t, matchedKeys: n };
}
function A() {
    let e = !1,
        t = Array.from(g.keys()),
        n = new Set(),
        l = new Set();
    for (let t of u.A.getFeeds().values()) {
        let { updatedKeys: i, matchedKeys: s } = C(
            n.size > 0 ? t.entries.filter((e) => !n.has(x(e.content))) : t.entries,
        );
        for (let e of i) n.add(e);
        for (let e of s) l.add(e);
        e = e || i.size > 0;
    }
    for (let n of i().difference(t, [...l])) g.delete(n), (e = !0);
    return e;
}
class E extends r.Ay.Store {
    static displayName = "ContentInventoryActivityStore";
    initialize() {
        this.waitFor(u.A, c.A), this.syncWith([c.A], A);
    }
    canRenderContent = (e) => !(0, m.I5)(e) && (!f.has(e.content_type) || null != this.getMatchingActivity(e));
    getMatchingActivity(e) {
        return (0, m.I5)(e) ? null : g.get(x(e));
    }
}
let I = new E(o.h, {
    CONNECTION_OPEN: function () {
        g.clear();
    },
    CONTENT_INVENTORY_SET_FEED: function (e) {
        let { feed: t } = e,
            { updatedKeys: n } = C(t.entries);
        return n.size > 0;
    },
});
