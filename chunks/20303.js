n.d(t, { Z: () => I }), n(47120), n(757143);
var i,
    r,
    a = n(442837),
    s = n(433517),
    o = n(570140),
    l = n(591759),
    u = n(902676),
    c = n(616922);
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
    h = null === (i = window.GLOBAL_ENV.MEDIA_PROXY_ENDPOINT) || void 0 === i ? void 0 : i.replace('//', '');
function m(e) {
    let t = (0, u.F)(e);
    switch (t) {
        case window.GLOBAL_ENV.CDN_HOST:
        case window.GLOBAL_ENV.INVITE_HOST:
        case window.GLOBAL_ENV.GIFT_CODE_HOST:
        case window.GLOBAL_ENV.GUILD_TEMPLATE_HOST:
        case h:
        case location.hostname:
            return !0;
        default:
            return c.SD.includes(t) || l.Z.isDiscordHostname(t) || _.has(t);
    }
}
function g(e) {
    let t = (0, u.E)(e);
    return p.has(t);
}
function E(e) {
    let { url: t } = e;
    if (m(t)) return !1;
    _.add((0, u.F)(t)),
        s.K.set(f, {
            trustedDomains: _,
            trustedProtocols: p
        });
}
function v(e) {
    let { url: t } = e;
    if (g(t)) return !1;
    p.add((0, u.E)(t)),
        s.K.set(f, {
            trustedDomains: _,
            trustedProtocols: p
        });
}
class y extends (r = a.ZP.Store) {
    initialize() {
        var e;
        let t = null !== (e = s.K.get(f)) && void 0 !== e ? e : {};
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
let I = new y(o.Z, {
    MASKED_LINK_ADD_TRUSTED_DOMAIN: E,
    MASKED_LINK_ADD_TRUSTED_PROTOCOL: v
});
