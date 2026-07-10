"use strict";
n.d(t, { Ay: () => h, Lx: () => A, Zs: () => c });
var i,
    r = n(627968),
    a = n(64700),
    s = n(503698),
    l = n.n(s),
    o = n(198419),
    d = n(101096),
    c = (((i = {}).SIZE_40 = "SIZE_40"), (i.SIZE_60 = "SIZE_60"), i);
let u = Object.freeze({ SIZE_40: "size-40", SIZE_60: "size-60" }),
    _ = n(906118);
class E extends a.PureComponent {
    static defaultProps = { size: 128, bgColor: "#ffffff", fgColor: "#000000" };
    render() {
        let { className: e, text: t, ariaLabel: n, ...i } = this.props;
        return (0, r.jsx)("div", {
            role: null != n ? "img" : void 0,
            "aria-label": n,
            style: { width: i.size, height: i.size, backgroundColor: i.bgColor },
            className: l()(d.qrCodeContainer, e),
            children: (0, r.jsx)(o.default, { value: t, level: "M", ...i }),
        });
    }
}
class A extends a.PureComponent {
    static defaultProps = { size: 144, bgColor: "#ffffff", fgColor: "#000000" };
    render() {
        let { overlaySize: e } = this.props,
            t = u[e ?? "SIZE_40"];
        return (0, r.jsxs)("div", {
            className: d.qrCodeOverlayContainer,
            children: [
                (0, r.jsx)(E, { ...this.props }),
                (0, r.jsx)("div", {
                    className: d.qrCodeOverlay,
                    children: (0, r.jsx)("img", { className: d[t], src: _, alt: "" }),
                }),
            ],
        });
    }
}
let h = E;
