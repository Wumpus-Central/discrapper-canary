"use strict";
n.d(t, {
    As: () => A,
    BZ: () => b,
    CZ: () => U,
    Hd: () => N,
    I5: () => S,
    JM: () => p,
    KH: () => y,
    L7: () => C,
    Pj: () => k,
    Pv: () => I,
    Rf: () => T,
    TQ: () => R,
    U3: () => m,
    W6: () => E,
    XK: () => h,
    aJ: () => g,
    gF: () => v,
    iy: () => P,
    kR: () => L,
    ty: () => O,
    us: () => D,
    uw: () => w,
}),
    n(321073);
var i = n(723701),
    r = n(989349),
    s = n.n(r),
    a = n(974690),
    o = n(681154),
    l = n(927813),
    _ = n(935208),
    d = n(985018);
let u = (e, t) => {
        let n = Math.max(e - t, 0) / l.A.Millis.SECOND,
            i = Math.floor(n) % l.A.Seconds.MINUTE,
            r = Math.floor(n / l.A.Seconds.MINUTE) % l.A.Seconds.MINUTE;
        return {
            seconds: i,
            minutes: r,
            hours: Math.floor(n / l.A.Seconds.HOUR),
            days: Math.floor(n / l.A.Seconds.DAY),
        };
    },
    c = (e, t) => {
        let n = "end" in e ? e.end : void 0,
            i = "isCountDown" in e && null != e.isCountDown && e.isCountDown;
        return i && null != n && n > t
            ? u(n, t)
            : u(null == n || i ? t : Math.min(n, t), "id" in e ? _.default.extractTimestamp(e.id) : e.start);
    },
    E = (e, t) => {
        let { seconds: n, minutes: i, hours: r } = c(e, t);
        function s(e) {
            return String(e).padStart(2, "0");
        }
        let a = r > 0 ? s(i) : i,
            o = s(n);
        return r > 0 ? `${r}:${a}:${o}` : `${a}:${o}`;
    },
    h = (e) => {
        let { hours: t, minutes: n, seconds: i } = e,
            r = [];
        return (
            t > 0 && r.push(d.intl.formatToPlainString(d.t.xCjYxK, { hours: t })),
            r.push(d.intl.formatToPlainString(d.t.iXLF9W, { minutes: n })),
            r.push(d.intl.formatToPlainString(d.t.geSp4K, { seconds: i })),
            r.join(", ")
        );
    },
    m = (e, t) => {
        let { seconds: n, minutes: i, hours: r } = c(e, t);
        return h({ hours: r, minutes: i, seconds: n });
    },
    f = {
        secondsAgo: (e) => d.intl.formatToPlainString(d.t.EOrEJl, { count: e }),
        minutesAgo: (e) => d.intl.formatToPlainString(d.t.LRNgHp, { count: e }),
        hoursAgo: (e) => d.intl.formatToPlainString(d.t.raJpz3, { count: e }),
        daysAgo: (e) => d.intl.formatToPlainString(d.t.KkvKhi, { count: e }),
        weeksAgo: (e) => d.intl.formatToPlainString(d.t.sDtO6D, { count: e }),
        monthsAgo: (e) => d.intl.formatToPlainString(d.t.ITymou, { count: e }),
    },
    g = function (e, t, n) {
        let { formatSet: i = f } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
            r = s()(n),
            a = s()(_.default.extractTimestamp(e.id)),
            o = r.diff(a, "s"),
            d = Math.abs(o);
        if (d < l.A.Seconds.MINUTE) return i.secondsAgo(o);
        if (d < l.A.Seconds.HOUR) {
            let e = Math.round(o / l.A.Seconds.MINUTE);
            return i.minutesAgo(e);
        }
        if (d < 12 * l.A.Seconds.HOUR) {
            let e = Math.round(o / l.A.Seconds.HOUR);
            return i.hoursAgo(e);
        }
        if (d < 9 * l.A.Seconds.DAY) {
            let e = Math.round(o / l.A.Seconds.DAY);
            return i.daysAgo(e);
        }
        if (d < 4 * l.A.Seconds.WEEK) {
            let e = Math.round(o / (7 * l.A.Seconds.DAY));
            return i.weeksAgo(e);
        }
        let u = Math.round(o / l.A.Seconds.DAYS_30);
        return i.monthsAgo(u);
    },
    A = function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now(),
            i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        return p(e) ? E(e, n) : g(e, t, n, i);
    };
function I(e, t) {
    return e.traits.find((e) => e.type === t);
}
function p(e) {
    return I(e, a.K.IS_LIVE)?.is_live ?? !1;
}
function T(e) {
    return I(e, a.K.FIRST_TIME)?.first_time ?? !1;
}
function S(e) {
    return null != e.expires_at && new Date(e.expires_at) < new Date();
}
function N(e) {
    return p(e) && !S(e);
}
function O(e) {
    return I(e, a.K.DURATION_SECONDS)?.duration_seconds;
}
function R(e) {
    return I(e, a.K.AGGREGATE_RANGE)?.range;
}
function C(e) {
    return I(e, a.K.MARATHON)?.marathon;
}
function y(e) {
    let t = I(e, a.K.RESURRECTED);
    return t?.resurrected_last_played != null ? new Date(t.resurrected_last_played) : void 0;
}
function D(e) {
    let { months: t = 0, weeks: n = 0, days: r = 0 } = (0, i.A)({ start: e, end: new Date() });
    return d.intl.formatToPlainString(d.t.NXBtjF, { months: t, weeks: t > 0 ? 0 : n, days: t > 0 || n > 0 ? 0 : r });
}
function L(e) {
    if (null == e || "" === e) return null;
    let t = /\w+ (\d+), \w+ (\d+)/.exec(e);
    return null == t ? null : d.intl.formatToPlainString(d.t.ijVm6y, { seasonNum: t[1], episodeNum: t[2] });
}
function v(e, t) {
    let n,
        i = t?.size?.[0] ?? void 0,
        r = t?.size?.[1] ?? void 0;
    return (
        null != i && null != r && i > 0 && r > 0
            ? (n = d.intl.formatToPlainString(d.t.wmUSiy, { count: i, max: r }))
            : null != i && i > 0 && (n = d.intl.formatToPlainString(d.t.UTYMsa, { count: i })),
        null != n && null != e ? `${e} (${n})` : (e ?? n)
    );
}
function w(e) {
    return e.content_type === o.ContentInventoryEntryType.TOP_GAME;
}
function P(e) {
    return I(e, a.K.STREAK_DAYS)?.streak_count_days;
}
function b(e) {
    let t = P(e);
    if (null == t || t < 3) return !1;
    let n = _.default.extractTimestamp(e.id);
    return !(Date.now() - n > 48 * l.A.Millis.HOUR);
}
function k(e) {
    let t = O(e);
    if (null == t) return { text: null, tooltipText: null };
    let n = Math.round(t / l.A.Seconds.HOUR);
    return n <= 0
        ? { text: null, tooltipText: null }
        : {
              text: d.intl.formatToPlainString(d.t.vZaMem, { hours: n }),
              tooltipText: d.intl.formatToPlainString(d.t.S5F485, { hours: n }),
          };
}
function U(e) {
    return I(e, a.K.TRENDING_CONTENT)?.trending;
}
