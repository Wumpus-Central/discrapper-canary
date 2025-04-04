n.d(t, {
    GE: () => N,
    GL: () => h,
    Jd: () => R,
    Jg: () => v,
    Nq: () => I,
    Ol: () => b,
    PJ: () => g,
    T_: () => _,
    V5: () => S,
    ap: () => A,
    bT: () => C,
    dw: () => T,
    ig: () => L,
    kr: () => E,
    n2: () => y,
    q_: () => w,
    vU: () => P,
    yA: () => O,
    yh: () => m,
    zo: () => D
}),
    n(301563);
var r = n(164369),
    i = n(913527),
    o = n.n(i),
    a = n(884439),
    s = n(876215),
    l = n(70956),
    c = n(709054),
    u = n(388032);
let d = (e) => {
        let { start: t, now: n } = e,
            r = Math.max(n - t, 0) / l.Z.Millis.SECOND,
            i = Math.floor(r) % l.Z.Seconds.MINUTE,
            o = Math.floor(r / l.Z.Seconds.MINUTE) % l.Z.Seconds.MINUTE;
        return {
            seconds: i,
            minutes: o,
            hours: Math.floor(r / l.Z.Seconds.HOUR),
            days: Math.floor(r / l.Z.Seconds.DAY)
        };
    },
    f = (e, t) =>
        d({
            start: 'id' in e ? c.default.extractTimestamp(e.id) : e.start,
            now: 'end' in e && null != e.end ? Math.min(e.end, t) : t
        }),
    _ = (e, t) => {
        let { seconds: n, minutes: r, hours: i } = f(e, t);
        function o(e) {
            return String(e).padStart(2, '0');
        }
        return u.NW.formatToPlainString(u.t['l5PP//'], {
            hours: i,
            minutes: i > 0 ? o(r) : r,
            seconds: o(n)
        });
    },
    p = {
        secondsAgo: (e) => u.NW.formatToPlainString(u.t.EOrEJi, { count: e }),
        minutesAgo: (e) => u.NW.formatToPlainString(u.t.LRNgHh, { count: e }),
        hoursAgo: (e) => u.NW.formatToPlainString(u.t.raJpz8, { count: e }),
        daysAgo: (e) => u.NW.formatToPlainString(u.t.KkvKho, { count: e }),
        weeksAgo: (e) => u.NW.formatToPlainString(u.t.sDtO6O, { count: e }),
        monthsAgo: (e) => u.NW.formatToPlainString(u.t.ITymoq, { count: e })
    },
    h = function (e, t, n) {
        let { formatSet: r = p } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
            i = o()(n),
            a = o()(c.default.extractTimestamp(e.id)),
            s = i.diff(a, 's'),
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
    return null != (n = null == (t = g(e, a.N.IS_LIVE)) ? void 0 : t.is_live) && n;
}
function b(e) {
    var t, n;
    return null != (n = null == (t = g(e, a.N.FIRST_TIME)) ? void 0 : t.first_time) && n;
}
function y(e) {
    return null != e.expires_at && new Date(e.expires_at) < new Date();
}
function v(e) {
    return E(e) && !y(e);
}
function O(e) {
    var t;
    return null == (t = g(e, a.N.DURATION_SECONDS)) ? void 0 : t.duration_seconds;
}
function I(e) {
    var t;
    return null == (t = g(e, a.N.AGGREGATE_RANGE)) ? void 0 : t.range;
}
function S(e) {
    var t;
    return null == (t = g(e, a.N.MARATHON)) ? void 0 : t.marathon;
}
function T(e) {
    let t = g(e, a.N.RESURRECTED);
    return (null == t ? void 0 : t.resurrected_last_played) != null ? new Date(t.resurrected_last_played) : void 0;
}
function N(e) {
    let {
        months: t = 0,
        weeks: n = 0,
        days: i = 0
    } = (0, r.Z)({
        start: e,
        end: new Date()
    });
    return u.NW.formatToPlainString(u.t.NXBtjI, {
        months: t,
        weeks: t > 0 ? 0 : n,
        days: t > 0 || n > 0 ? 0 : i
    });
}
function A(e) {
    if (null == e || '' === e) return null;
    let t = /\w+ (\d+), \w+ (\d+)/.exec(e);
    return null == t
        ? null
        : u.NW.formatToPlainString(u.t['ijVm6+'], {
              seasonNum: t[1],
              episodeNum: t[2]
          });
}
function C(e, t) {
    var n, r, i, o;
    let a,
        s = null != (i = null == t || null == (n = t.size) ? void 0 : n[0]) ? i : void 0,
        l = null != (o = null == t || null == (r = t.size) ? void 0 : r[1]) ? o : void 0;
    return (
        null != s && null != l && s > 0 && l > 0
            ? (a = u.NW.formatToPlainString(u.t.wmUSi4, {
                  count: s,
                  max: l
              }))
            : null != s && s > 0 && (a = u.NW.formatToPlainString(u.t.UTYMsb, { count: s })),
        null != a && null != e ? ''.concat(e, ' (').concat(a, ')') : null != e ? e : a
    );
}
function R(e) {
    return e.content_type === s.s.TOP_GAME;
}
function P(e) {
    var t;
    return null == (t = g(e, a.N.STREAK_DAYS)) ? void 0 : t.streak_count_days;
}
function w(e) {
    let t = P(e);
    if (null == t || t < 3) return !1;
    let n = c.default.extractTimestamp(e.id);
    return !(Date.now() - n > 48 * l.Z.Millis.HOUR);
}
function D(e) {
    let t = O(e);
    if (null == t)
        return {
            text: null,
            tooltipText: null
        };
    let n = Math.round(t / l.Z.Seconds.HOUR);
    return n <= 0
        ? {
              text: null,
              tooltipText: null
          }
        : {
              text: u.NW.formatToPlainString(u.t.vZaMen, { hours: n }),
              tooltipText: u.NW.formatToPlainString(u.t['S5F48/'], { hours: n })
          };
}
function L(e) {
    var t;
    return null == (t = g(e, a.N.TRENDING_CONTENT)) ? void 0 : t.trending;
}
