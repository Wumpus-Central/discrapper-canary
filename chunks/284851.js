n.d(t, { U: () => l });
var r = n(200651);
n(192379);
var o = n(481060),
    s = n(46140),
    a = n(388032);
function i(e) {
    let { onClose: t, onSelect: n, quest: i } = e;
    return (0, r.jsx)(o.v2r, {
        variant: 'fixed',
        onSelect: t,
        navId: 'quest-home-platform-select-'.concat(i.id),
        'aria-label': a.NW.string(a.t.ogxXGh),
        onClose: t,
        children: (0, r.jsxs)(
            o.kSQ,
            {
                children: [
                    (0, r.jsx)(o.sNh, {
                        id: 'desktop',
                        label: a.NW.string(a.t.QXc019),
                        action: () => n(s.cd.DESKTOP),
                        icon: o.pzj
                    }),
                    (0, r.jsx)(o.sNh, {
                        id: 'console',
                        label: a.NW.string(a.t['8lAfuL']),
                        action: () => n(s.cd.CONSOLE),
                        icon: o.iWm
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
                o = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        o = {},
                        s = Object.keys(e);
                    for (r = 0; r < s.length; r++) (n = s[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
                    return o;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(e);
                for (r = 0; r < s.length; r++) (n = s[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
            }
            return o;
        })(e, ['children']);
    return (0, r.jsx)(o.yRy, {
        position: 'bottom',
        align: 'right',
        renderPopout: (e) => {
            var t, o;
            let { closePopout: s } = e;
            return (0, r.jsx)(
                i,
                ((t = (function (e) {
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
                })({}, n)),
                (o = o = { onClose: s }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(o))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var r = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, r);
                          }
                          return n;
                      })(Object(o)).forEach(function (e) {
                          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(o, e));
                      }),
                t)
            );
        },
        children: t
    });
}
