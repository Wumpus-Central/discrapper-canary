"use strict";
n.d(t, { A: () => f });
var i = n(627968);
n(64700);
var r = n(17928),
    s = n(192308),
    a = n(477782),
    o = n(695366),
    l = n(652896),
    u = n(834757),
    c = n(495544),
    d = n(116956),
    _ = n(375708);
function f(e, t, f) {
    let h = (0, u.AO)(e),
        p = (0, r.bG)([c.default], () => c.default.getId());
    if (null == e) return null;
    let E = (0, l._z)(e),
        m = d.A.getVideoStats(E) ?? {},
        g = {
            media_session_id: d.A.getMediaSessionId(E),
            rtc_connection_id: d.A.getRtcConnectionId(E),
            stream_region: d.A.getRegion(E),
            max_viewers: d.A.getMaxViewers(E),
            ...m,
        };
    return (0, i.jsx)(a.Dr, {
        id: "report-stream-problem",
        color: "danger",
        label: _.intl.string(_.t.sdnCxV),
        action: () => {
            f?.(),
                null != e &&
                    (0, s.openModalLazy)(async () => {
                        let { default: t } = await Promise.all([n.e("17171"), n.e("86889")]).then(n.bind(n, 292208));
                        return (n) =>
                            (0, i.jsx)(t, {
                                stream: e,
                                streamApplication: h,
                                isStreamer: p === e?.ownerId,
                                analyticsData: g,
                                ...n,
                            });
                    });
        },
        icon: o.E,
        leadingAccessory: { type: "icon", icon: o.E },
    });
}
