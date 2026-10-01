n.d(e, { $: () => I, A: () => T });
var i = n(435558),
    r = n.n(i),
    o = n(6161),
    s = n(681154),
    a = n(17928),
    d = n(73153),
    c = n(290863),
    l = n(99753),
    u = n(20805),
    f = n(83971),
    E = n(583846),
    y = n(652215);
let h = new Set([s.ContentInventoryEntryType.LISTENED_SESSION]),
    p = new Map();
function I(t) {
    return `${t.author_id}:${t.id}`;
}
function S(t) {
    let e = new Set(),
        n = new Set();
    for (let i of t) {
        let t = (function (t) {
            return (0, E.I5)(t)
                ? null
                : (0, E.JM)(t) && t.author_type === o.ContentInventoryAuthorType.USER
                  ? c.A.getActivities(t.author_id).find((e) =>
                        e.type === y.$pd.PLAYING && (0, u.P)(t)
                            ? (0, f.fp)(t, e)
                            : !!(e.type === y.$pd.LISTENING && (0, u.Tq)(t)) && (0, f.qb)(t, e),
                    )
                  : void 0;
        })(i.content);
        if (void 0 !== t) {
            let r = I(i.content);
            (n.add(r), t !== p.get(r) && (e.add(r), p.set(r, t)));
        }
    }
    return { updatedKeys: e, matchedKeys: n };
}
function A() {
    let t = !1,
        e = Array.from(p.keys()),
        n = new Set(),
        i = new Set();
    for (let e of l.A.getFeeds().values()) {
        let { updatedKeys: r, matchedKeys: o } = S(
            n.size > 0 ? e.entries.filter((t) => !n.has(I(t.content))) : e.entries,
        );
        for (let t of r) n.add(t);
        for (let t of o) i.add(t);
        t = t || r.size > 0;
    }
    for (let n of r().difference(e, [...i])) (p.delete(n), (t = !0));
    return t;
}
class N extends a.Ay.Store {
    static displayName = "ContentInventoryActivityStore";
    initialize() {
        (this.waitFor(l.A, c.A), this.syncWith([c.A], A));
    }
    canRenderContent = (t) => !(0, E.I5)(t) && (!h.has(t.content_type) || null != this.getMatchingActivity(t));
    getMatchingActivity(t) {
        return (0, E.I5)(t) ? null : p.get(I(t));
    }
}
let T = new N(d.h, {
    CONNECTION_OPEN: function () {
        p.clear();
    },
    CONTENT_INVENTORY_SET_FEED: function (t) {
        let { feed: e } = t,
            { updatedKeys: n } = S(e.entries);
        return n.size > 0;
    },
});
