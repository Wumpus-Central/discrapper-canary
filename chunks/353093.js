n.d(t, {
    EJ: () => h,
    Pb: () => p,
    XV: () => _,
    Z4: () => g,
    Zp: () => m,
    f6: () => E,
    ky: () => y,
    p0: () => b,
    pY: () => I
});
var i = n(108131),
    r = n.n(i),
    a = n(442837),
    s = n(607070),
    o = n(715903),
    l = n(271383),
    u = n(594174),
    c = n(308083),
    d = n(981631),
    f = n(388032);
function _(e, t) {
    let n = Array.from(e);
    return n.sort((e, n) => r().v3(''.concat(e).concat(t)) - r().v3(''.concat(n).concat(t))), n;
}
function p(e) {
    return null != e && e.identityEnabled
        ? {
              guildId: e.identityGuildId,
              tag: e.tag,
              badge: e.badge
          }
        : {};
}
function h(e) {
    return null != e && e.hasFeature(d.oNc.CLAN);
}
function m(e, t) {
    var n, i;
    return null != t && t.identityGuildId === (null == e ? void 0 : e.id) && (((null == e ? void 0 : null === (n = e.profile) || void 0 === n ? void 0 : n.tag) != null && (null == e ? void 0 : null === (i = e.profile) || void 0 === i ? void 0 : i.tag) !== t.tag) || null == t.identityEnabled);
}
function g(e, t) {
    return null != e && null != t && null != t.identityGuildId && t.identityGuildId === e && !!t.identityEnabled;
}
let E = (e, t) => {
        if (0 === e.length) return null;
        if (1 === e.length) return e[0];
        if (2 === e.length)
            return f.intl.formatToPlainString(f.t['+v1gGx'], {
                item1: e[0],
                item2: e[1]
            });
        if (null != t && e.length > t) {
            let n = e.slice(0, t).join(', '),
                i = f.intl.formatToPlainString(f.t['+E2fNj'], { n: e.length - t });
            return f.intl.formatToPlainString(f.t.hZNSNz, {
                items: n,
                last: i
            });
        }
        {
            let t = e.slice(0, -1).join(', '),
                n = e[e.length - 1];
            return f.intl.formatToPlainString(f.t.hZNSNz, {
                items: t,
                last: n
            });
        }
    },
    v = {
        [c.NC.SIZE_12]: 16,
        [c.NC.SIZE_16]: 16,
        [c.NC.SIZE_24]: 24,
        [c.NC.SIZE_32]: 32,
        [c.NC.SIZE_36]: 40
    };
function y(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : c.NC.SIZE_12;
    if (null == t) return;
    let { CDN_HOST: i } = window.GLOBAL_ENV;
    if (null == i) return;
    let r = v[n];
    return ''.concat(location.protocol, '//').concat(i, '/clan-badges/').concat(e, '/').concat(t, '.png?size=').concat(r);
}
function I(e, t) {
    if (null == t) return;
    let { CDN_HOST: n } = window.GLOBAL_ENV;
    if (null != n) return ''.concat(location.protocol, '//').concat(n, '/clan-banners/').concat(e, '/').concat(t, '.png?size=512');
}
function b(e, t) {
    let n = (0, a.e7)([s.Z], () => s.Z.hideTags),
        i = (0, a.e7)([u.default], () => u.default.getUser(e), [e]),
        r = (0, a.e7)(
            [l.ZP],
            () => {
                if (null == t || null == e) return null;
                let n = l.ZP.getMember(t, e);
                return (0, o.EY)(n);
            },
            [t, e]
        ),
        { tag: c, guildId: d } = p(null == i ? void 0 : i.primaryGuild);
    return !n && null != d && null != c && !r;
}
c.NC.SIZE_12, c.NC.SIZE_16, c.NC.SIZE_24, c.NC.SIZE_32, c.NC.SIZE_36;
