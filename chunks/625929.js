n.d(t, { A: () => d }), n(896048);
var r = n(64700),
    i = n(735438),
    a = n.n(i),
    s = n(311907),
    o = n(205184),
    l = n(994500),
    c = n(287809),
    u = n(661191);
function d(e) {
    let t = (0, o.s)(e.id),
        n = (0, s.cf)([c.default, l.A], () => {
            let e = {};
            for (let n of t.values()) {
                let t = c.default.getUser(n.author_id),
                    r = l.A.isFriend(n.author_id);
                null != t && r && (e[t.id] = n.id);
            }
            return e;
        }),
        [i, d] = r.useState([]);
    return (
        r.useEffect(() => {
            let e = a().sortBy(Object.entries(n), (e) => {
                let [t, n] = e;
                return -u.default.extractTimestamp(n);
            });
            d(
                a()
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
