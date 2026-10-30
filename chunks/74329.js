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
    d = n(728557),
    m = n(105292);
function h(e, t, h) {
    let g = (0, u.AO)(e),
        f = (0, r.bG)([c.default], () => c.default.getId());
    if (null == e) return null;
    let A = (0, o._z)(e),
        p = d.A.getVideoStats(A) ?? {},
        E = {
            media_session_id: d.A.getMediaSessionId(A),
            rtc_connection_id: d.A.getRtcConnectionId(A),
            stream_region: d.A.getRegion(A),
            max_viewers: d.A.getMaxViewers(A),
            ...p,
        };
    return (0, i.jsx)(s.Dr, {
        id: "report-stream-problem",
        color: "danger",
        label: m.intl.string(m.t.sdnCxV),
        action: function () {
            (h?.(),
                null != e &&
                    (0, l.openModalLazy)(async () => {
                        let { default: t } = await Promise.all([n.e("617171"), n.e("186889")]).then(n.bind(n, 292208));
                        return (n) =>
                            (0, i.jsx)(t, {
                                stream: e,
                                streamApplication: g,
                                isStreamer: f === e?.ownerId,
                                analyticsData: E,
                                ...n,
                            });
                    }));
        },
        icon: a.E,
        leadingAccessory: { type: "icon", icon: a.E },
    });
}
