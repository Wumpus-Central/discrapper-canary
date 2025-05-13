r.d(t, { Z: () => m });
var n = r(255367),
    a = r(73800),
    i = r(392711),
    l = r.n(i),
    s = r(481060),
    o = r(481250),
    c = r(513547),
    d = r(388032);
class u extends a.PureComponent {
    render() {
        let { screenshare: e } = this.props;
        if (null == e) return (0, n.jsx)(s.$jN, { type: s.$jN.Type.SPINNING_CIRCLE });
        let t = l().map(e, (e, t) => {
            if (!(c.al[t] || void 0 === e))
                return (0, n.jsx)(
                    c.ck,
                    {
                        label: t,
                        value: e
                    },
                    t
                );
        });
        return (0, n.jsx)(s.hjN, {
            tag: s.RB0.H2,
            title: d.intl.string(d.t['gWbr/f']),
            children: (0, o.a)(t)
        });
    }
}
let m = u;
