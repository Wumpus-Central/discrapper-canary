"use strict";
n.d(t, { A: () => u });
var i = n(627968),
    s = n(64700),
    l = n(397927),
    r = n(47167),
    a = n(713654),
    o = n(199940),
    d = n(985018),
    c = n(574283);
let u = function (e) {
    let { channel: t, end: n } = e,
        u = (0, r.Ay)(t),
        m = s.useCallback(() => {
            (0, o.px)({ channelId: t.id, title: u ?? "", description: "", emoji: null, icon: null });
        }, [t, u]),
        g = (0, a.gU)(t) ?? l.N$i;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: c.TG,
                children: [
                    (0, i.jsx)(g, { className: c.cC }),
                    (0, i.jsx)(l.Text, { className: c.g7, variant: "text-sm/normal", children: u }),
                    (0, i.jsx)(l.Button, {
                        size: "sm",
                        variant: "primary",
                        onClick: m,
                        text: d.intl.string(d.t.OYkgVk),
                    }),
                ],
            }),
            n && (0, i.jsx)("div", { className: c.p3 }),
        ],
    });
};
