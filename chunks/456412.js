"use strict";
n.d(t, { A: () => d });
var i = n(477900),
    r = n(582128),
    a = n(770178),
    s = n(765548);
let l = { width: "100%", height: "100%", display: "flex" },
    o = { width: "100%", height: "100%", flex: 1 };
function d(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    return r.forwardRef(function (n, d) {
        let [c, u] = r.useState({ width: 0, height: 0 }),
            _ = (0, s.A)((e) => {
                if (null != e) {
                    let { width: t, height: n } = e;
                    u({ width: t, height: n });
                }
            }),
            E = (0, s.A)((e) => {
                _(e.contentRect);
            }),
            A = (0, a.w)(E, [], t);
        return (
            r.useImperativeHandle(d, () => ({
                triggerResize: () => {
                    _(A.current?.getBoundingClientRect());
                },
            })),
            (0, i.jsx)("div", {
                ref: A,
                style: l,
                children: (0, i.jsx)(e, { ...n, width: c.width, height: c.height, style: o }),
            })
        );
    });
}
