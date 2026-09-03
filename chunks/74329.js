n.d(t, { A: () => h });
var i = n(477900);
n(582128);
var r = n(17928),
    l = n(192308),
    s = n(477782),
    a = n(695366),
    o = n(652896),
    u = n(834757),
    c = n(280450),
    d = n(116956),
    A = n(375708);
function h(e, t, h) {
    let m = (0, u.AO)(e),
        g = (0, r.bG)([c.default], () => c.default.getId());
    if (null == e) return null;
    let f = (0, o._z)(e),
        E = d.A.getVideoStats(f) ?? {},
        b = {
            media_session_id: d.A.getMediaSessionId(f),
            rtc_connection_id: d.A.getRtcConnectionId(f),
            stream_region: d.A.getRegion(f),
            max_viewers: d.A.getMaxViewers(f),
            ...E,
        };
    return (0, i.jsx)(s.Dr, {
        id: "report-stream-problem",
        color: "danger",
        label: A.intl.string(A.t.sdnCxV),
        action: function () {
            h?.(),
                null != e &&
                    (0, l.openModalLazy)(async () => {
                        let { default: t } = await Promise.all([n.e("617171"), n.e("186889")]).then(n.bind(n, 292208));
                        return (n) =>
                            (0, i.jsx)(t, {
                                stream: e,
                                streamApplication: m,
                                isStreamer: g === e?.ownerId,
                                analyticsData: b,
                                ...n,
                            });
                    });
        },
        icon: a.E,
        leadingAccessory: { type: "icon", icon: a.E },
    });
}
