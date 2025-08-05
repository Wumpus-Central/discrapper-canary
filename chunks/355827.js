n.d(t, { Z: () => d });
var r = n(255367);
n(73800);
var i = n(442837),
    a = n(481060),
    o = n(207055),
    s = n(938475),
    l = n(981631),
    c = n(388032),
    u = n(595922);
function d(e) {
    let { channel: t } = e,
        n = (0, i.e7)([s.ZP], () => s.ZP.getVoiceStatesForChannel(t));
    return (0, r.jsxs)('div', {
        className: u.root,
        children: [
            (0, r.jsx)(a.Text, {
                variant: 'text-xs/bold',
                className: u.header,
                children: c.intl.format(c.t.e95u3N, { count: n.length })
            }),
            (0, r.jsx)(a.Ttm, {
                className: u.scroller,
                children: (0, r.jsx)(o.Z, {
                    allowDragging: !1,
                    allowPreviews: !1,
                    className: u.voiceUsers,
                    channel: t,
                    voiceStates: n,
                    collapsed: !1,
                    location: l.Sbl.CHANNEL_CALL
                })
            })
        ]
    });
}
