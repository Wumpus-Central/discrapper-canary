n.d(t, { Z: () => d }), n(388685);
var i = n(73800),
    l = n(392711),
    r = n.n(l),
    o = n(442837),
    a = n(567409),
    c = n(699516),
    s = n(594174),
    u = n(709054);
function d(e) {
    let t = (0, a.N)(e.id),
        n = (0, o.cj)([s.default, c.Z], () => {
            let e = {};
            for (let n of t.values()) {
                let t = s.default.getUser(n.author_id),
                    i = c.Z.isFriend(n.author_id);
                null != t && i && (e[t.id] = n.id);
            }
            return e;
        }),
        [l, d] = i.useState([]);
    return (
        i.useEffect(() => {
            let e = r().sortBy(Object.entries(n), (e) => {
                let [t, n] = e;
                return -u.default.extractTimestamp(n);
            });
            d(
                r()
                    .map(e, (e) => {
                        let [t, n] = e;
                        return s.default.getUser(t);
                    })
                    .filter((e) => null != e)
            );
        }, [n]),
        {
            friends: l,
            friendsLastPlayed: n
        }
    );
}
