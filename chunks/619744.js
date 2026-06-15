l.d(t, { k: () => d });
var a = l(627968),
    r = l(64700),
    n = l(408278),
    i = l(241326),
    s = l(990078),
    u = l(609174),
    c = l(192308),
    o = l(375708);
let d = (e) => {
    let { onBeforeDelete: t, onAfterDelete: d, variant: p = "overlay-secondary" } = e,
        m = (0, u.Y_)(),
        f = r.useCallback(
            (e) => {
                e.stopPropagation(),
                    e.preventDefault(),
                    ((e) => {
                        let { clips: t, onBeforeDelete: r, onAfterDelete: n } = e;
                        (0, c.openModalLazy)(
                            async () => {
                                let { default: e } = await l.e("13367").then(l.bind(l, 223818));
                                return (l) =>
                                    (0, a.jsx)(e, {
                                        clips: t,
                                        ...l,
                                        onBeforeDelete: r,
                                        onAfterDelete: async () => {
                                            await l.onClose(), n?.();
                                        },
                                    });
                            },
                            { stackingBehavior: "stack" },
                        );
                    })({ clips: [m], onAfterDelete: d, onBeforeDelete: t });
            },
            [m, d, t],
        );
    return (0, a.jsx)(s.m, {
        text: o.intl.string(o.t.oyYWHE),
        position: "top",
        children: (0, a.jsx)(n.K, {
            onClick: f,
            icon: i.u,
            "aria-label": o.intl.string(o.t.oyYWHE),
            variant: p,
            size: "sm",
        }),
    });
};
