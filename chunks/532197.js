"use strict";
n.d(t, { A: () => _ });
var l = n(627968),
    a = n(64700),
    r = n(503698),
    s = n.n(r),
    i = n(397927),
    o = n(262633);
let c = { UP: "up", RIGHT: "right", DOWN: "down", LEFT: "left" },
    d = { [c.UP]: "", [c.RIGHT]: o.pG, [c.DOWN]: o.TR, [c.LEFT]: o.kb };
class u extends a.PureComponent {
    static Directions = c;
    render() {
        let { direction: e, className: t } = this.props;
        return (0, l.jsx)(i.z$m, { size: "md", color: "currentColor", className: s()(t, { [d[e]]: !0 }) });
    }
}
let _ = u;
