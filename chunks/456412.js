i.d(t, { A: () => u });
var h = i(477900),
    n = i(582128),
    d = i(770178),
    l = i(765548);
let r = { width: "100%", height: "100%", display: "flex" },
    s = { width: "100%", height: "100%", flex: 1 };
function u(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    return function (i) {
        let { ref: u, ...c } = i,
            [g, a] = n.useState({ width: 0, height: 0 }),
            p = (0, l.A)((e) => {
                if (null != e) {
                    let { width: t, height: i } = e;
                    a({ width: t, height: i });
                }
            }),
            w = (0, l.A)((e) => {
                p(e.contentRect);
            }),
            o = (0, d.w)(w, [], t);
        return (
            n.useImperativeHandle(u, () => ({
                triggerResize: () => {
                    p(o.current?.getBoundingClientRect());
                },
            })),
            (0, h.jsx)("div", {
                ref: o,
                style: r,
                children: (0, h.jsx)(e, { ...c, width: g.width, height: g.height, style: s }),
            })
        );
    };
}
