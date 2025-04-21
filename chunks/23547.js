n.d(t, {
    Mm: () => p,
    jj: () => m,
    wH: () => u
});
var i = n(200651),
    r = n(192379),
    s = n(442837),
    l = n(481060),
    a = n(751648),
    o = n(479766);
function c(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = i);
            });
    }
    return e;
}
let d = 'balance-widget-menu-coachmark-modal',
    u = () => (0, l.nfh)(d),
    m = () => (0, l.Mr3)(d),
    g = {
        modalKey: d,
        onCloseCallback: a.j2,
        onCloseRequest: async () => {
            await (0, a.j2)();
        }
    };
function p(e) {
    let t = (0, s.cj)([o.Z], () => o.Z.earnedOrbsCoachmark),
        { shouldOpen: a } = t;
    return (
        (0, r.useEffect)(() => {
            let t = u();
            if (a && !t) {
                var r;
                (r = c({}, e)).isCoachmarkEnabled &&
                    (0, l.ZDy)(async () => {
                        let { BalanceWidgetEarnedOrbsCoachmarkModal: e } = await Promise.all([n.e('82081'), n.e('72425')]).then(n.bind(n, 720463));
                        return (t) => (0, i.jsx)(e, c({}, r, t));
                    }, g);
            } else !a && t && m();
        }, [a, e]),
        c({}, t)
    );
}
