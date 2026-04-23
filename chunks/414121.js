"use strict";
n.d(t, { Ay: () => g, Lx: () => m, Zs: () => d });
var i,
    s = n(627968),
    r = n(64700),
    l = n(503698),
    a = n.n(l),
    o = n(366490),
    c = n(101096),
    d = (((i = {}).SIZE_40 = "SIZE_40"), (i.SIZE_60 = "SIZE_60"), i);
let u = Object.freeze({ SIZE_40: "size-40", SIZE_60: "size-60" }),
    _ = n(906118);
class h extends r.PureComponent {
    static defaultProps = { size: 128, bgColor: "#ffffff", fgColor: "#000000" };
    render() {
        let { className: e, text: t, ariaLabel: n, ...i } = this.props;
        return (0, s.jsx)("div", {
            role: null != n ? "img" : void 0,
            "aria-label": n,
            style: { width: i.size, height: i.size, backgroundColor: i.bgColor },
            className: a()(c.qrCodeContainer, e),
            children: (0, s.jsx)(o.default, { value: t, level: "M", ...i }),
        });
    }
}
class m extends r.PureComponent {
    static defaultProps = { size: 144, bgColor: "#ffffff", fgColor: "#000000" };
    render() {
        let { overlaySize: e } = this.props,
            t = u[e ?? "SIZE_40"];
        return (0, s.jsxs)("div", {
            className: c.qrCodeOverlayContainer,
            children: [
                (0, s.jsx)(h, { ...this.props }),
                (0, s.jsx)("div", {
                    className: c.qrCodeOverlay,
                    children: (0, s.jsx)("img", { className: c[t], src: _, alt: "" }),
                }),
            ],
        });
    }
}
let g = h;
