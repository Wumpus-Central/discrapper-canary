n.d(t, { l: () => h });
var r = n(54381),
    i = n(990547),
    s = n(481060),
    a = n(82554),
    l = n(726521),
    o = n(185625),
    c = n(388032);
function u(e) {
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
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function d(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function h(e, t) {
    let h = (h) => {
        let f = async () => {
                await (0, o.yL)(e, h);
            },
            g = async (t) => await (0, o.RV)(e, h, t),
            m = (n) => {
                let r = null == n ? void 0 : n.token;
                e === a.BM.MESSAGE
                    ? (0, l.eE)(r, t)
                    : e === a.BM.USER
                      ? (0, l.JM)(r, t)
                      : e === a.BM.GUILD
                        ? (0, l.FO)(r, t)
                        : e === a.BM.MEDIA_TAKEDOWN && (0, l.XY)(r, t);
            };
        f(),
            (0, s.ZDy)(
                async () => {
                    let { default: e } = await n.e("56499").then(n.bind(n, 433570));
                    return (t) =>
                        (0, r.jsx)(
                            e,
                            d(u({}, t), {
                                onFormSubmit: g,
                                onResend: f,
                                onSuccess: m,
                                headerText: c.intl.string(c.t.H3Q7U8),
                                confirmButtonText: c.intl.string(c.t["13ofGu"]),
                                impression: { impressionName: i.ImpressionNames.URF_CONFIRM_EMAIL_CODE },
                            }),
                        );
                },
                { onCloseCallback: t },
            );
    };
    return () => {
        (0, s.pTH)(),
            (0, s.ZDy)(
                async () => {
                    let { default: t } = await n.e("20670").then(n.bind(n, 993018));
                    return (n) =>
                        (0, r.jsx)(
                            t,
                            d(u({}, n), {
                                onSuccess: h,
                                headerText: c.intl.string(c.t.ZLRYGU),
                                confirmButtonText: c.intl.string(c.t.PDTjLN),
                                helperText: e === a.BM.MEDIA_TAKEDOWN ? c.intl.string(c.t.jt3z8f) : void 0,
                            }),
                        );
                },
                { onCloseCallback: t },
            );
    };
}
