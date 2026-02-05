n.d(t, { A: () => o });
var l = n(64700),
    a = n(52133),
    r = n(803306),
    s = n(256587),
    i = n(287809);
function o(e) {
    let { entry: t, channel: n } = e,
        o = l.useRef([]);
    return (
        l.useEffect(() => {
            (0, a.v)(o.current, t.participants) ||
                ((o.current = t.participants),
                t.participants
                    .filter((e) => null == i.default.getUser(e))
                    .forEach((e) => {
                        null == n.guild_id ? (0, r.wz)(e) : s.A.requestMember(n.guild_id, e);
                    }));
        }, [t, n.guild_id]),
        {}
    );
}
