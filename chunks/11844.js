n.d(t, { Z: () => b });
var r = n(54381),
    i = n(473749),
    a = n(589358),
    o = n(159691),
    s = n(481060),
    l = n(906732),
    c = n(975298),
    u = n(879892),
    d = n(267642),
    f = n(981631),
    p = n(388032),
    _ = n(569029);
function m(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function h(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                m(e, t, n[t]);
            });
    }
    return e;
}
function g(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function E(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : g(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let b = function () {
    let e = i.useRef(null),
        { analyticsLocations: t } = (0, l.ZP)(),
        { fractionalState: m } = (0, c.Z)();
    function g(n) {
        null != e.current && (0, s.Mr3)(e.current),
            (0, u.u)({
                analyticsLocation: {
                    page: f.ZY5.GUILD_BOOSTING_USER_SETTINGS,
                    section: f.jXE.GUILD_BOOSTING_BOOST_ANY_GUILD_CTA,
                    object: f.qAy.BUTTON_CTA,
                    objectType: f.AnalyticsObjectTypes.BUY,
                },
                analyticsLocations: t,
                guild: n,
            });
    }
    async function b() {
        e.current = await (0, s.ZDy)(
            async () => {
                let { default: e } = await Promise.resolve().then(n.bind(n, 719228));
                return (t) => (0, r.jsx)(e, E(h({}, t), { onSelectGuild: g }));
            },
            {
                onCloseRequest: () => {
                    null != e.current && (0, s.Mr3)(e.current);
                },
            },
        );
    }
    let y = (0, d.aq)({ fractionalState: m });
    return (0, r.jsxs)("div", {
        className: _.wrapper,
        children: [
            (0, r.jsx)(s.Ucv, {
                color: s.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK,
                className: _.boostIcon,
            }),
            (0, r.jsx)(s.Text, {
                className: _.copy,
                color: "text-default",
                variant: "text-sm/medium",
                children: p.intl.format(p.t.kqC5vq, {
                    boostAnyGuildHook: (e, t) => {
                        let n = null != y,
                            i = (0, s.qgQ)(e),
                            l = (0, r.jsx)("div", {
                                className: _.cta,
                                children: (0, r.jsx)(
                                    o.Avr,
                                    {
                                        variant: "primary",
                                        onClick: n ? void 0 : b,
                                        text: i,
                                        disabled: n,
                                    },
                                    t,
                                ),
                            });
                        return n
                            ? (0, r.jsx)(
                                  a.Z,
                                  {
                                      text: y,
                                      "aria-label": y.toString(),
                                      children: (e) => (0, r.jsx)("span", E(h({}, e), { children: l })),
                                  },
                                  t,
                              )
                            : l;
                    },
                }),
            }),
        ],
    });
};
