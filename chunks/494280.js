n.d(e, { Yh: () => i, Ys: () => s, nN: () => l });
var r = n(323889);
function i(t) {
    switch (t.type) {
        case r.p.QUEST:
            return { adCreativeType: r.p.QUEST, adCreativeId: t.quest.id };
        case r.p.BOUNTY:
            return { adCreativeType: r.p.BOUNTY, adCreativeId: t.bounty.id };
    }
}
function s(t) {
    return t.type === r.p.QUEST ? t.quest : null;
}
function l(t) {
    switch (t.type) {
        case r.p.QUEST:
            return t.quest.id;
        case r.p.BOUNTY:
            return t.bounty.id;
        case r.p.NO_FILL:
            return null;
    }
}
