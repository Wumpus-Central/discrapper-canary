r.d(t, {
    Mm: () => h,
    jj: () => b,
    wH: () => d
});
var n = r(255367),
    a = r(73800),
    l = r(442837),
    i = r(481060),
    o = r(751648),
    c = r(479766);
function u(e) {
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
let s = 'balance-widget-menu-coachmark-modal',
    d = () => (0, i.nfh)(s),
    b = () => (0, i.Mr3)(s),
    f = {
        modalKey: s,
        onCloseCallback: o.j2,
        onCloseRequest: async () => {
            await (0, o.j2)();
        }
    };
function h(e) {
    let t = (0, l.cj)([c.Z], () => c.Z.earnedOrbsCoachmark),
        { shouldOpen: o } = t;
    return (
        (0, a.useEffect)(() => {
            let t = d();
            if (o && !t) {
                var a;
                (a = u({}, e)).isCoachmarkEnabled &&
                    (0, i.ZDy)(async () => {
                        let { BalanceWidgetEarnedOrbsCoachmarkModal: e } = await Promise.all([r.e('82081'), r.e('1258')]).then(r.bind(r, 720463));
                        return (t) => (0, n.jsx)(e, u({}, a, t));
                    }, f);
            } else !o && t && b();
        }, [o, e]),
        u({}, t)
    );
}
