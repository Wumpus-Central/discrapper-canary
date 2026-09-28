i.d(e, { default: () => c });
var a = i(477900),
    l = i(582128),
    n = i(189213),
    s = i(468689),
    r = i(375708);
let c = function (t) {
    let { name: e, guildId: i, onClose: c, ...u } = t,
        o = l.useCallback(() => {
            (c?.(), s.default.leaveGuild(i));
        }, [i, c]),
        d = l.useMemo(
            () => [
                { variant: "secondary", text: r.intl.string(r.t.J2TBi3), onClick: o },
                { text: r.intl.string(r.t.TyCVIq), onClick: c },
            ],
            [o, c],
        );
    return (0, a.jsx)(n.a, {
        title: r.intl.string(r.t.aCAiGl),
        subtitle: r.intl.format(r.t["4cJV9S"], { serverName: e }),
        actions: d,
        onClose: c,
        ...u,
    });
};
