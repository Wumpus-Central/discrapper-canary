n.d(t, { Z: () => m }), n(388685);
var r = n(951288);
n(647438);
var i = n(120356),
    l = n.n(i),
    a = n(442837),
    o = n(481060),
    s = n(432877),
    c = n(259580),
    d = n(520310),
    u = n(452847);
let _ = (e) => {
        let { child: t, onClick: n, nodeMap: i } = e,
            [_, m] = t,
            p = (0, a.e7)([s.ZP], () => s.ZP.get("iar_show_report_sub_type_labels")),
            g = i[m],
            f = null == g ? void 0 : g.report_type;
        return (0, r.jsxs)(o.P3F, {
            className: l()(u.childButton, d.listElement),
            onClick: () => n(t),
            children: [
                (0, r.jsxs)("div", {
                    className: u.childContent,
                    children: [
                        (0, r.jsx)(o.Text, {
                            className: u.childText,
                            variant: "text-md/semibold",
                            children: _,
                        }),
                        p &&
                            null != f &&
                            (0, r.jsx)(o.Text, {
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
    m = (e) => {
        let {
            node: { children: t },
            onSelectChild: n,
            nodeMap: i,
        } = e;
        if (null == t || 0 === t.length) return null;
        let l = t.map((e) => {
            let [t, l] = e;
            return (0, r.jsx)(
                _,
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
