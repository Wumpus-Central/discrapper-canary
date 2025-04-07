n.d(t, { Z: () => d }), n(388685);
var i = n(192379),
    r = n(392711),
    l = n.n(r),
    a = n(442837),
    o = n(567409),
    c = n(699516),
    s = n(594174),
    u = n(709054);
function d(e) {
    let t = (0, o.Ns)(e.id),
        n = (0, a.cj)([s.default, c.Z], () => {
            let e = {};
            for (let n of t.values()) {
                let t = s.default.getUser(n.author_id),
                    i = c.Z.isFriend(n.author_id);
                null != t && i && (e[t.id] = n.id);
            }
            return e;
        }),
        [r, d] = i.useState([]);
    return (
        i.useEffect(() => {
            let e = l().sortBy(Object.entries(n), (e) => {
                let [t, n] = e;
                return u.default.extractTimestamp(n);
            });
            d(
                l()
                    .map(e, (e) => {
                        let [t, n] = e;
                        return s.default.getUser(t);
                    })
                    .filter((e) => null != e)
            );
        }, [n]),
        {
            friends: r,
            friendsLastPlayed: n
        }
    );
}
