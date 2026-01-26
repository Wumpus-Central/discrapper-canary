n.d(t, {
    As: () => m,
    BZ: () => P,
    CZ: () => x,
    Hd: () => O,
    I5: () => b,
    JM: () => E,
    KH: () => S,
    L7: () => I,
    Pj: () => D,
    Pv: () => g,
    Rf: () => y,
    TQ: () => A,
    W6: () => p,
    aJ: () => h,
    gF: () => N,
    iy: () => R,
    kR: () => C,
    ty: () => v,
    us: () => T,
    uw: () => w,
}),
    n(747238);
var r = n(444058),
    i = n(989349),
    a = n.n(i),
    s = n(974690),
    o = n(681154),
    l = n(927813),
    c = n(661191),
    u = n(985018);
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
    f = (e, t) => {
        let n = "end" in e ? e.end : void 0,
            r = "isCountDown" in e && null != e.isCountDown && e.isCountDown;
        return r && null != n && n > t
            ? d(n, t)
            : d(null == n || r ? t : Math.min(n, t), "id" in e ? c.default.extractTimestamp(e.id) : e.start);
    },
    p = (e, t) => {
        let { seconds: n, minutes: r, hours: i } = f(e, t);

        function a(e) {
            return String(e).padStart(2, "0");
        }
        let s = i,
            o = i > 0 ? a(r) : r,
            l = a(n);
        return i > 0 ? "".concat(s, ":").concat(o, ":").concat(l) : "".concat(o, ":").concat(l);
    },
    _ = {
        secondsAgo: (e) =>
            u.intl.formatToPlainString(u.t.EOrEJl, {
                count: e,
            }),
        minutesAgo: (e) =>
            u.intl.formatToPlainString(u.t.LRNgHp, {
                count: e,
            }),
        hoursAgo: (e) =>
            u.intl.formatToPlainString(u.t.raJpz3, {
                count: e,
            }),
        daysAgo: (e) =>
            u.intl.formatToPlainString(u.t.KkvKhi, {
                count: e,
            }),
        weeksAgo: (e) =>
            u.intl.formatToPlainString(u.t.sDtO6D, {
                count: e,
            }),
        monthsAgo: (e) =>
            u.intl.formatToPlainString(u.t.ITymou, {
                count: e,
            }),
    },
    h = function (e, t, n) {
        let { formatSet: r = _ } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
            i = a()(n),
            s = a()(c.default.extractTimestamp(e.id)),
            o = i.diff(s, "s"),
            u = Math.abs(o);
        if (u < l.A.Seconds.MINUTE) return r.secondsAgo(o);
        if (u < l.A.Seconds.HOUR) {
            let e = Math.round(o / l.A.Seconds.MINUTE);
            return r.minutesAgo(e);
        }
        if (u < 12 * l.A.Seconds.HOUR) {
            let e = Math.round(o / l.A.Seconds.HOUR);
            return r.hoursAgo(e);
        }
        if (u < 9 * l.A.Seconds.DAY) {
            let e = Math.round(o / l.A.Seconds.DAY);
            return r.daysAgo(e);
        }
        if (u < 4 * l.A.Seconds.WEEK) {
            let e = Math.round(o / (7 * l.A.Seconds.DAY));
            return r.weeksAgo(e);
        }
        let d = Math.round(o / l.A.Seconds.DAYS_30);
        return r.monthsAgo(d);
    },
    m = function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now(),
            r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        return E(e) ? p(e, n) : h(e, t, n, r);
    };

function g(e, t) {
    return e.traits.find((e) => e.type === t);
}

function E(e) {
    var t, n;
    return null != (t = null == (n = g(e, s.K.IS_LIVE)) ? void 0 : n.is_live) && t;
}

function y(e) {
    var t, n;
    return null != (t = null == (n = g(e, s.K.FIRST_TIME)) ? void 0 : n.first_time) && t;
}

function b(e) {
    return null != e.expires_at && new Date(e.expires_at) < new Date();
}

function O(e) {
    return E(e) && !b(e);
}

function v(e) {
    var t;
    return null == (t = g(e, s.K.DURATION_SECONDS)) ? void 0 : t.duration_seconds;
}

function A(e) {
    var t;
    return null == (t = g(e, s.K.AGGREGATE_RANGE)) ? void 0 : t.range;
}

function I(e) {
    var t;
    return null == (t = g(e, s.K.MARATHON)) ? void 0 : t.marathon;
}

function S(e) {
    let t = g(e, s.K.RESURRECTED);
    return (null == t ? void 0 : t.resurrected_last_played) != null ? new Date(t.resurrected_last_played) : void 0;
}

function T(e) {
    let {
        months: t = 0,
        weeks: n = 0,
        days: i = 0,
    } = (0, r.A)({
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
    let s,
        o = null != (n = null == t || null == (i = t.size) ? void 0 : i[0]) ? n : void 0,
        l = null != (r = null == t || null == (a = t.size) ? void 0 : a[1]) ? r : void 0;
    return (
        null != o && null != l && o > 0 && l > 0
            ? (s = u.intl.formatToPlainString(u.t.wmUSiy, {
                  count: o,
                  max: l,
              }))
            : null != o &&
              o > 0 &&
              (s = u.intl.formatToPlainString(u.t.UTYMsa, {
                  count: o,
              })),
        null != s && null != e ? "".concat(e, " (").concat(s, ")") : null != e ? e : s
    );
}

function w(e) {
    return e.content_type === o.ContentInventoryEntryType.TOP_GAME;
}

function R(e) {
    var t;
    return null == (t = g(e, s.K.STREAK_DAYS)) ? void 0 : t.streak_count_days;
}

function P(e) {
    let t = R(e);
    if (null == t || t < 3) return !1;
    let n = c.default.extractTimestamp(e.id);
    return !(Date.now() - n > 48 * l.A.Millis.HOUR);
}

function D(e) {
    let t = v(e);
    if (null == t)
        return {
            text: null,
            tooltipText: null,
        };
    let n = Math.round(t / l.A.Seconds.HOUR);
    return n <= 0
        ? {
              text: null,
              tooltipText: null,
          }
        : {
              text: u.intl.formatToPlainString(u.t.vZaMem, {
                  hours: n,
              }),
              tooltipText: u.intl.formatToPlainString(u.t.S5F485, {
                  hours: n,
              }),
          };
}

function x(e) {
    var t;
    return null == (t = g(e, s.K.TRENDING_CONTENT)) ? void 0 : t.trending;
}
