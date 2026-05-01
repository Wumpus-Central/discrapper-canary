n.d(t, { Ay: () => P, Tc: () => b, dD: () => C, mB: () => R, oF: () => L, oo: () => m, pd: () => O, uW: () => g }),
    n(667532);
var i = n(265690),
    a = n(121894),
    r = n(17928),
    s = n(228366),
    l = n(715314),
    o = n(45143),
    d = n(870570),
    c = n(787925);
let _ = new (n(863620).u)(),
    E = () => ({
        candidates: new Map(),
        shownFatigableCandidate: null,
        prevFatigableCandidate: null,
        recentlyShown: [],
        currentlyShown: new Set(),
        currentlyShownGroup: new Set(),
        lastWinnerTime: 0,
        postConnectionOpen: !1,
    }),
    u = (0, i.h)(E),
    A = !1,
    I = (e) => ({
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
    h = (e, t) => {
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
    S = (e, t) => (e.candidates.delete(t.content), e),
    N = (e, t) => h(T(e, e.shownFatigableCandidate), t),
    f = (e) => {
        if (0 === e.candidates.size) return e;
        let t = new Date().getTime() - e.lastWinnerTime > 3e5;
        if (
            null != e.prevFatigableCandidate &&
            e.candidates.has(e.prevFatigableCandidate.content) &&
            null == e.shownFatigableCandidate &&
            !t
        )
            return (
                _.unschedule(),
                N(e, null != e.prevFatigableCandidate ? e.candidates.get(e.prevFatigableCandidate.content) : void 0)
            );
        return (
            (null != e.shownFatigableCandidate && !t) ||
                _.scheduled() ||
                p(e) ||
                _.schedule(() => {
                    (0, a.r)(() => {
                        u.setState((e) => {
                            let t,
                                n = I(e);
                            return N(
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
    p = (e) => {
        let t = new Date().getTime();
        return null == e.shownFatigableCandidate && t - e.lastWinnerTime < 36e5;
    },
    m = (e) => {
        let t = c.C.has(e.content);
        (0, a.r)(() => {
            u.setState((n) => {
                let i = I(n);
                return A ? i : t ? h(i, e) : f((i.candidates.set(e.content, e), i));
            });
        });
    },
    O = (e, t) => {
        (0, a.r)(() => {
            u.setState((n) => {
                let i = I(n);
                return t ? f(T(S(i, e), e)) : T(S(i, e), e);
            });
        });
    },
    C = (e) => u.getState().currentlyShown.has(e),
    R = (e) => u((t) => t.currentlyShown.has(e)),
    g = (e) => u((t) => e.some((e) => t.currentlyShown.has(e))),
    L = () => {
        let e = [...u.getState().currentlyShown].filter((e) => !c.C.has(e)).length;
        return [u.getState().currentlyShown.size, e];
    },
    D = () => {
        (0, a.r)(() => {
            u.setState(() => {
                let e = E();
                return (e.postConnectionOpen = !0), e;
            });
        }),
            _.unschedule();
    },
    b = () => u.getState().postConnectionOpen;
class M extends r.Ay.Store {
    static displayName = "DismissibleContentShownStateStore";
    initialize() {
        this.waitFor(l.A, d.A), this.syncWith([l.A, d.A], () => this.setHasRequiredAction());
    }
    setHasRequiredAction() {
        A = (0, o.A)(l.A, d.A);
    }
}
function P(e, t) {
    return u(e, t);
}
new M(s.h, { CONNECTION_OPEN: () => D(), LOGOUT: () => D() });
