n.d(t, { AI: () => d, aM: () => A, g8: () => g, gF: () => h, nm: () => _ });
var i,
    s = n(873298),
    a = n(253932),
    l = n(498642),
    r = n(71393),
    o = n(711014),
    c = n(115063),
    d = (((i = {}).RESTRICTING = "restricting"), (i.EXPANDING = "expanding"), i);
let u = s.Qd;
function _(e) {
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
let m = new Map([
    [s.KP.FRIENDS_AND_ALL_GUILDS, u.ACTIVITY_STATUS_OFF],
    [s.KP.FRIENDS_AND_SMALL_GUILDS, u.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS],
    [s.KP.FRIENDS_ONLY, u.ACTIVITY_STATUS_ON],
]);
function A(e) {
    return m.get(e) ?? u.ACTIVITY_STATUS_OFF;
}
function g(e, t) {
    if (e === t) return null;
    let n = _(e),
        i = _(t);
    if (n < 0 || i < 0) return null;
    let s = i < n ? "restricting" : "expanding",
        a = (0, c.Kk)(),
        d = o.Ay.getFlattenedGuildIds(),
        m =
            (e === u.ACTIVITY_STATUS_OFF && t === u.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS) ||
            (e === u.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS && t === u.ACTIVITY_STATUS_OFF)
                ? "large_only"
                : (e === u.ACTIVITY_STATUS_ON && t === u.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS) ||
                    (e === u.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS && t === u.ACTIVITY_STATUS_ON)
                  ? "small_only"
                  : "all",
        A = d.filter((e) => {
            if (null == r.A.getGuild(e)) return !1;
            let t = a.has(e);
            if (("restricting" === s && t) || ("expanding" === s && !t)) return !1;
            if ("all" === m) return !0;
            let n = l.A.getMemberCount(e);
            return null == n ? "restricting" === s : "large_only" === m ? n > 200 : n <= 200;
        });
    return 0 === A.length
        ? null
        : (A.sort((e, t) => {
              let n = r.A.getGuild(e),
                  i = r.A.getGuild(t);
              return n?.joinedAt == null && i?.joinedAt == null
                  ? 0
                  : n?.joinedAt == null
                    ? 1
                    : i?.joinedAt == null
                      ? -1
                      : new Date(i.joinedAt).getTime() - new Date(n.joinedAt).getTime();
          }),
          { affectedGuildIds: A, direction: s });
}
function h(e, t) {
    let n = (0, c.Kk)(),
        i = new Set(t);
    if ("restricting" === e) {
        let e = new Set([...n, ...i]);
        a.JG.updateSetting([...e]);
    } else {
        let e = [...n].filter((e) => !i.has(e));
        a.JG.updateSetting(e);
    }
}
