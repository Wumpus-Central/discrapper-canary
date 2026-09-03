n.d(t, { I: () => g }), n(323874), n(14289), n(35956);
var i = n(582128),
    r = n(806163),
    a = n(323889),
    s = n(17928),
    l = n(228366),
    o = n(157695),
    d = n(859703),
    c = n(710969);
let u = new Map();
function _(e) {
    let t = u.get(e);
    return null == t && ((t = new Set()), u.set(e, t)), t;
}
function E() {
    let e = d.A.quests,
        t = _(a.p.QUEST),
        n = !1;
    for (let [r, a] of e) {
        var i;
        t.has(r) ||
            (0, c.Ic)(a) ||
            null == (i = a.userStatus) ||
            (null == i.enrolledAt && null == i.completedAt && null == i.claimedAt && 0 === i.dismissedQuestContent) ||
            (t.add(r), (n = !0));
    }
    if (0 !== d.A.lastFetchedCurrentQuests && e.size > 0)
        for (let i of t) {
            let r = e.get(i);
            (null == r || (0, c.Ic)(r)) && (t.delete(i), (n = !0));
        }
    let r = _(a.p.QUEST_HOME_HERO);
    if (null != o.A.getLastFetchedQuestHomeHero() && r.size > 0) {
        let e = o.A.getQuestHomeHero();
        for (let t of r) (null == e || t !== e.id) && (r.delete(t), (n = !0));
    }
    return n;
}
class A extends s.Ay.PersistedStore {
    static displayName = "AdContentSeenStore";
    static persistKey = "AdContentSeenStore";
    initialize(e) {
        if ((this.waitFor(d.A, o.A), (u = new Map()), null != e))
            for (let [t, n] of Object.entries(e.seenContentIds)) u.set(Number(t), new Set(n));
        this.syncWith([d.A, o.A], E);
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
let h = new A(l.h, {
    AD_CONTENT_MARK_SEEN: function (e) {
        let t = _(e.adCreativeType),
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
var I = n(396813),
    f = n(309593),
    p = n(130490);
function T(e) {
    return null != e && "" !== e;
}
function m(e) {
    return T(e?.start) && T(e?.end);
}
function g() {
    let e = (0, p.T2)(),
        t = e?.id,
        { search: n } = (0, r.zy)(),
        l = i.useMemo(() => new URLSearchParams(n).get(f.L1.AD_CREATIVE_IDS), [n]),
        o = i.useMemo(() => null != l && null != t && l.includes(t), [l, t]),
        d = (0, s.bG)([h], () => null != t && h.hasSeen(a.p.QUEST_HOME_HERO, t), [t]);
    return {
        shouldShowQuestHomeHeroContent:
            (function (e) {
                if (null == e) return !1;
                let t = T(e.tooltipTitle) && T(e.tooltipSubtitle);
                return T(e.image) || m(e.linearGradient) || m(e.radialGradient) || t;
            })(e?.questHomeEntrypoint) &&
            (o || !d),
        dismissQuestHomeHeroContent: i.useCallback(() => {
            o || (null != t && (0, I.zh)(a.p.QUEST_HOME_HERO, [t]));
        }, [t, o]),
        questHomeHero: e,
    };
}
