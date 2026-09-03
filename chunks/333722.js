i.d(t, { s: () => T, A: () => g });
var s = i(477900);
i(582128);
var n = i(503698),
    r = i.n(n),
    l = i(104510),
    a = i(957485),
    o = i(926268),
    c = i(297264),
    d = i(834730),
    u = i(375708),
    m = i(778072);
let T = [
    { icon: l._, getText: () => u.intl.string(u.t.TZigSO) },
    {
        icon: function (e) {
            let { className: t } = e;
            return (0, s.jsx)("img", { className: r()(t, m.Dp), src: "/assets/185ece790f20d870.svg", alt: "" });
        },
        getText: () => u.intl.string(u.t.hjQuV2),
    },
    { icon: a.i, getText: () => u.intl.string(u.t["2RUcaM"]) },
    { icon: o.HeartIcon, getText: () => u.intl.string(u.t.bJoZKV) },
];
function g(e) {
    let { className: t } = e;
    return (0, s.jsxs)("div", {
        className: r()(m.iE, t),
        children: [
            (0, s.jsx)(c.D, { className: m.R_, variant: "heading-xxl/semibold", children: u.intl.string(u.t.IzKs3o) }),
            (0, s.jsx)("div", {
                className: m.kR,
                children: T.map((e, t) => {
                    let i = e.icon;
                    return (0, s.jsxs)(
                        "div",
                        {
                            className: m.Nr,
                            children: [
                                (0, s.jsx)(i, { className: m.Kk }),
                                (0, s.jsx)(d.E, {
                                    className: m.h_,
                                    color: "text-muted",
                                    variant: "text-md/medium",
                                    children: e.getText(),
                                }),
                            ],
                        },
                        t,
                    );
                }),
            }),
        ],
    });
}
