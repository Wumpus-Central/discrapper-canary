n.d(t, { Ay: () => P, Tc: () => b, dD: () => m, mB: () => L, oF: () => h, oo: () => C, pd: () => p, uW: () => D }),
    n(667532);
var i = n(265690),
    r = n(121894),
    a = n(17928),
    s = n(228366),
    _ = n(715314),
    l = n(45143),
    o = n(870570),
    E = n(787925);
let d = new (n(863620).u)(),
    c = () => ({
        candidates: new Map(),
        shownFatigableCandidate: null,
        prevFatigableCandidate: null,
        recentlyShown: [],
        currentlyShown: new Set(),
        currentlyShownGroup: new Set(),
        lastWinnerTime: 0,
        postConnectionOpen: !1,
    }),
    u = (0, i.h)(c),
    I = !1,
    A = (e) => ({
        ...e,
        candidates: new Map(e.candidates),
        currentlyShown: new Set(e.currentlyShown),
        currentlyShownGroup: new Set(e.currentlyShownGroup),
    }),
    T = (e, t) => (
        null == t ||
            (null != t.content && e.currentlyShown.delete(t.content),
            null != t.groupName && e.currentlyShownGroup.delete(t.groupName),
            e.shownFatigableCandidate?.content === t.content && (e.shownFatigableCandidate = null)),
        e
    ),
    S = (e, t) => {
        if (null == t) return e;
        e.currentlyShown.add(t.content);
        let n = e.recentlyShown.filter((e) => e !== t.content);
        return (
            n.unshift(t.content),
            n.splice(5),
            (e.recentlyShown = n),
            null != t.groupName && e.currentlyShownGroup.add(t.groupName),
            E.C.has(t.content) ||
                ((e.shownFatigableCandidate = t),
                e.prevFatigableCandidate?.content !== t.content &&
                    ((e.prevFatigableCandidate = t), (e.lastWinnerTime = new Date().getTime()))),
            t.onAdded?.(),
            e
        );
    },
    N = (e, t) => (e.candidates.delete(t.content), e),
    O = (e, t) => S(T(e, e.shownFatigableCandidate), t),
    R = (e) => {
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
                O(e, null != e.prevFatigableCandidate ? e.candidates.get(e.prevFatigableCandidate.content) : void 0)
            );
        return (
            (null != e.shownFatigableCandidate && !t) ||
                d.scheduled() ||
                f(e) ||
                d.schedule(() => {
                    (0, r.r)(() => {
                        u.setState((e) => {
                            let t,
                                n = A(e);
                            return O(
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
    f = (e) => {
        let t = new Date().getTime();
        return null == e.shownFatigableCandidate && t - e.lastWinnerTime < 36e5;
    },
    C = (e) => {
        let t = E.C.has(e.content);
        (0, r.r)(() => {
            u.setState((n) => {
                let i = A(n);
                return I ? i : t ? S(i, e) : R((i.candidates.set(e.content, e), i));
            });
        });
    },
    p = (e, t) => {
        (0, r.r)(() => {
            u.setState((n) => {
                let i = A(n);
                return t ? R(T(N(i, e), e)) : T(N(i, e), e);
            });
        });
    },
    m = (e) => u.getState().currentlyShown.has(e),
    L = (e) => u((t) => t.currentlyShown.has(e)),
    D = (e) => u((t) => e.some((e) => t.currentlyShown.has(e))),
    h = () => {
        let e = [...u.getState().currentlyShown].filter((e) => !E.C.has(e)).length;
        return [u.getState().currentlyShown.size, e];
    },
    g = () => {
        (0, r.r)(() => {
            u.setState(() => {
                let e = c();
                return (e.postConnectionOpen = !0), e;
            });
        }),
            d.unschedule();
    },
    b = () => u.getState().postConnectionOpen;
class U extends a.Ay.Store {
    static displayName = "DismissibleContentShownStateStore";
    initialize() {
        this.waitFor(_.A, o.A), this.syncWith([_.A, o.A], () => this.setHasRequiredAction());
    }
    setHasRequiredAction() {
        I = (0, l.A)(_.A, o.A);
    }
}
function P(e, t) {
    return u(e, t);
}
new U(s.h, { CONNECTION_OPEN: () => g(), LOGOUT: () => g() });
