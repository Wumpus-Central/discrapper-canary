var l,
    o = r(477900),
    a = r(582128),
    t = r(503698),
    i = r.n(t),
    d = r(322307),
    n = r(596835),
    c = (((l = {}).SIZE_40 = "SIZE_40"), (l.SIZE_60 = "SIZE_60"), l);
let p = Object.freeze({ SIZE_40: "size-40", SIZE_60: "size-60" }),
    f = r(906118);
class C extends a.PureComponent {
    static defaultProps = { size: 128, bgColor: "#ffffff", fgColor: "#000000" };
    render() {
        let { className: e, text: s, ariaLabel: r, ...l } = this.props;
        return (0, o.jsx)("div", {
            role: null != r ? "img" : void 0,
            "aria-label": r,
            style: { width: l.size, height: l.size, backgroundColor: l.bgColor },
            className: i()(n.qrCodeContainer, e),
            children: (0, o.jsx)(d.A, { value: s, level: "M", ...l }),
        });
    }
}
class h extends a.PureComponent {
    static defaultProps = { size: 144, bgColor: "#ffffff", fgColor: "#000000" };
    render() {
        let { overlaySize: e } = this.props,
            s = p[e ?? "SIZE_40"];
        return (0, o.jsxs)("div", {
            className: n.qrCodeOverlayContainer,
            children: [
                (0, o.jsx)(C, { ...this.props }),
                (0, o.jsx)("div", {
                    className: n.qrCodeOverlay,
                    children: (0, o.jsx)("img", { className: n[s], src: f, alt: "" }),
                }),
            ],
        });
    }
}
r.d(s, {}, { Ay: C, Lx: h, Zs: c });
