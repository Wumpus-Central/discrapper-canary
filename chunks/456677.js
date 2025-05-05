n.d(t, { Z: () => c }), n(388685);
var r = n(255367),
    i = n(73800),
    l = n(866830),
    s = n(85960),
    a = n(226192),
    o = n(683579);
function c(e) {
    let { rule: t, onChangeRule: n } = e,
        c = i.useMemo(() => (0, s.V9)(t.triggerType), [t.triggerType]),
        u = a.km(t.guildId),
        d = i.useMemo(() => (0, l.U5)(), []),
        m = (e, r) => {
            var i, l;
            if (null == r) return;
            let s = t.actions.some((e) => e.type === r.type),
                a = [...t.actions, r];
            if (s) {
                let n = t.actions.filter((e) => e.type !== r.type);
                a = e ? [...n, r] : n;
            }
            n(
                ((i = (function (e) {
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
                })({}, t)),
                (l = l = { actions: a }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var r = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, r);
                          }
                          return n;
                      })(Object(l)).forEach(function (e) {
                          Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(l, e));
                      }),
                i)
            );
        },
        g = (e) => async (n) => {
            let r = t.actions.find((t) => t.type === e),
                i = null != r,
                l = d[e],
                s = n ? r : l;
            if (null != s && (!i || n)) {
                let n = u[e];
                null != n ? m(!0, await n(t, s)) : m(!0, s);
            } else m(!1, i ? r : l);
        };
    return (0, r.jsx)(r.Fragment, {
        children: c.map((e) => {
            let n = t.actions.find((t) => t.type === e);
            return (0, r.jsx)(
                o.Z,
                {
                    guildId: t.guildId,
                    triggerType: t.triggerType,
                    action: null != n ? n : d[e],
                    toggled: null != n,
                    onToggleAction: g(e)
                },
                e
            );
        })
    });
}
