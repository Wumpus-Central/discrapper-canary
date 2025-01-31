let i, r;
n.d(t, { Z: () => v });
var a,
    s = n(442837),
    o = n(433517),
    l = n(570140),
    u = n(902676),
    c = n(626135),
    d = n(358085),
    f = n(704133),
    _ = n(981631);
function p(e, t, n) {
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
let h = 'BlockedDomainStore',
    m = 'BlockedDomainRevision';
function g(e) {
    let { list: t, revision: n } = e;
    (r = null), (i = {});
    for (let e = 0; e < t.length; e++) i[t[e]] = !0;
    f.Z.saveBlockedDomains(t), o.K.set('BlockedDomainRevision', n);
}
class E extends (a = s.ZP.Store) {
    initialize() {
        (r = null), o.K.get(h) && (o.K.remove(m), o.K.remove(h));
    }
    getCurrentRevision() {
        if (!(0, d.isDesktop)()) return null;
        if (null == r) {
            var e;
            r = null !== (e = o.K.get(m)) && void 0 !== e ? e : null;
        }
        return r;
    }
    async getBlockedDomainList() {
        if (null == i) {
            let e = await f.Z.getBlockedDomains();
            i = {};
            for (let t = 0; t < e.length; t++) i[e[t]] = !0;
        }
        return i;
    }
    isBlockedDomain(e) {
        let t = n(647229);
        if (null == i) return this.getBlockedDomainList(), null;
        let r = (0, u.F)(e),
            a = new t.hash.sha256(),
            s = t.codec.hex.fromBits(a.update(r).finalize()),
            o = '';
        i[s] && (o = r);
        let l = r.indexOf('.');
        for (; -1 !== l && '' === o; ) (r = r.substring(l + 1)), a.reset(), i[(s = t.codec.hex.fromBits(a.update(r).finalize()))] && (o = r), (l = r.indexOf('.'));
        return '' !== o ? (c.default.track(_.rMx.LINK_SECURITY_CHECK_BLOCKED, { blocked_domain: o }), o) : null;
    }
}
p(E, 'displayName', 'BlockedDomainStore');
let v = new E(l.Z, { BLOCKED_DOMAIN_LIST_FETCHED: g });
