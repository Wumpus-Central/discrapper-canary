n.d(t, {
    A: () => d,
});
var r = n(627968),
    i = n(64700),
    l = n(397927),
    s = n(713654),
    a = n(199940),
    c = n(985018),
    o = n(659233);
let d = function (e) {
    var t;
    let { channel: n, end: d } = e,
        u = i.useCallback(() => {
            (0, a.px)({
                channelId: n.id,
                title: n.name,
                description: "",
                emoji: null,
                icon: null,
            });
        }, [n]),
        f = null != (t = (0, s.gU)(n)) ? t : l.N$i;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: o.TG,
                children: [
                    (0, r.jsx)(f, {
                        className: o.cC,
                    }),
                    (0, r.jsx)(l.Text, {
                        className: o.g7,
                        variant: "text-sm/normal",
                        children: n.name,
                    }),
                    (0, r.jsx)(l.Button, {
                        size: "sm",
                        variant: "primary",
                        onClick: u,
                        text: c.intl.string(c.t.OYkgVk),
                    }),
                ],
            }),
            d &&
                (0, r.jsx)("div", {
                    className: o.p3,
                }),
        ],
    });
};
