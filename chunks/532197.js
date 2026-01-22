n.d(t, {
    A: () => _,
});
var r,
    i = n(627968),
    a = n(64700),
    s = n(503698),
    o = n.n(s),
    l = n(397927),
    c = n(262633);

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
        [d.RIGHT]: c.pG,
        [d.DOWN]: c.TR,
        [d.LEFT]: c.kb,
    };
class p extends (r = a.PureComponent) {
    render() {
        let { direction: e, className: t } = this.props;
        return (0, i.jsx)(l.z$m, {
            size: "md",
            color: "currentColor",
            className: o()(t, {
                [f[e]]: !0,
            }),
        });
    }
}
u(p, "Directions", d);
let _ = p;
