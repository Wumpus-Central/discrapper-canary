let r, i;
n.d(t, { Z: () => v });
var o,
    a = n(442837),
    s = n(668757),
    l = n(433517),
    c = n(570140),
    u = n(185996),
    d = n(902676),
    f = n(626135),
    _ = n(358085),
    p = n(704133),
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
let g = 'BlockedDomainStore',
    E = 'BlockedDomainRevision';
function b(e) {
    let { list: t, revision: n } = e;
    if (!(0, u.U)()) {
        (i = null), (r = {});
        for (let e = 0; e < t.length; e++) r[t[e]] = !0;
        p.Z.saveBlockedDomains(t), l.K.set('BlockedDomainRevision', n);
    }
}
class y extends (o = a.ZP.Store) {
    initialize() {
        (i = null), l.K.get(g) && (l.K.remove(E), l.K.remove(g));
    }
    getCurrentRevision() {
        if (!(0, _.isDesktop)()) return null;
        if (null == i) {
            var e;
            i = null != (e = l.K.get(E)) ? e : null;
        }
        return i;
    }
    async getBlockedDomainList() {
        if (null == r) {
            let e = await p.Z.getBlockedDomains();
            r = {};
            for (let t = 0; t < e.length; t++) r[e[t]] = !0;
        }
        return r;
    }
    _isBlockedDomain(e) {
        let t = n(647229);
        if (null == r) return this.getBlockedDomainList(), null;
        let i = (0, d.F)(e),
            o = new t.hash.sha256(),
            a = t.codec.hex.fromBits(o.update(i).finalize()),
            s = '';
        r[a] && (s = i);
        let l = i.indexOf('.');
        for (; -1 !== l && '' === s; ) (i = i.substring(l + 1)), o.reset(), r[(a = t.codec.hex.fromBits(o.update(i).finalize()))] && (s = i), (l = i.indexOf('.'));
        return s;
    }
    isBlockedDomain(e) {
        let t = (0, u.U)() ? (0, s.PJ)(e) : this._isBlockedDomain(e);
        return '' !== t && null !== t ? (f.default.track(h.rMx.LINK_SECURITY_CHECK_BLOCKED, { blocked_domain: t }), t) : null;
    }
}
m(y, 'displayName', 'BlockedDomainStore');
let v = new y(c.Z, { BLOCKED_DOMAIN_LIST_FETCHED: b });
