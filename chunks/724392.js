var n = r(200651),
    a = r(192379),
    i = r(442837),
    l = r(481060),
    s = r(226961),
    o = r(481250),
    c = r(388032);
class d extends a.PureComponent {
    render() {
        let { outbound: e, context: t } = this.props;
        return null == e
            ? (0, n.jsx)(l.Spinner, { type: l.Spinner.Type.SPINNING_CIRCLE })
            : (0, n.jsx)(l.FormSection, {
                  tag: l.FormTitleTags.H2,
                  title: c.intl.string(c.t['3u0gIC']),
                  children: (0, o.V)(e, t)
              });
    }
}
t.Z = i.ZP.connectStores([s.ZP], (e) => {
    let { context: t, index: r } = e,
        n = s.ZP.getAllStats(t)[r];
    return { outbound: null != n ? n.rtp.outbound : null };
})(d);
