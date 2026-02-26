t.d(n, { A: () => A });
var i = t(627968),
    s = t(64700),
    l = t(503698),
    a = t.n(l),
    r = t(397927),
    d = t(515259);
let c = { UP: "up", RIGHT: "right", DOWN: "down", LEFT: "left" },
    o = { [c.UP]: "", [c.RIGHT]: d.pG, [c.DOWN]: d.TR, [c.LEFT]: d.kb };
class u extends s.PureComponent {
    static Directions = c;
    render() {
        let { direction: e, className: n } = this.props;
        return (0, i.jsx)(r.z$m, { size: "md", color: "currentColor", className: a()(n, { [o[e]]: !0 }) });
    }
}
let A = u;
