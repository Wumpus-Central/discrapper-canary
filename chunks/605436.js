(n.d(t, {
    $7: () => X,
    $e: () => W,
    RZ: () => x,
    Tj: () => Q,
    W: () => S,
    Wx: () => P,
    X0: () => T,
    Yh: () => K,
    Yk: () => z,
    _A: () => Y,
    aq: () => A,
    cR: () => F,
    iI: () => B,
    ik: () => R,
    kA: () => L,
    nT: () => q,
    pM: () => C,
    yv: () => H,
    zB: () => V
}),
    n(642613),
    n(539854));
var r = n(149765),
    i = n(741361),
    o = n(911969),
    a = n(131704),
    s = n(601964),
    l = n(345162),
    c = n(271383),
    u = n(594174),
    d = n(934415),
    f = n(823379),
    _ = n(625137),
    p = n(700785),
    h = n(709054),
    m = n(51144),
    g = n(71080),
    E = n(981631),
    b = n(388032);
function y(e, t, n) {
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
function O(e) {
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
                y(e, t, n[t]);
            }));
    }
    return e;
}
function v(e) {
    return (0, l.Fs)(e, E.Plq.ADMINISTRATOR);
}
function I(e) {
    return v(e) ? g.aC.ADMINISTRATOR : g.aC.ROLE;
}
function T(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        r = I(e);
    return {
        rowType: r,
        colorString: null != (t = e.colorString) ? t : E.Pbq,
        name: e.name,
        id: e.id,
        disabled: v(e) || n,
        key: ''.concat(r, ':').concat(e.id),
        tags: e.tags
    };
}
function S(e, t) {
    let n = +!v(e),
        r = +!v(t);
    return n !== r ? n - r : (0, _.y2)(e, t);
}
function A() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : b.intl.string(b.t.gnsna2);
    return [
        {
            rowType: g.aC.EMPTY_STATE,
            colorString: E.Pbq,
            name: e,
            disabled: !0,
            id: 'EMPTY_STATE'
        }
    ];
}
function N(e, t, n, i) {
    let o = u.default.getCurrentUser();
    if (null == o) return !1;
    if (null == e) return o.id !== t;
    let a = e.permissionOverwrites[t];
    return ((null == i ? void 0 : i[t]) != null && (a = i[t]), null == a || !r.e$(a.allow, n));
}
function C(e, t) {
    return h.default.castGuildIdAsEveryoneGuildRoleId(e) === t;
}
function R(e, t, n, r) {
    let i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => !0;
    return t
        .filter((e) => !v(e) && N(n, e.id, r) && !(0, l.fI)(e) && i(e.name))
        .sort(S)
        .map((e) => T(e));
}
function P(e, t, n, r) {
    let i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => !0;
    return t
        .filter((e) => !v(e) && N(n, e.id, r) && !(0, l.fI)(e) && i(e.name))
        .sort(S)
        .map((e) => T(e, (0, l.Fs)(e, r)));
}
function w(e, t, n, r, i) {
    return t.filter((e) => v(e) || (!N(n, e.id, r, i) && !(0, l.fI)(e)));
}
function D(e, t, n, i, o) {
    return t.filter((e) => {
        var t;
        return v(e) || (!N(n, e.id, i, o) && !(0, l.fI)(e)) || r.e$(r.$e(e.permissions, null == (t = n.permissionOverwrites[e.id]) ? void 0 : t.allow), i);
    });
}
function L(e, t, n, r, i) {
    let o = [];
    return 0 ===
        (o = w(e, t, n, r, i)
            .sort(S)
            .map((e) => T(e))).length
        ? A(b.intl.string(b.t.nZfHsb))
        : o;
}
function x(e, t, n, r, i) {
    let o = [];
    return 0 ===
        (o = D(e, t, n, r, i)
            .sort(S)
            .map((e) => T(e, (0, l.Fs)(e, r)))).length
        ? A(b.intl.string(b.t.nZfHsb))
        : o;
}
function M(e, t) {
    var n;
    return null != (n = c.ZP.getNick(t.id, e.id)) ? n : m.ZP.getName(e);
}
function k(e, t) {
    return (0, s.eM)(t, e);
}
function j(e, t) {
    return (0, s.eM)(t, e) ? g.aC.OWNER : g.aC.MEMBER;
}
function U(e, t) {
    var n;
    let r = j(e, t);
    return {
        rowType: r,
        name: M(e, t),
        nickname: null != (n = c.ZP.getNick(t.id, e.id)) ? n : null,
        username: m.ZP.getName(e),
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
        .map(u.default.getUser)
        .filter(f.lm)
        .filter((e) => !(0, s.eM)(n, e) && N(t, e.id, r) && (i(M(e, n)) || i(e.username) || i(e.discriminator)))
        .map((e) => U(e, n))
        .sort(G);
}
function Z(e, t, n, r, i) {
    return e
        .map(u.default.getUser)
        .filter(f.lm)
        .filter((e) => !N(t, e.id, r, i) || k(e, n));
}
function F(e, t, n, r, i) {
    return Z(e, t, n, r, i)
        .map((e) => U(e, n))
        .sort(G);
}
function V(e, t) {
    switch (e) {
        case g.aC.ROLE:
            return b.intl.string(b.t.ZxoFOD);
        case g.aC.OWNER:
            return b.intl.string(b.t.NWhYJi);
        case g.aC.ADMINISTRATOR:
            return b.intl.string(b.t.dwlcc3);
        case g.aC.MEMBER:
            return t ? b.intl.string(b.t.UAJxZm) : null;
        case g.aC.USER:
            return b.intl.string(b.t.KD6OJC);
        case g.aC.GUILD:
            return b.intl.string(b.t['5qyruL']);
        case g.aC.EMPTY_STATE:
            return null;
    }
}
function H(e) {
    switch (e) {
        case g.aC.ROLE:
            return b.intl.string(b.t['Gzc/a2']);
        case g.aC.OWNER:
            return b.intl.string(b.t.icuNBA);
        case g.aC.ADMINISTRATOR:
            return b.intl.string(b.t.eTmN5e);
        case g.aC.MEMBER:
            return b.intl.string(b.t['Gzc/a2']);
        case g.aC.EMPTY_STATE:
        default:
            return null;
    }
}
function Y(e, t, n) {
    let i = e.permissionOverwrites[e.guild_id];
    null == i && (i = p.we(e.guild_id));
    let o = O({}, i);
    return ((o.deny = r.Od(o.deny, t)), (o.allow = r.Od(o.allow, t)), n || (o.deny = r.IH(o.deny, t)), o);
}
function W(e, t, n) {
    let r = Y(e, t, n);
    (0, i.kY)(e, r.id, r.allow, r.deny);
}
function K(e, t) {
    let n = u.default.getCurrentUser();
    if (null == n) return;
    let a = e.permissionOverwrites[n.id];
    if (null == a) {
        let a = {
            id: n.id,
            type: o.BN.MEMBER,
            allow: r.IH(p.Hn, t),
            deny: p.Hn
        };
        return (0, i.hw)(e.id, [a], !0);
    }
    {
        let { allow: n, deny: o } = a;
        return ((n = r.IH(n, t)), (0, i.kY)(e, a.id, n, o));
    }
}
function z(e, t) {
    if (null == e) return !1;
    let n = e.permissionOverwrites[e.guild_id];
    return ((null == t ? void 0 : t[e.guild_id]) != null && (n = t[e.guild_id]), null != n && r.e$(n.deny, e.accessPermissions));
}
function q(e, t, n) {
    return e === E.d4z.GUILD_TEXT || e === E.d4z.GUILD_ANNOUNCEMENT ? t : (!(0, a.bw)(e) && e !== E.d4z.GUILD_CATEGORY) || (t && n);
}
function X(e) {
    switch (e) {
        case E.d4z.GUILD_TEXT:
        case E.d4z.GUILD_ANNOUNCEMENT:
            return b.intl.format(b.t.ZDtA0d, {});
        case E.d4z.GUILD_VOICE:
            return b.intl.format(b.t.iZAMt7, {});
        case E.d4z.GUILD_CATEGORY:
            return b.intl.format(b.t.PhnARU, {});
        default:
            return null;
    }
}
function Q(e, t) {
    let n = [];
    return (
        Object.values(e).forEach((e) => {
            let { row: r } = e;
            null != r.id && '' !== r.id && (r.rowType === g.aC.ROLE ? n.push((0, d.rX)(r.id, t)) : r.rowType === g.aC.MEMBER && n.push((0, d.jZ)(r.id, t)));
        }),
        n
    );
}
