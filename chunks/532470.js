var a = n(713608),
    t = n(918715),
    i = n(877784),
    o = n(144705),
    r = n(826685),
    d = n(636107);
let c = {
        [o.I.Kill]: a.ModerationIcon,
        [o.I.MultiKill]: a.ModerationIcon,
        [o.I.Assist]: a.ModerationIcon,
        [o.I.Death]: t.SkullIcon,
        [o.I.RoshanKill]: i.RibbonIcon,
        [o.I.TeamFightWin]: a.ModerationIcon,
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
        [o.I.Kill]: d.default.gQErX1,
        [o.I.MultiKill]: d.default.Y7CAoY,
        [o.I.Assist]: d.default.CuzcRY,
        [o.I.Death]: d.default.NEFeB0,
        [o.I.RoshanKill]: d.default.bzNi8X,
        [o.I.TeamFightWin]: d.default["3RgAlG"],
        [o.I.TeamFight]: null,
        [o.I.GameEnd]: null,
        [o.I.InMatchChange]: null,
        [o.I.PlayStateChange]: null,
    };
n.d(
    l,
    {},
    {
        PC: function () {
            return { [r.b]: c };
        },
        dP: function () {
            return { [r.b]: s };
        },
        kv: function () {
            return { [r.b]: u };
        },
    },
);
