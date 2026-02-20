t.d(n, { A: () => A });
var i = t(627968),
    s = t(64700),
    l = t(503698),
    a = t.n(l),
    r = t(397927),
    d = t(262633);
let o = { UP: "up", RIGHT: "right", DOWN: "down", LEFT: "left" },
    c = { [o.UP]: "", [o.RIGHT]: d.pG, [o.DOWN]: d.TR, [o.LEFT]: d.kb };
class u extends s.PureComponent {
    static Directions = o;
    render() {
        let { direction: e, className: n } = this.props;
        return (0, i.jsx)(r.z$m, { size: "md", color: "currentColor", className: a()(n, { [c[e]]: !0 }) });
    }
}
let A = u;
