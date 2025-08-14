n.d(t, { Z: () => b });
var i = n(255367),
    r = n(73800),
    s = n(755721),
    a = n(481060),
    l = n(906732),
    o = n(975298),
    c = n(125529),
    d = n(879892),
    u = n(267642),
    m = n(981631),
    p = n(388032),
    g = n(569029);
function h(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = i);
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
let b = function () {
    let e = r.useRef(null),
        { analyticsLocations: t } = (0, l.ZP)(),
        { fractionalState: b } = (0, o.Z)();
    function x(n) {
        null != e.current && (0, a.Mr3)(e.current),
            (0, d.u)({
                analyticsLocation: {
                    page: m.ZY5.GUILD_BOOSTING_USER_SETTINGS,
                    section: m.jXE.GUILD_BOOSTING_BOOST_ANY_GUILD_CTA,
                    object: m.qAy.BUTTON_CTA,
                    objectType: m.Qqv.BUY,
                },
                analyticsLocations: t,
                guild: n,
            });
    }
    async function _() {
        e.current = await (0, a.ZDy)(
            async () => {
                let { default: e } = await Promise.resolve().then(n.bind(n, 719228));
                return (t) => (0, i.jsx)(e, f(h({}, t), { onSelectGuild: x }));
            },
            {
                onCloseRequest: () => {
                    null != e.current && (0, a.Mr3)(e.current);
                },
            },
        );
    }
    let j = (0, u.aq)({ fractionalState: b });
    return (0, i.jsxs)("div", {
        className: g.wrapper,
        children: [
            (0, i.jsx)(a.$Eu, {
                color: a.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK,
                className: g.boostIcon,
            }),
            (0, i.jsx)(a.Text, {
                className: g.copy,
                color: "header-secondary",
                variant: "text-sm/medium",
                children: p.intl.format(p.t.kqC5vr, {
                    boostAnyGuildHook: (e, t) => {
                        let n = null != j,
                            r = (0, i.jsx)(
                                s.zx,
                                {
                                    className: g.cta,
                                    disabled: n,
                                    color: s.zx.Colors.LINK,
                                    look: s.zx.Looks.LINK,
                                    onClick: n ? void 0 : _,
                                    children: e,
                                },
                                t,
                            );
                        return n
                            ? (0, i.jsx)(
                                  c.Z,
                                  {
                                      text: j,
                                      "aria-label": j.toString(),
                                      children: (e) => (0, i.jsx)("span", f(h({}, e), { children: r })),
                                  },
                                  t,
                              )
                            : r;
                    },
                }),
            }),
        ],
    });
};
