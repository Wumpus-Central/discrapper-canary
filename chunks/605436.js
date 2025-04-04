n.d(t, {
    $7: () => X,
    $e: () => Y,
    GJ: () => y,
    Gy: () => A,
    RD: () => q,
    RZ: () => x,
    Tj: () => J,
    W: () => I,
    Wx: () => P,
    X0: () => O,
    Yh: () => K,
    Yk: () => z,
    _A: () => W,
    aq: () => S,
    cR: () => V,
    iI: () => B,
    ik: () => R,
    kA: () => L,
    nT: () => Q,
    pM: () => N,
    yv: () => H,
    zB: () => Z
}),
    n(230036),
    n(653041);
var r = n(149765),
    i = n(866442),
    o = n(741361),
    a = n(911969),
    s = n(131704),
    l = n(271383),
    c = n(594174),
    u = n(934415),
    d = n(823379),
    f = n(700785),
    _ = n(709054),
    p = n(51144),
    h = n(71080),
    m = n(981631),
    g = n(388032);
function E(e, t, n) {
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
function b(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                E(e, t, n[t]);
            });
    }
    return e;
}
function y(e) {
    return r.e$(e.permissions, m.Plq.ADMINISTRATOR);
}
function v(e) {
    return r.e$(e.permissions, m.Plq.ADMINISTRATOR) ? h.aC.ADMINISTRATOR : h.aC.ROLE;
}
function O(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        r = v(e);
    return {
        rowType: r,
        colorString: null != (t = e.colorString) ? t : (0, i.Rf)(m.p6O),
        name: e.name,
        id: e.id,
        disabled: y(e) || n,
        key: ''.concat(r, ':').concat(e.id),
        tags: e.tags
    };
}
function I(e, t) {
    let n = +!y(e),
        r = +!y(t);
    return n !== r ? n - r : t.position - e.position;
}
function S() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : g.NW.string(g.t.gnsna2);
    return [
        {
            rowType: h.aC.EMPTY_STATE,
            colorString: (0, i.Rf)(m.p6O),
            name: e,
            disabled: !0,
            id: 'EMPTY_STATE'
        }
    ];
}
function T(e, t, n, i) {
    let o = c.default.getCurrentUser();
    if (null == o) return !1;
    if (null == e) return o.id !== t;
    let a = e.permissionOverwrites[t];
    return (null == i ? void 0 : i[t]) != null && (a = i[t]), null == a || !r.e$(a.allow, n);
}
function N(e, t) {
    return _.default.castGuildIdAsEveryoneGuildRoleId(e) === t;
}
function A(e, t) {
    return !N(e, t);
}
function C(e, t) {
    return !N(e.id, t.id);
}
function R(e, t, n, r) {
    let i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => !0;
    return Object.values(t)
        .filter((t) => !y(t) && T(n, t.id, r) && C(e, t) && i(t.name))
        .sort(I)
        .map((e) => O(e));
}
function P(e, t, n, i) {
    let o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => !0;
    return Object.values(t)
        .filter((t) => !y(t) && T(n, t.id, i) && C(e, t) && o(t.name))
        .sort(I)
        .map((e) => O(e, r.e$(e.permissions, i)));
}
function w(e, t, n, r, i) {
    return Object.values(t).filter((t) => y(t) || (!T(n, t.id, r, i) && C(e, t)));
}
function D(e, t, n, i, o) {
    return Object.values(t).filter((t) => {
        var a;
        return y(t) || (!T(n, t.id, i, o) && C(e, t)) || r.e$(r.$e(t.permissions, null == (a = n.permissionOverwrites[t.id]) ? void 0 : a.allow), i);
    });
}
function L(e, t, n, r, i) {
    let o = [];
    return 0 ===
        (o = w(e, t, n, r, i)
            .sort(I)
            .map((e) => O(e))).length
        ? S(g.NW.string(g.t.nZfHsb))
        : o;
}
function x(e, t, n, i, o) {
    let a = [];
    return 0 ===
        (a = D(e, t, n, i, o)
            .sort(I)
            .map((e) => O(e, r.e$(e.permissions, i)))).length
        ? S(g.NW.string(g.t.nZfHsb))
        : a;
}
function M(e, t) {
    var n;
    return null != (n = l.ZP.getNick(t.id, e.id)) ? n : p.ZP.getName(e);
}
function k(e, t) {
    return t.isOwner(e);
}
function j(e, t) {
    return t.isOwner(e) ? h.aC.OWNER : h.aC.MEMBER;
}
function U(e, t) {
    var n;
    let r = j(e, t);
    return {
        rowType: r,
        name: M(e, t),
        nickname: null != (n = l.ZP.getNick(t.id, e.id)) ? n : null,
        username: p.ZP.getName(e),
        id: e.id,
        avatarURL: e.getAvatarURL(t.id, 24),
        bot: e.bot,
        verifiedBot: e.isVerifiedBot(),
        disabled: k(e, t),
        key: ''.concat(r, ':').concat(e.id)
    };
}
function G(e, t) {
    return e.rowType !== t.rowType ? e.rowType - t.rowType : e.name.toLocaleLowerCase().localeCompare(t.name.toLocaleLowerCase());
}
function B(e, t, n, r) {
    let i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => !0;
    return e
        .map(c.default.getUser)
        .filter(d.lm)
        .filter((e) => !n.isOwner(e) && T(t, e.id, r) && (i(M(e, n)) || i(e.username) || i(e.discriminator)))
        .map((e) => U(e, n))
        .sort(G);
}
function F(e, t, n, r, i) {
    return e
        .map(c.default.getUser)
        .filter(d.lm)
        .filter((e) => !T(t, e.id, r, i) || k(e, n));
}
function V(e, t, n, r, i) {
    return F(e, t, n, r, i)
        .map((e) => U(e, n))
        .sort(G);
}
function Z(e, t) {
    switch (e) {
        case h.aC.ROLE:
            return g.NW.string(g.t.ZxoFOD);
        case h.aC.OWNER:
            return g.NW.string(g.t.NWhYJi);
        case h.aC.ADMINISTRATOR:
            return g.NW.string(g.t.dwlcc3);
        case h.aC.MEMBER:
            return t ? g.NW.string(g.t.UAJxZm) : null;
        case h.aC.USER:
            return g.NW.string(g.t.KD6OJC);
        case h.aC.GUILD:
            return g.NW.string(g.t['5qyruL']);
        case h.aC.EMPTY_STATE:
            return null;
    }
}
function H(e) {
    switch (e) {
        case h.aC.ROLE:
            return g.NW.string(g.t['Gzc/a2']);
        case h.aC.OWNER:
            return g.NW.string(g.t.icuNBA);
        case h.aC.ADMINISTRATOR:
            return g.NW.string(g.t.eTmN5e);
        case h.aC.MEMBER:
            return g.NW.string(g.t['Gzc/a2']);
        case h.aC.EMPTY_STATE:
        default:
            return null;
    }
}
function W(e, t, n) {
    let i = e.permissionOverwrites[e.guild_id];
    null == i && (i = f.we(e.guild_id));
    let o = b({}, i);
    return (o.deny = r.Od(o.deny, t)), (o.allow = r.Od(o.allow, t)), n || (o.deny = r.IH(o.deny, t)), o;
}
function Y(e, t, n) {
    let r = W(e, t, n);
    (0, o.kY)(e, r.id, r.allow, r.deny);
}
function K(e, t) {
    let n = c.default.getCurrentUser();
    if (null == n) return;
    let i = e.permissionOverwrites[n.id];
    if (null == i) {
        let i = {
            id: n.id,
            type: a.BN.MEMBER,
            allow: r.IH(f.Hn, t),
            deny: f.Hn
        };
        return (0, o.hw)(e.id, [i], !0);
    }
    {
        let { allow: n, deny: a } = i;
        return (n = r.IH(n, t)), (0, o.kY)(e, i.id, n, a);
    }
}
function z(e, t) {
    if (null == e) return !1;
    let n = e.permissionOverwrites[e.guild_id];
    return (null == t ? void 0 : t[e.guild_id]) != null && (n = t[e.guild_id]), null != n && r.e$(n.deny, e.accessPermissions);
}
function q(e, t) {
    let n = Object.keys(t);
    return 0 !== n.length && (1 !== n.length || n[0] !== e.id);
}
function Q(e, t, n) {
    return e === m.d4z.GUILD_TEXT || e === m.d4z.GUILD_ANNOUNCEMENT ? t : (!(0, s.bw)(e) && e !== m.d4z.GUILD_CATEGORY) || (t && n);
}
function X(e) {
    switch (e) {
        case m.d4z.GUILD_TEXT:
        case m.d4z.GUILD_ANNOUNCEMENT:
            return g.NW.format(g.t.ZDtA0d, {});
        case m.d4z.GUILD_VOICE:
            return g.NW.format(g.t.iZAMt7, {});
        case m.d4z.GUILD_CATEGORY:
            return g.NW.format(g.t.PhnARU, {});
        default:
            return null;
    }
}
function J(e, t) {
    let n = [];
    return (
        Object.values(e).forEach((e) => {
            let { row: r } = e;
            null != r.id && '' !== r.id && (r.rowType === h.aC.ROLE ? n.push((0, u.rX)(r.id, t)) : r.rowType === h.aC.MEMBER && n.push((0, u.jZ)(r.id, t)));
        }),
        n
    );
}
