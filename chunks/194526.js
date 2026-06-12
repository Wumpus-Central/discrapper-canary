"use strict";
n.d(t, { I: () => A }), n(323874), n(14289), n(35956);
var i = n(64700),
    r = n(873263),
    s = n(323889),
    a = n(17928),
    o = n(228366),
    l = n(859703),
    u = n(710969);
let c = new Map();
function d(e) {
    let t = c.get(e);
    return null == t && ((t = new Set()), c.set(e, t)), t;
}
function _() {
    let e = l.A.quests,
        t = d(s.p.QUEST),
        n = !1;
    for (let [r, s] of e) {
        var i;
        t.has(r) ||
            (0, u.Ic)(s) ||
            null == (i = s.userStatus) ||
            (null == i.enrolledAt && null == i.completedAt && null == i.claimedAt && 0 === i.dismissedQuestContent) ||
            (t.add(r), (n = !0));
    }
    if (0 !== l.A.lastFetchedCurrentQuests && e.size > 0)
        for (let i of t) {
            let r = e.get(i);
            (null == r || (0, u.Ic)(r)) && (t.delete(i), (n = !0));
        }
    let r = d(s.p.QUEST_HOME_HERO);
    if (null != l.A.getLastFetchedQuestHomeHero() && r.size > 0) {
        let e = l.A.getQuestHomeHero();
        for (let t of r) (null == e || t !== e.id) && (r.delete(t), (n = !0));
    }
    return n;
}
class h extends a.Ay.PersistedStore {
    static displayName = "AdContentSeenStore";
    static persistKey = "AdContentSeenStore";
    initialize(e) {
        if ((this.waitFor(l.A), (c = new Map()), null != e))
            for (let [t, n] of Object.entries(e.seenContentIds)) c.set(Number(t), new Set(n));
        this.syncWith([l.A], _);
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
let f = new h(o.h, {
    AD_CONTENT_MARK_SEEN: function (e) {
        let t = d(e.adCreativeType),
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
var p = n(340124),
    E = n(31587);
function m(e) {
    return null != e && "" !== e;
}
function g(e) {
    return m(e?.start) && m(e?.end);
}
function A() {
    let e = (0, E.T2)(),
        t = e?.id,
        { search: n } = (0, r.zy)(),
        o = i.useMemo(() => new URLSearchParams(n).get(E.L1.AD_CREATIVE_IDS), [n]),
        l = i.useMemo(() => null != o && null != t && o.includes(t), [o, t]),
        u = (0, a.bG)([f], () => null != t && f.hasSeen(s.p.QUEST_HOME_HERO, t), [t]);
    return {
        shouldShowQuestHomeHeroContent:
            (function (e) {
                if (null == e) return !1;
                let t = m(e.tooltipTitle) && m(e.tooltipSubtitle);
                return m(e.image) || g(e.linearGradient) || g(e.radialGradient) || t;
            })(e?.questHomeEntrypoint) &&
            (l || !u),
        dismissQuestHomeHeroContent: i.useCallback(() => {
            l || (null != t && (0, p.zh)(s.p.QUEST_HOME_HERO, [t]));
        }, [t, l]),
        questHomeHero: e,
    };
}
