n.d(t, { Z: () => v }), n(47120), n(757143), n(301563);
var r,
    i,
    o = n(442837),
    a = n(433517),
    s = n(570140),
    l = n(591759),
    c = n(902676),
    u = n(616922);
function d(e, t, n) {
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
let f = 'MaskedLinkStore',
    _ = new Set(),
    p = new Set(),
    h = null == (r = window.GLOBAL_ENV.MEDIA_PROXY_ENDPOINT) ? void 0 : r.replace('//', '');
function m(e) {
    let t = (0, c.F)(e);
    switch (t) {
        case window.GLOBAL_ENV.CDN_HOST:
        case window.GLOBAL_ENV.INVITE_HOST:
        case window.GLOBAL_ENV.GIFT_CODE_HOST:
        case window.GLOBAL_ENV.GUILD_TEMPLATE_HOST:
        case h:
        case location.hostname:
            return !0;
        default:
            return u.SD.includes(t) || l.Z.isDiscordHostname(t) || _.has(t);
    }
}
function g(e) {
    let t = (0, c.E)(e);
    return p.has(t);
}
function E(e) {
    let { url: t } = e;
    if (m(t)) return !1;
    _.add((0, c.F)(t)),
        a.K.set(f, {
            trustedDomains: _,
            trustedProtocols: p
        });
}
function b(e) {
    let { url: t } = e;
    if (g(t)) return !1;
    p.add((0, c.E)(t)),
        a.K.set(f, {
            trustedDomains: _,
            trustedProtocols: p
        });
}
class y extends (i = o.ZP.Store) {
    initialize() {
        var e;
        let t = null != (e = a.K.get(f)) ? e : {};
        if (Array.isArray(t)) (_ = new Set(null != t ? Array.from(t) : null)), (p = new Set());
        else {
            let { trustedDomains: e, trustedProtocols: n } = t;
            (_ = new Set(null != e ? Array.from(e) : null)), (p = new Set(null != n ? Array.from(n) : null));
        }
    }
    isTrustedDomain(e) {
        return m(e);
    }
    isTrustedProtocol(e) {
        return g(e);
    }
}
d(y, 'displayName', 'MaskedLinkStore');
let v = new y(s.Z, {
    MASKED_LINK_ADD_TRUSTED_DOMAIN: E,
    MASKED_LINK_ADD_TRUSTED_PROTOCOL: b
});
