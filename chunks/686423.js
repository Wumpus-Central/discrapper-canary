n.d(t, {
    A: () => b,
});
var r = n(627968),
    i = n(64700),
    a = n(502572),
    s = n(732955),
    o = n(397927),
    l = n(688810),
    c = n(531260),
    u = n(987144),
    d = n(473145),
    f = n(652215),
    p = n(985018),
    _ = n(572523);

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
        { analyticsLocations: t } = (0, l.Ay)(),
        { fractionalState: h } = (0, c.A)();

    function g(n) {
        null != e.current && (0, o.OoC)(e.current),
            (0, u.g)({
                analyticsLocation: {
                    page: f.liQ.GUILD_BOOSTING_USER_SETTINGS,
                    section: f.JJy.GUILD_BOOSTING_BOOST_ANY_GUILD_CTA,
                    object: f.ZSU.BUTTON_CTA,
                    objectType: f.AnalyticsObjectTypes.BUY,
                },
                analyticsLocations: t,
                guild: n,
            });
    }
    async function b() {
        e.current = await (0, o.mMO)(
            async () => {
                let { default: e } = await Promise.resolve().then(n.bind(n, 770101));
                return (t) =>
                    (0, r.jsx)(
                        e,
                        E(m({}, t), {
                            onSelectGuild: g,
                        }),
                    );
            },
            {
                onCloseRequest: () => {
                    null != e.current && (0, o.OoC)(e.current);
                },
            },
        );
    }
    let y = (0, d.Nc)({
        fractionalState: h,
    });
    return (0, r.jsxs)("div", {
        className: _.iE,
        children: [
            (0, r.jsx)(o._Jp, {
                color: o.LU0.unsafe_rawColors.GUILD_BOOSTING_PINK,
                className: _.$J,
            }),
            (0, r.jsx)(o.Text, {
                className: _.C,
                color: "text-default",
                variant: "text-sm/medium",
                children: p.intl.format(p.t.kqC5vq, {
                    boostAnyGuildHook: (e, t) => {
                        let n = null != y,
                            i = (0, o.Oer)(e),
                            l = (0, r.jsx)("div", {
                                className: _.lO,
                                children: (0, r.jsx)(
                                    s.QWc,
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
                                  a.A,
                                  {
                                      text: y,
                                      "aria-label": y.toString(),
                                      children: (e) =>
                                          (0, r.jsx)(
                                              "span",
                                              E(m({}, e), {
                                                  children: l,
                                              }),
                                          ),
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
