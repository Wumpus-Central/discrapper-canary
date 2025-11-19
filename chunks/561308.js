n.d(t, {
    GE: () => A,
    GL: () => h,
    Jd: () => R,
    Jg: () => O,
    Nq: () => I,
    Ol: () => b,
    PJ: () => g,
    T_: () => _,
    V5: () => T,
    ap: () => C,
    bT: () => N,
    dw: () => S,
    ig: () => L,
    kr: () => E,
    n2: () => y,
    q_: () => D,
    vU: () => P,
    yA: () => v,
    yh: () => m,
    zo: () => w,
}),
    n(35282);
var r = n(164369),
    i = n(913527),
    a = n.n(i),
    o = n(884439),
    s = n(876215),
    l = n(70956),
    c = n(709054),
    u = n(388032);
let d = (e) => {
        let { start: t, now: n } = e,
            r = Math.max(n - t, 0) / l.Z.Millis.SECOND,
            i = Math.floor(r) % l.Z.Seconds.MINUTE,
            a = Math.floor(r / l.Z.Seconds.MINUTE) % l.Z.Seconds.MINUTE;
        return {
            seconds: i,
            minutes: a,
            hours: Math.floor(r / l.Z.Seconds.HOUR),
            days: Math.floor(r / l.Z.Seconds.DAY),
        };
    },
    f = (e, t) =>
        d({
            start: "id" in e ? c.default.extractTimestamp(e.id) : e.start,
            now: "end" in e && null != e.end ? Math.min(e.end, t) : t,
        }),
    _ = (e, t) => {
        let { seconds: n, minutes: r, hours: i } = f(e, t);
        function a(e) {
            return String(e).padStart(2, "0");
        }
        let o = i,
            s = i > 0 ? a(r) : r,
            l = a(n);
        return i > 0 ? "".concat(o, ":").concat(s, ":").concat(l) : "".concat(s, ":").concat(l);
    },
    p = {
        secondsAgo: (e) => u.intl.formatToPlainString(u.t.EOrEJl, { count: e }),
        minutesAgo: (e) => u.intl.formatToPlainString(u.t.LRNgHp, { count: e }),
        hoursAgo: (e) => u.intl.formatToPlainString(u.t.raJpz3, { count: e }),
        daysAgo: (e) => u.intl.formatToPlainString(u.t.KkvKhi, { count: e }),
        weeksAgo: (e) => u.intl.formatToPlainString(u.t.sDtO6D, { count: e }),
        monthsAgo: (e) => u.intl.formatToPlainString(u.t.ITymou, { count: e }),
    },
    h = function (e, t, n) {
        let { formatSet: r = p } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
            i = a()(n),
            o = a()(c.default.extractTimestamp(e.id)),
            s = i.diff(o, "s"),
            u = Math.abs(s);
        if (u < l.Z.Seconds.MINUTE) return r.secondsAgo(s);
        if (u < l.Z.Seconds.HOUR) {
            let e = Math.round(s / l.Z.Seconds.MINUTE);
            return r.minutesAgo(e);
        }
        if (u < 12 * l.Z.Seconds.HOUR) {
            let e = Math.round(s / l.Z.Seconds.HOUR);
            return r.hoursAgo(e);
        }
        if (u < 9 * l.Z.Seconds.DAY) {
            let e = Math.round(s / l.Z.Seconds.DAY);
            return r.daysAgo(e);
        }
        if (u < 4 * l.Z.Seconds.WEEK) {
            let e = Math.round(s / (7 * l.Z.Seconds.DAY));
            return r.weeksAgo(e);
        }
        let d = Math.round(s / l.Z.Seconds.DAYS_30);
        return r.monthsAgo(d);
    },
    m = function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now(),
            r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        return E(e) ? _(e, n) : h(e, t, n, r);
    };
function g(e, t) {
    return e.traits.find((e) => e.type === t);
}
function E(e) {
    var t, n;
    return null != (n = null == (t = g(e, o.N.IS_LIVE)) ? void 0 : t.is_live) && n;
}
function b(e) {
    var t, n;
    return null != (n = null == (t = g(e, o.N.FIRST_TIME)) ? void 0 : t.first_time) && n;
}
function y(e) {
    return null != e.expires_at && new Date(e.expires_at) < new Date();
}
function O(e) {
    return E(e) && !y(e);
}
function v(e) {
    var t;
    return null == (t = g(e, o.N.DURATION_SECONDS)) ? void 0 : t.duration_seconds;
}
function I(e) {
    var t;
    return null == (t = g(e, o.N.AGGREGATE_RANGE)) ? void 0 : t.range;
}
function T(e) {
    var t;
    return null == (t = g(e, o.N.MARATHON)) ? void 0 : t.marathon;
}
function S(e) {
    let t = g(e, o.N.RESURRECTED);
    return (null == t ? void 0 : t.resurrected_last_played) != null ? new Date(t.resurrected_last_played) : void 0;
}
function A(e) {
    let {
        months: t = 0,
        weeks: n = 0,
        days: i = 0,
    } = (0, r.Z)({
        start: e,
        end: new Date(),
    });
    return u.intl.formatToPlainString(u.t.NXBtjF, {
        months: t,
        weeks: t > 0 ? 0 : n,
        days: t > 0 || n > 0 ? 0 : i,
    });
}
function C(e) {
    if (null == e || "" === e) return null;
    let t = /\w+ (\d+), \w+ (\d+)/.exec(e);
    return null == t
        ? null
        : u.intl.formatToPlainString(u.t.ijVm6y, {
              seasonNum: t[1],
              episodeNum: t[2],
          });
}
function N(e, t) {
    var n, r, i, a;
    let o,
        s = null != (i = null == t || null == (n = t.size) ? void 0 : n[0]) ? i : void 0,
        l = null != (a = null == t || null == (r = t.size) ? void 0 : r[1]) ? a : void 0;
    return (
        null != s && null != l && s > 0 && l > 0
            ? (o = u.intl.formatToPlainString(u.t.wmUSiy, {
                  count: s,
                  max: l,
              }))
            : null != s && s > 0 && (o = u.intl.formatToPlainString(u.t.UTYMsa, { count: s })),
        null != o && null != e ? "".concat(e, " (").concat(o, ")") : null != e ? e : o
    );
}
function R(e) {
    return e.content_type === s.s.TOP_GAME;
}
function P(e) {
    var t;
    return null == (t = g(e, o.N.STREAK_DAYS)) ? void 0 : t.streak_count_days;
}
function D(e) {
    let t = P(e);
    if (null == t || t < 3) return !1;
    let n = c.default.extractTimestamp(e.id);
    return !(Date.now() - n > 48 * l.Z.Millis.HOUR);
}
function w(e) {
    let t = v(e);
    if (null == t)
        return {
            text: null,
            tooltipText: null,
        };
    let n = Math.round(t / l.Z.Seconds.HOUR);
    return n <= 0
        ? {
              text: null,
              tooltipText: null,
          }
        : {
              text: u.intl.formatToPlainString(u.t.vZaMem, { hours: n }),
              tooltipText: u.intl.formatToPlainString(u.t.S5F485, { hours: n }),
          };
}
function L(e) {
    var t;
    return null == (t = g(e, o.N.TRENDING_CONTENT)) ? void 0 : t.trending;
}
