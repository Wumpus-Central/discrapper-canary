n.d(t, { A: () => u });
var i = n(627968);
n(64700);
var r = n(311907),
    d = n(477782),
    s = n(334738),
    a = n(222823),
    c = n(790782),
    l = n(985018);
function u(e) {
    let t = (0, r.bG)([a.Ay], () => a.Ay.hasUnread(e, c.P.GUILD_EVENT), [e]);
    return (0, i.jsx)(d.Dr, {
        id: "mark-events-read",
        label: l.intl.string(l.t.e6RscS),
        action: function () {
            (0, s.hK)(e, c.P.GUILD_EVENT);
        },
        disabled: !t,
    });
}
