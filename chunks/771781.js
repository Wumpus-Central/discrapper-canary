"use strict";
n.d(t, { Ay: () => U, Tc: () => P, dD: () => D, mB: () => L, oF: () => M, oo: () => O, pd: () => b, uW: () => w }),
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
    _ = 3e5,
    f = 36e5,
    p = () => ({
        candidates: new Map(),
        shownFatigableCandidate: null,
        prevFatigableCandidate: null,
        recentlyShown: [],
        currentlyShown: new Set(),
        currentlyShownGroup: new Set(),
        lastWinnerTime: 0,
        postConnectionOpen: !1,
    }),
    h = (0, r.h)(p),
    m = !1,
    E = (e) => ({
        ...e,
        candidates: new Map(e.candidates),
        currentlyShown: new Set(e.currentlyShown),
        currentlyShownGroup: new Set(e.currentlyShownGroup),
    }),
    g = (e, t) => (
        null == t ||
            (null != t.content && e.currentlyShown.delete(t.content),
            null != t.groupName && e.currentlyShownGroup.delete(t.groupName),
            e.shownFatigableCandidate?.content === t.content && (e.shownFatigableCandidate = null)),
        e
    ),
    A = (e, t) => {
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
    I = (e, t) => (e.candidates.set(t.content, t), e),
    T = (e, t) => (e.candidates.delete(t.content), e),
    S = (e, t) => A(g(e, e.shownFatigableCandidate), t),
    y = (e) => (null != e.prevFatigableCandidate ? e.candidates.get(e.prevFatigableCandidate.content) : void 0),
    v = (e) => {
        let t = [...e.candidates.keys()];
        return (
            null !== e.prevFatigableCandidate &&
                e.candidates.has(e.prevFatigableCandidate.content) &&
                e.candidates.size > 1 &&
                (t = t.filter((t) => t !== e.prevFatigableCandidate?.content)),
            e.candidates.get(t[Math.floor(Math.random() * t.length)])
        );
    },
    N = (e) =>
        null != e.prevFatigableCandidate &&
        e.candidates.has(e.prevFatigableCandidate.content) &&
        null == e.shownFatigableCandidate,
    C = (e) => {
        if (0 === e.candidates.size) return e;
        let t = new Date().getTime() - e.lastWinnerTime > _;
        return N(e) && !t
            ? (d.unschedule(), S(e, y(e)))
            : ((null != e.shownFatigableCandidate && !t) ||
                  d.scheduled() ||
                  R(e) ||
                  d.schedule(() => {
                      (0, i.r)(() => {
                          h.setState((e) => {
                              let t = E(e);
                              return S(t, v(t));
                          });
                      });
                  }, 250),
              e);
    },
    R = (e) => {
        let t = new Date().getTime();
        return null == e.shownFatigableCandidate && t - e.lastWinnerTime < f;
    },
    O = (e) => {
        let t = c.C.has(e.content);
        (0, i.r)(() => {
            h.setState((n) => {
                let r = E(n);
                return m ? r : t ? A(r, e) : C(I(r, e));
            });
        });
    },
    b = (e, t) => {
        (0, i.r)(() => {
            h.setState((n) => {
                let r = E(n);
                return t ? C(g(T(r, e), e)) : g(T(r, e), e);
            });
        });
    },
    D = (e) => h.getState().currentlyShown.has(e),
    L = (e) => h((t) => t.currentlyShown.has(e)),
    w = (e) => h((t) => e.some((e) => t.currentlyShown.has(e))),
    M = () => {
        let e = [...h.getState().currentlyShown].filter((e) => !c.C.has(e)).length;
        return [h.getState().currentlyShown.size, e];
    },
    x = () => {
        (0, i.r)(() => {
            h.setState(() => {
                let e = p();
                return (e.postConnectionOpen = !0), e;
            });
        }),
            d.unschedule();
    },
    P = () => h.getState().postConnectionOpen;
class k extends s.Ay.Store {
    static displayName = "DismissibleContentShownStateStore";
    initialize() {
        this.waitFor(o.A, u.A), this.syncWith([o.A, u.A], () => this.setHasRequiredAction());
    }
    setHasRequiredAction() {
        m = (0, l.A)(o.A, u.A);
    }
}
function U(e, t) {
    return h(e, t);
}
new k(a.h, { CONNECTION_OPEN: () => x(), LOGOUT: () => x() });
