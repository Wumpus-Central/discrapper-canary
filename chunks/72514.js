i.d(n, { default: () => o });
var a = i(627968);
i(64700);
var r = i(189213),
    s = i(98919),
    e = i(954571),
    l = i(652215),
    c = i(985018);
function o(t) {
    let { onClose: n, transitionState: i, mediaSessionId: o, rtcConnectionId: d } = t;
    return (0, a.jsx)(r.Modal, {
        title: c.intl.string(c.t.KTjjrG),
        transitionState: i,
        actions: [
            { text: c.intl.string(c.t["ETE/oC"]), variant: "secondary", onClick: n },
            {
                text: c.intl.string(c.t.EbwFfR),
                variant: "primary",
                onClick: function () {
                    (0, s.a)(l.Umv.RTC),
                        e.default.track(l.HAw.DEBUG_LOG_UPLOADED, {
                            media_session_id: o ?? null,
                            rtc_connection_id: d ?? null,
                        }),
                        n();
                },
            },
        ],
        onClose: n,
        children: c.intl.string(c.t["ZvRR/t"]),
    });
}
