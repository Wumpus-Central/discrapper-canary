n.d(t, { Z: () => u });
var i = n(200651);
n(192379);
var l = n(442837),
    a = n(481060),
    r = n(207055),
    s = n(938475),
    o = n(981631),
    c = n(388032),
    d = n(158003);
function u(e) {
    let { channel: t } = e,
        n = (0, l.e7)([s.ZP], () => s.ZP.getVoiceStatesForChannel(t));
    return (0, i.jsxs)('div', {
        className: d.root,
        children: [
            (0, i.jsx)(a.Text, {
                variant: 'text-xs/bold',
                className: d.header,
                children: c.intl.format(c.t.e95u3N, { count: n.length })
            }),
            (0, i.jsx)(a.Ttm, {
                className: d.scroller,
                children: (0, i.jsx)(r.Z, {
                    allowDragging: !1,
                    allowPreviews: !1,
                    className: d.voiceUsers,
                    channel: t,
                    voiceStates: n,
                    collapsed: !1,
                    location: o.Sbl.CHANNEL_CALL
                })
            })
        ]
    });
}
