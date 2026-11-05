var t = e(477900),
    o = e(582128),
    p = e(503698),
    c = e.n(p),
    n = e(872351),
    i = e(635247);
let a = { UP: "up", RIGHT: "right", DOWN: "down", LEFT: "left" },
    d = { [a.UP]: "", [a.RIGHT]: i.pG, [a.DOWN]: i.TR, [a.LEFT]: i.kb };
class l extends o.PureComponent {
    static Directions = a;
    render() {
        let { direction: r, className: s } = this.props;
        return (0, t.jsx)(n.ArrowSmallUpIcon, { size: "md", color: "currentColor", className: c()(s, { [d[r]]: !0 }) });
    }
}
e.d(s, {}, { A: l });
