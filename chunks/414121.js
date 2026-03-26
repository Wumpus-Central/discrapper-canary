"use strict";
n.d(t, { Ay: () => g, Lx: () => p, Zs: () => c });
var i,
    s = n(627968),
    r = n(64700),
    l = n(503698),
    a = n.n(l),
    o = n(617829),
    d = n(788888),
    c = (((i = {}).SIZE_40 = "SIZE_40"), (i.SIZE_60 = "SIZE_60"), i);
let u = Object.freeze({ SIZE_40: "size-40", SIZE_60: "size-60" }),
    h = n(906118);
class _ extends r.PureComponent {
    static defaultProps = { size: 128, bgColor: "#ffffff", fgColor: "#000000" };
    render() {
        let { className: e, text: t, ...n } = this.props;
        return (0, s.jsx)("div", {
            style: { width: n.size, height: n.size, backgroundColor: n.bgColor },
            className: a()(d.qrCodeContainer, e),
            children: (0, s.jsx)(o.default, { value: t, level: "M", ...n }),
        });
    }
}
class p extends r.PureComponent {
    static defaultProps = { size: 144, bgColor: "#ffffff", fgColor: "#000000" };
    render() {
        let { overlaySize: e } = this.props,
            t = u[e ?? "SIZE_40"];
        return (0, s.jsxs)("div", {
            className: d.qrCodeOverlayContainer,
            children: [
                (0, s.jsx)(_, { ...this.props }),
                (0, s.jsx)("div", {
                    className: d.qrCodeOverlay,
                    children: (0, s.jsx)("img", { className: d[t], src: h, alt: "" }),
                }),
            ],
        });
    }
}
let g = _;
