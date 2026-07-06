n.d(t, { AB: () => S, AI: () => A, Xc: () => I, ae: () => N, g8: () => _, gF: () => L, gS: () => p, vz: () => T });
var i,
    l = n(873298),
    r = n(885386),
    s = n(205761),
    a = n(498642),
    o = n(71393),
    d = n(711014),
    c = n(115063),
    u = n(375708),
    A = (((i = {}).RESTRICTING = "restricting"), (i.EXPANDING = "expanding"), i);
let h = l.Qd;
function E(e) {
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
let C = new Map([
    [l.KP.FRIENDS_AND_ALL_GUILDS, h.ACTIVITY_STATUS_OFF],
    [l.KP.FRIENDS_AND_SMALL_GUILDS, h.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS],
    [l.KP.FRIENDS_ONLY, h.ACTIVITY_STATUS_ON],
]);
function g(e) {
    return C.get(e) ?? h.ACTIVITY_STATUS_OFF;
}
function _(e, t) {
    if (e === t) return null;
    let n = E(e),
        i = E(t);
    if (n < 0 || i < 0) return null;
    let l = i < n ? "restricting" : "expanding",
        r = (0, c.Kk)(),
        s = d.Ay.getFlattenedGuildIds(),
        u =
            (e === h.ACTIVITY_STATUS_OFF && t === h.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS) ||
            (e === h.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS && t === h.ACTIVITY_STATUS_OFF)
                ? "large_only"
                : (e === h.ACTIVITY_STATUS_ON && t === h.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS) ||
                    (e === h.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS && t === h.ACTIVITY_STATUS_ON)
                  ? "small_only"
                  : "all",
        A = s.filter((e) => {
            if (null == o.A.getGuild(e)) return !1;
            let t = r.has(e);
            if (("restricting" === l && t) || ("expanding" === l && !t)) return !1;
            if ("all" === u) return !0;
            let n = a.A.getMemberCount(e);
            return null == n ? "restricting" === l : "large_only" === u ? n > 200 : n <= 200;
        });
    return 0 === A.length
        ? null
        : (A.sort((e, t) => {
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
          { affectedGuildIds: A, direction: l });
}
function I(e) {
    switch (e) {
        case h.ACTIVITY_STATUS_OFF:
            return u.intl.string(u.t.FzgQna).toLowerCase();
        case h.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS:
            return u.intl.string(u.t["1hvuGH"]).toLowerCase();
        case h.ACTIVITY_STATUS_ON:
            return u.intl.string(u.t.fQc5la).toLowerCase();
        default:
            return "";
    }
}
function T(e, t) {
    return {
        title: u.intl.string(e ? u.t.eYDA7D : u.t["9jYwjo"]),
        subtitle: u.intl.format(e ? u.t["c5/jDc"] : u.t.ajzh8S, { settingName: t }),
        confirmText: u.intl.string(e ? u.t["6uPZV1"] : u.t.a9PIyD),
        toastContent: u.intl.string(e ? u.t.AdpgML : u.t["Q7E+QF"]),
    };
}
function N(e, t) {
    return {
        title: u.intl.string(e ? u.t.jRx1Aa : u.t.S0Y0bh),
        subtitle: u.intl.format(e ? u.t.Fs96LO : u.t.GcoYX8, { settingName: t }),
        confirmText: u.intl.string(e ? u.t["4DM5HJ"] : u.t.WRrDtI),
        toastContent: u.intl.string(e ? u.t.AdpgML : u.t["Q7E+QF"]),
    };
}
function p(e, t) {
    let n = g(t),
        i = r._Z.getSetting();
    if (i === n || E(g(e)) > E(n) != E(i) > E(n)) return null;
    let s = _(i, n);
    if (null == s) return null;
    let a = (function (e) {
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
    return { affectedGuildIds: s.affectedGuildIds, direction: s.direction, settingName: a, mappedActivityValue: n };
}
function S(e) {
    return [...e].sort((e, t) => s.A.getScoreWithoutFetchingLatest(t) - s.A.getScoreWithoutFetchingLatest(e));
}
function L(e, t) {
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
