n.d(t, { A: () => h });
var s = n(627968),
    i = n(64700),
    r = n(503698),
    l = n.n(r),
    o = n(397927),
    a = n(262633);
let c = { UP: "up", RIGHT: "right", DOWN: "down", LEFT: "left" },
    d = { [c.UP]: "", [c.RIGHT]: a.pG, [c.DOWN]: a.TR, [c.LEFT]: a.kb };
class u extends i.PureComponent {
    static Directions = c;
    render() {
        let { direction: e, className: t } = this.props;
        return (0, s.jsx)(o.z$m, { size: "md", color: "currentColor", className: l()(t, { [d[e]]: !0 }) });
    }
}
let h = u;
