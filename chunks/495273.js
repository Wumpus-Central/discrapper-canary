n.d(t, {
    Ae: () => x,
    B4: () => m,
    C$: () => C,
    D4: () => W,
    Lq: () => L,
    M2: () => w,
    N8: () => y,
    Vl: () => _,
    Wi: () => b,
    es: () => P,
    ld: () => H,
    n0: () => z,
    rT: () => M,
    ro: () => U,
    tP: () => k,
    uB: () => V,
    uX: () => R,
    uh: () => h,
    vV: () => B,
}),
    n(321073);
var r = n(136722),
    i = n(702805),
    l = n(155718),
    u = n(95701),
    o = n(260509),
    s = n(34457),
    a = n(696451),
    d = n(287809),
    c = n(147036),
    E = n(403362),
    f = n(7864),
    T = n(488926),
    S = n(661191),
    A = n(427262),
    g = n(737045),
    N = n(652215),
    p = n(985018);
function I(e) {
    return (0, s._m)(e, N.xBc.ADMINISTRATOR);
}
function m(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = I(e) ? g.T6.ADMINISTRATOR : g.T6.ROLE;
    return {
        rowType: n,
        colorString: e.colorString ?? N.TpD,
        name: e.name,
        id: e.id,
        disabled: I(e) || t,
        key: `${n}:${e.id}`,
        tags: e.tags,
    };
}
function h(e, t) {
    let n = +!I(e),
        r = +!I(t);
    return n !== r ? n - r : (0, f.AT)(e, t);
}
function _() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : p.intl.string(p.t["gnsna/"]);
    return [{ rowType: g.T6.EMPTY_STATE, colorString: N.TpD, name: e, disabled: !0, id: "EMPTY_STATE" }];
}
function O(e, t, n, i) {
    let l = d.default.getCurrentUser();
    if (null == l) return !1;
    if (null == e) return l.id !== t;
    let u = e.permissionOverwrites[t];
    return i?.[t] != null && (u = i[t]), null == u || !r.zy(u.allow, n);
}
function y(e, t) {
    return S.default.castGuildIdAsEveryoneGuildRoleId(e) === t;
}
function M(e, t, n, r) {
    let i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => !0;
    return t
        .filter((e) => !I(e) && O(n, e.id, r) && !(0, s.Oy)(e) && i(e.name))
        .sort(h)
        .map((e) => m(e));
}
function w(e, t, n, r) {
    let i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => !0;
    return t
        .filter((e) => !I(e) && O(n, e.id, r) && !(0, s.Oy)(e) && i(e.name))
        .sort(h)
        .map((e) => m(e, (0, s._m)(e, r)));
}
function R(e, t, n, r, i) {
    let l = [];
    return 0 ===
        (l = t
            .filter((e) => I(e) || (!O(n, e.id, r, i) && !(0, s.Oy)(e)))
            .sort(h)
            .map((e) => m(e))).length
        ? _(p.intl.string(p.t.nZfHsf))
        : l;
}
function C(e, t, n, i, l) {
    let u = [];
    return 0 ===
        (u = t
            .filter(
                (e) =>
                    I(e) ||
                    (!O(n, e.id, i, l) && !(0, s.Oy)(e)) ||
                    r.zy(r.kg(e.permissions, n.permissionOverwrites[e.id]?.allow), i),
            )
            .sort(h)
            .map((e) => m(e, (0, s._m)(e, i)))).length
        ? _(p.intl.string(p.t.nZfHsf))
        : u;
}
function G(e, t) {
    return a.Ay.getNick(t.id, e.id) ?? A.Ay.getName(e);
}
function v(e, t) {
    let n = (0, o.bM)(t, e) ? g.T6.OWNER : g.T6.MEMBER;
    return {
        rowType: n,
        name: G(e, t),
        nickname: a.Ay.getNick(t.id, e.id) ?? null,
        username: A.Ay.getName(e),
        id: e.id,
        avatarURL: e.getAvatarURL(t.id, 24),
        bot: e.bot,
        verifiedBot: e.isVerifiedBot(),
        disabled: (0, o.bM)(t, e),
        key: `${n}:${e.id}`,
    };
}
function D(e, t) {
    return e.rowType !== t.rowType
        ? e.rowType - t.rowType
        : e.name.toLocaleLowerCase().localeCompare(t.name.toLocaleLowerCase());
}
function L(e, t, n, r) {
    let i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => !0;
    return e
        .map(d.default.getUser)
        .filter(E.Vq)
        .filter((e) => !(0, o.bM)(n, e) && O(t, e.id, r) && (i(G(e, n)) || i(e.username) || i(e.discriminator)))
        .map((e) => v(e, n))
        .sort(D);
}
function b(e, t, n, r, i) {
    return e
        .map(d.default.getUser)
        .filter(E.Vq)
        .filter((e) => !O(t, e.id, r, i) || (0, o.bM)(n, e))
        .map((e) => v(e, n))
        .sort(D);
}
function B(e, t) {
    switch (e) {
        case g.T6.ROLE:
            return p.intl.string(p.t.ZxoFOG);
        case g.T6.OWNER:
            return p.intl.string(p.t.NWhYJg);
        case g.T6.ADMINISTRATOR:
            return p.intl.string(p.t["dwlcc+"]);
        case g.T6.MEMBER:
            return t ? p.intl.string(p.t.UAJxZi) : null;
        case g.T6.USER:
            return p.intl.string(p.t.KD6OJJ);
        case g.T6.GUILD:
            return p.intl.string(p.t["5qyruI"]);
        case g.T6.EMPTY_STATE:
            return null;
    }
}
function U(e) {
    switch (e) {
        case g.T6.ROLE:
            return p.intl.string(p.t["Gzc/a8"]);
        case g.T6.OWNER:
            return p.intl.string(p.t.icuNBM);
        case g.T6.ADMINISTRATOR:
            return p.intl.string(p.t.eTmN5a);
        case g.T6.MEMBER:
            return p.intl.string(p.t["Gzc/a8"]);
        case g.T6.EMPTY_STATE:
        default:
            return null;
    }
}
function P(e, t, n) {
    let i = e.permissionOverwrites[e.guild_id];
    null == i && (i = T.xT(e.guild_id));
    let l = { ...i };
    return (l.deny = r.TF(l.deny, t)), (l.allow = r.TF(l.allow, t)), n || (l.deny = r.WQ(l.deny, t)), l;
}
function V(e, t, n) {
    let r = P(e, t, n);
    (0, i.LA)(e, r.id, r.allow, r.deny);
}
function k(e, t) {
    let n = d.default.getCurrentUser();
    if (null == n) return;
    let u = e.permissionOverwrites[n.id];
    if (null == u) {
        let u = { id: n.id, type: l.r2.MEMBER, allow: r.WQ(T.x3, t), deny: T.x3 };
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
    return t?.[e.guild_id] != null && (n = t[e.guild_id]), null != n && r.zy(n.deny, e.accessPermissions);
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
                (r.rowType === g.T6.ROLE
                    ? n.push((0, c.we)(r.id, t))
                    : r.rowType === g.T6.MEMBER && n.push((0, c.n3)(r.id, t)));
        }),
        n
    );
}
