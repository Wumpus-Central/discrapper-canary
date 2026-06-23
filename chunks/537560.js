e.d(i, { default: () => c });
var l = e(627968),
    n = e(64700),
    s = e(189213),
    a = e(468689),
    r = e(375708);
let c = function (t) {
    let { name: i, guildId: e, onClose: c, ...o } = t,
        u = n.useCallback(() => {
            c?.(), a.A.leaveGuild(e);
        }, [e, c]),
        d = n.useMemo(
            () => [
                { variant: "secondary", text: r.intl.string(r.t.J2TBi3), onClick: u },
                { text: r.intl.string(r.t.TyCVIq), onClick: c },
            ],
            [u, c],
        );
    return (0, l.jsx)(s.Modal, {
        title: r.intl.string(r.t.aCAiGl),
        subtitle: r.intl.format(r.t["4cJV9S"], { serverName: i }),
        actions: d,
        onClose: c,
        ...o,
    });
};
