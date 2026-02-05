"use strict";
n.d(t, { p: () => s });
var r = n(627968),
    i = n(64700);
n(442715), n(284009);
let a = i.createContext(void 0);
function s(e) {
    let { children: t } = e,
        [n, s] = i.useState(null),
        o = i.useMemo(() => ({ setComponentToSnapshot: s }), [s]);
    return (0, r.jsxs)(a.Provider, {
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
