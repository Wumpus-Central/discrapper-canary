n.d(t, { $: () => x, A: () => I });
var l = n(435558),
    i = n.n(l),
    s = n(6161),
    r = n(681154),
    a = n(17928),
    o = n(228366),
    u = n(290863),
    c = n(99753),
    d = n(20805),
    m = n(83971),
    h = n(583846),
    p = n(652215);
let f = new Set([r.ContentInventoryEntryType.LISTENED_SESSION]),
    g = new Map();
function x(e) {
    return `${e.author_id}:${e.id}`;
}
function A(e) {
    let t = new Set(),
        n = new Set();
    for (let l of e) {
        let e = (function (e) {
            return (0, h.I5)(e)
                ? null
                : (0, h.JM)(e) && e.author_type === s.ContentInventoryAuthorType.USER
                  ? u.A.getActivities(e.author_id).find((t) =>
                        t.type === p.$pd.PLAYING && (0, d.P)(e)
                            ? (0, m.fp)(e, t)
                            : !!(t.type === p.$pd.LISTENING && (0, d.Tq)(e)) && (0, m.qb)(e, t),
                    )
                  : void 0;
        })(l.content);
        if (void 0 !== e) {
            let i = x(l.content);
            (n.add(i), e !== g.get(i) && (t.add(i), g.set(i, e)));
        }
    }
    return { updatedKeys: t, matchedKeys: n };
}
function C() {
    let e = !1,
        t = Array.from(g.keys()),
        n = new Set(),
        l = new Set();
    for (let t of c.A.getFeeds().values()) {
        let { updatedKeys: i, matchedKeys: s } = A(
            n.size > 0 ? t.entries.filter((e) => !n.has(x(e.content))) : t.entries,
        );
        for (let e of i) n.add(e);
        for (let e of s) l.add(e);
        e = e || i.size > 0;
    }
    for (let n of i().difference(t, [...l])) (g.delete(n), (e = !0));
    return e;
}
class E extends a.Ay.Store {
    static displayName = "ContentInventoryActivityStore";
    initialize() {
        (this.waitFor(c.A, u.A), this.syncWith([u.A], C));
    }
    canRenderContent = (e) => !(0, h.I5)(e) && (!f.has(e.content_type) || null != this.getMatchingActivity(e));
    getMatchingActivity(e) {
        return (0, h.I5)(e) ? null : g.get(x(e));
    }
}
let I = new E(o.h, {
    CONNECTION_OPEN: function () {
        g.clear();
    },
    CONTENT_INVENTORY_SET_FEED: function (e) {
        let { feed: t } = e,
            { updatedKeys: n } = A(t.entries);
        return n.size > 0;
    },
});
