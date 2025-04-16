n.d(t, { B: () => x });
var r = n(200651),
    i = n(192379),
    s = n(512722),
    a = n.n(s),
    l = n(399606),
    o = n(481060),
    c = n(594174),
    d = n(880257),
    u = n(631885),
    m = n(933970),
    g = n(340453),
    p = n(292352),
    h = n(332495),
    f = n(388032),
    _ = n(708734);
function b(e) {
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
}
function N(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function x(e) {
    let { user: t } = e,
        s = (0, d.Z)(),
        x = (0, u.VM)(),
        E = (0, l.e7)([c.default], () => c.default.getCurrentUser()),
        j = i.useCallback(() => {
            a()(void 0 !== E, 'User must be logged in to accept a link request'),
                (0, o.ZDy)(async () => {
                    let { default: e } = await n.e('59716').then(n.bind(n, 275370));
                    return (n) =>
                        (0, r.jsx)(
                            e,
                            N(b({}, n), {
                                currentUser: E,
                                otherUser: t
                            })
                        );
                });
        }, [E, t]),
        C = i.useCallback(() => {
            a()(void 0 !== E, 'User must be logged in to decline a link request'),
                (0, o.ZDy)(async () => {
                    let { default: e } = await n.e('958').then(n.bind(n, 4526));
                    return (n) =>
                        (0, r.jsx)(
                            e,
                            N(b({}, n), {
                                currentUser: E,
                                otherUser: t
                            })
                        );
                });
        }, [E, t]),
        O = i.useCallback(() => {
            a()(void 0 !== E, 'User must be logged in to decline a link request'),
                (0, o.ZDy)(async () => {
                    let { default: e } = await n.e('69015').then(n.bind(n, 247265));
                    return (n) =>
                        (0, r.jsx)(
                            e,
                            N(b({}, n), {
                                currentUser: E,
                                otherUser: t
                            })
                        );
                });
        }, [E, t]);
    return (0, r.jsxs)('div', {
        className: _.container,
        children: [
            (0, r.jsx)('div', {
                className: _.details,
                children: (0, r.jsx)(g.Z, {
                    otherUser: t,
                    status: p.ne.PENDING
                })
            }),
            (0, r.jsx)('div', {
                className: _.actions,
                children: s
                    ? (0, r.jsx)(m.Z, {
                          icon: o.Dio,
                          className: _.__invalid_actionDeny,
                          tooltip: f.NW.string(h.Z.e5iHmZ),
                          onClick: O
                      })
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              x
                                  ? null
                                  : (0, r.jsx)(m.Z, {
                                        icon: o.dz2,
                                        className: _.__invalid_actionAccept,
                                        tooltip: f.NW.string(h.Z.krWQZG),
                                        onClick: j
                                    }),
                              (0, r.jsx)(m.Z, {
                                  icon: o.Dio,
                                  className: _.__invalid_actionDeny,
                                  tooltip: f.NW.string(h.Z.bBDeND),
                                  onClick: C
                              })
                          ]
                      })
            })
        ]
    });
}
