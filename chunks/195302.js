r.d(n, {
    d: function () {
        return f;
    },
    p: function () {
        return d;
    }
});
var i = r(47120);
var a = r(200651),
    o = r(192379),
    s = r(775953),
    l = r(512722),
    u = r.n(l);
let c = o.createContext(void 0);
function d(e) {
    let { children: n } = e,
        [r, i] = o.useState(null),
        s = o.useMemo(() => ({ setComponentToSnapshot: i }), [i]);
    return (0, a.jsxs)(c.Provider, {
        value: s,
        children: [
            n,
            null != r &&
                (0, a.jsx)('div', {
                    id: 'component-to-image-container',
                    style: {
                        position: 'fixed',
                        top: '-1000px',
                        right: '-1000px'
                    },
                    children: r
                })
        ]
    });
}
function f(e) {
    let { renderComponent: n, imageOptions: r } = e,
        i = o.useContext(c);
    u()(null != i, 'useComponentToImageContext must be used within a ComponentToImageProvider');
    let [a, l] = o.useState(!1);
    return {
        generatingImage: a,
        generateImage: () =>
            new Promise((e, a) => {
                l(!0);
                let o = async (n) => {
                    try {
                        let i = await (0, s.SE)(n, r);
                        u()(null != i, 'Unable to generate image'), e(i);
                    } catch (e) {
                        a(e);
                    } finally {
                        l(!1), i.setComponentToSnapshot(null);
                    }
                };
                i.setComponentToSnapshot(n({ generateImageRef: o }));
            })
    };
}
