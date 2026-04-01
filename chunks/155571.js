"use strict";
n.d(t, { A: () => s });
var r = n(627968),
    i = n(64700);
function s(e) {
    let { srcs: t, updateInterval: n, loop: s = !0, alt: a = "", ...o } = e,
        [l, u] = (0, i.useState)(0);
    return (
        (0, i.useEffect)(() => {
            let e = setInterval(() => {
                u((e) => {
                    let n = (e + 1) % t.length;
                    return s || 0 !== n ? n : e;
                });
            }, n);
            return () => clearInterval(e);
        }, [s, t.length, n]),
        (0, i.useEffect)(() => {
            u(0);
        }, [t]),
        (0, r.jsx)("img", { ...o, src: t[l] ?? void 0, alt: a })
    );
}
