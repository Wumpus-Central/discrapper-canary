n.d(t, { Z: () => d });
var i = n(200651);
n(192379);
var r = n(442837),
    a = n(481060),
    s = n(569545),
    o = n(687516),
    l = n(314897),
    u = n(959457),
    c = n(388032);
function d(e, t, d) {
    var f;
    let _ = (0, o.Cf)(e),
        p = (0, r.e7)([l.default], () => l.default.getId()),
        h = null != e ? (0, s.V9)(e) : u.Z.getActiveStreamKey(),
        m = null !== (f = u.Z.getVideoStats(h)) && void 0 !== f ? f : {},
        g = {
            media_session_id: u.Z.getMediaSessionId(h),
            rtc_connection_id: u.Z.getRtcConnectionId(h),
            stream_region: u.Z.getRegion(h),
            max_viewers: u.Z.getMaxViewers(h),
            ...m
        },
        E = () => {
            null == d || d(),
                null != e &&
                    (0, a.ZDy)(async () => {
                        let { default: t } = await n.e('18912').then(n.bind(n, 340140));
                        return (n) =>
                            (0, i.jsx)(t, {
                                stream: e,
                                streamApplication: _,
                                isStreamer: p === (null == e ? void 0 : e.ownerId),
                                analyticsData: g,
                                ...n
                            });
                    });
        };
    return null == e
        ? null
        : (0, i.jsx)(a.sNh, {
              id: 'report-stream-problem',
              label: c.intl.string(c.t.sdnCxc),
              action: E
          });
}
