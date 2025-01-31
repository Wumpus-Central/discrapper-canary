n.d(t, {
    d: () => c,
    p: () => u
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    a = n(775953),
    s = n(512722),
    o = n.n(s);
let l = r.createContext(void 0);
function u(e) {
    let { children: t } = e,
        [n, a] = r.useState(null),
        s = r.useMemo(() => ({ setComponentToSnapshot: a }), [a]);
    return (0, i.jsxs)(l.Provider, {
        value: s,
        children: [
            t,
            null != n &&
                (0, i.jsx)('div', {
                    id: 'component-to-image-container',
                    style: {
                        position: 'fixed',
                        top: '-1000px',
                        right: '-1000px'
                    },
                    children: n
                })
        ]
    });
}
function c(e) {
    let { renderComponent: t, imageOptions: n } = e,
        i = r.useContext(l);
    o()(null != i, 'useComponentToImageContext must be used within a ComponentToImageProvider');
    let [s, u] = r.useState(!1);
    return {
        generatingImage: s,
        generateImage: () =>
            new Promise((e, r) => {
                u(!0);
                let s = async (t) => {
                    try {
                        let i = await (0, a.SE)(t, n);
                        o()(null != i, 'Unable to generate image'), e(i);
                    } catch (e) {
                        r(e);
                    } finally {
                        u(!1), i.setComponentToSnapshot(null);
                    }
                };
                i.setComponentToSnapshot(t({ generateImageRef: s }));
            })
    };
}
