i.d(t, { A: () => u });
var h = i(477900),
    n = i(582128),
    d = i(770178),
    r = i(765548);
let l = { width: "100%", height: "100%", display: "flex" },
    s = { width: "100%", height: "100%", flex: 1 };
function u(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    return n.forwardRef(function (i, u) {
        let [c, a] = n.useState({ width: 0, height: 0 }),
            g = (0, r.A)((e) => {
                if (null != e) {
                    let { width: t, height: i } = e;
                    a({ width: t, height: i });
                }
            }),
            p = (0, r.A)((e) => {
                g(e.contentRect);
            }),
            w = (0, d.w)(p, [], t);
        return (
            n.useImperativeHandle(u, () => ({
                triggerResize: () => {
                    g(w.current?.getBoundingClientRect());
                },
            })),
            (0, h.jsx)("div", {
                ref: w,
                style: l,
                children: (0, h.jsx)(e, { ...i, width: c.width, height: c.height, style: s }),
            })
        );
    });
}
