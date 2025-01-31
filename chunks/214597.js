l.d(n, { Z: () => o });
var t = l(192379),
    i = l(902704),
    r = l(232567),
    a = l(720202),
    s = l(594174);
function o(e) {
    let { entry: n, channel: l } = e,
        o = t.useRef([]);
    return (
        t.useEffect(() => {
            !(0, i.E)(o.current, n.participants) &&
                ((o.current = n.participants),
                n.participants
                    .filter((e) => null == s.default.getUser(e))
                    .forEach((e) => {
                        null == l.guild_id ? (0, r.PR)(e) : a.Z.requestMember(l.guild_id, e);
                    }));
        }, [n, l.guild_id]),
        {}
    );
}
