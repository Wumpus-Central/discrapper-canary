n.d(t, { Z: () => p });
var r = n(54381),
    i = n(473749),
    a = n(793030),
    o = n(442837),
    s = n(481060),
    l = n(846027),
    c = n(131951),
    u = n(388032);
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
let p = () => {
    let e = (0, o.e7)([c.Z], () => c.Z.isInteractionRequired(), []),
        t = i.useRef(null);
    function n() {
        null !== t.current && ((0, s.Mr3)(t.current), (t.current = null));
    }
    function d() {
        l.Z.interact();
    }
    return (
        i.useEffect(
            () => (
                e
                    ? (t.current = (0, s.h7j)((e) =>
                          (0, r.jsx)(
                              a.Modal,
                              f(
                                  {
                                      title: u.intl.string(u.t.dLLxC2),
                                      subtitle: u.intl.string(u.t["64lmtw"]),
                                      actions: [
                                          {
                                              text: u.intl.string(u.t.BddRzS),
                                              onClick: () => {
                                                  d(), e.onClose();
                                              },
                                          },
                                      ],
                                  },
                                  e,
                              ),
                          ),
                      ))
                    : n(),
                () => {
                    n();
                }
            ),
            [e],
        ),
        null
    );
};
