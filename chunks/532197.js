"use strict";
n.d(t, { A: () => h });
var i = n(627968),
    a = n(64700),
    s = n(503698),
    l = n.n(s),
    r = n(872351),
    o = n(590900);
let c = { UP: "up", RIGHT: "right", DOWN: "down", LEFT: "left" },
    d = { [c.UP]: "", [c.RIGHT]: o.pG, [c.DOWN]: o.TR, [c.LEFT]: o.kb };
class u extends a.PureComponent {
    static Directions = c;
    render() {
        let { direction: e, className: t } = this.props;
        return (0, i.jsx)(r.z, { size: "md", color: "currentColor", className: l()(t, { [d[e]]: !0 }) });
    }
}
let h = u;
