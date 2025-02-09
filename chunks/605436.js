n.d(t, {
    $7: () => q,
    $e: () => H,
    GJ: () => E,
    Gy: () => A,
    RD: () => K,
    RZ: () => x,
    Tj: () => Q,
    W: () => I,
    Wx: () => R,
    X0: () => y,
    Yh: () => Y,
    Yk: () => W,
    _A: () => j,
    aq: () => T,
    cR: () => Z,
    iI: () => G,
    ik: () => C,
    kA: () => L,
    nT: () => z,
    pM: () => S,
    yv: () => V,
    zB: () => F
}),
    n(653041);
var i = n(149765),
    r = n(866442),
    a = n(741361),
    s = n(911969),
    o = n(131704),
    l = n(271383),
    u = n(594174),
    c = n(934415),
    d = n(823379),
    f = n(700785),
    _ = n(709054),
    p = n(51144),
    h = n(71080),
    m = n(981631),
    g = n(388032);
function E(e) {
    return i.e$(e.permissions, m.Plq.ADMINISTRATOR);
}
function v(e) {
    return i.e$(e.permissions, m.Plq.ADMINISTRATOR) ? h.aC.ADMINISTRATOR : h.aC.ROLE;
}
function y(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        i = v(e);
    return {
        rowType: i,
        colorString: null !== (t = e.colorString) && void 0 !== t ? t : (0, r.Rf)(m.p6O),
        name: e.name,
        id: e.id,
        disabled: E(e) || n,
        key: ''.concat(i, ':').concat(e.id),
        tags: e.tags
    };
}
function I(e, t) {
    let n = E(e) ? 0 : 1,
        i = E(t) ? 0 : 1;
    return n !== i ? n - i : t.position - e.position;
}
function T() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : g.intl.string(g.t.gnsna2);
    return [
        {
            rowType: h.aC.EMPTY_STATE,
            colorString: (0, r.Rf)(m.p6O),
            name: e,
            disabled: !0,
            id: 'EMPTY_STATE'
        }
    ];
}
function b(e, t, n, r) {
    let a = u.default.getCurrentUser();
    if (null == a) return !1;
    if (null == e) return a.id !== t;
    let s = e.permissionOverwrites[t];
    return (null == r ? void 0 : r[t]) != null && (s = r[t]), null == s || !i.e$(s.allow, n);
}
function S(e, t) {
    return _.default.castGuildIdAsEveryoneGuildRoleId(e) === t;
}
function A(e, t) {
    return !S(e, t);
}
function N(e, t) {
    return !S(e.id, t.id);
}
function C(e, t, n, i) {
    let r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => !0;
    return Object.values(t)
        .filter((t) => !E(t) && b(n, t.id, i) && N(e, t) && r(t.name))
        .sort(I)
        .map((e) => y(e));
}
function R(e, t, n, r) {
    let a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => !0;
    return Object.values(t)
        .filter((t) => !E(t) && b(n, t.id, r) && N(e, t) && a(t.name))
        .sort(I)
        .map((e) => y(e, i.e$(e.permissions, r)));
}
function O(e, t, n, i, r) {
    return Object.values(t).filter((t) => E(t) || (!b(n, t.id, i, r) && N(e, t)));
}
function D(e, t, n, r, a) {
    return Object.values(t).filter((t) => {
        var s;
        return E(t) || (!b(n, t.id, r, a) && N(e, t)) || i.e$(i.$e(t.permissions, null === (s = n.permissionOverwrites[t.id]) || void 0 === s ? void 0 : s.allow), r);
    });
}
function L(e, t, n, i, r) {
    let a = [];
    return 0 ===
        (a = O(e, t, n, i, r)
            .sort(I)
            .map((e) => y(e))).length
        ? T(g.intl.string(g.t.nZfHsb))
        : a;
}
function x(e, t, n, r, a) {
    let s = [];
    return 0 ===
        (s = D(e, t, n, r, a)
            .sort(I)
            .map((e) => y(e, i.e$(e.permissions, r)))).length
        ? T(g.intl.string(g.t.nZfHsb))
        : s;
}
function w(e, t) {
    var n;
    return null !== (n = l.ZP.getNick(t.id, e.id)) && void 0 !== n ? n : p.ZP.getName(e);
}
function P(e, t) {
    return t.isOwner(e);
}
function M(e, t) {
    return t.isOwner(e) ? h.aC.OWNER : h.aC.MEMBER;
}
function k(e, t) {
    var n;
    let i = M(e, t);
    return {
        rowType: i,
        name: w(e, t),
        nickname: null !== (n = l.ZP.getNick(t.id, e.id)) && void 0 !== n ? n : null,
        username: p.ZP.getName(e),
        id: e.id,
        avatarURL: e.getAvatarURL(t.id, 24),
        bot: e.bot,
        verifiedBot: e.isVerifiedBot(),
        disabled: P(e, t),
        key: ''.concat(i, ':').concat(e.id)
    };
}
function U(e, t) {
    return e.rowType !== t.rowType ? e.rowType - t.rowType : e.name.toLocaleLowerCase().localeCompare(t.name.toLocaleLowerCase());
}
function G(e, t, n, i) {
    let r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => !0;
    return e
        .map(u.default.getUser)
        .filter(d.lm)
        .filter((e) => !n.isOwner(e) && b(t, e.id, i) && (r(w(e, n)) || r(e.username) || r(e.discriminator)))
        .map((e) => k(e, n))
        .sort(U);
}
function B(e, t, n, i, r) {
    return e
        .map(u.default.getUser)
        .filter(d.lm)
        .filter((e) => !b(t, e.id, i, r) || P(e, n));
}
function Z(e, t, n, i, r) {
    return B(e, t, n, i, r)
        .map((e) => k(e, n))
        .sort(U);
}
function F(e, t) {
    switch (e) {
        case h.aC.ROLE:
            return g.intl.string(g.t.ZxoFOD);
        case h.aC.OWNER:
            return g.intl.string(g.t.NWhYJi);
        case h.aC.ADMINISTRATOR:
            return g.intl.string(g.t.dwlcc3);
        case h.aC.MEMBER:
            return t ? g.intl.string(g.t.UAJxZm) : null;
        case h.aC.USER:
            return g.intl.string(g.t.KD6OJC);
        case h.aC.GUILD:
            return g.intl.string(g.t['5qyruL']);
        case h.aC.EMPTY_STATE:
            return null;
    }
}
function V(e) {
    switch (e) {
        case h.aC.ROLE:
            return g.intl.string(g.t['Gzc/a2']);
        case h.aC.OWNER:
            return g.intl.string(g.t.icuNBA);
        case h.aC.ADMINISTRATOR:
            return g.intl.string(g.t.eTmN5e);
        case h.aC.MEMBER:
            return g.intl.string(g.t['Gzc/a2']);
        case h.aC.EMPTY_STATE:
        default:
            return null;
    }
}
function j(e, t, n) {
    let r = e.permissionOverwrites[e.guild_id];
    null == r && (r = f.we(e.guild_id));
    let a = { ...r };
    return (a.deny = i.Od(a.deny, t)), (a.allow = i.Od(a.allow, t)), n || (a.deny = i.IH(a.deny, t)), a;
}
function H(e, t, n) {
    let i = j(e, t, n);
    (0, a.kY)(e, i.id, i.allow, i.deny);
}
function Y(e, t) {
    let n = u.default.getCurrentUser();
    if (null == n) return;
    let r = e.permissionOverwrites[n.id];
    if (null == r) {
        let r = {
            id: n.id,
            type: s.BN.MEMBER,
            allow: i.IH(f.Hn, t),
            deny: f.Hn
        };
        return (0, a.hw)(e.id, [r], !0);
    }
    {
        let { allow: n, deny: s } = r;
        return (n = i.IH(n, t)), (0, a.kY)(e, r.id, n, s);
    }
}
function W(e, t) {
    if (null == e) return !1;
    let n = e.permissionOverwrites[e.guild_id];
    return (null == t ? void 0 : t[e.guild_id]) != null && (n = t[e.guild_id]), null != n && i.e$(n.deny, e.accessPermissions);
}
function K(e, t) {
    let n = Object.keys(t);
    return 0 !== n.length && (1 !== n.length || n[0] !== e.id);
}
function z(e, t, n) {
    return e === m.d4z.GUILD_TEXT || e === m.d4z.GUILD_ANNOUNCEMENT ? t : (!(0, o.bw)(e) && e !== m.d4z.GUILD_CATEGORY) || (t && n);
}
function q(e) {
    switch (e) {
        case m.d4z.GUILD_TEXT:
        case m.d4z.GUILD_ANNOUNCEMENT:
            return g.intl.format(g.t.ZDtA0d, {});
        case m.d4z.GUILD_VOICE:
            return g.intl.format(g.t.iZAMt7, {});
        case m.d4z.GUILD_CATEGORY:
            return g.intl.format(g.t.PhnARU, {});
        default:
            return null;
    }
}
function Q(e, t) {
    let n = [];
    return (
        Object.values(e).forEach((e) => {
            let { row: i } = e;
            null != i.id && '' !== i.id && (i.rowType === h.aC.ROLE ? n.push((0, c.rX)(i.id, t)) : i.rowType === h.aC.MEMBER && n.push((0, c.jZ)(i.id, t)));
        }),
        n
    );
}
