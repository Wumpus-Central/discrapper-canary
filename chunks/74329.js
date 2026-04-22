"use strict";
n.d(t, { A: () => f });
var r = n(627968);
n(64700);
var i = n(311907),
    s = n(192308),
    a = n(477782),
    o = n(695366),
    l = n(652896),
    u = n(834757),
    d = n(961350),
    c = n(162605),
    _ = n(985018);
function f(e, t, f) {
    let E = (0, u.AO)(e),
        h = (0, i.bG)([d.default], () => d.default.getId());
    if (null == e) return null;
    let p = (0, l._z)(e),
        m = c.A.getVideoStats(p) ?? {},
        g = {
            media_session_id: c.A.getMediaSessionId(p),
            rtc_connection_id: c.A.getRtcConnectionId(p),
            stream_region: c.A.getRegion(p),
            max_viewers: c.A.getMaxViewers(p),
            ...m,
        };
    return (0, r.jsx)(a.Dr, {
        id: "report-stream-problem",
        color: "danger",
        label: _.intl.string(_.t.sdnCxV),
        action: () => {
            f?.(),
                null != e &&
                    (0, s.openModalLazy)(async () => {
                        let { default: t } = await n.e("53377").then(n.bind(n, 629304));
                        return (n) =>
                            (0, r.jsx)(t, {
                                stream: e,
                                streamApplication: E,
                                isStreamer: h === e?.ownerId,
                                analyticsData: g,
                                ...n,
                            });
                    });
        },
        icon: o.E,
        leadingAccessory: { type: "icon", icon: o.E },
    });
}
