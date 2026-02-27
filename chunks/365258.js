n.d(t, { AB: () => m, AI: () => u, Xc: () => C, ae: () => S, g8: () => h, gF: () => T, gS: () => f, vz: () => p });
var i,
    r = n(873298),
    a = n(253932),
    l = n(205761),
    s = n(498642),
    o = n(71393),
    d = n(711014),
    _ = n(115063),
    c = n(985018),
    u = (((i = {}).RESTRICTING = "restricting"), (i.EXPANDING = "expanding"), i);
let A = r.Qd;
function g(e) {
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
let I = new Map([
    [r.KP.FRIENDS_AND_ALL_GUILDS, A.ACTIVITY_STATUS_OFF],
    [r.KP.FRIENDS_AND_SMALL_GUILDS, A.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS],
    [r.KP.FRIENDS_ONLY, A.ACTIVITY_STATUS_ON],
]);
function E(e) {
    return I.get(e) ?? A.ACTIVITY_STATUS_OFF;
}
function h(e, t) {
    if (e === t) return null;
    let n = g(e),
        i = g(t);
    if (n < 0 || i < 0) return null;
    let r = i < n ? "restricting" : "expanding",
        a = (0, _.Kk)(),
        l = d.Ay.getFlattenedGuildIds(),
        c =
            (e === A.ACTIVITY_STATUS_OFF && t === A.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS) ||
            (e === A.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS && t === A.ACTIVITY_STATUS_OFF)
                ? "large_only"
                : (e === A.ACTIVITY_STATUS_ON && t === A.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS) ||
                    (e === A.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS && t === A.ACTIVITY_STATUS_ON)
                  ? "small_only"
                  : "all",
        u = l.filter((e) => {
            if (null == o.A.getGuild(e)) return !1;
            let t = a.has(e);
            if (("restricting" === r && t) || ("expanding" === r && !t)) return !1;
            if ("all" === c) return !0;
            let n = s.A.getMemberCount(e);
            return null == n ? "restricting" === r : "large_only" === c ? n > 200 : n <= 200;
        });
    return 0 === u.length
        ? null
        : (u.sort((e, t) => {
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
          { affectedGuildIds: u, direction: r });
}
function C(e) {
    switch (e) {
        case A.ACTIVITY_STATUS_OFF:
            return c.intl.string(c.t.FzgQna).toLowerCase();
        case A.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS:
            return c.intl.string(c.t["1hvuGH"]).toLowerCase();
        case A.ACTIVITY_STATUS_ON:
            return c.intl.string(c.t.fQc5la).toLowerCase();
        default:
            return "";
    }
}
function p(e, t) {
    return {
        title: c.intl.string(e ? c.t.eYDA7D : c.t["9jYwjo"]),
        subtitle: c.intl.format(e ? c.t["c5/jDc"] : c.t.ajzh8S, { settingName: t }),
        confirmText: c.intl.string(e ? c.t["6uPZV1"] : c.t.a9PIyD),
        toastContent: c.intl.string(e ? c.t.AdpgML : c.t["Q7E+QF"]),
    };
}
function S(e, t) {
    return {
        title: c.intl.string(e ? c.t.jRx1Aa : c.t.S0Y0bh),
        subtitle: c.intl.format(e ? c.t.Fs96LO : c.t.GcoYX8, { settingName: t }),
        confirmText: c.intl.string(e ? c.t["4DM5HJ"] : c.t.WRrDtI),
        toastContent: c.intl.string(e ? c.t.AdpgML : c.t["Q7E+QF"]),
    };
}
function f(e, t) {
    let n = E(t),
        i = a._Z.getSetting();
    if (i === n || g(E(e)) > g(n) != g(i) > g(n)) return null;
    let l = h(i, n);
    if (null == l) return null;
    let s = (function (e) {
        switch (e) {
            case r.KP.FRIENDS_AND_ALL_GUILDS:
                return c.intl.string(c.t.Boxc8R).toLowerCase();
            case r.KP.FRIENDS_AND_SMALL_GUILDS:
                return c.intl.string(c.t.YOIKBt).toLowerCase();
            case r.KP.FRIENDS_ONLY:
                return c.intl.string(c.t.u0nlJv).toLowerCase();
            default:
                return "";
        }
    })(t);
    return { affectedGuildIds: l.affectedGuildIds, direction: l.direction, settingName: s, mappedActivityValue: n };
}
function m(e) {
    return [...e].sort((e, t) => l.A.getScoreWithoutFetchingLatest(t) - l.A.getScoreWithoutFetchingLatest(e));
}
function T(e, t) {
    let n = (0, _.Kk)(),
        i = new Set(t);
    if ("restricting" === e) {
        let e = new Set([...n, ...i]);
        a.JG.updateSetting([...e]);
    } else {
        let e = [...n].filter((e) => !i.has(e));
        a.JG.updateSetting(e);
    }
}
