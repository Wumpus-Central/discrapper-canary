"use strict";
n.d(t, { A: () => p });
var r = n(311907),
    i = n(506774),
    s = n(73153),
    a = n(998218),
    o = n(155078),
    l = n(272984);
let u = "MaskedLinkStore",
    d = new Set(),
    c = new Set(),
    _ = window.GLOBAL_ENV.MEDIA_PROXY_ENDPOINT?.replace("//", "");
function f(e) {
    let t = (0, o.E)(e);
    switch (t) {
        case window.GLOBAL_ENV.INVITE_HOST:
        case window.GLOBAL_ENV.GIFT_CODE_HOST:
        case window.GLOBAL_ENV.GUILD_TEMPLATE_HOST:
        case _:
        case location.hostname:
            return !0;
        default:
            return l.UN.includes(t) || a.A.isDiscordHostname(t) || d.has(t);
    }
}
function E(e) {
    let t = (0, o.J)(e);
    return c.has(t);
}
class h extends r.Ay.Store {
    static displayName = "MaskedLinkStore";
    initialize() {
        let e = i.w.get(u) ?? {};
        if (Array.isArray(e)) (d = new Set(null != e ? Array.from(e) : null)), (c = new Set());
        else {
            let { trustedDomains: t, trustedProtocols: n } = e;
            (d = new Set(null != t ? Array.from(t) : null)), (c = new Set(null != n ? Array.from(n) : null));
        }
    }
    isTrustedDomain(e) {
        return f(e);
    }
    isTrustedProtocol(e) {
        return E(e);
    }
}
let p = new h(s.h, {
    MASKED_LINK_ADD_TRUSTED_DOMAIN: function (e) {
        let { url: t } = e;
        if (f(t)) return !1;
        d.add((0, o.E)(t)), i.w.set(u, { trustedDomains: d, trustedProtocols: c });
    },
    MASKED_LINK_ADD_TRUSTED_PROTOCOL: function (e) {
        let { url: t } = e;
        if (E(t)) return !1;
        c.add((0, o.J)(t)), i.w.set(u, { trustedDomains: d, trustedProtocols: c });
    },
});
