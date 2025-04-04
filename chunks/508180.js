n.d(t, { Z: () => _ });
var r = n(200651),
    i = n(192379),
    o = n(442837),
    a = n(481060),
    s = n(846027),
    l = n(468026),
    c = n(131951),
    u = n(388032);
function d(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function f(e) {
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
                d(e, t, n[t]);
            });
    }
    return e;
}
let _ = () => {
    let e = (0, o.e7)([c.Z], () => c.Z.isInteractionRequired(), []),
        t = i.useRef(null);
    function n() {
        null !== t.current && ((0, a.Mr3)(t.current), (t.current = null));
    }
    function d() {
        s.Z.interact();
    }
    return (
        i.useEffect(
            () => (
                e
                    ? (t.current = (0, a.h7j)((e) =>
                          (0, r.jsx)(
                              l.default,
                              f(
                                  {
                                      title: u.NW.string(u.t.dLLxCw),
                                      body: u.NW.string(u.t['64lmt7']),
                                      onConfirm: d,
                                      confirmText: u.NW.string(u.t.BddRzc)
                                  },
                                  e
                              )
                          )
                      ))
                    : n(),
                () => {
                    n();
                }
            ),
            [e]
        ),
        null
    );
};
