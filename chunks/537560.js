i.d(e, { default: () => c });
var l = i(627968),
    s = i(64700),
    a = i(158954),
    n = i(997509),
    r = i(985018);
let c = (t) => {
    let { name: e, guildId: i, onClose: c, ...o } = t,
        u = s.useCallback(() => {
            c?.(), n.A.leaveGuild(i);
        }, [i, c]),
        d = s.useMemo(
            () => [
                { variant: "secondary", text: r.intl.string(r.t.J2TBi3), onClick: u },
                { text: r.intl.string(r.t.TyCVIq), onClick: c },
            ],
            [u, c],
        );
    return (0, l.jsx)(a.Modal, {
        title: r.intl.string(r.t.aCAiGl),
        subtitle: r.intl.format(r.t["4cJV9S"], { serverName: e }),
        actions: d,
        onClose: c,
        ...o,
    });
};
