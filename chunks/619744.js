n.d(t, { k: () => d });
var l = n(627968),
    a = n(64700),
    r = n(408278),
    i = n(241326),
    s = n(866665),
    u = n(609174),
    c = n(192308),
    o = n(375708);
function d(e) {
    let { onBeforeDelete: t, onAfterDelete: d, variant: p = "overlay-secondary" } = e,
        f = (0, u.Y_)(),
        m = a.useCallback(
            (e) => {
                e.stopPropagation(),
                    e.preventDefault(),
                    (function (e) {
                        let { clips: t, onBeforeDelete: a, onAfterDelete: r } = e;
                        (0, c.openModalLazy)(
                            async () => {
                                let { default: e } = await n.e("13367").then(n.bind(n, 223818));
                                return (n) =>
                                    (0, l.jsx)(e, {
                                        clips: t,
                                        ...n,
                                        onBeforeDelete: a,
                                        onAfterDelete: async () => {
                                            await n.onClose(), r?.();
                                        },
                                    });
                            },
                            { stackingBehavior: "stack" },
                        );
                    })({ clips: [f], onAfterDelete: d, onBeforeDelete: t });
            },
            [f, d, t],
        );
    return (0, l.jsx)(s.m, {
        text: o.intl.string(o.t.oyYWHE),
        position: "top",
        children: (0, l.jsx)(r.K, {
            onClick: m,
            icon: i.u,
            "aria-label": o.intl.string(o.t.oyYWHE),
            variant: p,
            size: "sm",
        }),
    });
}
