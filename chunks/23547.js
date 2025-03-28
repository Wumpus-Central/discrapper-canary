r.d(t, {
    Mm: () => b,
    jj: () => f,
    wH: () => d
});
var n = r(200651),
    a = r(192379),
    o = r(442837),
    c = r(481060),
    l = r(751648),
    i = r(479766);
function s(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        'function' == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                })
            )),
            n.forEach(function (t) {
                var n;
                (n = r[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = n);
            });
    }
    return e;
}
let u = 'balance-widget-menu-coachmark-modal',
    d = () => (0, c.nfh)(u),
    f = () => (0, c.Mr3)(u),
    m = {
        modalKey: u,
        onCloseCallback: l.j2,
        onCloseRequest: async () => {
            await (0, l.j2)();
        }
    };
function b(e) {
    let t = (0, o.cj)([i.Z], () => i.Z.earnedOrbsCoachmark),
        { shouldOpen: l } = t;
    return (
        (0, a.useEffect)(() => {
            var t;
            let a = d();
            l && !a
                ? !(t = s({}, e)).isCoachmarkEnabled ||
                  (0, c.ZDy)(async () => {
                      let { BalanceWidgetEarnedOrbsCoachmarkModal: e } = await r.e('82081').then(r.bind(r, 720463));
                      return (r) => (0, n.jsx)(e, s({}, t, r));
                  }, m)
                : !l && a && f();
        }, [l, e]),
        s({}, t)
    );
}
