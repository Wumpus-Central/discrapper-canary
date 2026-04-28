r.d(t, { A: () => u });
var s = r(627968),
    n = r(64700),
    l = r(770178),
    i = r(765548);
let a = { width: "100%", height: "100%", display: "flex" },
    o = { width: "100%", height: "100%", flex: 1 };
function u(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    return n.forwardRef(function (r, u) {
        let [d, c] = n.useState({ width: 0, height: 0 }),
            h = (0, i.A)((e) => {
                if (null != e) {
                    let { width: t, height: r } = e;
                    c({ width: t, height: r });
                }
            }),
            m = (0, i.A)((e) => {
                h(e.contentRect);
            }),
            p = (0, l.w)(m, [], t);
        return (
            n.useImperativeHandle(u, () => ({
                triggerResize: () => {
                    h(p.current?.getBoundingClientRect());
                },
            })),
            (0, s.jsx)("div", {
                ref: p,
                style: a,
                children: (0, s.jsx)(e, { ...r, width: d.width, height: d.height, style: o }),
            })
        );
    });
}
