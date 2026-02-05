r.d(t, { A: () => m });
var n = r(627968),
    a = r(64700),
    i = r(735438),
    s = r.n(i),
    l = r(397927),
    o = r(828904),
    d = r(974175),
    c = r(985018);
class u extends a.PureComponent {
    render() {
        let { screenshare: e } = this.props;
        if (null == e) return (0, n.jsx)(l.y$y, { type: l.y$y.Type.SPINNING_CIRCLE });
        let t = s().map(e, (e, t) => {
            if (!(d.R[t] || void 0 === e)) return (0, n.jsx)(d.q7, { label: t, value: e }, t);
        });
        return (0, n.jsxs)(l.BJc, {
            children: [
                (0, n.jsx)(l.Heading, { variant: "heading-md/medium", children: c.intl.string(c.t["gWbr/U"]) }),
                (0, o.C6)(t),
            ],
        });
    }
}
let m = u;
