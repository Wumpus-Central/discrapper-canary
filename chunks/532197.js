"use strict";
n.d(t, { A: () => u });
var s = n(627968),
    i = n(64700),
    r = n(503698),
    l = n.n(r),
    a = n(397927),
    o = n(262633);
let d = { UP: "up", RIGHT: "right", DOWN: "down", LEFT: "left" },
    h = { [d.UP]: "", [d.RIGHT]: o.pG, [d.DOWN]: o.TR, [d.LEFT]: o.kb };
class c extends i.PureComponent {
    static Directions = d;
    render() {
        let { direction: e, className: t } = this.props;
        return (0, s.jsx)(a.z$m, { size: "md", color: "currentColor", className: l()(t, { [h[e]]: !0 }) });
    }
}
let u = c;
