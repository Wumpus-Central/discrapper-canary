r.d(t, { default: () => a });
var n = r(200651);
r(192379);
var o = r(442837),
    c = r(481060),
    i = r(239091),
    l = r(995532),
    s = r(388032);
let a = (e) => {
    var t;
    let { guildId: a, welcomeChannel: b, onEdit: d, onChannelReorder: u, setShowConfirmModal: p, index: j, onSelect: O } = e,
        g = (0, o.e7)([l.Z], () => l.Z.get(a)),
        h = (null != (t = null == g ? void 0 : g.welcome_channels) ? t : []).length - 1,
        y = (e) => {
            u(b, e, !0);
        };
    return (0, n.jsxs)(c.v2r, {
        navId: 'welcome-settings-context',
        'aria-label': s.NW.string(s.t.ogxXGh),
        onClose: i.Zy,
        onSelect: O,
        children: [
            (0, n.jsxs)(c.kSQ, {
                children: [
                    (0, n.jsx)(c.sNh, {
                        id: 'move-up',
                        label: s.NW.string(s.t['4UBqwM']),
                        disabled: j <= 0,
                        action: () => y(j - 1)
                    }),
                    (0, n.jsx)(c.sNh, {
                        id: 'move-down',
                        label: s.NW.string(s.t.b73Gwc),
                        disabled: j > h,
                        action: () => y(j + 1)
                    })
                ]
            }),
            (0, n.jsxs)(c.kSQ, {
                children: [
                    (0, n.jsx)(c.sNh, {
                        id: 'edit',
                        label: s.NW.string(s.t.u5DUrK),
                        action: () =>
                            (0, c.ZDy)(async () => {
                                let { default: e } = await r.e('39143').then(r.bind(r, 737868));
                                return (t) => {
                                    var r, o;
                                    return (0, n.jsx)(
                                        e,
                                        ((r = (function (e) {
                                            for (var t = 1; t < arguments.length; t++) {
                                                var r = null != arguments[t] ? arguments[t] : {},
                                                    n = Object.keys(r);
                                                'function' == typeof Object.getOwnPropertySymbols &&
                                                    (n = n.concat(
                                                        Object.getOwnPropertySymbols(r).filter(function (e) {
                                                            return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                                        })
                                                    )),
                                                    n.forEach(function (t) {
                                                        var n;
                                                        (n = r[t]),
                                                            t in e
                                                                ? Object.defineProperty(e, t, {
                                                                      value: n,
                                                                      enumerable: !0,
                                                                      configurable: !0,
                                                                      writable: !0
                                                                  })
                                                                : (e[t] = n);
                                                    });
                                            }
                                            return e;
                                        })({}, t)),
                                        (o = o =
                                            {
                                                welcomeChannel: b,
                                                guildId: a,
                                                onSave: d
                                            }),
                                        Object.getOwnPropertyDescriptors
                                            ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(o))
                                            : (function (e, t) {
                                                  var r = Object.keys(e);
                                                  if (Object.getOwnPropertySymbols) {
                                                      var n = Object.getOwnPropertySymbols(e);
                                                      r.push.apply(r, n);
                                                  }
                                                  return r;
                                              })(Object(o)).forEach(function (e) {
                                                  Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(o, e));
                                              }),
                                        r)
                                    );
                                };
                            })
                    }),
                    (0, n.jsx)(c.sNh, {
                        id: 'delete',
                        label: s.NW.string(s.t.JYBc3N),
                        action: () => p(!0),
                        color: 'danger'
                    })
                ]
            })
        ]
    });
};
