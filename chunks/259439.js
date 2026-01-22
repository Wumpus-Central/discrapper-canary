n.d(t, { A: () => O }), n(896048), n(747238), n(812715);
var r,
    i,
    a = n(311907),
    s = n(506774),
    o = n(73153),
    l = n(998218),
    c = n(155078),
    u = n(272984);
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
    h = null == (r = window.GLOBAL_ENV.MEDIA_PROXY_ENDPOINT) ? void 0 : r.replace("//", "");
function m(e) {
    let t = (0, c.E)(e);
    switch (t) {
        case window.GLOBAL_ENV.INVITE_HOST:
        case window.GLOBAL_ENV.GIFT_CODE_HOST:
        case window.GLOBAL_ENV.GUILD_TEMPLATE_HOST:
        case h:
        case location.hostname:
            return !0;
        default:
            return u.UN.includes(t) || l.A.isDiscordHostname(t) || p.has(t);
    }
}
function g(e) {
    let t = (0, c.J)(e);
    return _.has(t);
}
function E(e) {
    let { url: t } = e;
    if (m(t)) return !1;
    p.add((0, c.E)(t)),
        s.w.set(f, {
            trustedDomains: p,
            trustedProtocols: _,
        });
}
function b(e) {
    let { url: t } = e;
    if (g(t)) return !1;
    _.add((0, c.J)(t)),
        s.w.set(f, {
            trustedDomains: p,
            trustedProtocols: _,
        });
}
class y extends (i = a.Ay.Store) {
    initialize() {
        var e;
        let t = null != (e = s.w.get(f)) ? e : {};
        if (Array.isArray(t)) (p = new Set(null != t ? Array.from(t) : null)), (_ = new Set());
        else {
            let { trustedDomains: e, trustedProtocols: n } = t;
            (p = new Set(null != e ? Array.from(e) : null)), (_ = new Set(null != n ? Array.from(n) : null));
        }
    }
    isTrustedDomain(e) {
        return m(e);
    }
    isTrustedProtocol(e) {
        return g(e);
    }
}
d(y, "displayName", "MaskedLinkStore");
let O = new y(o.h, {
    MASKED_LINK_ADD_TRUSTED_DOMAIN: E,
    MASKED_LINK_ADD_TRUSTED_PROTOCOL: b,
});
