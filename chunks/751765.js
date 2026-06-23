"use strict";
n.d(t, {
    Pv: () => M,
    uw: () => W,
    BZ: () => $,
    CZ: () => q,
    ty: () => G,
    iy: () => K,
    I5: () => k,
    Pj: () => z,
    Hd: () => U,
    aJ: () => L,
    As: () => w,
    TQ: () => F,
    kR: () => H,
    JM: () => P,
    us: () => j,
    L7: () => V,
    Rf: () => x,
    W6: () => R,
    U3: () => b,
    XK: () => O,
    KH: () => B,
    gF: () => Y,
}),
    n(321073);
var i = n(683706),
    r = n(410530),
    s = n(228378),
    a = n(29583),
    o = n(618027),
    l = n(998280);
function u(e) {
    return (u =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                  return typeof e;
              }
            : function (e) {
                  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
              })(e);
}
function c(e, t) {
    if (((0, o.A)(2, arguments), !t || "object" !== u(t))) return new Date(NaN);
    var n = t.years ? (0, l.A)(t.years) : 0,
        i = t.months ? (0, l.A)(t.months) : 0,
        c = t.weeks ? (0, l.A)(t.weeks) : 0,
        d = t.days ? (0, l.A)(t.days) : 0,
        _ = t.hours ? (0, l.A)(t.hours) : 0,
        h = t.minutes ? (0, l.A)(t.minutes) : 0,
        f = t.seconds ? (0, l.A)(t.seconds) : 0,
        p = (0, a.default)(e),
        E = i || n ? (0, s.default)(p, i + 12 * n) : p;
    return new Date((d || c ? (0, r.default)(E, d + 7 * c) : E).getTime() + 1e3 * (f + 60 * (h + 60 * _)));
}
var d = n(194537),
    _ = n(575223),
    h = n(582972),
    f = {
        ceil: Math.ceil,
        round: Math.round,
        floor: Math.floor,
        trunc: function (e) {
            return e < 0 ? Math.ceil(e) : Math.floor(e);
        },
    };
function p(e) {
    return e ? f[e] : f.trunc;
}
var E = n(721441),
    m = n(918494),
    g = n(989349),
    A = n.n(g),
    I = n(974690),
    T = n(681154),
    S = n(927813),
    y = n(935208),
    C = n(375708);
function N(e, t) {
    let n = Math.max(e - t, 0) / S.A.Millis.SECOND,
        i = Math.floor(n) % S.A.Seconds.MINUTE,
        r = Math.floor(n / S.A.Seconds.MINUTE) % S.A.Seconds.MINUTE;
    return { seconds: i, minutes: r, hours: Math.floor(n / S.A.Seconds.HOUR), days: Math.floor(n / S.A.Seconds.DAY) };
}
function v(e, t) {
    let n = "end" in e ? e.end : void 0,
        i = "isCountDown" in e && null != e.isCountDown && e.isCountDown;
    return i && null != n && n > t
        ? N(n, t)
        : N(null == n || i ? t : Math.min(n, t), "id" in e ? y.default.extractTimestamp(e.id) : e.start);
}
function R(e, t) {
    let { seconds: n, minutes: i, hours: r } = v(e, t);
    function s(e) {
        return String(e).padStart(2, "0");
    }
    let a = r > 0 ? s(i) : i,
        o = s(n);
    return r > 0 ? `${r}:${a}:${o}` : `${a}:${o}`;
}
function O(e) {
    let { hours: t, minutes: n, seconds: i } = e,
        r = [];
    return (
        t > 0 && r.push(C.intl.formatToPlainString(C.t.xCjYxK, { hours: t })),
        r.push(C.intl.formatToPlainString(C.t.iXLF9W, { minutes: n })),
        r.push(C.intl.formatToPlainString(C.t.geSp4K, { seconds: i })),
        r.join(", ")
    );
}
function b(e, t) {
    let { seconds: n, minutes: i, hours: r } = v(e, t);
    return O({ hours: r, minutes: i, seconds: n });
}
let D = {
    secondsAgo: (e) => C.intl.formatToPlainString(C.t.EOrEJl, { count: e }),
    minutesAgo: (e) => C.intl.formatToPlainString(C.t.LRNgHp, { count: e }),
    hoursAgo: (e) => C.intl.formatToPlainString(C.t.raJpz3, { count: e }),
    daysAgo: (e) => C.intl.formatToPlainString(C.t.KkvKhi, { count: e }),
    weeksAgo: (e) => C.intl.formatToPlainString(C.t.sDtO6D, { count: e }),
    monthsAgo: (e) => C.intl.formatToPlainString(C.t.ITymou, { count: e }),
};
function L(e, t, n) {
    let { formatSet: i = D } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        r = A()(n),
        s = A()(y.default.extractTimestamp(e.id)),
        a = r.diff(s, "s"),
        o = Math.abs(a);
    if (o < S.A.Seconds.MINUTE) return i.secondsAgo(a);
    if (o < S.A.Seconds.HOUR) {
        let e = Math.round(a / S.A.Seconds.MINUTE);
        return i.minutesAgo(e);
    }
    if (o < 12 * S.A.Seconds.HOUR) {
        let e = Math.round(a / S.A.Seconds.HOUR);
        return i.hoursAgo(e);
    }
    if (o < 9 * S.A.Seconds.DAY) {
        let e = Math.round(a / S.A.Seconds.DAY);
        return i.daysAgo(e);
    }
    if (o < 4 * S.A.Seconds.WEEK) {
        let e = Math.round(a / (7 * S.A.Seconds.DAY));
        return i.weeksAgo(e);
    }
    let l = Math.round(a / S.A.Seconds.DAYS_30);
    return i.monthsAgo(l);
}
function w(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now(),
        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    return P(e) ? R(e, n) : L(e, t, n, i);
}
function M(e, t) {
    return e.traits.find((e) => e.type === t);
}
function P(e) {
    return M(e, I.K.IS_LIVE)?.is_live ?? !1;
}
function x(e) {
    return M(e, I.K.FIRST_TIME)?.first_time ?? !1;
}
function k(e) {
    return null != e.expires_at && new Date(e.expires_at) < new Date();
}
function U(e) {
    return P(e) && !k(e);
}
function G(e) {
    return M(e, I.K.DURATION_SECONDS)?.duration_seconds;
}
function F(e) {
    return M(e, I.K.AGGREGATE_RANGE)?.range;
}
function V(e) {
    return M(e, I.K.MARATHON)?.marathon;
}
function B(e) {
    let t = M(e, I.K.RESURRECTED);
    return t?.resurrected_last_played != null ? new Date(t.resurrected_last_played) : void 0;
}
function j(e) {
    let {
        months: t = 0,
        weeks: n = 0,
        days: r = 0,
    } = (function (e) {
        (0, o.A)(1, arguments);
        var t = (0, a.default)(e.start),
            n = (0, a.default)(e.end);
        if (isNaN(t.getTime())) throw RangeError("Start Date is invalid");
        if (isNaN(n.getTime())) throw RangeError("End Date is invalid");
        var r = {};
        r.years = Math.abs(
            (function (e, t) {
                (0, o.A)(2, arguments);
                var n = (0, a.default)(e),
                    r = (0, a.default)(t),
                    s = (0, i.A)(n, r),
                    l = Math.abs((0, m.default)(n, r));
                n.setFullYear(1584), r.setFullYear(1584);
                var u = (0, i.A)(n, r) === -s,
                    c = s * (l - Number(u));
                return 0 === c ? 0 : c;
            })(n, t),
        );
        var s = (0, i.A)(n, t),
            l = c(t, { years: s * r.years });
        r.months = Math.abs((0, E.A)(n, l));
        var u = c(l, { months: s * r.months });
        r.days = Math.abs((0, d.A)(n, u));
        var f = c(u, { days: s * r.days });
        r.hours = Math.abs(
            (function (e, t, n) {
                (0, o.A)(2, arguments);
                var i = (0, h.A)(e, t) / _.s0;
                return p(null == n ? void 0 : n.roundingMethod)(i);
            })(n, f),
        );
        var g = c(f, { hours: s * r.hours });
        r.minutes = Math.abs(
            (function (e, t, n) {
                (0, o.A)(2, arguments);
                var i = (0, h.A)(e, t) / _.Cg;
                return p(null == n ? void 0 : n.roundingMethod)(i);
            })(n, g),
        );
        var A = c(g, { minutes: s * r.minutes });
        return (
            (r.seconds = Math.abs(
                (function (e, t, n) {
                    (0, o.A)(2, arguments);
                    var i = (0, h.A)(e, t) / 1e3;
                    return p(null == n ? void 0 : n.roundingMethod)(i);
                })(n, A),
            )),
            r
        );
    })({ start: e, end: new Date() });
    return C.intl.formatToPlainString(C.t.NXBtjF, { months: t, weeks: t > 0 ? 0 : n, days: t > 0 || n > 0 ? 0 : r });
}
function H(e) {
    if (null == e || "" === e) return null;
    let t = /\w+ (\d+), \w+ (\d+)/.exec(e);
    return null == t ? null : C.intl.formatToPlainString(C.t.ijVm6y, { seasonNum: t[1], episodeNum: t[2] });
}
function Y(e, t) {
    let n,
        i = t?.size?.[0] ?? void 0,
        r = t?.size?.[1] ?? void 0;
    return (
        null != i && null != r && i > 0 && r > 0
            ? (n = C.intl.formatToPlainString(C.t.wmUSiy, { count: i, max: r }))
            : null != i && i > 0 && (n = C.intl.formatToPlainString(C.t.UTYMsa, { count: i })),
        null != n && null != e ? `${e} (${n})` : (e ?? n)
    );
}
function W(e) {
    return e.content_type === T.ContentInventoryEntryType.TOP_GAME;
}
function K(e) {
    return M(e, I.K.STREAK_DAYS)?.streak_count_days;
}
function $(e) {
    let t = K(e);
    if (null == t || t < 3) return !1;
    let n = y.default.extractTimestamp(e.id);
    return !(Date.now() - n > 48 * S.A.Millis.HOUR);
}
function z(e) {
    let t = G(e);
    if (null == t) return { text: null, tooltipText: null };
    let n = Math.round(t / S.A.Seconds.HOUR);
    return n <= 0
        ? { text: null, tooltipText: null }
        : {
              text: C.intl.formatToPlainString(C.t.vZaMem, { hours: n }),
              tooltipText: C.intl.formatToPlainString(C.t.S5F485, { hours: n }),
          };
}
function q(e) {
    return M(e, I.K.TRENDING_CONTENT)?.trending;
}
