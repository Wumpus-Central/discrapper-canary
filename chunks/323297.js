t.d(n, { default: () => v });
var r = t(951288),
    i = t(793030),
    l = t(481060),
    a = t(906732),
    o = t(899789),
    s = t(796724),
    d = t(343312),
    c = t(619733),
    u = t(45765),
    g = t(388032),
    m = t(487569);
function f(e) {
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
function x(e, n) {
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
function p(e) {
    let { step: n, setFooterNode: t } = (0, d.JL)(),
        { title: a, subtitle: p } = (function (e) {
            switch (e) {
                case c.EK.SELECT_GAME:
                    return {
                        title: g.intl.string(u.default["3vWDMz"]),
                        subtitle: g.intl.string(u.default.Az5bjo),
                    };
                case c.EK.SERVER_SETTINGS:
                    return { title: g.intl.string(u.default["RLGW9/"]) };
            }
        })(n);
    return (0, r.jsxs)(
        i.IX,
        x(f({}, e), {
            size: "lg",
            children: [
                (0, r.jsx)(i.xBx, {
                    title: a,
                    subtitle: p,
                }),
                (0, r.jsx)(l.zJl, {
                    className: m.modalContent,
                    style: { width: c.AK },
                    children: (0, r.jsx)("div", {
                        style: { padding: c.TG },
                        children: (0, r.jsxs)(l.MyZ, {
                            width: c.SY,
                            activeSlide: n,
                            children: [
                                (0, r.jsx)(
                                    l.Mi4,
                                    {
                                        id: c.EK.SELECT_GAME,
                                        children: (0, r.jsx)(o.Z, {}),
                                    },
                                    c.EK.SELECT_GAME,
                                ),
                                (0, r.jsx)(
                                    l.Mi4,
                                    {
                                        id: c.EK.SERVER_SETTINGS,
                                        children: (0, r.jsx)(s.Z, {}),
                                    },
                                    c.EK.SERVER_SETTINGS,
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
function v(e) {
    let { analyticsLocations: n } = (0, a.ZP)();
    return (0, r.jsx)(a.Gt, {
        value: n,
        children: (0, r.jsx)(d.BT, x(f({}, e), { children: (0, r.jsx)(p, f({}, e)) })),
    });
}
