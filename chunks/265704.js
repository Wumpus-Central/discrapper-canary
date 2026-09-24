let i, r, a, s, l, o;
n.d(t, { A: () => h });
var d = n(323889),
    c = n(17928),
    u = n(228366);
function _() {
    ((i = !1), (r = []), (a = new Set()), (s = new Set()), (l = new Map()), (o = new Map()));
}
function E(e) {
    let t = new Set(a),
        n = new Map(o);
    for (let i of e) t.delete(i) && n.delete(i);
    ((a = t), (o = n));
}
_();
class A extends c.Ay.Store {
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
let h = new A(u.h, {
    LOGOUT: function () {
        _();
    },
    BOUNTIES_FETCH_QUEST_HOME_BOUNTIES_BEGIN: function () {
        i = !0;
    },
    BOUNTIES_FETCH_QUEST_HOME_BOUNTIES_SUCCESS: function (e) {
        let { bounties: t, placement: n, adDecisionsByAdCreativeId: a } = e;
        ((i = !1), (r = t), E(t.map((e) => e.id)), (l = new Map(l)).set(n, a));
    },
    BOUNTIES_FETCH_QUEST_HOME_BOUNTIES_FAILURE: function (e) {
        let { placement: t } = e;
        ((i = !1), (r = []), (l = new Map(l)).delete(t));
    },
    QUESTS_FETCH_QUEST_TO_DELIVER_SUCCESS: function (e) {
        let { creative: t } = e;
        if (t?.type !== d.p.BOUNTY) return !1;
        E([t.bounty.id]);
    },
    BOUNTIES_CLAIM_REWARD_BEGIN: function (e) {
        let { bountyId: t } = e,
            n = new Set(s);
        (n.add(t), (s = n));
    },
    BOUNTIES_CLAIM_REWARD_SUCCESS: function (e) {
        let { bountyId: t } = e,
            n = new Set(s);
        (n.delete(t), (s = n));
        let i = new Set(a);
        (i.add(t), (a = i));
    },
    BOUNTIES_CLAIM_REWARD_FAILURE: function (e) {
        let { bountyId: t } = e,
            n = new Set(s);
        (n.delete(t), (s = n));
    },
    BOUNTIES_VIDEO_PROGRESS_UPDATE: function (e) {
        let { bountyId: t, timestampSec: n, maxTimestampSec: i, duration: r } = e,
            a = new Map(o);
        (a.set(t, { timestampSec: n, maxTimestampSec: i, duration: r }), (o = a));
    },
    AD_SESSION_RESET: function () {
        o = new Map();
    },
    ADS_CREATIVE_PREVIEW_DELIVERY_STATE_RESET: function (e) {
        let { adCreativeId: t } = e,
            n = a.has(t),
            i = o.has(t);
        if (!n && !i) return !1;
        if (n) {
            let e = new Set(a);
            (e.delete(t), (a = e));
        }
        if (i) {
            let e = new Map(o);
            (e.delete(t), (o = e));
        }
    },
    ADS_PREVIEW_DELIVERY_STATE_LOOKBACK_RESET: function (e) {
        if (0 === a.size && 0 === o.size) return !1;
        ((a = new Set()), (o = new Map()));
    },
});
