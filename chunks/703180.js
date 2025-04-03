n.d(t, {
    MemberListContentSettingsMenu: () => d,
    Z: () => p
});
var r = n(200651);
n(192379);
var i = n(442837),
    l = n(481060),
    o = n(485267),
    a = n(71585),
    s = n(981631),
    c = n(388032);
function u(e) {
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
let d = (e) => {
        let { closePopout: t } = e,
            d = (0, i.e7)([a.Z], () => a.Z.hidden);
        return (0, r.jsx)(l.v2r, {
            onSelect: () => {},
            navId: 'member-list-settings-menu',
            onClose: null != t ? t : s.dG4,
            'aria-label': c.NW.string(c.t.w2jvOT),
            children: (0, r.jsxs)(l.kSQ, {
                children: [
                    (0, r.jsx)(l.sNh, {
                        id: 'about',
                        label: c.NW.string(c.t.pWLGnJ),
                        icon: l.d3s,
                        action: () => {
                            (0, l.ZDy)(async () => {
                                let { default: e } = await n.e('71517').then(n.bind(n, 549505));
                                return (t) => (0, r.jsx)(e, u({}, t));
                            }),
                                null == t || t();
                        }
                    }),
                    (0, r.jsx)(l.S89, {
                        id: 'hide',
                        label: c.NW.string(c.t.AhNYub),
                        checked: d,
                        action: () => {
                            (0, o.lY)(), null == t || t();
                        }
                    })
                ]
            })
        });
    },
    p = () =>
        (0, r.jsx)(l.yRy, {
            animation: l.yRy.Animation.NONE,
            position: 'bottom',
            align: 'right',
            renderPopout: (e) => {
                let { closePopout: t } = e;
                return (0, r.jsx)(d, { closePopout: t });
            },
            children: (e) => {
                var t, n;
                return (0, r.jsx)(
                    l.P3F,
                    ((t = u({}, e)),
                    (n = n =
                        {
                            onClick: (t) => {
                                t.stopPropagation(), e.onClick(t);
                            },
                            style: {
                                width: '12px',
                                height: '12px',
                                display: 'flex'
                            },
                            children: (0, r.jsx)(l.ewm, { size: 'xxs' })
                        }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var r = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, r);
                              }
                              return n;
                          })(Object(n)).forEach(function (e) {
                              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                          }),
                    t)
                );
            }
        });
