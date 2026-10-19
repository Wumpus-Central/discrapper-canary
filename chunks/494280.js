n.d(e, { Yh: () => i, Ys: () => s });
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
