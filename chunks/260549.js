"use strict";
n.d(t, { n: () => r });
var i = n(106983);
function r(e) {
    switch (e.eventName) {
        case i.C.Kill:
            return {
                ...e,
                score: (function (e, t) {
                    if ("weapon_taser" === t) return 0.35;
                    switch (e) {
                        case "Knife":
                            return 0.35;
                        case "Grenade":
                            return 0.1;
                        default:
                            return 0.15;
                    }
                })(e.additionalData.weaponType, e.additionalData.weaponName),
                importance: 1,
            };
        case i.C.MultiKill:
            return { ...e, score: 0.05, importance: 1 };
        case i.C.Ace:
            return { ...e, score: 0.5, importance: 1 };
        case i.C.Assist:
            return { ...e, score: 0.06, importance: 1 };
        case i.C.Death:
            return { ...e, score: 0, importance: 1 };
        case i.C.RoundWinningKill:
        case i.C.GameWinningKill:
            return { ...e, score: 0.05, importance: 1 };
        case i.C.BombPlant:
        case i.C.BombDefused:
        case i.C.BombExploded:
        case i.C.RoundStart:
        case i.C.RoundEnd:
        case i.C.PlayStateChange:
            return { ...e, score: 0, importance: 0 };
    }
}
