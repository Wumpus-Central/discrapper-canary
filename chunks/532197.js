n.d(t, {
    A: () => f,
});
var r,
    i,
    l = n(627968),
    a = n(64700),
    s = n(503698),
    o = n.n(s),
    c = n(397927),
    u = n(262633);
let d = {
        UP: "up",
        RIGHT: "right",
        DOWN: "down",
        LEFT: "left",
    },
    p = {
        [d.UP]: "",
        [d.RIGHT]: u.pG,
        [d.DOWN]: u.TR,
        [d.LEFT]: u.kb,
    };
class m extends (i = a.PureComponent) {
    render() {
        let { direction: e, className: t } = this.props;
        return (0, l.jsx)(c.z$m, {
            size: "md",
            color: "currentColor",
            className: o()(t, {
                [p[e]]: !0,
            }),
        });
    }
}
(r = "Directions") in m
    ? Object.defineProperty(m, r, {
          value: d,
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (m[r] = d);
let f = m;
