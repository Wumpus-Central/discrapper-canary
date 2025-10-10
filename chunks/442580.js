n.d(t, { Z: () => m });
var r = n(951288),
    a = n(647438),
    i = n(392711),
    l = n.n(i),
    o = n(481060),
    s = n(481250),
    c = n(513547),
    d = n(388032);
class u extends a.PureComponent {
    render() {
        let { screenshare: e } = this.props;
        if (null == e) return (0, r.jsx)(o.$jN, { type: o.$jN.Type.SPINNING_CIRCLE });
        let t = l().map(e, (e, t) => {
            if (!(c.al[t] || void 0 === e))
                return (0, r.jsx)(
                    c.ck,
                    {
                        label: t,
                        value: e,
                    },
                    t,
                );
        });
        return (0, r.jsxs)(o.Kqy, {
            children: [
                (0, r.jsx)(o.X6q, {
                    variant: "heading-md/medium",
                    children: d.intl.string(d.t["gWbr/f"]),
                }),
                (0, s.VE)(t),
            ],
        });
    }
}
let m = u;
