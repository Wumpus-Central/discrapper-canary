n.d(t, { L: () => h }), n(388685);
var a = n(54381),
    l = n(473749),
    r = n(120356),
    i = n.n(r),
    s = n(481060),
    o = n(310752),
    c = n(897842),
    d = n(731994),
    u = n(386325);
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
                                "function" == typeof Object.getOwnPropertySymbols &&
                                    (a = a.concat(
                                        Object.getOwnPropertySymbols(n).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                        }),
                                    )),
                                    a.forEach(function (t) {
                                        var a;
                                        (a = n[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: a,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0,
                                                  })
                                                : (e[t] = a);
                                    });
                            }
                            return e;
                        })(
                            {
                                title: "No image or video files found!",
                                help: "Please drop one or more image or video files.",
                            },
                            t,
                        ),
                    );
            },
            { modalKey: c.A },
        );
    },
    p = (e) => {
        e.stopPropagation(), e.preventDefault();
    },
    h = (e) => {
        let { className: t, onDrop: n } = e,
            [r, h] = l.useState(!1),
            x = l.useRef(null),
            g = l.useCallback((e) => {
                p(e), h(!0), (0, s.Mr3)(c.A);
            }, []),
            f = l.useCallback((e) => {
                p(e), h(!1);
            }, []),
            b = l.useCallback(
                async (e) => {
                    p(e), h(!1);
                    let t = e.dataTransfer;
                    if (null == t) return void m();
                    let a = await Promise.all(
                        Array.from(t.items).map((e) => {
                            var t;
                            return null != (t = e.webkitGetAsEntry()) ? t : e.getAsEntry();
                        }),
                    ).then((e) => e.filter((e) => null != e));
                    a.length > 0 ? n(a) : m();
                },
                [n],
            );
        return (0, a.jsx)("div", {
            ref: x,
            className: i()(t, u.uploadArea),
            onDragEnter: g,
            onDragOver: p,
            onDragLeave: f,
            onDrop: b,
            children: (0, a.jsx)("div", {
                className: i()(u.uploadModal, { [u.droppable]: r }),
                children: (0, a.jsxs)("div", {
                    className: u.inner,
                    children: [
                        (0, a.jsx)(o.Z, { icons: d.J6 }),
                        (0, a.jsx)(s.Heading, {
                            variant: "heading-lg/bold",
                            children: "Upload Shop Assets",
                        }),
                        (0, a.jsxs)("div", {
                            className: u.instructions,
                            children: [
                                (0, a.jsx)(s.Text, {
                                    variant: "text-sm/normal",
                                    children: "Drop file(s) into this panel to preview Shop assets!",
                                }),
                                (0, a.jsxs)(s.Text, {
                                    variant: "text-sm/normal",
                                    children: [
                                        "Click",
                                        (0, a.jsx)(s.idN, {
                                            className: u.questionIcon,
                                            size: "xs",
                                            color: s.TVs.colors.TEXT_DEFAULT,
                                        }),
                                        "above for more instructions.",
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
            }),
        });
    };
