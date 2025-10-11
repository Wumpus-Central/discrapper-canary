n.d(t, { Z: () => d }), n(388685);
var i = n(647438),
    l = n(392711),
    r = n.n(l),
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
                    i = s.Z.isFriend(n.author_id);
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
                        return c.default.getUser(t);
                    })
                    .filter((e) => null != e),
            );
        }, [n]),
        {
            friends: l,
            friendsLastPlayed: n,
        }
    );
}
