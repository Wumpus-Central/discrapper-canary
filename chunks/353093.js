n.d(t, {
    EJ: () => h,
    Pb: () => p,
    XV: () => _,
    Zp: () => g,
    f6: () => E,
    ky: () => y,
    p0: () => O,
    pY: () => v,
    up: () => m
}),
    n(230036);
var r = n(108131),
    i = n.n(r),
    o = n(442837),
    a = n(607070),
    s = n(715903),
    l = n(271383),
    c = n(594174),
    u = n(308083),
    d = n(981631),
    f = n(388032);
function _(e, t) {
    let n = Array.from(e);
    return n.sort((e, n) => i().v3(''.concat(e).concat(t)) - i().v3(''.concat(n).concat(t))), n;
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
function m(e) {
    return e.hasFeature(d.oNc.CLAN) || e.hasFeature(d.oNc.GUILD_TAGS);
}
function g(e, t) {
    var n, r;
    return null != t && t.identityGuildId === (null == e ? void 0 : e.id) && (((null == e || null == (n = e.profile) ? void 0 : n.tag) != null && (null == e || null == (r = e.profile) ? void 0 : r.tag) !== t.tag) || null == t.identityEnabled);
}
let E = (e, t) => {
        if (0 === e.length) return null;
        if (1 === e.length) return e[0];
        if (2 === e.length)
            return f.NW.formatToPlainString(f.t['+v1gGx'], {
                item1: e[0],
                item2: e[1]
            });
        if (null != t && e.length > t) {
            let n = e.slice(0, t).join(', '),
                r = f.NW.formatToPlainString(f.t['+E2fNj'], { n: e.length - t });
            return f.NW.formatToPlainString(f.t.hZNSNz, {
                items: n,
                last: r
            });
        }
        {
            let t = e.slice(0, -1).join(', '),
                n = e[e.length - 1];
            return f.NW.formatToPlainString(f.t.hZNSNz, {
                items: t,
                last: n
            });
        }
    },
    b = {
        [u.NC.SIZE_12]: 16,
        [u.NC.SIZE_16]: 16,
        [u.NC.SIZE_24]: 24,
        [u.NC.SIZE_32]: 32,
        [u.NC.SIZE_36]: 40
    };
function y(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : u.NC.SIZE_12;
    if (null == t) return;
    let { CDN_HOST: r } = window.GLOBAL_ENV;
    if (null == r) return;
    let i = b[n];
    return ''.concat(location.protocol, '//').concat(r, '/clan-badges/').concat(e, '/').concat(t, '.png?size=').concat(i);
}
function v(e, t) {
    if (null == t) return;
    let { CDN_HOST: n } = window.GLOBAL_ENV;
    if (null != n) return ''.concat(location.protocol, '//').concat(n, '/clan-banners/').concat(e, '/').concat(t, '.png?size=512');
}
function O(e, t) {
    let n = (0, o.e7)([a.Z], () => a.Z.hideTags),
        r = (0, o.e7)([c.default], () => c.default.getUser(e), [e]),
        i = (0, o.e7)(
            [l.ZP],
            () => {
                if (null == t || null == e) return null;
                let n = l.ZP.getMember(t, e);
                return (0, s.EY)(n);
            },
            [t, e]
        ),
        { tag: u, guildId: d } = p(null == r ? void 0 : r.primaryGuild);
    return !n && null != d && null != u && !i;
}
u.NC.SIZE_12, u.NC.SIZE_16, u.NC.SIZE_24, u.NC.SIZE_32, u.NC.SIZE_36;
