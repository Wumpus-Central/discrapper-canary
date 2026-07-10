"use strict";
n.d(t, { $: () => f, A: () => g });
var i = n(735438),
    r = n.n(i),
    a = n(6161),
    s = n(681154),
    l = n(17928),
    o = n(228366),
    d = n(290863),
    c = n(99753),
    u = n(20805),
    _ = n(83971),
    E = n(583846),
    A = n(652215);
let h = new Set([s.ContentInventoryEntryType.LISTENED_SESSION]),
    I = new Map();
function f(e) {
    return `${e.author_id}:${e.id}`;
}
function p(e) {
    let t = new Set(),
        n = new Set();
    for (let i of e) {
        let e = (function (e) {
            return (0, E.I5)(e)
                ? null
                : (0, E.JM)(e) && e.author_type === a.ContentInventoryAuthorType.USER
                  ? d.A.getActivities(e.author_id).find((t) =>
                        t.type === A.$pd.PLAYING && (0, u.P)(e)
                            ? (0, _.fp)(e, t)
                            : !!(t.type === A.$pd.LISTENING && (0, u.Tq)(e)) && (0, _.qb)(e, t),
                    )
                  : void 0;
        })(i.content);
        if (void 0 !== e) {
            let r = f(i.content);
            n.add(r), e !== I.get(r) && (t.add(r), I.set(r, e));
        }
    }
    return { updatedKeys: t, matchedKeys: n };
}
function T() {
    let e = !1,
        t = Array.from(I.keys()),
        n = new Set(),
        i = new Set();
    for (let t of c.A.getFeeds().values()) {
        let { updatedKeys: r, matchedKeys: a } = p(
            n.size > 0 ? t.entries.filter((e) => !n.has(f(e.content))) : t.entries,
        );
        for (let e of r) n.add(e);
        for (let e of a) i.add(e);
        e = e || r.size > 0;
    }
    for (let n of r().difference(t, [...i])) I.delete(n), (e = !0);
    return e;
}
class m extends l.Ay.Store {
    static displayName = "ContentInventoryActivityStore";
    initialize() {
        this.waitFor(c.A, d.A), this.syncWith([d.A], T);
    }
    canRenderContent = (e) => !(0, E.I5)(e) && (!h.has(e.content_type) || null != this.getMatchingActivity(e));
    getMatchingActivity(e) {
        return (0, E.I5)(e) ? null : I.get(f(e));
    }
}
let g = new m(o.h, {
    CONNECTION_OPEN: function () {
        I.clear();
    },
    CONTENT_INVENTORY_SET_FEED: function (e) {
        let { feed: t } = e,
            { updatedKeys: n } = p(t.entries);
        return n.size > 0;
    },
});
