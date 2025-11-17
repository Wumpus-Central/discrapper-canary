e.d(n, { default: () => d });
var i = e(54381),
    o = e(473749),
    r = e(159691),
    a = e(235449),
    s = e(300234),
    c = e(488131),
    l = e(124368),
    u = e(388032);
function d(t) {
    let { guildId: n, onClose: e, transitionState: d } = t,
        h = (0, a.nA)(n),
        p = o.useCallback(
            (t, n) => {
                e(), (0, c.ok)(t, !n, l.on.GUILD_ACTIVE_THREADS_MODAL);
            },
            [e],
        ),
        k = o.useCallback(
            (t) => {
                let n = h[t.row];
                return (0, i.jsx)(
                    s.Z,
                    {
                        threadId: n,
                        goToThread: p,
                        showChannelName: !0,
                    },
                    "".concat(t.section, "-").concat(t.row),
                );
            },
            [h, p],
        );
    return (0, i.jsx)(r.u_l, {
        title: u.intl.string(u.t["dOWb+f"]),
        actions: [
            {
                text: u.intl.string(u.t.cpT0Cq),
                onClick: e,
                variant: "primary",
            },
        ],
        onClose: e,
        transitionState: d,
        listProps: {
            fade: !0,
            sections: [h.length],
            renderSection: () => null,
            sectionHeight: 0,
            rowHeight: 80,
            renderRow: k,
            chunkSize: 20,
        },
    });
}
