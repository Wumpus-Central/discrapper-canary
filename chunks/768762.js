n.d(t, { Z: () => _ });
var r,
    i = n(54381),
    a = n(473749),
    o = n(120356),
    s = n.n(o),
    l = n(481060),
    c = n(192754);
function u(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let d = {
        UP: "up",
        RIGHT: "right",
        DOWN: "down",
        LEFT: "left",
    },
    f = {
        [d.UP]: "",
        [d.RIGHT]: c.right,
        [d.DOWN]: c.down,
        [d.LEFT]: c.left,
    };
class p extends (r = a.PureComponent) {
    render() {
        let { direction: e, className: t } = this.props;
        return (0, i.jsx)(l.wj7, {
            size: "md",
            color: "currentColor",
            className: s()(t, { [f[e]]: !0 }),
        });
    }
}
u(p, "Directions", d);
let _ = p;
