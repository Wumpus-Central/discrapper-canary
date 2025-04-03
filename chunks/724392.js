r.d(t, { Z: () => u });
var n = r(200651),
    a = r(192379),
    i = r(442837),
    s = r(481060),
    l = r(226961),
    o = r(481250),
    c = r(388032);
class d extends a.PureComponent {
    render() {
        let { outbound: e, context: t } = this.props;
        return null == e
            ? (0, n.jsx)(s.$jN, { type: s.$jN.Type.SPINNING_CIRCLE })
            : (0, n.jsx)(s.hjN, {
                  tag: s.RB0.H2,
                  title: c.NW.string(c.t['3u0gIC']),
                  children: (0, o.V)(e, t)
              });
    }
}
let u = i.ZP.connectStores([l.ZP], (e) => {
    let { context: t, index: r } = e,
        n = l.ZP.getAllStats(t)[r];
    return { outbound: null != n ? n.rtp.outbound : null };
})(d);
