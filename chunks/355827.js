n.d(t, { Z: () => d });
var r = n(255367);
n(73800);
var i = n(442837),
    l = n(481060),
    a = n(207055),
    o = n(938475),
    s = n(981631),
    c = n(388032),
    u = n(496111);
function d(e) {
    let { channel: t } = e,
        n = (0, i.e7)([o.ZP], () => o.ZP.getVoiceStatesForChannel(t));
    return (0, r.jsxs)('div', {
        className: u.root,
        children: [
            (0, r.jsx)(l.Text, {
                variant: 'text-xs/bold',
                className: u.header,
                children: c.intl.format(c.t.e95u3N, { count: n.length })
            }),
            (0, r.jsx)(l.Ttm, {
                className: u.scroller,
                children: (0, r.jsx)(a.Z, {
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
