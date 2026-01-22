n.d(t, {
    Ay: () => _,
    Lx: () => x,
    Zs: () => p,
});
var r,
    i,
    s,
    l = n(627968),
    a = n(64700),
    o = n(503698),
    c = n.n(o),
    u = n(210905),
    d = n(264869);

function h(e, t, n) {
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

function f(e) {
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
                h(e, t, n[t]);
            });
    }
    return e;
}
var p = (((r = {}).SIZE_40 = "SIZE_40"), (r.SIZE_60 = "SIZE_60"), r);
let g = Object.freeze({
        SIZE_40: "size-40",
        SIZE_60: "size-60",
    }),
    m = n(906118);
class A extends (i = a.PureComponent) {
    render() {
        let e = this.props,
            { className: t, text: n } = e,
            r = (function (e, t) {
                if (null == e) return {};
                var n,
                    r,
                    i,
                    s = {};
                if ("u" > typeof Reflect && Reflect.ownKeys) {
                    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
                        (r = n[i]),
                            !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (s[r] = e[r]);
                    return s;
                }
                if (
                    ((s = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            r,
                            i = {},
                            s = Object.getOwnPropertyNames(e);
                        for (r = 0; r < s.length; r++)
                            (n = s[r]),
                                !(t.indexOf(n) >= 0) &&
                                    Object.prototype.propertyIsEnumerable.call(e, n) &&
                                    (i[n] = e[n]);
                        return i;
                    })(e, t)),
                    Object.getOwnPropertySymbols)
                )
                    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
                        (r = n[i]),
                            !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (s[r] = e[r]);
                return s;
            })(e, ["className", "text"]);
        return (0, l.jsx)("div", {
            style: {
                width: r.size,
                height: r.size,
                backgroundColor: r.bgColor,
            },
            className: c()(d.qrCodeContainer, t),
            children: (0, l.jsx)(
                u.default,
                f(
                    {
                        value: n,
                        level: "M",
                    },
                    r,
                ),
            ),
        });
    }
}
h(A, "defaultProps", {
    size: 128,
    bgColor: "#ffffff",
    fgColor: "#000000",
});
class x extends (s = a.PureComponent) {
    render() {
        let { overlaySize: e } = this.props,
            t = g[null != e ? e : "SIZE_40"];
        return (0, l.jsxs)("div", {
            className: d.qrCodeOverlayContainer,
            children: [
                (0, l.jsx)(A, f({}, this.props)),
                (0, l.jsx)("div", {
                    className: d.qrCodeOverlay,
                    children: (0, l.jsx)("img", {
                        className: d[t],
                        src: m,
                        alt: "",
                    }),
                }),
            ],
        });
    }
}
h(x, "defaultProps", {
    size: 144,
    bgColor: "#ffffff",
    fgColor: "#000000",
});
let _ = A;
