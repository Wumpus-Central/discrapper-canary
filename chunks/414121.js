"use strict";
n.d(t, { Ay: () => p, Lx: () => f, Zs: () => c });
var i,
    r = n(627968),
    s = n(64700),
    a = n(503698),
    o = n.n(a),
    l = n(167574),
    u = n(395688),
    c = (((i = {}).SIZE_40 = "SIZE_40"), (i.SIZE_60 = "SIZE_60"), i);
let d = Object.freeze({ SIZE_40: "size-40", SIZE_60: "size-60" }),
    _ = n(906118);
class h extends s.PureComponent {
    static defaultProps = { size: 128, bgColor: "#ffffff", fgColor: "#000000" };
    render() {
        let { className: e, text: t, ariaLabel: n, ...i } = this.props;
        return (0, r.jsx)("div", {
            role: null != n ? "img" : void 0,
            "aria-label": n,
            style: { width: i.size, height: i.size, backgroundColor: i.bgColor },
            className: o()(u.qrCodeContainer, e),
            children: (0, r.jsx)(l.default, { value: t, level: "M", ...i }),
        });
    }
}
class f extends s.PureComponent {
    static defaultProps = { size: 144, bgColor: "#ffffff", fgColor: "#000000" };
    render() {
        let { overlaySize: e } = this.props,
            t = d[e ?? "SIZE_40"];
        return (0, r.jsxs)("div", {
            className: u.qrCodeOverlayContainer,
            children: [
                (0, r.jsx)(h, { ...this.props }),
                (0, r.jsx)("div", {
                    className: u.qrCodeOverlay,
                    children: (0, r.jsx)("img", { className: u[t], src: _, alt: "" }),
                }),
            ],
        });
    }
}
let p = h;
