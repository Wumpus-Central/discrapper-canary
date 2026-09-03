n.d(t, { Ce: () => l, K2: () => a, Yz: () => s });
var i = n(323889);
let r = 6 * n(927813).A.Millis.HOUR;
function a(e) {
    if (null == e) return null;
    switch (e.type) {
        case i.p.QUEST:
            return e.questId;
        case i.p.BOUNTY:
            return e.bounty.id;
        case i.p.QUEST_HOME_HERO:
            return e.questHomeHero.id;
    }
}
function s(e) {
    return e?.type === i.p.QUEST ? e.questId : null;
}
function l(e) {
    if (null == e) return r;
    let t = 1e3 * e;
    return t < r && t > 0 ? t : r;
}
