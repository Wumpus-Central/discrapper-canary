n.d(t, { K: () => r });
var i = n(979563);
function r(e) {
    switch (e.eventName) {
        case i.d.Goal:
            return { ...e, score: 0.3, importance: 1 };
        case i.d.Assist:
            return { ...e, score: 0.1, importance: 1 };
        case i.d.Save:
            return { ...e, score: 0.15, importance: 1 };
        case i.d.EpicSave:
            return { ...e, score: 0.25, importance: 1 };
        case i.d.Demolition:
            return { ...e, score: 0.15, importance: 1 };
        case i.d.Victory:
            return { ...e, score: 0.2, importance: 1 };
        case i.d.TurtleGoal:
            return { ...e, score: 0.15, importance: 1 };
        case i.d.PoolShot:
            return { ...e, score: 0.1, importance: 1 };
        case i.d.FlipReset:
            return { ...e, score: 0.2, importance: 0 };
        case i.d.BicycleHit:
        case i.d.BicycleGoal:
        case i.d.OvertimeGoal:
        case i.d.HatTrick:
        case i.d.Extermination:
        case i.d.HighFive:
            return { ...e, score: 0.15, importance: 0 };
        case i.d.AerialGoal:
        case i.d.BackwardsGoal:
        case i.d.SwishGoal:
        case i.d.Playmaker:
        case i.d.Savior:
        case i.d.BreakoutDamageLarge:
        case i.d.Shot:
            return { ...e, score: 0.1, importance: 0 };
        case i.d.LongGoal:
        case i.d.LowFive:
        case i.d.BreakoutDamage:
        case i.d.OwnGoal:
            return { ...e, score: 0.05, importance: 0 };
        case i.d.Center:
        case i.d.Clear:
        case i.d.FirstTouch:
            return { ...e, score: 0.01, importance: 0 };
        case i.d.Demolished:
        case i.d.Defeat:
        case i.d.MatchStart:
        case i.d.MatchEnd:
            return { ...e, score: 0, importance: 0 };
    }
}
