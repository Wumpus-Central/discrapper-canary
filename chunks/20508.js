e.d(a, { default: () => m });
var i = e(627968),
    n = e(64700),
    r = e(158954),
    s = e(997509),
    l = e(652215),
    u = e(985018);
function m(t) {
    let { guild: a, ...e } = t,
        m = a.id,
        o = n.useCallback(() => {
            s.A.leaveGuild(m, !0);
        }, [m]);
    return (0, i.jsx)(r.ConfirmModal, {
        title: u.intl.formatToPlainString(u.t["1GX6P/"], { name: a.name }),
        subtitle: a.features.has(l.GuildFeatures.HUB)
            ? u.intl.format(u.t.ZHTXVD, { name: a.name })
            : u.intl.format(u.t.ZEXC0r, { name: a.name }),
        confirmText: a.features.has(l.GuildFeatures.HUB) ? u.intl.string(u.t.Dv8gFT) : u.intl.string(u.t.J2TBi3),
        onConfirm: o,
        ...e,
    });
}
