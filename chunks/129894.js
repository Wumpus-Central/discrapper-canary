n.d(t, { A: () => f }), n(896048);
var r = n(573648),
    i = n(541806),
    a = n(90644),
    s = n(788733),
    o = n(765902),
    l = n(141639),
    c = n(61330),
    u = n(652215);
let d = new Set([u.fg2.LEAGUE_OF_LEGENDS, u.fg2.ROBLOX, u.fg2.TWITCH, u.fg2.YOUTUBE]);
function f(e) {
    if ((0, a.A)(e)) return r.A.get(u.fg2.SPOTIFY);
    if ((0, i.A)(e)) return r.A.get(u.fg2.CRUNCHYROLL);
    if ((0, c.A)(e)) return r.A.get(u.fg2.XBOX);
    if ((0, l.A)(e)) return r.A.get(u.fg2.PLAYSTATION);
    if ((0, o.A)(e) || (0, s.A)(e)) return r.A.get(u.fg2.META_QUEST_OR_HORIZON);
    let t = r.A.find((t) => {
        let { name: n } = t;
        return n === e.name;
    });
    return null != t && d.has(t.type) ? t : null;
}
