n.d(t, { A: () => o });
var a = n(64700),
    l = n(52133),
    r = n(803306),
    i = n(256587),
    s = n(287809);
function o(e) {
    let { entry: t, channel: n } = e,
        o = a.useRef([]);
    return (
        a.useEffect(() => {
            (0, l.v)(o.current, t.participants) ||
                ((o.current = t.participants),
                t.participants
                    .filter((e) => null == s.default.getUser(e))
                    .forEach((e) => {
                        null == n.guild_id ? (0, r.wz)(e) : i.A.requestMember(n.guild_id, e);
                    }));
        }, [t, n.guild_id]),
        {}
    );
}
