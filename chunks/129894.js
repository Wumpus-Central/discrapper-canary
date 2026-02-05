"use strict";
n.d(t, { A: () => _ });
var r = n(573648),
    i = n(541806),
    a = n(90644),
    s = n(788733),
    o = n(765902),
    l = n(141639),
    u = n(61330),
    c = n(652215);
let d = new Set([c.fg2.LEAGUE_OF_LEGENDS, c.fg2.ROBLOX, c.fg2.TWITCH, c.fg2.YOUTUBE]);
function _(e) {
    if ((0, a.A)(e)) return r.A.get(c.fg2.SPOTIFY);
    if ((0, i.A)(e)) return r.A.get(c.fg2.CRUNCHYROLL);
    if ((0, u.A)(e)) return r.A.get(c.fg2.XBOX);
    if ((0, l.A)(e)) return r.A.get(c.fg2.PLAYSTATION);
    if ((0, o.A)(e) || (0, s.A)(e)) return r.A.get(c.fg2.META_QUEST_OR_HORIZON);
    let t = r.A.find((t) => {
        let { name: n } = t;
        return n === e.name;
    });
    return null != t && d.has(t.type) ? t : null;
}
