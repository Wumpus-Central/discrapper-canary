n.d(t, { Ay: () => g, Lx: () => m, Zs: () => c });
var r,
    l = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(386689),
    u = n(395688),
    c = (((r = {}).SIZE_40 = "SIZE_40"), (r.SIZE_60 = "SIZE_60"), r);
let d = Object.freeze({ SIZE_40: "size-40", SIZE_60: "size-60" }),
    _ = n(906118);
class h extends i.PureComponent {
    static defaultProps = { size: 128, bgColor: "#ffffff", fgColor: "#000000" };
    render() {
        let { className: e, text: t, ariaLabel: n, ...r } = this.props;
        return (0, l.jsx)("div", {
            role: null != n ? "img" : void 0,
            "aria-label": n,
            style: { width: r.size, height: r.size, backgroundColor: r.bgColor },
            className: s()(u.qrCodeContainer, e),
            children: (0, l.jsx)(o.default, { value: t, level: "M", ...r }),
        });
    }
}
class m extends i.PureComponent {
    static defaultProps = { size: 144, bgColor: "#ffffff", fgColor: "#000000" };
    render() {
        let { overlaySize: e } = this.props,
            t = d[e ?? "SIZE_40"];
        return (0, l.jsxs)("div", {
            className: u.qrCodeOverlayContainer,
            children: [
                (0, l.jsx)(h, { ...this.props }),
                (0, l.jsx)("div", {
                    className: u.qrCodeOverlay,
                    children: (0, l.jsx)("img", { className: u[t], src: _, alt: "" }),
                }),
            ],
        });
    }
}
let g = h;
