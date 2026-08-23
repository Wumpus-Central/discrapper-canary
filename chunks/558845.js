"use strict";
n.d(t, {
    dD: () => S,
    oF: () => R,
    _0: () => L,
    Ay: () => v,
    uW: () => C,
    oo: () => m,
    pd: () => g,
    Tc: () => y,
    mB: () => N,
}),
    n(667532);
var i = n(882035),
    r = n(121894),
    a = n(17928),
    s = n(228366),
    l = n(715314),
    o = n(870570),
    d = n(787925);
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
function u() {
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
let _ = (0, i.h)(u),
    E = !1;
function A(e) {
    return {
        ...e,
        candidates: new Map(e.candidates),
        currentlyShown: new Set(e.currentlyShown),
        currentlyShownGroup: new Set(e.currentlyShownGroup),
    };
}
function h(e, t) {
    return (
        null == t ||
            (null != t.content && e.currentlyShown.delete(t.content),
            null != t.groupName && e.currentlyShownGroup.delete(t.groupName),
            e.shownFatigableCandidate?.content === t.content && (e.shownFatigableCandidate = null)),
        e
    );
}
function I(e, t) {
    if (null == t) return e;
    e.currentlyShown.add(t.content);
    let n = e.recentlyShown.filter((e) => e !== t.content);
    return (
        n.unshift(t.content),
        n.splice(5),
        (e.recentlyShown = n),
        null != t.groupName && e.currentlyShownGroup.add(t.groupName),
        d.C.has(t.content) ||
            ((e.shownFatigableCandidate = t),
            e.prevFatigableCandidate?.content !== t.content &&
                ((e.prevFatigableCandidate = t), (e.lastWinnerTime = new Date().getTime()))),
        t.onAdded?.(),
        e
    );
}
function f(e, t) {
    return e.candidates.delete(t.content), e;
}
function p(e, t) {
    return I(h(e, e.shownFatigableCandidate), t);
}
function T(e) {
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
            p(e, null != e.prevFatigableCandidate ? e.candidates.get(e.prevFatigableCandidate.content) : void 0)
        );
    return (
        (null != e.shownFatigableCandidate && !i) ||
            c.scheduled() ||
            ((t = e), (n = new Date().getTime()), null == t.shownFatigableCandidate && n - t.lastWinnerTime < 36e5) ||
            c.schedule(() => {
                (0, r.r)(() => {
                    _.setState((e) => {
                        let t,
                            n = A(e);
                        return p(
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
function m(e) {
    let t = d.C.has(e.content);
    (0, r.r)(() => {
        _.setState((n) => {
            let i = A(n);
            return E ? i : t ? I(i, e) : T((i.candidates.set(e.content, e), i));
        });
    });
}
function g(e, t) {
    (0, r.r)(() => {
        _.setState((n) => {
            let i = A(n);
            return t ? T(h(f(i, e), e)) : h(f(i, e), e);
        });
    });
}
function S(e) {
    return _.getState().currentlyShown.has(e);
}
function N(e) {
    return _((t) => t.currentlyShown.has(e));
}
function C(e) {
    return _((t) => e.some((e) => t.currentlyShown.has(e)));
}
function R() {
    let e = [..._.getState().currentlyShown].filter((e) => !d.C.has(e)).length;
    return [_.getState().currentlyShown.size, e];
}
function O() {
    (0, r.r)(() => {
        _.setState(() => {
            let e = u();
            return (e.postConnectionOpen = !0), e;
        });
    }),
        c.unschedule();
}
function L() {
    (0, r.r)(() => {
        _.setState((e) => {
            let t = A(e);
            return (t.prevFatigableCandidate = null), (t.lastWinnerTime = 0), t;
        });
    });
}
function y() {
    return _.getState().postConnectionOpen;
}
class D extends a.Ay.Store {
    static displayName = "DismissibleContentShownStateStore";
    initialize() {
        this.waitFor(l.A, o.A), this.syncWith([l.A, o.A], () => this.setHasRequiredAction());
    }
    setHasRequiredAction() {
        E = (function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l.A,
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o.A;
            return null != t.getAction() || Object.keys(e.getState()).length > 0;
        })(l.A, o.A);
    }
}
function v(e, t) {
    return _(e, t);
}
new D(s.h, { CONNECTION_OPEN: () => O(), LOGOUT: () => O() });
