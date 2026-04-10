n.d(t, { A: () => A });
var i = n(323889),
    r = n(311907),
    l = n(73153),
    a = n(859703),
    s = n(710969);
let o = new Map();
function d(e) {
    let t = o.get(e);
    return null == t && ((t = new Set()), o.set(e, t)), t;
}
function c() {
    let e = a.A.quests,
        t = d(i.p.QUEST),
        n = !1;
    for (let [i, l] of e) {
        var r;
        t.has(i) ||
            (0, s.Ic)(l) ||
            null == (r = l.userStatus) ||
            (null == r.enrolledAt && null == r.completedAt && null == r.claimedAt && 0 === r.dismissedQuestContent) ||
            (t.add(i), (n = !0));
    }
    if (0 !== a.A.lastFetchedCurrentQuests && e.size > 0)
        for (let i of t) {
            let r = e.get(i);
            (null == r || (0, s.Ic)(r)) && (t.delete(i), (n = !0));
        }
    let l = d(i.p.QUEST_HOME_HERO);
    if (null != a.A.getLastFetchedQuestHomeHero() && l.size > 0) {
        let e = a.A.getQuestHomeHero();
        for (let t of l) (null == e || t !== e.id) && (l.delete(t), (n = !0));
    }
    return n;
}
class u extends r.Ay.PersistedStore {
    static displayName = "AdContentSeenStore";
    static persistKey = "AdContentSeenStore";
    initialize(e) {
        if ((this.waitFor(a.A), (o = new Map()), null != e))
            for (let [t, n] of Object.entries(e.seenContentIds)) o.set(Number(t), new Set(n));
        this.syncWith([a.A], c);
    }
    getState() {
        let e = {};
        for (let [t, n] of o) e[t] = Array.from(n);
        return { seenContentIds: e };
    }
    hasSeen(e, t) {
        return o.get(e)?.has(t) ?? !1;
    }
}
let A = new u(l.h, {
    AD_CONTENT_MARK_SEEN: function (e) {
        let t = d(e.adCreativeType),
            n = !1;
        for (let i of e.contentIds) t.has(i) || (t.add(i), (n = !0));
        return n;
    },
    AD_CONTENT_MARK_UNSEEN: function (e) {
        let t = o.get(e.adCreativeType);
        if (null == t) return !1;
        let n = !1;
        for (let i of e.contentIds) t.has(i) && (t.delete(i), (n = !0));
        return n;
    },
});
