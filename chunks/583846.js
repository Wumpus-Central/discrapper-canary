n.d(t, {
    BZ: () => M,
    CZ: () => U,
    Hd: () => S,
    I5: () => g,
    JM: () => T,
    KH: () => R,
    L7: () => O,
    Pj: () => P,
    Pv: () => p,
    Rf: () => m,
    TQ: () => C,
    U3: () => A,
    W6: () => _,
    WC: () => D,
    XK: () => E,
    aJ: () => f,
    gF: () => v,
    iy: () => b,
    kR: () => y,
    sg: () => I,
    ty: () => N,
    us: () => L,
}),
    n(321073);
var i = n(687988),
    r = n(536637),
    a = n.n(r),
    s = n(974690);
n(681154);
var l = n(927813),
    o = n(935208),
    d = n(375708);
function c(e, t) {
    let n = Math.max(e - t, 0) / l.A.Millis.SECOND,
        i = Math.floor(n) % l.A.Seconds.MINUTE,
        r = Math.floor(n / l.A.Seconds.MINUTE) % l.A.Seconds.MINUTE;
    return { seconds: i, minutes: r, hours: Math.floor(n / l.A.Seconds.HOUR), days: Math.floor(n / l.A.Seconds.DAY) };
}
function u(e, t) {
    let n = "end" in e ? e.end : void 0,
        i = "isCountDown" in e && null != e.isCountDown && e.isCountDown;
    return i && null != n && n > t
        ? c(n, t)
        : c(null == n || i ? t : Math.min(n, t), "id" in e ? o.default.extractTimestamp(e.id) : e.start);
}
function _(e, t) {
    let { seconds: n, minutes: i, hours: r } = u(e, t);
    function a(e) {
        return String(e).padStart(2, "0");
    }
    let s = r > 0 ? a(i) : i,
        l = a(n);
    return r > 0 ? `${r}:${s}:${l}` : `${s}:${l}`;
}
function E(e) {
    let { hours: t, minutes: n, seconds: i } = e,
        r = [];
    return (
        t > 0 && r.push(d.intl.formatToPlainString(d.t.xCjYxK, { hours: t })),
        r.push(d.intl.formatToPlainString(d.t.iXLF9W, { minutes: n })),
        r.push(d.intl.formatToPlainString(d.t.geSp4K, { seconds: i })),
        r.join(", ")
    );
}
function A(e, t) {
    let { seconds: n, minutes: i, hours: r } = u(e, t);
    return E({ hours: r, minutes: i, seconds: n });
}
let h = {
        secondsAgo: (e) => d.intl.formatToPlainString(d.t.EOrEJl, { count: e }),
        minutesAgo: (e) => d.intl.formatToPlainString(d.t.LRNgHp, { count: e }),
        hoursAgo: (e) => d.intl.formatToPlainString(d.t.raJpz3, { count: e }),
        daysAgo: (e) => d.intl.formatToPlainString(d.t.KkvKhi, { count: e }),
        weeksAgo: (e) => d.intl.formatToPlainString(d.t.sDtO6D, { count: e }),
        monthsAgo: (e) => d.intl.formatToPlainString(d.t.ITymou, { count: e }),
    },
    I = {
        secondsAgo: (e) => d.intl.formatToPlainString(d.t.jfUoRQ, { count: e }),
        minutesAgo: (e) => d.intl.formatToPlainString(d.t.DmvRVO, { count: e }),
        hoursAgo: (e) => d.intl.formatToPlainString(d.t.AfXezt, { count: e }),
        daysAgo: (e) => d.intl.formatToPlainString(d.t.Lru1rV, { count: e }),
        weeksAgo: (e) => d.intl.formatToPlainString(d.t["jovF+x"], { count: e }),
        monthsAgo: (e) => d.intl.formatToPlainString(d.t.nmSbST, { count: e }),
    };
function f(e, t, n) {
    let { formatSet: i = h } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        r = a()(n),
        s = a()(o.default.extractTimestamp(e.id)),
        d = r.diff(s, "s"),
        c = Math.abs(d);
    if (c < l.A.Seconds.MINUTE) return i.secondsAgo(d);
    if (c < l.A.Seconds.HOUR) {
        let e = Math.round(d / l.A.Seconds.MINUTE);
        return i.minutesAgo(e);
    }
    if (c < 12 * l.A.Seconds.HOUR) {
        let e = Math.round(d / l.A.Seconds.HOUR);
        return i.hoursAgo(e);
    }
    if (c < 9 * l.A.Seconds.DAY) {
        let e = Math.round(d / l.A.Seconds.DAY);
        return i.daysAgo(e);
    }
    if (c < 4 * l.A.Seconds.WEEK) {
        let e = Math.round(d / (7 * l.A.Seconds.DAY));
        return i.weeksAgo(e);
    }
    let u = Math.round(d / l.A.Seconds.DAYS_30);
    return i.monthsAgo(u);
}
function p(e, t) {
    return e.traits.find((e) => e.type === t);
}
function T(e) {
    return p(e, s.K.IS_LIVE)?.is_live ?? !1;
}
function m(e) {
    return p(e, s.K.FIRST_TIME)?.first_time ?? !1;
}
function g(e) {
    return null != e.expires_at && new Date(e.expires_at) < new Date();
}
function S(e) {
    return T(e) && !g(e);
}
function N(e) {
    return p(e, s.K.DURATION_SECONDS)?.duration_seconds;
}
function C(e) {
    return p(e, s.K.AGGREGATE_RANGE)?.range;
}
function O(e) {
    return p(e, s.K.MARATHON)?.marathon;
}
function R(e) {
    let t = p(e, s.K.RESURRECTED);
    return t?.resurrected_last_played != null ? new Date(t.resurrected_last_played) : void 0;
}
function L(e) {
    let { months: t = 0, weeks: n = 0, days: r = 0 } = (0, i.A)({ start: e, end: new Date() });
    return d.intl.formatToPlainString(d.t.NXBtjF, { months: t, weeks: t > 0 ? 0 : n, days: t > 0 || n > 0 ? 0 : r });
}
function y(e) {
    if (null == e || "" === e) return null;
    let t = /\w+ (\d+), \w+ (\d+)/.exec(e);
    return null == t ? null : d.intl.formatToPlainString(d.t.ijVm6y, { seasonNum: t[1], episodeNum: t[2] });
}
function D(e) {
    if (null == e || "" === e) return;
    let t = /\w+ (\d+), \w+ (\d+)/.exec(e);
    if (null != t) return d.intl.formatToPlainString(d.t.zmi5IM, { seasonNum: t[1], episodeNum: t[2] });
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
function b(e) {
    return p(e, s.K.STREAK_DAYS)?.streak_count_days;
}
function M(e) {
    let t = b(e);
    if (null == t || t < 3) return !1;
    let n = o.default.extractTimestamp(e.id);
    return !(Date.now() - n > 48 * l.A.Millis.HOUR);
}
function P(e) {
    let t = N(e);
    if (null == t) return { text: null, tooltipText: null, a11yText: null };
    let n = Math.round(t / l.A.Seconds.HOUR);
    return n <= 0
        ? { text: null, tooltipText: null, a11yText: null }
        : {
              text: d.intl.formatToPlainString(d.t.vZaMem, { hours: n }),
              tooltipText: d.intl.formatToPlainString(d.t.S5F485, { hours: n }),
              a11yText: d.intl.formatToPlainString(d.t["RZY+tX"], { hours: n }),
          };
}
function U(e) {
    return p(e, s.K.TRENDING_CONTENT)?.trending;
}
