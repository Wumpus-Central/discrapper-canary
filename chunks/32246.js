l.d(t, { A: () => p });
var s = l(627968);
l(64700);
var a = l(503698),
    n = l.n(a),
    i = l(559949),
    r = l(158954),
    o = l(990078),
    d = l(397927),
    c = l(945096),
    u = l(73392),
    m = l(750656),
    _ = l(927961),
    x = l(985018),
    g = l(880203),
    h = l(248997);
function p(e) {
    let { selectedFontId: t, setSelectedFontId: l, displayName: a, className: p } = e,
        f = t !== i.x.DEFAULT,
        N = (0, c.Xr)(a);
    return (0, s.jsxs)("div", {
        className: p,
        children: [
            (0, s.jsxs)(r.DZT, {
                variant: "heading-md/semibold",
                className: g.s,
                children: [
                    x.intl.string(_.default.nP0ngb),
                    (0, s.jsx)(d.tvc, { size: "xs", color: d.LU0.colors.TEXT_DEFAULT }),
                ],
            }),
            (0, s.jsx)(r.BJc, {
                direction: "horizontal",
                align: "center",
                wrap: !0,
                children: m.rA.map((e) => {
                    let a = (0, u.p)(e),
                        i = e === t;
                    return (0, s.jsx)(
                        o.m,
                        {
                            text: x.intl.string(a.name),
                            asContainer: !0,
                            children: (0, s.jsx)(d.DUT, {
                                className: n()(h.SO, { [h.wH]: i }),
                                onClick: () => l(e),
                                "aria-label": x.intl.string(a.name),
                                children: (0, s.jsx)(r.EYj, {
                                    variant: "text-lg/semibold",
                                    color: i ? "text-strong" : "text-default",
                                    className: n()(h.FH, a.className),
                                    children: "Gg",
                                }),
                            }),
                        },
                        e,
                    );
                }),
            }),
            f &&
                N &&
                (0, s.jsxs)("div", {
                    className: h.Lb,
                    children: [
                        (0, s.jsx)(r.mir, { size: "lg" }),
                        (0, s.jsx)(r.EYj, {
                            variant: "text-sm/normal",
                            color: "text-subtle",
                            children: x.intl.string(_.default["+O1xL2"]),
                        }),
                    ],
                }),
        ],
    });
}
