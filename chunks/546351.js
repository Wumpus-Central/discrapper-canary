i.d(e, { AI: () => d, g8: () => S, gF: () => E });
var n,
    l = i(873298),
    s = i(253932),
    r = i(498642),
    a = i(71393),
    u = i(711014),
    o = i(115063),
    d = (((n = {}).RESTRICTING = "restricting"), (n.EXPANDING = "expanding"), n);
let T = l.Qd;
function A(t) {
    switch (t) {
        case T.ACTIVITY_STATUS_OFF:
            return 2;
        case T.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS:
            return 1;
        case T.ACTIVITY_STATUS_ON:
            return 0;
        default:
            return -1;
    }
}
function S(t, e) {
    if (t === e) return null;
    let i = A(t),
        n = A(e);
    if (i < 0 || n < 0) return null;
    let l = n < i ? "restricting" : "expanding",
        s = (0, o.Kk)(),
        d = u.Ay.getFlattenedGuildIds(),
        S =
            (t === T.ACTIVITY_STATUS_OFF && e === T.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS) ||
            (t === T.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS && e === T.ACTIVITY_STATUS_OFF)
                ? "large_only"
                : (t === T.ACTIVITY_STATUS_ON && e === T.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS) ||
                    (t === T.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS && e === T.ACTIVITY_STATUS_ON)
                  ? "small_only"
                  : "all",
        E = d.filter((t) => {
            if (null == a.A.getGuild(t)) return !1;
            let e = s.has(t);
            if (("restricting" === l && e) || ("expanding" === l && !e)) return !1;
            if ("all" === S) return !0;
            let i = r.A.getMemberCount(t);
            return null == i ? "restricting" === l : "large_only" === S ? i > 200 : i <= 200;
        });
    return 0 === E.length
        ? null
        : (E.sort((t, e) => {
              let i = a.A.getGuild(t),
                  n = a.A.getGuild(e);
              return i?.joinedAt == null && n?.joinedAt == null
                  ? 0
                  : i?.joinedAt == null
                    ? 1
                    : n?.joinedAt == null
                      ? -1
                      : new Date(n.joinedAt).getTime() - new Date(i.joinedAt).getTime();
          }),
          { affectedGuildIds: E, direction: l });
}
function E(t, e) {
    let i = (0, o.Kk)(),
        n = new Set(e);
    if ("restricting" === t) {
        let t = new Set([...i, ...n]);
        s.JG.updateSetting([...t]);
    } else {
        let t = [...i].filter((t) => !n.has(t));
        s.JG.updateSetting(t);
    }
}
