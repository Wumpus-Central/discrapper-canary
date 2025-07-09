n.d(t, {
    MemberListContentSettingsMenu: () => p,
    Z: () => h
});
var r = n(255367),
    i = n(73800),
    l = n(442837),
    a = n(481060),
    o = n(485267),
    s = n(71585),
    c = n(981631),
    u = n(388032);
function d(e) {
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
}
let p = (e) => {
        let { closePopout: t } = e,
            i = (0, l.e7)([s.Z], () => s.Z.hidden);
        return (0, r.jsx)(a.v2r, {
            onSelect: () => {},
            navId: 'member-list-settings-menu',
            onClose: null != t ? t : c.dG4,
            'aria-label': u.intl.string(u.t.w2jvOT),
            children: (0, r.jsxs)(a.kSQ, {
                children: [
                    (0, r.jsx)(a.sNh, {
                        id: 'about',
                        label: u.intl.string(u.t.pWLGnJ),
                        icon: a.d3s,
                        action: () => {
                            ((0, a.ZDy)(async () => {
                                let { default: e } = await n.e('71517').then(n.bind(n, 549505));
                                return (t) => (0, r.jsx)(e, d({}, t));
                            }),
                                null == t || t());
                        }
                    }),
                    (0, r.jsx)(a.S89, {
                        id: 'hide',
                        label: u.intl.string(u.t.AhNYub),
                        checked: i,
                        action: () => {
                            ((0, o.lY)(), null == t || t());
                        }
                    })
                ]
            })
        });
    },
    h = () => {
        let e = i.useRef(null);
        return (0, r.jsx)(a.yRy, {
            targetElementRef: e,
            animation: a.yRy.Animation.NONE,
            position: 'bottom',
            align: 'right',
            renderPopout: (e) => {
                let { closePopout: t } = e;
                return (0, r.jsx)(p, { closePopout: t });
            },
            children: (t) => {
                var n, i;
                return (0, r.jsx)(
                    a.P3F,
                    ((n = d({}, t)),
                    (i = i =
                        {
                            innerRef: e,
                            onClick: (e) => {
                                (e.stopPropagation(), t.onClick(e));
                            },
                            style: {
                                width: '12px',
                                height: '12px',
                                display: 'flex'
                            },
                            children: (0, r.jsx)(a.ewm, { size: 'xxs' })
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
            }
        });
    };
