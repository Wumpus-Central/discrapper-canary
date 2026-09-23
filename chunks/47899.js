(n.d(t, {
    dD: () => R,
    oF: () => D,
    _0: () => b,
    Ay: () => U,
    uW: () => y,
    oo: () => C,
    pd: () => O,
    Tc: () => M,
    mB: () => L,
}),
    n(667532));
var i = n(882035),
    r = n(121894),
    a = n(17928),
    s = n(451988),
    l = n(228366),
    o = n(715314),
    d = n(870570),
    c = n(787925),
    u = n(652215);
function _() {
    return {
        candidates: new Map(),
        shownFatigableCandidate: null,
        prevFatigableCandidate: null,
        recentlyShown: [],
        currentlyShown: new Set(),
        currentlyShownGroup: new Set(),
        lastWinnerTime: 0,
        postConnectionOpen: !1,
    };
}
let E = (0, i.h)(_),
    A = !1;
function h(e) {
    return {
        ...e,
        candidates: new Map(e.candidates),
        currentlyShown: new Set(e.currentlyShown),
        currentlyShownGroup: new Set(e.currentlyShownGroup),
    };
}
function I(e, t) {
    return (
        null == t ||
            (null != t.content && e.currentlyShown.delete(t.content),
            null != t.groupName && e.currentlyShownGroup.delete(t.groupName),
            e.shownFatigableCandidate?.content === t.content && (e.shownFatigableCandidate = null)),
        e
    );
}
function f(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
    if (null == t) return e;
    e.currentlyShown.add(t.content);
    let i = e.recentlyShown.filter((e) => e !== t.content);
    return (
        i.unshift(t.content),
        i.splice(5),
        (e.recentlyShown = i),
        null != t.groupName && e.currentlyShownGroup.add(t.groupName),
        c.C.has(t.content) ||
            ((e.shownFatigableCandidate = t),
            e.prevFatigableCandidate?.content !== t.content &&
                ((e.prevFatigableCandidate = t), (e.lastWinnerTime = new Date().getTime()))),
        t.onAdded?.(n),
        e
    );
}
function p(e, t) {
    return (e.candidates.delete(t.content), e);
}
function T(e, t) {
    let n = [...e.candidates.keys()].filter((e) => e !== t?.content);
    return f(I(e, e.shownFatigableCandidate), t, n);
}
let m = new s.OC(
    (e) =>
        Promise.resolve(e).then((e) => {
            let t = !1;
            ((0, r.r)(() => {
                E.setState((n) => {
                    let i = h(n),
                        r = (function (e) {
                            let t =
                                    arguments.length > 1 && void 0 !== arguments[1]
                                        ? arguments[1]
                                        : [...e.candidates.keys()],
                                n = t.filter((t) => e.candidates.has(t));
                            return (
                                null !== e.prevFatigableCandidate &&
                                    e.candidates.has(e.prevFatigableCandidate.content) &&
                                    n.length > 1 &&
                                    (n = n.filter((t) => t !== e.prevFatigableCandidate?.content)),
                                e.candidates.get(n[Math.floor(Math.random() * n.length)])
                            );
                        })(i, e);
                    return ((t = null != r), T(i, r));
                });
            }),
                t && N());
        }),
    { delay: 250, maxConcurrentInvocations: 1 },
);
function g(e, t) {
    var n;
    let i;
    if (0 === e.candidates.size) return { state: e, arbitration: { type: "settled" } };
    let r = new Date().getTime() - e.lastWinnerTime > 3e5;
    if (
        null != e.prevFatigableCandidate &&
        e.candidates.has(e.prevFatigableCandidate.content) &&
        null == e.shownFatigableCandidate &&
        !r
    )
        return m.isInvoking()
            ? { state: e, arbitration: null != t ? { type: "request", candidates: [t] } : { type: "unchanged" } }
            : {
                  state: T(
                      e,
                      null != e.prevFatigableCandidate ? e.candidates.get(e.prevFatigableCandidate.content) : void 0,
                  ),
                  arbitration: { type: "settled" },
              };
    return null == e.shownFatigableCandidate || r
        ? m.isPending()
            ? { state: e, arbitration: null != t ? { type: "request", candidates: [t] } : { type: "unchanged" } }
            : ((n = e), (i = new Date().getTime()), null == n.shownFatigableCandidate && i - n.lastWinnerTime < 36e5)
              ? { state: e, arbitration: { type: "unchanged" } }
              : { state: e, arbitration: { type: "request", candidates: [...e.candidates.keys()] } }
        : { state: e, arbitration: { type: "settled" } };
}
function S(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    (("settled" === e.arbitration.type || ("request" === e.arbitration.type && t)) && N(),
        "request" === e.arbitration.type && m.queue(e.arbitration.candidates).catch(u.tEg));
}
function N() {
    m.reset();
}
function C(e) {
    let t = c.C.has(e.content),
        n = null;
    ((0, r.r)(() => {
        E.setState((i) => {
            let r = h(i);
            return A ? r : t ? f(r, e) : (n = g((r.candidates.set(e.content, e), r), e.content)).state;
        });
    }),
        null != n && S(n));
}
function O(e, t) {
    let n = null,
        i = !1,
        a = !1;
    ((0, r.r)(() => {
        E.setState((r) => {
            let s = h(r);
            if (((i = s.shownFatigableCandidate?.content === e.content), t)) return (n = g(I(p(s, e), e), null)).state;
            {
                let t = I(p(s, e), e);
                return ((a = i || 0 === t.candidates.size), t);
            }
        });
    }),
        null != n ? S(n, i) : a && N());
}
function R(e) {
    return E.getState().currentlyShown.has(e);
}
function L(e) {
    return E((t) => t.currentlyShown.has(e));
}
function y(e) {
    return E((t) => e.some((e) => t.currentlyShown.has(e)));
}
function D() {
    let e = [...E.getState().currentlyShown].filter((e) => !c.C.has(e)).length;
    return [E.getState().currentlyShown.size, e];
}
function v() {
    ((0, r.r)(() => {
        E.setState(() => {
            let e = _();
            return ((e.postConnectionOpen = !0), e);
        });
    }),
        N());
}
function b() {
    (0, r.r)(() => {
        E.setState((e) => {
            let t = h(e);
            return ((t.prevFatigableCandidate = null), (t.lastWinnerTime = 0), t);
        });
    });
}
function M() {
    return E.getState().postConnectionOpen;
}
class P extends a.Ay.Store {
    static displayName = "DismissibleContentShownStateStore";
    initialize() {
        (this.waitFor(o.A, d.A), this.syncWith([o.A, d.A], () => this.setHasRequiredAction()));
    }
    setHasRequiredAction() {
        A = (function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o.A,
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d.A;
            return null != t.getAction() || Object.keys(e.getState()).length > 0;
        })(o.A, d.A);
    }
}
function U(e, t) {
    return E(e, t);
}
new P(l.h, { CONNECTION_OPEN: () => v(), LOGOUT: () => v() });
