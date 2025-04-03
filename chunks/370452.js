n.d(t, { Z: () => N }), n(266796);
var r = n(200651),
    s = n(442837),
    o = n(481060),
    a = n(120421),
    i = n(763283),
    c = n(424984),
    l = n(944548),
    u = n(477839),
    d = n(231338),
    f = n(622802),
    p = n(388032),
    m = n(20902),
    g = n(359527),
    b = n(180770);
function y(e) {
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
function h(e) {
    let { achievementId: t, achievement: n } = e,
        o = (0, s.e7)([a.Z], () => a.Z.hasUnlockedAchievement(t));
    return (0, r.jsx)(l.Z, {
        borderColor: 'green',
        text: o
            ? (0, r.jsxs)('div', {
                  className: m.tooltip,
                  children: [
                      (0, r.jsx)(i.Z, {
                          variant: 'text-md/bold',
                          color: 'always-white',
                          children: n.name
                      }),
                      (0, r.jsx)(i.Z, {
                          variant: 'text-xs/normal',
                          color: 'text-muted',
                          children: n.description
                      })
                  ]
              })
            : null,
        'aria-label': o ? n.name : '',
        spacing: -16,
        position: 'bottom',
        children: (e) => {
            var t, s;
            return (0, r.jsx)(
                'div',
                ((t = y({ className: m.achievement }, e)),
                (s = s =
                    {
                        children: (0, r.jsx)('img', {
                            className: m.achievementIcon,
                            src: o ? n.icon : b,
                            alt: ''
                        })
                    }),
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
        }
    });
}
function x(e) {
    let { transitionState: t } = e,
        n = (0, u.EC)();
    return (0, r.jsx)(o.f6W, {
        theme: d.BR.DARK,
        disableAdaptiveTheme: !0,
        children: (e) =>
            (0, r.jsxs)(o.Y0X, {
                className: e,
                transitionState: t,
                size: o.CgR.MEDIUM,
                children: [
                    (0, r.jsxs)(o.xBx, {
                        separator: !1,
                        className: m.header,
                        children: [
                            (0, r.jsx)(i.Z, {
                                variant: 'heading-lg/semibold',
                                color: 'always-white',
                                children: p.NW.string(f.Z['236TJC']).toLocaleLowerCase()
                            }),
                            (0, r.jsx)(i.Z, {
                                variant: 'text-md/medium',
                                color: 'text-muted',
                                children: p.NW.string(f.Z.wgMDm5).toLocaleLowerCase()
                            })
                        ]
                    }),
                    (0, r.jsx)(o.hzk, {
                        className: m.content,
                        children: Object.keys(n).map((e) => {
                            let t = Number.parseInt(e);
                            return (0, r.jsx)(
                                h,
                                {
                                    achievementId: t,
                                    achievement: n[t]
                                },
                                t
                            );
                        })
                    })
                ]
            })
    });
}
function N() {
    return (0, r.jsx)(c.O, {
        iconSrc: g,
        title: p.NW.string(f.Z['236TJC']),
        onClick: () => {
            (0, o.ZDy)(() => Promise.resolve((e) => (0, r.jsx)(x, y({}, e))));
        }
    });
}
