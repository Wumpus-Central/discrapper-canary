r.d(t, { Z: () => y });
var n,
    a,
    l = r(255367),
    i = r(73800),
    o = r(120356),
    s = r.n(o),
    c = r(481060),
    u = r(192754);
let d = {
        UP: "up",
        RIGHT: "right",
        DOWN: "down",
        LEFT: "left",
    },
    p = {
        [d.UP]: "",
        [d.RIGHT]: u.right,
        [d.DOWN]: u.down,
        [d.LEFT]: u.left,
    };
class f extends (a = i.PureComponent) {
    render() {
        let { direction: e, className: t } = this.props;
        return (0, l.jsx)(c.wj7, {
            size: "md",
            color: "currentColor",
            className: s()(t, { [p[e]]: !0 }),
        });
    }
}
(n = "Directions") in f
    ? Object.defineProperty(f, n, {
          value: d,
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (f[n] = d);
let y = f;
