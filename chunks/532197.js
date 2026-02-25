"use strict";
n.d(t, { A: () => _ });
var a = n(627968),
    l = n(64700),
    r = n(503698),
    s = n.n(r),
    i = n(397927),
    o = n(515259);
let d = { UP: "up", RIGHT: "right", DOWN: "down", LEFT: "left" },
    c = { [d.UP]: "", [d.RIGHT]: o.pG, [d.DOWN]: o.TR, [d.LEFT]: o.kb };
class u extends l.PureComponent {
    static Directions = d;
    render() {
        let { direction: e, className: t } = this.props;
        return (0, a.jsx)(i.z$m, { size: "md", color: "currentColor", className: s()(t, { [c[e]]: !0 }) });
    }
}
let _ = u;
