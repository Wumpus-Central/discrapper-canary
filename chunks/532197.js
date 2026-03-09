"use strict";
n.d(t, { A: () => _ });
var a = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    i = n(397927),
    o = n(262633);
let c = { UP: "up", RIGHT: "right", DOWN: "down", LEFT: "left" },
    d = { [c.UP]: "", [c.RIGHT]: o.pG, [c.DOWN]: o.TR, [c.LEFT]: o.kb };
class u extends l.PureComponent {
    static Directions = c;
    render() {
        let { direction: e, className: t } = this.props;
        return (0, a.jsx)(i.z$m, { size: "md", color: "currentColor", className: r()(t, { [d[e]]: !0 }) });
    }
}
let _ = u;
