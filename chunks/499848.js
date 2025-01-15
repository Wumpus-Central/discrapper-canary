r(411104);
var n = r(200651),
    a = r(192379),
    i = r(442837),
    l = r(481060),
    s = r(271383),
    o = r(19780),
    c = r(226961),
    d = r(594174),
    u = r(51144),
    m = r(481250),
    p = r(388032);
class h extends a.PureComponent {
    render() {
        let { streams: e, context: t, userId: r, mediaEngineConnectionId: a, videoStreams: i } = this.props;
        if (null == r || null == e || 0 === e.length) return (0, n.jsx)(l.Spinner, { type: l.Spinner.Type.SPINNING_CIRCLE });
        let c = o.Z.getGuildId(),
            h = d.default.getUser(r),
            g = s.ZP.getNick(c, r),
            f = null == h ? p.intl.string(p.t.SJmZam) : ''.concat(p.intl.string(p.t.SJmZam), ' \u2014 ').concat(null != g ? g : u.ZP.getName(h));
        return (0, n.jsx)(l.FormSection, {
            tag: l.FormTitleTags.H2,
            title: f,
            children: (0, m.V)(e, t, a, r, i)
        });
    }
}
t.Z = i.ZP.connectStores([c.ZP], (e) => {
    let { context: t, index: r, videoStreams: n } = e,
        a = c.ZP.getAllStats(t)[r],
        { section: i } = (0, c.fZ)(c.ZP.getSection());
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
