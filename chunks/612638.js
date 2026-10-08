n.d(t, { b: () => a });
var i = n(801344);
function r(e) {
    let t = e.additionalData?.[i.nn];
    return "number" == typeof t ? (0, i.VD)(t) : e.score;
}
function a(e) {
    switch (e.eventName) {
        case i.n_.ChampionKill:
            return { ...e, score: 0.15, importance: 1 };
        case i.n_.ChampionAssist:
            return { ...e, score: 0.06, importance: 1 };
        case i.n_.DoubleKill:
        case i.n_.TripleKill:
        case i.n_.QuadraKill:
            return { ...e, score: 0.05, importance: 1 };
        case i.n_.PentaKill:
            return { ...e, score: 0.1, importance: 1 };
        case i.n_.TurretKill:
        case i.n_.InhibitorKill:
            return { ...e, score: 0.05, importance: 0 };
        case i.n_.DragonKill:
            return { ...e, score: 0.1, importance: 1 };
        case i.n_.DragonSteal:
        case i.n_.BaronKill:
            return { ...e, score: 0.2, importance: 1 };
        case i.n_.BaronSteal:
            return { ...e, score: 0.4, importance: 1 };
        case i.n_.Victory:
            return { ...e, score: 0.2, importance: 1 };
        case i.n_.TeamFightWin:
            return { ...e, score: r(e), importance: 1 };
        case i.n_.TeamFight:
            return { ...e, score: r(e), importance: 0 };
        case i.n_.ChampionDeath:
        case i.n_.LevelUp:
        case i.n_.ItemPurchase:
        case i.n_.Defeat:
        case i.n_.GameStart:
        case i.n_.GameEnd:
        case i.n_.Respawn:
            return { ...e, score: 0, importance: 0 };
    }
}
