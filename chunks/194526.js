t.d(l, { I: () => m });
var a = t(64700),
    s = t(323889),
    i = t(17928),
    n = t(228366),
    c = t(859703),
    h = t(710969);
let o = new Map();
function r(e) {
    let l = o.get(e);
    return null == l && ((l = new Set()), o.set(e, l)), l;
}
function d() {
    let e = c.A.quests,
        l = r(s.p.QUEST),
        t = !1;
    for (let [s, i] of e) {
        var a;
        l.has(s) ||
            (0, h.Ic)(i) ||
            null == (a = i.userStatus) ||
            (null == a.enrolledAt && null == a.completedAt && null == a.claimedAt && 0 === a.dismissedQuestContent) ||
            (l.add(s), (t = !0));
    }
    if (0 !== c.A.lastFetchedCurrentQuests && e.size > 0)
        for (let a of l) {
            let s = e.get(a);
            (null == s || (0, h.Ic)(s)) && (l.delete(a), (t = !0));
        }
    let i = r(s.p.QUEST_HOME_HERO);
    if (null != c.A.getLastFetchedQuestHomeHero() && i.size > 0) {
        let e = c.A.getQuestHomeHero();
        for (let l of i) (null == e || l !== e.id) && (i.delete(l), (t = !0));
    }
    return t;
}
class v extends i.Ay.PersistedStore {
    static displayName = "AdContentSeenStore";
    static persistKey = "AdContentSeenStore";
    initialize(e) {
        if ((this.waitFor(c.A), (o = new Map()), null != e))
            for (let [l, t] of Object.entries(e.seenContentIds)) o.set(Number(l), new Set(t));
        this.syncWith([c.A], d);
    }
    getState() {
        let e = {};
        for (let [l, t] of o) e[l] = Array.from(t);
        return { seenContentIds: e };
    }
    hasSeen(e, l) {
        return o.get(e)?.has(l) ?? !1;
    }
}
let g = new v(n.h, {
    AD_CONTENT_MARK_SEEN: function (e) {
        let l = r(e.adCreativeType),
            t = !1;
        for (let a of e.contentIds) l.has(a) || (l.add(a), (t = !0));
        return t;
    },
    AD_CONTENT_MARK_UNSEEN: function (e) {
        let l = o.get(e.adCreativeType);
        if (null == l) return !1;
        let t = !1;
        for (let a of e.contentIds) l.has(a) && (l.delete(a), (t = !0));
        return t;
    },
});
var p = t(829219);
function m() {
    let e = (0, i.bG)([c.A], () => c.A.getQuestHomeHero()),
        l = e?.id,
        t = (0, i.bG)([g], () => null != l && g.hasSeen(s.p.QUEST_HOME_HERO, l), [l]);
    return {
        shouldShowQuestHomeHeroContent: e?.questHomeEntrypoint != null && !t,
        dismissQuestHomeHeroContent: a.useCallback(() => {
            null != l && (0, p.zh)(s.p.QUEST_HOME_HERO, [l]);
        }, [l]),
        questHomeHero: e,
    };
}
