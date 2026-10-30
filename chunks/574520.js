n.d(e, { $: () => S, A: () => T });
var i = n(435558),
    r = n.n(i),
    o = n(350835),
    s = n(6161),
    a = n(681154),
    c = n(17928),
    d = n(73153),
    l = n(290863),
    u = n(99753),
    f = n(20805),
    E = n(83971),
    y = n(583846);
let h = new Set([a.ContentInventoryEntryType.LISTENED_SESSION]),
    I = new Map();
function S(t) {
    return `${t.author_id}:${t.id}`;
}
function p(t) {
    let e = new Set(),
        n = new Set();
    for (let i of t) {
        let t = (function (t) {
            return (0, y.I5)(t)
                ? null
                : (0, y.JM)(t) && t.author_type === s.ContentInventoryAuthorType.USER
                  ? l.A.getActivities(t.author_id).find((e) =>
                        e.type === o.$.PLAYING && (0, f.P)(t)
                            ? (0, E.fp)(t, e)
                            : !!(e.type === o.$.LISTENING && (0, f.Tq)(t)) && (0, E.qb)(t, e),
                    )
                  : void 0;
        })(i.content);
        if (void 0 !== t) {
            let r = S(i.content);
            (n.add(r), t !== I.get(r) && (e.add(r), I.set(r, t)));
        }
    }
    return { updatedKeys: e, matchedKeys: n };
}
function A() {
    let t = !1,
        e = Array.from(I.keys()),
        n = new Set(),
        i = new Set();
    for (let e of u.A.getFeeds().values()) {
        let { updatedKeys: r, matchedKeys: o } = p(
            n.size > 0 ? e.entries.filter((t) => !n.has(S(t.content))) : e.entries,
        );
        for (let t of r) n.add(t);
        for (let t of o) i.add(t);
        t = t || r.size > 0;
    }
    for (let n of r().difference(e, [...i])) (I.delete(n), (t = !0));
    return t;
}
class N extends c.Ay.Store {
    static displayName = "ContentInventoryActivityStore";
    initialize() {
        (this.waitFor(u.A, l.A), this.syncWith([l.A], A));
    }
    canRenderContent = (t) => !(0, y.I5)(t) && (!h.has(t.content_type) || null != this.getMatchingActivity(t));
    getMatchingActivity(t) {
        return (0, y.I5)(t) ? null : I.get(S(t));
    }
}
let T = new N(d.h, {
    CONNECTION_OPEN: function () {
        I.clear();
    },
    CONTENT_INVENTORY_SET_FEED: function (t) {
        let { feed: e } = t,
            { updatedKeys: n } = p(e.entries);
        return n.size > 0;
    },
});
