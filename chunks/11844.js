n.d(t, { Z: () => b });
var r = n(951288),
    i = n(647438),
    a = n(755721),
    o = n(481060),
    s = n(906732),
    l = n(975298),
    c = n(125529),
    u = n(879892),
    d = n(267642),
    f = n(981631),
    _ = n(388032),
    p = n(569029);
function h(e, t, n) {
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
function m(e) {
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
                h(e, t, n[t]);
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
        { analyticsLocations: t } = (0, s.ZP)(),
        { fractionalState: h } = (0, l.Z)();
    function g(n) {
        null != e.current && (0, o.Mr3)(e.current),
            (0, u.u)({
                analyticsLocation: {
                    page: f.ZY5.GUILD_BOOSTING_USER_SETTINGS,
                    section: f.jXE.GUILD_BOOSTING_BOOST_ANY_GUILD_CTA,
                    object: f.qAy.BUTTON_CTA,
                    objectType: f.Qqv.BUY,
                },
                analyticsLocations: t,
                guild: n,
            });
    }
    async function b() {
        e.current = await (0, o.ZDy)(
            async () => {
                let { default: e } = await Promise.resolve().then(n.bind(n, 719228));
                return (t) => (0, r.jsx)(e, E(m({}, t), { onSelectGuild: g }));
            },
            {
                onCloseRequest: () => {
                    null != e.current && (0, o.Mr3)(e.current);
                },
            },
        );
    }
    let y = (0, d.aq)({ fractionalState: h });
    return (0, r.jsxs)("div", {
        className: p.wrapper,
        children: [
            (0, r.jsx)(o.$Eu, {
                color: o.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK,
                className: p.boostIcon,
            }),
            (0, r.jsx)(o.Text, {
                className: p.copy,
                color: "header-secondary",
                variant: "text-sm/medium",
                children: _.intl.format(_.t.kqC5vr, {
                    boostAnyGuildHook: (e, t) => {
                        let n = null != y,
                            i = (0, r.jsx)(
                                a.zx,
                                {
                                    className: p.cta,
                                    disabled: n,
                                    color: a.zx.Colors.LINK,
                                    look: a.zx.Looks.LINK,
                                    onClick: n ? void 0 : b,
                                    children: e,
                                },
                                t,
                            );
                        return n
                            ? (0, r.jsx)(
                                  c.Z,
                                  {
                                      text: y,
                                      "aria-label": y.toString(),
                                      children: (e) => (0, r.jsx)("span", E(m({}, e), { children: i })),
                                  },
                                  t,
                              )
                            : i;
                    },
                }),
            }),
        ],
    });
};
