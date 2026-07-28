i.d(n, { default: () => c });
var l = i(477900);
i(582128);
var e = i(189213),
    a = i(730852),
    r = i(496092),
    s = i(508654),
    u = i(375708);
function c(t) {
    let { channel: n, transitionState: i, onClose: c } = t,
        d = (0, s.Qs)(n.id);
    if (null == d) return null;
    function o() {
        a.default.selectVoiceChannel(null), c();
    }
    return (0, l.jsx)(e.Modal, {
        transitionState: i,
        title: u.intl.string(u.t["4Ao8LC"]),
        subtitle: u.intl.string(u.t["0I0B8f"]),
        onClose: c,
        actions: [
            { onClick: o, variant: "secondary", text: u.intl.string(u.t.P60OAX) },
            {
                onClick: function () {
                    null != d && (r.default.endEvent(d.id, d.guild_id), o());
                },
                variant: "critical-primary",
                text: u.intl.string(u.t.mjB9pd),
            },
        ],
    });
}
