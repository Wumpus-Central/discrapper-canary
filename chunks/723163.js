n.d(t, { Z: () => d }), n(388685);
var r = n(73800),
    i = n(392711),
    o = n.n(i),
    a = n(442837),
    s = n(567409),
    l = n(699516),
    c = n(594174),
    u = n(709054);
function d(e) {
    let t = (0, s.N)(e.id),
        n = (0, a.cj)([c.default, l.Z], () => {
            let e = {};
            for (let n of t.values()) {
                let t = c.default.getUser(n.author_id),
                    r = l.Z.isFriend(n.author_id);
                null != t && r && (e[t.id] = n.id);
            }
            return e;
        }),
        [i, d] = r.useState([]);
    return (
        r.useEffect(() => {
            let e = o().sortBy(Object.entries(n), (e) => {
                let [t, n] = e;
                return -u.default.extractTimestamp(n);
            });
            d(
                o()
                    .map(e, (e) => {
                        let [t, n] = e;
                        return c.default.getUser(t);
                    })
                    .filter((e) => null != e),
            );
        }, [n]),
        {
            friends: i,
            friendsLastPlayed: n,
        }
    );
}
