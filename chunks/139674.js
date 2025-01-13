let i, a;
var s,
    o = r(442837),
    l = r(433517),
    u = r(570140),
    c = r(902676),
    d = r(626135),
    f = r(358085),
    _ = r(704133),
    h = r(981631);
function p(e, n, r) {
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
let m = 'BlockedDomainStore',
    g = 'BlockedDomainRevision';
function E(e) {
    let { list: n, revision: r } = e;
    (a = null), (i = {});
    for (let e = 0; e < n.length; e++) i[n[e]] = !0;
    _.Z.saveBlockedDomains(n), l.K.set('BlockedDomainRevision', r);
}
class v extends (s = o.ZP.Store) {
    initialize() {
        (a = null), l.K.get(m) && (l.K.remove(g), l.K.remove(m));
    }
    getCurrentRevision() {
        if (!(0, f.isDesktop)()) return null;
        if (null == a) {
            var e;
            a = null !== (e = l.K.get(g)) && void 0 !== e ? e : null;
        }
        return a;
    }
    async getBlockedDomainList() {
        if (null == i) {
            let e = await _.Z.getBlockedDomains();
            i = {};
            for (let n = 0; n < e.length; n++) i[e[n]] = !0;
        }
        return i;
    }
    isBlockedDomain(e) {
        let n = r(647229);
        if (null == i) return this.getBlockedDomainList(), null;
        let a = (0, c.F)(e),
            s = new n.hash.sha256(),
            o = n.codec.hex.fromBits(s.update(a).finalize()),
            l = '';
        i[o] && (l = a);
        let u = a.indexOf('.');
        for (; -1 !== u && '' === l; ) (a = a.substring(u + 1)), s.reset(), i[(o = n.codec.hex.fromBits(s.update(a).finalize()))] && (l = a), (u = a.indexOf('.'));
        return '' !== l ? (d.default.track(h.rMx.LINK_SECURITY_CHECK_BLOCKED, { blocked_domain: l }), l) : null;
    }
}
p(v, 'displayName', 'BlockedDomainStore'), (n.Z = new v(u.Z, { BLOCKED_DOMAIN_LIST_FETCHED: E }));
