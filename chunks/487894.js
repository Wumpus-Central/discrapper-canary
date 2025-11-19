n.d(t, { Z: () => c });
var r = n(54381);
n(473749);
var l = n(481060),
    a = n(499033),
    s = n(665906),
    o = n(388032),
    i = n(343503);
function c(e) {
    let { channel: t, header: n, startThread: c } = e,
        d = (0, s.NE)(t),
        u = (0, s.Xu)(t);
    return (0, r.jsxs)("div", {
        className: i.container,
        children: [
            (0, r.jsxs)("div", {
                className: i.iconContainer,
                children: [
                    (0, r.jsx)("div", {
                        className: i.icon,
                        children: (0, r.jsx)(l.or_, {
                            size: "custom",
                            color: "currentColor",
                            width: 36,
                            height: 36,
                        }),
                    }),
                    (0, r.jsx)(a.Z, { className: i.stars }),
                ],
            }),
            (0, r.jsx)(l.Heading, {
                className: i.header,
                variant: "heading-xl/semibold",
                children: n,
            }),
            (0, r.jsx)(l.Text, {
                color: "header-secondary",
                variant: "text-md/normal",
                children: o.intl.string(o.t.jmq9GC),
            }),
            d || u
                ? (0, r.jsx)("div", {
                      "data-button-hoisted-classname-wrapper": !0,
                      className: i.cta,
                      children: (0, r.jsx)(l.Button, {
                          variant: "primary",
                          text: o.intl.string(o.t.rBIGBL),
                          onClick: c,
                      }),
                  })
                : null,
        ],
    });
}
