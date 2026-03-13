"use strict";
n.d(t, { AB: () => I, AI: () => h, Xc: () => f, ae: () => C, g8: () => _, gF: () => N, gS: () => E, vz: () => x });
var i,
    s = n(873298),
    l = n(253932),
    r = n(205761),
    a = n(498642),
    o = n(71393),
    c = n(711014),
    d = n(115063),
    u = n(985018),
    h = (((i = {}).RESTRICTING = "restricting"), (i.EXPANDING = "expanding"), i);
let A = s.Qd;
function m(e) {
    switch (e) {
        case A.ACTIVITY_STATUS_OFF:
            return 2;
        case A.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS:
            return 1;
        case A.ACTIVITY_STATUS_ON:
            return 0;
        default:
            return -1;
    }
}
let p = new Map([
    [s.KP.FRIENDS_AND_ALL_GUILDS, A.ACTIVITY_STATUS_OFF],
    [s.KP.FRIENDS_AND_SMALL_GUILDS, A.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS],
    [s.KP.FRIENDS_ONLY, A.ACTIVITY_STATUS_ON],
]);
function g(e) {
    return p.get(e) ?? A.ACTIVITY_STATUS_OFF;
}
function _(e, t) {
    if (e === t) return null;
    let n = m(e),
        i = m(t);
    if (n < 0 || i < 0) return null;
    let s = i < n ? "restricting" : "expanding",
        l = (0, d.Kk)(),
        r = c.Ay.getFlattenedGuildIds(),
        u =
            (e === A.ACTIVITY_STATUS_OFF && t === A.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS) ||
            (e === A.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS && t === A.ACTIVITY_STATUS_OFF)
                ? "large_only"
                : (e === A.ACTIVITY_STATUS_ON && t === A.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS) ||
                    (e === A.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS && t === A.ACTIVITY_STATUS_ON)
                  ? "small_only"
                  : "all",
        h = r.filter((e) => {
            if (null == o.A.getGuild(e)) return !1;
            let t = l.has(e);
            if (("restricting" === s && t) || ("expanding" === s && !t)) return !1;
            if ("all" === u) return !0;
            let n = a.A.getMemberCount(e);
            return null == n ? "restricting" === s : "large_only" === u ? n > 200 : n <= 200;
        });
    return 0 === h.length
        ? null
        : (h.sort((e, t) => {
              let n = o.A.getGuild(e),
                  i = o.A.getGuild(t);
              return n?.joinedAt == null && i?.joinedAt == null
                  ? 0
                  : n?.joinedAt == null
                    ? 1
                    : i?.joinedAt == null
                      ? -1
                      : new Date(i.joinedAt).getTime() - new Date(n.joinedAt).getTime();
          }),
          { affectedGuildIds: h, direction: s });
}
function f(e) {
    switch (e) {
        case A.ACTIVITY_STATUS_OFF:
            return u.intl.string(u.t.FzgQna).toLowerCase();
        case A.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS:
            return u.intl.string(u.t["1hvuGH"]).toLowerCase();
        case A.ACTIVITY_STATUS_ON:
            return u.intl.string(u.t.fQc5la).toLowerCase();
        default:
            return "";
    }
}
function x(e, t) {
    return {
        title: u.intl.string(e ? u.t.eYDA7D : u.t["9jYwjo"]),
        subtitle: u.intl.format(e ? u.t["c5/jDc"] : u.t.ajzh8S, { settingName: t }),
        confirmText: u.intl.string(e ? u.t["6uPZV1"] : u.t.a9PIyD),
        toastContent: u.intl.string(e ? u.t.AdpgML : u.t["Q7E+QF"]),
    };
}
function C(e, t) {
    return {
        title: u.intl.string(e ? u.t.jRx1Aa : u.t.S0Y0bh),
        subtitle: u.intl.format(e ? u.t.Fs96LO : u.t.GcoYX8, { settingName: t }),
        confirmText: u.intl.string(e ? u.t["4DM5HJ"] : u.t.WRrDtI),
        toastContent: u.intl.string(e ? u.t.AdpgML : u.t["Q7E+QF"]),
    };
}
function E(e, t) {
    let n = g(t),
        i = l._Z.getSetting();
    if (i === n || m(g(e)) > m(n) != m(i) > m(n)) return null;
    let r = _(i, n);
    if (null == r) return null;
    let a = (function (e) {
        switch (e) {
            case s.KP.FRIENDS_AND_ALL_GUILDS:
                return u.intl.string(u.t.Boxc8R).toLowerCase();
            case s.KP.FRIENDS_AND_SMALL_GUILDS:
                return u.intl.string(u.t.YOIKBt).toLowerCase();
            case s.KP.FRIENDS_ONLY:
                return u.intl.string(u.t.u0nlJv).toLowerCase();
            default:
                return "";
        }
    })(t);
    return { affectedGuildIds: r.affectedGuildIds, direction: r.direction, settingName: a, mappedActivityValue: n };
}
function I(e) {
    return [...e].sort((e, t) => r.A.getScoreWithoutFetchingLatest(t) - r.A.getScoreWithoutFetchingLatest(e));
}
function N(e, t) {
    let n = (0, d.Kk)(),
        i = new Set(t);
    if ("restricting" === e) {
        let e = new Set([...n, ...i]);
        l.JG.updateSetting([...e]);
    } else {
        let e = [...n].filter((e) => !i.has(e));
        l.JG.updateSetting(e);
    }
}
