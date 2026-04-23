n.d(t, { I3: () => r });
var i = n(64700),
    l = n(811024),
    a = n(550151),
    s = n(985018);
function r(e) {
    let { embeddedActivity: t, joinability: n, currentEmbeddedActivity: r, channel: o } = e;
    return i.useMemo(
        () =>
            (function (e) {
                let { embeddedActivity: t, joinability: n, currentEmbeddedActivity: i, channel: r } = e,
                    o = null == t,
                    d = {
                        disabled: !1,
                        isJoinAction: !o,
                        text: o ? s.intl.string(s.t.RscU7I) : s.intl.string(s.t.sqe0hj),
                        tooltip: void 0,
                    },
                    c = (0, l.pE)(r);
                if (null != t && null != i && t.launchId === i.launchId)
                    return { ...d, disabled: !0, text: s.intl.string(s.t.DPfdsq), tooltip: void 0 };
                if (o) return { ...d, disabled: !c, tooltip: c ? void 0 : s.intl.string(s.t.f41E1g) };
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
                    return { ...d, disabled: !0, tooltip: e };
                }
                return d;
            })({ embeddedActivity: t, joinability: n, currentEmbeddedActivity: r, channel: o }),
        [t, n, r, o],
    );
}
