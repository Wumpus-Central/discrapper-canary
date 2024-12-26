r.d(n, {
    EJ: function () {
        return m;
    },
    Pb: function () {
        return p;
    },
    XV: function () {
        return h;
    },
    Z4: function () {
        return E;
    },
    Zp: function () {
        return g;
    },
    f6: function () {
        return v;
    },
    ky: function () {
        return T;
    },
    p0: function () {
        return y;
    },
    pY: function () {
        return b;
    }
});
var i = r(108131),
    a = r.n(i),
    s = r(442837),
    o = r(607070),
    l = r(715903),
    u = r(271383),
    c = r(594174),
    d = r(308083),
    f = r(981631),
    _ = r(388032);
function h(e, n) {
    let r = Array.from(e);
    return (
        r.sort((e, r) => {
            let i = a().v3(''.concat(e).concat(n));
            return i - a().v3(''.concat(r).concat(n));
        }),
        r
    );
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
function m(e) {
    return null != e && e.hasFeature(f.oNc.CLAN);
}
function g(e, n) {
    var r, i;
    return null != n && n.identityGuildId === (null == e ? void 0 : e.id) && (((null == e ? void 0 : null === (r = e.profile) || void 0 === r ? void 0 : r.tag) != null && (null == e ? void 0 : null === (i = e.profile) || void 0 === i ? void 0 : i.tag) !== n.tag) || null == n.identityEnabled);
}
function E(e, n) {
    return (null != e && null != n && null != n.identityGuildId && n.identityGuildId === e && !!n.identityEnabled) || !1;
}
let v = (e, n) => {
        if (0 === e.length) return null;
        if (1 === e.length) return e[1];
        if (2 === e.length)
            return _.intl.formatToPlainString(_.t['+v1gGx'], {
                item1: e[0],
                item2: e[1]
            });
        if (null != n && e.length > n) {
            let r = e.slice(0, n).join(', '),
                i = _.intl.formatToPlainString(_.t['+E2fNj'], { n: e.length - n });
            return _.intl.formatToPlainString(_.t.hZNSNz, {
                items: r,
                last: i
            });
        }
        {
            let n = e.slice(0, -1).join(', '),
                r = e[e.length - 1];
            return _.intl.formatToPlainString(_.t.hZNSNz, {
                items: n,
                last: r
            });
        }
    },
    I = {
        [d.NC.SIZE_12]: 16,
        [d.NC.SIZE_16]: 16,
        [d.NC.SIZE_24]: 24,
        [d.NC.SIZE_32]: 32,
        [d.NC.SIZE_36]: 40
    };
function T(e, n) {
    let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : d.NC.SIZE_12;
    if (null == n) return;
    let { CDN_HOST: i } = window.GLOBAL_ENV;
    if (null == i) return;
    let a = I[r];
    return ''.concat(location.protocol, '//').concat(i, '/clan-badges/').concat(e, '/').concat(n, '.png?size=').concat(a);
}
d.NC.SIZE_12, d.NC.SIZE_16, d.NC.SIZE_24, d.NC.SIZE_32, d.NC.SIZE_36;
function b(e, n) {
    if (null == n) return;
    let { CDN_HOST: r } = window.GLOBAL_ENV;
    if (null != r) return ''.concat(location.protocol, '//').concat(r, '/clan-banners/').concat(e, '/').concat(n, '.png?size=512');
}
function y(e, n) {
    let r = (0, s.e7)([o.Z], () => o.Z.hideTags),
        i = (0, s.e7)([c.default], () => c.default.getUser(e), [e]),
        a = (0, s.e7)(
            [u.ZP],
            () => {
                if (null == n || null == e) return null;
                let r = u.ZP.getMember(n, e);
                return (0, l.EY)(r);
            },
            [n, e]
        ),
        { tag: d, guildId: f } = p(null == i ? void 0 : i.primaryGuild);
    return !r && null != f && null != d && !a && !0;
}
