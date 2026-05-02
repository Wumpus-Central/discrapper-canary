"use strict";
n.d(t, { A: () => u });
var i = n(627968),
    r = n(64700),
    s = n(770178),
    a = n(765548);
let o = { width: "100%", height: "100%", display: "flex" },
    l = { width: "100%", height: "100%", flex: 1 };
function u(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    return r.forwardRef(function (n, u) {
        let [c, d] = r.useState({ width: 0, height: 0 }),
            _ = (0, a.A)((e) => {
                if (null != e) {
                    let { width: t, height: n } = e;
                    d({ width: t, height: n });
                }
            }),
            f = (0, a.A)((e) => {
                _(e.contentRect);
            }),
            h = (0, s.w)(f, [], t);
        return (
            r.useImperativeHandle(u, () => ({
                triggerResize: () => {
                    _(h.current?.getBoundingClientRect());
                },
            })),
            (0, i.jsx)("div", {
                ref: h,
                style: o,
                children: (0, i.jsx)(e, { ...n, width: c.width, height: c.height, style: l }),
            })
        );
    });
}
