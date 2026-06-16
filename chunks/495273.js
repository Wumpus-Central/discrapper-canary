n.d(e, {
    Ae: () => H,
    B4: () => A,
    C$: () => L,
    D4: () => $,
    Lq: () => D,
    M2: () => R,
    N8: () => y,
    Vl: () => O,
    Wi: () => v,
    es: () => B,
    ld: () => Y,
    n0: () => W,
    rT: () => M,
    ro: () => P,
    tP: () => k,
    uB: () => V,
    uX: () => w,
    uh: () => h,
    vV: () => b,
}),
    n(321073);
var r = n(136722),
    i = n(702805),
    l = n(155718),
    u = n(95701),
    s = n(260509),
    a = n(34457),
    o = n(696451),
    d = n(287809),
    T = n(871237),
    c = n(403362),
    E = n(7864),
    f = n(488926),
    S = n(935208),
    p = n(427262),
    N = n(719366),
    I = n(652215),
    g = n(375708);
function _(t) {
    return (0, a._m)(t, I.xBc.ADMINISTRATOR);
}
function A(t) {
    let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = _(t) ? N.T6.ADMINISTRATOR : N.T6.ROLE;
    return {
        rowType: n,
        colorString: t.colorString ?? I.TpD,
        name: t.name,
        id: t.id,
        disabled: _(t) || e,
        key: `${n}:${t.id}`,
        tags: t.tags,
    };
}
function h(t, e) {
    let n = +!_(t),
        r = +!_(e);
    return n !== r ? n - r : (0, E.AT)(t, e);
}
function O() {
    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : g.intl.string(g.t["gnsna/"]);
    return [{ rowType: N.T6.EMPTY_STATE, colorString: I.TpD, name: t, disabled: !0, id: "EMPTY_STATE" }];
}
function m(t, e, n, i) {
    let l = d.default.getCurrentUser();
    if (null == l) return !1;
    if (null == t) return l.id !== e;
    let u = t.permissionOverwrites[e];
    return i?.[e] != null && (u = i[e]), null == u || !r.zy(u.allow, n);
}
function y(t, e) {
    return S.default.castGuildIdAsEveryoneGuildRoleId(t) === e;
}
function M(t, e, n, r) {
    let i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => !0;
    return e
        .filter((t) => !_(t) && m(n, t.id, r) && !(0, a.Oy)(t) && i(t.name))
        .sort(h)
        .map((t) => A(t));
}
function R(t, e, n, r) {
    let i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => !0;
    return e
        .filter((t) => !_(t) && m(n, t.id, r) && !(0, a.Oy)(t) && i(t.name))
        .sort(h)
        .map((t) => A(t, (0, a._m)(t, r)));
}
function w(t, e, n, r, i) {
    let l = [];
    return 0 ===
        (l = e
            .filter((t) => _(t) || (!m(n, t.id, r, i) && !(0, a.Oy)(t)))
            .sort(h)
            .map((t) => A(t))).length
        ? O(g.intl.string(g.t.nZfHsf))
        : l;
}
function L(t, e, n, i, l) {
    let u = [];
    return 0 ===
        (u = e
            .filter(
                (t) =>
                    _(t) ||
                    (!m(n, t.id, i, l) && !(0, a.Oy)(t)) ||
                    r.zy(r.kg(t.permissions, n.permissionOverwrites[t.id]?.allow), i),
            )
            .sort(h)
            .map((t) => A(t, (0, a._m)(t, i)))).length
        ? O(g.intl.string(g.t.nZfHsf))
        : u;
}
function G(t, e) {
    return o.Ay.getNick(e.id, t.id) ?? p.Ay.getName(t);
}
function C(t, e) {
    let n = (0, s.bM)(e, t) ? N.T6.OWNER : N.T6.MEMBER;
    return {
        rowType: n,
        name: G(t, e),
        username: p.Ay.getUserTag(t),
        id: t.id,
        avatarURL: t.getAvatarURL(e.id, 24),
        bot: t.bot,
        verifiedBot: t.isVerifiedBot(),
        disabled: (0, s.bM)(e, t),
        key: `${n}:${t.id}`,
    };
}
function U(t, e) {
    return t.rowType !== e.rowType
        ? t.rowType - e.rowType
        : t.name.toLocaleLowerCase().localeCompare(e.name.toLocaleLowerCase());
}
function D(t, e, n, r) {
    let i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => !0;
    return t
        .map(d.default.getUser)
        .filter(c.Vq)
        .filter((t) => !(0, s.bM)(n, t) && m(e, t.id, r) && (i(G(t, n)) || i(t.username) || i(t.discriminator)))
        .map((t) => C(t, n))
        .sort(U);
}
function v(t, e, n, r, i) {
    return t
        .map(d.default.getUser)
        .filter(c.Vq)
        .filter((t) => !m(e, t.id, r, i) || (0, s.bM)(n, t))
        .map((t) => C(t, n))
        .sort(U);
}
function b(t, e) {
    switch (t) {
        case N.T6.ROLE:
            return g.intl.string(g.t.ZxoFOG);
        case N.T6.OWNER:
            return g.intl.string(g.t.NWhYJg);
        case N.T6.ADMINISTRATOR:
            return g.intl.string(g.t["dwlcc+"]);
        case N.T6.MEMBER:
            return e ? g.intl.string(g.t.UAJxZi) : null;
        case N.T6.USER:
            return g.intl.string(g.t.KD6OJJ);
        case N.T6.GUILD:
            return g.intl.string(g.t["5qyruI"]);
        case N.T6.EMPTY_STATE:
            return null;
    }
}
function P(t) {
    switch (t) {
        case N.T6.ROLE:
            return g.intl.string(g.t["Gzc/a8"]);
        case N.T6.OWNER:
            return g.intl.string(g.t.icuNBM);
        case N.T6.ADMINISTRATOR:
            return g.intl.string(g.t.eTmN5a);
        case N.T6.MEMBER:
            return g.intl.string(g.t["Gzc/a8"]);
        case N.T6.EMPTY_STATE:
        default:
            return null;
    }
}
function B(t, e, n) {
    let i = t.permissionOverwrites[t.guild_id];
    null == i && (i = f.xT(t.guild_id));
    let l = { ...i };
    return (l.deny = r.TF(l.deny, e)), (l.allow = r.TF(l.allow, e)), n || (l.deny = r.WQ(l.deny, e)), l;
}
function V(t, e, n) {
    let r = B(t, e, n);
    (0, i.LA)(t, r.id, r.allow, r.deny);
}
function k(t, e) {
    let n = d.default.getCurrentUser();
    if (null == n) return;
    let u = t.permissionOverwrites[n.id];
    if (null == u) {
        let u = { id: n.id, type: l.r2.MEMBER, allow: r.WQ(f.x3, e), deny: f.x3 };
        return (0, i.R$)(t.id, [u], !0);
    }
    {
        let { allow: n, deny: l } = u;
        return (n = r.WQ(n, e)), (0, i.LA)(t, u.id, n, l);
    }
}
function H(t, e) {
    if (null == t) return !1;
    let n = t.permissionOverwrites[t.guild_id];
    return e?.[t.guild_id] != null && (n = e[t.guild_id]), null != n && r.zy(n.deny, t.accessPermissions);
}
function W(t, e, n) {
    return t === I.rbe.GUILD_TEXT || t === I.rbe.GUILD_ANNOUNCEMENT
        ? e
        : (!(0, u.ay)(t) && t !== I.rbe.GUILD_CATEGORY) || (e && n);
}
function Y(t) {
    switch (t) {
        case I.rbe.GUILD_TEXT:
        case I.rbe.GUILD_ANNOUNCEMENT:
            return g.intl.format(g.t.ZDtA0T, {});
        case I.rbe.GUILD_VOICE:
            return g.intl.format(g.t.iZAMty, {});
        case I.rbe.GUILD_CATEGORY:
            return g.intl.format(g.t.PhnARV, {});
        default:
            return null;
    }
}
function $(t, e) {
    let n = [];
    return (
        Object.values(t).forEach((t) => {
            let { row: r } = t;
            null != r.id &&
                "" !== r.id &&
                (r.rowType === N.T6.ROLE
                    ? n.push((0, T.we)(r.id, e))
                    : r.rowType === N.T6.MEMBER && n.push((0, T.n3)(r.id, e)));
        }),
        n
    );
}
