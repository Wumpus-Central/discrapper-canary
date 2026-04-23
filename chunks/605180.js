a.d(l, { A: () => v });
var t = a(323889),
    s = a(311907),
    i = a(73153),
    n = a(859703),
    c = a(710969);
let h = new Map();
function r(e) {
    let l = h.get(e);
    return null == l && ((l = new Set()), h.set(e, l)), l;
}
function o() {
    let e = n.A.quests,
        l = r(t.p.QUEST),
        a = !1;
    for (let [t, i] of e) {
        var s;
        l.has(t) ||
            (0, c.Ic)(i) ||
            null == (s = i.userStatus) ||
            (null == s.enrolledAt && null == s.completedAt && null == s.claimedAt && 0 === s.dismissedQuestContent) ||
            (l.add(t), (a = !0));
    }
    if (0 !== n.A.lastFetchedCurrentQuests && e.size > 0)
        for (let t of l) {
            let s = e.get(t);
            (null == s || (0, c.Ic)(s)) && (l.delete(t), (a = !0));
        }
    let i = r(t.p.QUEST_HOME_HERO);
    if (null != n.A.getLastFetchedQuestHomeHero() && i.size > 0) {
        let e = n.A.getQuestHomeHero();
        for (let l of i) (null == e || l !== e.id) && (i.delete(l), (a = !0));
    }
    return a;
}
class d extends s.Ay.PersistedStore {
    static displayName = "AdContentSeenStore";
    static persistKey = "AdContentSeenStore";
    initialize(e) {
        if ((this.waitFor(n.A), (h = new Map()), null != e))
            for (let [l, a] of Object.entries(e.seenContentIds)) h.set(Number(l), new Set(a));
        this.syncWith([n.A], o);
    }
    getState() {
        let e = {};
        for (let [l, a] of h) e[l] = Array.from(a);
        return { seenContentIds: e };
    }
    hasSeen(e, l) {
        return h.get(e)?.has(l) ?? !1;
    }
}
let v = new d(i.h, {
    AD_CONTENT_MARK_SEEN: function (e) {
        let l = r(e.adCreativeType),
            a = !1;
        for (let t of e.contentIds) l.has(t) || (l.add(t), (a = !0));
        return a;
    },
    AD_CONTENT_MARK_UNSEEN: function (e) {
        let l = h.get(e.adCreativeType);
        if (null == l) return !1;
        let a = !1;
        for (let t of e.contentIds) l.has(t) && (l.delete(t), (a = !0));
        return a;
    },
});
