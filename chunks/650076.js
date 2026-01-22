n.d(t, {
    A: () => d,
}),
    n(228524);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(397927),
    l = n(207963),
    c = n(985018),
    u = n(141482);

function d(e) {
    let { type: t, options: n, required: a } = e,
        d = i.useMemo(() => {
            var e;
            return null == (e = n.find((e) => e.default)) ? void 0 : e.value;
        }, [n]),
        { state: f, executeStateUpdate: p } = (0, l.At)(
            e,
            null != d
                ? {
                      type: t,
                      value: d,
                  }
                : void 0,
        ),
        _ = i.useMemo(() => ((null == f ? void 0 : f.type) === t ? f.value : null), [f, t]),
        h = null != _,
        m = i.useMemo(
            () =>
                n.map((e) => ({
                    name: e.label,
                    value: e.value,
                    desc: e.description,
                })),
            [n],
        ),
        g = (e) => {
            p({
                type: t,
                value: e,
            });
        };
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(o.z6M, {
                options: m,
                value: null != _ ? _ : "",
                onChange: g,
                required: a,
            }),
            !a &&
                (0, r.jsx)("div", {
                    className: s()(u.H, {
                        [u.d]: !h,
                    }),
                    "aria-hidden": !h,
                    children: (0, r.jsx)(o.Button, {
                        text: c.intl.string(c.t["5uAtZN"]),
                        variant: "secondary",
                        size: "sm",
                        onClick: () => g(null),
                    }),
                }),
        ],
    });
}
