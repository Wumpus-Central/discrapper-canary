n.d(t, { A: () => p });
var r = n(541806),
    i = n(765379),
    a = n(672979),
    s = n(409626),
    o = n(692969),
    l = n(934173),
    c = n(534465),
    u = n(695311);
function d(e, t, n) {
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
function f(e) {
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
                d(e, t, n[t]);
            });
    }
    return e;
}
function p(e) {
    let { location: t, user: n, currentUser: d, activity: p, application: _, entry: h, onClose: m } = e,
        g = (0, o.A)(
            f(
                {
                    location: t,
                    source: s.Ob.UserProfile,
                    trackEntryPointImpression: !0,
                },
                (0, c.UE)({
                    user: n,
                    activity: p,
                    entry: h,
                }),
            ),
        ),
        E = (0, u.A)({
            applicationId: null == _ ? void 0 : _.id,
            onClose: m,
        }),
        b = (0, i.A)(p);
    return b && null != _
        ? E
        : !b && (0, a.A)(p)
          ? g
          : (0, r.A)(p) && n.id !== d.id
            ? () =>
                  (0, l.y)({
                      activity: p,
                      user: n,
                      index: 0,
                  })
            : void 0;
}
