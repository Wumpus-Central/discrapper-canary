n.d(t, { A: () => p });
var r = n(627968),
    i = n(64700),
    a = n(158954),
    s = n(311907),
    o = n(397927),
    l = n(827343),
    c = n(430452),
    u = n(985018);
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
    let e = (0, s.bG)([c.A], () => c.A.isInteractionRequired(), []),
        t = i.useRef(null);
    function n() {
        null !== t.current && ((0, o.OoC)(t.current), (t.current = null));
    }
    function d() {
        l.A.interact();
    }
    return (
        i.useEffect(
            () => (
                e
                    ? (t.current = (0, o.qfG)((e) =>
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
