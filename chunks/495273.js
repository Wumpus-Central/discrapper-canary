n.d(t, {
    Ae: () => x,
    B4: () => I,
    C$: () => R,
    D4: () => W,
    Lq: () => D,
    M2: () => w,
    N8: () => _,
    Vl: () => h,
    Wi: () => L,
    es: () => U,
    ld: () => H,
    n0: () => z,
    rT: () => v,
    ro: () => B,
    tP: () => k,
    uB: () => V,
    uX: () => M,
    uh: () => O,
    vV: () => P,
}),
    n(638769),
    n(321073);
var r = n(136722),
    i = n(702805),
    l = n(155718),
    u = n(95701),
    o = n(260509),
    a = n(34457),
    s = n(696451),
    c = n(287809),
    d = n(147036),
    f = n(403362),
    E = n(7864),
    T = n(488926),
    S = n(661191),
    g = n(427262),
    A = n(737045),
    N = n(652215),
    p = n(985018);

function m(e) {
    return (0, a._m)(e, N.xBc.ADMINISTRATOR);
}

function I(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        r = m(e) ? A.T6.ADMINISTRATOR : A.T6.ROLE;
    return {
        rowType: r,
        colorString: null != (t = e.colorString) ? t : N.TpD,
        name: e.name,
        id: e.id,
        disabled: m(e) || n,
        key: "".concat(r, ":").concat(e.id),
        tags: e.tags,
    };
}

function O(e, t) {
    let n = +!m(e),
        r = +!m(t);
    return n !== r ? n - r : (0, E.AT)(e, t);
}

function h() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : p.intl.string(p.t["gnsna/"]);
    return [
        {
            rowType: A.T6.EMPTY_STATE,
            colorString: N.TpD,
            name: e,
            disabled: !0,
            id: "EMPTY_STATE",
        },
    ];
}

function y(e, t, n, i) {
    let l = c.default.getCurrentUser();
    if (null == l) return !1;
    if (null == e) return l.id !== t;
    let u = e.permissionOverwrites[t];
    return (null == i ? void 0 : i[t]) != null && (u = i[t]), null == u || !r.zy(u.allow, n);
}

function _(e, t) {
    return S.default.castGuildIdAsEveryoneGuildRoleId(e) === t;
}

function v(e, t, n, r) {
    let i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => !0;
    return t
        .filter((e) => !m(e) && y(n, e.id, r) && !(0, a.Oy)(e) && i(e.name))
        .sort(O)
        .map((e) => I(e));
}

function w(e, t, n, r) {
    let i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => !0;
    return t
        .filter((e) => !m(e) && y(n, e.id, r) && !(0, a.Oy)(e) && i(e.name))
        .sort(O)
        .map((e) => I(e, (0, a._m)(e, r)));
}

function M(e, t, n, r, i) {
    let l = [];
    return 0 ===
        (l = t
            .filter((e) => m(e) || (!y(n, e.id, r, i) && !(0, a.Oy)(e)))
            .sort(O)
            .map((e) => I(e))).length
        ? h(p.intl.string(p.t.nZfHsf))
        : l;
}

function R(e, t, n, i, l) {
    let u = [];
    return 0 ===
        (u = t
            .filter((e) => {
                var t;
                return (
                    m(e) ||
                    (!y(n, e.id, i, l) && !(0, a.Oy)(e)) ||
                    r.zy(r.kg(e.permissions, null == (t = n.permissionOverwrites[e.id]) ? void 0 : t.allow), i)
                );
            })
            .sort(O)
            .map((e) => I(e, (0, a._m)(e, i)))).length
        ? h(p.intl.string(p.t.nZfHsf))
        : u;
}

function b(e, t) {
    var n;
    return null != (n = s.Ay.getNick(t.id, e.id)) ? n : g.Ay.getName(e);
}

function C(e, t) {
    var n;
    let r = (0, o.bM)(t, e) ? A.T6.OWNER : A.T6.MEMBER;
    return {
        rowType: r,
        name: b(e, t),
        nickname: null != (n = s.Ay.getNick(t.id, e.id)) ? n : null,
        username: g.Ay.getName(e),
        id: e.id,
        avatarURL: e.getAvatarURL(t.id, 24),
        bot: e.bot,
        verifiedBot: e.isVerifiedBot(),
        disabled: (0, o.bM)(t, e),
        key: "".concat(r, ":").concat(e.id),
    };
}

function G(e, t) {
    return e.rowType !== t.rowType
        ? e.rowType - t.rowType
        : e.name.toLocaleLowerCase().localeCompare(t.name.toLocaleLowerCase());
}

function D(e, t, n, r) {
    let i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => !0;
    return e
        .map(c.default.getUser)
        .filter(f.Vq)
        .filter((e) => !(0, o.bM)(n, e) && y(t, e.id, r) && (i(b(e, n)) || i(e.username) || i(e.discriminator)))
        .map((e) => C(e, n))
        .sort(G);
}

function L(e, t, n, r, i) {
    return e
        .map(c.default.getUser)
        .filter(f.Vq)
        .filter((e) => !y(t, e.id, r, i) || (0, o.bM)(n, e))
        .map((e) => C(e, n))
        .sort(G);
}

function P(e, t) {
    switch (e) {
        case A.T6.ROLE:
            return p.intl.string(p.t.ZxoFOG);
        case A.T6.OWNER:
            return p.intl.string(p.t.NWhYJg);
        case A.T6.ADMINISTRATOR:
            return p.intl.string(p.t["dwlcc+"]);
        case A.T6.MEMBER:
            return t ? p.intl.string(p.t.UAJxZi) : null;
        case A.T6.USER:
            return p.intl.string(p.t.KD6OJJ);
        case A.T6.GUILD:
            return p.intl.string(p.t["5qyruI"]);
        case A.T6.EMPTY_STATE:
            return null;
    }
}

function B(e) {
    switch (e) {
        case A.T6.ROLE:
            return p.intl.string(p.t["Gzc/a8"]);
        case A.T6.OWNER:
            return p.intl.string(p.t.icuNBM);
        case A.T6.ADMINISTRATOR:
            return p.intl.string(p.t.eTmN5a);
        case A.T6.MEMBER:
            return p.intl.string(p.t["Gzc/a8"]);
        case A.T6.EMPTY_STATE:
        default:
            return null;
    }
}

function U(e, t, n) {
    let i = e.permissionOverwrites[e.guild_id];
    null == i && (i = T.xT(e.guild_id));
    let l = (function (e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols &&
                (r = r.concat(
                    Object.getOwnPropertySymbols(n).filter(function (e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                    }),
                )),
                r.forEach(function (t) {
                    var r;
                    (r = n[t]),
                        t in e
                            ? Object.defineProperty(e, t, {
                                  value: r,
                                  enumerable: !0,
                                  configurable: !0,
                                  writable: !0,
                              })
                            : (e[t] = r);
                });
        }
        return e;
    })({}, i);
    return (l.deny = r.TF(l.deny, t)), (l.allow = r.TF(l.allow, t)), n || (l.deny = r.WQ(l.deny, t)), l;
}

function V(e, t, n) {
    let r = U(e, t, n);
    (0, i.LA)(e, r.id, r.allow, r.deny);
}

function k(e, t) {
    let n = c.default.getCurrentUser();
    if (null == n) return;
    let u = e.permissionOverwrites[n.id];
    if (null == u) {
        let u = {
            id: n.id,
            type: l.r2.MEMBER,
            allow: r.WQ(T.x3, t),
            deny: T.x3,
        };
        return (0, i.R$)(e.id, [u], !0);
    }
    {
        let { allow: n, deny: l } = u;
        return (n = r.WQ(n, t)), (0, i.LA)(e, u.id, n, l);
    }
}

function x(e, t) {
    if (null == e) return !1;
    let n = e.permissionOverwrites[e.guild_id];
    return (
        (null == t ? void 0 : t[e.guild_id]) != null && (n = t[e.guild_id]),
        null != n && r.zy(n.deny, e.accessPermissions)
    );
}

function z(e, t, n) {
    return e === N.rbe.GUILD_TEXT || e === N.rbe.GUILD_ANNOUNCEMENT
        ? t
        : (!(0, u.ay)(e) && e !== N.rbe.GUILD_CATEGORY) || (t && n);
}

function H(e) {
    switch (e) {
        case N.rbe.GUILD_TEXT:
        case N.rbe.GUILD_ANNOUNCEMENT:
            return p.intl.format(p.t.ZDtA0T, {});
        case N.rbe.GUILD_VOICE:
            return p.intl.format(p.t.iZAMty, {});
        case N.rbe.GUILD_CATEGORY:
            return p.intl.format(p.t.PhnARV, {});
        default:
            return null;
    }
}

function W(e, t) {
    let n = [];
    return (
        Object.values(e).forEach((e) => {
            let { row: r } = e;
            null != r.id &&
                "" !== r.id &&
                (r.rowType === A.T6.ROLE
                    ? n.push((0, d.we)(r.id, t))
                    : r.rowType === A.T6.MEMBER && n.push((0, d.n3)(r.id, t)));
        }),
        n
    );
}
