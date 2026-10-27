n.d(t, { AB: () => v, AI: () => h, Xc: () => _, ae: () => m, g8: () => p, gF: () => N, gS: () => T, vz: () => f });
var i,
    s = n(873298),
    r = n(885386),
    l = n(205761),
    a = n(498642),
    o = n(71393),
    c = n(711014),
    d = n(115063),
    u = n(105292),
    h = (((i = {}).RESTRICTING = "restricting"), (i.EXPANDING = "expanding"), i);
let C = s.Qd;
function A(e) {
    switch (e) {
        case C.ACTIVITY_STATUS_OFF:
            return 2;
        case C.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS:
            return 1;
        case C.ACTIVITY_STATUS_ON:
            return 0;
        default:
            return -1;
    }
}
let g = new Map([
    [s.KP.FRIENDS_AND_ALL_GUILDS, C.ACTIVITY_STATUS_OFF],
    [s.KP.FRIENDS_AND_SMALL_GUILDS, C.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS],
    [s.KP.FRIENDS_ONLY, C.ACTIVITY_STATUS_ON],
]);
function E(e) {
    return g.get(e) ?? C.ACTIVITY_STATUS_OFF;
}
function p(e, t) {
    if (e === t) return null;
    let n = A(e),
        i = A(t);
    if (n < 0 || i < 0) return null;
    let s = i < n ? "restricting" : "expanding",
        r = (0, d.Kk)(),
        l = c.Ay.getFlattenedGuildIds(),
        u =
            (e === C.ACTIVITY_STATUS_OFF && t === C.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS) ||
            (e === C.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS && t === C.ACTIVITY_STATUS_OFF)
                ? "large_only"
                : (e === C.ACTIVITY_STATUS_ON && t === C.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS) ||
                    (e === C.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS && t === C.ACTIVITY_STATUS_ON)
                  ? "small_only"
                  : "all",
        h = l.filter((e) => {
            if (null == o.A.getGuild(e)) return !1;
            let t = r.has(e);
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
function _(e) {
    switch (e) {
        case C.ACTIVITY_STATUS_OFF:
            return u.intl.string(u.t.FzgQna).toLowerCase();
        case C.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS:
            return u.intl.string(u.t["1hvuGH"]).toLowerCase();
        case C.ACTIVITY_STATUS_ON:
            return u.intl.string(u.t.fQc5la).toLowerCase();
        default:
            return "";
    }
}
function f(e, t) {
    return {
        title: u.intl.string(e ? u.t.eYDA7D : u.t["9jYwjo"]),
        subtitle: u.intl.format(e ? u.t["c5/jDc"] : u.t.ajzh8S, { settingName: t }),
        confirmText: u.intl.string(e ? u.t["6uPZV1"] : u.t.a9PIyD),
        toastContent: u.intl.string(e ? u.t.AdpgML : u.t["Q7E+QF"]),
    };
}
function m(e, t) {
    return {
        title: u.intl.string(e ? u.t.jRx1Aa : u.t.S0Y0bh),
        subtitle: u.intl.format(e ? u.t.Fs96LO : u.t.GcoYX8, { settingName: t }),
        confirmText: u.intl.string(e ? u.t["4DM5HJ"] : u.t.WRrDtI),
        toastContent: u.intl.string(e ? u.t.AdpgML : u.t["Q7E+QF"]),
    };
}
function T(e, t) {
    let n = E(t),
        i = r._Z.getSetting();
    if (i === n || A(E(e)) > A(n) != A(i) > A(n)) return null;
    let l = p(i, n);
    if (null == l) return null;
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
    return { affectedGuildIds: l.affectedGuildIds, direction: l.direction, settingName: a, mappedActivityValue: n };
}
function v(e) {
    return [...e].sort((e, t) => l.A.getScoreWithoutFetchingLatest(t) - l.A.getScoreWithoutFetchingLatest(e));
}
function N(e, t) {
    let n = (0, d.Kk)(),
        i = new Set(t);
    if ("restricting" === e) {
        let e = new Set([...n, ...i]);
        r.JG.updateSetting([...e]);
    } else {
        let e = [...n].filter((e) => !i.has(e));
        r.JG.updateSetting(e);
    }
}
