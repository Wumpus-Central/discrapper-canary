t.d(n, { default: () => j });
var r = t(951288),
    i = t(257465),
    l = t(213734),
    a = t(37148),
    o = t(481060),
    s = t(906732),
    c = t(678328),
    d = t(560467),
    u = t(183369),
    m = t(473682),
    p = t(401561),
    g = t(388032),
    x = t(831119);
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
function _(e, n) {
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
function h(e) {
    let { step: n, setFooterNode: t } = (0, u.aj)(),
        { title: s, subtitle: h } = (function (e) {
            switch (e) {
                case m.Vb.SELECT_GAME:
                    return {
                        title: g.intl.string(p.default.DG1SHB),
                        subtitle: g.intl.string(p.default.hkWuWF),
                    };
                case m.Vb.SERVER_SETTINGS:
                    return { title: g.intl.string(p.default.Eonh9P) };
            }
        })(n);
    return (0, r.jsxs)(
        i.IX,
        _(f({}, e), {
            size: "lg",
            children: [
                (0, r.jsx)(a.x, {
                    title: s,
                    subtitle: h,
                }),
                (0, r.jsx)(o.zJl, {
                    className: x.modalContent,
                    style: { width: m.M4 },
                    children: (0, r.jsx)("div", {
                        style: { padding: m.hK },
                        children: (0, r.jsxs)(o.MyZ, {
                            width: m.Ne,
                            activeSlide: n,
                            children: [
                                (0, r.jsx)(
                                    o.Mi4,
                                    {
                                        id: m.Vb.SELECT_GAME,
                                        children: (0, r.jsx)(c.Z, {}),
                                    },
                                    m.Vb.SELECT_GAME,
                                ),
                                (0, r.jsx)(
                                    o.Mi4,
                                    {
                                        id: m.Vb.SERVER_SETTINGS,
                                        children: (0, r.jsx)(d.Z, {}),
                                    },
                                    m.Vb.SERVER_SETTINGS,
                                ),
                            ],
                        }),
                    }),
                }),
                (0, r.jsx)(l.m, { children: (0, r.jsx)("div", { ref: (e) => t(e) }) }),
            ],
        }),
    );
}
function j(e) {
    let { analyticsLocations: n } = (0, s.ZP)();
    return (0, r.jsx)(s.Gt, {
        value: n,
        children: (0, r.jsx)(u.KO, _(f({}, e), { children: (0, r.jsx)(h, f({}, e)) })),
    });
}
