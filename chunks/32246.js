"use strict";
a.d(t, { A: () => C });
var l = a(627968);
a(64700);
var i = a(503698),
    r = a.n(i),
    n = a(559949),
    s = a(534514),
    o = a(331322),
    d = a(834730),
    c = a(885574),
    u = a(990078),
    _ = a(403581),
    h = a(827734),
    m = a(939249),
    p = a(945096),
    g = a(73392),
    f = a(750656),
    b = a(864386),
    A = a(985018),
    x = a(257170),
    v = a(699006);
function C(e) {
    let { selectedFontId: t, setSelectedFontId: a, displayName: i, className: C } = e,
        E = t !== n.x.DEFAULT,
        y = (0, p.Xr)(i);
    return (0, l.jsxs)("div", {
        className: C,
        children: [
            (0, l.jsxs)(s.D, {
                variant: "heading-md/semibold",
                className: x.s,
                children: [
                    A.intl.string(b.default.nP0ngb),
                    (0, l.jsx)(_.t, { size: "xs", color: h.A.colors.TEXT_DEFAULT }),
                ],
            }),
            (0, l.jsx)(o.B, {
                direction: "horizontal",
                align: "center",
                wrap: !0,
                children: f.rA.map((e) => {
                    let i = (0, g.p)(e),
                        n = e === t;
                    return (0, l.jsx)(
                        u.m,
                        {
                            text: A.intl.string(i.name),
                            asContainer: !0,
                            children: (0, l.jsx)(m.D, {
                                className: r()(v.SO, { [v.wH]: n }),
                                onClick: () => a(e),
                                "aria-label": A.intl.string(i.name),
                                children: (0, l.jsx)(d.E, {
                                    variant: "text-lg/semibold",
                                    color: n ? "text-strong" : "text-default",
                                    className: r()(v.FH, i.className),
                                    children: "Gg",
                                }),
                            }),
                        },
                        e,
                    );
                }),
            }),
            E &&
                y &&
                (0, l.jsxs)("div", {
                    className: v.Lb,
                    children: [
                        (0, l.jsx)(c.m, { size: "lg" }),
                        (0, l.jsx)(d.E, {
                            variant: "text-sm/normal",
                            color: "text-subtle",
                            children: A.intl.string(b.default["+O1xL2"]),
                        }),
                    ],
                }),
        ],
    });
}
