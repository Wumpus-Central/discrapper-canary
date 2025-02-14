r.d(t, { Z: () => y }), r(411104);
var n = r(200651),
    a = r(192379),
    i = r(442837),
    l = r(481060),
    s = r(271383),
    o = r(19780),
    d = r(226961),
    c = r(594174),
    u = r(51144),
    m = r(481250),
    p = r(388032);
class h extends a.PureComponent {
    render() {
        let { streams: e, context: t, userId: r, mediaEngineConnectionId: a, videoStreams: i } = this.props;
        if (null == r || null == e || 0 === e.length) return (0, n.jsx)(l.$jN, { type: l.$jN.Type.SPINNING_CIRCLE });
        let d = o.Z.getGuildId(),
            h = c.default.getUser(r),
            y = s.ZP.getNick(d, r),
            g = null == h ? p.intl.string(p.t.SJmZam) : ''.concat(p.intl.string(p.t.SJmZam), ' \u2014 ').concat(null != y ? y : u.ZP.getName(h));
        return (0, n.jsx)(l.hjN, {
            tag: l.RB0.H2,
            title: g,
            children: (0, m.V)(e, t, a, r, i)
        });
    }
}
let y = i.ZP.connectStores([d.ZP], (e) => {
    let { context: t, index: r, videoStreams: n } = e,
        a = d.ZP.getAllStats(t)[r],
        { section: i } = (0, d.fZ)(d.ZP.getSection());
    if (null == i) throw Error('Unrecognized section format');
    let l = null;
    if (null != a && null != a.rtp.inbound) {
        var s;
        l = null !== (s = a.rtp.inbound[i]) && void 0 !== s ? s : [];
    }
    return {
        mediaEngineConnectionId: null == a ? void 0 : a.mediaEngineConnectionId,
        userId: i,
        streams: l,
        videoStreams: n
    };
})(h);
