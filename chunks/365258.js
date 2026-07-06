"use strict";
n.d(t, { AB: () => S, AI: () => _, Xc: () => g, ae: () => I, g8: () => m, gF: () => N, gS: () => T, vz: () => A });
var i,
    r = n(873298),
    s = n(885386),
    a = n(205761),
    o = n(498642),
    l = n(71393),
    u = n(711014),
    c = n(115063),
    d = n(375708),
    _ = (((i = {}).RESTRICTING = "restricting"), (i.EXPANDING = "expanding"), i);
let h = r.Qd;
function f(e) {
    switch (e) {
        case h.ACTIVITY_STATUS_OFF:
            return 2;
        case h.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS:
            return 1;
        case h.ACTIVITY_STATUS_ON:
            return 0;
        default:
            return -1;
    }
}
let E = new Map([
    [r.KP.FRIENDS_AND_ALL_GUILDS, h.ACTIVITY_STATUS_OFF],
    [r.KP.FRIENDS_AND_SMALL_GUILDS, h.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS],
    [r.KP.FRIENDS_ONLY, h.ACTIVITY_STATUS_ON],
]);
function p(e) {
    return E.get(e) ?? h.ACTIVITY_STATUS_OFF;
}
function m(e, t) {
    if (e === t) return null;
    let n = f(e),
        i = f(t);
    if (n < 0 || i < 0) return null;
    let r = i < n ? "restricting" : "expanding",
        s = (0, c.Kk)(),
        a = u.Ay.getFlattenedGuildIds(),
        d =
            (e === h.ACTIVITY_STATUS_OFF && t === h.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS) ||
            (e === h.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS && t === h.ACTIVITY_STATUS_OFF)
                ? "large_only"
                : (e === h.ACTIVITY_STATUS_ON && t === h.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS) ||
                    (e === h.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS && t === h.ACTIVITY_STATUS_ON)
                  ? "small_only"
                  : "all",
        _ = a.filter((e) => {
            if (null == l.A.getGuild(e)) return !1;
            let t = s.has(e);
            if (("restricting" === r && t) || ("expanding" === r && !t)) return !1;
            if ("all" === d) return !0;
            let n = o.A.getMemberCount(e);
            return null == n ? "restricting" === r : "large_only" === d ? n > 200 : n <= 200;
        });
    return 0 === _.length
        ? null
        : (_.sort((e, t) => {
              let n = l.A.getGuild(e),
                  i = l.A.getGuild(t);
              return n?.joinedAt == null && i?.joinedAt == null
                  ? 0
                  : n?.joinedAt == null
                    ? 1
                    : i?.joinedAt == null
                      ? -1
                      : new Date(i.joinedAt).getTime() - new Date(n.joinedAt).getTime();
          }),
          { affectedGuildIds: _, direction: r });
}
function g(e) {
    switch (e) {
        case h.ACTIVITY_STATUS_OFF:
            return d.intl.string(d.t.FzgQna).toLowerCase();
        case h.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS:
            return d.intl.string(d.t["1hvuGH"]).toLowerCase();
        case h.ACTIVITY_STATUS_ON:
            return d.intl.string(d.t.fQc5la).toLowerCase();
        default:
            return "";
    }
}
function A(e, t) {
    return {
        title: d.intl.string(e ? d.t.eYDA7D : d.t["9jYwjo"]),
        subtitle: d.intl.format(e ? d.t["c5/jDc"] : d.t.ajzh8S, { settingName: t }),
        confirmText: d.intl.string(e ? d.t["6uPZV1"] : d.t.a9PIyD),
        toastContent: d.intl.string(e ? d.t.AdpgML : d.t["Q7E+QF"]),
    };
}
function I(e, t) {
    return {
        title: d.intl.string(e ? d.t.jRx1Aa : d.t.S0Y0bh),
        subtitle: d.intl.format(e ? d.t.Fs96LO : d.t.GcoYX8, { settingName: t }),
        confirmText: d.intl.string(e ? d.t["4DM5HJ"] : d.t.WRrDtI),
        toastContent: d.intl.string(e ? d.t.AdpgML : d.t["Q7E+QF"]),
    };
}
function T(e, t) {
    let n = p(t),
        i = s._Z.getSetting();
    if (i === n || f(p(e)) > f(n) != f(i) > f(n)) return null;
    let a = m(i, n);
    if (null == a) return null;
    let o = (function (e) {
        switch (e) {
            case r.KP.FRIENDS_AND_ALL_GUILDS:
                return d.intl.string(d.t.Boxc8R).toLowerCase();
            case r.KP.FRIENDS_AND_SMALL_GUILDS:
                return d.intl.string(d.t.YOIKBt).toLowerCase();
            case r.KP.FRIENDS_ONLY:
                return d.intl.string(d.t.u0nlJv).toLowerCase();
            default:
                return "";
        }
    })(t);
    return { affectedGuildIds: a.affectedGuildIds, direction: a.direction, settingName: o, mappedActivityValue: n };
}
function S(e) {
    return [...e].sort((e, t) => a.A.getScoreWithoutFetchingLatest(t) - a.A.getScoreWithoutFetchingLatest(e));
}
function N(e, t) {
    let n = (0, c.Kk)(),
        i = new Set(t);
    if ("restricting" === e) {
        let e = new Set([...n, ...i]);
        s.JG.updateSetting([...e]);
    } else {
        let e = [...n].filter((e) => !i.has(e));
        s.JG.updateSetting(e);
    }
}
