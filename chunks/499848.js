n.d(t, { Z: () => g }), n(411104);
var r = n(200651),
    a = n(192379),
    i = n(442837),
    o = n(481060),
    l = n(271383),
    s = n(19780),
    d = n(226961),
    c = n(594174),
    u = n(51144),
    m = n(481250),
    p = n(388032);
class h extends a.PureComponent {
    render() {
        let { streams: e, context: t, userId: n, mediaEngineConnectionId: a, videoStreams: i } = this.props;
        if (null == n || null == e || 0 === e.length) return (0, r.jsx)(o.$jN, { type: o.$jN.Type.SPINNING_CIRCLE });
        let d = s.Z.getGuildId(),
            h = c.default.getUser(n),
            g = l.ZP.getNick(d, n),
            b = null == h ? p.intl.string(p.t.SJmZam) : ''.concat(p.intl.string(p.t.SJmZam), ' \u2014 ').concat(null != g ? g : u.ZP.getName(h));
        return (0, r.jsx)(o.hjN, {
            tag: o.RB0.H2,
            title: b,
            children: (0, m.V)(e, t, a, n, i)
        });
    }
}
let g = i.ZP.connectStores([d.ZP], (e) => {
    let { context: t, index: n, videoStreams: r } = e,
        a = d.ZP.getAllStats(t)[n],
        { section: i } = (0, d.fZ)(d.ZP.getSection());
    if (null == i) throw Error('Unrecognized section format');
    let o = null;
    if (null != a && null != a.rtp.inbound) {
        var l;
        o = null !== (l = a.rtp.inbound[i]) && void 0 !== l ? l : [];
    }
    return {
        mediaEngineConnectionId: null == a ? void 0 : a.mediaEngineConnectionId,
        userId: i,
        streams: o,
        videoStreams: r
    };
})(h);
