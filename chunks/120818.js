n.d(t, { T: () => y });
var r = n(200651),
    i = n(192379),
    l = n(91192),
    o = n(442837),
    a = n(481060),
    s = n(44315),
    c = n(563534),
    u = n(846121),
    d = n(703656),
    p = n(259580),
    h = n(981631),
    f = n(176505),
    g = n(388032),
    m = n(509775);
function b(e, t) {
    return (0, r.jsx)(
        a.Text,
        {
            variant: 'text-xs/bold',
            color: 'text-normal',
            children: e
        },
        t
    );
}
let y = i.memo(function (e) {
    var t, n;
    let { guild: y } = e,
        _ = (0, o.e7)([c.Z], () => c.Z.getNewMemberActions(y.id), [y.id]),
        v = (0, o.e7)([u.Z], () => u.Z.getCompletedActions(y.id)),
        O = i.useMemo(() => {
            if (null == _ || null == v) return 0;
            let e = 0;
            return (
                _.forEach((t) => {
                    null != v[t.channelId] && e++;
                }),
                e
            );
        }, [v, _]),
        j = null == _ ? 0 : _.length,
        x = (0, l.JA)('progress-bar-'.concat(y.id));
    return (0, r.jsxs)('li', {
        children: [
            (0, r.jsxs)(
                a.P3F,
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
                })({}, x)),
                (n = n =
                    {
                        role: 'button',
                        focusProps: { offset: { right: 4 } },
                        className: m.progressBarContainer,
                        onClick: function () {
                            (0, d.uL)(h.Z5c.CHANNEL(y.id, f.oC.GUILD_HOME));
                        },
                        children: [
                            (0, r.jsxs)('div', {
                                className: m.progressBarText,
                                children: [
                                    (0, r.jsx)(a.X6q, {
                                        variant: 'heading-sm/bold',
                                        children: g.NW.string(g.t.SnrR39)
                                    }),
                                    (0, r.jsxs)('div', {
                                        className: m.rightContainer,
                                        children: [
                                            (0, r.jsx)(a.Text, {
                                                variant: 'text-xs/medium',
                                                color: 'text-muted',
                                                className: m.rightText,
                                                children: g.NW.format(g.t.eqZ1lZ, {
                                                    numberHook: b,
                                                    total: j.toString(),
                                                    completed: O.toString()
                                                })
                                            }),
                                            (0, r.jsx)(p.Z, {
                                                className: m.arrow,
                                                width: 16,
                                                height: 16,
                                                direction: p.Z.Directions.RIGHT
                                            })
                                        ]
                                    })
                                ]
                            }),
                            (0, r.jsx)(a.Exd, {
                                className: m.progressBar,
                                foregroundGradientColor: [(0, s.Lq)(h.Ilk.GREEN_300), (0, s.Lq)(h.Ilk.GREEN_230)],
                                percent: (O / j) * 100 + 3,
                                animate: !0
                            })
                        ]
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
            ),
            (0, r.jsx)('div', {
                role: 'separator',
                className: m.divider
            })
        ]
    });
});
