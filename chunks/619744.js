n.d(t, { k: () => d });
var l = n(477900),
    r = n(582128),
    a = n(408278),
    i = n(241326),
    s = n(866665),
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
                        let { clips: t, onBeforeDelete: r, onAfterDelete: a } = e;
                        (0, c.openModalLazy)(
                            async () => {
                                let { default: e } = await n.e("913367").then(n.bind(n, 223818));
                                return (n) =>
                                    (0, l.jsx)(e, {
                                        clips: t,
                                        ...n,
                                        onBeforeDelete: r,
                                        onAfterDelete: async () => {
                                            await n.onClose(), a?.();
                                        },
                                    });
                            },
                            { stackingBehavior: "stack" },
                        );
                    })({ clips: [p], onAfterDelete: d, onBeforeDelete: t });
            },
            [p, d, t],
        );
    return (0, l.jsx)(s.m, {
        text: o.intl.string(o.t.oyYWHE),
        position: "top",
        children: (0, l.jsx)(a.K, {
            onClick: m,
            icon: i.u,
            "aria-label": o.intl.string(o.t.oyYWHE),
            variant: f,
            size: "sm",
        }),
    });
}
