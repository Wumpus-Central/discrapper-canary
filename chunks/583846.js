"use strict";
n.d(t, {
    As: () => m,
    BZ: () => L,
    CZ: () => x,
    Hd: () => T,
    I5: () => I,
    JM: () => E,
    KH: () => C,
    L7: () => v,
    Pj: () => w,
    Pv: () => g,
    Rf: () => A,
    TQ: () => S,
    W6: () => f,
    aJ: () => h,
    gF: () => R,
    iy: () => D,
    kR: () => N,
    ty: () => y,
    us: () => b,
    uw: () => O,
});
var r = n(444058),
    i = n(989349),
    a = n.n(i),
    s = n(974690),
    o = n(681154),
    l = n(927813),
    u = n(661191),
    c = n(985018);
let d = (e, t) => {
        let n = Math.max(e - t, 0) / l.A.Millis.SECOND,
            r = Math.floor(n) % l.A.Seconds.MINUTE,
            i = Math.floor(n / l.A.Seconds.MINUTE) % l.A.Seconds.MINUTE;
        return {
            seconds: r,
            minutes: i,
            hours: Math.floor(n / l.A.Seconds.HOUR),
            days: Math.floor(n / l.A.Seconds.DAY),
        };
    },
    _ = (e, t) => {
        let n = "end" in e ? e.end : void 0,
            r = "isCountDown" in e && null != e.isCountDown && e.isCountDown;
        return r && null != n && n > t
            ? d(n, t)
            : d(null == n || r ? t : Math.min(n, t), "id" in e ? u.default.extractTimestamp(e.id) : e.start);
    },
    f = (e, t) => {
        let { seconds: n, minutes: r, hours: i } = _(e, t);
        function a(e) {
            return String(e).padStart(2, "0");
        }
        let s = i,
            o = i > 0 ? a(r) : r,
            l = a(n);
        return i > 0 ? `${s}:${o}:${l}` : `${o}:${l}`;
    },
    p = {
        secondsAgo: (e) => c.intl.formatToPlainString(c.t.EOrEJl, { count: e }),
        minutesAgo: (e) => c.intl.formatToPlainString(c.t.LRNgHp, { count: e }),
        hoursAgo: (e) => c.intl.formatToPlainString(c.t.raJpz3, { count: e }),
        daysAgo: (e) => c.intl.formatToPlainString(c.t.KkvKhi, { count: e }),
        weeksAgo: (e) => c.intl.formatToPlainString(c.t.sDtO6D, { count: e }),
        monthsAgo: (e) => c.intl.formatToPlainString(c.t.ITymou, { count: e }),
    },
    h = function (e, t, n) {
        let { formatSet: r = p } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
            i = a()(n),
            s = a()(u.default.extractTimestamp(e.id)),
            o = i.diff(s, "s"),
            c = Math.abs(o);
        if (c < l.A.Seconds.MINUTE) return r.secondsAgo(o);
        if (c < l.A.Seconds.HOUR) {
            let e = Math.round(o / l.A.Seconds.MINUTE);
            return r.minutesAgo(e);
        }
        if (c < 12 * l.A.Seconds.HOUR) {
            let e = Math.round(o / l.A.Seconds.HOUR);
            return r.hoursAgo(e);
        }
        if (c < 9 * l.A.Seconds.DAY) {
            let e = Math.round(o / l.A.Seconds.DAY);
            return r.daysAgo(e);
        }
        if (c < 4 * l.A.Seconds.WEEK) {
            let e = Math.round(o / (7 * l.A.Seconds.DAY));
            return r.weeksAgo(e);
        }
        let d = Math.round(o / l.A.Seconds.DAYS_30);
        return r.monthsAgo(d);
    },
    m = function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now(),
            r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        return E(e) ? f(e, n) : h(e, t, n, r);
    };
function g(e, t) {
    return e.traits.find((e) => e.type === t);
}
function E(e) {
    return g(e, s.K.IS_LIVE)?.is_live ?? !1;
}
function A(e) {
    return g(e, s.K.FIRST_TIME)?.first_time ?? !1;
}
function I(e) {
    return null != e.expires_at && new Date(e.expires_at) < new Date();
}
function T(e) {
    return E(e) && !I(e);
}
function y(e) {
    return g(e, s.K.DURATION_SECONDS)?.duration_seconds;
}
function S(e) {
    return g(e, s.K.AGGREGATE_RANGE)?.range;
}
function v(e) {
    return g(e, s.K.MARATHON)?.marathon;
}
function C(e) {
    let t = g(e, s.K.RESURRECTED);
    return t?.resurrected_last_played != null ? new Date(t.resurrected_last_played) : void 0;
}
function b(e) {
    let { months: t = 0, weeks: n = 0, days: i = 0 } = (0, r.A)({ start: e, end: new Date() });
    return c.intl.formatToPlainString(c.t.NXBtjF, { months: t, weeks: t > 0 ? 0 : n, days: t > 0 || n > 0 ? 0 : i });
}
function N(e) {
    if (null == e || "" === e) return null;
    let t = /\w+ (\d+), \w+ (\d+)/.exec(e);
    return null == t ? null : c.intl.formatToPlainString(c.t.ijVm6y, { seasonNum: t[1], episodeNum: t[2] });
}
function R(e, t) {
    let n,
        r = t?.size?.[0] ?? void 0,
        i = t?.size?.[1] ?? void 0;
    return (
        null != r && null != i && r > 0 && i > 0
            ? (n = c.intl.formatToPlainString(c.t.wmUSiy, { count: r, max: i }))
            : null != r && r > 0 && (n = c.intl.formatToPlainString(c.t.UTYMsa, { count: r })),
        null != n && null != e ? `${e} (${n})` : (e ?? n)
    );
}
function O(e) {
    return e.content_type === o.ContentInventoryEntryType.TOP_GAME;
}
function D(e) {
    return g(e, s.K.STREAK_DAYS)?.streak_count_days;
}
function L(e) {
    let t = D(e);
    if (null == t || t < 3) return !1;
    let n = u.default.extractTimestamp(e.id);
    return !(Date.now() - n > 48 * l.A.Millis.HOUR);
}
function w(e) {
    let t = y(e);
    if (null == t) return { text: null, tooltipText: null };
    let n = Math.round(t / l.A.Seconds.HOUR);
    return n <= 0
        ? { text: null, tooltipText: null }
        : {
              text: c.intl.formatToPlainString(c.t.vZaMem, { hours: n }),
              tooltipText: c.intl.formatToPlainString(c.t.S5F485, { hours: n }),
          };
}
function x(e) {
    return g(e, s.K.TRENDING_CONTENT)?.trending;
}
