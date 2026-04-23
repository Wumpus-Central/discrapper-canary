e.d(n, { A: () => A });
var i = e(573648),
    l = e(541806),
    r = e(90644),
    a = e(788733),
    s = e(765902),
    o = e(141639),
    c = e(61330),
    u = e(652215);
let d = new Set([u.fg2.LEAGUE_OF_LEGENDS, u.fg2.ROBLOX, u.fg2.TWITCH, u.fg2.YOUTUBE]);
function A(t) {
    if ((0, r.A)(t)) return i.A.get(u.fg2.SPOTIFY);
    if ((0, l.A)(t)) return i.A.get(u.fg2.CRUNCHYROLL);
    if ((0, c.A)(t)) return i.A.get(u.fg2.XBOX);
    if ((0, o.A)(t)) return i.A.get(u.fg2.PLAYSTATION);
    if ((0, s.A)(t) || (0, a.A)(t)) return i.A.get(u.fg2.META_QUEST_OR_HORIZON);
    let n = i.A.find((n) => {
        let { name: e } = n;
        return e === t.name;
    });
    return null != n && d.has(n.type) ? n : null;
}
