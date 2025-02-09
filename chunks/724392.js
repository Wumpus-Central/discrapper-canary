n.d(t, { Z: () => u });
var r = n(200651),
    a = n(192379),
    i = n(442837),
    o = n(481060),
    l = n(226961),
    s = n(481250),
    d = n(388032);
class c extends a.PureComponent {
    render() {
        let { outbound: e, context: t } = this.props;
        return null == e
            ? (0, r.jsx)(o.$jN, { type: o.$jN.Type.SPINNING_CIRCLE })
            : (0, r.jsx)(o.hjN, {
                  tag: o.RB0.H2,
                  title: d.intl.string(d.t['3u0gIC']),
                  children: (0, s.V)(e, t)
              });
    }
}
let u = i.ZP.connectStores([l.ZP], (e) => {
    let { context: t, index: n } = e,
        r = l.ZP.getAllStats(t)[n];
    return { outbound: null != r ? r.rtp.outbound : null };
})(c);
