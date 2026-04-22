"use strict";
a.d(t, { A: () => A });
var l = a(627968);
a(64700);
var i = a(503698),
    r = a.n(i),
    n = a(534514),
    s = a(331322),
    o = a(403581),
    d = a(827734),
    c = a(939249),
    u = a(898985),
    _ = a(922301),
    h = a(750112),
    m = a(750656),
    p = a(864386),
    g = a(985018),
    f = a(257170),
    b = a(700090);
function A(e) {
    let { selectedEffectId: t, setSelectedEffectId: a, className: i } = e;
    return (0, l.jsxs)("div", {
        className: i,
        children: [
            (0, l.jsxs)(n.D, {
                variant: "heading-md/semibold",
                className: f.s,
                children: [
                    g.intl.string(p.default["1wilM1"]),
                    (0, l.jsx)(o.t, { size: "xs", color: d.A.colors.TEXT_DEFAULT }),
                ],
            }),
            (0, l.jsx)(s.B, {
                direction: "horizontal",
                align: "center",
                wrap: !0,
                gap: 8,
                children: m.re.map((e) => (0, l.jsx)(x, { effectId: e, selected: e === t, onClick: () => a(e) }, e)),
            }),
        ],
    });
}
function x(e) {
    let { effectId: t, selected: a, onClick: i } = e,
        n = (0, u._)(t);
    return (0, l.jsx)(
        c.D,
        {
            className: r()(b.Tw, { [b.wH]: a }),
            onClick: i,
            children: (0, l.jsx)(h.A, {
                userName: n.name,
                effectDisplayType: _.G.STATIC,
                displayNameStyles: n.previewStyles,
                textClassName: b.tr,
                inProfile: !0,
            }),
        },
        t,
    );
}
