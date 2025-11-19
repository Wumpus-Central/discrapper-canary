n.d(t, {
    Aq: () => B,
    Do: () => j,
    Kl: () => F,
    ZP: () => H,
    bn: () => G,
    cI: () => U,
    cv: () => w,
    f0: () => x,
    gE: () => M,
    og: () => k,
}),
    n(388685),
    n(290780);
var r,
    i = n(748521),
    a = n(731965),
    o = n(442837),
    s = n(570140),
    l = n(344532),
    c = n(951716),
    u = n(23434),
    d = n(261376);
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
function _(e) {
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
function p(e, t) {
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
            : p(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let m = new (n(499303).I)(),
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
    y = (0, i.F)(b),
    O = !1,
    v = (e) =>
        h(_({}, e), {
            candidates: new Map(e.candidates),
            currentlyShown: new Set(e.currentlyShown),
            currentlyShownGroup: new Set(e.currentlyShownGroup),
        }),
    I = (e, t) => {
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
    T = (e, t) => {
        var n, r;
        if (null == t) return e;
        e.currentlyShown.add(t.content);
        let i = e.recentlyShown.filter((e) => e !== t.content);
        return (
            i.unshift(t.content),
            i.splice(5),
            (e.recentlyShown = i),
            null != t.groupName && e.currentlyShownGroup.add(t.groupName),
            d.O.has(t.content) ||
                ((e.shownFatigableCandidate = t),
                (null == (r = e.prevFatigableCandidate) ? void 0 : r.content) !== t.content &&
                    ((e.prevFatigableCandidate = t), (e.lastWinnerTime = new Date().getTime()))),
            null == (n = t.onAdded) || n.call(t),
            e
        );
    },
    S = (e, t) => (e.candidates.set(t.content, t), e),
    A = (e, t) => (e.candidates.delete(t.content), e),
    C = (e, t) => T(I(e, e.shownFatigableCandidate), t),
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
    P = (e) =>
        null != e.prevFatigableCandidate &&
        e.candidates.has(e.prevFatigableCandidate.content) &&
        null == e.shownFatigableCandidate,
    D = (e) => {
        if (0 === e.candidates.size) return e;
        let t = new Date().getTime() - e.lastWinnerTime > g;
        return P(e) && !t
            ? (m.unschedule(), C(e, N(e)))
            : ((null != e.shownFatigableCandidate && !t) ||
                  m.scheduled() ||
                  L(e) ||
                  m.schedule(() => {
                      (0, a.j)(() => {
                          y.setState((e) => {
                              let t = v(e);
                              return C(t, R(t));
                          });
                      });
                  }, 250),
              e);
    },
    w = () => L(y.getState()),
    L = (e) => {
        let t = new Date().getTime();
        return null == e.shownFatigableCandidate && t - e.lastWinnerTime < E;
    },
    x = (e) => {
        let t = d.O.has(e.content);
        (0, a.j)(() => {
            y.setState((n) => {
                let r = v(n);
                return O ? r : t ? T(r, e) : D(S(r, e));
            });
        });
    },
    M = (e, t) => {
        (0, a.j)(() => {
            y.setState((n) => {
                let r = v(n);
                return t ? D(I(A(r, e), e)) : I(A(r, e), e);
            });
        });
    },
    k = () => {
        var e;
        return null != (e = y.getState().recentlyShown[0]) ? e : null;
    },
    j = () => {
        var e, t;
        return null != (t = null == (e = y.getState().shownFatigableCandidate) ? void 0 : e.content) ? t : null;
    },
    U = (e) => y.getState().currentlyShown.has(e),
    G = (e) => y((t) => t.currentlyShown.has(e)),
    B = () => {
        let e = [...y.getState().currentlyShown].filter((e) => !d.O.has(e)).length;
        return [y.getState().currentlyShown.size, e];
    },
    Z = () => {
        (0, a.j)(() => {
            y.setState(() => {
                let e = b();
                return (e.postConnectionOpen = !0), e;
            });
        }),
            m.unschedule();
    },
    F = () => y.getState().postConnectionOpen;
class V extends (r = o.ZP.Store) {
    initialize() {
        this.waitFor(l.Z, u.Z), this.syncWith([l.Z, u.Z], () => this.setHasRequiredAction());
    }
    setHasRequiredAction() {
        O = (0, c.Z)(l.Z, u.Z);
    }
}
function H(e, t) {
    return y(e, t);
}
f(V, "displayName", "DismissibleContentShownStateStore"),
    new V(s.Z, {
        CONNECTION_OPEN: () => Z(),
        LOGOUT: () => Z(),
    });
