n.d(t, {
    A: () => m,
});
var r = n(627968),
    a = n(64700),
    i = n(735438),
    l = n.n(i),
    s = n(397927),
    o = n(828904),
    d = n(974175),
    c = n(985018);
class u extends a.PureComponent {
    render() {
        let { screenshare: e } = this.props;
        if (null == e)
            return (0, r.jsx)(s.y$y, {
                type: s.y$y.Type.SPINNING_CIRCLE,
            });
        let t = l().map(e, (e, t) => {
            if (!(d.R[t] || void 0 === e))
                return (0, r.jsx)(
                    d.q7,
                    {
                        label: t,
                        value: e,
                    },
                    t,
                );
        });
        return (0, r.jsxs)(s.BJc, {
            children: [
                (0, r.jsx)(s.Heading, {
                    variant: "heading-md/medium",
                    children: c.intl.string(c.t["gWbr/U"]),
                }),
                (0, o.C6)(t),
            ],
        });
    }
}
let m = u;
