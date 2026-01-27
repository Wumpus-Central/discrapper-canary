n.d(t, {
    I3: () => c,
});
var r = n(64700),
    i = n(811024),
    l = n(550151),
    a = n(985018);

function s(e) {
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

function o(e, t) {
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
                        text: u ? a.intl.string(a.t.RscU7I) : a.intl.string(a.t.sqe0hj),
                        tooltip: void 0,
                    },
                    p = (0, i.pE)(c);
                if (null != t && null != r && t.launchId === r.launchId)
                    return o(s({}, d), {
                        disabled: !0,
                        text: a.intl.string(a.t.DPfdsq),
                        tooltip: void 0,
                    });
                if (u)
                    return o(s({}, d), {
                        disabled: !p,
                        tooltip: p ? void 0 : a.intl.string(a.t.f41E1g),
                    });
                if (null != n && n !== l.Gy.CAN_JOIN) {
                    let e;
                    switch (n) {
                        case l.Gy.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION:
                            e = a.intl.string(a.t.hHGrWz);
                            break;
                        case l.Gy.ACTIVITY_AGE_GATED:
                            e = a.intl.string(a.t["4WuFRE"]);
                            break;
                        case l.Gy.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS:
                            e = a.intl.string(a.t.uGDCcw);
                            break;
                        case l.Gy.ACTIVITY_NOT_SUPPORTED_ON_OS:
                            e = a.intl.string(a.t.UXoQTp);
                            break;
                        case l.Gy.CHANNEL_FULL:
                            e = a.intl.string(a.t.rZfiNq);
                            break;
                        case l.Gy.NO_CHANNEL_CONNECT_PERMISSION:
                            e = a.intl.string(a.t.w5SAps);
                            break;
                        case l.Gy.NO_CHANNEL:
                        case l.Gy.NO_GUILD:
                        case l.Gy.NO_USER:
                        case l.Gy.IS_AFK_CHANNEL:
                            e = a.intl.string(a.t.Etp6uI);
                    }
                    return o(s({}, d), {
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
