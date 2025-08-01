(a.d(t, { L: () => p }), a(388685));
var n = a(255367),
    r = a(73800),
    l = a(120356),
    i = a.n(l),
    s = a(481060),
    o = a(310752),
    c = a(897842),
    d = a(731994),
    u = a(792351);
let m = () => {
        (0, s.ZDy)(
            async () => {
                let { default: e } = await Promise.resolve().then(a.bind(a, 897842));
                return (t) =>
                    (0, n.jsx)(
                        e,
                        (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var a = null != arguments[t] ? arguments[t] : {},
                                    n = Object.keys(a);
                                ('function' == typeof Object.getOwnPropertySymbols &&
                                    (n = n.concat(
                                        Object.getOwnPropertySymbols(a).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(a, e).enumerable;
                                        })
                                    )),
                                    n.forEach(function (t) {
                                        var n;
                                        ((n = a[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: n,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0
                                                  })
                                                : (e[t] = n));
                                    }));
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
    x = (e) => {
        (e.stopPropagation(), e.preventDefault());
    },
    p = (e) => {
        let { className: t, onDrop: a } = e,
            [l, p] = r.useState(!1),
            h = r.useRef(null),
            b = r.useCallback((e) => {
                (x(e), p(!0), (0, s.Mr3)(c.A));
            }, []),
            f = r.useCallback((e) => {
                (x(e), p(!1));
            }, []),
            v = r.useCallback(
                async (e) => {
                    (x(e), p(!1));
                    let t = e.dataTransfer;
                    if (null == t) return void m();
                    let n = await Promise.all(
                        Array.from(t.items).map((e) => {
                            var t;
                            return null != (t = e.webkitGetAsEntry()) ? t : e.getAsEntry();
                        })
                    ).then((e) => e.filter((e) => null != e));
                    n.length > 0 ? a(n) : m();
                },
                [a]
            );
        return (0, n.jsx)('div', {
            ref: h,
            className: i()(t, u.uploadArea),
            onDragEnter: b,
            onDragLeave: f,
            onDrop: v,
            children: (0, n.jsx)('div', {
                className: i()(u.uploadModal, { [u.droppable]: l }),
                children: (0, n.jsxs)('div', {
                    className: u.inner,
                    children: [
                        (0, n.jsx)(o.Z, { icons: d.J6 }),
                        (0, n.jsx)(s.X6q, {
                            variant: 'heading-lg/bold',
                            children: 'Upload Shop Assets'
                        }),
                        (0, n.jsxs)('div', {
                            className: u.instructions,
                            children: [
                                (0, n.jsx)(s.Text, {
                                    variant: 'text-sm/normal',
                                    children: 'Drop file(s) into this panel to preview Shop assets!'
                                }),
                                (0, n.jsxs)(s.Text, {
                                    variant: 'text-sm/normal',
                                    children: [
                                        'Click',
                                        (0, n.jsx)(s.idN, {
                                            className: u.questionIcon,
                                            size: 'xs',
                                            color: s.TVs.colors.TEXT_DEFAULT
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
