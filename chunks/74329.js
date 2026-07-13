n.d(t, { A: () => h });
var i = n(627968);
n(64700);
var r = n(17928),
    l = n(192308),
    s = n(477782),
    a = n(695366),
    o = n(652896),
    c = n(834757),
    u = n(280450),
    d = n(116956),
    A = n(375708);
function h(e, t, h) {
    let m = (0, c.AO)(e),
        g = (0, r.bG)([u.default], () => u.default.getId());
    if (null == e) return null;
    let p = (0, o._z)(e),
        f = d.A.getVideoStats(p) ?? {},
        E = {
            media_session_id: d.A.getMediaSessionId(p),
            rtc_connection_id: d.A.getRtcConnectionId(p),
            stream_region: d.A.getRegion(p),
            max_viewers: d.A.getMaxViewers(p),
            ...f,
        };
    return (0, i.jsx)(s.Dr, {
        id: "report-stream-problem",
        color: "danger",
        label: A.intl.string(A.t.sdnCxV),
        action: () => {
            h?.(),
                null != e &&
                    (0, l.openModalLazy)(async () => {
                        let { default: t } = await Promise.all([n.e("17171"), n.e("86889")]).then(n.bind(n, 292208));
                        return (n) =>
                            (0, i.jsx)(t, {
                                stream: e,
                                streamApplication: m,
                                isStreamer: g === e?.ownerId,
                                analyticsData: E,
                                ...n,
                            });
                    });
        },
        icon: a.E,
        leadingAccessory: { type: "icon", icon: a.E },
    });
}
