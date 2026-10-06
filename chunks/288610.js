t.d(n, { R: () => d, p: () => u });
var l = t(477900),
    o = t(582128),
    i = t(66713),
    a = t(284009),
    s = t.n(a);
let r = 588245 != t.j ? o.createContext(void 0) : null;
function u(e) {
    let { children: n } = e,
        [t, i] = o.useState(null),
        a = o.useMemo(() => ({ setComponentToSnapshot: i }), [i]);
    return (0, l.jsxs)(r.Provider, {
        value: a,
        children: [
            n,
            null != t &&
                (0, l.jsx)("div", {
                    id: "component-to-image-container",
                    style: { position: "fixed", top: "-1000px", right: "-1000px" },
                    children: t,
                }),
        ],
    });
}
function d(e) {
    let { renderComponent: n, imageOptions: t } = e,
        l = o.useContext(r);
    s()(null != l, "useComponentToImageContext must be used within a ComponentToImageProvider");
    let [a, u] = o.useState(!1);
    return {
        generatingImage: a,
        generateImage: function () {
            return (
                s()(null != l, "useComponentToImageContext must be used within a ComponentToImageProvider"),
                new Promise((e, o) => {
                    async function a(n) {
                        s()(null != l, "useComponentToImageContext must be used within a ComponentToImageProvider");
                        try {
                            let l = await (0, i.ZR)(n, t);
                            (s()(null != l, "Unable to generate image"), e(l));
                        } catch (e) {
                            o(e);
                        } finally {
                            (u(!1), l.setComponentToSnapshot(null));
                        }
                    }
                    (u(!0), l.setComponentToSnapshot(n({ generateImageRef: a })));
                })
            );
        },
    };
}
