n.d(t, {
    Aq: () => R,
    ZP: () => w,
    bn: () => C,
    cI: () => A,
    f0: () => T,
    gE: () => N,
    mc: () => P
}),
    n(47120),
    n(733860);
var r = n(372793),
    i = n(731965),
    o = n(261376);
function a(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function s(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                a(e, t, n[t]);
            });
    }
    return e;
}
function l(e, t) {
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
function c(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : l(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let u = new (n(499303).I)(),
    d = 300000,
    f = 3600000,
    _ = () => ({
        candidates: new Map(),
        shownFatigableCandidate: null,
        prevFatigableCandidate: null,
        recentlyShown: [],
        currentlyShown: new Set(),
        currentlyShownGroup: new Set(),
        lastWinnerTime: 0
    }),
    p = (0, r.F)(_),
    h = (e) =>
        c(s({}, e), {
            candidates: new Map(e.candidates),
            currentlyShown: new Set(e.currentlyShown),
            currentlyShownGroup: new Set(e.currentlyShownGroup)
        }),
    m = (e, t) => {
        var n;
        return null == t || (null != t.content && e.currentlyShown.delete(t.content), null != t.groupName && e.currentlyShownGroup.delete(t.groupName), (null == (n = e.shownFatigableCandidate) ? void 0 : n.content) === t.content && (e.shownFatigableCandidate = null)), e;
    },
    g = (e, t) => {
        var n, r;
        if (null == t) return e;
        e.currentlyShown.add(t.content);
        let i = e.recentlyShown.filter((e) => e !== t.content);
        return i.unshift(t.content), i.splice(5), (e.recentlyShown = i), null != t.groupName && e.currentlyShownGroup.add(t.groupName), o.O.has(t.content) || ((e.shownFatigableCandidate = t), (null == (r = e.prevFatigableCandidate) ? void 0 : r.content) !== t.content && ((e.prevFatigableCandidate = t), (e.lastWinnerTime = new Date().getTime()))), null == (n = t.onAdded) || n.call(t), e;
    },
    E = (e, t) => (e.candidates.set(t.content, t), e),
    b = (e, t) => (e.candidates.delete(t.content), e),
    y = (e, t) => g(m(e, e.shownFatigableCandidate), t),
    v = (e) => (null != e.prevFatigableCandidate ? e.candidates.get(e.prevFatigableCandidate.content) : void 0),
    O = (e) => {
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
    I = (e) => null != e.prevFatigableCandidate && e.candidates.has(e.prevFatigableCandidate.content) && null == e.shownFatigableCandidate,
    S = (e) => {
        if (0 === e.candidates.size) return e;
        let t = new Date().getTime() - e.lastWinnerTime > d;
        if (I(e) && !t) return u.unschedule(), y(e, v(e));
        if ((null != e.shownFatigableCandidate && !t) || u.scheduled()) return e;
        let n = new Date().getTime();
        return (
            (null == e.shownFatigableCandidate && n - e.lastWinnerTime < f) ||
                u.schedule(() => {
                    (0, i.j)(() => {
                        p.setState((e) => {
                            let t = h(e);
                            return y(t, O(t));
                        });
                    });
                }, 250),
            e
        );
    },
    T = (e) => {
        let t = o.O.has(e.content);
        (0, i.j)(() => {
            p.setState((n) => {
                let r = h(n);
                return t ? g(r, e) : S(E(r, e));
            });
        });
    },
    N = (e, t) => {
        (0, i.j)(() => {
            p.setState((n) => {
                let r = h(n);
                return t ? S(m(b(r, e), e)) : m(b(r, e), e);
            });
        });
    },
    A = (e) => p.getState().currentlyShown.has(e),
    C = (e) => p((t) => t.currentlyShown.has(e)),
    R = () => {
        let e = [...p.getState().currentlyShown].filter((e) => !o.O.has(e)).length;
        return [p.getState().currentlyShown.size, e];
    },
    P = () => {
        (0, i.j)(() => p.setState(_)), u.unschedule();
    };
function w(e, t) {
    return p(e, t);
}
