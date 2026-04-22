"use strict";
let r, i, s, a;
var o = n(311907),
    l = n(73153);
function u() {
    (r = !1), (i = []), (s = new Set()), (a = new Set());
}
u();
class d extends o.Ay.Store {
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
new d(l.h, {
    LOGOUT: function () {
        u();
    },
    BOUNTIES_FETCH_QUEST_HOME_BOUNTIES_BEGIN: function () {
        r = !0;
    },
    BOUNTIES_FETCH_QUEST_HOME_BOUNTIES_SUCCESS: function (e) {
        let { bounties: t } = e;
        (r = !1), (i = t), (s = new Set());
    },
    BOUNTIES_FETCH_QUEST_HOME_BOUNTIES_FAILURE: function () {
        (r = !1), (i = []), (s = new Set());
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
        let r = new Set(s);
        r.add(t), (s = r);
    },
    BOUNTIES_CLAIM_REWARD_FAILURE: function (e) {
        let { bountyId: t } = e,
            n = new Set(a);
        n.delete(t), (a = n);
    },
});
