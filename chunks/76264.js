n.d(t, { Z: () => u }), n(388685);
var r = n(951288);
n(647438);
var a = n(120356),
    i = n.n(a),
    o = n(481060),
    l = n(259580),
    s = n(520310),
    c = n(452847);
let d = (e) => {
        let { child: t, onClick: n } = e,
            [a] = t;
        return (0, r.jsxs)(o.P3F, {
            className: i()(c.childButton, s.listElement),
            onClick: () => n(t),
            children: [
                (0, r.jsx)(o.Text, {
                    className: c.childText,
                    variant: "text-md/semibold",
                    children: a,
                }),
                (0, r.jsx)(l.Z, {
                    className: c.childIcon,
                    direction: l.Z.Directions.RIGHT,
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
        let a = t.map((e) => {
            let [t, a] = e;
            return (0, r.jsx)(
                d,
                {
                    child: e,
                    onClick: n,
                },
                "".concat(t, "+").concat(a),
            );
        });
        return (0, r.jsx)("div", {
            className: s.listElementWrapper,
            children: a,
        });
    };
