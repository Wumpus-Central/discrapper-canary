n.d(t, { A: () => u });
var i = n(627968);
n(64700);
var l = n(17928),
    a = n(834730),
    s = n(364522),
    r = n(588224),
    o = n(607567),
    c = n(375708),
    d = n(784914);
function u(e) {
    let { channel: t } = e,
        n = (0, l.bG)([o.Ay], () => o.Ay.getVoiceStatesForChannel(t));
    return (0, i.jsxs)("div", {
        className: d.zr,
        children: [
            (0, i.jsx)(a.E, {
                variant: "text-xs/bold",
                className: d.wx,
                children: c.intl.format(c.t.e95u3C, { count: n.length }),
            }),
            (0, i.jsx)(s.Ip, {
                className: d.XG,
                children: (0, i.jsx)(r.A, {
                    allowDragging: !1,
                    allowPreviews: !1,
                    className: d.Xk,
                    channel: t,
                    voiceStates: n,
                    collapsed: !1,
                }),
            }),
        ],
    });
}
