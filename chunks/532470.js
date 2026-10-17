a.d(e, { PC: () => h, dP: () => g, kv: () => m });
var n = a(713608),
    t = a(918715),
    i = a(877784),
    d = a(144705),
    o = a(826685),
    r = a(704796);
let s = {
        [d.I.Kill]: n.q,
        [d.I.MultiKill]: n.q,
        [d.I.Assist]: n.q,
        [d.I.Death]: t.V,
        [d.I.RoshanKill]: i.q,
        [d.I.TeamFightWin]: n.q,
        [d.I.TeamFight]: null,
        [d.I.GameEnd]: null,
        [d.I.InMatchChange]: null,
        [d.I.PlayStateChange]: null,
    },
    c = {
        [d.I.Kill]: 10,
        [d.I.MultiKill]: 11,
        [d.I.Assist]: 9,
        [d.I.Death]: 1,
        [d.I.RoshanKill]: 9,
        [d.I.TeamFightWin]: 8,
        [d.I.TeamFight]: 0,
        [d.I.GameEnd]: 0,
        [d.I.InMatchChange]: 0,
        [d.I.PlayStateChange]: 0,
    },
    u = {
        [d.I.Kill]: r.default.gQErX1,
        [d.I.MultiKill]: r.default.Y7CAoY,
        [d.I.Assist]: r.default.CuzcRY,
        [d.I.Death]: r.default.NEFeB0,
        [d.I.RoshanKill]: r.default.bzNi8X,
        [d.I.TeamFightWin]: r.default["3RgAlG"],
        [d.I.TeamFight]: null,
        [d.I.GameEnd]: null,
        [d.I.InMatchChange]: null,
        [d.I.PlayStateChange]: null,
    };
function h() {
    return { [o.b]: s };
}
function m() {
    return { [o.b]: u };
}
function g() {
    return { [o.b]: c };
}
