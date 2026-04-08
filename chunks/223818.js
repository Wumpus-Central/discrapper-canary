i.d(a, { default: () => d });
var n = i(627968),
    l = i(64700),
    r = i(158954),
    e = i(954571),
    s = i(399925),
    o = i(652215),
    c = i(985018);
function d(t) {
    let { onClose: a, onBeforeDelete: i, onAfterDelete: d, clips: p, ...u } = t,
        [k, C] = l.useState(!1),
        f = p.length,
        h = l.useCallback(async () => {
            C(!0);
            try {
                i?.(),
                    await Promise.all(
                        p.map(async (t) => {
                            await s.oH(t.filepath, t.id), e.default.track(o.HAw.CLIP_DELETED);
                        }),
                    ),
                    d();
            } finally {
                C(!1);
            }
        }, [p, i, d]);
    return (0, n.jsx)(r.Modal, {
        ...u,
        onClose: a,
        title: c.intl.formatToPlainString(c.t.lprb7n, { count: f }),
        subtitle: c.intl.formatToPlainString(c.t.NInqer, { count: f }),
        actions: [
            { variant: "secondary", text: c.intl.string(c.t["ETE/oC"]), onClick: a },
            { variant: "critical-primary", text: c.intl.string(c.t.oyYWHE), onClick: h, loading: k, disabled: k },
        ],
    });
}
