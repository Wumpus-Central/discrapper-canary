n.d(t, { h: () => u }), n(539854), n(388685), n(642613);
var r = n(442837),
    i = n(643327),
    l = n(158776),
    s = n(699516),
    o = n(594174),
    a = n(981631);
function u() {
    return (0, r.Wu)([i.Z, o.default, l.Z, s.Z], () => {
        let e = i.Z.getGroups(),
            t = [];
        for (let n of e) {
            let e = [];
            for (let t of n.userIds) {
                let n = o.default.getUser(t);
                if (null == n || !s.Z.isFriend(t)) continue;
                let r = l.Z.getActivities(t),
                    i = s.Z.getNickname(t);
                e.push({
                    user: n,
                    activities: r,
                    nickname: i,
                });
            }
            e.sort((e, t) => {
                var n, r;
                let i = l.Z.getStatus(e.user.id),
                    s = l.Z.getStatus(t.user.id),
                    o = i === a.Skl.ONLINE || i === a.Skl.IDLE || i === a.Skl.DND,
                    u = s === a.Skl.ONLINE || s === a.Skl.IDLE || s === a.Skl.DND;
                if (o !== u) return u ? 1 : -1;
                let c = (null != (n = e.user.globalName) ? n : e.user.username).toLowerCase(),
                    d = (null != (r = t.user.globalName) ? r : t.user.username).toLowerCase();
                return c.localeCompare(d);
            }),
                t.push({
                    id: n.id,
                    name: n.name,
                    users: e,
                });
        }
        return t;
    });
}
