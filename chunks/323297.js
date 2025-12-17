t.d(n, { default: () => h });
var r = t(54381);
t(473749);
var i = t(793030),
    a = t(481060),
    l = t(906732),
    o = t(494620),
    s = t(578756),
    d = t(853944),
    c = t(899789),
    u = t(796724),
    f = t(343312),
    g = t(619733),
    m = t(914820),
    b = t(388032),
    x = t(969567);
function p(e) {
    for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {},
            r = Object.keys(t);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                }),
            )),
            r.forEach(function (n) {
                var r;
                (r = t[n]),
                    n in e
                        ? Object.defineProperty(e, n, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[n] = r);
            });
    }
    return e;
}
function v(e, n) {
    return (
        (n = null != n ? n : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : (function (e, n) {
                  var t = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      t.push.apply(t, r);
                  }
                  return t;
              })(Object(n)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              }),
        e
    );
}
function j(e) {
    let { step: n, setFooterNode: t } = (0, f.JL)(),
        l = (0, d.V)("GameServerSetupModal"),
        { title: s, subtitle: j } = (function (e) {
            switch (e) {
                case g.EK.SELECT_GAME:
                    return {
                        title: b.intl.string(m.default["3vWDMz"]),
                        subtitle: b.intl.string(m.default.Az5bjs),
                    };
                case g.EK.SERVER_SETTINGS:
                    return { title: b.intl.string(m.default.RLGW9z) };
            }
        })(n);
    return (0, r.jsxs)(
        i.IX,
        v(p({}, e), {
            size: "lg",
            children: [
                (0, r.jsx)(i.xBx, {
                    title: s,
                    subtitle: j,
                }),
                l &&
                    (0, r.jsx)("div", {
                        className: x.degradedWarningContainer,
                        children: (0, r.jsx)(o.Z, {
                            look: o.z.WARNING,
                            children: b.intl.format(m.default.XzXjK2, {}),
                        }),
                    }),
                (0, r.jsx)(a.zJl, {
                    className: x.modalContent,
                    style: { width: g.AK },
                    children: (0, r.jsx)("div", {
                        style: { padding: g.TG },
                        children: (0, r.jsxs)(a.MyZ, {
                            width: g.SY,
                            activeSlide: n,
                            children: [
                                (0, r.jsx)(
                                    a.Mi4,
                                    {
                                        id: g.EK.SELECT_GAME,
                                        children: (0, r.jsx)(c.Z, {}),
                                    },
                                    g.EK.SELECT_GAME,
                                ),
                                (0, r.jsx)(
                                    a.Mi4,
                                    {
                                        id: g.EK.SERVER_SETTINGS,
                                        children: (0, r.jsx)(u.Z, {}),
                                    },
                                    g.EK.SERVER_SETTINGS,
                                ),
                            ],
                        }),
                    }),
                }),
                (0, r.jsx)("div", { ref: (e) => t(e) }),
            ],
        }),
    );
}
function h(e) {
    let { analyticsLocations: n } = (0, l.ZP)();
    return (
        (0, s.lY)(e.guildId, n, e.analyticsLocation),
        (0, r.jsx)(l.Gt, {
            value: n,
            children: (0, r.jsx)(f.BT, v(p({}, e), { children: (0, r.jsx)(j, p({}, e)) })),
        })
    );
}
