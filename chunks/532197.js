n.d(t, { A: () => A });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(397927),
    d = n(262633);
let o = { UP: "up", RIGHT: "right", DOWN: "down", LEFT: "left" },
    c = { [o.UP]: "", [o.RIGHT]: d.pG, [o.DOWN]: d.TR, [o.LEFT]: d.kb };
class u extends s.PureComponent {
    static Directions = o;
    render() {
        let { direction: e, className: t } = this.props;
        return (0, i.jsx)(r.z$m, { size: "md", color: "currentColor", className: a()(t, { [c[e]]: !0 }) });
    }
}
let A = u;
