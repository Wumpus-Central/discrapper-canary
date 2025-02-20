n.d(t, { Z: () => l });
var i = n(200651);
n(192379);
var s = n(442837),
    d = n(481060),
    r = n(45114),
    c = n(306680),
    a = n(490897),
    u = n(388032);
function l(e) {
    let t = (0, s.e7)([c.ZP], () => c.ZP.hasUnread(e, a.W.GUILD_EVENT), [e]);
    return (0, i.jsx)(d.sNh, {
        id: 'mark-events-read',
        label: u.NW.string(u.t.e6RscX),
        action: function () {
            (0, r.Ju)(e, a.W.GUILD_EVENT);
        },
        disabled: !t
    });
}
