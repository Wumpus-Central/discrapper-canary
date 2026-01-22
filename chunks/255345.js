n.d(t, {
    I3: () => d,
});
var r = n(64700),
    i = n(811024),
    a = n(550151),
    s = n(985018);

function o(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function l(e) {
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
                o(e, t, n[t]);
            });
    }
    return e;
}

function c(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}

function u(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : c(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function d(e) {
    let { embeddedActivity: t, joinability: n, currentEmbeddedActivity: i, channel: a } = e;
    return r.useMemo(
        () =>
            f({
                embeddedActivity: t,
                joinability: n,
                currentEmbeddedActivity: i,
                channel: a,
            }),
        [t, n, i, a],
    );
}

function f(e) {
    let { embeddedActivity: t, joinability: n, currentEmbeddedActivity: r, channel: o } = e,
        c = null == t,
        d = {
            disabled: !1,
            isJoinAction: !c,
            text: c ? s.intl.string(s.t.RscU7I) : s.intl.string(s.t.sqe0hj),
            tooltip: void 0,
        },
        f = (0, i.pE)(o);
    if (null != t && null != r && t.launchId === r.launchId)
        return u(l({}, d), {
            disabled: !0,
            text: s.intl.string(s.t.DPfdsq),
            tooltip: void 0,
        });
    if (c)
        return u(l({}, d), {
            disabled: !f,
            tooltip: f ? void 0 : s.intl.string(s.t.f41E1g),
        });
    if (null != n && n !== a.Gy.CAN_JOIN) {
        let e;
        switch (n) {
            case a.Gy.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION:
                e = s.intl.string(s.t.hHGrWz);
                break;
            case a.Gy.ACTIVITY_AGE_GATED:
                e = s.intl.string(s.t["4WuFRE"]);
                break;
            case a.Gy.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS:
                e = s.intl.string(s.t.uGDCcw);
                break;
            case a.Gy.ACTIVITY_NOT_SUPPORTED_ON_OS:
                e = s.intl.string(s.t.UXoQTp);
                break;
            case a.Gy.CHANNEL_FULL:
                e = s.intl.string(s.t.rZfiNq);
                break;
            case a.Gy.NO_CHANNEL_CONNECT_PERMISSION:
                e = s.intl.string(s.t.w5SAps);
                break;
            case a.Gy.NO_CHANNEL:
            case a.Gy.NO_GUILD:
            case a.Gy.NO_USER:
            case a.Gy.IS_AFK_CHANNEL:
                e = s.intl.string(s.t.Etp6uI);
        }
        return u(l({}, d), {
            disabled: !0,
            tooltip: e,
        });
    }
    return d;
}
