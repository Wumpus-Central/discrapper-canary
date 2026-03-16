n.d(t, { A: () => m });
var i = n(627968),
    s = n(64700),
    r = n(503698),
    l = n.n(r),
    a = n(397927),
    o = n(262633);
let d = { UP: "up", RIGHT: "right", DOWN: "down", LEFT: "left" },
    c = { [d.UP]: "", [d.RIGHT]: o.pG, [d.DOWN]: o.TR, [d.LEFT]: o.kb };
class u extends s.PureComponent {
    static Directions = d;
    render() {
        let { direction: e, className: t } = this.props;
        return (0, i.jsx)(a.z$m, { size: "md", color: "currentColor", className: l()(t, { [c[e]]: !0 }) });
    }
}
let m = u;
