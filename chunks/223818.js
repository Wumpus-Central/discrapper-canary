i.d(a, { default: () => o });
var n = i(627968),
    l = i(64700),
    r = i(189213),
    s = i(315240),
    e = i(375708);
function o(t) {
    let { onClose: a, onBeforeDelete: i, onAfterDelete: o, clips: c, ...d } = t,
        [p, u] = l.useState(!1),
        k = c.length,
        y = l.useCallback(async () => {
            u(!0);
            try {
                i?.(),
                    await Promise.all(
                        c.map(async (t) => {
                            await s.oH(t);
                        }),
                    ),
                    o();
            } finally {
                u(!1);
            }
        }, [c, i, o]);
    return (0, n.jsx)(r.Modal, {
        ...d,
        onClose: a,
        title: e.intl.formatToPlainString(e.t.lprb7n, { count: k }),
        subtitle: e.intl.formatToPlainString(e.t.NInqer, { count: k }),
        actions: [
            { variant: "secondary", text: e.intl.string(e.t["ETE/oC"]), onClick: a },
            { variant: "critical-primary", text: e.intl.string(e.t.oyYWHE), onClick: y, loading: p, disabled: p },
        ],
    });
}
