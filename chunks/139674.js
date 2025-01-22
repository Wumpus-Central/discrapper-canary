let i, a;
var o,
    s = r(442837),
    l = r(433517),
    u = r(570140),
    c = r(902676),
    d = r(626135),
    f = r(358085),
    p = r(704133),
    h = r(981631);
function _(e, n, r) {
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
    p.Z.saveBlockedDomains(n), l.K.set('BlockedDomainRevision', r);
}
class v extends (o = s.ZP.Store) {
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
            let e = await p.Z.getBlockedDomains();
            i = {};
            for (let n = 0; n < e.length; n++) i[e[n]] = !0;
        }
        return i;
    }
    isBlockedDomain(e) {
        let n = r(647229);
        if (null == i) return this.getBlockedDomainList(), null;
        let a = (0, c.F)(e),
            o = new n.hash.sha256(),
            s = n.codec.hex.fromBits(o.update(a).finalize()),
            l = '';
        i[s] && (l = a);
        let u = a.indexOf('.');
        for (; -1 !== u && '' === l; ) (a = a.substring(u + 1)), o.reset(), i[(s = n.codec.hex.fromBits(o.update(a).finalize()))] && (l = a), (u = a.indexOf('.'));
        return '' !== l ? (d.default.track(h.rMx.LINK_SECURITY_CHECK_BLOCKED, { blocked_domain: l }), l) : null;
    }
}
_(v, 'displayName', 'BlockedDomainStore'), (n.Z = new v(u.Z, { BLOCKED_DOMAIN_LIST_FETCHED: E }));
