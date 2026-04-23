a.d(t, { A: () => C });
var l = a(627968);
a(64700);
var n = a(503698),
    s = a.n(n),
    r = a(559949),
    i = a(534514),
    o = a(331322),
    c = a(834730),
    d = a(885574),
    u = a(990078),
    m = a(403581),
    _ = a(827734),
    h = a(939249),
    p = a(945096),
    f = a(73392),
    g = a(750656),
    x = a(864386),
    A = a(985018),
    v = a(257170),
    N = a(699006);
function C(e) {
    let { selectedFontId: t, setSelectedFontId: a, displayName: n, className: C } = e,
        b = t !== r.x.DEFAULT,
        S = (0, p.Xr)(n);
    return (0, l.jsxs)("div", {
        className: C,
        children: [
            (0, l.jsxs)(i.D, {
                variant: "heading-md/semibold",
                className: v.s,
                children: [
                    A.intl.string(x.default.nP0ngb),
                    (0, l.jsx)(m.t, { size: "xs", color: _.A.colors.TEXT_DEFAULT }),
                ],
            }),
            (0, l.jsx)(o.B, {
                direction: "horizontal",
                align: "center",
                wrap: !0,
                children: g.rA.map((e) => {
                    let n = (0, f.p)(e),
                        r = e === t;
                    return (0, l.jsx)(
                        u.m,
                        {
                            text: A.intl.string(n.name),
                            asContainer: !0,
                            children: (0, l.jsx)(h.D, {
                                className: s()(N.SO, { [N.wH]: r }),
                                onClick: () => a(e),
                                "aria-label": A.intl.string(n.name),
                                children: (0, l.jsx)(c.E, {
                                    variant: "text-lg/semibold",
                                    color: r ? "text-strong" : "text-default",
                                    className: s()(N.FH, n.className),
                                    children: "Gg",
                                }),
                            }),
                        },
                        e,
                    );
                }),
            }),
            b &&
                S &&
                (0, l.jsxs)("div", {
                    className: N.Lb,
                    children: [
                        (0, l.jsx)(d.m, { size: "lg" }),
                        (0, l.jsx)(c.E, {
                            variant: "text-sm/normal",
                            color: "text-subtle",
                            children: A.intl.string(x.default["+O1xL2"]),
                        }),
                    ],
                }),
        ],
    });
}
