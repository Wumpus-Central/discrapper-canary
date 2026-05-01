n.d(t, { AB: () => m, AI: () => E, Xc: () => S, ae: () => f, g8: () => h, gF: () => O, gS: () => p, vz: () => N });
var i,
    a = n(873298),
    r = n(253932),
    s = n(205761),
    l = n(498642),
    o = n(71393),
    d = n(711014),
    c = n(115063),
    _ = n(985018),
    E = (((i = {}).RESTRICTING = "restricting"), (i.EXPANDING = "expanding"), i);
let u = a.Qd;
function A(e) {
    switch (e) {
        case u.ACTIVITY_STATUS_OFF:
            return 2;
        case u.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS:
            return 1;
        case u.ACTIVITY_STATUS_ON:
            return 0;
        default:
            return -1;
    }
}
let I = new Map([
    [a.KP.FRIENDS_AND_ALL_GUILDS, u.ACTIVITY_STATUS_OFF],
    [a.KP.FRIENDS_AND_SMALL_GUILDS, u.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS],
    [a.KP.FRIENDS_ONLY, u.ACTIVITY_STATUS_ON],
]);
function T(e) {
    return I.get(e) ?? u.ACTIVITY_STATUS_OFF;
}
function h(e, t) {
    if (e === t) return null;
    let n = A(e),
        i = A(t);
    if (n < 0 || i < 0) return null;
    let a = i < n ? "restricting" : "expanding",
        r = (0, c.Kk)(),
        s = d.Ay.getFlattenedGuildIds(),
        _ =
            (e === u.ACTIVITY_STATUS_OFF && t === u.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS) ||
            (e === u.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS && t === u.ACTIVITY_STATUS_OFF)
                ? "large_only"
                : (e === u.ACTIVITY_STATUS_ON && t === u.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS) ||
                    (e === u.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS && t === u.ACTIVITY_STATUS_ON)
                  ? "small_only"
                  : "all",
        E = s.filter((e) => {
            if (null == o.A.getGuild(e)) return !1;
            let t = r.has(e);
            if (("restricting" === a && t) || ("expanding" === a && !t)) return !1;
            if ("all" === _) return !0;
            let n = l.A.getMemberCount(e);
            return null == n ? "restricting" === a : "large_only" === _ ? n > 200 : n <= 200;
        });
    return 0 === E.length
        ? null
        : (E.sort((e, t) => {
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
          { affectedGuildIds: E, direction: a });
}
function S(e) {
    switch (e) {
        case u.ACTIVITY_STATUS_OFF:
            return _.intl.string(_.t.FzgQna).toLowerCase();
        case u.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS:
            return _.intl.string(_.t["1hvuGH"]).toLowerCase();
        case u.ACTIVITY_STATUS_ON:
            return _.intl.string(_.t.fQc5la).toLowerCase();
        default:
            return "";
    }
}
function N(e, t) {
    return {
        title: _.intl.string(e ? _.t.eYDA7D : _.t["9jYwjo"]),
        subtitle: _.intl.format(e ? _.t["c5/jDc"] : _.t.ajzh8S, { settingName: t }),
        confirmText: _.intl.string(e ? _.t["6uPZV1"] : _.t.a9PIyD),
        toastContent: _.intl.string(e ? _.t.AdpgML : _.t["Q7E+QF"]),
    };
}
function f(e, t) {
    return {
        title: _.intl.string(e ? _.t.jRx1Aa : _.t.S0Y0bh),
        subtitle: _.intl.format(e ? _.t.Fs96LO : _.t.GcoYX8, { settingName: t }),
        confirmText: _.intl.string(e ? _.t["4DM5HJ"] : _.t.WRrDtI),
        toastContent: _.intl.string(e ? _.t.AdpgML : _.t["Q7E+QF"]),
    };
}
function p(e, t) {
    let n = T(t),
        i = r._Z.getSetting();
    if (i === n || A(T(e)) > A(n) != A(i) > A(n)) return null;
    let s = h(i, n);
    if (null == s) return null;
    let l = (function (e) {
        switch (e) {
            case a.KP.FRIENDS_AND_ALL_GUILDS:
                return _.intl.string(_.t.Boxc8R).toLowerCase();
            case a.KP.FRIENDS_AND_SMALL_GUILDS:
                return _.intl.string(_.t.YOIKBt).toLowerCase();
            case a.KP.FRIENDS_ONLY:
                return _.intl.string(_.t.u0nlJv).toLowerCase();
            default:
                return "";
        }
    })(t);
    return { affectedGuildIds: s.affectedGuildIds, direction: s.direction, settingName: l, mappedActivityValue: n };
}
function m(e) {
    return [...e].sort((e, t) => s.A.getScoreWithoutFetchingLatest(t) - s.A.getScoreWithoutFetchingLatest(e));
}
function O(e, t) {
    let n = (0, c.Kk)(),
        i = new Set(t);
    if ("restricting" === e) {
        let e = new Set([...n, ...i]);
        r.JG.updateSetting([...e]);
    } else {
        let e = [...n].filter((e) => !i.has(e));
        r.JG.updateSetting(e);
    }
}
