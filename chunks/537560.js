e.d(i, { default: () => c });
var n = e(477900),
    s = e(582128),
    a = e(189213),
    l = e(468689),
    r = e(375708);
let c = function (t) {
    let { name: i, guildId: e, onClose: c, ...o } = t,
        u = s.useCallback(() => {
            (c?.(), l.A.leaveGuild(e));
        }, [e, c]),
        d = s.useMemo(
            () => [
                { variant: "secondary", text: r.intl.string(r.t.J2TBi3), onClick: u },
                { text: r.intl.string(r.t.TyCVIq), onClick: c },
            ],
            [u, c],
        );
    return (0, n.jsx)(a.a, {
        title: r.intl.string(r.t.aCAiGl),
        subtitle: r.intl.format(r.t["4cJV9S"], { serverName: i }),
        actions: d,
        onClose: c,
        ...o,
    });
};
