n.d(t, { Yh: () => i, Ys: () => s, nN: () => l });
var r = n(323889);
function i(e) {
    switch (e.type) {
        case r.p.QUEST:
            return { adCreativeType: r.p.QUEST, adCreativeId: e.quest.id };
        case r.p.BOUNTY:
            return { adCreativeType: r.p.BOUNTY, adCreativeId: e.bounty.id };
        case r.p.PLAYABLE:
            return { adCreativeType: r.p.PLAYABLE, adCreativeId: e.playable.id };
    }
}
function s(e) {
    return e.type === r.p.QUEST ? e.quest : null;
}
function l(e) {
    switch (e.type) {
        case r.p.QUEST:
            return e.quest.id;
        case r.p.BOUNTY:
            return e.bounty.id;
        case r.p.PLAYABLE:
            return e.playable.id;
        case r.p.NO_FILL:
            return null;
    }
}
