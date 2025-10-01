t.d(n, { default: () => _ });
var r = t(951288),
    i = t(793030),
    l = t(481060),
    a = t(906732),
    o = t(678328),
    s = t(560467),
    c = t(183369),
    d = t(473682),
    u = t(401561),
    m = t(388032),
    p = t(831119);
function g(e) {
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
    let { step: n, setFooterNode: t } = (0, c.aj)(),
        { title: a, subtitle: f } = (function (e) {
            switch (e) {
                case d.Vb.SELECT_GAME:
                    return {
                        title: m.intl.string(u.default.DG1SHB),
                        subtitle: m.intl.string(u.default.hkWuWF),
                    };
                case d.Vb.SERVER_SETTINGS:
                    return { title: m.intl.string(u.default.Eonh9P) };
            }
        })(n);
    return (0, r.jsxs)(
        i.IX,
        x(g({}, e), {
            size: "lg",
            children: [
                (0, r.jsx)(i.xBx, {
                    title: a,
                    subtitle: f,
                }),
                (0, r.jsx)(l.zJl, {
                    className: p.modalContent,
                    style: { width: d.M4 },
                    children: (0, r.jsx)("div", {
                        style: { padding: d.hK },
                        children: (0, r.jsxs)(l.MyZ, {
                            width: d.Ne,
                            activeSlide: n,
                            children: [
                                (0, r.jsx)(
                                    l.Mi4,
                                    {
                                        id: d.Vb.SELECT_GAME,
                                        children: (0, r.jsx)(o.Z, {}),
                                    },
                                    d.Vb.SELECT_GAME,
                                ),
                                (0, r.jsx)(
                                    l.Mi4,
                                    {
                                        id: d.Vb.SERVER_SETTINGS,
                                        children: (0, r.jsx)(s.Z, {}),
                                    },
                                    d.Vb.SERVER_SETTINGS,
                                ),
                            ],
                        }),
                    }),
                }),
                (0, r.jsx)(i.mzw, { children: (0, r.jsx)("div", { ref: (e) => t(e) }) }),
            ],
        }),
    );
}
function _(e) {
    let { analyticsLocations: n } = (0, a.ZP)();
    return (0, r.jsx)(a.Gt, {
        value: n,
        children: (0, r.jsx)(c.KO, x(g({}, e), { children: (0, r.jsx)(f, g({}, e)) })),
    });
}
