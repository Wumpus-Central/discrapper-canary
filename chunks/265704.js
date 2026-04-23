"use strict";
let i, r, s, a;
var o = n(17928),
    l = n(228366);
function d() {
    (i = !1), (r = []), (s = new Set()), (a = new Set());
}
d();
class _ extends o.Ay.Store {
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
}
new _(l.h, {
    LOGOUT: function () {
        d();
    },
    BOUNTIES_FETCH_QUEST_HOME_BOUNTIES_BEGIN: function () {
        i = !0;
    },
    BOUNTIES_FETCH_QUEST_HOME_BOUNTIES_SUCCESS: function (e) {
        let { bounties: t } = e;
        (i = !1), (r = t), (s = new Set());
    },
    BOUNTIES_FETCH_QUEST_HOME_BOUNTIES_FAILURE: function () {
        (i = !1), (r = []), (s = new Set());
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
