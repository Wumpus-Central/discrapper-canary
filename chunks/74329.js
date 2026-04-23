n.d(t, { A: () => E });
var i = n(627968);
n(64700);
var r = n(17928),
    l = n(192308),
    a = n(477782),
    s = n(695366),
    o = n(652896),
    d = n(834757),
    u = n(495544),
    c = n(116956),
    h = n(985018);
function E(e, t, E) {
    let _ = (0, d.AO)(e),
        p = (0, r.bG)([u.default], () => u.default.getId());
    if (null == e) return null;
    let A = (0, o._z)(e),
        f = c.A.getVideoStats(A) ?? {},
        g = {
            media_session_id: c.A.getMediaSessionId(A),
            rtc_connection_id: c.A.getRtcConnectionId(A),
            stream_region: c.A.getRegion(A),
            max_viewers: c.A.getMaxViewers(A),
            ...f,
        };
    return (0, i.jsx)(a.Dr, {
        id: "report-stream-problem",
        color: "danger",
        label: h.intl.string(h.t.sdnCxV),
        action: () => {
            E?.(),
                null != e &&
                    (0, l.openModalLazy)(async () => {
                        let { default: t } = await n.e("86889").then(n.bind(n, 292208));
                        return (n) =>
                            (0, i.jsx)(t, {
                                stream: e,
                                streamApplication: _,
                                isStreamer: p === e?.ownerId,
                                analyticsData: g,
                                ...n,
                            });
                    });
        },
        icon: s.E,
        leadingAccessory: { type: "icon", icon: s.E },
    });
}
