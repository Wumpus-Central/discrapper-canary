n.d(t, { I3: () => s });
var i = n(64700),
    l = n(811024),
    a = n(550151),
    r = n(985018);
function s(e) {
    let { embeddedActivity: t, joinability: n, currentEmbeddedActivity: s, channel: o } = e;
    return i.useMemo(
        () =>
            (function (e) {
                let { embeddedActivity: t, joinability: n, currentEmbeddedActivity: i, channel: s } = e,
                    o = null == t,
                    d = {
                        disabled: !1,
                        isJoinAction: !o,
                        text: o ? r.intl.string(r.t.RscU7I) : r.intl.string(r.t.sqe0hj),
                        tooltip: void 0,
                    },
                    c = (0, l.pE)(s);
                if (null != t && null != i && t.launchId === i.launchId)
                    return { ...d, disabled: !0, text: r.intl.string(r.t.DPfdsq), tooltip: void 0 };
                if (o) return { ...d, disabled: !c, tooltip: c ? void 0 : r.intl.string(r.t.f41E1g) };
                if (null != n && n !== a.Gy.CAN_JOIN) {
                    let e;
                    switch (n) {
                        case a.Gy.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION:
                            e = r.intl.string(r.t.hHGrWz);
                            break;
                        case a.Gy.ACTIVITY_AGE_GATED:
                            e = r.intl.string(r.t["4WuFRE"]);
                            break;
                        case a.Gy.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS:
                            e = r.intl.string(r.t.uGDCcw);
                            break;
                        case a.Gy.ACTIVITY_NOT_SUPPORTED_ON_OS:
                            e = r.intl.string(r.t.UXoQTp);
                            break;
                        case a.Gy.CHANNEL_FULL:
                            e = r.intl.string(r.t.rZfiNq);
                            break;
                        case a.Gy.NO_CHANNEL_CONNECT_PERMISSION:
                            e = r.intl.string(r.t.w5SAps);
                            break;
                        case a.Gy.NO_CHANNEL:
                        case a.Gy.NO_GUILD:
                        case a.Gy.NO_USER:
                        case a.Gy.IS_AFK_CHANNEL:
                            e = r.intl.string(r.t.Etp6uI);
                    }
                    return { ...d, disabled: !0, tooltip: e };
                }
                return d;
            })({ embeddedActivity: t, joinability: n, currentEmbeddedActivity: s, channel: o }),
        [t, n, s, o],
    );
}
