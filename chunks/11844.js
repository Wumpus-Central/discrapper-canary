n.d(t, { Z: () => x });
var r = n(200651),
    i = n(192379),
    s = n(399606),
    a = n(481060),
    l = n(906732),
    o = n(975298),
    c = n(125529),
    d = n(879892),
    u = n(124570),
    m = n(594174),
    g = n(709586),
    p = n(267642),
    h = n(981631),
    f = n(388032),
    _ = n(122039);
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
let x = function () {
    let e = i.useRef(null),
        { analyticsLocations: t } = (0, l.ZP)(),
        x = (0, s.e7)([m.default], () => m.default.getCurrentUser()),
        { fractionalState: E } = (0, o.Z)(),
        j = (0, u.y)('guild_boosting_boost_cta', x, E);
    function C(n) {
        null != e.current && (0, a.Mr3)(e.current),
            (0, d.u)({
                analyticsLocation: {
                    page: h.ZY5.GUILD_BOOSTING_USER_SETTINGS,
                    section: h.jXE.GUILD_BOOSTING_BOOST_ANY_GUILD_CTA,
                    object: h.qAy.BUTTON_CTA,
                    objectType: h.Qqv.BUY
                },
                analyticsLocations: t,
                guild: n
            });
    }
    async function O() {
        e.current = await (0, a.ZDy)(
            async () => {
                let { default: e } = await Promise.resolve().then(n.bind(n, 719228));
                return (t) => (0, r.jsx)(e, N(b({}, t), { onSelectGuild: C }));
            },
            {
                onCloseRequest: () => {
                    null != e.current && (0, a.Mr3)(e.current);
                }
            }
        );
    }
    let S = (0, p.aq)({ isBoostManagementDisabledForFractionalPremium: j });
    return (0, r.jsxs)('div', {
        className: _.wrapper,
        children: [
            (0, r.jsx)(g.Z, {
                className: _.boostIcon,
                width: 16,
                height: 16
            }),
            (0, r.jsx)(a.Text, {
                className: _.copy,
                color: 'header-secondary',
                variant: 'text-sm/medium',
                children: f.NW.format(f.t.kqC5vr, {
                    boostAnyGuildHook: (e, t) => {
                        let n = null != S,
                            i = (0, r.jsx)(
                                a.zxk,
                                {
                                    className: _.cta,
                                    disabled: n,
                                    color: a.zxk.Colors.LINK,
                                    look: a.zxk.Looks.LINK,
                                    onClick: n ? void 0 : O,
                                    children: e
                                },
                                t
                            );
                        return n
                            ? (0, r.jsx)(
                                  c.Z,
                                  {
                                      text: S,
                                      'aria-label': S.toString(),
                                      children: (e) => (0, r.jsx)('span', N(b({}, e), { children: i }))
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
