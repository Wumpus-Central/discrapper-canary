n.d(t, { NL: () => s });
var i = n(192379),
    l = n(595519),
    a = n(527805),
    r = n(388032);
function s(e) {
    let { embeddedActivity: t, joinability: n, currentEmbeddedActivity: s, channel: o } = e;
    return i.useMemo(
        () =>
            (function (e) {
                let { embeddedActivity: t, joinability: n, currentEmbeddedActivity: i, channel: s } = e,
                    o = null == t,
                    c = {
                        disabled: !1,
                        isJoinAction: !o,
                        text: o ? r.intl.string(r.t.I0v0Qk) : r.intl.string(r.t.sqe0ho),
                        tooltip: void 0
                    },
                    d = (0, l.WS)(s);
                if (null != t && null != i && t.launchId === i.launchId)
                    return {
                        ...c,
                        disabled: !0,
                        text: r.intl.string(r.t.DPfdsr),
                        tooltip: r.intl.string(r.t.wJNK8P)
                    };
                if (o)
                    return {
                        ...c,
                        disabled: !d,
                        tooltip: d ? void 0 : r.intl.string(r.t.f41E1t)
                    };
                if (null != n && n !== a.Fw.CAN_JOIN) {
                    let e;
                    switch (n) {
                        case a.Fw.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION:
                            e = r.intl.string(r.t.hHGrW1);
                            break;
                        case a.Fw.ACTIVITY_AGE_GATED:
                            e = r.intl.string(r.t['4WuFRE']);
                            break;
                        case a.Fw.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS:
                            e = r.intl.string(r.t.uGDCc3);
                            break;
                        case a.Fw.ACTIVITY_NOT_SUPPORTED_ON_OS:
                            e = r.intl.string(r.t.UXoQTk);
                            break;
                        case a.Fw.CHANNEL_FULL:
                            e = r.intl.string(r.t.rZfiNj);
                            break;
                        case a.Fw.NO_CHANNEL_CONNECT_PERMISSION:
                            e = r.intl.string(r.t.w5SApq);
                            break;
                        case a.Fw.NO_CHANNEL:
                        case a.Fw.NO_GUILD:
                        case a.Fw.NO_USER:
                        case a.Fw.IS_AFK_CHANNEL:
                            e = r.intl.string(r.t.Etp6uL);
                    }
                    return {
                        ...c,
                        disabled: !0,
                        tooltip: e
                    };
                }
                return c;
            })({
                embeddedActivity: t,
                joinability: n,
                currentEmbeddedActivity: s,
                channel: o
            }),
        [t, n, s, o]
    );
}
