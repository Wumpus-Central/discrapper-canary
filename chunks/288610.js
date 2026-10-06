t.d(n, { R: () => d, p: () => s });
var l = t(477900),
    o = t(582128),
    i = t(66713),
    a = t(284009),
    r = t.n(a);
let u = 588245 != t.j ? o.createContext(void 0) : null;
function s(e) {
    let { children: n } = e,
        [t, i] = o.useState(null),
        a = o.useMemo(() => ({ setComponentToSnapshot: i }), [i]);
    return (0, l.jsxs)(u.Provider, {
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
        l = o.useContext(u);
    r()(null != l, "useComponentToImageContext must be used within a ComponentToImageProvider");
    let [a, s] = o.useState(!1);
    return {
        generatingImage: a,
        generateImage: function () {
            return (
                r()(null != l, "useComponentToImageContext must be used within a ComponentToImageProvider"),
                new Promise((e, o) => {
                    async function a(n) {
                        r()(null != l, "useComponentToImageContext must be used within a ComponentToImageProvider");
                        try {
                            let l = await (0, i.ZR)(n, t);
                            (r()(null != l, "Unable to generate image"), e(l));
                        } catch (e) {
                            o(e);
                        } finally {
                            (s(!1), l.setComponentToSnapshot(null));
                        }
                    }
                    (s(!0), l.setComponentToSnapshot(n({ generateImageRef: a })));
                })
            );
        },
    };
}
