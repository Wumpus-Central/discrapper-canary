n.d(t, { Z: () => l });
var r = n(473749),
    i = n(902704),
    a = n(232567),
    o = n(720202),
    s = n(594174);
function l(e) {
    let { entry: t, channel: n } = e,
        l = r.useRef([]);
    return (
        r.useEffect(() => {
            (0, i.E)(l.current, t.participants) ||
                ((l.current = t.participants),
                t.participants
                    .filter((e) => null == s.default.getUser(e))
                    .forEach((e) => {
                        null == n.guild_id ? (0, a.PR)(e) : o.Z.requestMember(n.guild_id, e);
                    }));
        }, [t, n.guild_id]),
        {}
    );
}
