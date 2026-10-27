n.d(t, { Yh: () => a, Ys: () => o, nN: () => s });
var i = n(323889);
function a(e) {
    switch (e.type) {
        case i.p.QUEST:
            return { adCreativeType: i.p.QUEST, adCreativeId: e.quest.id };
        case i.p.BOUNTY:
            return { adCreativeType: i.p.BOUNTY, adCreativeId: e.bounty.id };
        case i.p.PLAYABLE:
            return { adCreativeType: i.p.PLAYABLE, adCreativeId: e.playable.id };
    }
}
function o(e) {
    return e.type === i.p.QUEST ? e.quest : null;
}
function s(e) {
    switch (e.type) {
        case i.p.QUEST:
            return e.quest.id;
        case i.p.BOUNTY:
            return e.bounty.id;
        case i.p.PLAYABLE:
            return e.playable.id;
        case i.p.NO_FILL:
            return null;
    }
}
