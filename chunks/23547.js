n.d(t, {
    Mm: () => m,
    jj: () => _,
    wH: () => f,
});
var r = n(951288),
    i = n(647438),
    a = n(442837),
    o = n(481060),
    s = n(751648),
    l = n(479766);
function c(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function u(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                c(e, t, n[t]);
            });
    }
    return e;
}
let d = "balance-widget-menu-coachmark-modal",
    f = () => (0, o.nfh)(d),
    _ = () => (0, o.Mr3)(d),
    p = {
        modalKey: d,
        onCloseCallback: s.j2,
        onCloseRequest: async () => {
            await (0, s.j2)();
        },
    };
function h(e) {
    e.isCoachmarkEnabled &&
        (0, o.ZDy)(async () => {
            let { WrappedBalanceWidgetEarnedOrbsCoachmarkModal: t } = await Promise.resolve().then(n.bind(n, 720463));
            return (n) => (0, r.jsx)(t, u({}, e, n));
        }, p);
}
function m(e) {
    let t = (0, a.cj)([l.Z], () => l.Z.earnedOrbsCoachmark),
        { shouldOpen: n } = t;
    return (
        (0, i.useEffect)(() => {
            let t = f();
            n && !t ? h(u({}, e)) : !n && t && _();
        }, [n, e]),
        u({}, t)
    );
}
