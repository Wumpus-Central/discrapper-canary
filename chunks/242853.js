a.d(t, { A: () => A });
var l = a(627968);
a(64700);
var n = a(503698),
    s = a.n(n),
    r = a(534514),
    i = a(331322),
    o = a(403581),
    c = a(827734),
    d = a(939249),
    u = a(898985),
    m = a(922301),
    _ = a(750112),
    h = a(750656),
    p = a(864386),
    f = a(985018),
    g = a(257170),
    x = a(700090);
function A(e) {
    let { selectedEffectId: t, setSelectedEffectId: a, className: n } = e;
    return (0, l.jsxs)("div", {
        className: n,
        children: [
            (0, l.jsxs)(r.D, {
                variant: "heading-md/semibold",
                className: g.s,
                children: [
                    f.intl.string(p.default["1wilM1"]),
                    (0, l.jsx)(o.t, { size: "xs", color: c.A.colors.TEXT_DEFAULT }),
                ],
            }),
            (0, l.jsx)(i.B, {
                direction: "horizontal",
                align: "center",
                wrap: !0,
                gap: 8,
                children: h.re.map((e) => (0, l.jsx)(v, { effectId: e, selected: e === t, onClick: () => a(e) }, e)),
            }),
        ],
    });
}
function v(e) {
    let { effectId: t, selected: a, onClick: n } = e,
        r = (0, u._)(t);
    return (0, l.jsx)(
        d.D,
        {
            className: s()(x.Tw, { [x.wH]: a }),
            onClick: n,
            children: (0, l.jsx)(_.A, {
                userName: r.name,
                effectDisplayType: m.G.STATIC,
                displayNameStyles: r.previewStyles,
                textClassName: x.tr,
                inProfile: !0,
            }),
        },
        t,
    );
}
