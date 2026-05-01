"use strict";
n.d(t, { I: () => p });
var i = n(64700),
    r = n(323889),
    s = n(17928),
    a = n(228366),
    o = n(859703),
    l = n(710969);
let u = new Map();
function c(e) {
    let t = u.get(e);
    return null == t && ((t = new Set()), u.set(e, t)), t;
}
function d() {
    let e = o.A.quests,
        t = c(r.p.QUEST),
        n = !1;
    for (let [r, s] of e) {
        var i;
        t.has(r) ||
            (0, l.Ic)(s) ||
            null == (i = s.userStatus) ||
            (null == i.enrolledAt && null == i.completedAt && null == i.claimedAt && 0 === i.dismissedQuestContent) ||
            (t.add(r), (n = !0));
    }
    if (0 !== o.A.lastFetchedCurrentQuests && e.size > 0)
        for (let i of t) {
            let r = e.get(i);
            (null == r || (0, l.Ic)(r)) && (t.delete(i), (n = !0));
        }
    let s = c(r.p.QUEST_HOME_HERO);
    if (null != o.A.getLastFetchedQuestHomeHero() && s.size > 0) {
        let e = o.A.getQuestHomeHero();
        for (let t of s) (null == e || t !== e.id) && (s.delete(t), (n = !0));
    }
    return n;
}
class _ extends s.Ay.PersistedStore {
    static displayName = "AdContentSeenStore";
    static persistKey = "AdContentSeenStore";
    initialize(e) {
        if ((this.waitFor(o.A), (u = new Map()), null != e))
            for (let [t, n] of Object.entries(e.seenContentIds)) u.set(Number(t), new Set(n));
        this.syncWith([o.A], d);
    }
    getState() {
        let e = {};
        for (let [t, n] of u) e[t] = Array.from(n);
        return { seenContentIds: e };
    }
    hasSeen(e, t) {
        return u.get(e)?.has(t) ?? !1;
    }
}
let f = new _(a.h, {
    AD_CONTENT_MARK_SEEN: function (e) {
        let t = c(e.adCreativeType),
            n = !1;
        for (let i of e.contentIds) t.has(i) || (t.add(i), (n = !0));
        return n;
    },
    AD_CONTENT_MARK_UNSEEN: function (e) {
        let t = u.get(e.adCreativeType);
        if (null == t) return !1;
        let n = !1;
        for (let i of e.contentIds) t.has(i) && (t.delete(i), (n = !0));
        return n;
    },
});
var h = n(340124);
function p() {
    let e = (0, s.bG)([o.A], () => o.A.getQuestHomeHero()),
        t = e?.id,
        n = (0, s.bG)([f], () => null != t && f.hasSeen(r.p.QUEST_HOME_HERO, t), [t]);
    return {
        shouldShowQuestHomeHeroContent: e?.questHomeEntrypoint != null && !n,
        dismissQuestHomeHeroContent: i.useCallback(() => {
            null != t && (0, h.zh)(r.p.QUEST_HOME_HERO, [t]);
        }, [t]),
        questHomeHero: e,
    };
}
