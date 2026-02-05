"use strict";
n.d(t, { A: () => d });
var r = n(627968);
n(64700);
var i = n(311907),
    a = n(397927),
    s = n(652896),
    o = n(834757),
    l = n(961350),
    u = n(162605),
    c = n(985018);
function d(e, t, d) {
    let _ = (0, o.AO)(e),
        f = (0, i.bG)([l.default], () => l.default.getId());
    if (null == e) return null;
    let p = (0, s._z)(e),
        h = u.A.getVideoStats(p) ?? {},
        m = {
            media_session_id: u.A.getMediaSessionId(p),
            rtc_connection_id: u.A.getRtcConnectionId(p),
            stream_region: u.A.getRegion(p),
            max_viewers: u.A.getMaxViewers(p),
            ...h,
        },
        g = () => {
            d?.(),
                null != e &&
                    (0, a.mMO)(async () => {
                        let { default: t } = await n.e("53377").then(n.bind(n, 629304));
                        return (n) =>
                            (0, r.jsx)(t, {
                                stream: e,
                                streamApplication: _,
                                isStreamer: f === e?.ownerId,
                                analyticsData: m,
                                ...n,
                            });
                    });
        };
    return (0, r.jsx)(a.Drp, {
        id: "report-stream-problem",
        color: "danger",
        label: c.intl.string(c.t.sdnCxV),
        action: g,
        icon: a.EpV,
        leadingAccessory: { type: "icon", icon: a.EpV },
    });
}
