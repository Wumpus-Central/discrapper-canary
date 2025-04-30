n.d(t, { Z: () => d }), n(388685);
var i = n(192379),
    r = n(392711),
    l = n.n(r),
    o = n(442837),
    a = n(567409),
    s = n(699516),
    c = n(594174),
    u = n(709054);
function d(e) {
    let t = (0, a.Ns)(e.id),
        n = (0, o.cj)([c.default, s.Z], () => {
            let e = {};
            for (let n of t.values()) {
                let t = c.default.getUser(n.author_id),
                    i = s.Z.isFriend(n.author_id);
                null != t && i && (e[t.id] = n.id);
            }
            return e;
        }),
        [r, d] = i.useState([]);
    return (
        i.useEffect(() => {
            let e = l().sortBy(Object.entries(n), (e) => {
                let [t, n] = e;
                return -u.default.extractTimestamp(n);
            });
            d(
                l()
                    .map(e, (e) => {
                        let [t, n] = e;
                        return c.default.getUser(t);
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
