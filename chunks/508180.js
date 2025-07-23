n.d(t, { Z: () => h });
var r = n(255367),
    i = n(73800),
    a = n(442837),
    o = n(82659),
    s = n(481060),
    l = n(846027),
    c = n(468026),
    u = n(724723),
    d = n(131951),
    f = n(388032);
function _(e, t, n) {
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
function p(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                _(e, t, n[t]);
            }));
    }
    return e;
}
let h = () => {
    let e = (0, a.e7)([d.Z], () => d.Z.isInteractionRequired(), []),
        t = i.useRef(null);
    function n() {
        null !== t.current && ((0, s.Mr3)(t.current), (t.current = null));
    }
    function _() {
        l.Z.interact();
    }
    return (
        i.useEffect(() => {
            if (e) {
                let e = u.Z.getCurrentConfig({ location: 'InteractionRequired' }).enabled;
                t.current = (0, s.h7j)((t) =>
                    e
                        ? (0, r.jsx)(
                              o.Modal,
                              p(
                                  {
                                      title: f.intl.string(f.t.dLLxCw),
                                      subtitle: f.intl.string(f.t['64lmt7']),
                                      actions: [
                                          {
                                              text: f.intl.string(f.t.BddRzc),
                                              onClick: () => {
                                                  (_(), t.onClose());
                                              }
                                          }
                                      ]
                                  },
                                  t
                              )
                          )
                        : (0, r.jsx)(
                              c.default,
                              p(
                                  {
                                      title: f.intl.string(f.t.dLLxCw),
                                      body: f.intl.string(f.t['64lmt7']),
                                      onConfirm: _,
                                      confirmText: f.intl.string(f.t.BddRzc)
                                  },
                                  t
                              )
                          )
                );
            } else n();
            return () => {
                n();
            };
        }, [e]),
        null
    );
};
