n.d(t, { NL: () => c });
var r = n(192379),
    i = n(595519),
    a = n(527805),
    l = n(388032);
function o(e) {
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
}
function s(e, t) {
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
function c(e) {
    let { embeddedActivity: t, joinability: n, currentEmbeddedActivity: c, channel: u } = e;
    return r.useMemo(
        () =>
            (function (e) {
                let { embeddedActivity: t, joinability: n, currentEmbeddedActivity: r, channel: c } = e,
                    u = null == t,
                    d = {
                        disabled: !1,
                        isJoinAction: !u,
                        text: u ? l.NW.string(l.t.I0v0Qk) : l.NW.string(l.t.sqe0ho),
                        tooltip: void 0
                    },
                    p = (0, i.WS)(c);
                if (null != t && null != r && t.launchId === r.launchId)
                    return s(o({}, d), {
                        disabled: !0,
                        text: l.NW.string(l.t.DPfdsr),
                        tooltip: l.NW.string(l.t.wJNK8P)
                    });
                if (u)
                    return s(o({}, d), {
                        disabled: !p,
                        tooltip: p ? void 0 : l.NW.string(l.t.f41E1t)
                    });
                if (null != n && n !== a.Fw.CAN_JOIN) {
                    let e;
                    switch (n) {
                        case a.Fw.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION:
                            e = l.NW.string(l.t.hHGrW1);
                            break;
                        case a.Fw.ACTIVITY_AGE_GATED:
                            e = l.NW.string(l.t['4WuFRE']);
                            break;
                        case a.Fw.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS:
                            e = l.NW.string(l.t.uGDCc3);
                            break;
                        case a.Fw.ACTIVITY_NOT_SUPPORTED_ON_OS:
                            e = l.NW.string(l.t.UXoQTk);
                            break;
                        case a.Fw.CHANNEL_FULL:
                            e = l.NW.string(l.t.rZfiNj);
                            break;
                        case a.Fw.NO_CHANNEL_CONNECT_PERMISSION:
                            e = l.NW.string(l.t.w5SApq);
                            break;
                        case a.Fw.NO_CHANNEL:
                        case a.Fw.NO_GUILD:
                        case a.Fw.NO_USER:
                        case a.Fw.IS_AFK_CHANNEL:
                            e = l.NW.string(l.t.Etp6uL);
                    }
                    return s(o({}, d), {
                        disabled: !0,
                        tooltip: e
                    });
                }
                return d;
            })({
                embeddedActivity: t,
                joinability: n,
                currentEmbeddedActivity: c,
                channel: u
            }),
        [t, n, c, u]
    );
}
