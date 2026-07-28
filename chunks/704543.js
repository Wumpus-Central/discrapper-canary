n.d(t, { A: () => c });
var r = n(477900);
n(582128);
var s = n(17928),
    d = n(477782),
    e = n(816662),
    a = n(543465),
    u = n(652215),
    l = n(375708);
function c(i) {
    let t = (0, s.bG)([a.Ay], () => a.Ay.isFavorite(i.guild_id, i.id));
    if (i.isThread() || i.isCategory()) return null;
    let n = t ? l.intl.string(l.t.M5PWSf) : l.intl.string(l.t.RMpwZu);
    return (0, r.jsx)(d.Dr, {
        id: "pin-channel",
        label: n,
        action: function () {
            (0, e.jA)(i.guild_id, i.id, !t, { section: u.JJy.CONTEXT_MENU });
        },
    });
}
