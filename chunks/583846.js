"use strict";
n.d(t, {
    As: () => T,
    BZ: () => w,
    CZ: () => x,
    Hd: () => C,
    I5: () => N,
    JM: () => g,
    KH: () => y,
    L7: () => L,
    Pj: () => G,
    Pv: () => m,
    Rf: () => S,
    TQ: () => R,
    U3: () => h,
    W6: () => E,
    WC: () => b,
    XK: () => A,
    aJ: () => p,
    gF: () => M,
    iy: () => U,
    kR: () => v,
    sg: () => f,
    ty: () => O,
    us: () => D,
    uw: () => P,
}),
    n(321073);
var i = n(687988),
    r = n(989349),
    a = n.n(r),
    s = n(974690),
    l = n(681154),
    o = n(927813),
    d = n(935208),
    c = n(375708);
function u(e, t) {
    let n = Math.max(e - t, 0) / o.A.Millis.SECOND,
        i = Math.floor(n) % o.A.Seconds.MINUTE,
        r = Math.floor(n / o.A.Seconds.MINUTE) % o.A.Seconds.MINUTE;
    return { seconds: i, minutes: r, hours: Math.floor(n / o.A.Seconds.HOUR), days: Math.floor(n / o.A.Seconds.DAY) };
}
function _(e, t) {
    let n = "end" in e ? e.end : void 0,
        i = "isCountDown" in e && null != e.isCountDown && e.isCountDown;
    return i && null != n && n > t
        ? u(n, t)
        : u(null == n || i ? t : Math.min(n, t), "id" in e ? d.default.extractTimestamp(e.id) : e.start);
}
function E(e, t) {
    let { seconds: n, minutes: i, hours: r } = _(e, t);
    function a(e) {
        return String(e).padStart(2, "0");
    }
    let s = r > 0 ? a(i) : i,
        l = a(n);
    return r > 0 ? `${r}:${s}:${l}` : `${s}:${l}`;
}
function A(e) {
    let { hours: t, minutes: n, seconds: i } = e,
        r = [];
    return (
        t > 0 && r.push(c.intl.formatToPlainString(c.t.xCjYxK, { hours: t })),
        r.push(c.intl.formatToPlainString(c.t.iXLF9W, { minutes: n })),
        r.push(c.intl.formatToPlainString(c.t.geSp4K, { seconds: i })),
        r.join(", ")
    );
}
function h(e, t) {
    let { seconds: n, minutes: i, hours: r } = _(e, t);
    return A({ hours: r, minutes: i, seconds: n });
}
let I = {
        secondsAgo: (e) => c.intl.formatToPlainString(c.t.EOrEJl, { count: e }),
        minutesAgo: (e) => c.intl.formatToPlainString(c.t.LRNgHp, { count: e }),
        hoursAgo: (e) => c.intl.formatToPlainString(c.t.raJpz3, { count: e }),
        daysAgo: (e) => c.intl.formatToPlainString(c.t.KkvKhi, { count: e }),
        weeksAgo: (e) => c.intl.formatToPlainString(c.t.sDtO6D, { count: e }),
        monthsAgo: (e) => c.intl.formatToPlainString(c.t.ITymou, { count: e }),
    },
    f = {
        secondsAgo: (e) => c.intl.formatToPlainString(c.t.jfUoRQ, { count: e }),
        minutesAgo: (e) => c.intl.formatToPlainString(c.t.DmvRVO, { count: e }),
        hoursAgo: (e) => c.intl.formatToPlainString(c.t.AfXezt, { count: e }),
        daysAgo: (e) => c.intl.formatToPlainString(c.t.Lru1rV, { count: e }),
        weeksAgo: (e) => c.intl.formatToPlainString(c.t["jovF+x"], { count: e }),
        monthsAgo: (e) => c.intl.formatToPlainString(c.t.nmSbST, { count: e }),
    };
function p(e, t, n) {
    let { formatSet: i = I } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        r = a()(n),
        s = a()(d.default.extractTimestamp(e.id)),
        l = r.diff(s, "s"),
        c = Math.abs(l);
    if (c < o.A.Seconds.MINUTE) return i.secondsAgo(l);
    if (c < o.A.Seconds.HOUR) {
        let e = Math.round(l / o.A.Seconds.MINUTE);
        return i.minutesAgo(e);
    }
    if (c < 12 * o.A.Seconds.HOUR) {
        let e = Math.round(l / o.A.Seconds.HOUR);
        return i.hoursAgo(e);
    }
    if (c < 9 * o.A.Seconds.DAY) {
        let e = Math.round(l / o.A.Seconds.DAY);
        return i.daysAgo(e);
    }
    if (c < 4 * o.A.Seconds.WEEK) {
        let e = Math.round(l / (7 * o.A.Seconds.DAY));
        return i.weeksAgo(e);
    }
    let u = Math.round(l / o.A.Seconds.DAYS_30);
    return i.monthsAgo(u);
}
function T(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now(),
        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    return g(e) ? E(e, n) : p(e, t, n, i);
}
function m(e, t) {
    return e.traits.find((e) => e.type === t);
}
function g(e) {
    return m(e, s.K.IS_LIVE)?.is_live ?? !1;
}
function S(e) {
    return m(e, s.K.FIRST_TIME)?.first_time ?? !1;
}
function N(e) {
    return null != e.expires_at && new Date(e.expires_at) < new Date();
}
function C(e) {
    return g(e) && !N(e);
}
function O(e) {
    return m(e, s.K.DURATION_SECONDS)?.duration_seconds;
}
function R(e) {
    return m(e, s.K.AGGREGATE_RANGE)?.range;
}
function L(e) {
    return m(e, s.K.MARATHON)?.marathon;
}
function y(e) {
    let t = m(e, s.K.RESURRECTED);
    return t?.resurrected_last_played != null ? new Date(t.resurrected_last_played) : void 0;
}
function D(e) {
    let { months: t = 0, weeks: n = 0, days: r = 0 } = (0, i.A)({ start: e, end: new Date() });
    return c.intl.formatToPlainString(c.t.NXBtjF, { months: t, weeks: t > 0 ? 0 : n, days: t > 0 || n > 0 ? 0 : r });
}
function v(e) {
    if (null == e || "" === e) return null;
    let t = /\w+ (\d+), \w+ (\d+)/.exec(e);
    return null == t ? null : c.intl.formatToPlainString(c.t.ijVm6y, { seasonNum: t[1], episodeNum: t[2] });
}
function b(e) {
    if (null == e || "" === e) return;
    let t = /\w+ (\d+), \w+ (\d+)/.exec(e);
    if (null != t) return c.intl.formatToPlainString(c.t.zmi5IM, { seasonNum: t[1], episodeNum: t[2] });
}
function M(e, t) {
    let n,
        i = t?.size?.[0] ?? void 0,
        r = t?.size?.[1] ?? void 0;
    return (
        null != i && null != r && i > 0 && r > 0
            ? (n = c.intl.formatToPlainString(c.t.wmUSiy, { count: i, max: r }))
            : null != i && i > 0 && (n = c.intl.formatToPlainString(c.t.UTYMsa, { count: i })),
        null != n && null != e ? `${e} (${n})` : (e ?? n)
    );
}
function P(e) {
    return e.content_type === l.ContentInventoryEntryType.TOP_GAME;
}
function U(e) {
    return m(e, s.K.STREAK_DAYS)?.streak_count_days;
}
function w(e) {
    let t = U(e);
    if (null == t || t < 3) return !1;
    let n = d.default.extractTimestamp(e.id);
    return !(Date.now() - n > 48 * o.A.Millis.HOUR);
}
function G(e) {
    let t = O(e);
    if (null == t) return { text: null, tooltipText: null, a11yText: null };
    let n = Math.round(t / o.A.Seconds.HOUR);
    return n <= 0
        ? { text: null, tooltipText: null, a11yText: null }
        : {
              text: c.intl.formatToPlainString(c.t.vZaMem, { hours: n }),
              tooltipText: c.intl.formatToPlainString(c.t.S5F485, { hours: n }),
              a11yText: c.intl.formatToPlainString(c.t["RZY+tX"], { hours: n }),
          };
}
function x(e) {
    return m(e, s.K.TRENDING_CONTENT)?.trending;
}
