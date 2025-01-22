r.d(n, {
    Ae: function () {
        return b;
    },
    GE: function () {
        return R;
    },
    GL: function () {
        return m;
    },
    Jd: function () {
        return L;
    },
    Jg: function () {
        return T;
    },
    Nq: function () {
        return A;
    },
    Ol: function () {
        return y;
    },
    PJ: function () {
        return E;
    },
    T_: function () {
        return h;
    },
    V5: function () {
        return C;
    },
    ap: function () {
        return O;
    },
    bT: function () {
        return D;
    },
    dw: function () {
        return N;
    },
    ig: function () {
        return M;
    },
    kr: function () {
        return v;
    },
    n2: function () {
        return I;
    },
    q_: function () {
        return w;
    },
    vU: function () {
        return x;
    },
    yA: function () {
        return S;
    },
    yh: function () {
        return g;
    },
    zo: function () {
        return P;
    }
});
var i = r(164369),
    a = r(913527),
    o = r.n(a),
    s = r(884439),
    l = r(876215),
    u = r(70956),
    c = r(709054),
    d = r(388032);
let f = (e) => {
        let { start: n, now: r } = e,
            i = Math.max(r - n, 0) / u.Z.Millis.SECOND,
            a = Math.floor(i) % u.Z.Seconds.MINUTE,
            o = Math.floor(i / u.Z.Seconds.MINUTE) % u.Z.Seconds.MINUTE,
            s = Math.floor(i / u.Z.Seconds.HOUR);
        return {
            seconds: a,
            minutes: o,
            hours: s,
            days: Math.floor(i / u.Z.Seconds.DAY)
        };
    },
    p = (e, n) => {
        let r = 'id' in e ? c.default.extractTimestamp(e.id) : e.start;
        return f({
            start: r,
            now: 'end' in e && null != e.end ? Math.min(e.end, n) : n
        });
    },
    h = (e, n) => {
        let { seconds: r, minutes: i, hours: a } = p(e, n);
        function o(e) {
            return String(e).padStart(2, '0');
        }
        return d.intl.formatToPlainString(d.t['l5PP//'], {
            hours: a,
            minutes: a > 0 ? o(i) : i,
            seconds: o(r)
        });
    },
    _ = {
        secondsAgo: (e) => d.intl.formatToPlainString(d.t.EOrEJi, { count: e }),
        minutesAgo: (e) => d.intl.formatToPlainString(d.t.LRNgHh, { count: e }),
        hoursAgo: (e) => d.intl.formatToPlainString(d.t.raJpz8, { count: e }),
        daysAgo: (e) => d.intl.formatToPlainString(d.t.KkvKho, { count: e }),
        weeksAgo: (e) => d.intl.formatToPlainString(d.t.sDtO6O, { count: e }),
        monthsAgo: (e) => d.intl.formatToPlainString(d.t.ITymoq, { count: e })
    },
    m = function (e, n, r) {
        let { formatSet: i = _ } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
            a = o()(r),
            s = o()(c.default.extractTimestamp(e.id)),
            l = a.diff(s, 's'),
            d = Math.abs(l);
        if (d < u.Z.Seconds.MINUTE) return i.secondsAgo(l);
        if (d < u.Z.Seconds.HOUR) {
            let e = Math.round(l / u.Z.Seconds.MINUTE);
            return i.minutesAgo(e);
        }
        if (d < 12 * u.Z.Seconds.HOUR) {
            let e = Math.round(l / u.Z.Seconds.HOUR);
            return i.hoursAgo(e);
        } else if (d < 9 * u.Z.Seconds.DAY) {
            let e = Math.round(l / u.Z.Seconds.DAY);
            return i.daysAgo(e);
        } else if (d < 4 * u.Z.Seconds.WEEK) {
            let e = Math.round(l / (7 * u.Z.Seconds.DAY));
            return i.weeksAgo(e);
        }
        let f = Math.round(l / u.Z.Seconds.DAYS_30);
        return i.monthsAgo(f);
    },
    g = function (e, n) {
        let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now(),
            i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        return v(e) ? h(e, r) : m(e, n, r, i);
    };
function E(e, n) {
    return e.traits.find((e) => e.type === n);
}
function v(e) {
    var n, r;
    return null !== (r = null === (n = E(e, s.N.IS_LIVE)) || void 0 === n ? void 0 : n.is_live) && void 0 !== r && r;
}
function y(e) {
    var n, r;
    return null !== (r = null === (n = E(e, s.N.FIRST_TIME)) || void 0 === n ? void 0 : n.first_time) && void 0 !== r && r;
}
function b(e) {
    return c.default.age(e.id) / u.Z.Millis.HOUR < 48;
}
function I(e) {
    return null != e.expires_at && new Date(e.expires_at) < new Date();
}
function T(e) {
    return v(e) && !I(e);
}
function S(e) {
    var n;
    return null === (n = E(e, s.N.DURATION_SECONDS)) || void 0 === n ? void 0 : n.duration_seconds;
}
function A(e) {
    var n;
    return null === (n = E(e, s.N.AGGREGATE_RANGE)) || void 0 === n ? void 0 : n.range;
}
function C(e) {
    var n;
    return null === (n = E(e, s.N.MARATHON)) || void 0 === n ? void 0 : n.marathon;
}
function N(e) {
    let n = E(e, s.N.RESURRECTED);
    return (null == n ? void 0 : n.resurrected_last_played) != null ? new Date(n.resurrected_last_played) : void 0;
}
function R(e) {
    let {
        months: n = 0,
        weeks: r = 0,
        days: a = 0
    } = (0, i.Z)({
        start: e,
        end: new Date()
    });
    return d.intl.formatToPlainString(d.t.NXBtjI, {
        months: n,
        weeks: n > 0 ? 0 : r,
        days: n > 0 || r > 0 ? 0 : a
    });
}
function O(e) {
    if (null == e || '' === e) return null;
    let n = /\w+ (\d+), \w+ (\d+)/.exec(e);
    return null == n
        ? null
        : d.intl.formatToPlainString(d.t['ijVm6+'], {
              seasonNum: n[1],
              episodeNum: n[2]
          });
}
function D(e, n) {
    var r, i, a, o;
    let s = null !== (a = null == n ? void 0 : null === (r = n.size) || void 0 === r ? void 0 : r[0]) && void 0 !== a ? a : void 0,
        l = null !== (o = null == n ? void 0 : null === (i = n.size) || void 0 === i ? void 0 : i[1]) && void 0 !== o ? o : void 0,
        u =
            null != s && null != l
                ? d.intl.formatToPlainString(d.t.wmUSi4, {
                      count: s,
                      max: l
                  })
                : void 0;
    return null != u && null != e ? ''.concat(e, ' (').concat(u, ')') : null != e ? e : u;
}
function L(e) {
    return e.content_type === l.s.TOP_GAME;
}
function x(e) {
    var n;
    return null === (n = E(e, s.N.STREAK_DAYS)) || void 0 === n ? void 0 : n.streak_count_days;
}
function w(e) {
    let n = x(e);
    if (null == n || n < 3) return !1;
    let r = c.default.extractTimestamp(e.id);
    return !(Date.now() - r > 48 * u.Z.Millis.HOUR) && !0;
}
function P(e) {
    let n = S(e);
    if (null == n)
        return {
            text: null,
            tooltipText: null
        };
    let r = Math.round(n / u.Z.Seconds.HOUR);
    return r <= 0
        ? {
              text: null,
              tooltipText: null
          }
        : {
              text: d.intl.formatToPlainString(d.t.vZaMen, { hours: r }),
              tooltipText: d.intl.formatToPlainString(d.t['S5F48/'], { hours: r })
          };
}
function M(e) {
    var n;
    return null === (n = E(e, s.N.TRENDING_CONTENT)) || void 0 === n ? void 0 : n.trending;
}
