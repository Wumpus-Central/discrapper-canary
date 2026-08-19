r.d(t, { A: () => u });
var n = r(477900),
    s = r(582128),
    l = r(770178),
    i = r(765548);
let a = { width: "100%", height: "100%", display: "flex" },
    o = { width: "100%", height: "100%", flex: 1 };
function u(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    return s.forwardRef(function (r, u) {
        let [c, d] = s.useState({ width: 0, height: 0 }),
            h = (0, i.A)((e) => {
                if (null != e) {
                    let { width: t, height: r } = e;
                    d({ width: t, height: r });
                }
            }),
            m = (0, i.A)((e) => {
                h(e.contentRect);
            }),
            p = (0, l.w)(m, [], t);
        return (
            s.useImperativeHandle(u, () => ({
                triggerResize: () => {
                    h(p.current?.getBoundingClientRect());
                },
            })),
            (0, n.jsx)("div", {
                ref: p,
                style: a,
                children: (0, n.jsx)(e, { ...r, width: c.width, height: c.height, style: o }),
            })
        );
    });
}
