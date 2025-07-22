(n.d(t, {
    $7: () => J,
    $e: () => K,
    GJ: () => O,
    Gy: () => C,
    RD: () => X,
    RZ: () => M,
    Tj: () => $,
    W: () => T,
    Wx: () => w,
    X0: () => I,
    Yh: () => z,
    Yk: () => q,
    _A: () => W,
    aq: () => S,
    cR: () => Z,
    iI: () => V,
    ik: () => P,
    kA: () => x,
    nT: () => Q,
    pM: () => N,
    yv: () => Y,
    zB: () => H
}),
    n(642613),
    n(539854));
var r = n(149765),
    i = n(866442),
    a = n(741361),
    o = n(911969),
    s = n(131704),
    l = n(601964),
    c = n(271383),
    u = n(594174),
    d = n(934415),
    f = n(823379),
    _ = n(700785),
    p = n(709054),
    h = n(51144),
    m = n(71080),
    g = n(981631),
    E = n(388032);
function b(e, t, n) {
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
function y(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                b(e, t, n[t]);
            }));
    }
    return e;
}
function O(e) {
    return r.e$(e.permissions, g.Plq.ADMINISTRATOR);
}
function v(e) {
    return r.e$(e.permissions, g.Plq.ADMINISTRATOR) ? m.aC.ADMINISTRATOR : m.aC.ROLE;
}
function I(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        r = v(e);
    return {
        rowType: r,
        colorString: null != (t = e.colorString) ? t : (0, i.Rf)(g.p6O),
        name: e.name,
        id: e.id,
        disabled: O(e) || n,
        key: ''.concat(r, ':').concat(e.id),
        tags: e.tags
    };
}
function T(e, t) {
    let n = +!O(e),
        r = +!O(t);
    return n !== r ? n - r : t.position - e.position;
}
function S() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : E.intl.string(E.t.gnsna2);
    return [
        {
            rowType: m.aC.EMPTY_STATE,
            colorString: (0, i.Rf)(g.p6O),
            name: e,
            disabled: !0,
            id: 'EMPTY_STATE'
        }
    ];
}
function A(e, t, n, i) {
    let a = u.default.getCurrentUser();
    if (null == a) return !1;
    if (null == e) return a.id !== t;
    let o = e.permissionOverwrites[t];
    return ((null == i ? void 0 : i[t]) != null && (o = i[t]), null == o || !r.e$(o.allow, n));
}
function N(e, t) {
    return p.default.castGuildIdAsEveryoneGuildRoleId(e) === t;
}
function C(e, t) {
    return !N(e, t);
}
function R(e, t) {
    return !N(e.id, t.id);
}
function P(e, t, n, r) {
    let i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => !0;
    return Object.values(t)
        .filter((t) => !O(t) && A(n, t.id, r) && R(e, t) && i(t.name))
        .sort(T)
        .map((e) => I(e));
}
function w(e, t, n, i) {
    let a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => !0;
    return Object.values(t)
        .filter((t) => !O(t) && A(n, t.id, i) && R(e, t) && a(t.name))
        .sort(T)
        .map((e) => I(e, r.e$(e.permissions, i)));
}
function D(e, t, n, r, i) {
    return Object.values(t).filter((t) => O(t) || (!A(n, t.id, r, i) && R(e, t)));
}
function L(e, t, n, i, a) {
    return Object.values(t).filter((t) => {
        var o;
        return O(t) || (!A(n, t.id, i, a) && R(e, t)) || r.e$(r.$e(t.permissions, null == (o = n.permissionOverwrites[t.id]) ? void 0 : o.allow), i);
    });
}
function x(e, t, n, r, i) {
    let a = [];
    return 0 ===
        (a = D(e, t, n, r, i)
            .sort(T)
            .map((e) => I(e))).length
        ? S(E.intl.string(E.t.nZfHsb))
        : a;
}
function M(e, t, n, i, a) {
    let o = [];
    return 0 ===
        (o = L(e, t, n, i, a)
            .sort(T)
            .map((e) => I(e, r.e$(e.permissions, i)))).length
        ? S(E.intl.string(E.t.nZfHsb))
        : o;
}
function k(e, t) {
    var n;
    return null != (n = c.ZP.getNick(t.id, e.id)) ? n : h.ZP.getName(e);
}
function j(e, t) {
    return (0, l.eM)(t, e);
}
function U(e, t) {
    return (0, l.eM)(t, e) ? m.aC.OWNER : m.aC.MEMBER;
}
function G(e, t) {
    var n;
    let r = U(e, t);
    return {
        rowType: r,
        name: k(e, t),
        nickname: null != (n = c.ZP.getNick(t.id, e.id)) ? n : null,
        username: h.ZP.getName(e),
        id: e.id,
        avatarURL: e.getAvatarURL(t.id, 24),
        bot: e.bot,
        verifiedBot: e.isVerifiedBot(),
        disabled: j(e, t),
        key: ''.concat(r, ':').concat(e.id)
    };
}
function B(e, t) {
    return e.rowType !== t.rowType ? e.rowType - t.rowType : e.name.toLocaleLowerCase().localeCompare(t.name.toLocaleLowerCase());
}
function V(e, t, n, r) {
    let i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => !0;
    return e
        .map(u.default.getUser)
        .filter(f.lm)
        .filter((e) => !(0, l.eM)(n, e) && A(t, e.id, r) && (i(k(e, n)) || i(e.username) || i(e.discriminator)))
        .map((e) => G(e, n))
        .sort(B);
}
function F(e, t, n, r, i) {
    return e
        .map(u.default.getUser)
        .filter(f.lm)
        .filter((e) => !A(t, e.id, r, i) || j(e, n));
}
function Z(e, t, n, r, i) {
    return F(e, t, n, r, i)
        .map((e) => G(e, n))
        .sort(B);
}
function H(e, t) {
    switch (e) {
        case m.aC.ROLE:
            return E.intl.string(E.t.ZxoFOD);
        case m.aC.OWNER:
            return E.intl.string(E.t.NWhYJi);
        case m.aC.ADMINISTRATOR:
            return E.intl.string(E.t.dwlcc3);
        case m.aC.MEMBER:
            return t ? E.intl.string(E.t.UAJxZm) : null;
        case m.aC.USER:
            return E.intl.string(E.t.KD6OJC);
        case m.aC.GUILD:
            return E.intl.string(E.t['5qyruL']);
        case m.aC.EMPTY_STATE:
            return null;
    }
}
function Y(e) {
    switch (e) {
        case m.aC.ROLE:
            return E.intl.string(E.t['Gzc/a2']);
        case m.aC.OWNER:
            return E.intl.string(E.t.icuNBA);
        case m.aC.ADMINISTRATOR:
            return E.intl.string(E.t.eTmN5e);
        case m.aC.MEMBER:
            return E.intl.string(E.t['Gzc/a2']);
        case m.aC.EMPTY_STATE:
        default:
            return null;
    }
}
function W(e, t, n) {
    let i = e.permissionOverwrites[e.guild_id];
    null == i && (i = _.we(e.guild_id));
    let a = y({}, i);
    return ((a.deny = r.Od(a.deny, t)), (a.allow = r.Od(a.allow, t)), n || (a.deny = r.IH(a.deny, t)), a);
}
function K(e, t, n) {
    let r = W(e, t, n);
    (0, a.kY)(e, r.id, r.allow, r.deny);
}
function z(e, t) {
    let n = u.default.getCurrentUser();
    if (null == n) return;
    let i = e.permissionOverwrites[n.id];
    if (null == i) {
        let i = {
            id: n.id,
            type: o.BN.MEMBER,
            allow: r.IH(_.Hn, t),
            deny: _.Hn
        };
        return (0, a.hw)(e.id, [i], !0);
    }
    {
        let { allow: n, deny: o } = i;
        return ((n = r.IH(n, t)), (0, a.kY)(e, i.id, n, o));
    }
}
function q(e, t) {
    if (null == e) return !1;
    let n = e.permissionOverwrites[e.guild_id];
    return ((null == t ? void 0 : t[e.guild_id]) != null && (n = t[e.guild_id]), null != n && r.e$(n.deny, e.accessPermissions));
}
function X(e, t) {
    let n = Object.keys(t);
    return 0 !== n.length && (1 !== n.length || n[0] !== e.id);
}
function Q(e, t, n) {
    return e === g.d4z.GUILD_TEXT || e === g.d4z.GUILD_ANNOUNCEMENT ? t : (!(0, s.bw)(e) && e !== g.d4z.GUILD_CATEGORY) || (t && n);
}
function J(e) {
    switch (e) {
        case g.d4z.GUILD_TEXT:
        case g.d4z.GUILD_ANNOUNCEMENT:
            return E.intl.format(E.t.ZDtA0d, {});
        case g.d4z.GUILD_VOICE:
            return E.intl.format(E.t.iZAMt7, {});
        case g.d4z.GUILD_CATEGORY:
            return E.intl.format(E.t.PhnARU, {});
        default:
            return null;
    }
}
function $(e, t) {
    let n = [];
    return (
        Object.values(e).forEach((e) => {
            let { row: r } = e;
            null != r.id && '' !== r.id && (r.rowType === m.aC.ROLE ? n.push((0, d.rX)(r.id, t)) : r.rowType === m.aC.MEMBER && n.push((0, d.jZ)(r.id, t)));
        }),
        n
    );
}
