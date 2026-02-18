t.d(n, { A: () => A });
var s = t(627968),
    i = t(64700),
    l = t(503698),
    r = t.n(l),
    a = t(397927),
    d = t(262633);
let o = { UP: "up", RIGHT: "right", DOWN: "down", LEFT: "left" },
    c = { [o.UP]: "", [o.RIGHT]: d.pG, [o.DOWN]: d.TR, [o.LEFT]: d.kb };
class u extends i.PureComponent {
    static Directions = o;
    render() {
        let { direction: e, className: n } = this.props;
        return (0, s.jsx)(a.z$m, { size: "md", color: "currentColor", className: r()(n, { [c[e]]: !0 }) });
    }
}
let A = u;
