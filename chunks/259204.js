var r = a(477900),
    l = a(582128),
    n = a(503698),
    i = a.n(n),
    u = a(399667),
    d = a(881245);
a.d(
    t,
    {},
    {
        A: function (e) {
            let { character: t, images: a, className: n } = e,
                o = l.useMemo(() => (0, u.O)(t), [t]),
                { urls: s, status: c, onLoad: m, onError: g } = a;
            return (0, r.jsx)("div", {
                role: "img",
                "data-composite-image": !0,
                "aria-label": o,
                className: i()(d.GG, { [d.Kc]: "ready" === c }, n),
                children: s.map((e) =>
                    (0, r.jsx)(
                        "img",
                        { src: e, alt: "", draggable: !1, className: d.qd, onLoad: () => m(e), onError: () => g(e) },
                        e,
                    ),
                ),
            });
        },
    },
);
