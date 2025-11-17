n.d(t, { p: () => o }), n(388685);
var r = n(54381),
    i = n(473749);
n(775953), n(512722);
let a = i.createContext(void 0);
function o(e) {
    let { children: t } = e,
        [n, o] = i.useState(null),
        s = i.useMemo(() => ({ setComponentToSnapshot: o }), [o]);
    return (0, r.jsxs)(a.Provider, {
        value: s,
        children: [
            t,
            null != n &&
                (0, r.jsx)("div", {
                    id: "component-to-image-container",
                    style: {
                        position: "fixed",
                        top: "-1000px",
                        right: "-1000px",
                    },
                    children: n,
                }),
        ],
    });
}
