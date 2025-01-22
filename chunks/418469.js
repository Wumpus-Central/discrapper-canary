r.d(n, {
    Z: function () {
        return f;
    }
});
var i = r(200651);
r(192379);
var a = r(442837),
    o = r(481060),
    s = r(569545),
    l = r(687516),
    u = r(314897),
    c = r(959457),
    d = r(388032);
function f(e, n, f) {
    var p;
    let h = (0, l.Cf)(e),
        _ = (0, a.e7)([u.default], () => u.default.getId()),
        m = null != e ? (0, s.V9)(e) : c.Z.getActiveStreamKey(),
        g = null !== (p = c.Z.getVideoStats(m)) && void 0 !== p ? p : {},
        E = {
            media_session_id: c.Z.getMediaSessionId(m),
            rtc_connection_id: c.Z.getRtcConnectionId(m),
            stream_region: c.Z.getRegion(m),
            max_viewers: c.Z.getMaxViewers(m),
            ...g
        },
        v = () => {
            null == f || f(),
                null != e &&
                    (0, o.openModalLazy)(async () => {
                        let { default: n } = await r.e('18912').then(r.bind(r, 340140));
                        return (r) =>
                            (0, i.jsx)(n, {
                                stream: e,
                                streamApplication: h,
                                isStreamer: _ === (null == e ? void 0 : e.ownerId),
                                analyticsData: E,
                                ...r
                            });
                    });
        };
    return null == e
        ? null
        : (0, i.jsx)(o.MenuItem, {
              id: 'report-stream-problem',
              label: d.intl.string(d.t.sdnCxc),
              action: v
          });
}
