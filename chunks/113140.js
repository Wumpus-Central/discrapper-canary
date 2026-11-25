var i = n(477900);
n(582128);
var s = n(503698),
    l = n.n(s),
    r = n(837381),
    a = n(866665),
    o = n(939249),
    c = n(403581),
    u = n(329921),
    d = n(49999),
    m = n(236432),
    f = n(792996),
    E = n(938612),
    I = n(342379);
n.d(
    t,
    {},
    {
        A: function (e) {
            let { onClick: t, listItemId: n, showDiscoveryDot: s, onDismissDiscovery: h } = e,
                g = f.intl.string(m.default["3D0GLv"]),
                A = (0, r.rm)(n);
            return (0, i.jsx)("div", {
                className: E.nM,
                children: (0, i.jsxs)("div", {
                    className: E.Jn,
                    children: [
                        (0, i.jsx)(a.m, {
                            ariaHidden: !0,
                            position: "right",
                            text: g,
                            children: (0, i.jsx)(o.D, {
                                ...A,
                                "aria-label": s ? `${g}, ${f.intl.string(f.t.y2b7CA)}` : g,
                                className: l()(E.x6, { [I.Bj]: !s }),
                                "data-show-discovery": s,
                                onClick: function () {
                                    (s && h(d.i.TAKE_ACTION), t());
                                },
                                children: (0, i.jsx)(c.NitroWheelIcon, {
                                    size: "md",
                                    color: "currentColor",
                                    className: s ? void 0 : I.Yl,
                                }),
                            }),
                        }),
                        s && (0, i.jsx)(u.N, { className: E.aW, size: "md", cutout: "base-lower" }),
                    ],
                }),
            });
        },
    },
);
