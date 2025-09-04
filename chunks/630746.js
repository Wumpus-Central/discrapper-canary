t.d(n, { default: () => x });
var a = t(951288),
    i = t(481060),
    r = t(906732),
    l = t(678328),
    s = t(560467),
    o = t(183369),
    c = t(473682),
    d = t(831119);
function u(e) {
    for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {},
            a = Object.keys(t);
        "function" == typeof Object.getOwnPropertySymbols &&
            (a = a.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                }),
            )),
            a.forEach(function (n) {
                var a;
                (a = t[n]),
                    n in e
                        ? Object.defineProperty(e, n, {
                              value: a,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[n] = a);
            });
    }
    return e;
}
function m(e, n) {
    return (
        (n = null != n ? n : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : (function (e, n) {
                  var t = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var a = Object.getOwnPropertySymbols(e);
                      t.push.apply(t, a);
                  }
                  return t;
              })(Object(n)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              }),
        e
    );
}
function p(e) {
    let { step: n, setFooterNode: t } = (0, o.aj)();
    return (0, a.jsxs)(
        i.Y0X,
        m(u({ className: d.modal }, e), {
            size: i.CgR.DYNAMIC,
            parentComponent: "PortkeySetupModal",
            children: [
                (0, a.jsx)(i.hzk, {
                    className: d.modalContent,
                    style: { width: c.M4 },
                    scrollbarType: "none",
                    children: (0, a.jsx)("div", {
                        style: { padding: c.hK },
                        children: (0, a.jsxs)(i.MyZ, {
                            width: c.Ne,
                            activeSlide: n,
                            children: [
                                (0, a.jsx)(
                                    i.Mi4,
                                    {
                                        id: c.Vb.SELECT_GAME,
                                        children: (0, a.jsx)(l.Z, {}),
                                    },
                                    c.Vb.SELECT_GAME,
                                ),
                                (0, a.jsx)(
                                    i.Mi4,
                                    {
                                        id: c.Vb.SERVER_SETTINGS,
                                        children: (0, a.jsx)(s.Z, {}),
                                    },
                                    c.Vb.SERVER_SETTINGS,
                                ),
                            ],
                        }),
                    }),
                }),
                (0, a.jsx)("div", { ref: (e) => t(e) }),
                (0, a.jsx)(i.olH, {
                    onClick: e.onClose,
                    className: d.closeButton,
                }),
            ],
        }),
    );
}
function x(e) {
    let { analyticsLocations: n } = (0, r.ZP)();
    return (0, a.jsx)(r.Gt, {
        value: n,
        children: (0, a.jsx)(o.KO, m(u({}, e), { children: (0, a.jsx)(p, u({}, e)) })),
    });
}
