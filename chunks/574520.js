var l = n(435558),
    i = n.n(l),
    a = n(350835),
    r = n(6161),
    s = n(681154),
    o = n(855986),
    u = n(73153),
    c = n(290863),
    d = n(99753),
    m = n(20805),
    A = n(83971),
    p = n(583846);
let h = new Set([s.ContentInventoryEntryType.LISTENED_SESSION]),
    f = new Map();
function g(e) {
    return `${e.author_id}:${e.id}`;
}
function x(e) {
    let t = new Set(),
        n = new Set();
    for (let l of e) {
        let e = (function (e) {
            return (0, p.I5)(e)
                ? null
                : (0, p.JM)(e) && e.author_type === r.ContentInventoryAuthorType.USER
                  ? c.A.getActivities(e.author_id).find((t) =>
                        t.type === a.$.PLAYING && (0, m.P)(e)
                            ? (0, A.fp)(e, t)
                            : !!(t.type === a.$.LISTENING && (0, m.Tq)(e)) && (0, A.qb)(e, t),
                    )
                  : void 0;
        })(l.content);
        if (void 0 !== e) {
            let i = g(l.content);
            (n.add(i), e !== f.get(i) && (t.add(i), f.set(i, e)));
        }
    }
    return { updatedKeys: t, matchedKeys: n };
}
function I() {
    let e = !1,
        t = Array.from(f.keys()),
        n = new Set(),
        l = new Set();
    for (let t of d.A.getFeeds().values()) {
        let { updatedKeys: i, matchedKeys: a } = x(
            n.size > 0 ? t.entries.filter((e) => !n.has(g(e.content))) : t.entries,
        );
        for (let e of i) n.add(e);
        for (let e of a) l.add(e);
        e = e || i.size > 0;
    }
    for (let n of i().difference(t, [...l])) (f.delete(n), (e = !0));
    return e;
}
class v extends o.Ay.Store {
    static displayName = "ContentInventoryActivityStore";
    initialize() {
        (this.waitFor(d.A, c.A), this.syncWith([c.A], I));
    }
    canRenderContent = (e) => !(0, p.I5)(e) && (!h.has(e.content_type) || null != this.getMatchingActivity(e));
    getMatchingActivity(e) {
        return (0, p.I5)(e) ? null : f.get(g(e));
    }
}
let T = new v(u.h, {
    CONNECTION_OPEN: function () {
        f.clear();
    },
    CONTENT_INVENTORY_SET_FEED: function (e) {
        let { feed: t } = e,
            { updatedKeys: n } = x(t.entries);
        return n.size > 0;
    },
});
n.d(t, {}, { $: g, A: T });
