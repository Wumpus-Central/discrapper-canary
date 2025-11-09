n.d(t, { Z: () => d });
var i = n(951288);
n(647438);
var r = n(442837),
    l = n(481060),
    a = n(207055),
    o = n(938475),
    s = n(981631),
    c = n(388032),
    u = n(959);
function d(e) {
    let { channel: t } = e,
        n = (0, r.e7)([o.ZP], () => o.ZP.getVoiceStatesForChannel(t));
    return (0, i.jsxs)("div", {
        className: u.root,
        children: [
            (0, i.jsx)(l.Text, {
                variant: "text-xs/bold",
                className: u.header,
                children: c.intl.format(c.t.e95u3C, { count: n.length }),
            }),
            (0, i.jsx)(l.Ttm, {
                className: u.scroller,
                children: (0, i.jsx)(a.Z, {
                    allowDragging: !1,
                    allowPreviews: !1,
                    className: u.voiceUsers,
                    channel: t,
                    voiceStates: n,
                    collapsed: !1,
                    location: s.Sbl.CHANNEL_CALL,
                }),
            }),
        ],
    });
}
