"use strict";
n.d(t, { A: () => s });
var r = n(64700),
    i = n(249522);
function s(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "vertical",
        [n] = (0, r.useState)(
            () =>
                new i.A({
                    tension: 200,
                    friction: 35,
                    mass: 2,
                    clamp: !0,
                    callback: (n, r) => {
                        let { current: i } = e;
                        if (null == i) return r();
                        "horizontal" === t ? (i.scrollLeft = n) : (i.scrollTop = n);
                    },
                    getNodeWindow: () => e.current?.ownerDocument?.defaultView ?? null,
                }),
        );
    return n;
}
