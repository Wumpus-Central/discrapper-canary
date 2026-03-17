n.d(t, { A: () => _ });
var a = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    i = n(397927),
    o = n(262633);
let d = { UP: "up", RIGHT: "right", DOWN: "down", LEFT: "left" },
    c = { [d.UP]: "", [d.RIGHT]: o.pG, [d.DOWN]: o.TR, [d.LEFT]: o.kb };
class u extends l.PureComponent {
    static Directions = d;
    render() {
        let { direction: e, className: t } = this.props;
        return (0, a.jsx)(i.z$m, { size: "md", color: "currentColor", className: r()(t, { [c[e]]: !0 }) });
    }
}
let _ = u;
