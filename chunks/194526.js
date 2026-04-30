n.d(t, { I: () => I });
var i = n(64700),
    a = n(323889),
    r = n(17928),
    s = n(228366),
    l = n(859703),
    o = n(710969);
let d = new Map();
function c(e) {
    let t = d.get(e);
    return null == t && ((t = new Set()), d.set(e, t)), t;
}
function _() {
    let e = l.A.quests,
        t = c(a.p.QUEST),
        n = !1;
    for (let [a, r] of e) {
        var i;
        t.has(a) ||
            (0, o.Ic)(r) ||
            null == (i = r.userStatus) ||
            (null == i.enrolledAt && null == i.completedAt && null == i.claimedAt && 0 === i.dismissedQuestContent) ||
            (t.add(a), (n = !0));
    }
    if (0 !== l.A.lastFetchedCurrentQuests && e.size > 0)
        for (let i of t) {
            let a = e.get(i);
            (null == a || (0, o.Ic)(a)) && (t.delete(i), (n = !0));
        }
    let r = c(a.p.QUEST_HOME_HERO);
    if (null != l.A.getLastFetchedQuestHomeHero() && r.size > 0) {
        let e = l.A.getQuestHomeHero();
        for (let t of r) (null == e || t !== e.id) && (r.delete(t), (n = !0));
    }
    return n;
}
class E extends r.Ay.PersistedStore {
    static displayName = "AdContentSeenStore";
    static persistKey = "AdContentSeenStore";
    initialize(e) {
        if ((this.waitFor(l.A), (d = new Map()), null != e))
            for (let [t, n] of Object.entries(e.seenContentIds)) d.set(Number(t), new Set(n));
        this.syncWith([l.A], _);
    }
    getState() {
        let e = {};
        for (let [t, n] of d) e[t] = Array.from(n);
        return { seenContentIds: e };
    }
    hasSeen(e, t) {
        return d.get(e)?.has(t) ?? !1;
    }
}
let u = new E(s.h, {
    AD_CONTENT_MARK_SEEN: function (e) {
        let t = c(e.adCreativeType),
            n = !1;
        for (let i of e.contentIds) t.has(i) || (t.add(i), (n = !0));
        return n;
    },
    AD_CONTENT_MARK_UNSEEN: function (e) {
        let t = d.get(e.adCreativeType);
        if (null == t) return !1;
        let n = !1;
        for (let i of e.contentIds) t.has(i) && (t.delete(i), (n = !0));
        return n;
    },
});
var A = n(829219);
function I() {
    let e = (0, r.bG)([l.A], () => l.A.getQuestHomeHero()),
        t = e?.id,
        n = (0, r.bG)([u], () => null != t && u.hasSeen(a.p.QUEST_HOME_HERO, t), [t]);
    return {
        shouldShowQuestHomeHeroContent: e?.questHomeEntrypoint != null && !n,
        dismissQuestHomeHeroContent: i.useCallback(() => {
            null != t && (0, A.zh)(a.p.QUEST_HOME_HERO, [t]);
        }, [t]),
        questHomeHero: e,
    };
}
