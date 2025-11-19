n.d(t, { Z: () => p }), n(388685);
var r = n(54381);
n(473749);
var i = n(120356),
    l = n.n(i),
    a = n(442837),
    s = n(481060),
    o = n(432877),
    c = n(259580),
    d = n(880637),
    u = n(239736);
let m = (e) => {
        let { child: t, onClick: n, nodeMap: i } = e,
            [m, p] = t,
            g = (0, a.e7)([o.ZP], () => o.ZP.get("iar_show_report_sub_type_labels")),
            _ = i[p],
            h = null == _ ? void 0 : _.report_type;
        return (0, r.jsxs)(s.P3F, {
            className: l()(u.childButton, d.listElement),
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
                        g &&
                            null != h &&
                            (0, r.jsx)(s.Text, {
                                className: u.debugText,
                                variant: "text-xs/normal",
                                color: "text-muted",
                                children: h,
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
    p = (e) => {
        let {
            node: { children: t },
            onSelectChild: n,
            nodeMap: i,
        } = e;
        if (null == t || 0 === t.length) return null;
        let l = t.map((e) => {
            let [t, l] = e;
            return (0, r.jsx)(
                m,
                {
                    child: e,
                    onClick: n,
                    nodeMap: i,
                },
                "".concat(t, "+").concat(l),
            );
        });
        return (0, r.jsx)("div", {
            className: d.listElementWrapper,
            children: l,
        });
    };
