n.d(t, { Z: () => E });
var i = n(200651),
    r = n(192379),
    s = n(399606),
    l = n(481060),
    a = n(906732),
    o = n(975298),
    c = n(125529),
    d = n(879892),
    u = n(124570),
    m = n(594174),
    p = n(709586),
    g = n(267642),
    h = n(981631),
    f = n(388032),
    b = n(122039);
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
let E = function () {
    let e = r.useRef(null),
        { analyticsLocations: t } = (0, a.ZP)(),
        E = (0, s.e7)([m.default], () => m.default.getCurrentUser()),
        { fractionalState: C } = (0, o.Z)(),
        j = (0, u.y)('guild_boosting_boost_cta', E, C);
    function O(n) {
        null != e.current && (0, l.Mr3)(e.current),
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
    async function S() {
        e.current = await (0, l.ZDy)(
            async () => {
                let { default: e } = await Promise.resolve().then(n.bind(n, 719228));
                return (t) => (0, i.jsx)(e, x(_({}, t), { onSelectGuild: O }));
            },
            {
                onCloseRequest: () => {
                    null != e.current && (0, l.Mr3)(e.current);
                }
            }
        );
    }
    let v = (0, g.aq)({ isBoostManagementDisabledForFractionalPremium: j });
    return (0, i.jsxs)('div', {
        className: b.wrapper,
        children: [
            (0, i.jsx)(p.Z, {
                className: b.boostIcon,
                width: 16,
                height: 16
            }),
            (0, i.jsx)(l.Text, {
                className: b.copy,
                color: 'header-secondary',
                variant: 'text-sm/medium',
                children: f.intl.format(f.t.kqC5vr, {
                    boostAnyGuildHook: (e, t) => {
                        let n = null != v,
                            r = (0, i.jsx)(
                                l.zxk,
                                {
                                    className: b.cta,
                                    disabled: n,
                                    color: l.zxk.Colors.LINK,
                                    look: l.zxk.Looks.LINK,
                                    onClick: n ? void 0 : S,
                                    children: e
                                },
                                t
                            );
                        return n
                            ? (0, i.jsx)(
                                  c.Z,
                                  {
                                      text: v,
                                      'aria-label': v.toString(),
                                      children: (e) => (0, i.jsx)('span', x(_({}, e), { children: r }))
                                  },
                                  t
                              )
                            : r;
                    }
                })
            })
        ]
    });
};
