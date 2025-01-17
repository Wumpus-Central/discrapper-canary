r.d(n, {
    $7: function () {
        return X;
    },
    $e: function () {
        return W;
    },
    GJ: function () {
        return I;
    },
    Gy: function () {
        return C;
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
        return y;
    },
    Wx: function () {
        return D;
    },
    X0: function () {
        return b;
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
        return N;
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
    s = r(866442),
    o = r(741361),
    l = r(911969),
    u = r(131704),
    c = r(271383),
    d = r(594174),
    f = r(934415),
    _ = r(823379),
    h = r(700785),
    p = r(709054),
    m = r(51144),
    g = r(71080),
    E = r(981631),
    v = r(388032);
function I(e) {
    return a.e$(e.permissions, E.Plq.ADMINISTRATOR);
}
function T(e) {
    return a.e$(e.permissions, E.Plq.ADMINISTRATOR) ? g.aC.ADMINISTRATOR : g.aC.ROLE;
}
function b(e) {
    var n;
    let r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        i = T(e);
    return {
        rowType: i,
        colorString: null !== (n = e.colorString) && void 0 !== n ? n : (0, s.Rf)(E.p6O),
        name: e.name,
        id: e.id,
        disabled: I(e) || r,
        key: ''.concat(i, ':').concat(e.id),
        tags: e.tags
    };
}
function y(e, n) {
    let r = I(e) ? 0 : 1,
        i = I(n) ? 0 : 1;
    return r !== i ? r - i : n.position - e.position;
}
function S() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : v.intl.string(v.t.gnsna2);
    return [
        {
            rowType: g.aC.EMPTY_STATE,
            colorString: (0, s.Rf)(E.p6O),
            name: e,
            disabled: !0,
            id: 'EMPTY_STATE'
        }
    ];
}
function A(e, n, r, i) {
    let s = d.default.getCurrentUser();
    if (null == s) return !1;
    if (null == e) return s.id !== n;
    let o = e.permissionOverwrites[n];
    return (null == i ? void 0 : i[n]) != null && (o = i[n]), null == o || !a.e$(o.allow, r);
}
function N(e, n) {
    return p.default.castGuildIdAsEveryoneGuildRoleId(e) === n;
}
function C(e, n) {
    return !N(e, n);
}
function R(e, n) {
    return !N(e.id, n.id);
}
function O(e, n, r, i) {
    let a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => !0;
    return Object.values(n)
        .filter((n) => !I(n) && A(r, n.id, i) && R(e, n) && a(n.name))
        .sort(y)
        .map((e) => b(e));
}
function D(e, n, r, i) {
    let s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => !0;
    return Object.values(n)
        .filter((n) => !I(n) && A(r, n.id, i) && R(e, n) && s(n.name))
        .sort(y)
        .map((e) => b(e, a.e$(e.permissions, i)));
}
function L(e, n, r, i, a) {
    return Object.values(n).filter((n) => I(n) || (!A(r, n.id, i, a) && R(e, n)));
}
function x(e, n, r, i, s) {
    return Object.values(n).filter((n) => {
        var o;
        return I(n) || (!A(r, n.id, i, s) && R(e, n)) || a.e$(a.$e(n.permissions, null === (o = r.permissionOverwrites[n.id]) || void 0 === o ? void 0 : o.allow), i);
    });
}
function w(e, n, r, i, a) {
    let s = [];
    return 0 ===
        (s = L(e, n, r, i, a)
            .sort(y)
            .map((e) => b(e))).length
        ? S(v.intl.string(v.t.nZfHsb))
        : s;
}
function P(e, n, r, i, s) {
    let o = [];
    return 0 ===
        (o = x(e, n, r, i, s)
            .sort(y)
            .map((e) => b(e, a.e$(e.permissions, i)))).length
        ? S(v.intl.string(v.t.nZfHsb))
        : o;
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
        .filter(_.lm)
        .filter((e) => !r.isOwner(e) && A(n, e.id, i) && (a(M(e, r)) || a(e.username) || a(e.discriminator)))
        .map((e) => B(e, r))
        .sort(G);
}
function F(e, n, r, i, a) {
    return e
        .map(d.default.getUser)
        .filter(_.lm)
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
    let s = { ...i };
    return (s.deny = a.Od(s.deny, n)), (s.allow = a.Od(s.allow, n)), !r && (s.deny = a.IH(s.deny, n)), s;
}
function W(e, n, r) {
    let i = Y(e, n, r);
    (0, o.kY)(e, i.id, i.allow, i.deny);
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
        return (0, o.hw)(e.id, [i], !0);
    }
    {
        let { allow: r, deny: s } = i;
        return (r = a.IH(r, n)), (0, o.kY)(e, i.id, r, s);
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
