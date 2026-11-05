var n = a(713608),
    t = a(918715),
    i = a(877784),
    o = a(144705),
    d = a(826685),
    c = a(683825);
let r = {
        [o.I.Kill]: n.ModerationIcon,
        [o.I.MultiKill]: n.ModerationIcon,
        [o.I.Assist]: n.ModerationIcon,
        [o.I.Death]: t.SkullIcon,
        [o.I.RoshanKill]: i.RibbonIcon,
        [o.I.TeamFightWin]: n.ModerationIcon,
        [o.I.TeamFight]: null,
        [o.I.GameEnd]: null,
        [o.I.InMatchChange]: null,
        [o.I.PlayStateChange]: null,
    },
    s = {
        [o.I.Kill]: 10,
        [o.I.MultiKill]: 11,
        [o.I.Assist]: 9,
        [o.I.Death]: 1,
        [o.I.RoshanKill]: 9,
        [o.I.TeamFightWin]: 8,
        [o.I.TeamFight]: 0,
        [o.I.GameEnd]: 0,
        [o.I.InMatchChange]: 0,
        [o.I.PlayStateChange]: 0,
    },
    u = {
        [o.I.Kill]: c.default.gQErX1,
        [o.I.MultiKill]: c.default.Y7CAoY,
        [o.I.Assist]: c.default.CuzcRY,
        [o.I.Death]: c.default.NEFeB0,
        [o.I.RoshanKill]: c.default.bzNi8X,
        [o.I.TeamFightWin]: c.default["3RgAlG"],
        [o.I.TeamFight]: null,
        [o.I.GameEnd]: null,
        [o.I.InMatchChange]: null,
        [o.I.PlayStateChange]: null,
    };
a.d(
    l,
    {},
    {
        PC: function () {
            return { [d.b]: r };
        },
        dP: function () {
            return { [d.b]: s };
        },
        kv: function () {
            return { [d.b]: u };
        },
    },
);
