n.d(t, {
    Mm: () => p,
    jj: () => m,
    wH: () => u
});
var r = n(200651),
    i = n(192379),
    s = n(442837),
    a = n(481060),
    l = n(751648),
    o = n(479766);
function c(e) {
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
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
let d = 'balance-widget-menu-coachmark-modal',
    u = () => (0, a.nfh)(d),
    m = () => (0, a.Mr3)(d),
    g = {
        modalKey: d,
        onCloseCallback: l.j2,
        onCloseRequest: async () => {
            await (0, l.j2)();
        }
    };
function p(e) {
    let t = (0, s.cj)([o.Z], () => o.Z.earnedOrbsCoachmark),
        { shouldOpen: l } = t;
    return (
        (0, i.useEffect)(() => {
            let t = u();
            if (l && !t) {
                var i;
                (i = c({}, e)).isCoachmarkEnabled &&
                    (0, a.ZDy)(async () => {
                        let { BalanceWidgetEarnedOrbsCoachmarkModal: e } = await n.e('82081').then(n.bind(n, 720463));
                        return (t) => (0, r.jsx)(e, c({}, i, t));
                    }, g);
            } else !l && t && m();
        }, [l, e]),
        c({}, t)
    );
}
