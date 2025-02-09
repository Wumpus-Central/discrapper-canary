n.d(t, {
    Aq: () => A,
    ZP: () => C,
    bn: () => S,
    cI: () => b,
    f0: () => I,
    gE: () => T,
    mc: () => N
}),
    n(47120),
    n(733860);
var i = n(65400),
    r = n(731965),
    a = n(261376);
let s = new (n(499303).I)(),
    o = 300000,
    l = 3600000,
    u = () => ({
        candidates: new Map(),
        shownFatigableCandidate: null,
        prevFatigableCandidate: null,
        recentlyShown: [],
        currentlyShown: new Set(),
        currentlyShownGroup: new Set(),
        lastWinnerTime: 0
    }),
    c = (0, i.F)(u),
    d = (e) => ({
        ...e,
        candidates: new Map(e.candidates),
        currentlyShown: new Set(e.currentlyShown),
        currentlyShownGroup: new Set(e.currentlyShownGroup)
    }),
    f = (e, t) => {
        var n;
        return null == t || (null != t.content && e.currentlyShown.delete(t.content), null != t.groupName && e.currentlyShownGroup.delete(t.groupName), (null === (n = e.shownFatigableCandidate) || void 0 === n ? void 0 : n.content) === t.content && (e.shownFatigableCandidate = null)), e;
    },
    _ = (e, t) => {
        var n, i;
        if (null == t) return e;
        e.currentlyShown.add(t.content);
        let r = e.recentlyShown.filter((e) => e !== t.content);
        return r.unshift(t.content), r.splice(5), (e.recentlyShown = r), null != t.groupName && e.currentlyShownGroup.add(t.groupName), a.O.has(t.content) || ((e.shownFatigableCandidate = t), (null === (i = e.prevFatigableCandidate) || void 0 === i ? void 0 : i.content) !== t.content && ((e.prevFatigableCandidate = t), (e.lastWinnerTime = new Date().getTime()))), null === (n = t.onAdded) || void 0 === n || n.call(t), e;
    },
    p = (e, t) => (e.candidates.set(t.content, t), e),
    h = (e, t) => (e.candidates.delete(t.content), e),
    m = (e, t) => _(f(e, e.shownFatigableCandidate), t),
    g = (e) => (null != e.prevFatigableCandidate ? e.candidates.get(e.prevFatigableCandidate.content) : void 0),
    E = (e) => {
        let t = [...e.candidates.keys()];
        return (
            null !== e.prevFatigableCandidate &&
                e.candidates.has(e.prevFatigableCandidate.content) &&
                e.candidates.size > 1 &&
                (t = t.filter((t) => {
                    var n;
                    return t !== (null === (n = e.prevFatigableCandidate) || void 0 === n ? void 0 : n.content);
                })),
            e.candidates.get(t[Math.floor(Math.random() * t.length)])
        );
    },
    v = (e) => null != e.prevFatigableCandidate && e.candidates.has(e.prevFatigableCandidate.content) && null == e.shownFatigableCandidate,
    y = (e) => {
        if (0 === e.candidates.size) return e;
        let t = new Date().getTime() - e.lastWinnerTime > o;
        if (v(e) && !t) return s.unschedule(), m(e, g(e));
        if ((null != e.shownFatigableCandidate && !t) || s.scheduled()) return e;
        let n = new Date().getTime();
        return (
            (null == e.shownFatigableCandidate && n - e.lastWinnerTime < l) ||
                s.schedule(() => {
                    (0, r.j)(() => {
                        c.setState((e) => {
                            let t = d(e);
                            return m(t, E(t));
                        });
                    });
                }, 250),
            e
        );
    },
    I = (e) => {
        let t = a.O.has(e.content);
        (0, r.j)(() => {
            c.setState((n) => {
                let i = d(n);
                return t ? _(i, e) : y(p(i, e));
            });
        });
    },
    T = (e, t) => {
        (0, r.j)(() => {
            c.setState((n) => {
                let i = d(n);
                return t ? y(f(h(i, e), e)) : f(h(i, e), e);
            });
        });
    },
    b = (e) => c.getState().currentlyShown.has(e),
    S = (e) => c((t) => t.currentlyShown.has(e)),
    A = () => {
        let e = [...c.getState().currentlyShown].filter((e) => !a.O.has(e)).length;
        return [c.getState().currentlyShown.size, e];
    },
    N = () => {
        (0, r.j)(() => c.setState(u)), s.unschedule();
    };
function C(e, t) {
    return c(e, t);
}
