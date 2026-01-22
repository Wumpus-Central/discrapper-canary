l.d(t, {
    A: () => g,
});
var n = l(627968);
l(64700);
var a = l(503698),
    s = l.n(a),
    r = l(559949),
    i = l(158954),
    o = l(990078),
    c = l(397927),
    d = l(945096),
    u = l(73392),
    f = l(750656),
    m = l(927961),
    b = l(985018),
    p = l(880203),
    x = l(248997);

function g(e) {
    let { selectedFontId: t, setSelectedFontId: l, displayName: a, className: g } = e,
        j = t !== r.x.DEFAULT,
        h = (0, d.Xr)(a);
    return (0, n.jsxs)("div", {
        className: g,
        children: [
            (0, n.jsxs)(i.DZT, {
                variant: "heading-md/semibold",
                className: p.s,
                children: [
                    b.intl.string(m.default.nP0ngb),
                    (0, n.jsx)(c.tvc, {
                        size: "xs",
                        color: c.LU0.colors.TEXT_DEFAULT,
                    }),
                ],
            }),
            (0, n.jsx)(i.BJc, {
                direction: "horizontal",
                align: "center",
                wrap: !0,
                children: f.rA.map((e) => {
                    let a = (0, u.p)(e),
                        r = e === t;
                    return (0, n.jsx)(
                        o.m,
                        {
                            text: b.intl.string(a.name),
                            asContainer: !0,
                            children: (0, n.jsx)(c.DUT, {
                                className: s()(x.SO, {
                                    [x.wH]: r,
                                }),
                                onClick: () => l(e),
                                "aria-label": b.intl.string(a.name),
                                children: (0, n.jsx)(i.EYj, {
                                    variant: "text-lg/semibold",
                                    color: r ? "text-strong" : "text-default",
                                    className: s()(x.FH, a.className),
                                    children: "Gg",
                                }),
                            }),
                        },
                        e,
                    );
                }),
            }),
            j &&
                h &&
                (0, n.jsxs)("div", {
                    className: x.Lb,
                    children: [
                        (0, n.jsx)(i.mir, {
                            size: "lg",
                        }),
                        (0, n.jsx)(i.EYj, {
                            variant: "text-sm/normal",
                            color: "text-subtle",
                            children: b.intl.string(m.default["+O1xL2"]),
                        }),
                    ],
                }),
        ],
    });
}
