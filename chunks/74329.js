var i = n(477900);
n(582128);
var r = n(855986),
    l = n(192308),
    s = n(477782),
    a = n(695366),
    o = n(652896),
    u = n(834757),
    c = n(46653),
    d = n(753181),
    h = n(792996);
n.d(
    t,
    {},
    {
        A: function (e, t, m) {
            let f = (0, u.AO)(e),
                p = (0, r.bG)([c.default], () => c.default.getId());
            if (null == e) return null;
            let g = (0, o._z)(e),
                A = d.A.getVideoStats(g) ?? {},
                v = {
                    media_session_id: d.A.getMediaSessionId(g),
                    rtc_connection_id: d.A.getRtcConnectionId(g),
                    stream_region: d.A.getRegion(g),
                    max_viewers: d.A.getMaxViewers(g),
                    ...A,
                };
            return (0, i.jsx)(s.Dr, {
                id: "report-stream-problem",
                color: "danger",
                label: h.intl.string(h.t.sdnCxV),
                action: function () {
                    (m?.(),
                        null != e &&
                            (0, l.mM)(async () => {
                                let { default: t } = await Promise.all([
                                    n.e(545666),
                                    n.e(508702),
                                    n.e(990189),
                                    n.e(44561),
                                    n.e(617171),
                                    n.e(336828),
                                ]).then(n.bind(n, 956215));
                                return (n) =>
                                    (0, i.jsx)(t, {
                                        stream: e,
                                        streamApplication: f,
                                        isStreamer: p === e?.ownerId,
                                        analyticsData: v,
                                        ...n,
                                    });
                            }));
                },
                icon: a.CircleErrorIcon,
                leadingAccessory: { type: "icon", icon: a.CircleErrorIcon },
            });
        },
    },
);
