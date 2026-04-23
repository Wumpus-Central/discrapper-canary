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
    c = n(961350),
    d = n(162605),
    _ = n(985018);
function f(e, t, f) {
    let p = (0, u.AO)(e),
        h = (0, i.bG)([c.default], () => c.default.getId());
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
                                streamApplication: p,
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
