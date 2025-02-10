n.d(t, {
    Ae: () => y,
    GE: () => C,
    GL: () => h,
    Jd: () => D,
    Jg: () => T,
    Nq: () => S,
    Ol: () => v,
    PJ: () => g,
    T_: () => _,
    V5: () => A,
    ap: () => R,
    bT: () => O,
    dw: () => N,
    ig: () => w,
    kr: () => E,
    n2: () => I,
    q_: () => x,
    vU: () => L,
    yA: () => b,
    yh: () => m,
    zo: () => P
});
var i = n(164369),
    r = n(913527),
    a = n.n(r),
    s = n(884439),
    o = n(876215),
    l = n(70956),
    u = n(709054),
    c = n(388032);
let d = (e) => {
        let { start: t, now: n } = e,
            i = Math.max(n - t, 0) / l.Z.Millis.SECOND,
            r = Math.floor(i) % l.Z.Seconds.MINUTE,
            a = Math.floor(i / l.Z.Seconds.MINUTE) % l.Z.Seconds.MINUTE;
        return {
            seconds: r,
            minutes: a,
            hours: Math.floor(i / l.Z.Seconds.HOUR),
            days: Math.floor(i / l.Z.Seconds.DAY)
        };
    },
    f = (e, t) =>
        d({
            start: 'id' in e ? u.default.extractTimestamp(e.id) : e.start,
            now: 'end' in e && null != e.end ? Math.min(e.end, t) : t
        }),
    _ = (e, t) => {
        let { seconds: n, minutes: i, hours: r } = f(e, t);
        function a(e) {
            return String(e).padStart(2, '0');
        }
        return c.intl.formatToPlainString(c.t['l5PP//'], {
            hours: r,
            minutes: r > 0 ? a(i) : i,
            seconds: a(n)
        });
    },
    p = {
        secondsAgo: (e) => c.intl.formatToPlainString(c.t.EOrEJi, { count: e }),
        minutesAgo: (e) => c.intl.formatToPlainString(c.t.LRNgHh, { count: e }),
        hoursAgo: (e) => c.intl.formatToPlainString(c.t.raJpz8, { count: e }),
        daysAgo: (e) => c.intl.formatToPlainString(c.t.KkvKho, { count: e }),
        weeksAgo: (e) => c.intl.formatToPlainString(c.t.sDtO6O, { count: e }),
        monthsAgo: (e) => c.intl.formatToPlainString(c.t.ITymoq, { count: e })
    },
    h = function (e, t, n) {
        let { formatSet: i = p } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
            r = a()(n),
            s = a()(u.default.extractTimestamp(e.id)),
            o = r.diff(s, 's'),
            c = Math.abs(o);
        if (c < l.Z.Seconds.MINUTE) return i.secondsAgo(o);
        if (c < l.Z.Seconds.HOUR) {
            let e = Math.round(o / l.Z.Seconds.MINUTE);
            return i.minutesAgo(e);
        }
        if (c < 12 * l.Z.Seconds.HOUR) {
            let e = Math.round(o / l.Z.Seconds.HOUR);
            return i.hoursAgo(e);
        }
        if (c < 9 * l.Z.Seconds.DAY) {
            let e = Math.round(o / l.Z.Seconds.DAY);
            return i.daysAgo(e);
        }
        if (c < 4 * l.Z.Seconds.WEEK) {
            let e = Math.round(o / (7 * l.Z.Seconds.DAY));
            return i.weeksAgo(e);
        }
        let d = Math.round(o / l.Z.Seconds.DAYS_30);
        return i.monthsAgo(d);
    },
    m = function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now(),
            i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        return E(e) ? _(e, n) : h(e, t, n, i);
    };
function g(e, t) {
    return e.traits.find((e) => e.type === t);
}
function E(e) {
    var t, n;
    return null !== (n = null === (t = g(e, s.N.IS_LIVE)) || void 0 === t ? void 0 : t.is_live) && void 0 !== n && n;
}
function v(e) {
    var t, n;
    return null !== (n = null === (t = g(e, s.N.FIRST_TIME)) || void 0 === t ? void 0 : t.first_time) && void 0 !== n && n;
}
function y(e) {
    return u.default.age(e.id) / l.Z.Millis.HOUR < 48;
}
function I(e) {
    return null != e.expires_at && new Date(e.expires_at) < new Date();
}
function T(e) {
    return E(e) && !I(e);
}
function b(e) {
    var t;
    return null === (t = g(e, s.N.DURATION_SECONDS)) || void 0 === t ? void 0 : t.duration_seconds;
}
function S(e) {
    var t;
    return null === (t = g(e, s.N.AGGREGATE_RANGE)) || void 0 === t ? void 0 : t.range;
}
function A(e) {
    var t;
    return null === (t = g(e, s.N.MARATHON)) || void 0 === t ? void 0 : t.marathon;
}
function N(e) {
    let t = g(e, s.N.RESURRECTED);
    return (null == t ? void 0 : t.resurrected_last_played) != null ? new Date(t.resurrected_last_played) : void 0;
}
function C(e) {
    let {
        months: t = 0,
        weeks: n = 0,
        days: r = 0
    } = (0, i.Z)({
        start: e,
        end: new Date()
    });
    return c.intl.formatToPlainString(c.t.NXBtjI, {
        months: t,
        weeks: t > 0 ? 0 : n,
        days: t > 0 || n > 0 ? 0 : r
    });
}
function R(e) {
    if (null == e || '' === e) return null;
    let t = /\w+ (\d+), \w+ (\d+)/.exec(e);
    return null == t
        ? null
        : c.intl.formatToPlainString(c.t['ijVm6+'], {
              seasonNum: t[1],
              episodeNum: t[2]
          });
}
function O(e, t) {
    var n, i, r, a;
    let s;
    let o = null !== (r = null == t ? void 0 : null === (n = t.size) || void 0 === n ? void 0 : n[0]) && void 0 !== r ? r : void 0,
        l = null !== (a = null == t ? void 0 : null === (i = t.size) || void 0 === i ? void 0 : i[1]) && void 0 !== a ? a : void 0;
    return (
        null != o && null != l && o > 0 && l > 0
            ? (s = c.intl.formatToPlainString(c.t.wmUSi4, {
                  count: o,
                  max: l
              }))
            : null != o && o > 0 && (s = c.intl.formatToPlainString(c.t.UTYMsb, { count: o })),
        null != s && null != e ? ''.concat(e, ' (').concat(s, ')') : null != e ? e : s
    );
}
function D(e) {
    return e.content_type === o.s.TOP_GAME;
}
function L(e) {
    var t;
    return null === (t = g(e, s.N.STREAK_DAYS)) || void 0 === t ? void 0 : t.streak_count_days;
}
function x(e) {
    let t = L(e);
    if (null == t || t < 3) return !1;
    let n = u.default.extractTimestamp(e.id);
    return !(Date.now() - n > 48 * l.Z.Millis.HOUR);
}
function P(e) {
    let t = b(e);
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
              text: c.intl.formatToPlainString(c.t.vZaMen, { hours: n }),
              tooltipText: c.intl.formatToPlainString(c.t['S5F48/'], { hours: n })
          };
}
function w(e) {
    var t;
    return null === (t = g(e, s.N.TRENDING_CONTENT)) || void 0 === t ? void 0 : t.trending;
}
