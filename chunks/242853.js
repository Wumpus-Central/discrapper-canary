l.d(t, { A: () => x });
var n = l(627968);
l(64700);
var a = l(503698),
    s = l.n(a),
    r = l(158954),
    i = l(397927),
    o = l(898985),
    c = l(922301),
    d = l(750112),
    u = l(750656),
    f = l(927961),
    m = l(985018),
    b = l(880203),
    p = l(317857);
function x(e) {
    let { selectedEffectId: t, setSelectedEffectId: l, className: a } = e;
    return (0, n.jsxs)("div", {
        className: a,
        children: [
            (0, n.jsxs)(r.DZT, {
                variant: "heading-md/semibold",
                className: b.s,
                children: [
                    m.intl.string(f.default["1wilM1"]),
                    (0, n.jsx)(i.tvc, {
                        size: "xs",
                        color: i.LU0.colors.TEXT_DEFAULT,
                    }),
                ],
            }),
            (0, n.jsx)(r.BJc, {
                direction: "horizontal",
                align: "center",
                wrap: !0,
                gap: 8,
                children: u.re.map((e) =>
                    (0, n.jsx)(
                        g,
                        {
                            effectId: e,
                            selected: e === t,
                            onClick: () => l(e),
                        },
                        e,
                    ),
                ),
            }),
        ],
    });
}
function g(e) {
    let { effectId: t, selected: l, onClick: a } = e,
        r = (0, o._)(t);
    return (0, n.jsx)(
        i.DUT,
        {
            className: s()(p.Tw, { [p.wH]: l }),
            onClick: a,
            children: (0, n.jsx)(d.A, {
                userName: r.name,
                effectDisplayType: c.G.STATIC,
                displayNameStyles: r.previewStyles,
                textClassName: p.tr,
                inProfile: !0,
            }),
        },
        t,
    );
}
