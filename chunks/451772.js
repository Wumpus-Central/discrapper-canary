n.d(t, {
    A: () => f,
});
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(397927),
    l = n(860923),
    c = n(816790);
let u = 5500,
    d = 150,
    f = (e) => {
        let {
                id: t,
                occupant: n,
                x: a,
                y: f,
                assetKey: p,
                onClick: _,
                skipNewUserEducation: h = !1,
                shadowPosition: m,
            } = e,
            g = (0, l.A)(),
            E = i.useMemo(() => (null == g ? void 0 : g.seats[p]), [g, p]),
            b = i.useMemo(() => (null == E ? void 0 : E.seat), [E]),
            y = i.useMemo(() => (null == E ? void 0 : E.shadow), [E]);
        return (0, r.jsx)(o.DUT, {
            "aria-label": "claim seat",
            onClick:
                null != _
                    ? (e) => {
                          e.preventDefault(), e.stopPropagation(), _(t);
                      }
                    : void 0,
            className: s()(c.am, {
                [c.Sf]: null != n,
            }),
            style: {
                transform: "translate(".concat(a, "px, ").concat(f, "px)"),
            },
            children: (0, r.jsxs)("div", {
                className: c.LU,
                children: [
                    null != y &&
                        null != m &&
                        (0, r.jsx)("img", {
                            className: s()(c.Sl, c.r7),
                            style: {
                                transform: "translate(".concat(m.x, "px, ").concat(m.y, "px)"),
                            },
                            src: null == E ? void 0 : E.shadow,
                            alt: "",
                        }),
                    null != b &&
                        (0, r.jsx)("img", {
                            onDragStart: (e) => e.preventDefault(),
                            className: s()(c.Sl, {
                                [c.Sf]: null != n,
                                [c.cb]: h,
                            }),
                            style: {
                                animationDelay: "".concat(u + d * t, "ms"),
                            },
                            src: null == E ? void 0 : E.seat,
                            alt: "",
                        }),
                ],
            }),
        });
    };
