n.d(t, { Z: () => b }), n(388685);
var r = n(54381);
n(473749);
var l = n(120356),
    i = n.n(l),
    a = n(442837),
    s = n(481060),
    o = n(432877),
    c = n(259580),
    d = n(467171),
    u = n(110024);
let m = (e) => {
        let { child: t, onClick: n, nodeMap: l } = e,
            [m, b] = t,
            p = (0, a.e7)([o.ZP], () => o.ZP.get("iar_show_report_sub_type_labels")),
            g = l[b],
            f = null == g ? void 0 : g.report_type;
        return (0, r.jsxs)(s.P3F, {
            className: i()(u.childButton, d.listElement),
            onClick: () => n(t),
            children: [
                (0, r.jsxs)("div", {
                    className: u.childContent,
                    children: [
                        (0, r.jsx)(s.Text, {
                            className: u.childText,
                            variant: "text-md/semibold",
                            children: m,
                        }),
                        p &&
                            null != f &&
                            (0, r.jsx)(s.Text, {
                                className: u.debugText,
                                variant: "text-xs/normal",
                                color: "text-muted",
                                children: f,
                            }),
                    ],
                }),
                (0, r.jsx)(c.Z, {
                    className: u.childIcon,
                    direction: c.Z.Directions.RIGHT,
                }),
            ],
        });
    },
    b = (e) => {
        let {
            node: { children: t },
            onSelectChild: n,
            nodeMap: l,
        } = e;
        if (null == t || 0 === t.length) return null;
        let i = t.map((e) => {
            let [t, i] = e;
            return (0, r.jsx)(
                m,
                {
                    child: e,
                    onClick: n,
                    nodeMap: l,
                },
                "".concat(t, "+").concat(i),
            );
        });
        return (0, r.jsx)("div", {
            className: d.listElementWrapper,
            children: i,
        });
    };
