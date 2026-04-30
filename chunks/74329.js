n.d(t, { A: () => E });
var i = n(627968);
n(64700);
var l = n(17928),
    a = n(192308),
    r = n(477782),
    s = n(695366),
    o = n(652896),
    d = n(834757),
    u = n(495544),
    c = n(116956),
    h = n(985018);
function E(e, t, E) {
    let A = (0, d.AO)(e),
        _ = (0, l.bG)([u.default], () => u.default.getId());
    if (null == e) return null;
    let p = (0, o._z)(e),
        g = c.A.getVideoStats(p) ?? {},
        f = {
            media_session_id: c.A.getMediaSessionId(p),
            rtc_connection_id: c.A.getRtcConnectionId(p),
            stream_region: c.A.getRegion(p),
            max_viewers: c.A.getMaxViewers(p),
            ...g,
        };
    return (0, i.jsx)(r.Dr, {
        id: "report-stream-problem",
        color: "danger",
        label: h.intl.string(h.t.sdnCxV),
        action: () => {
            E?.(),
                null != e &&
                    (0, a.openModalLazy)(async () => {
                        let { default: t } = await Promise.all([n.e("17171"), n.e("86889")]).then(n.bind(n, 292208));
                        return (n) =>
                            (0, i.jsx)(t, {
                                stream: e,
                                streamApplication: A,
                                isStreamer: _ === e?.ownerId,
                                analyticsData: f,
                                ...n,
                            });
                    });
        },
        icon: s.E,
        leadingAccessory: { type: "icon", icon: s.E },
    });
}
