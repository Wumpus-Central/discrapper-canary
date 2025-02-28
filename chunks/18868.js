n.d(t, { L: () => p }), n(47120);
var r = n(200651),
    a = n(192379),
    l = n(120356),
    i = n.n(l),
    o = n(481060),
    s = n(310752),
    c = n(710845),
    d = n(897842),
    u = n(731994),
    m = n(223692);
let h = new c.Z('ShopAssetsPreviewUploadArea'),
    x = (e) => {
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
    f = () => {
        x({
            title: 'Invalid file type!',
            help: 'Please drop only image files or a directory containing image files.'
        });
    },
    p = (e) => {
        let { className: t, onDrop: n } = e,
            [l, c] = a.useState(!1),
            x = a.useRef(null),
            p = a.useCallback((e) => {
                for (let t of e)
                    try {
                        if (null == t || (!t.isFile && !t.isDirectory)) return h.warn('Dropped item is not a file or directory'), !1;
                    } catch (e) {
                        return h.error('Error validating file:', e), !1;
                    }
                return !0;
            }, []),
            b = a.useCallback((e) => {
                e.stopPropagation(), e.preventDefault(), c(!0);
                let t = e.dataTransfer;
                null != t && ((t.dropEffect = 'copy'), (0, o.nfh)(d.A) && (0, o.Mr3)(d.A));
            }, []),
            _ = a.useCallback(() => {
                c(!1);
            }, []),
            g = a.useCallback(
                async (e) => {
                    e.preventDefault(), e.stopPropagation(), c(!1);
                    let t = e.dataTransfer;
                    if (null == t) {
                        f();
                        return;
                    }
                    let r = await Promise.all(
                        Array.from(t.items).map((e) => {
                            var t;
                            return null !== (t = e.webkitGetAsEntry()) && void 0 !== t ? t : e.getAsEntry();
                        })
                    ).then((e) => e.filter((e) => null != e));
                    if (0 === r.length || !p(r)) {
                        f();
                        return;
                    }
                    h.info('[DEBUG] file system entries: '.concat(r.length)), n(r);
                },
                [n, p]
            );
        return (
            a.useEffect(() => {
                var e;
                let t = null === (e = x.current) || void 0 === e ? void 0 : e.ownerDocument.body;
                if (null != t) return t.addEventListener('dragover', b, !1), () => t.removeEventListener('dragover', b, !1);
            }, [b]),
            (0, r.jsx)('div', {
                ref: x,
                className: i()(t, m.uploadArea, { [m.droppable]: l }),
                onDragLeave: _,
                onDragEnd: _,
                onDrop: g,
                children: (0, r.jsxs)('div', {
                    className: m.uploadModal,
                    children: [
                        (0, r.jsx)('div', { className: m.bgScale }),
                        (0, r.jsxs)('div', {
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
                    ]
                })
            })
        );
    };
