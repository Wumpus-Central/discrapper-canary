n.d(t, { Z: () => m });
var r = n(200651),
    a = n(192379),
    i = n(392711),
    o = n.n(i),
    l = n(481060),
    s = n(481250),
    d = n(513547),
    c = n(388032);
class u extends a.PureComponent {
    render() {
        let { screenshare: e } = this.props;
        if (null == e) return (0, r.jsx)(l.$jN, { type: l.$jN.Type.SPINNING_CIRCLE });
        let t = o().map(e, (e, t) => {
            if (!(d.al[t] || void 0 === e))
                return (0, r.jsx)(
                    d.ck,
                    {
                        label: t,
                        value: e
                    },
                    t
                );
        });
        return (0, r.jsx)(l.hjN, {
            tag: l.RB0.H2,
            title: c.intl.string(c.t['gWbr/f']),
            children: (0, s.a)(t)
        });
    }
}
let m = u;
