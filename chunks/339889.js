"use strict";
n.d(t, { I: () => m }), n(323874), n(14289), n(35956);
var i = n(582128),
    r = n(806163),
    a = n(323889),
    s = n(17928),
    l = n(228366),
    o = n(859703),
    d = n(710969);
let c = new Map();
function u(e) {
    let t = c.get(e);
    return null == t && ((t = new Set()), c.set(e, t)), t;
}
function _() {
    let e = o.A.quests,
        t = u(a.p.QUEST),
        n = !1;
    for (let [r, a] of e) {
        var i;
        t.has(r) ||
            (0, d.Ic)(a) ||
            null == (i = a.userStatus) ||
            (null == i.enrolledAt && null == i.completedAt && null == i.claimedAt && 0 === i.dismissedQuestContent) ||
            (t.add(r), (n = !0));
    }
    if (0 !== o.A.lastFetchedCurrentQuests && e.size > 0)
        for (let i of t) {
            let r = e.get(i);
            (null == r || (0, d.Ic)(r)) && (t.delete(i), (n = !0));
        }
    let r = u(a.p.QUEST_HOME_HERO);
    if (null != o.A.getLastFetchedQuestHomeHero() && r.size > 0) {
        let e = o.A.getQuestHomeHero();
        for (let t of r) (null == e || t !== e.id) && (r.delete(t), (n = !0));
    }
    return n;
}
class E extends s.Ay.PersistedStore {
    static displayName = "AdContentSeenStore";
    static persistKey = "AdContentSeenStore";
    initialize(e) {
        if ((this.waitFor(o.A), (c = new Map()), null != e))
            for (let [t, n] of Object.entries(e.seenContentIds)) c.set(Number(t), new Set(n));
        this.syncWith([o.A], _);
    }
    getState() {
        let e = {};
        for (let [t, n] of c) e[t] = Array.from(n);
        return { seenContentIds: e };
    }
    hasSeen(e, t) {
        return c.get(e)?.has(t) ?? !1;
    }
}
let A = new E(l.h, {
    AD_CONTENT_MARK_SEEN: function (e) {
        let t = u(e.adCreativeType),
            n = !1;
        for (let i of e.contentIds) t.has(i) || (t.add(i), (n = !0));
        return n;
    },
    AD_CONTENT_MARK_UNSEEN: function (e) {
        let t = c.get(e.adCreativeType);
        if (null == t) return !1;
        let n = !1;
        for (let i of e.contentIds) t.has(i) && (t.delete(i), (n = !0));
        return n;
    },
});
var h = n(396813),
    I = n(309593),
    f = n(201805);
function p(e) {
    return null != e && "" !== e;
}
function T(e) {
    return p(e?.start) && p(e?.end);
}
function m() {
    let e = (0, f.T2)(),
        t = e?.id,
        { search: n } = (0, r.zy)(),
        l = i.useMemo(() => new URLSearchParams(n).get(I.L1.AD_CREATIVE_IDS), [n]),
        o = i.useMemo(() => null != l && null != t && l.includes(t), [l, t]),
        d = (0, s.bG)([A], () => null != t && A.hasSeen(a.p.QUEST_HOME_HERO, t), [t]);
    return {
        shouldShowQuestHomeHeroContent:
            (function (e) {
                if (null == e) return !1;
                let t = p(e.tooltipTitle) && p(e.tooltipSubtitle);
                return p(e.image) || T(e.linearGradient) || T(e.radialGradient) || t;
            })(e?.questHomeEntrypoint) &&
            (o || !d),
        dismissQuestHomeHeroContent: i.useCallback(() => {
            o || (null != t && (0, h.zh)(a.p.QUEST_HOME_HERO, [t]));
        }, [t, o]),
        questHomeHero: e,
    };
}
