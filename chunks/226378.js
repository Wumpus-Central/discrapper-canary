n.d(t, {
    NL: function () {
        return c;
    }
});
var i,
    r,
    l = n(192379),
    a = n(595519),
    o = n(527805),
    s = n(388032);
function c(e) {
    let { embeddedActivity: t, joinability: n, currentEmbeddedActivity: i, channel: r } = e;
    return l.useMemo(
        () =>
            (function (e) {
                let { embeddedActivity: t, joinability: n, currentEmbeddedActivity: i, channel: r } = e,
                    l = null == t,
                    c = {
                        disabled: !1,
                        isJoinAction: !l,
                        text: l ? s.intl.string(s.t.I0v0Qk) : s.intl.string(s.t.sqe0ho),
                        tooltip: void 0
                    },
                    d = (0, a.WS)(r);
                if (null != t && null != i && t.launchId === i.launchId)
                    return {
                        ...c,
                        disabled: !0,
                        text: s.intl.string(s.t.DPfdsr),
                        tooltip: s.intl.string(s.t.wJNK8P)
                    };
                if (l)
                    return {
                        ...c,
                        disabled: !d,
                        tooltip: d ? void 0 : s.intl.string(s.t.f41E1t)
                    };
                if (null != n && n !== o.Fw.CAN_JOIN) {
                    let e;
                    switch (n) {
                        case o.Fw.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION:
                            e = s.intl.string(s.t.hHGrW1);
                            break;
                        case o.Fw.ACTIVITY_AGE_GATED:
                            e = s.intl.string(s.t['4WuFRE']);
                            break;
                        case o.Fw.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS:
                            e = s.intl.string(s.t.uGDCc3);
                            break;
                        case o.Fw.ACTIVITY_NOT_SUPPORTED_ON_OS:
                            e = s.intl.string(s.t.UXoQTk);
                            break;
                        case o.Fw.CHANNEL_FULL:
                            e = s.intl.string(s.t.rZfiNj);
                            break;
                        case o.Fw.NO_CHANNEL_CONNECT_PERMISSION:
                            e = s.intl.string(s.t.w5SApq);
                            break;
                        case o.Fw.NO_CHANNEL:
                        case o.Fw.NO_GUILD:
                        case o.Fw.NO_USER:
                        case o.Fw.IS_AFK_CHANNEL:
                            e = s.intl.string(s.t.Etp6uL);
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
                currentEmbeddedActivity: i,
                channel: r
            }),
        [t, n, i, r]
    );
}
((i = r || (r = {}))[(i.ACTIVE = 0)] = 'ACTIVE'), (i[(i.ENDED = 1)] = 'ENDED');
