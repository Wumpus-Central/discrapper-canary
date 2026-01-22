n.d(e, {
    default: () => h,
});
var i = n(627968),
    a = n(64700),
    r = n(732955),
    s = n(424798),
    o = n(663535),
    c = n(747926),
    l = n(37411),
    d = n(985018);

function h(t) {
    let { guildId: e, onClose: n, transitionState: h } = t,
        u = (0, s.Mu)(e),
        p = a.useCallback(
            (t, e) => {
                n(), (0, c.JA)(t, !e, l.H9.GUILD_ACTIVE_THREADS_MODAL);
            },
            [n],
        ),
        C = a.useCallback(
            (t) => {
                let e = u[t.row];
                return (0, i.jsx)(
                    o.A,
                    {
                        threadId: e,
                        goToThread: p,
                        showChannelName: !0,
                    },
                    "".concat(t.section, "-").concat(t.row),
                );
            },
            [u, p],
        );
    return (0, i.jsx)(r.aFV, {
        title: d.intl.string(d.t["dOWb+f"]),
        actions: [
            {
                text: d.intl.string(d.t.cpT0Cq),
                onClick: n,
                variant: "primary",
            },
        ],
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
