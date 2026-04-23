t.d(s, { Ay: () => _, Lx: () => f, Zs: () => c });
var r,
    l = t(627968),
    a = t(64700),
    i = t(503698),
    o = t.n(i),
    n = t(366490),
    d = t(101096),
    c = (((r = {}).SIZE_40 = "SIZE_40"), (r.SIZE_60 = "SIZE_60"), r);
let C = Object.freeze({ SIZE_40: "size-40", SIZE_60: "size-60" }),
    u = t(906118);
class x extends a.PureComponent {
    static defaultProps = { size: 128, bgColor: "#ffffff", fgColor: "#000000" };
    render() {
        let { className: e, text: s, ariaLabel: t, ...r } = this.props;
        return (0, l.jsx)("div", {
            role: null != t ? "img" : void 0,
            "aria-label": t,
            style: { width: r.size, height: r.size, backgroundColor: r.bgColor },
            className: o()(d.qrCodeContainer, e),
            children: (0, l.jsx)(n.default, { value: s, level: "M", ...r }),
        });
    }
}
class f extends a.PureComponent {
    static defaultProps = { size: 144, bgColor: "#ffffff", fgColor: "#000000" };
    render() {
        let { overlaySize: e } = this.props,
            s = C[e ?? "SIZE_40"];
        return (0, l.jsxs)("div", {
            className: d.qrCodeOverlayContainer,
            children: [
                (0, l.jsx)(x, { ...this.props }),
                (0, l.jsx)("div", {
                    className: d.qrCodeOverlay,
                    children: (0, l.jsx)("img", { className: d[s], src: u, alt: "" }),
                }),
            ],
        });
    }
}
let _ = x;
