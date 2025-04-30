n.d(t, { default: () => a });
var r = n(200651);
n(192379);
var i = n(442837),
    l = n(481060),
    o = n(239091),
    c = n(995532),
    s = n(388032);
let a = (e) => {
    var t;
    let { guildId: a, welcomeChannel: b, onEdit: d, onChannelReorder: u, setShowConfirmModal: p, index: j, onSelect: O } = e,
        g = (0, i.e7)([c.Z], () => c.Z.get(a)),
        h = (null != (t = null == g ? void 0 : g.welcome_channels) ? t : []).length - 1,
        y = (e) => {
            u(b, e, !0);
        };
    return (0, r.jsxs)(l.v2r, {
        navId: 'welcome-settings-context',
        'aria-label': s.intl.string(s.t.ogxXGh),
        onClose: o.Zy,
        onSelect: O,
        children: [
            (0, r.jsxs)(l.kSQ, {
                children: [
                    (0, r.jsx)(l.sNh, {
                        id: 'move-up',
                        label: s.intl.string(s.t['4UBqwM']),
                        disabled: j <= 0,
                        action: () => y(j - 1)
                    }),
                    (0, r.jsx)(l.sNh, {
                        id: 'move-down',
                        label: s.intl.string(s.t.b73Gwc),
                        disabled: j > h,
                        action: () => y(j + 1)
                    })
                ]
            }),
            (0, r.jsxs)(l.kSQ, {
                children: [
                    (0, r.jsx)(l.sNh, {
                        id: 'edit',
                        label: s.intl.string(s.t.u5DUrK),
                        action: () =>
                            (0, l.ZDy)(async () => {
                                let { default: e } = await n.e('39143').then(n.bind(n, 737868));
                                return (t) => {
                                    var n, i;
                                    return (0, r.jsx)(
                                        e,
                                        ((n = (function (e) {
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
                                        (i = i =
                                            {
                                                welcomeChannel: b,
                                                guildId: a,
                                                onSave: d
                                            }),
                                        Object.getOwnPropertyDescriptors
                                            ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i))
                                            : (function (e, t) {
                                                  var n = Object.keys(e);
                                                  if (Object.getOwnPropertySymbols) {
                                                      var r = Object.getOwnPropertySymbols(e);
                                                      n.push.apply(n, r);
                                                  }
                                                  return n;
                                              })(Object(i)).forEach(function (e) {
                                                  Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e));
                                              }),
                                        n)
                                    );
                                };
                            })
                    }),
                    (0, r.jsx)(l.sNh, {
                        id: 'delete',
                        label: s.intl.string(s.t.JYBc3N),
                        action: () => p(!0),
                        color: 'danger'
                    })
                ]
            })
        ]
    });
};
