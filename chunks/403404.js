n.d(t, { Z: () => d });
var r = n(200651);
n(192379);
var i = n(481060),
    a = n(424602),
    o = n(397698),
    l = n(776862),
    s = n(701488),
    c = n(981631);
function d(e) {
    let { channel: t, guildId: d, locationObject: u, openInPopout: p, initialSelectedApplicationId: m, initialSlide: f = s.ag.DIRECTORY, enableSelectedTextChannelInvite: h = !1, analyticsLocations: g, opensAppLauncherModal: _ = !1 } = e,
        b = g.length > 0 ? g[g.length - 1] : 'open-activity-shelf',
        { enabled: v } = a.m1.getCurrentConfig({ location: b }, { autoTrackExposure: !1 });
    if (_ && v) {
        (0, o.Z)({
            openInPopout: p,
            context:
                null != t
                    ? {
                          type: 'channel',
                          channel: t
                      }
                    : { type: 'contextless' },
            analyticsLocation: b
        });
        return;
    }
    p && (0, l.Z)(c.KJ3.CHANNEL_CALL_POPOUT);
    let y = p ? i.u1M : i.z1l;
    return (0, i.ZDy)(
        async () => {
            let { default: e } = await Promise.all([n.e('69057'), n.e('9335')]).then(n.bind(n, 471840));
            return (n) => {
                var i, a;
                return (0, r.jsx)(
                    e,
                    ((i = (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                r = Object.keys(n);
                            'function' == typeof Object.getOwnPropertySymbols &&
                                (r = r.concat(
                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                    })
                                )),
                                r.forEach(function (t) {
                                    var r;
                                    (r = n[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: r,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0
                                              })
                                            : (e[t] = r);
                                });
                        }
                        return e;
                    })({}, n)),
                    (a = a =
                        {
                            channel: t,
                            guildId: d,
                            locationObject: u,
                            initialSlide: f,
                            initialSelectedApplicationId: m,
                            enableSelectedTextChannelInvite: h,
                            analyticsLocations: g
                        }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(a))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var r = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, r);
                              }
                              return n;
                          })(Object(a)).forEach(function (e) {
                              Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(a, e));
                          }),
                    i)
                );
            };
        },
        {
            modalKey: s.AC,
            contextKey: y
        }
    );
}
