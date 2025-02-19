n.d(t, {
    Mm: () => u,
    cb: () => m,
    jj: () => d,
    wH: () => c
});
var r = n(192379),
    i = n(442837),
    s = n(481060),
    a = n(751648),
    l = n(479766);
let o = 'balance-widget-menu-coachmark-modal',
    c = () => (0, s.nfh)(o),
    d = () => (0, s.Mr3)(o);
function u(e) {
    let { renderEarnedOrbsCoachmark: t } = e,
        n = (0, i.cj)([l.Z], () => l.Z.earnedOrbsCoachmark),
        { shouldOpen: s, earnedOrbsQuantity: a } = n;
    return (
        (0, r.useEffect)(() => {
            let e = c();
            s && !e ? t({ earnedOrbsQuantity: a }) : !s && e && d();
        }, [s, t, a]),
        (function (e) {
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
        })({}, n)
    );
}
let m = {
    modalKey: o,
    onCloseCallback: a.j2,
    onCloseRequest: async () => {
        await (0, a.j2)(), (0, s.Mr3)(o);
    }
};
