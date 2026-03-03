n.d(t, { A: () => A });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(397927),
    d = n(262633);
let o = { UP: "up", RIGHT: "right", DOWN: "down", LEFT: "left" },
    c = { [o.UP]: "", [o.RIGHT]: d.pG, [o.DOWN]: d.TR, [o.LEFT]: d.kb };
class u extends s.PureComponent {
    static Directions = o;
    render() {
        let { direction: e, className: t } = this.props;
        return (0, i.jsx)(a.z$m, { size: "md", color: "currentColor", className: r()(t, { [c[e]]: !0 }) });
    }
}
let A = u;
