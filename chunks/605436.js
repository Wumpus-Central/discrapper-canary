r.d(n, {
    $7: function () {
        return X;
    },
    $e: function () {
        return W;
    },
    GJ: function () {
        return y;
    },
    Gy: function () {
        return N;
    },
    RD: function () {
        return q;
    },
    RZ: function () {
        return P;
    },
    Tj: function () {
        return J;
    },
    W: function () {
        return T;
    },
    Wx: function () {
        return D;
    },
    X0: function () {
        return I;
    },
    Yh: function () {
        return K;
    },
    Yk: function () {
        return z;
    },
    _A: function () {
        return Y;
    },
    aq: function () {
        return S;
    },
    cR: function () {
        return V;
    },
    iI: function () {
        return Z;
    },
    ik: function () {
        return O;
    },
    kA: function () {
        return w;
    },
    nT: function () {
        return Q;
    },
    pM: function () {
        return C;
    },
    yv: function () {
        return H;
    },
    zB: function () {
        return j;
    }
});
var i = r(653041);
var a = r(149765),
    o = r(866442),
    s = r(741361),
    l = r(911969),
    u = r(131704),
    c = r(271383),
    d = r(594174),
    f = r(934415),
    p = r(823379),
    h = r(700785),
    _ = r(709054),
    m = r(51144),
    g = r(71080),
    E = r(981631),
    v = r(388032);
function y(e) {
    return a.e$(e.permissions, E.Plq.ADMINISTRATOR);
}
function b(e) {
    return a.e$(e.permissions, E.Plq.ADMINISTRATOR) ? g.aC.ADMINISTRATOR : g.aC.ROLE;
}
function I(e) {
    var n;
    let r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        i = b(e);
    return {
        rowType: i,
        colorString: null !== (n = e.colorString) && void 0 !== n ? n : (0, o.Rf)(E.p6O),
        name: e.name,
        id: e.id,
        disabled: y(e) || r,
        key: ''.concat(i, ':').concat(e.id),
        tags: e.tags
    };
}
function T(e, n) {
    let r = y(e) ? 0 : 1,
        i = y(n) ? 0 : 1;
    return r !== i ? r - i : n.position - e.position;
}
function S() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : v.intl.string(v.t.gnsna2);
    return [
        {
            rowType: g.aC.EMPTY_STATE,
            colorString: (0, o.Rf)(E.p6O),
            name: e,
            disabled: !0,
            id: 'EMPTY_STATE'
        }
    ];
}
function A(e, n, r, i) {
    let o = d.default.getCurrentUser();
    if (null == o) return !1;
    if (null == e) return o.id !== n;
    let s = e.permissionOverwrites[n];
    return (null == i ? void 0 : i[n]) != null && (s = i[n]), null == s || !a.e$(s.allow, r);
}
function C(e, n) {
    return _.default.castGuildIdAsEveryoneGuildRoleId(e) === n;
}
function N(e, n) {
    return !C(e, n);
}
function R(e, n) {
    return !C(e.id, n.id);
}
function O(e, n, r, i) {
    let a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => !0;
    return Object.values(n)
        .filter((n) => !y(n) && A(r, n.id, i) && R(e, n) && a(n.name))
        .sort(T)
        .map((e) => I(e));
}
function D(e, n, r, i) {
    let o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => !0;
    return Object.values(n)
        .filter((n) => !y(n) && A(r, n.id, i) && R(e, n) && o(n.name))
        .sort(T)
        .map((e) => I(e, a.e$(e.permissions, i)));
}
function x(e, n, r, i, a) {
    return Object.values(n).filter((n) => y(n) || (!A(r, n.id, i, a) && R(e, n)));
}
function L(e, n, r, i, o) {
    return Object.values(n).filter((n) => {
        var s;
        return y(n) || (!A(r, n.id, i, o) && R(e, n)) || a.e$(a.$e(n.permissions, null === (s = r.permissionOverwrites[n.id]) || void 0 === s ? void 0 : s.allow), i);
    });
}
function w(e, n, r, i, a) {
    let o = [];
    return 0 ===
        (o = x(e, n, r, i, a)
            .sort(T)
            .map((e) => I(e))).length
        ? S(v.intl.string(v.t.nZfHsb))
        : o;
}
function P(e, n, r, i, o) {
    let s = [];
    return 0 ===
        (s = L(e, n, r, i, o)
            .sort(T)
            .map((e) => I(e, a.e$(e.permissions, i)))).length
        ? S(v.intl.string(v.t.nZfHsb))
        : s;
}
function M(e, n) {
    var r;
    return null !== (r = c.ZP.getNick(n.id, e.id)) && void 0 !== r ? r : m.ZP.getName(e);
}
function k(e, n) {
    return n.isOwner(e);
}
function U(e, n) {
    return n.isOwner(e) ? g.aC.OWNER : g.aC.MEMBER;
}
function B(e, n) {
    var r;
    let i = U(e, n);
    return {
        rowType: i,
        name: M(e, n),
        nickname: null !== (r = c.ZP.getNick(n.id, e.id)) && void 0 !== r ? r : null,
        username: m.ZP.getName(e),
        id: e.id,
        avatarURL: e.getAvatarURL(n.id, 24),
        bot: e.bot,
        verifiedBot: e.isVerifiedBot(),
        disabled: k(e, n),
        key: ''.concat(i, ':').concat(e.id)
    };
}
function G(e, n) {
    return e.rowType !== n.rowType ? e.rowType - n.rowType : e.name.toLocaleLowerCase().localeCompare(n.name.toLocaleLowerCase());
}
function Z(e, n, r, i) {
    let a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => !0;
    return e
        .map(d.default.getUser)
        .filter(p.lm)
        .filter((e) => !r.isOwner(e) && A(n, e.id, i) && (a(M(e, r)) || a(e.username) || a(e.discriminator)))
        .map((e) => B(e, r))
        .sort(G);
}
function F(e, n, r, i, a) {
    return e
        .map(d.default.getUser)
        .filter(p.lm)
        .filter((e) => !A(n, e.id, i, a) || k(e, r));
}
function V(e, n, r, i, a) {
    return F(e, n, r, i, a)
        .map((e) => B(e, r))
        .sort(G);
}
function j(e, n) {
    switch (e) {
        case g.aC.ROLE:
            return v.intl.string(v.t.ZxoFOD);
        case g.aC.OWNER:
            return v.intl.string(v.t.NWhYJi);
        case g.aC.ADMINISTRATOR:
            return v.intl.string(v.t.dwlcc3);
        case g.aC.MEMBER:
            return n ? v.intl.string(v.t.UAJxZm) : null;
        case g.aC.USER:
            return v.intl.string(v.t.KD6OJC);
        case g.aC.GUILD:
            return v.intl.string(v.t['5qyruL']);
        case g.aC.EMPTY_STATE:
            return null;
    }
}
function H(e) {
    switch (e) {
        case g.aC.ROLE:
            return v.intl.string(v.t['Gzc/a2']);
        case g.aC.OWNER:
            return v.intl.string(v.t.icuNBA);
        case g.aC.ADMINISTRATOR:
            return v.intl.string(v.t.eTmN5e);
        case g.aC.MEMBER:
            return v.intl.string(v.t['Gzc/a2']);
        case g.aC.EMPTY_STATE:
        default:
            return null;
    }
}
function Y(e, n, r) {
    let i = e.permissionOverwrites[e.guild_id];
    null == i && (i = h.we(e.guild_id));
    let o = { ...i };
    return (o.deny = a.Od(o.deny, n)), (o.allow = a.Od(o.allow, n)), !r && (o.deny = a.IH(o.deny, n)), o;
}
function W(e, n, r) {
    let i = Y(e, n, r);
    (0, s.kY)(e, i.id, i.allow, i.deny);
}
function K(e, n) {
    let r = d.default.getCurrentUser();
    if (null == r) return;
    let i = e.permissionOverwrites[r.id];
    if (null == i) {
        let i = {
            id: r.id,
            type: l.BN.MEMBER,
            allow: a.IH(h.Hn, n),
            deny: h.Hn
        };
        return (0, s.hw)(e.id, [i], !0);
    }
    {
        let { allow: r, deny: o } = i;
        return (r = a.IH(r, n)), (0, s.kY)(e, i.id, r, o);
    }
}
function z(e, n) {
    if (null == e) return !1;
    let r = e.permissionOverwrites[e.guild_id];
    return (null == n ? void 0 : n[e.guild_id]) != null && (r = n[e.guild_id]), null != r && a.e$(r.deny, e.accessPermissions);
}
function q(e, n) {
    let r = Object.keys(n);
    return 0 !== r.length && (1 !== r.length || r[0] !== e.id);
}
function Q(e, n, r) {
    return e === E.d4z.GUILD_TEXT || e === E.d4z.GUILD_ANNOUNCEMENT ? n : (!(0, u.bw)(e) && e !== E.d4z.GUILD_CATEGORY) || (n && r);
}
function X(e) {
    switch (e) {
        case E.d4z.GUILD_TEXT:
        case E.d4z.GUILD_ANNOUNCEMENT:
            return v.intl.format(v.t.ZDtA0d, {});
        case E.d4z.GUILD_VOICE:
            return v.intl.format(v.t.iZAMt7, {});
        case E.d4z.GUILD_CATEGORY:
            return v.intl.format(v.t.PhnARU, {});
        default:
            return null;
    }
}
function J(e, n) {
    let r = [];
    return (
        Object.values(e).forEach((e) => {
            let { row: i } = e;
            null != i.id && '' !== i.id && (i.rowType === g.aC.ROLE ? r.push((0, f.rX)(i.id, n)) : i.rowType === g.aC.MEMBER && r.push((0, f.jZ)(i.id, n)));
        }),
        r
    );
}
