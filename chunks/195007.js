n.d(t, { A: () => u });
var i = n(477900);
n(582128);
var l = n(17928),
    a = n(834730),
    s = n(364522),
    r = n(588224),
    o = n(607567),
    d = n(105292),
    c = n(13117);
function u(e) {
    let { channel: t } = e,
        n = (0, l.bG)([o.Ay], () => o.Ay.getVoiceStatesForChannel(t));
    return (0, i.jsxs)("div", {
        className: c.zr,
        children: [
            (0, i.jsx)(a.E, {
                variant: "body-xs/semibold",
                className: c.wx,
                children: d.intl.format(d.t.e95u3C, { count: n.length }),
            }),
            (0, i.jsx)(s.Ip, {
                className: c.XG,
                children: (0, i.jsx)(r.A, {
                    allowDragging: !1,
                    allowPreviews: !1,
                    className: c.Xk,
                    channel: t,
                    voiceStates: n,
                    collapsed: !1,
                }),
            }),
        ],
    });
}
