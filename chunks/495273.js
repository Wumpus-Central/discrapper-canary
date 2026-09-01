n.d(e, {
    Ae: () => k,
    B4: () => I,
    C$: () => L,
    D4: () => $,
    Lq: () => U,
    M2: () => M,
    N8: () => m,
    Vl: () => O,
    Wi: () => v,
    es: () => B,
    ld: () => Y,
    n0: () => W,
    rT: () => y,
    ro: () => b,
    tP: () => V,
    uB: () => H,
    uX: () => R,
    uh: () => h,
    vV: () => D,
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
    T = n(147036),
    c = n(403362),
    E = n(7864),
    f = n(488926),
    N = n(935208),
    A = n(427262),
    S = n(719366),
    _ = n(652215),
    p = n(375708);
function g(t) {
    return (0, a._m)(t, _.xBc.ADMINISTRATOR);
}
function I(t) {
    let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = g(t) ? S.T6.ADMINISTRATOR : S.T6.ROLE;
    return {
        rowType: n,
        colorString: t.colorString ?? _.TpD,
        name: t.name,
        id: t.id,
        disabled: g(t) || e,
        key: `${n}:${t.id}`,
        tags: t.tags,
    };
}
function h(t, e) {
    let n = +!g(t),
        r = +!g(e);
    return n !== r ? n - r : (0, E.AT)(t, e);
}
function O() {
    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : p.intl.string(p.t["gnsna/"]);
    return [{ rowType: S.T6.EMPTY_STATE, colorString: _.TpD, name: t, disabled: !0, id: "EMPTY_STATE" }];
}
function P(t, e, n, i) {
    let l = d.default.getCurrentUser();
    if (null == l) return !1;
    if (null == t) return l.id !== e;
    let u = t.permissionOverwrites[e];
    return i?.[e] != null && (u = i[e]), null == u || !r.zy(u.allow, n);
}
function m(t, e) {
    return N.default.castGuildIdAsEveryoneGuildRoleId(t) === e;
}
function y(t, e, n, r) {
    let i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => !0;
    return e
        .filter((t) => !g(t) && P(n, t.id, r) && !(0, a.Oy)(t) && i(t.name))
        .sort(h)
        .map((t) => I(t));
}
function M(t, e, n, r) {
    let i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => !0;
    return e
        .filter((t) => !g(t) && P(n, t.id, r) && !(0, a.Oy)(t) && i(t.name))
        .sort(h)
        .map((t) => I(t, (0, a._m)(t, r)));
}
function R(t, e, n, r, i) {
    let l = [];
    return 0 ===
        (l = e
            .filter((t) => g(t) || (!P(n, t.id, r, i) && !(0, a.Oy)(t)))
            .sort(h)
            .map((t) => I(t))).length
        ? O(p.intl.string(p.t.nZfHsf))
        : l;
}
function L(t, e, n, i, l) {
    let u = [];
    return 0 ===
        (u = e
            .filter(
                (t) =>
                    g(t) ||
                    (!P(n, t.id, i, l) && !(0, a.Oy)(t)) ||
                    r.zy(r.kg(t.permissions, n.permissionOverwrites[t.id]?.allow), i),
            )
            .sort(h)
            .map((t) => I(t, (0, a._m)(t, i)))).length
        ? O(p.intl.string(p.t.nZfHsf))
        : u;
}
function w(t, e) {
    return o.Ay.getNick(e.id, t.id) ?? A.Ay.getName(t);
}
function C(t, e, n) {
    let r = n === t.id ? S.T6.APP_CHANNEL_APP : (0, s.bM)(e, t) ? S.T6.OWNER : S.T6.MEMBER;
    return {
        rowType: r,
        name: w(t, e),
        username: A.Ay.getUserTag(t),
        id: t.id,
        avatarURL: t.getAvatarURL(e.id, 24),
        bot: t.bot,
        verifiedBot: t.isVerifiedBot(),
        disabled: (0, s.bM)(e, t) || r === S.T6.APP_CHANNEL_APP,
        key: `${r}:${t.id}`,
    };
}
function G(t, e) {
    return t.rowType !== e.rowType
        ? t.rowType - e.rowType
        : t.name.toLocaleLowerCase().localeCompare(e.name.toLocaleLowerCase());
}
function U(t, e, n, r) {
    let { filter: i = () => !0, appChannelBotUserId: l } =
        arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
    return t
        .map(d.default.getUser)
        .filter(c.Vq)
        .filter((t) => !(0, s.bM)(n, t) && P(e, t.id, r) && (i(w(t, n)) || i(t.username) || i(t.discriminator)))
        .map((t) => C(t, n, l))
        .sort(G);
}
function v(t, e, n, r) {
    let { permissionUpdates: i, appChannelBotUserId: l } =
        arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
    return t
        .map(d.default.getUser)
        .filter(c.Vq)
        .filter((t) => !P(e, t.id, r, i) || (0, s.bM)(n, t))
        .map((t) => C(t, n, l))
        .sort(G);
}
function D(t, e) {
    switch (t) {
        case S.T6.ROLE:
            return p.intl.string(p.t.ZxoFOG);
        case S.T6.OWNER:
            return p.intl.string(p.t.NWhYJg);
        case S.T6.ADMINISTRATOR:
            return p.intl.string(p.t["dwlcc+"]);
        case S.T6.MEMBER:
            return e ? p.intl.string(p.t.UAJxZi) : null;
        case S.T6.APP_CHANNEL_APP:
            return p.intl.string(p.t["z2/ML4"]);
        case S.T6.USER:
            return p.intl.string(p.t.KD6OJJ);
        case S.T6.GUILD:
            return p.intl.string(p.t["5qyruI"]);
        case S.T6.EMPTY_STATE:
            return null;
    }
}
function b(t) {
    switch (t) {
        case S.T6.ROLE:
            return p.intl.string(p.t["Gzc/a8"]);
        case S.T6.OWNER:
            return p.intl.string(p.t.icuNBM);
        case S.T6.ADMINISTRATOR:
            return p.intl.string(p.t.eTmN5a);
        case S.T6.MEMBER:
            return p.intl.string(p.t["Gzc/a8"]);
        case S.T6.APP_CHANNEL_APP:
            return p.intl.string(p.t.v05vEp);
        case S.T6.EMPTY_STATE:
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
function H(t, e, n) {
    let r = B(t, e, n);
    (0, i.LA)(t, r.id, r.allow, r.deny);
}
function V(t, e) {
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
function k(t, e) {
    if (null == t) return !1;
    let n = t.permissionOverwrites[t.guild_id];
    return e?.[t.guild_id] != null && (n = e[t.guild_id]), null != n && r.zy(n.deny, t.accessPermissions);
}
function W(t, e, n) {
    return t === _.rbe.GUILD_TEXT || t === _.rbe.GUILD_ANNOUNCEMENT || t === _.rbe.GUILD_APP
        ? e
        : (!(0, u.ay)(t) && t !== _.rbe.GUILD_CATEGORY) || (e && n);
}
function Y(t) {
    switch (t) {
        case _.rbe.GUILD_TEXT:
        case _.rbe.GUILD_ANNOUNCEMENT:
        case _.rbe.GUILD_APP:
            return p.intl.format(p.t.ZDtA0T, {});
        case _.rbe.GUILD_VOICE:
            return p.intl.format(p.t.iZAMty, {});
        case _.rbe.GUILD_CATEGORY:
            return p.intl.format(p.t.PhnARV, {});
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
                (r.rowType === S.T6.ROLE
                    ? n.push((0, T.we)(r.id, e))
                    : r.rowType === S.T6.MEMBER && n.push((0, T.n3)(r.id, e)));
        }),
        n
    );
}
