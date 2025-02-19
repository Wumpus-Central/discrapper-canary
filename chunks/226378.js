n.d(t, { NL: () => c });
var r = n(192379),
    i = n(595519),
    a = n(527805),
    o = n(388032);
function l(e) {
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
    let { embeddedActivity: t, joinability: n, currentEmbeddedActivity: c, channel: d } = e;
    return r.useMemo(
        () =>
            (function (e) {
                let { embeddedActivity: t, joinability: n, currentEmbeddedActivity: r, channel: c } = e,
                    d = null == t,
                    u = {
                        disabled: !1,
                        isJoinAction: !d,
                        text: d ? o.NW.string(o.t.I0v0Qk) : o.NW.string(o.t.sqe0ho),
                        tooltip: void 0
                    },
                    p = (0, i.WS)(c);
                if (null != t && null != r && t.launchId === r.launchId)
                    return s(l({}, u), {
                        disabled: !0,
                        text: o.NW.string(o.t.DPfdsr),
                        tooltip: o.NW.string(o.t.wJNK8P)
                    });
                if (d)
                    return s(l({}, u), {
                        disabled: !p,
                        tooltip: p ? void 0 : o.NW.string(o.t.f41E1t)
                    });
                if (null != n && n !== a.Fw.CAN_JOIN) {
                    let e;
                    switch (n) {
                        case a.Fw.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION:
                            e = o.NW.string(o.t.hHGrW1);
                            break;
                        case a.Fw.ACTIVITY_AGE_GATED:
                            e = o.NW.string(o.t['4WuFRE']);
                            break;
                        case a.Fw.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS:
                            e = o.NW.string(o.t.uGDCc3);
                            break;
                        case a.Fw.ACTIVITY_NOT_SUPPORTED_ON_OS:
                            e = o.NW.string(o.t.UXoQTk);
                            break;
                        case a.Fw.CHANNEL_FULL:
                            e = o.NW.string(o.t.rZfiNj);
                            break;
                        case a.Fw.NO_CHANNEL_CONNECT_PERMISSION:
                            e = o.NW.string(o.t.w5SApq);
                            break;
                        case a.Fw.NO_CHANNEL:
                        case a.Fw.NO_GUILD:
                        case a.Fw.NO_USER:
                        case a.Fw.IS_AFK_CHANNEL:
                            e = o.NW.string(o.t.Etp6uL);
                    }
                    return s(l({}, u), {
                        disabled: !0,
                        tooltip: e
                    });
                }
                return u;
            })({
                embeddedActivity: t,
                joinability: n,
                currentEmbeddedActivity: c,
                channel: d
            }),
        [t, n, c, d]
    );
}
