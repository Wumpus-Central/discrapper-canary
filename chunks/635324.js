n(47120);
var i = n(200651),
    r = n(149765),
    o = n(481060),
    a = n(570140),
    s = n(700785);
__OVERLAY__ &&
    a.Z.subscribe('OVERLAY_OAUTH2_AUTHORIZE_MODAL_OPEN', function (e) {
        var {
                clientId: t,
                authorizeProps: { authorizations: c, permissions: d }
            } = e,
            l = (function (e, t) {
                if (null == e) return {};
                var n,
                    i,
                    r = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            i,
                            r = {},
                            o = Object.keys(e);
                        for (i = 0; i < o.length; i++) (n = o[i]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                        return r;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (i = 0; i < o.length; i++) (n = o[i]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
                }
                return r;
            })(e.authorizeProps, ['authorizations', 'permissions']);
        let u = 'OAuth2Authorize_'.concat(t, '_').concat(l.guildId, '_').concat(l.channelId);
        function _(e) {
            let { location: n } = e;
            a.Z.dispatch({
                type: 'OVERLAY_OAUTH2_AUTHORIZE_MODAL_CLOSE',
                clientId: t,
                location: n
            });
        }
        let f = s.Hn;
        try {
            f = r.vB(null != d ? d : 0);
        } catch (e) {}
        (0, o.ZDy)(
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
                                'function' == typeof Object.getOwnPropertySymbols &&
                                    (i = i.concat(
                                        Object.getOwnPropertySymbols(n).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                        })
                                    )),
                                    i.forEach(function (t) {
                                        var i;
                                        (i = n[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: i,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0
                                                  })
                                                : (e[t] = i);
                                    });
                            }
                            return e;
                        })({}, t, l)),
                        (r = r =
                            {
                                authorizations: new Map(c),
                                permissions: f,
                                callback: _
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
                        n)
                    );
                };
            },
            {
                modalKey: u,
                onCloseRequest: () => {
                    (0, o.Mr3)(u), _({});
                }
            }
        );
    });
