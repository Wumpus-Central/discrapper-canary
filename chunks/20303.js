var i,
    a,
    o = r(47120);
var s = r(757143);
var l = r(442837),
    u = r(433517),
    c = r(570140),
    d = r(591759),
    f = r(902676),
    p = r(616922);
function h(e, n, r) {
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
let _ = 'MaskedLinkStore',
    m = new Set(),
    g = new Set(),
    E = null === (i = window.GLOBAL_ENV.MEDIA_PROXY_ENDPOINT) || void 0 === i ? void 0 : i.replace('//', '');
function v(e) {
    let n = (0, f.F)(e);
    switch (n) {
        case window.GLOBAL_ENV.CDN_HOST:
        case window.GLOBAL_ENV.INVITE_HOST:
        case window.GLOBAL_ENV.GIFT_CODE_HOST:
        case window.GLOBAL_ENV.GUILD_TEMPLATE_HOST:
        case E:
        case location.hostname:
            return !0;
        default:
            return p.SD.includes(n) || d.Z.isDiscordHostname(n) || m.has(n);
    }
}
function y(e) {
    let n = (0, f.E)(e);
    return g.has(n);
}
function b(e) {
    let { url: n } = e;
    if (v(n)) return !1;
    m.add((0, f.F)(n)),
        u.K.set(_, {
            trustedDomains: m,
            trustedProtocols: g
        });
}
function I(e) {
    let { url: n } = e;
    if (y(n)) return !1;
    g.add((0, f.E)(n)),
        u.K.set(_, {
            trustedDomains: m,
            trustedProtocols: g
        });
}
class T extends (a = l.ZP.Store) {
    initialize() {
        var e;
        let n = null !== (e = u.K.get(_)) && void 0 !== e ? e : {};
        if (Array.isArray(n)) (m = new Set(null != n ? Array.from(n) : null)), (g = new Set());
        else {
            let { trustedDomains: e, trustedProtocols: r } = n;
            (m = new Set(null != e ? Array.from(e) : null)), (g = new Set(null != r ? Array.from(r) : null));
        }
    }
    isTrustedDomain(e) {
        return v(e);
    }
    isTrustedProtocol(e) {
        return y(e);
    }
}
h(T, 'displayName', 'MaskedLinkStore'),
    (n.Z = new T(c.Z, {
        MASKED_LINK_ADD_TRUSTED_DOMAIN: b,
        MASKED_LINK_ADD_TRUSTED_PROTOCOL: I
    }));
