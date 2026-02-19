"use strict";
n.d(t, { A: () => u });
var i = n(627968);
n(64700);
var s = n(311907),
    l = n(397927),
    r = n(588224),
    a = n(607567),
    o = n(652215),
    c = n(985018),
    d = n(911855);
function u(e) {
    let { channel: t } = e,
        n = (0, s.bG)([a.Ay], () => a.Ay.getVoiceStatesForChannel(t));
    return (0, i.jsxs)("div", {
        className: d.zr,
        children: [
            (0, i.jsx)(l.Text, {
                variant: "text-xs/bold",
                className: d.wx,
                children: c.intl.format(c.t.e95u3C, { count: n.length }),
            }),
            (0, i.jsx)(l.HOs, {
                className: d.XG,
                children: (0, i.jsx)(r.A, {
                    allowDragging: !1,
                    allowPreviews: !1,
                    className: d.Xk,
                    channel: t,
                    voiceStates: n,
                    collapsed: !1,
                    location: o.ThZ.CHANNEL_CALL,
                }),
            }),
        ],
    });
}
