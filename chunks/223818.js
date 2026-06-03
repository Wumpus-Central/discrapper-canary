i.d(a, { default: () => p });
var n = i(627968),
    l = i(64700),
    r = i(189213),
    e = i(174459),
    s = i(974293),
    o = i(116671),
    c = i(652215),
    d = i(375708);
function p(t) {
    let { onClose: a, onBeforeDelete: i, onAfterDelete: p, clips: u, ...k } = t,
        [C, f] = l.useState(!1),
        h = u.length,
        y = l.useCallback(async () => {
            f(!0);
            try {
                i?.(),
                    await Promise.all(
                        u.map(async (t) => {
                            await o.oH(t.filepath, t.id),
                                e.default.track(c.HAw.CLIP_DELETED, { clip_runtime: (0, s.GN)() });
                        }),
                    ),
                    p();
            } finally {
                f(!1);
            }
        }, [u, i, p]);
    return (0, n.jsx)(r.Modal, {
        ...k,
        onClose: a,
        title: d.intl.formatToPlainString(d.t.lprb7n, { count: h }),
        subtitle: d.intl.formatToPlainString(d.t.NInqer, { count: h }),
        actions: [
            { variant: "secondary", text: d.intl.string(d.t["ETE/oC"]), onClick: a },
            { variant: "critical-primary", text: d.intl.string(d.t.oyYWHE), onClick: y, loading: C, disabled: C },
        ],
    });
}
