"use strict";
let i, r, s, a, o;
n.d(t, { A: () => c });
var l = n(17928),
    _ = n(228366);
function d() {
    (i = !1), (r = []), (s = new Set()), (a = new Set()), (o = new Map());
}
d();
class u extends l.Ay.Store {
    static displayName = "BountyStore";
    get isFetchingQuestHomeBounties() {
        return i;
    }
    get questHomeBounties() {
        return r;
    }
    isBountyCompleted(e) {
        return s.has(e);
    }
    isClaimingBountyReward(e) {
        return a.has(e);
    }
    areAllBountiesCompleted() {
        return r.every((e) => s.has(e.id));
    }
    getAdDecisionByPlacementAndAdCreativeId(e, t) {
        return o.get(e)?.get(t) ?? null;
    }
}
let c = new u(_.h, {
    LOGOUT: function () {
        d();
    },
    BOUNTIES_FETCH_QUEST_HOME_BOUNTIES_BEGIN: function () {
        i = !0;
    },
    BOUNTIES_FETCH_QUEST_HOME_BOUNTIES_SUCCESS: function (e) {
        let { bounties: t, placement: n, adDecisionsByAdCreativeId: a } = e;
        (i = !1), (r = t), (s = new Set()), (o = new Map(o)).set(n, a);
    },
    BOUNTIES_FETCH_QUEST_HOME_BOUNTIES_FAILURE: function (e) {
        let { placement: t } = e;
        (i = !1), (r = []), (s = new Set()), (o = new Map(o)).delete(t);
    },
    BOUNTIES_CLAIM_REWARD_BEGIN: function (e) {
        let { bountyId: t } = e,
            n = new Set(a);
        n.add(t), (a = n);
    },
    BOUNTIES_CLAIM_REWARD_SUCCESS: function (e) {
        let { bountyId: t } = e,
            n = new Set(a);
        n.delete(t), (a = n);
        let i = new Set(s);
        i.add(t), (s = i);
    },
    BOUNTIES_CLAIM_REWARD_FAILURE: function (e) {
        let { bountyId: t } = e,
            n = new Set(a);
        n.delete(t), (a = n);
    },
});
