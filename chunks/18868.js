n.d(t, { L: () => b }), n(47120);
var r = n(200651),
    a = n(192379),
    i = n(120356),
    l = n.n(i),
    o = n(481060),
    s = n(310752),
    c = n(710845),
    d = n(897842),
    u = n(731994),
    m = n(223692);
let h = new c.Z('ShopAssetsPreviewUploadArea'),
    p = (e) => {
        (0, o.ZDy)(
            async () => {
                let { default: t } = await Promise.resolve().then(n.bind(n, 897842));
                return (n) =>
                    (0, r.jsx)(
                        t,
                        (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {},
                                    r = Object.keys(n);
                                'function' == typeof Object.getOwnPropertySymbols &&
                                    (r = r.concat(
                                        Object.getOwnPropertySymbols(n).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                        })
                                    )),
                                    r.forEach(function (t) {
                                        var r;
                                        (r = n[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: r,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0
                                                  })
                                                : (e[t] = r);
                                    });
                            }
                            return e;
                        })({}, e, n)
                    );
            },
            { modalKey: d.A }
        );
    },
    x = () => {
        p({
            title: 'Invalid file type!',
            help: 'Please drop only image files or a directory containing image files.'
        });
    },
    f = (e) => {
        e.stopPropagation(), e.preventDefault();
    },
    b = (e) => {
        let { className: t, onDrop: n } = e,
            [i, c] = a.useState(!1),
            p = a.useRef(null),
            b = a.useCallback((e) => {
                for (let t of e)
                    try {
                        if (null == t || (!t.isFile && !t.isDirectory)) return h.warn('Dropped item is not a file or directory'), !1;
                    } catch (e) {
                        return h.error('Error validating file:', e), !1;
                    }
                return !0;
            }, []),
            _ = a.useCallback((e) => {
                f(e), (0, o.Mr3)(d.A), null != e.dataTransfer && (e.dataTransfer.dropEffect = 'copy');
            }, []),
            g = a.useCallback((e) => {
                f(e), c(!0);
            }, []),
            v = a.useCallback((e) => {
                f(e), c(!1);
            }, []),
            j = a.useCallback(
                async (e) => {
                    f(e), c(!1);
                    let t = e.dataTransfer;
                    if (null == t) {
                        x();
                        return;
                    }
                    let r = await Promise.all(
                        Array.from(t.items).map((e) => {
                            var t;
                            return null !== (t = e.webkitGetAsEntry()) && void 0 !== t ? t : e.getAsEntry();
                        })
                    ).then((e) => e.filter((e) => null != e));
                    if (0 === r.length || !b(r)) {
                        x();
                        return;
                    }
                    h.info('[DEBUG] file system entries: '.concat(r.length)), n(r);
                },
                [n, b]
            );
        return (0, r.jsx)('div', {
            ref: p,
            className: l()(t, m.uploadArea),
            onDragEnter: g,
            onDragOver: _,
            onDragLeave: v,
            onDrop: j,
            children: (0, r.jsx)('div', {
                className: l()(m.uploadModal, { [m.droppable]: i }),
                children: (0, r.jsxs)('div', {
                    className: m.inner,
                    children: [
                        (0, r.jsx)(s.Z, { icons: u.J6 }),
                        (0, r.jsx)('div', {
                            className: m.title,
                            children: 'Upload Shop Assets'
                        }),
                        (0, r.jsx)('div', {
                            className: m.instructions,
                            children: (0, r.jsx)('pre', { children: 'Upload files' })
                        })
                    ]
                })
            })
        });
    };
