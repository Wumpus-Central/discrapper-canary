n.d(t, { A: () => u });
var l = n(64700),
    i = n(735438),
    a = n.n(i),
    s = n(311907),
    r = n(205184),
    o = n(994500),
    c = n(287809),
    d = n(661191);
function u(e) {
    let t = (0, r.s)(e.id),
        n = (0, s.cf)([c.default, o.A], () => {
            let e = {};
            for (let n of t.values()) {
                let t = c.default.getUser(n.author_id),
                    l = o.A.isFriend(n.author_id);
                null != t && l && (e[t.id] = n.id);
            }
            return e;
        }),
        [i, u] = l.useState([]);
    return (
        l.useEffect(() => {
            let e = a().sortBy(Object.entries(n), (e) => {
                let [t, n] = e;
                return -d.default.extractTimestamp(n);
            });
            u(
                a()
                    .map(e, (e) => {
                        let [t, n] = e;
                        return c.default.getUser(t);
                    })
                    .filter((e) => null != e),
            );
        }, [n]),
        { friends: i, friendsLastPlayed: n }
    );
}
