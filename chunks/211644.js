r.d(n, {
    Aq: function () {
        return R;
    },
    ZP: function () {
        return D;
    },
    bn: function () {
        return N;
    },
    cI: function () {
        return C;
    },
    f0: function () {
        return S;
    },
    gE: function () {
        return A;
    },
    mc: function () {
        return O;
    }
});
var i = r(47120);
var a = r(733860);
var o = r(65400),
    s = r(731965),
    l = r(261376);
let u = new (r(499303).I)(),
    c = 300000,
    d = 3600000,
    f = () => ({
        candidates: new Map(),
        shownFatigableCandidate: null,
        prevFatigableCandidate: null,
        recentlyShown: [],
        currentlyShown: new Set(),
        currentlyShownGroup: new Set(),
        lastWinnerTime: 0
    }),
    p = (0, o.F)(f),
    h = (e) => ({
        ...e,
        candidates: new Map(e.candidates),
        currentlyShown: new Set(e.currentlyShown),
        currentlyShownGroup: new Set(e.currentlyShownGroup)
    }),
    _ = (e, n) => {
        var r;
        return null == n ? e : (null != n.content && e.currentlyShown.delete(n.content), null != n.groupName && e.currentlyShownGroup.delete(n.groupName), (null === (r = e.shownFatigableCandidate) || void 0 === r ? void 0 : r.content) === n.content && (e.shownFatigableCandidate = null), e);
    },
    m = (e, n) => {
        var r, i;
        if (null == n) return e;
        e.currentlyShown.add(n.content);
        let a = e.recentlyShown.filter((e) => e !== n.content);
        return a.unshift(n.content), a.splice(5), (e.recentlyShown = a), null != n.groupName && e.currentlyShownGroup.add(n.groupName), !l.O.has(n.content) && ((e.shownFatigableCandidate = n), (null === (i = e.prevFatigableCandidate) || void 0 === i ? void 0 : i.content) !== n.content && ((e.prevFatigableCandidate = n), (e.lastWinnerTime = new Date().getTime()))), null === (r = n.onAdded) || void 0 === r || r.call(n), e;
    },
    g = (e, n) => (e.candidates.set(n.content, n), e),
    E = (e, n) => (e.candidates.delete(n.content), e),
    v = (e, n) => m(_(e, e.shownFatigableCandidate), n),
    y = (e) => (null != e.prevFatigableCandidate ? e.candidates.get(e.prevFatigableCandidate.content) : void 0),
    b = (e) => {
        let n = [...e.candidates.keys()];
        return (
            null !== e.prevFatigableCandidate &&
                e.candidates.has(e.prevFatigableCandidate.content) &&
                e.candidates.size > 1 &&
                (n = n.filter((n) => {
                    var r;
                    return n !== (null === (r = e.prevFatigableCandidate) || void 0 === r ? void 0 : r.content);
                })),
            e.candidates.get(n[Math.floor(Math.random() * n.length)])
        );
    },
    I = (e) => null != e.prevFatigableCandidate && e.candidates.has(e.prevFatigableCandidate.content) && null == e.shownFatigableCandidate,
    T = (e) => {
        if (0 === e.candidates.size) return e;
        let n = new Date().getTime() - e.lastWinnerTime > c;
        if (I(e) && !n) return u.unschedule(), v(e, y(e));
        if ((null != e.shownFatigableCandidate && !n) || u.scheduled()) return e;
        let r = new Date().getTime();
        return null == e.shownFatigableCandidate && r - e.lastWinnerTime < d
            ? e
            : (u.schedule(() => {
                  (0, s.j)(() => {
                      p.setState((e) => {
                          let n = h(e);
                          return v(n, b(n));
                      });
                  });
              }, 250),
              e);
    },
    S = (e) => {
        let n = l.O.has(e.content);
        (0, s.j)(() => {
            p.setState((r) => {
                let i = h(r);
                return n ? m(i, e) : T(g(i, e));
            });
        });
    },
    A = (e, n) => {
        (0, s.j)(() => {
            p.setState((r) => {
                let i = h(r);
                return n ? T(_(E(i, e), e)) : _(E(i, e), e);
            });
        });
    },
    C = (e) => p.getState().currentlyShown.has(e),
    N = (e) => p((n) => n.currentlyShown.has(e)),
    R = () => {
        let e = [...p.getState().currentlyShown].filter((e) => !l.O.has(e)).length;
        return [p.getState().currentlyShown.size, e];
    },
    O = () => {
        (0, s.j)(() => p.setState(f)), u.unschedule();
    };
function D(e, n) {
    return p(e, n);
}
