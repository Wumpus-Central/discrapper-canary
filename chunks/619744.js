"use strict";
n.d(t, { k: () => u });
var i = n(627968),
    r = n(64700),
    a = n(408278),
    s = n(241326),
    l = n(866665),
    o = n(609174),
    d = n(192308),
    c = n(375708);
function u(e) {
    let { onBeforeDelete: t, onAfterDelete: u, variant: _ = "overlay-secondary" } = e,
        E = (0, o.Y_)(),
        A = r.useCallback(
            (e) => {
                e.stopPropagation(),
                    e.preventDefault(),
                    (function (e) {
                        let { clips: t, onBeforeDelete: r, onAfterDelete: a } = e;
                        (0, d.openModalLazy)(
                            async () => {
                                let { default: e } = await n.e("13367").then(n.bind(n, 223818));
                                return (n) =>
                                    (0, i.jsx)(e, {
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
                    })({ clips: [E], onAfterDelete: u, onBeforeDelete: t });
            },
            [E, u, t],
        );
    return (0, i.jsx)(l.m, {
        text: c.intl.string(c.t.oyYWHE),
        position: "top",
        children: (0, i.jsx)(a.K, {
            onClick: A,
            icon: s.u,
            "aria-label": c.intl.string(c.t.oyYWHE),
            variant: _,
            size: "sm",
        }),
    });
}
