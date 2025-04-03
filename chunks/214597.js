r.d(t, { Z: () => c });
var n = r(192379),
    l = r(902704),
    i = r(232567),
    o = r(720202),
    a = r(594174);
function c(e) {
    let { entry: t, channel: r } = e,
        c = n.useRef([]);
    return (
        n.useEffect(() => {
            (0, l.E)(c.current, t.participants) ||
                ((c.current = t.participants),
                t.participants
                    .filter((e) => null == a.default.getUser(e))
                    .forEach((e) => {
                        null == r.guild_id ? (0, i.PR)(e) : o.Z.requestMember(r.guild_id, e);
                    }));
        }, [t, r.guild_id]),
        {}
    );
}
