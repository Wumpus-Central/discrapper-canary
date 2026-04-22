a.d(t, { A: () => h });
var n = a(627968),
    l = a(64700),
    i = a(503698),
    s = a.n(i),
    r = a(872351),
    o = a(590900);
let c = { UP: "up", RIGHT: "right", DOWN: "down", LEFT: "left" },
    d = { [c.UP]: "", [c.RIGHT]: o.pG, [c.DOWN]: o.TR, [c.LEFT]: o.kb };
class u extends l.PureComponent {
    static Directions = c;
    render() {
        let { direction: e, className: t } = this.props;
        return (0, n.jsx)(r.z, { size: "md", color: "currentColor", className: s()(t, { [d[e]]: !0 }) });
    }
}
let h = u;
