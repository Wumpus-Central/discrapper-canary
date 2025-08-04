n.d(t, { Z: () => j });
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
    g = n(267642),
    h = n(981631),
    f = n(388032),
    b = n(122039);
function x(e) {
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
function _(e, t) {
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
let j = function () {
    let e = r.useRef(null),
        { analyticsLocations: t } = (0, o.ZP)(),
        j = (0, s.e7)([p.default], () => p.default.getCurrentUser()),
        { fractionalState: C } = (0, c.Z)(),
        E = (0, m.y)('guild_boosting_boost_cta', j, C);
    function O(n) {
        (null != e.current && (0, l.Mr3)(e.current),
            (0, u.u)({
                analyticsLocation: {
                    page: h.ZY5.GUILD_BOOSTING_USER_SETTINGS,
                    section: h.jXE.GUILD_BOOSTING_BOOST_ANY_GUILD_CTA,
                    object: h.qAy.BUTTON_CTA,
                    objectType: h.Qqv.BUY
                },
                analyticsLocations: t,
                guild: n
            }));
    }
    async function v() {
        e.current = await (0, l.ZDy)(
            async () => {
                let { default: e } = await Promise.resolve().then(n.bind(n, 719228));
                return (t) => (0, i.jsx)(e, _(x({}, t), { onSelectGuild: O }));
            },
            {
                onCloseRequest: () => {
                    null != e.current && (0, l.Mr3)(e.current);
                }
            }
        );
    }
    let S = (0, g.aq)({ isBoostManagementDisabledForFractionalPremium: E });
    return (0, i.jsxs)('div', {
        className: b.wrapper,
        children: [
            (0, i.jsx)(l.$Eu, {
                color: l.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK,
                className: b.boostIcon
            }),
            (0, i.jsx)(l.Text, {
                className: b.copy,
                color: 'header-secondary',
                variant: 'text-sm/medium',
                children: f.intl.format(f.t.kqC5vr, {
                    boostAnyGuildHook: (e, t) => {
                        let n = null != S,
                            r = (0, i.jsx)(
                                a.zx,
                                {
                                    className: b.cta,
                                    disabled: n,
                                    color: a.zx.Colors.LINK,
                                    look: a.zx.Looks.LINK,
                                    onClick: n ? void 0 : v,
                                    children: e
                                },
                                t
                            );
                        return n
                            ? (0, i.jsx)(
                                  d.Z,
                                  {
                                      text: S,
                                      'aria-label': S.toString(),
                                      children: (e) => (0, i.jsx)('span', _(x({}, e), { children: r }))
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
