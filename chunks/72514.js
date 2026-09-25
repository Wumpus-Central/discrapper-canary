i.d(n, { default: () => o });
var a = i(477900);
i(582128);
var r = i(189213),
    s = i(144009),
    e = i(174459),
    c = i(652215),
    l = i(375708);
function o(t) {
    let { onClose: n, transitionState: i, mediaSessionId: o, rtcConnectionId: d } = t;
    return (0, a.jsx)(r.a, {
        title: l.intl.string(l.t.KTjjrG),
        transitionState: i,
        actions: [
            { text: l.intl.string(l.t["ETE/oC"]), variant: "secondary", onClick: n },
            {
                text: l.intl.string(l.t.EbwFfR),
                variant: "primary",
                onClick: function () {
                    ((0, s.a)(c.Umv.RTC),
                        e.default.track(c.HAw.DEBUG_LOG_UPLOADED, {
                            media_session_id: o ?? null,
                            rtc_connection_id: d ?? null,
                        }),
                        n());
                },
            },
        ],
        onClose: n,
        children: l.intl.string(l.t["ZvRR/t"]),
    });
}
