n.d(t, { d: () => s });
var i = n(309470),
    r = n(144705),
    a = n(826685);
function s(e) {
    switch (e.eventName) {
        case r.I.Kill:
            return { ...e, score: 0.15, importance: 1 };
        case r.I.MultiKill:
            return { ...e, score: 0.05, importance: 1 };
        case r.I.Assist:
            return { ...e, score: 0.06, importance: 1 };
        case r.I.Death:
            return { ...e, score: 0, importance: 1 };
        case r.I.RoshanKill:
            return { ...e, score: 0.15, importance: 1 };
        case r.I.TeamFightWin:
            return { ...e, score: (0, i.VD)(e.additionalData[i.zp], a.L), importance: 1 };
        case r.I.TeamFight:
            return { ...e, score: (0, i.VD)(e.additionalData[i.zp], a.L), importance: 0 };
        case r.I.GameEnd:
            return { ...e, score: 0.05 * !!e.additionalData.win, importance: +!!e.additionalData.win };
        case r.I.InMatchChange:
        case r.I.PlayStateChange:
            return { ...e, score: 0, importance: 0 };
    }
}
