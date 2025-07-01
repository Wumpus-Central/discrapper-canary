(n.d(t, { Z: () => d }), n(388685));
var l = n(73800),
    i = n(392711),
    r = n.n(i),
    a = n(442837),
    o = n(567409),
    s = n(699516),
    c = n(594174),
    u = n(709054);
function d(e) {
    let t = (0, o.N)(e.id),
        n = (0, a.cj)([c.default, s.Z], () => {
            let e = {};
            for (let n of t.values()) {
                let t = c.default.getUser(n.author_id),
                    l = s.Z.isFriend(n.author_id);
                null != t && l && (e[t.id] = n.id);
            }
            return e;
        }),
        [i, d] = l.useState([]);
    return (
        l.useEffect(() => {
            let e = r().sortBy(Object.entries(n), (e) => {
                let [t, n] = e;
                return -u.default.extractTimestamp(n);
            });
            d(
                r()
                    .map(e, (e) => {
                        let [t, n] = e;
                        return c.default.getUser(t);
                    })
                    .filter((e) => null != e)
            );
        }, [n]),
        {
            friends: i,
            friendsLastPlayed: n
        }
    );
}
