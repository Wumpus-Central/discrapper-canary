"use strict";
n.d(t, { p: () => a });
var r = n(627968),
    i = n(64700);
n(442715), n(284009);
let s = i.createContext(void 0);
function a(e) {
    let { children: t } = e,
        [n, a] = i.useState(null),
        o = i.useMemo(() => ({ setComponentToSnapshot: a }), [a]);
    return (0, r.jsxs)(s.Provider, {
        value: o,
        children: [
            t,
            null != n &&
                (0, r.jsx)("div", {
                    id: "component-to-image-container",
                    style: { position: "fixed", top: "-1000px", right: "-1000px" },
                    children: n,
                }),
        ],
    });
}
