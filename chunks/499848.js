r.d(t, { Z: () => y }), r(411104);
var n = r(200651),
    a = r(192379),
    i = r(442837),
    s = r(481060),
    l = r(271383),
    o = r(19780),
    c = r(226961),
    d = r(594174),
    u = r(51144),
    m = r(481250),
    p = r(388032);
class h extends a.PureComponent {
    render() {
        let { streams: e, context: t, userId: r, mediaEngineConnectionId: a, videoStreams: i } = this.props;
        if (null == r || null == e || 0 === e.length) return (0, n.jsx)(s.$jN, { type: s.$jN.Type.SPINNING_CIRCLE });
        let c = o.ZP.getGuildId(),
            h = d.default.getUser(r),
            y = l.ZP.getNick(c, r),
            g = null == h ? p.NW.string(p.t.SJmZam) : ''.concat(p.NW.string(p.t.SJmZam), ' \u2014 ').concat(null != y ? y : u.ZP.getName(h));
        return (0, n.jsx)(s.hjN, {
            tag: s.RB0.H2,
            title: g,
            children: (0, m.V)(e, t, a, r, i)
        });
    }
}
let y = i.ZP.connectStores([c.ZP], (e) => {
    let { context: t, index: r, videoStreams: n } = e,
        a = c.ZP.getAllStats(t)[r],
        { section: i } = (0, c.fZ)(c.ZP.getSection());
    if (null == i) throw Error('Unrecognized section format');
    let s = null;
    if (null != a && null != a.rtp.inbound) {
        var l;
        s = null != (l = a.rtp.inbound[i]) ? l : [];
    }
    return {
        mediaEngineConnectionId: null == a ? void 0 : a.mediaEngineConnectionId,
        userId: i,
        streams: s,
        videoStreams: n
    };
})(h);
