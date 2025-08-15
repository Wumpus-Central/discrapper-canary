r.d(t, { Z: () => f }), r(415506);
var n = r(951288),
    a = r(647438),
    i = r(442837),
    l = r(481060),
    o = r(271383),
    s = r(19780),
    c = r(226961),
    d = r(594174),
    u = r(51144),
    m = r(481250),
    p = r(388032);
class h extends a.PureComponent {
    render() {
        let { streams: e, context: t, userId: r, mediaEngineConnectionId: a, videoStreams: i } = this.props;
        if (null == r || null == e || 0 === e.length) return (0, n.jsx)(l.$jN, { type: l.$jN.Type.SPINNING_CIRCLE });
        let c = s.Z.getGuildId(),
            h = d.default.getUser(r),
            f = o.ZP.getNick(c, r),
            y =
                null == h
                    ? p.intl.string(p.t.SJmZam)
                    : "".concat(p.intl.string(p.t.SJmZam), " \u2014 ").concat(null != f ? f : u.ZP.getName(h));
        return (0, n.jsx)(l.hjN, {
            tag: l.RB0.H2,
            title: y,
            children: (0, m.V)(e, t, a, r, i),
        });
    }
}
let f = i.ZP.connectStores([c.ZP], (e) => {
    let { context: t, index: r, videoStreams: n } = e,
        a = c.ZP.getAllStats(t)[r],
        { section: i } = (0, c.fZ)(c.ZP.getSection());
    if (null == i) throw Error("Unrecognized section format");
    let l = null;
    if (null != a && null != a.rtp.inbound) {
        var o;
        l = null != (o = a.rtp.inbound[i]) ? o : [];
    }
    return {
        mediaEngineConnectionId: null == a ? void 0 : a.mediaEngineConnectionId,
        userId: i,
        streams: l,
        videoStreams: n,
    };
})(h);
