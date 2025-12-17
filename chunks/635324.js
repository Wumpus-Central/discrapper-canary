n(388685);
var i = n(54381),
    r = n(149765),
    a = n(481060),
    s = n(570140),
    o = n(700785);
__OVERLAY__ &&
    s.Z.subscribe("OVERLAY_OAUTH2_AUTHORIZE_MODAL_OPEN", function (e) {
        var {
                clientId: t,
                authorizeProps: { authorizations: l, permissions: c },
            } = e,
            d = (function (e, t) {
                if (null == e) return {};
                var n,
                    i,
                    r = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            i,
                            r = {},
                            a = Object.keys(e);
                        for (i = 0; i < a.length; i++) (n = a[i]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                        return r;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    for (i = 0; i < a.length; i++)
                        (n = a[i]),
                            !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
                }
                return r;
            })(e.authorizeProps, ["authorizations", "permissions"]);
        let u = "OAuth2Authorize_".concat(t, "_").concat(d.guildId, "_").concat(d.channelId);
        function f(e) {
            let { location: n } = e;
            s.Z.dispatch({
                type: "OVERLAY_OAUTH2_AUTHORIZE_MODAL_CLOSE",
                clientId: t,
                location: n,
            });
        }
        let h = o.Hn;
        try {
            h = r.vB(null != c ? c : 0);
        } catch (e) {}
        (0, a.ZDy)(
            async () => {
                let { OAuth2AuthorizeModal: e } = await Promise.resolve().then(n.bind(n, 69580));
                return (t) => {
                    var n, r;
                    return (0, i.jsx)(
                        e,
                        ((n = (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {},
                                    i = Object.keys(n);
                                "function" == typeof Object.getOwnPropertySymbols &&
                                    (i = i.concat(
                                        Object.getOwnPropertySymbols(n).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                        }),
                                    )),
                                    i.forEach(function (t) {
                                        var i;
                                        (i = n[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: i,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0,
                                                  })
                                                : (e[t] = i);
                                    });
                            }
                            return e;
                        })({}, t, d)),
                        (r = r =
                            {
                                authorizations: new Map(l),
                                permissions: h,
                                callback: f,
                            }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var i = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, i);
                                  }
                                  return n;
                              })(Object(r)).forEach(function (e) {
                                  Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e));
                              }),
                        n),
                    );
                };
            },
            {
                modalKey: u,
                onCloseRequest: () => {
                    (0, a.Mr3)(u), f({});
                },
            },
        );
    });
