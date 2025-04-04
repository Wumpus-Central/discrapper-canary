n.d(t, {
    T: () => b,
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
    _ = n(180335),
    p = n(561308),
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
function b(e) {
    return ''.concat(e.author_id, ':').concat(e.id);
}
function y(e) {
    return (0, p.n2)(e) ? null : (0, p.kr)(e) && e.author_type === a.i.USER ? u.Z.getActivities(e.author_id).find((t) => (t.type === h.IIU.PLAYING && (0, f.m9)(e) ? (0, _.cN)(e, t) : !!(t.type === h.IIU.LISTENING && (0, f.dU)(e)) && (0, _.pB)(e, t))) : void 0;
}
function v(e) {
    let t = new Set(),
        n = new Set();
    for (let r of e) {
        let e = y(r.content);
        if (void 0 !== e) {
            let i = b(r.content);
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
        { updatedKeys: n } = v(t.entries);
    return n.size > 0;
}
function I() {
    E.clear();
}
function S() {
    let e = !1,
        t = Array.from(E.keys()),
        n = new Set(),
        r = new Set();
    for (let t of d.Z.getFeeds().values()) {
        let { updatedKeys: i, matchedKeys: o } = v(n.size > 0 ? t.entries.filter((e) => !n.has(b(e.content))) : t.entries);
        for (let e of i) n.add(e);
        for (let e of o) r.add(e);
        e = e || i.size > 0;
    }
    for (let n of o().difference(t, [...r])) E.delete(n), (e = !0);
    return e;
}
class T extends (r = l.ZP.Store) {
    initialize() {
        this.waitFor(d.Z, u.Z), this.syncWith([u.Z], S);
    }
    getMatchingActivity(e) {
        return (0, p.n2)(e) ? null : E.get(b(e));
    }
    constructor(...e) {
        super(...e), m(this, 'canRenderContent', (e) => !(0, p.n2)(e) && (!g.has(e.content_type) || null != this.getMatchingActivity(e)));
    }
}
m(T, 'displayName', 'ContentInventoryActivityStore');
let N = new T(c.Z, {
    CONNECTION_OPEN: I,
    CONTENT_INVENTORY_SET_FEED: O
});
