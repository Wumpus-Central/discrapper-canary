"use strict";
n.d(t, { A: () => u });
var r = n(627968),
    i = n(64700),
    s = n(770178),
    a = n(765548);
let o = { width: "100%", height: "100%", display: "flex" },
    l = { width: "100%", height: "100%", flex: 1 };
function u(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    return i.forwardRef(function (n, u) {
        let [c, d] = i.useState({ width: 0, height: 0 }),
            _ = (0, a.A)((e) => {
                if (null != e) {
                    let { width: t, height: n } = e;
                    d({ width: t, height: n });
                }
            }),
            f = (0, a.A)((e) => {
                _(e.contentRect);
            }),
            p = (0, s.w)(f, [], t);
        return (
            i.useImperativeHandle(u, () => ({
                triggerResize: () => {
                    _(p.current?.getBoundingClientRect());
                },
            })),
            (0, r.jsx)("div", {
                ref: p,
                style: o,
                children: (0, r.jsx)(e, { ...n, width: c.width, height: c.height, style: l }),
            })
        );
    });
}
