n.d(t, {
    ZP: () => E,
    c2: () => x,
    cK: () => m,
});
var r,
    i,
    s,
    l = n(951288),
    a = n(647438),
    o = n(120356),
    c = n.n(o),
    u = n(78371),
    d = n(678249);
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
function g(e) {
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
var m = (((r = {}).SIZE_40 = "SIZE_40"), (r.SIZE_60 = "SIZE_60"), r);
let p = Object.freeze({
        SIZE_40: "size-40",
        SIZE_60: "size-60",
    }),
    f = n(515695);
class _ extends (i = a.PureComponent) {
    render() {
        let e = this.props,
            { className: t, text: n } = e,
            r = (function (e, t) {
                if (null == e) return {};
                var n,
                    r,
                    i = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            r,
                            i = {},
                            s = Object.keys(e);
                        for (r = 0; r < s.length; r++) (n = s[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                        return i;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < s.length; r++)
                        (n = s[r]),
                            !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
                }
                return i;
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
                g(
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
h(_, "defaultProps", {
    size: 128,
    bgColor: "#ffffff",
    fgColor: "#000000",
});
class x extends (s = a.PureComponent) {
    render() {
        let { overlaySize: e } = this.props,
            t = p[null != e ? e : "SIZE_40"];
        return (0, l.jsxs)("div", {
            className: d.qrCodeOverlayContainer,
            children: [
                (0, l.jsx)(_, g({}, this.props)),
                (0, l.jsx)("div", {
                    className: d.qrCodeOverlay,
                    children: (0, l.jsx)("img", {
                        className: d[t],
                        src: f,
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
let E = _;
