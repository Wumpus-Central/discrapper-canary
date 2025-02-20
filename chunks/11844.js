n.d(t, { Z: () => b });
var r = n(200651),
    i = n(192379),
    s = n(481060),
    a = n(906732),
    l = n(975298),
    o = n(125529),
    c = n(879892),
    d = n(709586),
    u = n(267642),
    m = n(981631),
    g = n(388032),
    p = n(430254);
function h(e) {
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
function f(e, t) {
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
let b = function () {
    let e = i.useRef(null),
        { analyticsLocations: t } = (0, a.ZP)(),
        { fractionalState: b } = (0, l.Z)();
    function N(n) {
        null != e.current && (0, s.Mr3)(e.current),
            (0, c.u)({
                analyticsLocation: {
                    page: m.ZY5.GUILD_BOOSTING_USER_SETTINGS,
                    section: m.jXE.GUILD_BOOSTING_BOOST_ANY_GUILD_CTA,
                    object: m.qAy.BUTTON_CTA,
                    objectType: m.Qqv.BUY
                },
                analyticsLocations: t,
                guild: n
            });
    }
    async function x() {
        e.current = await (0, s.ZDy)(
            async () => {
                let { default: e } = await Promise.resolve().then(n.bind(n, 719228));
                return (t) => (0, r.jsx)(e, f(h({}, t), { onSelectGuild: N }));
            },
            {
                onCloseRequest: () => {
                    null != e.current && (0, s.Mr3)(e.current);
                }
            }
        );
    }
    let _ = (0, u.aq)({ fractionalState: b });
    return (0, r.jsxs)('div', {
        className: p.wrapper,
        children: [
            (0, r.jsx)(d.Z, {
                className: p.boostIcon,
                width: 16,
                height: 16
            }),
            (0, r.jsx)(s.Text, {
                className: p.copy,
                color: 'header-secondary',
                variant: 'text-sm/medium',
                children: g.NW.format(g.t.kqC5vr, {
                    boostAnyGuildHook: (e, t) => {
                        let n = null != _,
                            i = (0, r.jsx)(
                                s.zxk,
                                {
                                    className: p.cta,
                                    disabled: n,
                                    color: s.zxk.Colors.LINK,
                                    look: s.zxk.Looks.LINK,
                                    onClick: n ? void 0 : x,
                                    children: e
                                },
                                t
                            );
                        return n
                            ? (0, r.jsx)(
                                  o.Z,
                                  {
                                      text: _,
                                      'aria-label': _.toString(),
                                      children: (e) => (0, r.jsx)('span', f(h({}, e), { children: i }))
                                  },
                                  t
                              )
                            : i;
                    }
                })
            })
        ]
    });
};
