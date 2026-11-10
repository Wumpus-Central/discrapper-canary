var i = l(477900);
l(582128);
var a = l(855986),
    u = l(477782),
    r = l(414798),
    s = l(734057),
    e = l(576705),
    c = l(188567),
    p = l(652215),
    d = l(792996);
function h(n, t, l) {
    (c._.dispatchToLastSubscribed(p.jej.INSERT_TEXT, { plainText: n, rawText: t }), null != l && r.A.startTyping(l));
}
l.d(
    t,
    {},
    {
        A: function (n) {
            let { targetChannelId: t, label: l, mention: r } = n;
            return (0, a.bG)(
                [s.A, e.A],
                () => {
                    let n = null != t ? s.A.getChannel(t) : null;
                    return null != t && null != n && (n.isPrivate() || e.A.can(p.xBc.SEND_MESSAGES, n));
                },
                [t],
            ) && null != r
                ? (0, i.jsx)(u.Dr, {
                      id: "mention",
                      label: l ?? d.intl.string(d.t.P8tvKG),
                      action: () => h(r.display, r.raw, t),
                  })
                : null;
        },
        G: h,
    },
);
