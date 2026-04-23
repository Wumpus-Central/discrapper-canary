"use strict";
n.d(t, { Ay: () => L, Tc: () => b, dD: () => N, mB: () => v, oF: () => O, oo: () => S, pd: () => y, uW: () => C }),
    n(667532);
var r = n(265690),
    i = n(121894),
    s = n(311907),
    a = n(73153),
    o = n(715314),
    l = n(45143),
    u = n(870570),
    c = n(787925);
let d = new (n(863620).u)(),
    _ = () => ({
        candidates: new Map(),
        shownFatigableCandidate: null,
        prevFatigableCandidate: null,
        recentlyShown: [],
        currentlyShown: new Set(),
        currentlyShownGroup: new Set(),
        lastWinnerTime: 0,
        postConnectionOpen: !1,
    }),
    f = (0, r.h)(_),
    p = !1,
    h = (e) => ({
        ...e,
        candidates: new Map(e.candidates),
        currentlyShown: new Set(e.currentlyShown),
        currentlyShownGroup: new Set(e.currentlyShownGroup),
    }),
    E = (e, t) => (
        null == t ||
            (null != t.content && e.currentlyShown.delete(t.content),
            null != t.groupName && e.currentlyShownGroup.delete(t.groupName),
            e.shownFatigableCandidate?.content === t.content && (e.shownFatigableCandidate = null)),
        e
    ),
    m = (e, t) => {
        if (null == t) return e;
        e.currentlyShown.add(t.content);
        let n = e.recentlyShown.filter((e) => e !== t.content);
        return (
            n.unshift(t.content),
            n.splice(5),
            (e.recentlyShown = n),
            null != t.groupName && e.currentlyShownGroup.add(t.groupName),
            c.C.has(t.content) ||
                ((e.shownFatigableCandidate = t),
                e.prevFatigableCandidate?.content !== t.content &&
                    ((e.prevFatigableCandidate = t), (e.lastWinnerTime = new Date().getTime()))),
            t.onAdded?.(),
            e
        );
    },
    g = (e, t) => (e.candidates.delete(t.content), e),
    A = (e, t) => m(E(e, e.shownFatigableCandidate), t),
    I = (e) => {
        if (0 === e.candidates.size) return e;
        let t = new Date().getTime() - e.lastWinnerTime > 3e5;
        if (
            null != e.prevFatigableCandidate &&
            e.candidates.has(e.prevFatigableCandidate.content) &&
            null == e.shownFatigableCandidate &&
            !t
        )
            return (
                d.unschedule(),
                A(e, null != e.prevFatigableCandidate ? e.candidates.get(e.prevFatigableCandidate.content) : void 0)
            );
        return (
            (null != e.shownFatigableCandidate && !t) ||
                d.scheduled() ||
                T(e) ||
                d.schedule(() => {
                    (0, i.r)(() => {
                        f.setState((e) => {
                            let t,
                                n = h(e);
                            return A(
                                n,
                                ((t = [...n.candidates.keys()]),
                                null !== n.prevFatigableCandidate &&
                                    n.candidates.has(n.prevFatigableCandidate.content) &&
                                    n.candidates.size > 1 &&
                                    (t = t.filter((e) => e !== n.prevFatigableCandidate?.content)),
                                n.candidates.get(t[Math.floor(Math.random() * t.length)])),
                            );
                        });
                    });
                }, 250),
            e
        );
    },
    T = (e) => {
        let t = new Date().getTime();
        return null == e.shownFatigableCandidate && t - e.lastWinnerTime < 36e5;
    },
    S = (e) => {
        let t = c.C.has(e.content);
        (0, i.r)(() => {
            f.setState((n) => {
                let r = h(n);
                return p ? r : t ? m(r, e) : I((r.candidates.set(e.content, e), r));
            });
        });
    },
    y = (e, t) => {
        (0, i.r)(() => {
            f.setState((n) => {
                let r = h(n);
                return t ? I(E(g(r, e), e)) : E(g(r, e), e);
            });
        });
    },
    N = (e) => f.getState().currentlyShown.has(e),
    v = (e) => f((t) => t.currentlyShown.has(e)),
    C = (e) => f((t) => e.some((e) => t.currentlyShown.has(e))),
    O = () => {
        let e = [...f.getState().currentlyShown].filter((e) => !c.C.has(e)).length;
        return [f.getState().currentlyShown.size, e];
    },
    R = () => {
        (0, i.r)(() => {
            f.setState(() => {
                let e = _();
                return (e.postConnectionOpen = !0), e;
            });
        }),
            d.unschedule();
    },
    b = () => f.getState().postConnectionOpen;
class D extends s.Ay.Store {
    static displayName = "DismissibleContentShownStateStore";
    initialize() {
        this.waitFor(o.A, u.A), this.syncWith([o.A, u.A], () => this.setHasRequiredAction());
    }
    setHasRequiredAction() {
        p = (0, l.A)(o.A, u.A);
    }
}
function L(e, t) {
    return f(e, t);
}
new D(a.h, { CONNECTION_OPEN: () => R(), LOGOUT: () => R() });
