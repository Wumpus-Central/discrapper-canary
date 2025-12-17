n.d(t, {
    $7: () => q,
    $e: () => k,
    RZ: () => M,
    Tj: () => Y,
    W: () => C,
    Wx: () => A,
    X0: () => _,
    Yh: () => H,
    Yk: () => B,
    _A: () => b,
    aq: () => h,
    cR: () => L,
    iI: () => D,
    ik: () => v,
    kA: () => y,
    nT: () => $,
    pM: () => w,
    yv: () => U,
    zB: () => Z,
}),
    n(642613),
    n(539854);
var r = n(149765),
    i = n(741361),
    l = n(911969),
    u = n(131704),
    a = n(601964),
    o = n(345162),
    s = n(271383),
    c = n(594174),
    d = n(934415),
    f = n(823379),
    E = n(625137),
    S = n(700785),
    N = n(709054),
    g = n(51144),
    I = n(71080),
    p = n(981631),
    T = n(388032);
function m(e) {
    return (0, o.Fs)(e, p.Plq.ADMINISTRATOR);
}
function _(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        r = m(e) ? I.aC.ADMINISTRATOR : I.aC.ROLE;
    return {
        rowType: r,
        colorString: null != (t = e.colorString) ? t : p.Pbq,
        name: e.name,
        id: e.id,
        disabled: m(e) || n,
        key: "".concat(r, ":").concat(e.id),
        tags: e.tags,
    };
}
function C(e, t) {
    let n = +!m(e),
        r = +!m(t);
    return n !== r ? n - r : (0, E.y2)(e, t);
}
function h() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : T.intl.string(T.t["gnsna/"]);
    return [
        {
            rowType: I.aC.EMPTY_STATE,
            colorString: p.Pbq,
            name: e,
            disabled: !0,
            id: "EMPTY_STATE",
        },
    ];
}
function O(e, t, n, i) {
    let l = c.default.getCurrentUser();
    if (null == l) return !1;
    if (null == e) return l.id !== t;
    let u = e.permissionOverwrites[t];
    return (null == i ? void 0 : i[t]) != null && (u = i[t]), null == u || !r.e$(u.allow, n);
}
function w(e, t) {
    return N.default.castGuildIdAsEveryoneGuildRoleId(e) === t;
}
function v(e, t, n, r) {
    let i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => !0;
    return t
        .filter((e) => !m(e) && O(n, e.id, r) && !(0, o.fI)(e) && i(e.name))
        .sort(C)
        .map((e) => _(e));
}
function A(e, t, n, r) {
    let i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => !0;
    return t
        .filter((e) => !m(e) && O(n, e.id, r) && !(0, o.fI)(e) && i(e.name))
        .sort(C)
        .map((e) => _(e, (0, o.Fs)(e, r)));
}
function y(e, t, n, r, i) {
    let l = [];
    return 0 ===
        (l = t
            .filter((e) => m(e) || (!O(n, e.id, r, i) && !(0, o.fI)(e)))
            .sort(C)
            .map((e) => _(e))).length
        ? h(T.intl.string(T.t.nZfHsf))
        : l;
}
function M(e, t, n, i, l) {
    let u = [];
    return 0 ===
        (u = t
            .filter((e) => {
                var t;
                return (
                    m(e) ||
                    (!O(n, e.id, i, l) && !(0, o.fI)(e)) ||
                    r.e$(r.$e(e.permissions, null == (t = n.permissionOverwrites[e.id]) ? void 0 : t.allow), i)
                );
            })
            .sort(C)
            .map((e) => _(e, (0, o.Fs)(e, i)))).length
        ? h(T.intl.string(T.t.nZfHsf))
        : u;
}
function R(e, t) {
    var n;
    return null != (n = s.ZP.getNick(t.id, e.id)) ? n : g.ZP.getName(e);
}
function P(e, t) {
    var n;
    let r = (0, a.eM)(t, e) ? I.aC.OWNER : I.aC.MEMBER;
    return {
        rowType: r,
        name: R(e, t),
        nickname: null != (n = s.ZP.getNick(t.id, e.id)) ? n : null,
        username: g.ZP.getName(e),
        id: e.id,
        avatarURL: e.getAvatarURL(t.id, 24),
        bot: e.bot,
        verifiedBot: e.isVerifiedBot(),
        disabled: (0, a.eM)(t, e),
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
        .filter(f.lm)
        .filter((e) => !(0, a.eM)(n, e) && O(t, e.id, r) && (i(R(e, n)) || i(e.username) || i(e.discriminator)))
        .map((e) => P(e, n))
        .sort(G);
}
function L(e, t, n, r, i) {
    return e
        .map(c.default.getUser)
        .filter(f.lm)
        .filter((e) => !O(t, e.id, r, i) || (0, a.eM)(n, e))
        .map((e) => P(e, n))
        .sort(G);
}
function Z(e, t) {
    switch (e) {
        case I.aC.ROLE:
            return T.intl.string(T.t.ZxoFOG);
        case I.aC.OWNER:
            return T.intl.string(T.t.NWhYJg);
        case I.aC.ADMINISTRATOR:
            return T.intl.string(T.t["dwlcc+"]);
        case I.aC.MEMBER:
            return t ? T.intl.string(T.t.UAJxZi) : null;
        case I.aC.USER:
            return T.intl.string(T.t.KD6OJJ);
        case I.aC.GUILD:
            return T.intl.string(T.t["5qyruI"]);
        case I.aC.EMPTY_STATE:
            return null;
    }
}
function U(e) {
    switch (e) {
        case I.aC.ROLE:
            return T.intl.string(T.t["Gzc/a8"]);
        case I.aC.OWNER:
            return T.intl.string(T.t.icuNBM);
        case I.aC.ADMINISTRATOR:
            return T.intl.string(T.t.eTmN5a);
        case I.aC.MEMBER:
            return T.intl.string(T.t["Gzc/a8"]);
        case I.aC.EMPTY_STATE:
        default:
            return null;
    }
}
function b(e, t, n) {
    let i = e.permissionOverwrites[e.guild_id];
    null == i && (i = S.we(e.guild_id));
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
    return (l.deny = r.Od(l.deny, t)), (l.allow = r.Od(l.allow, t)), n || (l.deny = r.IH(l.deny, t)), l;
}
function k(e, t, n) {
    let r = b(e, t, n);
    (0, i.kY)(e, r.id, r.allow, r.deny);
}
function H(e, t) {
    let n = c.default.getCurrentUser();
    if (null == n) return;
    let u = e.permissionOverwrites[n.id];
    if (null == u) {
        let u = {
            id: n.id,
            type: l.BN.MEMBER,
            allow: r.IH(S.Hn, t),
            deny: S.Hn,
        };
        return (0, i.hw)(e.id, [u], !0);
    }
    {
        let { allow: n, deny: l } = u;
        return (n = r.IH(n, t)), (0, i.kY)(e, u.id, n, l);
    }
}
function B(e, t) {
    if (null == e) return !1;
    let n = e.permissionOverwrites[e.guild_id];
    return (
        (null == t ? void 0 : t[e.guild_id]) != null && (n = t[e.guild_id]),
        null != n && r.e$(n.deny, e.accessPermissions)
    );
}
function $(e, t, n) {
    return e === p.d4z.GUILD_TEXT || e === p.d4z.GUILD_ANNOUNCEMENT
        ? t
        : (!(0, u.bw)(e) && e !== p.d4z.GUILD_CATEGORY) || (t && n);
}
function q(e) {
    switch (e) {
        case p.d4z.GUILD_TEXT:
        case p.d4z.GUILD_ANNOUNCEMENT:
            return T.intl.format(T.t.ZDtA0T, {});
        case p.d4z.GUILD_VOICE:
            return T.intl.format(T.t.iZAMty, {});
        case p.d4z.GUILD_CATEGORY:
            return T.intl.format(T.t.PhnARV, {});
        default:
            return null;
    }
}
function Y(e, t) {
    let n = [];
    return (
        Object.values(e).forEach((e) => {
            let { row: r } = e;
            null != r.id &&
                "" !== r.id &&
                (r.rowType === I.aC.ROLE
                    ? n.push((0, d.rX)(r.id, t))
                    : r.rowType === I.aC.MEMBER && n.push((0, d.jZ)(r.id, t)));
        }),
        n
    );
}
