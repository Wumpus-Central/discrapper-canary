"use strict";
let i, r, a, s, l, o;
n.d(t, { A: () => E });
var d = n(17928),
    c = n(228366);
function u() {
    (i = !1), (r = []), (a = new Set()), (s = new Set()), (l = new Map()), (o = new Map());
}
u();
class _ extends d.Ay.Store {
    static displayName = "BountyStore";
    get isFetchingQuestHomeBounties() {
        return i;
    }
    get questHomeBounties() {
        return r;
    }
    isBountyCompleted(e) {
        return a.has(e);
    }
    getCompletedBountyCount(e) {
        let t = 0;
        for (let n of e) a.has(n.id) && t++;
        return t;
    }
    isClaimingBountyReward(e) {
        return s.has(e);
    }
    areAllBountiesCompleted() {
        return r.every((e) => a.has(e.id));
    }
    getAdDecisionByPlacementAndAdCreativeId(e, t) {
        return l.get(e)?.get(t) ?? null;
    }
    getBountyVideoProgress(e) {
        return o.get(e) ?? null;
    }
}
let E = new _(c.h, {
    LOGOUT: function () {
        u();
    },
    BOUNTIES_FETCH_QUEST_HOME_BOUNTIES_BEGIN: function () {
        i = !0;
    },
    BOUNTIES_FETCH_QUEST_HOME_BOUNTIES_SUCCESS: function (e) {
        let { bounties: t, placement: n, adDecisionsByAdCreativeId: s } = e;
        (i = !1), (r = t), (a = new Set()), (o = new Map()), (l = new Map(l)).set(n, s);
    },
    BOUNTIES_FETCH_QUEST_HOME_BOUNTIES_FAILURE: function (e) {
        let { placement: t } = e;
        (i = !1), (r = []), (a = new Set()), (l = new Map(l)).delete(t);
    },
    BOUNTIES_CLAIM_REWARD_BEGIN: function (e) {
        let { bountyId: t } = e,
            n = new Set(s);
        n.add(t), (s = n);
    },
    BOUNTIES_CLAIM_REWARD_SUCCESS: function (e) {
        let { bountyId: t } = e,
            n = new Set(s);
        n.delete(t), (s = n);
        let i = new Set(a);
        i.add(t), (a = i);
    },
    BOUNTIES_CLAIM_REWARD_FAILURE: function (e) {
        let { bountyId: t } = e,
            n = new Set(s);
        n.delete(t), (s = n);
    },
    BOUNTIES_VIDEO_PROGRESS_UPDATE: function (e) {
        let { bountyId: t, timestampSec: n, maxTimestampSec: i, duration: r } = e,
            a = new Map(o);
        a.set(t, { timestampSec: n, maxTimestampSec: i, duration: r }), (o = a);
    },
    AD_SESSION_RESET: function () {
        o = new Map();
    },
});
