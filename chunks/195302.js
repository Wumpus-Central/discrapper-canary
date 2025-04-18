n.d(t, {
    d: () => u,
    p: () => c
}),
    n(388685);
var r = n(200651),
    i = n(192379),
    a = n(775953),
    o = n(512722),
    s = n.n(o);
let l = i.createContext(void 0);
function c(e) {
    let { children: t } = e,
        [n, a] = i.useState(null),
        o = i.useMemo(() => ({ setComponentToSnapshot: a }), [a]);
    return (0, r.jsxs)(l.Provider, {
        value: o,
        children: [
            t,
            null != n &&
                (0, r.jsx)('div', {
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
function u(e) {
    let { renderComponent: t, imageOptions: n } = e,
        r = i.useContext(l);
    s()(null != r, 'useComponentToImageContext must be used within a ComponentToImageProvider');
    let [o, c] = i.useState(!1);
    return {
        generatingImage: o,
        generateImage: () =>
            new Promise((e, i) => {
                c(!0);
                let o = async (t) => {
                    try {
                        let r = await (0, a.SE)(t, n);
                        s()(null != r, 'Unable to generate image'), e(r);
                    } catch (e) {
                        i(e);
                    } finally {
                        c(!1), r.setComponentToSnapshot(null);
                    }
                };
                r.setComponentToSnapshot(t({ generateImageRef: o }));
            })
    };
}
