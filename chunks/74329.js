var i = n(477900);
n(582128);
var r = n(855986),
    l = n(192308),
    s = n(477782),
    a = n(695366),
    o = n(652896),
    c = n(834757),
    u = n(46653),
    d = n(753181),
    m = n(792996);
n.d(
    t,
    {},
    {
        A: function (e, t, h) {
            let g = (0, c.AO)(e),
                f = (0, r.bG)([u.default], () => u.default.getId());
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
                            (0, l.mM)(async () => {
                                let { default: t } = await Promise.all([
                                    n.e(505866),
                                    n.e(508702),
                                    n.e(990189),
                                    n.e(44561),
                                    n.e(617171),
                                    n.e(336828),
                                ]).then(n.bind(n, 956215));
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
                icon: a.CircleErrorIcon,
                leadingAccessory: { type: "icon", icon: a.CircleErrorIcon },
            });
        },
    },
);
