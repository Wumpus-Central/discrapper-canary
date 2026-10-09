n.d(t, { A: () => m });
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
    h = n(660183);
function m(e, t, m) {
    let A = (0, u.AO)(e),
        E = (0, r.bG)([c.default], () => c.default.getId());
    if (null == e) return null;
    let g = (0, o._z)(e),
        f = d.A.getVideoStats(g) ?? {},
        p = {
            media_session_id: d.A.getMediaSessionId(g),
            rtc_connection_id: d.A.getRtcConnectionId(g),
            stream_region: d.A.getRegion(g),
            max_viewers: d.A.getMaxViewers(g),
            ...f,
        };
    return (0, i.jsx)(s.Dr, {
        id: "report-stream-problem",
        color: "danger",
        label: h.intl.string(h.t.sdnCxV),
        action: function () {
            (m?.(),
                null != e &&
                    (0, l.openModalLazy)(async () => {
                        let { default: t } = await Promise.all([n.e("617171"), n.e("186889")]).then(n.bind(n, 292208));
                        return (n) =>
                            (0, i.jsx)(t, {
                                stream: e,
                                streamApplication: A,
                                isStreamer: E === e?.ownerId,
                                analyticsData: p,
                                ...n,
                            });
                    }));
        },
        icon: a.E,
        leadingAccessory: { type: "icon", icon: a.E },
    });
}
