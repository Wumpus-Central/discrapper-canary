n.d(t, {
    Ay: () => F,
    Tc: () => G,
    dD: () => j,
    mB: () => M,
    oF: () => k,
    oo: () => x,
    pd: () => L,
}),
    n(896048),
    n(667532);
var r,
    i = n(265690),
    a = n(121894),
    s = n(311907),
    o = n(73153),
    l = n(715314),
    c = n(45143),
    u = n(870570),
    d = n(787925);
function f(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function p(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                f(e, t, n[t]);
            });
    }
    return e;
}
function _(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function h(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : _(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let m = new (n(863620).u)(),
    g = 300000,
    E = 3600000,
    b = () => ({
        candidates: new Map(),
        shownFatigableCandidate: null,
        prevFatigableCandidate: null,
        recentlyShown: [],
        currentlyShown: new Set(),
        currentlyShownGroup: new Set(),
        lastWinnerTime: 0,
        postConnectionOpen: !1,
    }),
    y = (0, i.h)(b),
    O = !1,
    A = (e) =>
        h(p({}, e), {
            candidates: new Map(e.candidates),
            currentlyShown: new Set(e.currentlyShown),
            currentlyShownGroup: new Set(e.currentlyShownGroup),
        }),
    v = (e, t) => {
        var n;
        return (
            null == t ||
                (null != t.content && e.currentlyShown.delete(t.content),
                null != t.groupName && e.currentlyShownGroup.delete(t.groupName),
                (null == (n = e.shownFatigableCandidate) ? void 0 : n.content) === t.content &&
                    (e.shownFatigableCandidate = null)),
            e
        );
    },
    S = (e, t) => {
        var n, r;
        if (null == t) return e;
        e.currentlyShown.add(t.content);
        let i = e.recentlyShown.filter((e) => e !== t.content);
        return (
            i.unshift(t.content),
            i.splice(5),
            (e.recentlyShown = i),
            null != t.groupName && e.currentlyShownGroup.add(t.groupName),
            d.C.has(t.content) ||
                ((e.shownFatigableCandidate = t),
                (null == (r = e.prevFatigableCandidate) ? void 0 : r.content) !== t.content &&
                    ((e.prevFatigableCandidate = t), (e.lastWinnerTime = new Date().getTime()))),
            null == (n = t.onAdded) || n.call(t),
            e
        );
    },
    I = (e, t) => (e.candidates.set(t.content, t), e),
    T = (e, t) => (e.candidates.delete(t.content), e),
    C = (e, t) => S(v(e, e.shownFatigableCandidate), t),
    N = (e) => (null != e.prevFatigableCandidate ? e.candidates.get(e.prevFatigableCandidate.content) : void 0),
    R = (e) => {
        let t = [...e.candidates.keys()];
        return (
            null !== e.prevFatigableCandidate &&
                e.candidates.has(e.prevFatigableCandidate.content) &&
                e.candidates.size > 1 &&
                (t = t.filter((t) => {
                    var n;
                    return t !== (null == (n = e.prevFatigableCandidate) ? void 0 : n.content);
                })),
            e.candidates.get(t[Math.floor(Math.random() * t.length)])
        );
    },
    w = (e) =>
        null != e.prevFatigableCandidate &&
        e.candidates.has(e.prevFatigableCandidate.content) &&
        null == e.shownFatigableCandidate,
    P = (e) => {
        if (0 === e.candidates.size) return e;
        let t = new Date().getTime() - e.lastWinnerTime > g;
        return w(e) && !t
            ? (m.unschedule(), C(e, N(e)))
            : ((null != e.shownFatigableCandidate && !t) ||
                  m.scheduled() ||
                  D(e) ||
                  m.schedule(() => {
                      (0, a.r)(() => {
                          y.setState((e) => {
                              let t = A(e);
                              return C(t, R(t));
                          });
                      });
                  }, 250),
              e);
    },
    D = (e) => {
        let t = new Date().getTime();
        return null == e.shownFatigableCandidate && t - e.lastWinnerTime < E;
    },
    x = (e) => {
        let t = d.C.has(e.content);
        (0, a.r)(() => {
            y.setState((n) => {
                let r = A(n);
                return O ? r : t ? S(r, e) : P(I(r, e));
            });
        });
    },
    L = (e, t) => {
        (0, a.r)(() => {
            y.setState((n) => {
                let r = A(n);
                return t ? P(v(T(r, e), e)) : v(T(r, e), e);
            });
        });
    },
    j = (e) => y.getState().currentlyShown.has(e),
    M = (e) => y((t) => t.currentlyShown.has(e)),
    k = () => {
        let e = [...y.getState().currentlyShown].filter((e) => !d.C.has(e)).length;
        return [y.getState().currentlyShown.size, e];
    },
    U = () => {
        (0, a.r)(() => {
            y.setState(() => {
                let e = b();
                return (e.postConnectionOpen = !0), e;
            });
        }),
            m.unschedule();
    },
    G = () => y.getState().postConnectionOpen;
class V extends (r = s.Ay.Store) {
    initialize() {
        this.waitFor(l.A, u.A), this.syncWith([l.A, u.A], () => this.setHasRequiredAction());
    }
    setHasRequiredAction() {
        O = (0, c.A)(l.A, u.A);
    }
}
function F(e, t) {
    return y(e, t);
}
f(V, "displayName", "DismissibleContentShownStateStore"),
    new V(o.h, {
        CONNECTION_OPEN: () => U(),
        LOGOUT: () => U(),
    });
