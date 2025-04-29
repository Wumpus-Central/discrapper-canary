n.d(t, { B: () => E });
var i = n(255367),
    r = n(73800),
    s = n(512722),
    l = n.n(s),
    a = n(399606),
    o = n(481060),
    c = n(594174),
    d = n(880257),
    u = n(631885),
    m = n(933970),
    p = n(340453),
    g = n(292352),
    h = n(332495),
    f = n(388032),
    b = n(708734);
function _(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = i);
            });
    }
    return e;
}
function x(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function E(e) {
    let { user: t } = e,
        s = (0, d.Z)(),
        E = (0, u.VM)(),
        j = (0, a.e7)([c.default], () => c.default.getCurrentUser()),
        C = r.useCallback(() => {
            l()(void 0 !== j, 'User must be logged in to accept a link request'),
                (0, o.ZDy)(async () => {
                    let { default: e } = await n.e('59716').then(n.bind(n, 275370));
                    return (n) =>
                        (0, i.jsx)(
                            e,
                            x(_({}, n), {
                                currentUser: j,
                                otherUser: t
                            })
                        );
                });
        }, [j, t]),
        O = r.useCallback(() => {
            l()(void 0 !== j, 'User must be logged in to decline a link request'),
                (0, o.ZDy)(async () => {
                    let { default: e } = await n.e('958').then(n.bind(n, 4526));
                    return (n) =>
                        (0, i.jsx)(
                            e,
                            x(_({}, n), {
                                currentUser: j,
                                otherUser: t
                            })
                        );
                });
        }, [j, t]),
        S = r.useCallback(() => {
            l()(void 0 !== j, 'User must be logged in to decline a link request'),
                (0, o.ZDy)(async () => {
                    let { default: e } = await n.e('69015').then(n.bind(n, 247265));
                    return (n) =>
                        (0, i.jsx)(
                            e,
                            x(_({}, n), {
                                currentUser: j,
                                otherUser: t
                            })
                        );
                });
        }, [j, t]);
    return (0, i.jsxs)('div', {
        className: b.container,
        children: [
            (0, i.jsx)('div', {
                className: b.details,
                children: (0, i.jsx)(p.Z, {
                    otherUser: t,
                    status: g.ne.PENDING
                })
            }),
            (0, i.jsx)('div', {
                className: b.actions,
                children: s
                    ? (0, i.jsx)(m.Z, {
                          icon: o.Dio,
                          className: b.__invalid_actionDeny,
                          tooltip: f.intl.string(h.default.e5iHmZ),
                          onClick: S
                      })
                    : (0, i.jsxs)(i.Fragment, {
                          children: [
                              E
                                  ? null
                                  : (0, i.jsx)(m.Z, {
                                        icon: o.dz2,
                                        className: b.__invalid_actionAccept,
                                        tooltip: f.intl.string(h.default.krWQZG),
                                        onClick: C
                                    }),
                              (0, i.jsx)(m.Z, {
                                  icon: o.Dio,
                                  className: b.__invalid_actionDeny,
                                  tooltip: f.intl.string(h.default.bBDeND),
                                  onClick: O
                              })
                          ]
                      })
            })
        ]
    });
}
