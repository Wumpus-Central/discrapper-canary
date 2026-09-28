a.d(e, { default: () => d });
var i = a(477900),
    n = a(582128),
    r = a(732159),
    s = a(468689),
    u = a(652215),
    l = a(375708);
function d(t) {
    let { guild: e, ...a } = t,
        d = e.id,
        m = n.useCallback(() => {
            s.default.leaveGuild(d, !0);
        }, [d]);
    return (0, i.jsx)(r.u, {
        title: l.intl.formatToPlainString(l.t["1GX6P/"], { name: e.name }),
        subtitle: e.features.has(u.GuildFeatures.HUB)
            ? l.intl.format(l.t.ZHTXVD, { name: e.name })
            : l.intl.format(l.t.ZEXC0r, { name: e.name }),
        confirmText: e.features.has(u.GuildFeatures.HUB) ? l.intl.string(l.t.Dv8gFT) : l.intl.string(l.t.J2TBi3),
        onConfirm: m,
        ...a,
    });
}
