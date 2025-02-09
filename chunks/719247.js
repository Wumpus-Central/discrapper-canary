n.d(t, {
    T: () => v,
    Z: () => N
}),
    n(47120);
var i,
    r = n(392711),
    a = n.n(r),
    s = n(661869),
    o = n(876215),
    l = n(442837),
    u = n(570140),
    c = n(158776),
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
let g = new Set([o.s.LISTENED_SESSION]),
    E = new Map();
function v(e) {
    return ''.concat(e.author_id, ':').concat(e.id);
}
function y(e) {
    return (0, p.n2)(e) ? null : (0, p.kr)(e) && e.author_type === s.i.USER ? c.Z.getActivities(e.author_id).find((t) => (t.type === h.IIU.PLAYING && (0, f.m9)(e) ? (0, _.cN)(e, t) : !!(t.type === h.IIU.LISTENING && (0, f.dU)(e)) && (0, _.pB)(e, t))) : void 0;
}
function I(e) {
    let t = new Set(),
        n = new Set();
    for (let i of e) {
        let e = y(i.content);
        if (void 0 !== e) {
            let r = v(i.content);
            n.add(r), e !== E.get(r) && (t.add(r), E.set(r, e));
        }
    }
    return {
        updatedKeys: t,
        matchedKeys: n
    };
}
function T(e) {
    let { feed: t } = e,
        { updatedKeys: n } = I(t.entries);
    return n.size > 0;
}
function b() {
    E.clear();
}
function S() {
    let e = !1,
        t = Array.from(E.keys()),
        n = new Set(),
        i = new Set();
    for (let t of d.Z.getFeeds().values()) {
        let { updatedKeys: r, matchedKeys: a } = I(n.size > 0 ? t.entries.filter((e) => !n.has(v(e.content))) : t.entries);
        for (let e of r) n.add(e);
        for (let e of a) i.add(e);
        e = e || r.size > 0;
    }
    for (let n of a().difference(t, [...i])) E.delete(n), (e = !0);
    return e;
}
class A extends (i = l.ZP.Store) {
    initialize() {
        this.waitFor(d.Z, c.Z), this.syncWith([c.Z], S);
    }
    getMatchingActivity(e) {
        return (0, p.n2)(e) ? null : E.get(v(e));
    }
    constructor(...e) {
        super(...e), m(this, 'canRenderContent', (e) => !(0, p.n2)(e) && (!g.has(e.content_type) || null != this.getMatchingActivity(e)));
    }
}
m(A, 'displayName', 'ContentInventoryActivityStore');
let N = new A(u.Z, {
    CONNECTION_OPEN: b,
    CONTENT_INVENTORY_SET_FEED: T
});
