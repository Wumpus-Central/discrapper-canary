t.d(n, { default: () => b });
var r = t(54381);
t(473749);
var i = t(793030),
    l = t(481060),
    a = t(906732),
    o = t(494620),
    s = t(578756),
    d = t(853944),
    c = t(899789),
    u = t(796724),
    g = t(343312),
    m = t(619733),
    f = t(613275),
    x = t(388032),
    p = t(871404);
function v(e) {
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
function h(e, n) {
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
    let { step: n, setFooterNode: t } = (0, g.JL)(),
        a = (0, d.V)("GameServerSetupModal"),
        { title: s, subtitle: j } = (function (e) {
            switch (e) {
                case m.EK.SELECT_GAME:
                    return {
                        title: x.intl.string(f.default["3vWDMz"]),
                        subtitle: x.intl.string(f.default.Az5bjs),
                    };
                case m.EK.SERVER_SETTINGS:
                    return { title: x.intl.string(f.default.RLGW9z) };
            }
        })(n);
    return (0, r.jsxs)(
        i.IX,
        h(v({}, e), {
            size: "lg",
            children: [
                (0, r.jsx)(i.xBx, {
                    title: s,
                    subtitle: j,
                }),
                a &&
                    (0, r.jsx)("div", {
                        className: p.degradedWarningContainer,
                        children: (0, r.jsx)(o.Z, {
                            look: o.z.WARNING,
                            children: x.intl.format(f.default.XzXjK2, {}),
                        }),
                    }),
                (0, r.jsx)(l.zJl, {
                    className: p.modalContent,
                    style: { width: m.AK },
                    children: (0, r.jsx)("div", {
                        style: { padding: m.TG },
                        children: (0, r.jsxs)(l.MyZ, {
                            width: m.SY,
                            activeSlide: n,
                            children: [
                                (0, r.jsx)(
                                    l.Mi4,
                                    {
                                        id: m.EK.SELECT_GAME,
                                        children: (0, r.jsx)(c.Z, {}),
                                    },
                                    m.EK.SELECT_GAME,
                                ),
                                (0, r.jsx)(
                                    l.Mi4,
                                    {
                                        id: m.EK.SERVER_SETTINGS,
                                        children: (0, r.jsx)(u.Z, {}),
                                    },
                                    m.EK.SERVER_SETTINGS,
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
function b(e) {
    let { analyticsLocations: n } = (0, a.ZP)();
    return (
        (0, s.lY)(e.guildId, n, e.analyticsLocation),
        (0, r.jsx)(a.Gt, {
            value: n,
            children: (0, r.jsx)(g.BT, h(v({}, e), { children: (0, r.jsx)(j, v({}, e)) })),
        })
    );
}
