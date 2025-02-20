n.d(t, {
    T: () => v,
    Z: () => N
}),
    n(47120);
var r,
    i = n(392711),
    o = n.n(i),
    a = n(661869),
    s = n(876215),
    l = n(442837),
    c = n(570140),
    u = n(158776),
    d = n(146282),
    f = n(26033),
    p = n(180335),
    _ = n(561308),
    h = n(981631);
function m(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let g = new Set([s.s.LISTENED_SESSION]),
    E = new Map();
function v(e) {
    return ''.concat(e.author_id, ':').concat(e.id);
}
function b(e) {
    return (0, _.n2)(e) ? null : (0, _.kr)(e) && e.author_type === a.i.USER ? u.Z.getActivities(e.author_id).find((t) => (t.type === h.IIU.PLAYING && (0, f.m9)(e) ? (0, p.cN)(e, t) : !!(t.type === h.IIU.LISTENING && (0, f.dU)(e)) && (0, p.pB)(e, t))) : void 0;
}
function y(e) {
    let t = new Set(),
        n = new Set();
    for (let r of e) {
        let e = b(r.content);
        if (void 0 !== e) {
            let i = v(r.content);
            n.add(i), e !== E.get(i) && (t.add(i), E.set(i, e));
        }
    }
    return {
        updatedKeys: t,
        matchedKeys: n
    };
}
function O(e) {
    let { feed: t } = e,
        { updatedKeys: n } = y(t.entries);
    return n.size > 0;
}
function S() {
    E.clear();
}
function I() {
    let e = !1,
        t = Array.from(E.keys()),
        n = new Set(),
        r = new Set();
    for (let t of d.Z.getFeeds().values()) {
        let { updatedKeys: i, matchedKeys: o } = y(n.size > 0 ? t.entries.filter((e) => !n.has(v(e.content))) : t.entries);
        for (let e of i) n.add(e);
        for (let e of o) r.add(e);
        e = e || i.size > 0;
    }
    for (let n of o().difference(t, [...r])) E.delete(n), (e = !0);
    return e;
}
class T extends (r = l.ZP.Store) {
    initialize() {
        this.waitFor(d.Z, u.Z), this.syncWith([u.Z], I);
    }
    getMatchingActivity(e) {
        return (0, _.n2)(e) ? null : E.get(v(e));
    }
    constructor(...e) {
        super(...e), m(this, 'canRenderContent', (e) => !(0, _.n2)(e) && (!g.has(e.content_type) || null != this.getMatchingActivity(e)));
    }
}
m(T, 'displayName', 'ContentInventoryActivityStore');
let N = new T(c.Z, {
    CONNECTION_OPEN: S,
    CONTENT_INVENTORY_SET_FEED: O
});
