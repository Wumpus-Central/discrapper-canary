n.d(e, { default: () => h });
var i = n(627968),
    r = n(64700),
    s = n(189213),
    a = n(424798),
    o = n(663535),
    l = n(747926),
    c = n(37411),
    d = n(985018);
function h(t) {
    let { guildId: e, onClose: n, transitionState: h } = t,
        u = (0, a.Mu)(e),
        p = r.useCallback(
            (t, e) => {
                n(), (0, l.JA)(t, !e, c.H9.GUILD_ACTIVE_THREADS_MODAL);
            },
            [n],
        ),
        C = r.useCallback(
            (t) => {
                let e = u[t.row];
                return (0, i.jsx)(o.A, { threadId: e, goToThread: p, showChannelName: !0 }, `${t.section}-${t.row}`);
            },
            [u, p],
        );
    return (0, i.jsx)(s.Modal, {
        title: d.intl.string(d.t["dOWb+f"]),
        actions: [{ text: d.intl.string(d.t.cpT0Cq), onClick: n, variant: "primary" }],
        onClose: n,
        transitionState: h,
        listProps: {
            fade: !0,
            sections: [u.length],
            renderSection: () => null,
            sectionHeight: 0,
            rowHeight: 80,
            renderRow: C,
            chunkSize: 20,
        },
    });
}
