t.d(n, { default: () => _ });
var r = t(951288),
    i = t(793030),
    l = t(481060),
    a = t(906732),
    o = t(678328),
    s = t(560467),
    d = t(183369),
    c = t(473682),
    u = t(401561),
    g = t(388032),
    m = t(831119);
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
function f(e) {
    let { step: n, setFooterNode: t } = (0, d.aj)(),
        { title: a, subtitle: f } = (function (e) {
            switch (e) {
                case c.Vb.SELECT_GAME:
                    return {
                        title: g.intl.string(u.default.DG1SHB),
                        subtitle: g.intl.string(u.default.hkWuWF),
                    };
                case c.Vb.SERVER_SETTINGS:
                    return { title: g.intl.string(u.default.Eonh9P) };
            }
        })(n);
    return (0, r.jsxs)(
        i.IX,
        x(p({}, e), {
            size: "lg",
            children: [
                (0, r.jsx)(i.xBx, {
                    title: a,
                    subtitle: f,
                }),
                (0, r.jsx)(l.zJl, {
                    className: m.modalContent,
                    style: { width: c.M4 },
                    children: (0, r.jsx)("div", {
                        style: { padding: c.hK },
                        children: (0, r.jsxs)(l.MyZ, {
                            width: c.Ne,
                            activeSlide: n,
                            children: [
                                (0, r.jsx)(
                                    l.Mi4,
                                    {
                                        id: c.Vb.SELECT_GAME,
                                        children: (0, r.jsx)(o.Z, {}),
                                    },
                                    c.Vb.SELECT_GAME,
                                ),
                                (0, r.jsx)(
                                    l.Mi4,
                                    {
                                        id: c.Vb.SERVER_SETTINGS,
                                        children: (0, r.jsx)(s.Z, {}),
                                    },
                                    c.Vb.SERVER_SETTINGS,
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
function _(e) {
    let { analyticsLocations: n } = (0, a.ZP)();
    return (0, r.jsx)(a.Gt, {
        value: n,
        children: (0, r.jsx)(d.KO, x(p({}, e), { children: (0, r.jsx)(f, p({}, e)) })),
    });
}
