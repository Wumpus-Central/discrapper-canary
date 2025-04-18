n.d(t, { Z: () => d });
var r = n(200651);
n(192379);
var i = n(442837),
    l = n(481060),
    o = n(207055),
    a = n(938475),
    s = n(981631),
    c = n(388032),
    u = n(595922);
function d(e) {
    let { channel: t } = e,
        n = (0, i.e7)([a.ZP], () => a.ZP.getVoiceStatesForChannel(t));
    return (0, r.jsxs)('div', {
        className: u.root,
        children: [
            (0, r.jsx)(l.Text, {
                variant: 'text-xs/bold',
                className: u.header,
                children: c.NW.format(c.t.e95u3N, { count: n.length })
            }),
            (0, r.jsx)(l.Ttm, {
                className: u.scroller,
                children: (0, r.jsx)(o.Z, {
                    allowDragging: !1,
                    allowPreviews: !1,
                    className: u.voiceUsers,
                    channel: t,
                    voiceStates: n,
                    collapsed: !1,
                    location: s.Sbl.CHANNEL_CALL
                })
            })
        ]
    });
}
