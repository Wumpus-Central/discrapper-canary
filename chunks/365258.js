n.d(t, { AB: () => C, AI: () => h, Xc: () => f, ae: () => E, g8: () => p, gF: () => N, gS: () => I, vz: () => x });
var i,
    l = n(873298),
    s = n(253932),
    a = n(205761),
    r = n(498642),
    o = n(71393),
    c = n(711014),
    d = n(115063),
    u = n(985018),
    h = (((i = {}).RESTRICTING = "restricting"), (i.EXPANDING = "expanding"), i);
let A = l.Qd;
function _(e) {
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
let m = new Map([
    [l.KP.FRIENDS_AND_ALL_GUILDS, A.ACTIVITY_STATUS_OFF],
    [l.KP.FRIENDS_AND_SMALL_GUILDS, A.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS],
    [l.KP.FRIENDS_ONLY, A.ACTIVITY_STATUS_ON],
]);
function g(e) {
    return m.get(e) ?? A.ACTIVITY_STATUS_OFF;
}
function p(e, t) {
    if (e === t) return null;
    let n = _(e),
        i = _(t);
    if (n < 0 || i < 0) return null;
    let l = i < n ? "restricting" : "expanding",
        s = (0, d.Kk)(),
        a = c.Ay.getFlattenedGuildIds(),
        u =
            (e === A.ACTIVITY_STATUS_OFF && t === A.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS) ||
            (e === A.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS && t === A.ACTIVITY_STATUS_OFF)
                ? "large_only"
                : (e === A.ACTIVITY_STATUS_ON && t === A.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS) ||
                    (e === A.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS && t === A.ACTIVITY_STATUS_ON)
                  ? "small_only"
                  : "all",
        h = a.filter((e) => {
            if (null == o.A.getGuild(e)) return !1;
            let t = s.has(e);
            if (("restricting" === l && t) || ("expanding" === l && !t)) return !1;
            if ("all" === u) return !0;
            let n = r.A.getMemberCount(e);
            return null == n ? "restricting" === l : "large_only" === u ? n > 200 : n <= 200;
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
          { affectedGuildIds: h, direction: l });
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
function E(e, t) {
    return {
        title: u.intl.string(e ? u.t.jRx1Aa : u.t.S0Y0bh),
        subtitle: u.intl.format(e ? u.t.Fs96LO : u.t.GcoYX8, { settingName: t }),
        confirmText: u.intl.string(e ? u.t["4DM5HJ"] : u.t.WRrDtI),
        toastContent: u.intl.string(e ? u.t.AdpgML : u.t["Q7E+QF"]),
    };
}
function I(e, t) {
    let n = g(t),
        i = s._Z.getSetting();
    if (i === n || _(g(e)) > _(n) != _(i) > _(n)) return null;
    let a = p(i, n);
    if (null == a) return null;
    let r = (function (e) {
        switch (e) {
            case l.KP.FRIENDS_AND_ALL_GUILDS:
                return u.intl.string(u.t.Boxc8R).toLowerCase();
            case l.KP.FRIENDS_AND_SMALL_GUILDS:
                return u.intl.string(u.t.YOIKBt).toLowerCase();
            case l.KP.FRIENDS_ONLY:
                return u.intl.string(u.t.u0nlJv).toLowerCase();
            default:
                return "";
        }
    })(t);
    return { affectedGuildIds: a.affectedGuildIds, direction: a.direction, settingName: r, mappedActivityValue: n };
}
function C(e) {
    return [...e].sort((e, t) => a.A.getScoreWithoutFetchingLatest(t) - a.A.getScoreWithoutFetchingLatest(e));
}
function N(e, t) {
    let n = (0, d.Kk)(),
        i = new Set(t);
    if ("restricting" === e) {
        let e = new Set([...n, ...i]);
        s.JG.updateSetting([...e]);
    } else {
        let e = [...n].filter((e) => !i.has(e));
        s.JG.updateSetting(e);
    }
}
