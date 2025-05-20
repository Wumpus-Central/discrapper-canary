n.d(t, { L: () => h }), n(388685);
var a = n(255367),
    r = n(73800),
    l = n(120356),
    i = n.n(l),
    s = n(481060),
    o = n(310752),
    c = n(897842),
    d = n(731994),
    u = n(792351);
let m = () => {
        (0, s.ZDy)(
            async () => {
                let { default: e } = await Promise.resolve().then(n.bind(n, 897842));
                return (t) =>
                    (0, a.jsx)(
                        e,
                        (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {},
                                    a = Object.keys(n);
                                'function' == typeof Object.getOwnPropertySymbols &&
                                    (a = a.concat(
                                        Object.getOwnPropertySymbols(n).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                        })
                                    )),
                                    a.forEach(function (t) {
                                        var a;
                                        (a = n[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: a,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0
                                                  })
                                                : (e[t] = a);
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
    x = (e) => {
        e.stopPropagation(), e.preventDefault();
    },
    h = (e) => {
        let { className: t, onDrop: n } = e,
            [l, h] = r.useState(!1),
            p = r.useRef(null),
            b = r.useCallback((e) => {
                x(e), h(!0), (0, s.Mr3)(c.A);
            }, []),
            f = r.useCallback((e) => {
                x(e), h(!1);
            }, []),
            v = r.useCallback(
                async (e) => {
                    x(e), h(!1);
                    let t = e.dataTransfer;
                    if (null == t) return void m();
                    let a = await Promise.all(
                        Array.from(t.items).map((e) => {
                            var t;
                            return null != (t = e.webkitGetAsEntry()) ? t : e.getAsEntry();
                        })
                    ).then((e) => e.filter((e) => null != e));
                    a.length > 0 ? n(a) : m();
                },
                [n]
            );
        return (0, a.jsx)('div', {
            ref: p,
            className: i()(t, u.uploadArea),
            onDragEnter: b,
            onDragLeave: f,
            onDrop: v,
            children: (0, a.jsx)('div', {
                className: i()(u.uploadModal, { [u.droppable]: l }),
                children: (0, a.jsxs)('div', {
                    className: u.inner,
                    children: [
                        (0, a.jsx)(o.Z, { icons: d.J6 }),
                        (0, a.jsx)(s.X6q, {
                            variant: 'heading-lg/bold',
                            children: 'Upload Shop Assets'
                        }),
                        (0, a.jsxs)('div', {
                            className: u.instructions,
                            children: [
                                (0, a.jsx)(s.Text, {
                                    variant: 'text-sm/normal',
                                    children: 'Drop file(s) into this panel to preview Shop assets!'
                                }),
                                (0, a.jsxs)(s.Text, {
                                    variant: 'text-sm/normal',
                                    children: [
                                        'Click',
                                        (0, a.jsx)(s.idN, {
                                            className: u.questionIcon,
                                            size: 'xs',
                                            color: s.TVs.colors.TEXT_NORMAL
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
