n.d(t, { d: () => r });
var i = n(144705);
function r(e) {
    switch (e.eventName) {
        case i.I.Kill:
            return { ...e, score: 0.15, importance: 1 };
        case i.I.MultiKill:
            return { ...e, score: 0.05, importance: 1 };
        case i.I.Assist:
            return { ...e, score: 0.06, importance: 1 };
        case i.I.Death:
            return { ...e, score: 0, importance: 1 };
        case i.I.RoshanKill:
            return { ...e, score: 0.15, importance: 1 };
        case i.I.GameEnd:
            return { ...e, score: 0.05 * !!e.additionalData.win, importance: +!!e.additionalData.win };
        case i.I.InMatchChange:
        case i.I.PlayStateChange:
            return { ...e, score: 0, importance: 0 };
    }
}
