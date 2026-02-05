n.d(t, { A: () => u });
var i = n(627968);
n(64700);
var l = n(311907),
    s = n(397927),
    a = n(588224),
    r = n(607567),
    o = n(652215),
    d = n(985018),
    c = n(911855);
function u(e) {
    let { channel: t } = e,
        n = (0, l.bG)([r.Ay], () => r.Ay.getVoiceStatesForChannel(t));
    return (0, i.jsxs)("div", {
        className: c.zr,
        children: [
            (0, i.jsx)(s.Text, {
                variant: "text-xs/bold",
                className: c.wx,
                children: d.intl.format(d.t.e95u3C, { count: n.length }),
            }),
            (0, i.jsx)(s.HOs, {
                className: c.XG,
                children: (0, i.jsx)(a.A, {
                    allowDragging: !1,
                    allowPreviews: !1,
                    className: c.Xk,
                    channel: t,
                    voiceStates: n,
                    collapsed: !1,
                    location: o.ThZ.CHANNEL_CALL,
                }),
            }),
        ],
    });
}
