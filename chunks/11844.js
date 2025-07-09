n.d(t, { Z: () => E });
var i = n(255367),
    r = n(73800),
    s = n(399606),
    a = n(755721),
    l = n(481060),
    o = n(906732),
    c = n(975298),
    d = n(125529),
    u = n(879892),
    m = n(124570),
    p = n(594174),
    g = n(709586),
    h = n(267642),
    f = n(981631),
    b = n(388032),
    x = n(122039);
function _(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                ((i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = i));
            }));
    }
    return e;
}
function j(e, t) {
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
        { analyticsLocations: t } = (0, o.ZP)(),
        E = (0, s.e7)([p.default], () => p.default.getCurrentUser()),
        { fractionalState: O } = (0, c.Z)(),
        C = (0, m.y)('guild_boosting_boost_cta', E, O);
    function v(n) {
        (null != e.current && (0, l.Mr3)(e.current),
            (0, u.u)({
                analyticsLocation: {
                    page: f.ZY5.GUILD_BOOSTING_USER_SETTINGS,
                    section: f.jXE.GUILD_BOOSTING_BOOST_ANY_GUILD_CTA,
                    object: f.qAy.BUTTON_CTA,
                    objectType: f.Qqv.BUY
                },
                analyticsLocations: t,
                guild: n
            }));
    }
    async function S() {
        e.current = await (0, l.ZDy)(
            async () => {
                let { default: e } = await Promise.resolve().then(n.bind(n, 719228));
                return (t) => (0, i.jsx)(e, j(_({}, t), { onSelectGuild: v }));
            },
            {
                onCloseRequest: () => {
                    null != e.current && (0, l.Mr3)(e.current);
                }
            }
        );
    }
    let T = (0, h.aq)({ isBoostManagementDisabledForFractionalPremium: C });
    return (0, i.jsxs)('div', {
        className: x.wrapper,
        children: [
            (0, i.jsx)(g.Z, {
                className: x.boostIcon,
                width: 16,
                height: 16
            }),
            (0, i.jsx)(l.Text, {
                className: x.copy,
                color: 'header-secondary',
                variant: 'text-sm/medium',
                children: b.intl.format(b.t.kqC5vr, {
                    boostAnyGuildHook: (e, t) => {
                        let n = null != T,
                            r = (0, i.jsx)(
                                a.zx,
                                {
                                    className: x.cta,
                                    disabled: n,
                                    color: a.zx.Colors.LINK,
                                    look: a.zx.Looks.LINK,
                                    onClick: n ? void 0 : S,
                                    children: e
                                },
                                t
                            );
                        return n
                            ? (0, i.jsx)(
                                  d.Z,
                                  {
                                      text: T,
                                      'aria-label': T.toString(),
                                      children: (e) => (0, i.jsx)('span', j(_({}, e), { children: r }))
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
