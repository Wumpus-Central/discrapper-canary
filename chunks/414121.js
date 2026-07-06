r.d(s, { Ay: () => u, Lx: () => h, Zs: () => c });
var l,
    t = r(627968),
    a = r(64700),
    o = r(503698),
    i = r.n(o),
    d = r(198419),
    n = r(395688),
    c = (((l = {}).SIZE_40 = "SIZE_40"), (l.SIZE_60 = "SIZE_60"), l);
let f = Object.freeze({ SIZE_40: "size-40", SIZE_60: "size-60" }),
    p = r(906118);
class C extends a.PureComponent {
    static defaultProps = { size: 128, bgColor: "#ffffff", fgColor: "#000000" };
    render() {
        let { className: e, text: s, ariaLabel: r, ...l } = this.props;
        return (0, t.jsx)("div", {
            role: null != r ? "img" : void 0,
            "aria-label": r,
            style: { width: l.size, height: l.size, backgroundColor: l.bgColor },
            className: i()(n.qrCodeContainer, e),
            children: (0, t.jsx)(d.default, { value: s, level: "M", ...l }),
        });
    }
}
class h extends a.PureComponent {
    static defaultProps = { size: 144, bgColor: "#ffffff", fgColor: "#000000" };
    render() {
        let { overlaySize: e } = this.props,
            s = f[e ?? "SIZE_40"];
        return (0, t.jsxs)("div", {
            className: n.qrCodeOverlayContainer,
            children: [
                (0, t.jsx)(C, { ...this.props }),
                (0, t.jsx)("div", {
                    className: n.qrCodeOverlay,
                    children: (0, t.jsx)("img", { className: n[s], src: p, alt: "" }),
                }),
            ],
        });
    }
}
let u = C;
