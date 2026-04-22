r.d(t, { A: () => c });
var s = r(627968),
    l = r(64700),
    n = r(770178),
    i = r(765548);
let o = { width: "100%", height: "100%", display: "flex" },
    a = { width: "100%", height: "100%", flex: 1 };
function c(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    return l.forwardRef(function (r, c) {
        let [u, d] = l.useState({ width: 0, height: 0 }),
            h = (0, i.A)((e) => {
                if (null != e) {
                    let { width: t, height: r } = e;
                    d({ width: t, height: r });
                }
            }),
            m = (0, i.A)((e) => {
                h(e.contentRect);
            }),
            f = (0, n.w)(m, [], t);
        return (
            l.useImperativeHandle(c, () => ({
                triggerResize: () => {
                    h(f.current?.getBoundingClientRect());
                },
            })),
            (0, s.jsx)("div", {
                ref: f,
                style: o,
                children: (0, s.jsx)(e, { ...r, width: u.width, height: u.height, style: a }),
            })
        );
    });
}
