n.d(t, { Z: () => u }), n(388685);
var r = n(255367);
n(73800);
var i = n(120356),
    l = n.n(i),
    a = n(481060),
    s = n(259580),
    o = n(88309),
    c = n(935786);
let d = (e) => {
        let { child: t, onClick: n } = e,
            [i] = t;
        return (0, r.jsxs)(a.P3F, {
            className: l()(c.childButton, o.listElement),
            onClick: () => n(t),
            children: [
                (0, r.jsx)(a.Text, {
                    className: c.childText,
                    variant: "text-md/semibold",
                    children: i,
                }),
                (0, r.jsx)(s.Z, {
                    className: c.childIcon,
                    direction: s.Z.Directions.RIGHT,
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
            className: o.listElementWrapper,
            children: i,
        });
    };
