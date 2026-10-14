n.d(t, { b: () => s });
var i = n(309470),
    r = n(801344);
function a(e) {
    let t = e.additionalData?.[i.zp];
    return "number" == typeof t ? (0, i.VD)(t, r.yO) : e.score;
}
function s(e) {
    switch (e.eventName) {
        case r.n_.ChampionKill:
            return { ...e, score: 0.15, importance: 1 };
        case r.n_.ChampionAssist:
            return { ...e, score: 0.06, importance: 1 };
        case r.n_.DoubleKill:
        case r.n_.TripleKill:
        case r.n_.QuadraKill:
            return { ...e, score: 0.05, importance: 1 };
        case r.n_.PentaKill:
            return { ...e, score: 0.1, importance: 1 };
        case r.n_.TurretKill:
        case r.n_.InhibitorKill:
            return { ...e, score: 0.05, importance: 0 };
        case r.n_.DragonKill:
            return { ...e, score: 0.1, importance: 1 };
        case r.n_.DragonSteal:
        case r.n_.ElderDragonKill:
            return { ...e, score: 0.2, importance: 1 };
        case r.n_.ElderDragonSteal:
            return { ...e, score: 0.4, importance: 1 };
        case r.n_.BaronKill:
            return { ...e, score: 0.2, importance: 1 };
        case r.n_.BaronSteal:
            return { ...e, score: 0.4, importance: 1 };
        case r.n_.Victory:
            return { ...e, score: 0.2, importance: 1 };
        case r.n_.TeamFightWin:
            return { ...e, score: a(e), importance: 1 };
        case r.n_.TeamFight:
            return { ...e, score: a(e), importance: 0 };
        case r.n_.ChampionDeath:
        case r.n_.LevelUp:
        case r.n_.ItemPurchase:
        case r.n_.Defeat:
        case r.n_.GameStart:
        case r.n_.GameEnd:
        case r.n_.Respawn:
            return { ...e, score: 0, importance: 0 };
    }
}
