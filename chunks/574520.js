"use strict";
n.d(t, { $: () => _, A: () => E });
var i = n(735438),
    l = n.n(i),
    s = n(6161),
    r = n(681154),
    a = n(311907),
    o = n(73153),
    c = n(290863),
    u = n(99753),
    d = n(20805),
    h = n(83971),
    m = n(583846),
    p = n(652215);
let f = new Set([r.ContentInventoryEntryType.LISTENED_SESSION]),
    g = new Map();
function _(e) {
    return `${e.author_id}:${e.id}`;
}
function x(e) {
    let t = new Set(),
        n = new Set();
    for (let i of e) {
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
        })(i.content);
        if (void 0 !== e) {
            let l = _(i.content);
            n.add(l), e !== g.get(l) && (t.add(l), g.set(l, e));
        }
    }
    return { updatedKeys: t, matchedKeys: n };
}
function A() {
    let e = !1,
        t = Array.from(g.keys()),
        n = new Set(),
        i = new Set();
    for (let t of u.A.getFeeds().values()) {
        let { updatedKeys: l, matchedKeys: s } = x(
            n.size > 0 ? t.entries.filter((e) => !n.has(_(e.content))) : t.entries,
        );
        for (let e of l) n.add(e);
        for (let e of s) i.add(e);
        e = e || l.size > 0;
    }
    for (let n of l().difference(t, [...i])) g.delete(n), (e = !0);
    return e;
}
class C extends a.Ay.Store {
    static displayName = "ContentInventoryActivityStore";
    initialize() {
        this.waitFor(u.A, c.A), this.syncWith([c.A], A);
    }
    canRenderContent = (e) => !(0, m.I5)(e) && (!f.has(e.content_type) || null != this.getMatchingActivity(e));
    getMatchingActivity(e) {
        return (0, m.I5)(e) ? null : g.get(_(e));
    }
}
let E = new C(o.h, {
    CONNECTION_OPEN: function () {
        g.clear();
    },
    CONTENT_INVENTORY_SET_FEED: function (e) {
        let { feed: t } = e,
            { updatedKeys: n } = x(t.entries);
        return n.size > 0;
    },
});
