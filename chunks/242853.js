l.d(t, { A: () => h });
var s = l(627968);
l(64700);
var a = l(503698),
    n = l.n(a),
    i = l(158954),
    r = l(397927),
    o = l(898985),
    d = l(922301),
    c = l(750112),
    u = l(750656),
    m = l(927961),
    _ = l(985018),
    x = l(880203),
    g = l(317857);
function h(e) {
    let { selectedEffectId: t, setSelectedEffectId: l, className: a } = e;
    return (0, s.jsxs)("div", {
        className: a,
        children: [
            (0, s.jsxs)(i.DZT, {
                variant: "heading-md/semibold",
                className: x.s,
                children: [
                    _.intl.string(m.default["1wilM1"]),
                    (0, s.jsx)(r.tvc, { size: "xs", color: r.LU0.colors.TEXT_DEFAULT }),
                ],
            }),
            (0, s.jsx)(i.BJc, {
                direction: "horizontal",
                align: "center",
                wrap: !0,
                gap: 8,
                children: u.re.map((e) => (0, s.jsx)(p, { effectId: e, selected: e === t, onClick: () => l(e) }, e)),
            }),
        ],
    });
}
function p(e) {
    let { effectId: t, selected: l, onClick: a } = e,
        i = (0, o._)(t);
    return (0, s.jsx)(
        r.DUT,
        {
            className: n()(g.Tw, { [g.wH]: l }),
            onClick: a,
            children: (0, s.jsx)(c.A, {
                userName: i.name,
                effectDisplayType: d.G.STATIC,
                displayNameStyles: i.previewStyles,
                textClassName: g.tr,
                inProfile: !0,
            }),
        },
        t,
    );
}
