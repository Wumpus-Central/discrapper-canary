r.d(t, { Z: () => m });
var n = r(200651),
    a = r(192379),
    i = r(392711),
    s = r.n(i),
    l = r(481060),
    o = r(481250),
    c = r(513547),
    d = r(388032);
class u extends a.PureComponent {
    render() {
        let { screenshare: e } = this.props;
        if (null == e) return (0, n.jsx)(l.$jN, { type: l.$jN.Type.SPINNING_CIRCLE });
        let t = s().map(e, (e, t) => {
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
        return (0, n.jsx)(l.hjN, {
            tag: l.RB0.H2,
            title: d.NW.string(d.t['gWbr/f']),
            children: (0, o.a)(t)
        });
    }
}
let m = u;
