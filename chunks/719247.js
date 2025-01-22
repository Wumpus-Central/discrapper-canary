r.d(n, {
    T: function () {
        return b;
    }
});
var i,
    a = r(47120);
var o = r(392711),
    s = r.n(o),
    l = r(661869),
    u = r(876215),
    c = r(442837),
    d = r(570140),
    f = r(158776),
    p = r(146282),
    h = r(26033),
    _ = r(180335),
    m = r(561308),
    g = r(981631);
function E(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let v = new Set([u.s.LISTENED_SESSION]),
    y = new Map();
function b(e) {
    return ''.concat(e.author_id, ':').concat(e.id);
}
function I(e) {
    return (0, m.n2)(e) ? null : (0, m.kr)(e) && e.author_type === l.i.USER ? f.Z.getActivities(e.author_id).find((n) => (n.type === g.IIU.PLAYING && (0, h.m9)(e) ? (0, _.cN)(e, n) : !!(n.type === g.IIU.LISTENING && (0, h.dU)(e)) && (0, _.pB)(e, n))) : void 0;
}
function T(e) {
    let n = new Set(),
        r = new Set();
    for (let i of e) {
        let e = I(i.content);
        if (void 0 !== e) {
            let a = b(i.content);
            r.add(a), e !== y.get(a) && (n.add(a), y.set(a, e));
        }
    }
    return {
        updatedKeys: n,
        matchedKeys: r
    };
}
function S(e) {
    let { feed: n } = e,
        { updatedKeys: r } = T(n.entries);
    return r.size > 0;
}
function A() {
    y.clear();
}
function C() {
    let e = !1,
        n = Array.from(y.keys()),
        r = new Set(),
        i = new Set();
    for (let n of p.Z.getFeeds().values()) {
        let { updatedKeys: a, matchedKeys: o } = T(r.size > 0 ? n.entries.filter((e) => !r.has(b(e.content))) : n.entries);
        for (let e of a) r.add(e);
        for (let e of o) i.add(e);
        e = e || a.size > 0;
    }
    for (let r of s().difference(n, [...i])) y.delete(r), (e = !0);
    return e;
}
class N extends (i = c.ZP.Store) {
    initialize() {
        this.waitFor(p.Z, f.Z), this.syncWith([f.Z], C);
    }
    getMatchingActivity(e) {
        return (0, m.n2)(e) ? null : y.get(b(e));
    }
    constructor(...e) {
        super(...e), E(this, 'canRenderContent', (e) => !(0, m.n2)(e) && (!v.has(e.content_type) || null != this.getMatchingActivity(e)));
    }
}
E(N, 'displayName', 'ContentInventoryActivityStore'),
    (n.Z = new N(d.Z, {
        CONNECTION_OPEN: A,
        CONTENT_INVENTORY_SET_FEED: S
    }));
