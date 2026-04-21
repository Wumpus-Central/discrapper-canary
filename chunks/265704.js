"use strict";
let r, i, s, a;
var o = n(311907),
    l = n(73153);
function u() {
    (r = !1), (i = []), (s = new Set()), (a = new Set());
}
function c() {
    u();
}
function d() {
    r = !0;
}
function _(e) {
    let { bounties: t } = e;
    (r = !1), (i = t), (s = new Set());
}
function f() {
    (r = !1), (i = []), (s = new Set());
}
function p(e) {
    let { bountyId: t } = e,
        n = new Set(a);
    n.add(t), (a = n);
}
function h(e) {
    let { bountyId: t } = e,
        n = new Set(a);
    n.delete(t), (a = n);
    let r = new Set(s);
    r.add(t), (s = r);
}
function m(e) {
    let { bountyId: t } = e,
        n = new Set(a);
    n.delete(t), (a = n);
}
u();
class E extends o.Ay.Store {
    static displayName = "BountyStore";
    get isFetchingQuestHomeBounties() {
        return r;
    }
    get questHomeBounties() {
        return i;
    }
    isBountyCompleted(e) {
        return s.has(e);
    }
    isClaimingBountyReward(e) {
        return a.has(e);
    }
    areAllBountiesCompleted() {
        return i.every((e) => s.has(e.id));
    }
}
new E(l.h, {
    LOGOUT: c,
    BOUNTIES_FETCH_QUEST_HOME_BOUNTIES_BEGIN: d,
    BOUNTIES_FETCH_QUEST_HOME_BOUNTIES_SUCCESS: _,
    BOUNTIES_FETCH_QUEST_HOME_BOUNTIES_FAILURE: f,
    BOUNTIES_CLAIM_REWARD_BEGIN: p,
    BOUNTIES_CLAIM_REWARD_SUCCESS: h,
    BOUNTIES_CLAIM_REWARD_FAILURE: m,
});
