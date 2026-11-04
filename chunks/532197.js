var t = r(477900),
    p = r(582128),
    c = r(503698),
    i = r.n(c),
    n = r(872351),
    o = r(635247);
let a = { UP: "up", RIGHT: "right", DOWN: "down", LEFT: "left" },
    d = { [a.UP]: "", [a.RIGHT]: o.pG, [a.DOWN]: o.TR, [a.LEFT]: o.kb };
class u extends p.PureComponent {
    static Directions = a;
    render() {
        let { direction: s, className: e } = this.props;
        return (0, t.jsx)(n.z, { size: "md", color: "currentColor", className: i()(e, { [d[s]]: !0 }) });
    }
}
r.d(e, {}, { A: u });
