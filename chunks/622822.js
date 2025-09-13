n.d(t, {
    $5: () => X,
    I8: () => Y,
    Kt: () => k,
    RW: () => H,
    Y3: () => q,
    Yt: () => R,
    _I: () => x,
    _t: () => K,
    a1: () => G,
    bN: () => N,
    dl: () => M,
    ft: () => z,
    hO: () => P,
    kH: () => U,
    qF: () => W,
    zd: () => F,
}),
    n(953529);
var r = n(442837),
    i = n(480916),
    a = n(453679),
    o = n(81643),
    s = n(974814),
    l = n(500496),
    c = n(601964),
    u = n(592125),
    d = n(731290),
    f = n(430824),
    _ = n(594174),
    p = n(63063),
    h = n(709054),
    m = n(758119),
    g = n(723359),
    E = n(981631),
    b = n(388032);
function y(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function O(e) {
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
                y(e, t, n[t]);
            });
    }
    return e;
}
function v(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function I(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : v(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function T(e) {
    return {
        description: e ? b.intl.string(b.t["lSgO/v"]) : b.intl.string(b.t.SxY4IS),
        agreement: e ? b.intl.string(b.t.PBG51t) : b.intl.string(b.t["5B+npK"]),
    };
}
let S = new Date("06/16/2020"),
    A = [E.V_K.AGE_RESTRICTED, E.V_K.EXPLICIT],
    C = [g.L0.NSFW_SERVER, g.L0.NSFW_SERVER_INVITE, g.L0.NSFW_SERVER_INVITE_EMBED];
function N() {
    let e = _.default.getCurrentUser();
    return null != e && h.default.extractTimestamp(e.id) > S.getTime() && null == e.nsfwAllowed;
}
function R(e) {
    return A.includes(e.nsfwLevel);
}
function P(e) {
    return null != e && w(f.Z.getGuild(e));
}
function w(e) {
    let t = (0, a.u)("age_verification_utils"),
        n = (0, o.yo)();
    return t && n && (null == e ? void 0 : e.features.has(E.oNc.AGE_VERIFICATION_LARGE_GUILD));
}
function D(e) {
    let t = (0, a.z)("age_verification_utils"),
        n = (0, o.Jm)();
    return t && n && (null == e ? void 0 : e.features.has(E.oNc.AGE_VERIFICATION_LARGE_GUILD));
}
function x(e) {
    return null != e && L(f.Z.getGuild(e));
}
function L(e) {
    return (
        null != e &&
        (0, a.u)("age_verification_utils") &&
        (0, o.sf)() &&
        e.features.has(E.oNc.AGE_VERIFICATION_LARGE_GUILD)
    );
}
function j(e) {
    let t = (0, r.e7)([f.Z], () => f.Z.getGuild(e)),
        n = (0, a.z)("age_verification_utils"),
        i = (0, o.L5)();
    return null != t && n && i && t.features.has(E.oNc.AGE_VERIFICATION_LARGE_GUILD);
}
function M() {
    let e = (0, s.H1)({ location: "age-gate-utils" }),
        t = (0, o.sf)();
    return e && t;
}
function k() {
    let e = (0, s.s8)({ location: "age-gate-utils" }),
        t = (0, o.L5)();
    return e && t;
}
function U(e) {
    let t = (0, o.l6)(),
        n = (0, c.Y2)(e),
        a = j(null == e ? void 0 : e.id),
        s = (0, r.e7)([_.default], () => {
            var e;
            return (null == (e = _.default.getCurrentUser()) ? void 0 : e.nsfwAllowed) === !1;
        }),
        l = k(),
        u = D(e),
        d = b.intl.string(n ? b.t.xi46lp : b.t.ZmwvDQ);
    if (l) {
        if (u) {
            let e = T(t);
            return I(O({ title: b.intl.string(b.t.MjQbfn) }, e), { modalType: i.it.GUILD_LARGE_SERVER_UNDERAGE });
        }
        return t
            ? {
                  title: d,
                  description: n ? b.intl.format(b.t["7uIWQE"], {}) : b.intl.format(b.t.x1coPj, {}),
                  agreement: b.intl.string(b.t.PBG51t),
                  modalType: i.it.NSFW_CHANNEL_AGE_VERIFY,
              }
            : a
              ? {
                    title: b.intl.string(b.t.UYReTk),
                    description: b.intl.string(b.t.SxY4IS),
                    agreement: b.intl.string(b.t["5B+npK"]),
                    modalType: i.it.GUILD_LARGE_SERVER,
                }
              : {
                    title: d,
                    description: n ? b.intl.string(b.t.akjk0d) : b.intl.string(b.t["u/xqhY"]),
                    agreement: b.intl.string(b.t["5B+npK"]),
                    modalType: i.it.NSFW_CHANNEL_AGE_VERIFY,
                };
    }
    return s
        ? {
              title: b.intl.string(n ? b.t["H0SG/v"] : b.t.NEabBQ),
              description: b.intl.format(n ? b.t["6++3cX"] : b.t["2kHZen"], {
                  helpURL: p.Z.getArticleURL(E.BhN.NSFW_AGE_GATING),
              }),
              agreement: null,
              modalType: i.it.NSFW_CHANNEL_UNDERAGE,
          }
        : {
              title: d,
              description: b.intl.string(n ? b.t.ZtuRtr : b.t.E4Cd5O),
              agreement: b.intl.string(b.t.wVq7ur),
              modalType: i.it.NSFW_CHANNEL_VERIFIED,
          };
}
function G(e) {
    let t = (0, o.l6)(),
        n = e === g.L0.NSFW_SERVER || e === g.L0.NSFW_SERVER_INVITE || e === g.L0.NSFW_SERVER_INVITE_EMBED;
    if (e === g.L0.JOIN_LARGE_GUILD_UNDERAGE || e === g.L0.ACCESS_LARGE_GUILD_UNDERAGE) {
        let n = e === g.L0.JOIN_LARGE_GUILD_UNDERAGE ? b.t["u/xsKy"] : b.t.MjQbfn,
            r = T(t);
        return {
            verifyTitle: b.intl.string(n),
            verifyGateDescription: r.description,
            verifyAgreementButtonText: r.agreement,
        };
    }
    return t
        ? {
              verifyAgreementButtonText: b.intl.string(b.t.PBG51t),
              verifyGateDescription: n ? b.intl.format(b.t["7uIWQE"], {}) : b.intl.format(b.t.x1coPj, {}),
              verifyTitle: n ? b.intl.string(b.t.xi46lp) : b.intl.string(b.t.ZmwvDQ),
          }
        : e === g.L0.LARGE_GUILD
          ? {
                verifyTitle: b.intl.string(b.t.UYReTk),
                verifyGateDescription: b.intl.string(b.t.SxY4IS),
                verifyAgreementButtonText: b.intl.string(b.t["5B+npK"]),
            }
          : {
                verifyAgreementButtonText: b.intl.string(b.t["5B+npK"]),
                verifyGateDescription: n ? b.intl.string(b.t.akjk0d) : b.intl.string(b.t["u/xqhY"]),
                verifyTitle: n ? b.intl.string(b.t.xi46lp) : b.intl.string(b.t.ZmwvDQ),
            };
}
let B = () => {
        let e = _.default.getCurrentUser();
        if (null == e) return !1;
        let t = M();
        return !0 !== e.nsfwAllowed || t;
    },
    Z = (e) => {
        if (!B() || null == e) return !1;
        let t = f.Z.getGuild(e);
        return (
            null != t &&
            (0, c.Y2)(t) &&
            (0, l.Tz)({
                guildId: e,
                location: "age-gate-utils",
            })
        );
    },
    F = (e) => !!B() && null != e && q(u.Z.getChannel(e)),
    V = (e) => M() && F(e),
    H = (e) => !!V(e) && ((0, m.mN)(g.L0.NSFW_VOICE_CHANNEL), !0);
function Y(e, t, n) {
    if (P(e)) return void (0, m.mN)(g.L0.ACCESS_LARGE_GUILD_UNDERAGE);
    if (Z(e)) {
        let e = null != n && C.includes(n) ? n : g.L0.NSFW_SERVER;
        (0, m.mN)(e);
        return;
    }
    return x(e)
        ? void (0, m.mN)(g.L0.LARGE_GUILD)
        : Q() && F(t)
          ? void (0, m.mN)(null != n ? n : g.L0.NSFW_CHANNEL)
          : void 0;
}
let W = (e) => null != e && (e.isNSFW() || (0, c.Y2)(f.Z.getGuild(e.guild_id))),
    K = (e) => {
        if (null == e) return !1;
        let t = (0, o.sf)();
        return W(e) && t;
    },
    z = (e) => {
        var t;
        if (null == e) return !1;
        let n = (null == (t = _.default.getCurrentUser()) ? void 0 : t.nsfwAllowed) === !0;
        return W(e) && !n;
    };
function q(e) {
    var t;
    if (null == e) return !1;
    let n = d.Z.didAgree(e.guild_id),
        r = (null == (t = _.default.getCurrentUser()) ? void 0 : t.nsfwAllowed) === !1,
        i = (0, s.H1)({ location: "age-gate-utils" }),
        a = (0, o.sf)(),
        u = !(n && !r) || (a && i);
    if (e.isNSFW() && u) return !0;
    let p = e.guild_id,
        h = f.Z.getGuild(p);
    return (
        null != h &&
        (((0, l.Tz)({
            guildId: p,
            location: "age-gate-utils",
        }) &&
            (0, c.Y2)(h) &&
            a) ||
            (L(h) && a))
    );
}
function X(e) {
    let t = (0, o.L5)(),
        n = (0, r.e7)([d.Z], () => d.Z.didAgree(null == e ? void 0 : e.guild_id)),
        i = (0, r.e7)([_.default], () => {
            var e;
            return (null == (e = _.default.getCurrentUser()) ? void 0 : e.nsfwAllowed) === !1;
        }),
        a = j(null == e ? void 0 : e.guild_id),
        u = (0, s.s8)({ location: "age-gate-utils" }),
        p = (0, l.j0)({
            guildId: null == e ? void 0 : e.guild_id,
            location: "age-gate-utils",
        }),
        h = (0, r.e7)([f.Z], () => f.Z.getGuild(null == e ? void 0 : e.guild_id)),
        m = u && t,
        g = !(n && !i) || m;
    return null != e && ((!!e.isNSFW() && !!g) || (null != h && ((!!(p && (0, c.Y2)(h)) && !!t) || (!!a && !!t))));
}
function Q() {
    let e = _.default.getCurrentUser();
    return null != e && null == e.nsfwAllowed;
}
