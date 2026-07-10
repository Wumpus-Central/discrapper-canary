n.d(t, { k: () => d });
var a = n(627968),
    r = n(64700),
    l = n(408278),
    i = n(241326),
    s = n(990078),
    u = n(609174),
    c = n(192308),
    o = n(375708);
function d(e) {
    let { onBeforeDelete: t, onAfterDelete: d, variant: f = "overlay-secondary" } = e,
        p = (0, u.Y_)(),
        m = r.useCallback(
            (e) => {
                e.stopPropagation(),
                    e.preventDefault(),
                    (function (e) {
                        let { clips: t, onBeforeDelete: r, onAfterDelete: l } = e;
                        (0, c.openModalLazy)(
                            async () => {
                                let { default: e } = await n.e("13367").then(n.bind(n, 223818));
                                return (n) =>
                                    (0, a.jsx)(e, {
                                        clips: t,
                                        ...n,
                                        onBeforeDelete: r,
                                        onAfterDelete: async () => {
                                            await n.onClose(), l?.();
                                        },
                                    });
                            },
                            { stackingBehavior: "stack" },
                        );
                    })({ clips: [p], onAfterDelete: d, onBeforeDelete: t });
            },
            [p, d, t],
        );
    return (0, a.jsx)(s.m, {
        text: o.intl.string(o.t.oyYWHE),
        position: "top",
        children: (0, a.jsx)(l.K, {
            onClick: m,
            icon: i.u,
            "aria-label": o.intl.string(o.t.oyYWHE),
            variant: f,
            size: "sm",
        }),
    });
}
