"use strict";
n.d(t, { w: () => _ });
var r = n(627968);
n(64700);
var i = n(192308),
    a = n(990078),
    s = n(732955),
    o = n(397927),
    l = n(457417),
    u = n(520650),
    c = n(985018);
let d = () => {
        (0, i.openModalLazy)(
            async () => {
                let { CustomThemesShareModalWrapper: e } = await Promise.all([n.e("96758"), n.e("15646")]).then(
                    n.bind(n, 277978),
                );
                return (t) => (0, r.jsx)(e, { ...t });
            },
            { modalKey: l.dJ },
        );
    },
    _ = () =>
        (0, r.jsx)(a.m, {
            text: c.intl.string(c.t.RDE0Sc),
            children: (0, r.jsx)(s.K0, {
                "aria-label": c.intl.string(u.default.zgFs8C),
                icon: o.liv,
                variant: "icon-only",
                onClick: () => {
                    d();
                },
            }),
        });
