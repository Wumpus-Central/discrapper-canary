n.d(t, {
    $: () => y,
    A: () => T,
}),
    n(896048);
var r,
    i = n(735438),
    a = n.n(i),
    s = n(6161),
    o = n(681154),
    l = n(311907),
    c = n(73153),
    u = n(290863),
    d = n(99753),
    f = n(20805),
    p = n(83971),
    _ = n(583846),
    h = n(652215);

function m(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let g = new Set([o.ContentInventoryEntryType.LISTENED_SESSION]),
    E = new Map();

function y(e) {
    return "".concat(e.author_id, ":").concat(e.id);
}

function b(e) {
    return (0, _.I5)(e)
        ? null
        : (0, _.JM)(e) && e.author_type === s.ContentInventoryAuthorType.USER
          ? u.A.getActivities(e.author_id).find((t) =>
                t.type === h.$pd.PLAYING && (0, f.P)(e)
                    ? (0, p.fp)(e, t)
                    : !!(t.type === h.$pd.LISTENING && (0, f.Tq)(e)) && (0, p.qb)(e, t),
            )
          : void 0;
}

function O(e) {
    let t = new Set(),
        n = new Set();
    for (let r of e) {
        let e = b(r.content);
        if (void 0 !== e) {
            let i = y(r.content);
            n.add(i), e !== E.get(i) && (t.add(i), E.set(i, e));
        }
    }
    return {
        updatedKeys: t,
        matchedKeys: n,
    };
}

function v(e) {
    let { feed: t } = e,
        { updatedKeys: n } = O(t.entries);
    return n.size > 0;
}

function A() {
    E.clear();
}

function I() {
    let e = !1,
        t = Array.from(E.keys()),
        n = new Set(),
        r = new Set();
    for (let t of d.A.getFeeds().values()) {
        let { updatedKeys: i, matchedKeys: a } = O(
            n.size > 0 ? t.entries.filter((e) => !n.has(y(e.content))) : t.entries,
        );
        for (let e of i) n.add(e);
        for (let e of a) r.add(e);
        e = e || i.size > 0;
    }
    for (let n of a().difference(t, [...r])) E.delete(n), (e = !0);
    return e;
}
class S extends (r = l.Ay.Store) {
    initialize() {
        this.waitFor(d.A, u.A), this.syncWith([u.A], I);
    }
    getMatchingActivity(e) {
        return (0, _.I5)(e) ? null : E.get(y(e));
    }
    constructor(...e) {
        super(...e),
            m(
                this,
                "canRenderContent",
                (e) => !(0, _.I5)(e) && (!g.has(e.content_type) || null != this.getMatchingActivity(e)),
            );
    }
}
m(S, "displayName", "ContentInventoryActivityStore");
let T = new S(c.h, {
    CONNECTION_OPEN: A,
    CONTENT_INVENTORY_SET_FEED: v,
});
