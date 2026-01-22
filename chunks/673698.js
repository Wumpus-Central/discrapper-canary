n.d(t, {
                    _: () => T
                }), n(896048);
                var r = n(627968),
                    i = n(64700),
                    a = n(503698),
                    s = n.n(a),
                    o = n(582754),
                    l = n(397927),
                    c = n(736653),
                    u = n(264927),
                    d = n(515718),
                    f = n(835517),
                    p = n(649658),
                    _ = n(652215),
                    h = n(838541),
                    m = n(985018),
                    g = n(613568),
                    E = n(428721),
                    b = n(852119);

                function y(e, t, n) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e
                }

                function O(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))), r.forEach(function(t) {
                            y(e, t, n[t])
                        })
                    }
                    return e
                }

                function A(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter(function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })), n.push.apply(n, r)
                    }
                    return n
                }

                function v(e, t) {
                    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : A(Object(t)).forEach(function(n) {
                        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                    }), e
                }

                function S(e, t) {
                    if (null == e) return {};
                    var n, r, i, a = {};
                    if ("u" > typeof Reflect && Reflect.ownKeys) {
                        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
                        return a
                    }
                    if (a = I(e, t), Object.getOwnPropertySymbols)
                        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
                    return a
                }

                function I(e, t) {
                    if (null == e) return {};
                    var n, r, i = {},
                        a = Object.getOwnPropertyNames(e);
                    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
                    return i
                }
                let T = i.forwardRef((e, t) => {
                    let n, [a, ...o] = [e, t],
                        {
                            className: c,
                            imageClassName: f,
                            readyState: h = _.Rv1.READY,
                            src: E,
                            placeholder: b,
                            placeholderVersion: y,
                            alt: A,
                            width: I,
                            height: T,
                            maxWidth: w = I,
                            maxHeight: P = T,
                            minWidth: D = 0,
                            minHeight: x = 0,
                            mediaLayoutType: L,
                            limitResponsiveWidth: j = !0,
                            accessory: M,
                            zoomable: k = !0,
                            original: U,
                            children: G = e => {
                                let {
                                    src: t,
                                    size: n,
                                    alt: i,
                                    className: a,
                                    mediaLayoutType: s
                                } = e;
                                return (0, r.jsx)("img", {
                                    className: null != a ? a : void 0,
                                    alt: null != i ? i : m.intl.string(m.t.X4IxWL),
                                    src: t,
                                    style: R(n, s)
                                })
                            },
                            renderAccessory: V,
                            onClick: F,
                            tabIndex: B,
                            dataSafeSrc: H,
                            useFullWidth: Y = !1,
                            srcIsAnimated: W
                        } = a,
                        K = S(a, ["className", "imageClassName", "readyState", "src", "placeholder", "placeholderVersion", "alt", "width", "height", "maxWidth", "maxHeight", "minWidth", "minHeight", "mediaLayoutType", "limitResponsiveWidth", "accessory", "zoomable", "original", "children", "renderAccessory", "onClick", "tabIndex", "dataSafeSrc", "useFullWidth", "srcIsAnimated"]),
                        [z] = o,
                        q = i.useRef(null),
                        X = i.useRef(null);
                    if (1 === I && 1 === T) return null;
                    let Z = (0, d.Uj)({
                            width: I,
                            height: T,
                            maxWidth: w,
                            maxHeight: P,
                            minWidth: D,
                            minHeight: x
                        }),
                        Q = 0 !== Z.width ? Z.width / Z.height : 1;
                    "" !== E && h !== _.Rv1.ERROR ? n = G({
                        src: E,
                        size: Z,
                        alt: A,
                        className: f,
                        mediaLayoutType: L
                    }) : h !== _.Rv1.LOADING && (n = (0, r.jsx)(C, {
                        size: Z,
                        mediaLayoutType: L,
                        alt: A
                    })), n = (0, r.jsx)(p.y, {
                        readyState: h,
                        aspectRatio: Q,
                        placeholder: b,
                        placeholderVersion: y,
                        placeholderStyle: R(Z, L),
                        children: n
                    });
                    let $ = null != V ? V() : null;
                    return $ = null != $ ? $ : M, (0, r.jsx)(l.vN3, {
                        ringTarget: q,
                        focusTarget: X,
                        children: (0, r.jsxs)("div", v(O({
                            ref: z,
                            className: s()("imageWrapper", g.h4, {
                                [g.j3]: k,
                                [g.LF]: h !== _.Rv1.READY,
                                [g.vk]: null != F
                            }, c),
                            style: N(Z, j, Y, L)
                        }, K), {
                            children: [null != U && (0, r.jsx)("a", {
                                tabIndex: -1,
                                onClick: F,
                                "aria-hidden": !0,
                                className: g.mt,
                                href: U,
                                ref: q,
                                "data-role": "img",
                                "data-safe-src": null != H ? H : E
                            }), null != F ? (0, r.jsx)(l.DUT, {
                                className: g.w8,
                                tabIndex: null != B ? B : 0,
                                onClick: F,
                                "aria-label": null != A ? A : m.intl.string(m.t.X4IxWL),
                                "aria-describedby": u.l2,
                                innerRef: X,
                                focusProps: {
                                    enabled: !1
                                },
                                children: n
                            }) : n, null != $ ? (0, r.jsx)("div", {
                                className: g.mQ,
                                children: $
                            }) : null]
                        }))
                    })
                });

                function C(e) {
                    let {
                        size: t,
                        mediaLayoutType: n,
                        alt: i
                    } = e, a = (0, c.Ay)();
                    return (0, r.jsx)("div", {
                        className: g.x5,
                        style: w(t, n),
                        children: (0, r.jsx)("img", {
                            src: (0, o.qB)(a) ? b : E,
                            className: g.wL,
                            alt: null != i ? i : m.intl.string(m.t.X4IxWL)
                        })
                    })
                }

                function N(e, t, n, r) {
                    return r === h.dG.MOSAIC ? {
                        display: "block",
                        maxHeight: "inherit",
                        margin: "auto",
                        width: !n && e.width <= h.k6 ? e.width : "100%",
                        height: "100%"
                    } : r === h.dG.RESPONSIVE ? {
                        maxWidth: t ? e.width : void 0,
                        width: "100%",
                        aspectRatio: "".concat(e.width, " / ").concat(e.height)
                    } : e
                }

                function R(e, t) {
                    switch (t) {
                        case h.dG.MOSAIC:
                            return {
                                display: "block", objectFit: "cover", minWidth: "100%", minHeight: "100%", maxWidth: 1 === (0, f.A)() ? "calc(100% + 1px)" : "100%"
                            };
                        case h.dG.RESPONSIVE:
                            return P(e);
                        default:
                            return e
                    }
                }

                function w(e, t) {
                    switch (t) {
                        case h.dG.MOSAIC:
                            return {
                                width: "100%", height: "100%", aspectRatio: "".concat(e.width, " / ").concat(e.height), display: "flex", maxHeight: "inherit"
                            };
                        case h.dG.RESPONSIVE:
                            return v(O({}, P(e)), {
                                display: "flex"
                            });
                        default:
                            return e
                    }
                }

                function P(e) {
                    let {
                        width: t,
                        height: n
                    } = e;
                    return {
                        maxWidth: t,
                        maxHeight: n,
                        width: "100%",
                        display: "block",
                        aspectRatio: "".concat(t, " / ").concat(n)
                    }
                }
                T.displayName = "Image"