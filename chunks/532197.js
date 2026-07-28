t.d(s, { A: () => u });
var r = t(477900),
    p = t(582128),
    c = t(503698),
    i = t.n(c),
    n = t(872351),
    o = t(911884);
let a = { UP: "up", RIGHT: "right", DOWN: "down", LEFT: "left" },
    d = { [a.UP]: "", [a.RIGHT]: o.pG, [a.DOWN]: o.TR, [a.LEFT]: o.kb };
class l extends p.PureComponent {
    static Directions = a;
    render() {
        let { direction: e, className: s } = this.props;
        return (0, r.jsx)(n.z, { size: "md", color: "currentColor", className: i()(s, { [d[e]]: !0 }) });
    }
}
let u = l;
