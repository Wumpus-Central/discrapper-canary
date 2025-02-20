let r, i;
n.d(t, { Z: () => v });
var o,
    a = n(442837),
    s = n(433517),
    l = n(570140),
    c = n(902676),
    u = n(626135),
    d = n(358085),
    f = n(704133),
    p = n(981631);
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
let h = 'BlockedDomainStore',
    m = 'BlockedDomainRevision';
function g(e) {
    let { list: t, revision: n } = e;
    (i = null), (r = {});
    for (let e = 0; e < t.length; e++) r[t[e]] = !0;
    f.Z.saveBlockedDomains(t), s.K.set('BlockedDomainRevision', n);
}
class E extends (o = a.ZP.Store) {
    initialize() {
        (i = null), s.K.get(h) && (s.K.remove(m), s.K.remove(h));
    }
    getCurrentRevision() {
        if (!(0, d.isDesktop)()) return null;
        if (null == i) {
            var e;
            i = null !== (e = s.K.get(m)) && void 0 !== e ? e : null;
        }
        return i;
    }
    async getBlockedDomainList() {
        if (null == r) {
            let e = await f.Z.getBlockedDomains();
            r = {};
            for (let t = 0; t < e.length; t++) r[e[t]] = !0;
        }
        return r;
    }
    isBlockedDomain(e) {
        let t = n(647229);
        if (null == r) return this.getBlockedDomainList(), null;
        let i = (0, c.F)(e),
            o = new t.hash.sha256(),
            a = t.codec.hex.fromBits(o.update(i).finalize()),
            s = '';
        r[a] && (s = i);
        let l = i.indexOf('.');
        for (; -1 !== l && '' === s; ) (i = i.substring(l + 1)), o.reset(), r[(a = t.codec.hex.fromBits(o.update(i).finalize()))] && (s = i), (l = i.indexOf('.'));
        return '' !== s ? (u.default.track(p.rMx.LINK_SECURITY_CHECK_BLOCKED, { blocked_domain: s }), s) : null;
    }
}
_(E, 'displayName', 'BlockedDomainStore');
let v = new E(l.Z, { BLOCKED_DOMAIN_LIST_FETCHED: g });
