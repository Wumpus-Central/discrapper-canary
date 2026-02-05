"use strict";
n.d(t, { A: () => c });
var i = n(627968),
    s = n(64700),
    l = n(397927),
    r = n(713654),
    a = n(199940),
    o = n(985018),
    d = n(659233);
let c = function (e) {
    let { channel: t, end: n } = e,
        c = s.useCallback(() => {
            (0, a.px)({ channelId: t.id, title: t.name, description: "", emoji: null, icon: null });
        }, [t]),
        u = (0, r.gU)(t) ?? l.N$i;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: d.TG,
                children: [
                    (0, i.jsx)(u, { className: d.cC }),
                    (0, i.jsx)(l.Text, { className: d.g7, variant: "text-sm/normal", children: t.name }),
                    (0, i.jsx)(l.Button, {
                        size: "sm",
                        variant: "primary",
                        onClick: c,
                        text: o.intl.string(o.t.OYkgVk),
                    }),
                ],
            }),
            n && (0, i.jsx)("div", { className: d.p3 }),
        ],
    });
};
