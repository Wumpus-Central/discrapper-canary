n(321073);
var i = n(536637),
    r = n.n(i),
    a = n(974690);
n(681154);
var s = n(927813),
    l = n(811091),
    o = n(792996);
function d(e, t) {
    let n = Math.max(e - t, 0) / s.A.Millis.SECOND,
        i = Math.floor(n) % s.A.Seconds.MINUTE,
        r = Math.floor(n / s.A.Seconds.MINUTE) % s.A.Seconds.MINUTE;
    return { seconds: i, minutes: r, hours: Math.floor(n / s.A.Seconds.HOUR), days: Math.floor(n / s.A.Seconds.DAY) };
}
function c(e, t) {
    let n = "end" in e ? e.end : void 0,
        i = "isCountDown" in e && null != e.isCountDown && e.isCountDown;
    return i && null != n && n > t
        ? d(n, t)
        : d(null == n || i ? t : Math.min(n, t), "id" in e ? l.default.extractTimestamp(e.id) : e.start);
}
function u(e) {
    let { hours: t, minutes: n, seconds: i } = e,
        r = [];
    return (
        t > 0 && r.push(o.intl.formatToPlainString(o.t.xCjYxK, { hours: t })),
        r.push(o.intl.formatToPlainString(o.t.iXLF9W, { minutes: n })),
        r.push(o.intl.formatToPlainString(o.t.geSp4K, { seconds: i })),
        r.join(", ")
    );
}
let _ = {
    secondsAgo: (e) => o.intl.formatToPlainString(o.t.EOrEJl, { count: e }),
    minutesAgo: (e) => o.intl.formatToPlainString(o.t.LRNgHp, { count: e }),
    hoursAgo: (e) => o.intl.formatToPlainString(o.t.raJpz3, { count: e }),
    daysAgo: (e) => o.intl.formatToPlainString(o.t.KkvKhi, { count: e }),
    weeksAgo: (e) => o.intl.formatToPlainString(o.t.sDtO6D, { count: e }),
    monthsAgo: (e) => o.intl.formatToPlainString(o.t.ITymou, { count: e }),
};
function E(e, t) {
    return e.traits.find((e) => e.type === t);
}
function A(e) {
    return E(e, a.K.IS_LIVE)?.is_live ?? !1;
}
function f(e) {
    return null != e.expires_at && new Date(e.expires_at) < new Date();
}
function h(e) {
    return E(e, a.K.DURATION_SECONDS)?.duration_seconds;
}
function I(e) {
    return E(e, a.K.STREAK_DAYS)?.streak_count_days;
}
n.d(
    t,
    {},
    {
        BZ: function (e) {
            let t = I(e);
            if (null == t || t < 3) return !1;
            let n = l.default.extractTimestamp(e.id);
            return !(Date.now() - n > 48 * s.A.Millis.HOUR);
        },
        CZ: function (e) {
            return E(e, a.K.TRENDING_CONTENT)?.trending;
        },
        Hd: function (e) {
            return A(e) && !f(e);
        },
        I5: f,
        JM: A,
        KH: function (e) {
            let t = E(e, a.K.RESURRECTED);
            return t?.resurrected_last_played != null ? new Date(t.resurrected_last_played) : void 0;
        },
        L7: function (e) {
            return E(e, a.K.MARATHON)?.marathon;
        },
        Pj: function (e) {
            let t = h(e);
            if (null == t) return { text: null, tooltipText: null, a11yText: null };
            let n = Math.round(t / s.A.Seconds.HOUR);
            return n <= 0
                ? { text: null, tooltipText: null, a11yText: null }
                : {
                      text: o.intl.formatToPlainString(o.t.vZaMem, { hours: n }),
                      tooltipText: o.intl.formatToPlainString(o.t.S5F485, { hours: n }),
                      a11yText: o.intl.formatToPlainString(o.t["RZY+tX"], { hours: n }),
                  };
        },
        Pv: E,
        Rf: function (e) {
            return E(e, a.K.FIRST_TIME)?.first_time ?? !1;
        },
        TQ: function (e) {
            return E(e, a.K.AGGREGATE_RANGE)?.range;
        },
        U3: function (e, t) {
            let { seconds: n, minutes: i, hours: r } = c(e, t);
            return u({ hours: r, minutes: i, seconds: n });
        },
        W6: function (e, t) {
            let { seconds: n, minutes: i, hours: r } = c(e, t);
            function a(e) {
                return String(e).padStart(2, "0");
            }
            let s = r > 0 ? a(i) : i,
                l = a(n);
            return r > 0 ? `${r}:${s}:${l}` : `${s}:${l}`;
        },
        WC: function (e) {
            if (null == e || "" === e) return;
            let t = /\w+ (\d+), \w+ (\d+)/.exec(e);
            if (null != t) return o.intl.formatToPlainString(o.t.zmi5IM, { seasonNum: t[1], episodeNum: t[2] });
        },
        XK: u,
        aJ: function (e, t, n) {
            let { formatSet: i = _ } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                a = r()(n),
                o = r()(l.default.extractTimestamp(e.id)),
                d = a.diff(o, "s"),
                c = Math.abs(d);
            if (c < s.A.Seconds.MINUTE) return i.secondsAgo(d);
            if (c < s.A.Seconds.HOUR) {
                let e = Math.round(d / s.A.Seconds.MINUTE);
                return i.minutesAgo(e);
            }
            if (c < 12 * s.A.Seconds.HOUR) {
                let e = Math.round(d / s.A.Seconds.HOUR);
                return i.hoursAgo(e);
            }
            if (c < 9 * s.A.Seconds.DAY) {
                let e = Math.round(d / s.A.Seconds.DAY);
                return i.daysAgo(e);
            }
            if (c < 4 * s.A.Seconds.WEEK) {
                let e = Math.round(d / (7 * s.A.Seconds.DAY));
                return i.weeksAgo(e);
            }
            let u = Math.round(d / s.A.Seconds.DAYS_30);
            return i.monthsAgo(u);
        },
        gF: function (e, t) {
            let n,
                i = t?.size?.[0] ?? void 0,
                r = t?.size?.[1] ?? void 0;
            return (
                null != i && null != r && i > 0 && r > 0
                    ? (n = o.intl.formatToPlainString(o.t.wmUSiy, { count: i, max: r }))
                    : null != i && i > 0 && (n = o.intl.formatToPlainString(o.t.UTYMsa, { count: i })),
                null != n && null != e ? `${e} (${n})` : (e ?? n)
            );
        },
        iy: I,
        kR: function (e) {
            if (null == e || "" === e) return null;
            let t = /\w+ (\d+), \w+ (\d+)/.exec(e);
            return null == t ? null : o.intl.formatToPlainString(o.t.ijVm6y, { seasonNum: t[1], episodeNum: t[2] });
        },
        sg: {
            secondsAgo: (e) => o.intl.formatToPlainString(o.t.jfUoRQ, { count: e }),
            minutesAgo: (e) => o.intl.formatToPlainString(o.t.DmvRVO, { count: e }),
            hoursAgo: (e) => o.intl.formatToPlainString(o.t.AfXezt, { count: e }),
            daysAgo: (e) => o.intl.formatToPlainString(o.t.Lru1rV, { count: e }),
            weeksAgo: (e) => o.intl.formatToPlainString(o.t["jovF+x"], { count: e }),
            monthsAgo: (e) => o.intl.formatToPlainString(o.t.nmSbST, { count: e }),
        },
        ty: h,
        us: function (e) {
            let t = r()(),
                n = t.diff(e, "months");
            return o.intl.formatToPlainString(o.t.NXBtjF, { months: n, weeks: 0, days: n > 0 ? 0 : t.diff(e, "days") });
        },
    },
);
