n.d(t, { k: () => d });
var l = n(477900),
    a = n(582128),
    r = n(241326),
    i = n(866665),
    s = n(408278),
    u = n(609174),
    c = n(192308),
    o = n(792996);
function d(e) {
    let { onBeforeDelete: t, onAfterDelete: d, variant: f = "overlay-secondary" } = e,
        p = (0, u.Y_)(),
        m = a.useCallback(
            (e) => {
                (e.stopPropagation(),
                    e.preventDefault(),
                    (function (e) {
                        let { clips: t, onBeforeDelete: a, onAfterDelete: r } = e;
                        (0, c.mM)(
                            async () => {
                                let { default: e } = await n.e(913367).then(n.bind(n, 223818));
                                return (n) =>
                                    (0, l.jsx)(e, {
                                        clips: t,
                                        ...n,
                                        onBeforeDelete: a,
                                        onAfterDelete: async () => {
                                            (await n.onClose(), r?.());
                                        },
                                    });
                            },
                            { stackingBehavior: "stack" },
                        );
                    })({ clips: [p], onAfterDelete: d, onBeforeDelete: t }));
            },
            [p, d, t],
        );
    return (0, l.jsx)(i.m, {
        text: o.intl.string(o.t.oyYWHE),
        position: "top",
        children: (0, l.jsx)(s.K, {
            onClick: m,
            icon: r.TrashIcon,
            "aria-label": o.intl.string(o.t.oyYWHE),
            variant: f,
            size: "sm",
        }),
    });
}
