n.d(t, { Z: () => u }), n(388685);
var r = n(951288);
n(647438);
var i = n(120356),
    l = n.n(i),
    a = n(481060),
    o = n(259580),
    s = n(520310),
    c = n(452847);
let d = (e) => {
        let { child: t, onClick: n } = e,
            [i] = t;
        return (0, r.jsxs)(a.P3F, {
            className: l()(c.childButton, s.listElement),
            onClick: () => n(t),
            children: [
                (0, r.jsx)(a.Text, {
                    className: c.childText,
                    variant: "text-md/semibold",
                    children: i,
                }),
                (0, r.jsx)(o.Z, {
                    className: c.childIcon,
                    direction: o.Z.Directions.RIGHT,
                }),
            ],
        });
    },
    u = (e) => {
        let {
            node: { children: t },
            onSelectChild: n,
        } = e;
        if (null == t || 0 === t.length) return null;
        let i = t.map((e) => {
            let [t, i] = e;
            return (0, r.jsx)(
                d,
                {
                    child: e,
                    onClick: n,
                },
                "".concat(t, "+").concat(i),
            );
        });
        return (0, r.jsx)("div", {
            className: s.listElementWrapper,
            children: i,
        });
    };
