r.d(t, { Z: () => u });
var n = r(200651),
    a = r(192379),
    i = r(442837),
    l = r(481060),
    s = r(226961),
    o = r(481250),
    d = r(388032);
class c extends a.PureComponent {
    render() {
        let { outbound: e, context: t } = this.props;
        return null == e
            ? (0, n.jsx)(l.$jN, { type: l.$jN.Type.SPINNING_CIRCLE })
            : (0, n.jsx)(l.hjN, {
                  tag: l.RB0.H2,
                  title: d.intl.string(d.t['3u0gIC']),
                  children: (0, o.V)(e, t)
              });
    }
}
let u = i.ZP.connectStores([s.ZP], (e) => {
    let { context: t, index: r } = e,
        n = s.ZP.getAllStats(t)[r];
    return { outbound: null != n ? n.rtp.outbound : null };
})(c);
