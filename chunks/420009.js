n.d(t, {
    A: () => l,
});
var r = n(64700),
    i = n(52133),
    a = n(803306),
    s = n(256587),
    o = n(287809);

function l(e) {
    let { entry: t, channel: n } = e,
        l = r.useRef([]);
    return (
        r.useEffect(() => {
            (0, i.v)(l.current, t.participants) ||
                ((l.current = t.participants),
                t.participants
                    .filter((e) => null == o.default.getUser(e))
                    .forEach((e) => {
                        null == n.guild_id ? (0, a.wz)(e) : s.A.requestMember(n.guild_id, e);
                    }));
        }, [t, n.guild_id]),
        {}
    );
}
