i.d(n, { default: () => o });
var a = i(627968);
i(64700);
var r = i(732955),
    s = i(98919),
    e = i(954571),
    c = i(652215),
    l = i(985018);
function o(t) {
    let { onClose: n, transitionState: i, mediaSessionId: o, rtcConnectionId: d } = t;
    return (0, a.jsx)(r.aFV, {
        title: l.intl.string(l.t.KTjjrG),
        transitionState: i,
        actions: [
            { text: l.intl.string(l.t["ETE/oC"]), variant: "secondary", onClick: n },
            {
                text: l.intl.string(l.t.EbwFfR),
                variant: "primary",
                onClick: function () {
                    (0, s.a)(c.Umv.RTC),
                        e.default.track(c.HAw.DEBUG_LOG_UPLOADED, {
                            media_session_id: o ?? null,
                            rtc_connection_id: d ?? null,
                        }),
                        n();
                },
            },
        ],
        onClose: n,
        children: l.intl.string(l.t["ZvRR/t"]),
    });
}
