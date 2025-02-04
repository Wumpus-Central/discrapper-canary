n.d(t, { Z: () => f });
var i = n(200651);
n(192379);
var r = n(442837),
    a = n(481060),
    s = n(569545),
    o = n(687516),
    l = n(314897),
    u = n(959457),
    c = n(682901),
    d = n(388032);
function f(e, t, f) {
    var _;
    let { enabled: p } = (0, c.Z)({ location: 'ReportProblemItem' }),
        h = (0, o.Cf)(e),
        m = (0, r.e7)([l.default], () => l.default.getId()),
        g = null != e ? (0, s.V9)(e) : u.Z.getActiveStreamKey(),
        E = null !== (_ = u.Z.getVideoStats(g)) && void 0 !== _ ? _ : {},
        v = {
            media_session_id: u.Z.getMediaSessionId(g),
            rtc_connection_id: u.Z.getRtcConnectionId(g),
            stream_region: u.Z.getRegion(g),
            max_viewers: u.Z.getMaxViewers(g),
            ...E
        },
        y = () => {
            null == f || f(),
                null != e &&
                    (0, a.ZDy)(async () => {
                        let { default: t } = await n.e('18912').then(n.bind(n, 340140));
                        return (n) =>
                            (0, i.jsx)(t, {
                                stream: e,
                                streamApplication: h,
                                isStreamer: m === (null == e ? void 0 : e.ownerId),
                                analyticsData: v,
                                ...n
                            });
                    });
        };
    return null == e
        ? null
        : p
          ? (0, i.jsx)(a.sNh, {
                id: 'report-stream-problem',
                color: 'danger',
                label: d.intl.string(d.t.sdnCxc),
                action: y,
                icon: a.P4T
            })
          : (0, i.jsx)(a.sNh, {
                id: 'report-stream-problem',
                label: d.intl.string(d.t.sdnCxc),
                action: y
            });
}
