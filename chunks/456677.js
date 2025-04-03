n.d(t, { Z: () => c }), n(47120);
var r = n(200651),
    i = n(192379),
    s = n(866830),
    a = n(85960),
    l = n(226192),
    o = n(683579);
function c(e) {
    let { rule: t, onChangeRule: n } = e,
        c = i.useMemo(() => (0, a.V9)(t.triggerType), [t.triggerType]),
        d = l.km(t.guildId),
        u = i.useMemo(() => (0, s.U5)(), []),
        m = (e, r) => {
            var i, s;
            if (null == r) return;
            let a = t.actions.some((e) => e.type === r.type),
                l = [...t.actions, r];
            if (a) {
                let n = t.actions.filter((e) => e.type !== r.type);
                l = e ? [...n, r] : n;
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
                (s = s = { actions: l }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(s))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var r = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, r);
                          }
                          return n;
                      })(Object(s)).forEach(function (e) {
                          Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(s, e));
                      }),
                i)
            );
        },
        g = (e) => async (n) => {
            let r = t.actions.find((t) => t.type === e),
                i = null != r,
                s = u[e],
                a = n ? r : s;
            if (null != a && (!i || n)) {
                let n = d[e];
                null != n ? m(!0, await n(t, a)) : m(!0, a);
            } else m(!1, i ? r : s);
        };
    return (0, r.jsx)(r.Fragment, {
        children: c.map((e) => {
            let n = t.actions.find((t) => t.type === e);
            return (0, r.jsx)(
                o.Z,
                {
                    guildId: t.guildId,
                    triggerType: t.triggerType,
                    action: null != n ? n : u[e],
                    toggled: null != n,
                    onToggleAction: g(e)
                },
                e
            );
        })
    });
}
