n.d(t, {
    Aq: () => k,
    Kl: () => G,
    ZP: () => F,
    bn: () => M,
    cI: () => j,
    f0: () => x,
    gE: () => L,
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
function m(e, t) {
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
let h = new (n(499303).I)(),
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
        m(p({}, e), {
            candidates: new Map(e.candidates),
            currentlyShown: new Set(e.currentlyShown),
            currentlyShownGroup: new Set(e.currentlyShownGroup),
        }),
    S = (e, t) => {
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
    I = (e, t) => {
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
    T = (e, t) => (e.candidates.set(t.content, t), e),
    C = (e, t) => (e.candidates.delete(t.content), e),
    A = (e, t) => I(S(e, e.shownFatigableCandidate), t),
    N = (e) => (null != e.prevFatigableCandidate ? e.candidates.get(e.prevFatigableCandidate.content) : void 0),
    P = (e) => {
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
    R = (e) =>
        null != e.prevFatigableCandidate &&
        e.candidates.has(e.prevFatigableCandidate.content) &&
        null == e.shownFatigableCandidate,
    w = (e) => {
        if (0 === e.candidates.size) return e;
        let t = new Date().getTime() - e.lastWinnerTime > g;
        return R(e) && !t
            ? (h.unschedule(), A(e, N(e)))
            : ((null != e.shownFatigableCandidate && !t) ||
                  h.scheduled() ||
                  D(e) ||
                  h.schedule(() => {
                      (0, a.j)(() => {
                          y.setState((e) => {
                              let t = v(e);
                              return A(t, P(t));
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
        let t = d.O.has(e.content);
        (0, a.j)(() => {
            y.setState((n) => {
                let r = v(n);
                return O ? r : t ? I(r, e) : w(T(r, e));
            });
        });
    },
    L = (e, t) => {
        (0, a.j)(() => {
            y.setState((n) => {
                let r = v(n);
                return t ? w(S(C(r, e), e)) : S(C(r, e), e);
            });
        });
    },
    j = (e) => y.getState().currentlyShown.has(e),
    M = (e) => y((t) => t.currentlyShown.has(e)),
    k = () => {
        let e = [...y.getState().currentlyShown].filter((e) => !d.O.has(e)).length;
        return [y.getState().currentlyShown.size, e];
    },
    U = () => {
        (0, a.j)(() => {
            y.setState(() => {
                let e = b();
                return (e.postConnectionOpen = !0), e;
            });
        }),
            h.unschedule();
    },
    G = () => y.getState().postConnectionOpen;
class Z extends (r = o.ZP.Store) {
    initialize() {
        this.waitFor(l.Z, u.Z), this.syncWith([l.Z, u.Z], () => this.setHasRequiredAction());
    }
    setHasRequiredAction() {
        O = (0, c.Z)(l.Z, u.Z);
    }
}
function F(e, t) {
    return y(e, t);
}
f(Z, "displayName", "DismissibleContentShownStateStore"),
    new Z(s.Z, {
        CONNECTION_OPEN: () => U(),
        LOGOUT: () => U(),
    });
