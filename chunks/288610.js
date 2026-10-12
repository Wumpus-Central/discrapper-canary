n.d(t, { R: () => l, p: () => s });
var o = n(477900),
    a = n(582128),
    i = n(284009),
    u = n.n(i);
let r = 588245 != n.j ? a.createContext(void 0) : null;
function s(e) {
    let { children: t } = e,
        [n, i] = a.useState(null),
        u = a.useMemo(() => ({ setComponentToSnapshot: i }), [i]);
    return (0, o.jsxs)(r.Provider, {
        value: u,
        children: [
            t,
            null != n &&
                (0, o.jsx)("div", {
                    id: "component-to-image-container",
                    style: { position: "fixed", top: "-1000px", right: "-1000px" },
                    children: n,
                }),
        ],
    });
}
function l(e) {
    let { renderComponent: t, imageOptions: o } = e,
        i = a.useContext(r);
    u()(null != i, "useComponentToImageContext must be used within a ComponentToImageProvider");
    let [s, l] = a.useState(!1);
    return {
        generatingImage: s,
        generateImage: function () {
            return (
                u()(null != i, "useComponentToImageContext must be used within a ComponentToImageProvider"),
                new Promise((e, a) => {
                    async function r(t) {
                        u()(null != i, "useComponentToImageContext must be used within a ComponentToImageProvider");
                        try {
                            let { snapdom: a } = await n.e("763632").then(n.bind(n, 588339)),
                                i = await a.toBlob(t, { ...o, format: "png" });
                            (u()(null != i, "Unable to generate image"), e(i));
                        } catch (e) {
                            a(e);
                        } finally {
                            (l(!1), i.setComponentToSnapshot(null));
                        }
                    }
                    (l(!0), i.setComponentToSnapshot(t({ generateImageRef: r })));
                })
            );
        },
    };
}
