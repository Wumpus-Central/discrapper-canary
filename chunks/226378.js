n.d(t, { NL: () => c });
var r = n(647438),
    i = n(595519),
    l = n(527805),
    o = n(388032);
function a(e) {
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
                        text: u ? o.intl.string(o.t.I0v0Qk) : o.intl.string(o.t.sqe0ho),
                        tooltip: void 0,
                    },
                    p = (0, i.WS)(c);
                if (null != t && null != r && t.launchId === r.launchId)
                    return s(a({}, d), {
                        disabled: !0,
                        text: o.intl.string(o.t.DPfdsr),
                        tooltip: o.intl.string(o.t.wJNK8P),
                    });
                if (u)
                    return s(a({}, d), {
                        disabled: !p,
                        tooltip: p ? void 0 : o.intl.string(o.t.f41E1t),
                    });
                if (null != n && n !== l.Fw.CAN_JOIN) {
                    let e;
                    switch (n) {
                        case l.Fw.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION:
                            e = o.intl.string(o.t.hHGrW1);
                            break;
                        case l.Fw.ACTIVITY_AGE_GATED:
                            e = o.intl.string(o.t["4WuFRE"]);
                            break;
                        case l.Fw.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS:
                            e = o.intl.string(o.t.uGDCc3);
                            break;
                        case l.Fw.ACTIVITY_NOT_SUPPORTED_ON_OS:
                            e = o.intl.string(o.t.UXoQTk);
                            break;
                        case l.Fw.CHANNEL_FULL:
                            e = o.intl.string(o.t.rZfiNj);
                            break;
                        case l.Fw.NO_CHANNEL_CONNECT_PERMISSION:
                            e = o.intl.string(o.t.w5SApq);
                            break;
                        case l.Fw.NO_CHANNEL:
                        case l.Fw.NO_GUILD:
                        case l.Fw.NO_USER:
                        case l.Fw.IS_AFK_CHANNEL:
                            e = o.intl.string(o.t.Etp6uL);
                    }
                    return s(a({}, d), {
                        disabled: !0,
                        tooltip: e,
                    });
                }
                return d;
            })({
                embeddedActivity: t,
                joinability: n,
                currentEmbeddedActivity: c,
                channel: u,
            }),
        [t, n, c, u],
    );
}
