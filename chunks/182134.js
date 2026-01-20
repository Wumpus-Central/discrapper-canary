n.d(t, { Z: () => d }), n(953529);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(481060),
    l = n(970184),
    c = n(388032),
    u = n(353562);
function d(e) {
    let { type: t, options: n, required: a } = e,
        d = i.useMemo(() => {
            var e;
            return null == (e = n.find((e) => e.default)) ? void 0 : e.value;
        }, [n]),
        { state: f, executeStateUpdate: p } = (0, l.Ee)(
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
            (0, r.jsx)(s.FXm, {
                options: m,
                value: null != _ ? _ : "",
                onChange: g,
                required: a,
            }),
            !a &&
                (0, r.jsx)("div", {
                    className: o()(u.clearButtonContainer, { [u.clearButtonContainerHidden]: !h }),
                    "aria-hidden": !h,
                    children: (0, r.jsx)(s.Button, {
                        text: c.intl.string(c.t["5uAtZN"]),
                        variant: "secondary",
                        size: "sm",
                        onClick: () => g(null),
                    }),
                }),
        ],
    });
}
