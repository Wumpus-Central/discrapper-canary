n.d(t, { U: () => l });
var r = n(255367);
n(73800);
var s = n(481060),
    o = n(46140),
    a = n(388032);
function i(e) {
    let { onClose: t, onSelect: n, quest: i } = e;
    return (0, r.jsx)(s.v2r, {
        variant: 'fixed',
        onSelect: t,
        navId: 'quest-home-platform-select-'.concat(i.id),
        'aria-label': a.intl.string(a.t.ogxXGh),
        onClose: t,
        children: (0, r.jsxs)(
            s.kSQ,
            {
                children: [
                    (0, r.jsx)(s.sNh, {
                        id: 'desktop',
                        label: a.intl.string(a.t.QXc019),
                        action: () => n(o.cd.DESKTOP),
                        icon: s.pzj
                    }),
                    (0, r.jsx)(s.sNh, {
                        id: 'console',
                        label: a.intl.string(a.t['8lAfuL']),
                        action: () => n(o.cd.CONSOLE),
                        icon: s.iWm
                    })
                ]
            },
            'actions'
        )
    });
}
function l(e) {
    let { children: t } = e,
        n = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                s = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        s = {},
                        o = Object.keys(e);
                    for (r = 0; r < o.length; r++) ((n = o[r]), t.indexOf(n) >= 0 || (s[n] = e[n]));
                    return s;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                for (r = 0; r < o.length; r++) ((n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (s[n] = e[n]));
            }
            return s;
        })(e, ['children']);
    return (0, r.jsx)(s.yRy, {
        targetElementRef: e.popoutTargetRef,
        position: 'bottom',
        align: 'right',
        renderPopout: (e) => {
            var t, s;
            let { closePopout: o } = e;
            return (0, r.jsx)(
                i,
                ((t = (function (e) {
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
                                var r;
                                ((r = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: r,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0
                                          })
                                        : (e[t] = r));
                            }));
                    }
                    return e;
                })({}, n)),
                (s = s = { onClose: o }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(s))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var r = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, r);
                          }
                          return n;
                      })(Object(s)).forEach(function (e) {
                          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(s, e));
                      }),
                t)
            );
        },
        children: t
    });
}
