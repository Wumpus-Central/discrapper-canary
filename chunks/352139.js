"use strict";
n.d(t, { $: () => g, A: () => T });
var i = n(735438),
    r = n.n(i),
    s = n(6161),
    a = n(681154),
    o = n(17928),
    l = n(228366),
    d = n(290863),
    _ = n(99753),
    u = n(20805),
    c = n(83971),
    E = n(583846),
    h = n(652215);
let m = new Set([a.ContentInventoryEntryType.LISTENED_SESSION]),
    f = new Map();
function g(e) {
    return `${e.author_id}:${e.id}`;
}
function p(e) {
    let t = new Set(),
        n = new Set();
    for (let i of e) {
        let e = (function (e) {
            return (0, E.I5)(e)
                ? null
                : (0, E.JM)(e) && e.author_type === s.ContentInventoryAuthorType.USER
                  ? d.A.getActivities(e.author_id).find((t) =>
                        t.type === h.$pd.PLAYING && (0, u.P)(e)
                            ? (0, c.fp)(e, t)
                            : !!(t.type === h.$pd.LISTENING && (0, u.Tq)(e)) && (0, c.qb)(e, t),
                    )
                  : void 0;
        })(i.content);
        if (void 0 !== e) {
            let r = g(i.content);
            n.add(r), e !== f.get(r) && (t.add(r), f.set(r, e));
        }
    }
    return { updatedKeys: t, matchedKeys: n };
}
function A() {
    let e = !1,
        t = Array.from(f.keys()),
        n = new Set(),
        i = new Set();
    for (let t of _.A.getFeeds().values()) {
        let { updatedKeys: r, matchedKeys: s } = p(
            n.size > 0 ? t.entries.filter((e) => !n.has(g(e.content))) : t.entries,
        );
        for (let e of r) n.add(e);
        for (let e of s) i.add(e);
        e = e || r.size > 0;
    }
    for (let n of r().difference(t, [...i])) f.delete(n), (e = !0);
    return e;
}
class I extends o.Ay.Store {
    static displayName = "ContentInventoryActivityStore";
    initialize() {
        this.waitFor(_.A, d.A), this.syncWith([d.A], A);
    }
    canRenderContent = (e) => !(0, E.I5)(e) && (!m.has(e.content_type) || null != this.getMatchingActivity(e));
    getMatchingActivity(e) {
        return (0, E.I5)(e) ? null : f.get(g(e));
    }
}
let T = new I(l.h, {
    CONNECTION_OPEN: function () {
        f.clear();
    },
    CONTENT_INVENTORY_SET_FEED: function (e) {
        let { feed: t } = e,
            { updatedKeys: n } = p(t.entries);
        return n.size > 0;
    },
});
