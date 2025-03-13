n.d(t, {
    L: () => p,
    Y: () => m
}),
    n(47120);
var r = n(200651),
    a = n(192379),
    i = n(120356),
    l = n.n(i),
    o = n(481060),
    s = n(310752),
    c = n(897842),
    d = n(731994),
    u = n(223692);
let m = () => {
        (0, o.ZDy)(
            async () => {
                let { default: e } = await Promise.resolve().then(n.bind(n, 897842));
                return (t) =>
                    (0, r.jsx)(
                        e,
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
                        })(
                            {
                                title: 'No image or video files found!',
                                help: 'Please drop one or more image or video files.'
                            },
                            t
                        )
                    );
            },
            { modalKey: c.A }
        );
    },
    h = (e) => {
        e.stopPropagation(), e.preventDefault();
    },
    p = (e) => {
        let { className: t, onDrop: n } = e,
            [i, p] = a.useState(!1),
            x = a.useRef(null),
            f = a.useCallback((e) => {
                h(e), (0, o.Mr3)(c.A), null != e.dataTransfer && (e.dataTransfer.dropEffect = 'copy');
            }, []),
            b = a.useCallback((e) => {
                h(e), p(!0);
            }, []),
            _ = a.useCallback((e) => {
                h(e), p(!1);
            }, []),
            g = a.useCallback(
                async (e) => {
                    h(e), p(!1);
                    let t = e.dataTransfer;
                    if (null == t) {
                        m();
                        return;
                    }
                    let r = await Promise.all(
                        Array.from(t.items).map((e) => {
                            var t;
                            return null !== (t = e.webkitGetAsEntry()) && void 0 !== t ? t : e.getAsEntry();
                        })
                    ).then((e) => e.filter((e) => null != e));
                    r.length > 0 ? n(r) : m();
                },
                [n]
            );
        return (0, r.jsx)('div', {
            ref: x,
            className: l()(t, u.uploadArea),
            onDragEnter: b,
            onDragOver: f,
            onDragLeave: _,
            onDrop: g,
            children: (0, r.jsx)('div', {
                className: l()(u.uploadModal, { [u.droppable]: i }),
                children: (0, r.jsxs)('div', {
                    className: u.inner,
                    children: [
                        (0, r.jsx)(s.Z, { icons: d.J6 }),
                        (0, r.jsx)(o.X6q, {
                            variant: 'heading-lg/bold',
                            children: 'Upload Shop Assets'
                        }),
                        (0, r.jsxs)('div', {
                            className: u.instructions,
                            children: [
                                (0, r.jsx)(o.Text, {
                                    variant: 'text-sm/normal',
                                    children: 'Drop file(s) into this panel to preview Shop assets!'
                                }),
                                (0, r.jsxs)(o.Text, {
                                    variant: 'text-sm/normal',
                                    children: [
                                        'Click',
                                        (0, r.jsx)(o.idN, {
                                            className: u.questionIcon,
                                            size: 'xs',
                                            color: o.TVs.colors.TEXT_NORMAL
                                        }),
                                        'above for more instructions.'
                                    ]
                                })
                            ]
                        })
                    ]
                })
            })
        });
    };
