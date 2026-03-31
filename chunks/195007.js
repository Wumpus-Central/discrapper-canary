n.d(t, { A: () => d });
var i = n(627968);
n(64700);
var l = n(311907),
    s = n(397927),
    a = n(588224),
    r = n(607567),
    o = n(985018),
    c = n(910338);
function d(e) {
    let { channel: t } = e,
        n = (0, l.bG)([r.Ay], () => r.Ay.getVoiceStatesForChannel(t));
    return (0, i.jsxs)("div", {
        className: c.zr,
        children: [
            (0, i.jsx)(s.Text, {
                variant: "text-xs/bold",
                className: c.wx,
                children: o.intl.format(o.t.e95u3C, { count: n.length }),
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
                }),
            }),
        ],
    });
}
