n.d(t, { Z: () => O }), n(388685), n(704826), n(35282);
var r,
    i,
    a = n(442837),
    o = n(433517),
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
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let f = "MaskedLinkStore",
    p = new Set(),
    _ = new Set(),
    m = null == (r = window.GLOBAL_ENV.MEDIA_PROXY_ENDPOINT) ? void 0 : r.replace("//", "");
function h(e) {
    let t = (0, c.F)(e);
    switch (t) {
        case window.GLOBAL_ENV.INVITE_HOST:
        case window.GLOBAL_ENV.GIFT_CODE_HOST:
        case window.GLOBAL_ENV.GUILD_TEMPLATE_HOST:
        case m:
        case location.hostname:
            return !0;
        default:
            return u.SD.includes(t) || l.Z.isDiscordHostname(t) || p.has(t);
    }
}
function g(e) {
    let t = (0, c.E)(e);
    return _.has(t);
}
function E(e) {
    let { url: t } = e;
    if (h(t)) return !1;
    p.add((0, c.F)(t)),
        o.K.set(f, {
            trustedDomains: p,
            trustedProtocols: _,
        });
}
function b(e) {
    let { url: t } = e;
    if (g(t)) return !1;
    _.add((0, c.E)(t)),
        o.K.set(f, {
            trustedDomains: p,
            trustedProtocols: _,
        });
}
class y extends (i = a.ZP.Store) {
    initialize() {
        var e;
        let t = null != (e = o.K.get(f)) ? e : {};
        if (Array.isArray(t)) (p = new Set(null != t ? Array.from(t) : null)), (_ = new Set());
        else {
            let { trustedDomains: e, trustedProtocols: n } = t;
            (p = new Set(null != e ? Array.from(e) : null)), (_ = new Set(null != n ? Array.from(n) : null));
        }
    }
    isTrustedDomain(e) {
        return h(e);
    }
    isTrustedProtocol(e) {
        return g(e);
    }
}
d(y, "displayName", "MaskedLinkStore");
let O = new y(s.Z, {
    MASKED_LINK_ADD_TRUSTED_DOMAIN: E,
    MASKED_LINK_ADD_TRUSTED_PROTOCOL: b,
});
