(n.d(t, {
    T: () => m,
    Z: () => I
}),
    n(388685));
var r,
    i = n(392711),
    a = n.n(i),
    o = n(876215),
    s = n(442837),
    l = n(570140),
    c = n(158776),
    u = n(146282),
    d = n(107866),
    f = n(561308);
function _(e, t, n) {
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
let p = new Set([o.s.LISTENED_SESSION]),
    h = new Map();
function m(e) {
    return ''.concat(e.author_id, ':').concat(e.id);
}
function g(e) {
    return (0, d.C)(e, c.Z);
}
function E(e) {
    let t = new Set(),
        n = new Set();
    for (let r of e) {
        let e = g(r.content);
        if (void 0 !== e) {
            let i = m(r.content);
            (n.add(i), e !== h.get(i) && (t.add(i), h.set(i, e)));
        }
    }
    return {
        updatedKeys: t,
        matchedKeys: n
    };
}
function b(e) {
    let { feed: t } = e,
        { updatedKeys: n } = E(t.entries);
    return n.size > 0;
}
function y() {
    h.clear();
}
function O() {
    let e = !1,
        t = Array.from(h.keys()),
        n = new Set(),
        r = new Set();
    for (let t of u.Z.getFeeds().values()) {
        let { updatedKeys: i, matchedKeys: a } = E(n.size > 0 ? t.entries.filter((e) => !n.has(m(e.content))) : t.entries);
        for (let e of i) n.add(e);
        for (let e of a) r.add(e);
        e = e || i.size > 0;
    }
    for (let n of a().difference(t, [...r])) (h.delete(n), (e = !0));
    return e;
}
class v extends (r = s.ZP.Store) {
    initialize() {
        (this.waitFor(u.Z, c.Z), this.syncWith([c.Z], O));
    }
    getMatchingActivity(e) {
        return (0, f.n2)(e) ? null : h.get(m(e));
    }
    constructor(...e) {
        (super(...e), _(this, 'canRenderContent', (e) => !(0, f.n2)(e) && (!p.has(e.content_type) || null != this.getMatchingActivity(e))));
    }
}
_(v, 'displayName', 'ContentInventoryActivityStore');
let I = new v(l.Z, {
    CONNECTION_OPEN: y,
    CONTENT_INVENTORY_SET_FEED: b
});
