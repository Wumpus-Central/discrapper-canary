n.d(t, { a: () => y }), n(415506), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(481060),
    l = n(591146),
    c = n(546557);
function u(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function d(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                u(e, t, n[t]);
            });
    }
    return e;
}
function f(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function p(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : f(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function _(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = m(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function m(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let h = 16,
    g = 2,
    E = (e) => {
        switch (e) {
            case 52:
                return "M0 25.6C0 16.6392 0 12.1587 1.7439 8.73615C3.27787 5.72556 5.72556 3.27787 8.73615 1.7439C12.1587 0 16.6392 0 25.6 0H26.4C35.3608 0 39.8413 0 43.2638 1.7439C46.2744 3.27787 48.7221 5.72556 50.2561 8.73615C52 12.1587 52 16.6392 52 25.6V26.4C52 35.3608 52 39.8413 50.2561 43.2638C48.7221 46.2744 46.2744 48.7221 43.2638 50.2561C39.8413 52 35.3608 52 26.4 52H25.6C16.6392 52 12.1587 52 8.73615 50.2561C5.72556 48.7221 3.27787 46.2744 1.7439 43.2638C0 39.8413 0 35.3608 0 26.4V25.6Z";
            case 48:
                return "M0 24C0 16.5449 0 12.8174 1.21793 9.87706C2.84183 5.95662 5.95662 2.84183 9.87706 1.21793C12.8174 0 16.5449 0 24 0C31.4551 0 35.1826 0 38.1229 1.21793C42.0434 2.84183 45.1582 5.95662 46.7821 9.87706C48 12.8174 48 16.5449 48 24C48 31.4551 48 35.1826 46.7821 38.1229C45.1582 42.0434 42.0434 45.1582 38.1229 46.7821C35.1826 48 31.4551 48 24 48C16.5449 48 12.8174 48 9.87706 46.7821C5.95662 45.1582 2.84183 42.0434 1.21793 38.1229C0 35.1826 0 31.4551 0 24Z";
            case 44:
                return "M0 19.2C0 12.4794 0 9.11906 1.30792 6.55211C2.4584 4.29417 4.29417 2.4584 6.55211 1.30792C9.11906 0 12.4794 0 19.2 0H24.8C31.5206 0 34.8809 0 37.4479 1.30792C39.7058 2.4584 41.5416 4.29417 42.6921 6.55211C44 9.11906 44 12.4794 44 19.2V24.8C44 31.5206 44 34.8809 42.6921 37.4479C41.5416 39.7058 39.7058 41.5416 37.4479 42.6921C34.8809 44 31.5206 44 24.8 44H19.2C12.4794 44 9.11906 44 6.55211 42.6921C4.29417 41.5416 2.4584 39.7058 1.30792 37.4479C0 34.8809 0 31.5206 0 24.8V19.2Z";
            case 40:
                return "M0 17.4545C0 11.3449 0 8.29005 1.18902 5.95647C2.23491 3.90379 3.90379 2.23491 5.95647 1.18902C8.29005 0 11.3449 0 17.4545 0H22.5455C28.6551 0 31.71 0 34.0435 1.18902C36.0962 2.23491 37.7651 3.90379 38.811 5.95647C40 8.29005 40 11.3449 40 17.4545V22.5455C40 28.6551 40 31.71 38.811 34.0435C37.7651 36.0962 36.0962 37.7651 34.0435 38.811C31.71 40 28.6551 40 22.5455 40H17.4545C11.3449 40 8.29005 40 5.95647 38.811C3.90379 37.7651 2.23491 36.0962 1.18902 34.0435C0 31.71 0 28.6551 0 22.5455V17.4545Z";
            default:
                throw Error("Unsupported BlobMask squicle size: ".concat(e));
        }
    },
    b = (e) => {
        switch (e) {
            case 48:
                return "M48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24Z";
            case 44:
                return "M44 22C44 34.1502 34.1502 44 22 44C9.84978 44 0 34.1502 0 22C0 9.84978 9.84978 0 22 0C34.1502 0 44 9.84978 44 22Z";
            case 40:
                return "M0 20C0 8.95431 8.95431 0 20 0C31.0457 0 40 8.95431 40 20C40 31.0457 31.0457 40 20 40C8.95431 40 0 31.0457 0 20Z";
            default:
                throw Error("Unsupported BlobMask circle size: ".concat(e));
        }
    };
function y(e) {
    var {
            selected: t = !1,
            lowerBadgeSize: n = {
                width: h,
                height: h,
            },
            highlight: i = !1,
            rounded: a = !1,
        } = e,
        o = _(e, ["selected", "lowerBadgeSize", "highlight", "rounded"]);
    let c = !!o.isFolder,
        u = (0, l.Ml)("BlobMask"),
        f = (0, s.dQu)(s.TVs.modules.guildbar.AVATAR_SIZE),
        m = (0, s.dQu)(s.TVs.modules.guildbar.FOLDER_SIZE),
        g = !u && c ? m : f,
        E = g / 2;
    return (0, r.jsx)(
        O,
        p(d({}, o), {
            selected: t,
            rounded: a,
            baseViewBoxSize: g,
            viewBoxSize: g,
            style: {
                width: g,
                height: g,
            },
            badgeMaskSize: E,
            badgeMaskStroke: 2,
            lowerBadgeSize: n,
            highlight: i,
        }),
    );
}
function O(e) {
    let {
            children: t,
            viewBoxSize: n,
            className: a,
            style: l,
            innerClassName: u,
            isFolder: d,
            lowerBadgeSize: f,
            highlight: p,
            badgeMaskStroke: _,
            badgeMaskSize: m,
            upperBadge: y,
            lowerBadge: O,
            rounded: v = !1,
            "aria-hidden": S,
        } = e,
        [I, T] = i.useState(!1),
        A = () => {
            T(!0);
        },
        C = () => {
            T(!1);
        },
        N = null != y,
        P = null != O,
        R = i.useId(),
        D = "".concat(R, "-upper_badge_masks"),
        w = "".concat(R, "-lower_badge_masks"),
        x = "".concat(R, "-blob_mask"),
        L = "".concat(R, "-stroke_mask"),
        j = "".concat(R, "-highlight_mask"),
        M = (null == f ? void 0 : f.width) != null ? f.width : h,
        k = (null == f ? void 0 : f.height) != null ? f.height : h,
        U = {
            width: d ? n : n + 8,
            height: d ? n : n + 8,
            x: d ? 0 : -4,
            y: d ? 0 : -4,
        },
        G = d ? 20 : m,
        Z = v ? b(n) : E(n);
    return (0, r.jsxs)(
        "div",
        {
            className: o()(a, c.wrapper),
            style: l,
            onFocus: A,
            onBlur: C,
            "aria-hidden": S,
            children: [
                (0, r.jsxs)(
                    "svg",
                    {
                        width: U.width,
                        height: U.height,
                        viewBox: "".concat(U.x, " ").concat(U.y, " ").concat(U.width, " ").concat(U.height),
                        className: o()(c.svg, {
                            [c.noContain]: p,
                            [c.shiftSVG]: !d,
                        }),
                        overflow: "visible",
                        role: "none",
                        children: [
                            (0, r.jsxs)("defs", {
                                children: [
                                    p &&
                                        (0, r.jsx)("path", {
                                            d: Z,
                                            id: j,
                                        }),
                                    (0, r.jsx)("path", {
                                        d: Z,
                                        id: x,
                                    }),
                                    null != y
                                        ? (0, r.jsx)("rect", {
                                              id: D,
                                              x: n - G + _,
                                              y: -_,
                                              width: G,
                                              height: G,
                                              rx: G / 2,
                                              ry: G / 2,
                                          })
                                        : null,
                                    null != O
                                        ? (0, r.jsx)("rect", {
                                              id: w,
                                              x: n - (M + 2 * _) + _,
                                              y: n - (k + 2 * _) + _,
                                              width: M + 2 * _,
                                              height: k + 2 * _,
                                              rx: m / 2,
                                              ry: m / 2,
                                          })
                                        : null,
                                ],
                            }),
                            (0, r.jsxs)("mask", {
                                id: R,
                                fill: "black",
                                x: 0,
                                y: 0,
                                width: n,
                                height: n,
                                children: [
                                    p &&
                                        (0, r.jsx)("use", {
                                            href: "#".concat(j),
                                            fill: "black",
                                        }),
                                    (0, r.jsx)("use", {
                                        href: "#".concat(x),
                                        fill: "white",
                                        className: o()({ [c.isHighlighted]: p }),
                                    }),
                                    N
                                        ? (0, r.jsx)("use", {
                                              href: "#".concat(D),
                                              fill: "black",
                                          })
                                        : null,
                                    P
                                        ? (0, r.jsx)("use", {
                                              href: "#".concat(w),
                                              fill: "black",
                                          })
                                        : null,
                                ],
                            }),
                            N || P
                                ? (0, r.jsxs)("mask", {
                                      id: L,
                                      children: [
                                          (0, r.jsx)("rect", {
                                              width: "150%",
                                              height: "150%",
                                              x: "-25%",
                                              y: "-25%",
                                              fill: "white",
                                          }),
                                          N
                                              ? (0, r.jsx)("use", {
                                                    href: "#".concat(D),
                                                    fill: "black",
                                                })
                                              : null,
                                          P
                                              ? (0, r.jsx)("use", {
                                                    href: "#".concat(w),
                                                    fill: "black",
                                                })
                                              : null,
                                      ],
                                  })
                                : null,
                            I
                                ? (0, r.jsxs)(r.Fragment, {
                                      children: [
                                          (0, r.jsx)("g", {
                                              className: c.focusStroke,
                                              mask: "url(#".concat(L, ")"),
                                              children: (0, r.jsx)("use", { href: "#".concat(x) }),
                                          }),
                                          (0, r.jsxs)("g", {
                                              className: c.focusFill,
                                              children: [
                                                  null != y ? (0, r.jsx)("use", { href: "#".concat(D) }) : null,
                                                  null != O ? (0, r.jsx)("use", { href: "#".concat(w) }) : null,
                                              ],
                                          }),
                                      ],
                                  })
                                : null,
                            p &&
                                (0, r.jsx)("path", {
                                    d: Z,
                                    stroke: s.TVs.unsafe_rawColors.BRAND_500.css,
                                    strokeWidth: g,
                                    className: c.highlight,
                                    mask: "url(#".concat(L, ")"),
                                }),
                            (0, r.jsx)(
                                "foreignObject",
                                {
                                    mask: "url(#".concat(R, ")"),
                                    x: 0,
                                    y: 0,
                                    className: u,
                                    width: n,
                                    height: n,
                                    children: t,
                                },
                                "foreign-object",
                            ),
                        ],
                    },
                    "svg",
                ),
                null != O
                    ? (0, r.jsx)("div", {
                          className: c.lowerBadge,
                          children: O,
                      })
                    : null,
                null != y
                    ? (0, r.jsx)("div", {
                          className: c.upperBadge,
                          children: y,
                      })
                    : null,
            ],
        },
        "".concat(P, "-").concat(N),
    );
}
