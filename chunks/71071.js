n(896048);
var i = n(627968),
    r = n(136722),
    s = n(397927),
    l = n(73153),
    o = n(488926);
__OVERLAY__ &&
    l.h.subscribe("OVERLAY_OAUTH2_AUTHORIZE_MODAL_OPEN", function (e) {
        let { clientId: t, authorizeProps: a } = e,
            { authorizations: c, permissions: d } = a,
            u = (function (e, t) {
                if (null == e) return {};
                var n,
                    i,
                    r,
                    s = {};
                if ("u" > typeof Reflect && Reflect.ownKeys) {
                    for (r = 0, n = Reflect.ownKeys(e); r < n.length; r++)
                        (i = n[r]),
                            !(t.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(e, i) && (s[i] = e[i]);
                    return s;
                }
                if (
                    ((s = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            i,
                            r = {},
                            s = Object.getOwnPropertyNames(e);
                        for (i = 0; i < s.length; i++)
                            (n = s[i]),
                                !(t.indexOf(n) >= 0) &&
                                    Object.prototype.propertyIsEnumerable.call(e, n) &&
                                    (r[n] = e[n]);
                        return r;
                    })(e, t)),
                    Object.getOwnPropertySymbols)
                )
                    for (r = 0, n = Object.getOwnPropertySymbols(e); r < n.length; r++)
                        (i = n[r]),
                            !(t.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(e, i) && (s[i] = e[i]);
                return s;
            })(a, ["authorizations", "permissions"]),
            h = "OAuth2Authorize_".concat(t, "_").concat(u.guildId, "_").concat(u.channelId);
        function p(e) {
            let { location: n } = e;
            l.h.dispatch({
                type: "OVERLAY_OAUTH2_AUTHORIZE_MODAL_CLOSE",
                clientId: t,
                location: n,
            });
        }
        let f = o.x3;
        try {
            f = r.iu(null != d ? d : 0);
        } catch (e) {}
        (0, s.mMO)(
            async () => {
                let { OAuth2AuthorizeModal: e } = await Promise.resolve().then(n.bind(n, 200330));
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
                        })({}, t, u)),
                        (r = r =
                            {
                                authorizations: new Map(c),
                                permissions: f,
                                callback: p,
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
                modalKey: h,
                onCloseRequest: () => {
                    (0, s.OoC)(h), p({});
                },
            },
        );
    });
