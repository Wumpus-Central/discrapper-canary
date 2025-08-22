t.d(r, {
    ZP: () => h,
    c2: () => g,
    cK: () => m,
});
var n,
    o,
    a,
    s = t(951288),
    i = t(647438),
    l = t(120356),
    c = t.n(l),
    d = t(598390),
    u = t(678249);
function f(e, r, t) {
    return (
        r in e
            ? Object.defineProperty(e, r, {
                  value: t,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[r] = t),
        e
    );
}
function C(e) {
    for (var r = 1; r < arguments.length; r++) {
        var t = null != arguments[r] ? arguments[r] : {},
            n = Object.keys(t);
        "function" == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                }),
            )),
            n.forEach(function (r) {
                f(e, r, t[r]);
            });
    }
    return e;
}
var m = (((n = {}).SIZE_40 = "SIZE_40"), (n.SIZE_60 = "SIZE_60"), n);
let p = Object.freeze({
        SIZE_40: "size-40",
        SIZE_60: "size-60",
    }),
    x = t(515695);
class b extends (o = i.PureComponent) {
    render() {
        let e = this.props,
            { className: r, text: t } = e,
            n = (function (e, r) {
                if (null == e) return {};
                var t,
                    n,
                    o = (function (e, r) {
                        if (null == e) return {};
                        var t,
                            n,
                            o = {},
                            a = Object.keys(e);
                        for (n = 0; n < a.length; n++) (t = a[n]), r.indexOf(t) >= 0 || (o[t] = e[t]);
                        return o;
                    })(e, r);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < a.length; n++)
                        (t = a[n]),
                            !(r.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t]);
                }
                return o;
            })(e, ["className", "text"]);
        return (0, s.jsx)("div", {
            style: {
                width: n.size,
                height: n.size,
                backgroundColor: n.bgColor,
            },
            className: c()(u.qrCodeContainer, r),
            children: (0, s.jsx)(
                d.default,
                C(
                    {
                        value: t,
                        level: "M",
                    },
                    n,
                ),
            ),
        });
    }
}
f(b, "defaultProps", {
    size: 128,
    bgColor: "#ffffff",
    fgColor: "#000000",
});
class g extends (a = i.PureComponent) {
    render() {
        let { overlaySize: e } = this.props,
            r = p[null != e ? e : "SIZE_40"];
        return (0, s.jsxs)("div", {
            className: u.qrCodeOverlayContainer,
            children: [
                (0, s.jsx)(b, C({}, this.props)),
                (0, s.jsx)("div", {
                    className: u.qrCodeOverlay,
                    children: (0, s.jsx)("img", {
                        className: u[r],
                        src: x,
                        alt: "",
                    }),
                }),
            ],
        });
    }
}
f(g, "defaultProps", {
    size: 144,
    bgColor: "#ffffff",
    fgColor: "#000000",
});
let h = b;
