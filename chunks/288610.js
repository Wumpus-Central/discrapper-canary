n.d(t, { R: () => m, p: () => l });
var o = n(477900),
    a = n(582128),
    i = n(66713),
    u = n(284009),
    r = n.n(u);
let s = 588245 != n.j ? a.createContext(void 0) : null;
function l(e) {
    let { children: t } = e,
        [n, i] = a.useState(null),
        u = a.useMemo(() => ({ setComponentToSnapshot: i }), [i]);
    return (0, o.jsxs)(s.Provider, {
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
function m(e) {
    let { renderComponent: t, imageOptions: n } = e,
        o = a.useContext(s);
    r()(null != o, "useComponentToImageContext must be used within a ComponentToImageProvider");
    let [u, l] = a.useState(!1);
    return {
        generatingImage: u,
        generateImage: function () {
            return (
                r()(null != o, "useComponentToImageContext must be used within a ComponentToImageProvider"),
                new Promise((e, a) => {
                    async function u(t) {
                        r()(null != o, "useComponentToImageContext must be used within a ComponentToImageProvider");
                        try {
                            let o = await (0, i.ZR)(t, n);
                            (r()(null != o, "Unable to generate image"), e(o));
                        } catch (e) {
                            a(e);
                        } finally {
                            (l(!1), o.setComponentToSnapshot(null));
                        }
                    }
                    (l(!0), o.setComponentToSnapshot(t({ generateImageRef: u })));
                })
            );
        },
    };
}
