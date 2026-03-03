"use strict";
n.d(t, {
    As: () => g,
    BZ: () => M,
    CZ: () => P,
    Hd: () => y,
    I5: () => S,
    JM: () => I,
    KH: () => R,
    L7: () => C,
    Pj: () => x,
    Pv: () => A,
    Rf: () => T,
    TQ: () => N,
    U3: () => h,
    W6: () => f,
    XK: () => p,
    aJ: () => E,
    gF: () => D,
    iy: () => w,
    kR: () => b,
    ty: () => v,
    us: () => O,
    uw: () => L,
}),
    n(321073);
var r = n(444058),
    i = n(989349),
    s = n.n(i),
    a = n(974690),
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
        function s(e) {
            return String(e).padStart(2, "0");
        }
        let a = i,
            o = i > 0 ? s(r) : r,
            l = s(n);
        return i > 0 ? `${a}:${o}:${l}` : `${o}:${l}`;
    },
    p = (e) => {
        let { hours: t, minutes: n, seconds: r } = e,
            i = [];
        return (
            t > 0 && i.push(c.intl.formatToPlainString(c.t.xCjYxK, { hours: t })),
            i.push(c.intl.formatToPlainString(c.t.iXLF9W, { minutes: n })),
            i.push(c.intl.formatToPlainString(c.t.geSp4K, { seconds: r })),
            i.join(", ")
        );
    },
    h = (e, t) => {
        let { seconds: n, minutes: r, hours: i } = _(e, t);
        return p({ hours: i, minutes: r, seconds: n });
    },
    m = {
        secondsAgo: (e) => c.intl.formatToPlainString(c.t.EOrEJl, { count: e }),
        minutesAgo: (e) => c.intl.formatToPlainString(c.t.LRNgHp, { count: e }),
        hoursAgo: (e) => c.intl.formatToPlainString(c.t.raJpz3, { count: e }),
        daysAgo: (e) => c.intl.formatToPlainString(c.t.KkvKhi, { count: e }),
        weeksAgo: (e) => c.intl.formatToPlainString(c.t.sDtO6D, { count: e }),
        monthsAgo: (e) => c.intl.formatToPlainString(c.t.ITymou, { count: e }),
    },
    E = function (e, t, n) {
        let { formatSet: r = m } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
            i = s()(n),
            a = s()(u.default.extractTimestamp(e.id)),
            o = i.diff(a, "s"),
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
    g = function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now(),
            r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        return I(e) ? f(e, n) : E(e, t, n, r);
    };
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
function y(e) {
    return I(e) && !S(e);
}
function v(e) {
    return A(e, a.K.DURATION_SECONDS)?.duration_seconds;
}
function N(e) {
    return A(e, a.K.AGGREGATE_RANGE)?.range;
}
function C(e) {
    return A(e, a.K.MARATHON)?.marathon;
}
function R(e) {
    let t = A(e, a.K.RESURRECTED);
    return t?.resurrected_last_played != null ? new Date(t.resurrected_last_played) : void 0;
}
function O(e) {
    let { months: t = 0, weeks: n = 0, days: i = 0 } = (0, r.A)({ start: e, end: new Date() });
    return c.intl.formatToPlainString(c.t.NXBtjF, { months: t, weeks: t > 0 ? 0 : n, days: t > 0 || n > 0 ? 0 : i });
}
function b(e) {
    if (null == e || "" === e) return null;
    let t = /\w+ (\d+), \w+ (\d+)/.exec(e);
    return null == t ? null : c.intl.formatToPlainString(c.t.ijVm6y, { seasonNum: t[1], episodeNum: t[2] });
}
function D(e, t) {
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
function L(e) {
    return e.content_type === o.ContentInventoryEntryType.TOP_GAME;
}
function w(e) {
    return A(e, a.K.STREAK_DAYS)?.streak_count_days;
}
function M(e) {
    let t = w(e);
    if (null == t || t < 3) return !1;
    let n = u.default.extractTimestamp(e.id);
    return !(Date.now() - n > 48 * l.A.Millis.HOUR);
}
function x(e) {
    let t = v(e);
    if (null == t) return { text: null, tooltipText: null };
    let n = Math.round(t / l.A.Seconds.HOUR);
    return n <= 0
        ? { text: null, tooltipText: null }
        : {
              text: c.intl.formatToPlainString(c.t.vZaMem, { hours: n }),
              tooltipText: c.intl.formatToPlainString(c.t.S5F485, { hours: n }),
          };
}
function P(e) {
    return A(e, a.K.TRENDING_CONTENT)?.trending;
}
