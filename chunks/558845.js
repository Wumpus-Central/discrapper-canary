"use strict";
n.d(t, { dD: () => S, oF: () => N, Ay: () => b, uW: () => C, oo: () => I, pd: () => T, Tc: () => R, mB: () => y }),
    n(667532);
var i = n(265690),
    r = n(121894),
    s = n(17928),
    a = n(228366),
    o = n(715314),
    l = n(870570),
    u = n(787925);
let c = new (class {
    timeoutId = null;
    schedule(e, t) {
        this.unschedule(),
            (this.timeoutId = setTimeout(() => {
                (this.timeoutId = null), e();
            }, t));
    }
    unschedule() {
        this.scheduled() && (clearTimeout(this.timeoutId), (this.timeoutId = null));
    }
    scheduled() {
        return null !== this.timeoutId;
    }
})();
function d() {
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
let _ = (0, i.h)(d),
    h = !1;
function f(e) {
    return {
        ...e,
        candidates: new Map(e.candidates),
        currentlyShown: new Set(e.currentlyShown),
        currentlyShownGroup: new Set(e.currentlyShownGroup),
    };
}
function p(e, t) {
    return (
        null == t ||
            (null != t.content && e.currentlyShown.delete(t.content),
            null != t.groupName && e.currentlyShownGroup.delete(t.groupName),
            e.shownFatigableCandidate?.content === t.content && (e.shownFatigableCandidate = null)),
        e
    );
}
function E(e, t) {
    if (null == t) return e;
    e.currentlyShown.add(t.content);
    let n = e.recentlyShown.filter((e) => e !== t.content);
    return (
        n.unshift(t.content),
        n.splice(5),
        (e.recentlyShown = n),
        null != t.groupName && e.currentlyShownGroup.add(t.groupName),
        u.C.has(t.content) ||
            ((e.shownFatigableCandidate = t),
            e.prevFatigableCandidate?.content !== t.content &&
                ((e.prevFatigableCandidate = t), (e.lastWinnerTime = new Date().getTime()))),
        t.onAdded?.(),
        e
    );
}
function m(e, t) {
    return e.candidates.delete(t.content), e;
}
function g(e, t) {
    return E(p(e, e.shownFatigableCandidate), t);
}
function A(e) {
    var t;
    let n;
    if (0 === e.candidates.size) return e;
    let i = new Date().getTime() - e.lastWinnerTime > 3e5;
    if (
        null != e.prevFatigableCandidate &&
        e.candidates.has(e.prevFatigableCandidate.content) &&
        null == e.shownFatigableCandidate &&
        !i
    )
        return (
            c.unschedule(),
            g(e, null != e.prevFatigableCandidate ? e.candidates.get(e.prevFatigableCandidate.content) : void 0)
        );
    return (
        (null != e.shownFatigableCandidate && !i) ||
            c.scheduled() ||
            ((t = e), (n = new Date().getTime()), null == t.shownFatigableCandidate && n - t.lastWinnerTime < 36e5) ||
            c.schedule(() => {
                (0, r.r)(() => {
                    _.setState((e) => {
                        let t,
                            n = f(e);
                        return g(
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
}
function I(e) {
    let t = u.C.has(e.content);
    (0, r.r)(() => {
        _.setState((n) => {
            let i = f(n);
            return h ? i : t ? E(i, e) : A((i.candidates.set(e.content, e), i));
        });
    });
}
function T(e, t) {
    (0, r.r)(() => {
        _.setState((n) => {
            let i = f(n);
            return t ? A(p(m(i, e), e)) : p(m(i, e), e);
        });
    });
}
function S(e) {
    return _.getState().currentlyShown.has(e);
}
function y(e) {
    return _((t) => t.currentlyShown.has(e));
}
function C(e) {
    return _((t) => e.some((e) => t.currentlyShown.has(e)));
}
function N() {
    let e = [..._.getState().currentlyShown].filter((e) => !u.C.has(e)).length;
    return [_.getState().currentlyShown.size, e];
}
function v() {
    (0, r.r)(() => {
        _.setState(() => {
            let e = d();
            return (e.postConnectionOpen = !0), e;
        });
    }),
        c.unschedule();
}
function R() {
    return _.getState().postConnectionOpen;
}
class O extends s.Ay.Store {
    static displayName = "DismissibleContentShownStateStore";
    initialize() {
        this.waitFor(o.A, l.A), this.syncWith([o.A, l.A], () => this.setHasRequiredAction());
    }
    setHasRequiredAction() {
        h = (function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o.A,
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l.A;
            return null != t.getAction() || Object.keys(e.getState()).length > 0;
        })(o.A, l.A);
    }
}
function b(e, t) {
    return _(e, t);
}
new O(a.h, { CONNECTION_OPEN: () => v(), LOGOUT: () => v() });
