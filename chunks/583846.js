"use strict";
n.d(t, {
    As: () => g,
    BZ: () => w,
    CZ: () => x,
    Hd: () => N,
    I5: () => S,
    JM: () => I,
    KH: () => R,
    L7: () => v,
    Pj: () => M,
    Pv: () => A,
    Rf: () => T,
    TQ: () => y,
    U3: () => E,
    W6: () => h,
    XK: () => f,
    aJ: () => m,
    gF: () => L,
    iy: () => P,
    kR: () => b,
    ty: () => C,
    us: () => O,
    uw: () => D,
}),
    n(321073);
var i = n(444058),
    r = n(989349),
    s = n.n(r),
    a = n(974690),
    o = n(681154),
    l = n(927813),
    u = n(935208),
    d = n(375708);
function c(e, t) {
    let n = Math.max(e - t, 0) / l.A.Millis.SECOND,
        i = Math.floor(n) % l.A.Seconds.MINUTE,
        r = Math.floor(n / l.A.Seconds.MINUTE) % l.A.Seconds.MINUTE;
    return { seconds: i, minutes: r, hours: Math.floor(n / l.A.Seconds.HOUR), days: Math.floor(n / l.A.Seconds.DAY) };
}
function _(e, t) {
    let n = "end" in e ? e.end : void 0,
        i = "isCountDown" in e && null != e.isCountDown && e.isCountDown;
    return i && null != n && n > t
        ? c(n, t)
        : c(null == n || i ? t : Math.min(n, t), "id" in e ? u.default.extractTimestamp(e.id) : e.start);
}
function h(e, t) {
    let { seconds: n, minutes: i, hours: r } = _(e, t);
    function s(e) {
        return String(e).padStart(2, "0");
    }
    let a = r > 0 ? s(i) : i,
        o = s(n);
    return r > 0 ? `${r}:${a}:${o}` : `${a}:${o}`;
}
function f(e) {
    let { hours: t, minutes: n, seconds: i } = e,
        r = [];
    return (
        t > 0 && r.push(d.intl.formatToPlainString(d.t.xCjYxK, { hours: t })),
        r.push(d.intl.formatToPlainString(d.t.iXLF9W, { minutes: n })),
        r.push(d.intl.formatToPlainString(d.t.geSp4K, { seconds: i })),
        r.join(", ")
    );
}
function E(e, t) {
    let { seconds: n, minutes: i, hours: r } = _(e, t);
    return f({ hours: r, minutes: i, seconds: n });
}
let p = {
    secondsAgo: (e) => d.intl.formatToPlainString(d.t.EOrEJl, { count: e }),
    minutesAgo: (e) => d.intl.formatToPlainString(d.t.LRNgHp, { count: e }),
    hoursAgo: (e) => d.intl.formatToPlainString(d.t.raJpz3, { count: e }),
    daysAgo: (e) => d.intl.formatToPlainString(d.t.KkvKhi, { count: e }),
    weeksAgo: (e) => d.intl.formatToPlainString(d.t.sDtO6D, { count: e }),
    monthsAgo: (e) => d.intl.formatToPlainString(d.t.ITymou, { count: e }),
};
function m(e, t, n) {
    let { formatSet: i = p } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        r = s()(n),
        a = s()(u.default.extractTimestamp(e.id)),
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
    let c = Math.round(o / l.A.Seconds.DAYS_30);
    return i.monthsAgo(c);
}
function g(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now(),
        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    return I(e) ? h(e, n) : m(e, t, n, i);
}
function A(e, t) {
    return e.traits.find((e) => e.type === t);
}
function I(e) {
    return A(e, a.K.IS_LIVE)?.is_live ?? !1;
}
function T(e) {
    return A(e, a.K.FIRST_TIME)?.first_time ?? !1;
}
function S(e) {
    return null != e.expires_at && new Date(e.expires_at) < new Date();
}
function N(e) {
    return I(e) && !S(e);
}
function C(e) {
    return A(e, a.K.DURATION_SECONDS)?.duration_seconds;
}
function y(e) {
    return A(e, a.K.AGGREGATE_RANGE)?.range;
}
function v(e) {
    return A(e, a.K.MARATHON)?.marathon;
}
function R(e) {
    let t = A(e, a.K.RESURRECTED);
    return t?.resurrected_last_played != null ? new Date(t.resurrected_last_played) : void 0;
}
function O(e) {
    let { months: t = 0, weeks: n = 0, days: r = 0 } = (0, i.A)({ start: e, end: new Date() });
    return d.intl.formatToPlainString(d.t.NXBtjF, { months: t, weeks: t > 0 ? 0 : n, days: t > 0 || n > 0 ? 0 : r });
}
function b(e) {
    if (null == e || "" === e) return null;
    let t = /\w+ (\d+), \w+ (\d+)/.exec(e);
    return null == t ? null : d.intl.formatToPlainString(d.t.ijVm6y, { seasonNum: t[1], episodeNum: t[2] });
}
function L(e, t) {
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
function D(e) {
    return e.content_type === o.ContentInventoryEntryType.TOP_GAME;
}
function P(e) {
    return A(e, a.K.STREAK_DAYS)?.streak_count_days;
}
function w(e) {
    let t = P(e);
    if (null == t || t < 3) return !1;
    let n = u.default.extractTimestamp(e.id);
    return !(Date.now() - n > 48 * l.A.Millis.HOUR);
}
function M(e) {
    let t = C(e);
    if (null == t) return { text: null, tooltipText: null };
    let n = Math.round(t / l.A.Seconds.HOUR);
    return n <= 0
        ? { text: null, tooltipText: null }
        : {
              text: d.intl.formatToPlainString(d.t.vZaMem, { hours: n }),
              tooltipText: d.intl.formatToPlainString(d.t.S5F485, { hours: n }),
          };
}
function x(e) {
    return A(e, a.K.TRENDING_CONTENT)?.trending;
}
